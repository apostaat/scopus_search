(ns scopus-search.core
  (:require [ring.adapter.jetty :as jetty]
            [ring.middleware.json :as json]
            [ring.middleware.params :as params]
            [ring.middleware.resource :as resource]
            [ring.util.response :as response]
            [ring.middleware.content-type :as content-type]
            [compojure.core :refer [defroutes GET POST]]
            [compojure.route :as route]
            [scopus-search.db :as db]
            [scopus-search.api :as api]
            [clojure.string :as str]
            [clojure.java.io :as io]
            [clojure.pprint :as pp]
            [clojure.java.jdbc :as jdbc])
  (:gen-class))

(defn dispatch-query-type
  [query]
  (if (coll? query)
    query
    (str/split query #",")))

(defn parse-params
  [request]
  (let [query (-> (get-in request [:params "word"])
                  not-empty)]
    (some->> query
             dispatch-query-type
             (mapv str/trim)
             (filterv not-empty)
             seq
             vec)))

(defn search-handler [request]
  (try
    (if-let  [{req-status   :status
               keywords     :query
               articles     :data :as results}
              (some-> request
                      parse-params
                      (api/search-scopus))]
      (if (= :success req-status)
        (do (db/save-articles keywords articles)
            {:status 200
             :body results})
        {:status 500
         :body results})
      {:status 500
       :body {:status :error
              :error-type :user-input-error
              :error "Empty search"}})
    (catch Exception e
      {:status 500
       :body {:status :error
              :error-type :unexpected
              :error (.getMessage e)}})))

(defn articles-handler [request]
  (try
    (let [page (Integer/parseInt (get-in request [:params "page"] "1"))
          size (Integer/parseInt (get-in request [:params "size"] "5"))
          keywords (parse-params request)]
      (if keywords
        (let [articles (db/get-articles keywords page size)
              total    (db/get-total keywords)]
          {:status 200
           :body {:data {:articles articles
                         :total total}
                  :status :success}})
        {:status 500
         :body {:status :error
                :error-type :user-input-error
                :message "Empty search"}}))
    (catch Exception e
      {:status 500
       :body {:status :error
              :error-type :unexpected
              :message (.getMessage e)}})))

(defn index-html-handler
  [req]
  (io/resource "public/index.html"))

(defroutes app-routes
  (GET "/" [] index-html-handler)
  (GET "/find" [] search-handler)
  (GET "/articles" [] articles-handler)
  (route/resources "/")
  (route/not-found "404 Not Found"))

(def app
  (-> app-routes
      (resource/wrap-resource "public")
      (content-type/wrap-content-type)
      (json/wrap-json-response)
      (json/wrap-json-body {:keywords? true})
      (params/wrap-params)))

(comment
  (defonce server (atom nil))
  (defn start! []
    (future (reset! server (jetty/run-jetty app {:port 3000}))))

  (defn stop! []
    (reset! server nil))
  (start!)
  (stop!))

(defn -main [& args]
  (db/init-db)
  (let [port (Integer/parseInt (or (System/getenv "PORT") "3000"))
        host (or (System/getenv "HOST") "0.0.0.0")]
    (jetty/run-jetty app {:port port :host host})))
