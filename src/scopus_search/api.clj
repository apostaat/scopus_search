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
                      ctitle :title
                      cauthor :author
                      cdate :date
                      cdoi :doi
                      cid :id
                      :as entry}]
  {:title (or title ctitle)
   :author (or author cauthor)
   :date (or date cdate)
   :doi (or doi cdoi)
   :id (or cid (md5 (str
                     title
                     author
                     date
                     doi)))})

(def cache (atom {}))

(defn search-scopus [query]
  (let [;; _ (pp/pprint ["entered search scopus with: " query])
        cached-response (get @cache query)
        ;; _ (pp/pprint ["entered search scopus with: " query])
        response (or cached-response
                     (-> scopus-base-url
                         (http/get {:query-params {"query" query
                                                   "apiKey" scopus-api-key
                                                   "count" 10}
                                    :as :json})
                         (get-in [:body :search-results :entry])))
        ;; _ (pp/pprint ["got value from scopus: " response])
        res (mapv parse-article response)
        ;; _ (pp/pprint ["parsed:  " res])
        _ (swap! cache assoc query res)
        ;; _ (pp/pprint ["cached:  " res])
        ]
    res))
