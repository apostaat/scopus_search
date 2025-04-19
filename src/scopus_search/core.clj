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
            [clojure.pprint :as pp]))

(defn search-handler [request]
  (let [_ (println request)
        keywords (some-> request
                         (get-in [:params "word"])
                         (str/split #",")
                         (as-> x (mapv str/trim x)))]
    (try
      (if keywords
        (let [results (api/search-scopus keywords)
              _       (db/save-articles keywords results)]
          {:status 200
           :body {:message "Search completed successfully"}})
        (throw (ex-info "Empty search")))
      (catch Exception e
        {:status 500
         :body {:error (.getMessage e)}}))))

(defn articles-handler [request]
  (let [page (Integer/parseInt (get-in request [:params "page"] "1"))
        size (Integer/parseInt (get-in request [:params "size"] "10"))
        keywords (some-> request
                         (get-in [:params "word"])
                         (str/split #",")
                         (as-> x (mapv str/trim x)))]
    (try
      (if keywords
        (let [articles (db/get-articles keywords page size)]
          {:status 200
           :body articles})
        {:status 200
         :body nil})
      (catch Exception e
        {:status 500
         :body {:error (.getMessage e)}}))))

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

(defonce server (atom nil))

(defn start! []
  (future (reset! server (jetty/run-jetty app {:port 3000}))))

(defn stop! []
  (reset! server nil))

(comment (start!)
         (stop!))

(defn -main [& args]
  (db/init-db)
  (jetty/run-jetty app {:port 3000}))
