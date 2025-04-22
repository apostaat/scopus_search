(ns scopus-search.api
  (:require [clj-http.client :as http]
            [clojure.string :as str]
            [clojure.java.io :as io])
  (:import [java.security MessageDigest]
           [java.math BigInteger]))

(def scopus-api-key "26d73caa33ea88eb113539ac40678a4b")
(def scopus-base-url "https://api.elsevier.com/content/search/scopus")

(comment (def resp (->> (get-in (http/get scopus-base-url
                                          {:query-params {"query" ["giant shrimp" "oceans"]
                                                          "apiKey" scopus-api-key
                                                          "count" 10}
                                           :as :json})
                                [:body :search-results :entry])
                        (mapv parse-article)
                        (filterv (fn [x] (->> x
                                              vals
                                              (every? nil?)
                                              not))))))

(defn md5 [s]
  (let [md (MessageDigest/getInstance "MD5")
        bytes (.digest md (.getBytes s "UTF-8"))]
    (format "%032x" (BigInteger. 1 bytes))))

(defn parse-article [{title :prism:publicationName
                      author :dc:creator
                      date :prism:coverDate
                      doi :prism:doi
                      :as entry}]
  (when (or title author date doi)
    {:title title
     :author author
     :date date
     :doi doi
     :id (md5 (str title author date doi))}))

(comment
  (def resp
    (http/get scopus-base-url {:query-params {"query" "shrimp"
                                              "apiKey" scopus-api-key
                                              "count" 10}
                               :as :json})))

(defn call-scopus-api
  [query]
  (http/get scopus-base-url {:query-params {"query" query
                                            "apiKey" scopus-api-key
                                            "count" 10}
                             :as :json}))

(def empty-rec
  [{:title "N/A"
    :author "N/A"
    :date "N/A"
    :doi "N/A"
    :id (md5 (str "N/A" "N/A" "N/A" "N/A"))}])

(defn parse-scopus-response
  ([query response]
   (parse-scopus-response query response 0))
  ([query {{results :search-results} :body status :status :as response} redirect-count]
   (cond
     (and (#{200 "200"} status)
          (nil? results))
     empty-rec

     (#{200 "200"} status)
     (or (->> (get-in results [:entry])
              (keep parse-article)
              seq)
         empty-rec)

     (#{300 "300" 301 "301"} status)
     (if (pos? redirect-count)
       (throw (ex-info "Request to API failed, too many redirects, try later."
                       {:api-response nil}))
       (call-scopus-api query (inc redirect-count)))

     :else
     (throw (ex-info "Request to API failed" {:api-response response})))))

(defonce cache (atom {}))

(comment (reset! cache {}))

(defn cache-result
  [query response]
  (swap! cache assoc query response))

(defn search-scopus [query]
  (try
    (let [cached-response (get @cache query)
          parsed-articles  (or cached-response
                               (->> query
                                    call-scopus-api
                                    (parse-scopus-response query)))
          _ (cache-result query parsed-articles)]
      {:status :success
       :data parsed-articles
       :query query})
    (catch clojure.lang.ExceptionInfo e
      {:status :error
       :error-type :api-error
       :message "Failed to retrieve results from Scopus API"
       :details (ex-data e)})
    (catch Exception e
      {:status :error
       :error-type :unexpected
       :message "An unexpected error occurred"
       :details {:exception-message (.getMessage e)}})))
