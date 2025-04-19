(ns scopus-search.db
  (:require [clojure.java.jdbc :as jdbc]
            [clojure.string :as str]
            [honey.sql :as sql]
            [scopus-search.api :as api]))

(def db-spec
  {:classname "org.sqlite.JDBC"
   :subprotocol "sqlite"
   :subname "scopus.db"})

(defn table-exists? []
  (try
    (jdbc/query db-spec ["SELECT name FROM sqlite_master WHERE type='table' AND name='articles'"])
    (jdbc/query db-spec ["SELECT id FROM sqlite_master WHERE type='table' AND name='keywords'"])
    true
    (catch Exception _ false)))

(defn init-db []
  (do
    (jdbc/execute! db-spec ["DROP TABLE articles"])
    (jdbc/execute! db-spec ["DROP TABLE keywords"])
    (jdbc/db-do-commands
     db-spec
     (jdbc/create-table-ddl
      :articles
      [[:id "CHAR(32)" :primary :key]
       [:title :text]
       [:author :text]
       [:date :text]
       [:doi :text]]))
    (jdbc/db-do-commands
     db-spec
     (jdbc/create-table-ddl
      :keywords
      [[:id "CHAR(32)"]
       [:query :text]]))))

(comment (init-db) )

(defn filter-duplicates
  [articles]
  (let [ids (mapv :id articles)
        placeholders (clojure.string/join "," (repeat (count ids) "?"))
        sql (str "SELECT id FROM articles WHERE id IN (" placeholders ")")
        res (jdbc/query db-spec (into [sql] ids))
        pred (set (mapv :id res))]
   (remove (fn [{id :id}] (pred id)) articles)))

(defn associate-keywords [keywords results]
  (vec (mapcat (fn [kwd]
                 (map #(assoc {} :query kwd
                                 :id %)
                       (mapv :id results)))
               keywords)))

(defn save-articles [keywords articles]
  (let [dedup-articles (filter-duplicates articles)
        queries        (associate-keywords keywords dedup-articles)]
    (when (seq dedup-articles)
      (jdbc/with-db-transaction [tx db-spec]
        (jdbc/insert-multi! tx :articles articles)
        (jdbc/insert-multi! tx :keywords queries)))))

(comment
  (def keywords ["giant shrimp" "ocean"])
  (def articles
  [{:title "Environmental Sciences Europe",
    :author "Sawangproh W.",
    :date "2025-12-01",
    :doi "10.1186/s12302-024-01043-z",
    :id "936b56e2b10fde34f4512073e2ca3093"}
   {:title "Scientific Reports",
    :author "Hirai J.",
    :date "2025-12-01",
    :doi "10.1038/s41598-025-91208-4",
    :id "b8e86e90f1fda95908e09e02ba9332f2"}
   {:title "Animal Microbiome",
    :author "Perez V.",
    :date "2025-12-01",
    :doi "10.1186/s42523-025-00376-1",
    :id "1f75229f8d577b72415cd4a88f6ba249"}
   {:title "Scientific Reports",
    :author "Zura-Bravo L.",
    :date "2025-12-01",
    :doi "10.1038/s41598-025-87647-8",
    :id "55fb445761e289a55ae3fab810021ff1"}
   {:title "Microbial Ecology",
    :author "Castelli M.",
    :date "2025-12-01",
    :doi "10.1007/s00248-025-02509-0",
    :id "5f5068b23de32d6e6fef3a7dfcafa66c"}
   {:title "Geochemistry",
    :author "Chen Y.",
    :date "2025-09-01",
    :doi "10.1016/j.chemer.2025.126284",
    :id "b40a41fcbdf4b8d6a5f5ad9042bf4741"}
   {:title "Aquacultural Engineering",
    :author "Halim M.A.",
    :date "2025-08-15",
    :doi "10.1016/j.aquaeng.2025.102544",
    :id "eed728b01e3cc061a09ef121dd0e6398"}
   {:title "Separation and Purification Technology",
    :author "Zhao J.",
    :date "2025-08-14",
    :doi "10.1016/j.seppur.2025.132304",
    :id "bf697b793e64f337a9b997cc86e1f340"}
   {:title "Aquaculture Reports",
    :author "Asmat-Ullah M.",
    :date "2025-07-15",
    :doi "10.1016/j.aqrep.2025.102718",
    :id "f403f678fd96934f2046a2ddb19b9242"}
   {:title "Aquaculture",
    :author "Feng L.",
    :date "2025-07-15",
    :doi "10.1016/j.aquaculture.2025.742522",
    :id "e71c6f82fc61a468bb609b7a61fadcc3"}])


  (associate-keywords keywords (filter-duplicates articles)))

(defn get-articles [keywords page size]
  (let [n        (count keywords)
        in-clause (clojure.string/join "," (repeat n "?"))
        sql (str "SELECT a.title, a.author, a.date, a.doi
                  FROM articles a
                  JOIN (SELECT k.id
                        FROM keywords k
                        WHERE k.query IN (" in-clause ")
                        GROUP BY k.id
                        HAVING COUNT(DISTINCT k.query) = ?)
                      matching_ids
                  ON a.id = matching_ids.id")]
    (jdbc/query db-spec (into [sql] (conj keywords n)))))
