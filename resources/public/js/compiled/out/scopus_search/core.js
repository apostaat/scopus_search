// Compiled by ClojureScript 1.10.238 {}
goog.provide('scopus_search.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('re_frame.core');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"articles","articles",-454771639),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"total","total",1916810418),(0),new cljs.core.Keyword(null,"current-page","current-page",-101294180),(1),new cljs.core.Keyword(null,"page-size","page-size",223836073),(10),new cljs.core.Keyword(null,"keywords","keywords",1526959054),"",new cljs.core.Keyword(null,"loading?","loading?",1905707049),false], null);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"articles","articles",-454771639),(function (db,_){
return new cljs.core.Keyword(null,"articles","articles",-454771639).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"loading?","loading?",1905707049),(function (db,_){
return new cljs.core.Keyword(null,"loading?","loading?",1905707049).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"keywords","keywords",1526959054),(function (db,_){
return new cljs.core.Keyword(null,"keywords","keywords",1526959054).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),(function (db,p__29777){
var vec__29778 = p__29777;
var _ = cljs.core.nth.call(null,vec__29778,(0),null);
var status = cljs.core.nth.call(null,vec__29778,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"loading?","loading?",1905707049),status);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"articles-loaded","articles-loaded",511978336),(function (db,p__29781){
var vec__29782 = p__29781;
var _ = cljs.core.nth.call(null,vec__29782,(0),null);
var articles = cljs.core.nth.call(null,vec__29782,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"articles","articles",-454771639),articles);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-keywords","set-keywords",-1660268879),(function (db,p__29785){
var vec__29786 = p__29785;
var _ = cljs.core.nth.call(null,vec__29786,(0),null);
var new_val = cljs.core.nth.call(null,vec__29786,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"keywords","keywords",1526959054),new_val);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"search-keywords","search-keywords",-870379903),(function (db,_){
return new cljs.core.Keyword(null,"search-keywords","search-keywords",-870379903).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"search-articles","search-articles",-1100010307),(function (p__29789){
var vec__29790 = p__29789;
var keywords = cljs.core.nth.call(null,vec__29790,(0),null);
var page = cljs.core.nth.call(null,vec__29790,(1),null);
var c__28722__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28722__auto__,vec__29790,keywords,page){
return (function (){
var f__28723__auto__ = (function (){var switch__28699__auto__ = ((function (c__28722__auto__,vec__29790,keywords,page){
return (function (state_29827){
var state_val_29828 = (state_29827[(1)]);
if((state_val_29828 === (1))){
var inst_29793 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29794 = [new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true];
var inst_29795 = (new cljs.core.PersistentVector(null,2,(5),inst_29793,inst_29794,null));
var inst_29796 = re_frame.core.dispatch.call(null,inst_29795);
var inst_29797 = [new cljs.core.Keyword(null,"query-params","query-params",900640534)];
var inst_29798 = [new cljs.core.Keyword(null,"word","word",-420123725),new cljs.core.Keyword(null,"page","page",849072397)];
var inst_29799 = [keywords,page];
var inst_29800 = cljs.core.PersistentHashMap.fromArrays(inst_29798,inst_29799);
var inst_29801 = [inst_29800];
var inst_29802 = cljs.core.PersistentHashMap.fromArrays(inst_29797,inst_29801);
var inst_29803 = cljs_http.client.get.call(null,"http://localhost:3000/find",inst_29802);
var state_29827__$1 = (function (){var statearr_29829 = state_29827;
(statearr_29829[(7)] = inst_29796);

return statearr_29829;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29827__$1,(2),inst_29803);
} else {
if((state_val_29828 === (2))){
var inst_29805 = (state_29827[(2)]);
var inst_29806 = [new cljs.core.Keyword(null,"query-params","query-params",900640534)];
var inst_29807 = [new cljs.core.Keyword(null,"word","word",-420123725),new cljs.core.Keyword(null,"page","page",849072397)];
var inst_29808 = [keywords,page];
var inst_29809 = cljs.core.PersistentHashMap.fromArrays(inst_29807,inst_29808);
var inst_29810 = [inst_29809];
var inst_29811 = cljs.core.PersistentHashMap.fromArrays(inst_29806,inst_29810);
var inst_29812 = cljs_http.client.get.call(null,"http://localhost:3000/articles",inst_29811);
var state_29827__$1 = (function (){var statearr_29830 = state_29827;
(statearr_29830[(8)] = inst_29805);

return statearr_29830;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29827__$1,(3),inst_29812);
} else {
if((state_val_29828 === (3))){
var inst_29814 = (state_29827[(2)]);
var inst_29815 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_29814);
var inst_29816 = JSON.parse(inst_29815);
var inst_29817 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29818 = [new cljs.core.Keyword(null,"loaded","loaded",-1246482293),false];
var inst_29819 = (new cljs.core.PersistentVector(null,2,(5),inst_29817,inst_29818,null));
var inst_29820 = re_frame.core.dispatch.call(null,inst_29819);
var inst_29821 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29822 = inst_29816.articles;
var inst_29823 = [new cljs.core.Keyword(null,"articles-loaded","articles-loaded",511978336),inst_29822];
var inst_29824 = (new cljs.core.PersistentVector(null,2,(5),inst_29821,inst_29823,null));
var inst_29825 = re_frame.core.dispatch.call(null,inst_29824);
var state_29827__$1 = (function (){var statearr_29831 = state_29827;
(statearr_29831[(9)] = inst_29820);

return statearr_29831;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29827__$1,inst_29825);
} else {
return null;
}
}
}
});})(c__28722__auto__,vec__29790,keywords,page))
;
return ((function (switch__28699__auto__,c__28722__auto__,vec__29790,keywords,page){
return (function() {
var scopus_search$core$state_machine__28700__auto__ = null;
var scopus_search$core$state_machine__28700__auto____0 = (function (){
var statearr_29832 = [null,null,null,null,null,null,null,null,null,null];
(statearr_29832[(0)] = scopus_search$core$state_machine__28700__auto__);

(statearr_29832[(1)] = (1));

return statearr_29832;
});
var scopus_search$core$state_machine__28700__auto____1 = (function (state_29827){
while(true){
var ret_value__28701__auto__ = (function (){try{while(true){
var result__28702__auto__ = switch__28699__auto__.call(null,state_29827);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28702__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28702__auto__;
}
break;
}
}catch (e29833){if((e29833 instanceof Object)){
var ex__28703__auto__ = e29833;
var statearr_29834_29836 = state_29827;
(statearr_29834_29836[(5)] = ex__28703__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29827);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29833;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28701__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29837 = state_29827;
state_29827 = G__29837;
continue;
} else {
return ret_value__28701__auto__;
}
break;
}
});
scopus_search$core$state_machine__28700__auto__ = function(state_29827){
switch(arguments.length){
case 0:
return scopus_search$core$state_machine__28700__auto____0.call(this);
case 1:
return scopus_search$core$state_machine__28700__auto____1.call(this,state_29827);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
scopus_search$core$state_machine__28700__auto__.cljs$core$IFn$_invoke$arity$0 = scopus_search$core$state_machine__28700__auto____0;
scopus_search$core$state_machine__28700__auto__.cljs$core$IFn$_invoke$arity$1 = scopus_search$core$state_machine__28700__auto____1;
return scopus_search$core$state_machine__28700__auto__;
})()
;})(switch__28699__auto__,c__28722__auto__,vec__29790,keywords,page))
})();
var state__28724__auto__ = (function (){var statearr_29835 = f__28723__auto__.call(null);
(statearr_29835[(6)] = c__28722__auto__);

return statearr_29835;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28724__auto__);
});})(c__28722__auto__,vec__29790,keywords,page))
);

return c__28722__auto__;
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"search-articles","search-articles",-1100010307),(function (_,p__29838){
var vec__29839 = p__29838;
var ___$1 = cljs.core.nth.call(null,vec__29839,(0),null);
var map__29842 = cljs.core.nth.call(null,vec__29839,(1),null);
var map__29842__$1 = ((((!((map__29842 == null)))?(((((map__29842.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29842.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29842):map__29842);
var keywords = cljs.core.get.call(null,map__29842__$1,new cljs.core.Keyword(null,"keywords","keywords",1526959054));
var page = cljs.core.get.call(null,map__29842__$1,new cljs.core.Keyword(null,"page","page",849072397));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"search-articles","search-articles",-1100010307),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [keywords,page], null)], null);
}));
scopus_search.core.search_form = (function scopus_search$core$search_form(){
var keywords = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keywords","keywords",1526959054)], null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card.mb-4","div.card.mb-4",-1838792684),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.card-body","div.card-body",1538579065),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),((function (keywords){
return (function (e){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search-articles","search-articles",-1100010307),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keywords","keywords",1526959054),cljs.core.deref.call(null,keywords),new cljs.core.Keyword(null,"page","page",849072397),(1)], null)], null));

return e.preventDefault();
});})(keywords))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mb-3","div.mb-3",2018571275),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.form-label","label.form-label",1421537292),"Search Keywords"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,keywords),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (keywords){
return (function (p1__29844_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-keywords","set-keywords",-1660268879),p1__29844_SHARP_.target.value], null));
});})(keywords))
], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-primary","button.btn.btn-primary",510358192),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"submit"], null),"Search"], null)], null)], null)], null);
});
scopus_search.core.article_list = (function scopus_search$core$article_list(){
var articles = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"articles","articles",-454771639)], null));
var _ = cljs.core.println.call(null,articles);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.table-responsive","div.table-responsive",-16203823),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.table","table.table",-538258781),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Title"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Author"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Date"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"DOI"], null)], null)], null),cljs.core.apply.call(null,cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300)], null),cljs.core.mapv.call(null,((function (articles,_){
return (function (article){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),article.doi], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),article.title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),article.author], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),article.date], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),article.doi], null)], null);
});})(articles,_))
,cljs.core.deref.call(null,articles)))], null)], null);
});
scopus_search.core.main_panel = (function scopus_search$core$main_panel(){
var loading_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading?","loading?",1905707049)], null));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container.mt-4","div.container.mt-4",-1595512625),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Scopus Search"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [scopus_search.core.search_form], null),(cljs.core.truth_(cljs.core.deref.call(null,loading_QMARK_))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-center","div.text-center",921869624),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.spinner-border","div.spinner-border",2128718680),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"role","role",-736691072),"status"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.visually-hidden","span.visually-hidden",1984287191),"Loading..."], null)], null)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [scopus_search.core.article_list], null))], null);
});
scopus_search.core.mount_root = (function scopus_search$core$mount_root(){
re_frame.core.clear_subscription_cache_BANG_.call(null);

return reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [scopus_search.core.main_panel], null),document.getElementById("app"));
});
scopus_search.core.init = (function scopus_search$core$init(){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432)], null));

return scopus_search.core.mount_root.call(null);
});
goog.exportSymbol('scopus_search.core.init', scopus_search.core.init);
scopus_search.core.reload = (function scopus_search$core$reload(){
return scopus_search.core.mount_root.call(null);
});
goog.exportSymbol('scopus_search.core.reload', scopus_search.core.reload);

//# sourceMappingURL=core.js.map?rel=1745103733842
