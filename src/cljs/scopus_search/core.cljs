(ns scopus-search.core
  (:require [reagent.core :as reagent]
            [reagent.dom :as dom]
            [re-frame.core :as rf]
            [cljs-http.client :as http]
            [cljs.core.async :refer [<!]])
  (:require-macros [cljs.core.async.macros :refer [go]]))

;; Events
(rf/reg-event-db
 :initialize-db
 (fn [_ _]
   {:articles []
    :total 0
    :current-page 1
    :page-size 10
    :keywords ""
    :loading? false}))

(rf/reg-sub
 :articles
 (fn [db _]
   (:articles db)))

(rf/reg-sub
 :loading?
 (fn [db _]
   (:loading? db)))

(rf/reg-sub
 :keywords
 (fn [db _]
   (:keywords db)))

(rf/reg-event-db
 :loaded
 (fn [db [_ status]]
   (assoc db :loading? status)))

(rf/reg-event-db
 :articles-loaded
 (fn [db [_ articles]]
   (assoc db :articles articles)))

(rf/reg-event-db
 :set-keywords
 (fn [db [_ new-val]]
   (assoc db :keywords new-val)))

(rf/reg-sub
 :search-keywords
 (fn [db _]
   (:search-keywords db)))

;; Effects
(rf/reg-fx
 :search-articles
 (fn [[keywords page]]
   (go
     (rf/dispatch [:loaded true])
     (let [_ (<! (http/get "http://localhost:3000/find"
                          {:query-params {:word keywords
                                        :page page}}))
           response (<! (http/get "http://localhost:3000/articles"
                                {:query-params {:word keywords
                                              :page page}}))
           articles (js/JSON.parse (:body response))]
       (rf/dispatch [:loaded false])
       (rf/dispatch [:articles-loaded articles])))))

;; Event Handlers
(rf/reg-event-fx
 :search-articles
 (fn [_ [_ {:keys [keywords page]}]]
   {:search-articles [keywords page]}))

;; Views
(defn search-form []
  (let [keywords (rf/subscribe [:keywords])]
    [:div.card.mb-4
     [:div.card-body
      [:form
       {:on-submit (fn [e]
                    (rf/dispatch [:loaded true])
                    (rf/dispatch [:search-articles {:keywords @keywords
                                                    :page 1}])
                    (.preventDefault e))}
       [:div.mb-3
        [:label.form-label "Search Keywords"]
        [:input.form-control
         {:type "text"
          :value @keywords
          :on-change #(rf/dispatch [:set-keywords (-> % .-target .-value)])}]]
       [:button.btn.btn-primary
        {:type "submit"}
        "Search"]]]]))

(defn article-list []
  (let [articles (rf/subscribe [:articles])
        _ (println articles)]
    [:div.table-responsive
     [:table.table
      [:thead
       [:tr
        [:th "Title"]
        [:th "Author"]
        [:th "Date"]
        [:th "DOI"]]]
      (->> @articles
           (mapv (fn [article]
                   [:tr {:key (.-doi article)}
                    [:td (.-title article)]
                    [:td (.-author article)]
                    [:td (.-date article)]
                    [:td (.-doi article)]]))
           (apply conj [:tbody]))]]))

(defn main-panel []
  (let [loading? (rf/subscribe [:loading?])]
    [:div.container.mt-4
     [:h1 "Scopus Search"]
     [search-form]
     (if @loading?
       [:div.text-center
        [:div.spinner-border {:role "status"}
         [:span.visually-hidden "Loading..."]]]
       [article-list])]))

(defn mount-root []
  (rf/clear-subscription-cache!)
  (dom/render [main-panel]
              (.getElementById js/document "app")))

(defn ^:export init []
  (rf/dispatch-sync [:initialize-db])
  (mount-root))

(defn ^:export reload []
  (mount-root))
