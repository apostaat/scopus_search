// Compiled by ClojureScript 1.10.238 {}
goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.call(null,(0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_.call(null,re_frame.trace.id,(0));
});

/** @define {boolean} */
goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
if(typeof re_frame.trace.traces !== 'undefined'){
} else {
re_frame.trace.traces = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
if(typeof re_frame.trace.next_delivery !== 'undefined'){
} else {
re_frame.trace.next_delivery = cljs.core.atom.call(null,(0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation.");
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.call(null,re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__22270){
var map__22271 = p__22270;
var map__22271__$1 = ((((!((map__22271 == null)))?(((((map__22271.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22271.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22271):map__22271);
var operation = cljs.core.get.call(null,map__22271__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.call(null,map__22271__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.call(null,map__22271__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.call(null,map__22271__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id.call(null),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__3922__auto__ = child_of;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now.call(null)], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce.call(null,(function re_frame$trace$tracing_cb_debounced(){
var seq__22273_22285 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__22274_22286 = null;
var count__22275_22287 = (0);
var i__22276_22288 = (0);
while(true){
if((i__22276_22288 < count__22275_22287)){
var vec__22277_22289 = cljs.core._nth.call(null,chunk__22274_22286,i__22276_22288);
var k_22290 = cljs.core.nth.call(null,vec__22277_22289,(0),null);
var cb_22291 = cljs.core.nth.call(null,vec__22277_22289,(1),null);
try{cb_22291.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e22280){var e_22292 = e22280;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_22290,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_22292);
}

var G__22293 = seq__22273_22285;
var G__22294 = chunk__22274_22286;
var G__22295 = count__22275_22287;
var G__22296 = (i__22276_22288 + (1));
seq__22273_22285 = G__22293;
chunk__22274_22286 = G__22294;
count__22275_22287 = G__22295;
i__22276_22288 = G__22296;
continue;
} else {
var temp__5804__auto___22297 = cljs.core.seq.call(null,seq__22273_22285);
if(temp__5804__auto___22297){
var seq__22273_22298__$1 = temp__5804__auto___22297;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22273_22298__$1)){
var c__4319__auto___22299 = cljs.core.chunk_first.call(null,seq__22273_22298__$1);
var G__22300 = cljs.core.chunk_rest.call(null,seq__22273_22298__$1);
var G__22301 = c__4319__auto___22299;
var G__22302 = cljs.core.count.call(null,c__4319__auto___22299);
var G__22303 = (0);
seq__22273_22285 = G__22300;
chunk__22274_22286 = G__22301;
count__22275_22287 = G__22302;
i__22276_22288 = G__22303;
continue;
} else {
var vec__22281_22304 = cljs.core.first.call(null,seq__22273_22298__$1);
var k_22305 = cljs.core.nth.call(null,vec__22281_22304,(0),null);
var cb_22306 = cljs.core.nth.call(null,vec__22281_22304,(1),null);
try{cb_22306.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e22284){var e_22307 = e22284;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_22305,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_22307);
}

var G__22308 = cljs.core.next.call(null,seq__22273_22298__$1);
var G__22309 = null;
var G__22310 = (0);
var G__22311 = (0);
seq__22273_22285 = G__22308;
chunk__22274_22286 = G__22309;
count__22275_22287 = G__22310;
i__22276_22288 = G__22311;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_.call(null,re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref.call(null,re_frame.trace.next_delivery) - (25)) < now)){
re_frame.trace.schedule_debounce.call(null);

return cljs.core.reset_BANG_.call(null,re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=trace.js.map?rel=1744996258057
