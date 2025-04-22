(ns scopus-search.db
  (:require [clojure.java.jdbc :as jdbc]
            [clojure.string :as str]
            [honey.sql :as sql]))

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
    (table-exists?)
    (jdbc/db-do-commands
     db-spec
     (jdbc/create-table-ddl
      :articles
      [[:id "CHAR(32)" :primary :key]
       [:title :text]
       [:author :text]
       [:date :text]
       [:doi :text]
       [:tx_id "CHAR(36)"]]))
    (jdbc/db-do-commands
     db-spec
     (jdbc/create-table-ddl
      :keywords
      [[:id "CHAR(32)"]
       [:query :text]]))))

(comment
  (jdbc/execute! db-spec ["DROP TABLE articles"])
  (jdbc/execute! db-spec ["DROP TABLE keywords"])
  (init-db) )

(defn associate-keywords [keywords results]
  (vec (mapcat (fn [kwd]
                 (map #(assoc {} :query kwd
                                 :id %)
                       (mapv :id results)))
               keywords)))

(defn insert-ignore-multi! [table rows]
  (when (seq rows)
    (let [columns (->> rows
                       first
                       keys
                       (mapv name))
          sql (format "INSERT INTO %s (%s) VALUES %s ON CONFLICT(id) DO NOTHING"
                      (name table)
                      (str/join ", " columns)
                      (str/join ", " (repeat (count rows)
                                             (str "("
                                                  (str/join ", " (repeat (count columns) "?"))
                                                  ")"))))
          values (mapcat vals rows)]
      (jdbc/execute! db-spec (into [sql] values)))))

(defn save-articles [keywords articles]
  (let [tx-id (str (random-uuid))
        _ (->> articles
               (mapv #(assoc % :tx_id tx-id))
               (insert-ignore-multi! :articles))
        ids     (jdbc/query db-spec ["SELECT id FROM articles WHERE tx_id = ?" tx-id])
        queries (associate-keywords keywords ids)]
    (jdbc/with-db-transaction [tx db-spec]
      (jdbc/insert-multi! tx :keywords queries))))

(defn get-articles [keywords page size]
  (let [n         (count keywords)
        offset    (* (dec page) size)
        in-clause (clojure.string/join "," (repeat n "?"))
        sql (str "SELECT a.title, a.author, a.date, a.doi
                  FROM articles a
                  JOIN (SELECT k.id
                        FROM keywords k
                        WHERE k.query IN (" in-clause ")
                        GROUP BY k.id
                        HAVING COUNT(DISTINCT k.query) = ?)
                      matching_ids
                  ON a.id = matching_ids.id
                  LIMIT  ?
                  OFFSET ?")]
    (vec (jdbc/query db-spec (into [sql] (concat keywords [n size offset]))))))

(defn get-total [keywords]
  (let [n         (count keywords)
        in-clause (clojure.string/join "," (repeat n "?"))
        sql (str "SELECT count(a.id) total
                  FROM articles a
                  JOIN (SELECT k.id
                        FROM keywords k
                        WHERE k.query IN (" in-clause ")
                        GROUP BY k.id
                        HAVING COUNT(DISTINCT k.query) = ?)
                               matching_ids
                        ON a.id = matching_ids.id")]
    (->> n
         (conj keywords)
         (into [sql])
         (jdbc/query db-spec)
         first
         :total)))
