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
    :page-size 5
    :keywords ""
    :loading? false}))

(rf/reg-sub
 :articles
 (fn [db _]
   (:articles db)))

(rf/reg-sub
 :total
 (fn [db _]
   (:total db)))

(rf/reg-sub
 :current-page
 (fn [db _]
   (:current-page db)))

(rf/reg-sub
 :page-size
 (fn [db _]
   (:page-size db)))

(rf/reg-sub
 :loading?
 (fn [db _]
   (:loading? db)))

(rf/reg-sub
 :keywords
 (fn [db _]
   (:keywords db)))

(rf/reg-event-db
 :set-current-page
 (fn [db [_ n]]
   (assoc db :current-page n)))

(rf/reg-event-db
 :set-page-size
 (fn [db [_ n]]
   (assoc db :page-size n)))

(rf/reg-event-db
 :set-total
 (fn [db [_ n]]
   (assoc db :total n)))

(rf/reg-event-db
 :set-loaded-status
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
 (fn [[keywords page size]]
   (go
     (rf/dispatch [:set-loaded-status true])
     (let [_ (<! (http/get "http://localhost:3000/find"
                           {:query-params {:word keywords}}))
           response (<! (http/get "http://localhost:3000/articles"
                                  {:query-params {:word keywords
                                                  :page page
                                                  :size size}}))
           articles (-> response
                        :body
                        js/JSON.parse)]
       (rf/dispatch [:set-loaded-status false])
       (rf/dispatch [:set-total (.-total articles)])
       (rf/dispatch [:articles-loaded (.-articles articles)])))))

;; Event Handlers
(rf/reg-event-fx
 :search-articles
 (fn [_ [_ {:keys [keywords page size]}]]
   {:search-articles [keywords page size]}))

;; Views
(defn search-form []
  (let [keywords  (rf/subscribe [:keywords])
        page-size (rf/subscribe [:page-size])]
    [:div.card.mb-4
     [:div.card-body
      [:form
       {:on-submit (fn [e]
                    (rf/dispatch [:set-loaded-status true])
                    (rf/dispatch [:search-articles {:keywords @keywords
                                                    :page 1
                                                    :size @page-size}])
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

(defn links
  []
  (let [total        (rf/subscribe [:total])
        keywords     (rf/subscribe [:keywords])
        current-page (rf/subscribe [:current-page])
        page-size    (rf/subscribe [:page-size])
        total-links  (int (Math/ceil (/ @total @page-size)))
        links-nums   (range 1 (inc total-links))]
    [:nav {:aria-label "Page navigation"}
     (->> links-nums
          (mapv (fn [page-num]
                  [:li.page-item {:class (when (= page-num @current-page) "active")}
                   [:a.page-link {:href     "#"
                                  :on-click #(do (.preventDefault %)
                                                 (rf/dispatch [:set-current-page page-num])
                                                 (rf/dispatch [:set-loaded-status true])
                                                 (rf/dispatch [:search-articles {:keywords @keywords
                                                                                 :page @current-page
                                                                                 :size @page-size}]))}
                    page-num]]))
          (apply conj [:ul.pagination]))]))

(defn article-list []
  (let [articles     (rf/subscribe [:articles])
        total        (rf/subscribe [:total])
        current-page (rf/subscribe [:current-page])
        page-size    (rf/subscribe [:page-size])]
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
           (apply conj [:tbody]))
      [links]]]))

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
