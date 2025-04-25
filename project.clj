(defproject scopus-search "0.1.0-SNAPSHOT"
  :description "A web application for searching scientific publications using Scopus API"
  :url "http://example.com/FIXME"
  :license {:name "EPL-2.0 OR GPL-2.0-or-later WITH Classpath-exception-2.0"
            :url "https://www.eclipse.org/legal/epl-2.0/"}
  :dependencies [[org.clojure/clojure "1.11.1"]
                 [org.clojure/clojurescript "1.11.60"]
                 [ring/ring-core "1.9.6"]
                 [ring/ring-jetty-adapter "1.9.6"]
                 [ring/ring-json "0.5.1"]
                 [compojure "1.7.0"]
                 [cheshire "5.11.0"]
                 [org.clojure/java.jdbc "0.7.12"]
                 [org.xerial/sqlite-jdbc "3.45.1.0"]
                 [re-frame "1.3.0"]
                 [reagent "1.2.0"]
                 [cljs-http "0.1.46"]
                 [clj-http "3.12.3"]
                 [com.github.seancorfield/honeysql "2.7.1295"]]
  :plugins [[lein-with-env-vars "0.1.0"]]
  :env-vars {:SCOPUS_BASE_URL "https://api.elsevier.com/content/search/scopus"
             :SCOPUS_API_KEY "26d73caa33ea88eb113539ac40678a4b"}
  :main ^:skip-aot scopus-search.core

  :target-path "target/%s"
  :profiles {:uberjar {:aot :all
                       :jvm-opts ["-Dclojure.compiler.direct-linking=true"]}
             :dev {:plugins [[lein-cljsbuild "1.1.7"]
                             [lein-figwheel "0.5.20"]
                             [lein-doo "0.1.11"]]}}
  :cljsbuild {:builds [{:id "dev"
                        :source-paths ["src/cljs"]
                        :figwheel true
                        :compiler {:main scopus-search.core
                                   :asset-path "js/compiled/out"
                                   :output-to "resources/public/js/compiled/scopus_search.js"
                                   :output-dir "resources/public/js/compiled/out"
                                   :source-map-timestamp true
                                   :npm-deps {:react "18.2.0"
                                            :react-dom "18.2.0"}
                                   :install-deps true}}
                       {:id "prod"
                        :source-paths ["src/cljs"]
                        :figwheel false
                        :compiler {:main scopus-search.core
                                   :asset-path "js/compiled/prod"
                                   :output-to "resources/public/js/compiled/scopus_search.js"
                                   :output-dir "resources/public/js/compiled/prod"
                                   :optimizations :advanced
                                   :pretty-print false
                                   ;; :source-map false
                                   :npm-deps {:react "18.2.0"
                                            :react-dom "18.2.0"}
                                   :install-deps true}}]})
