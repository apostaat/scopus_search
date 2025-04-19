// Compiled by ClojureScript 1.10.238 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler.call(null,re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_26495 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.call(null,effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___26516 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___26516)){
var new_db_26517 = temp__5804__auto___26516;
re_frame.registrar.get_handler.call(null,re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false).call(null,new_db_26517);
} else {
}

var seq__26496 = cljs.core.seq.call(null,effects_without_db);
var chunk__26497 = null;
var count__26498 = (0);
var i__26499 = (0);
while(true){
if((i__26499 < count__26498)){
var vec__26500 = cljs.core._nth.call(null,chunk__26497,i__26499);
var effect_key = cljs.core.nth.call(null,vec__26500,(0),null);
var effect_value = cljs.core.nth.call(null,vec__26500,(1),null);
var temp__5802__auto___26518 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___26518)){
var effect_fn_26519 = temp__5802__auto___26518;
effect_fn_26519.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__26520 = seq__26496;
var G__26521 = chunk__26497;
var G__26522 = count__26498;
var G__26523 = (i__26499 + (1));
seq__26496 = G__26520;
chunk__26497 = G__26521;
count__26498 = G__26522;
i__26499 = G__26523;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__26496);
if(temp__5804__auto__){
var seq__26496__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26496__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__26496__$1);
var G__26524 = cljs.core.chunk_rest.call(null,seq__26496__$1);
var G__26525 = c__4319__auto__;
var G__26526 = cljs.core.count.call(null,c__4319__auto__);
var G__26527 = (0);
seq__26496 = G__26524;
chunk__26497 = G__26525;
count__26498 = G__26526;
i__26499 = G__26527;
continue;
} else {
var vec__26503 = cljs.core.first.call(null,seq__26496__$1);
var effect_key = cljs.core.nth.call(null,vec__26503,(0),null);
var effect_value = cljs.core.nth.call(null,vec__26503,(1),null);
var temp__5802__auto___26528 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___26528)){
var effect_fn_26529 = temp__5802__auto___26528;
effect_fn_26529.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__26530 = cljs.core.next.call(null,seq__26496__$1);
var G__26531 = null;
var G__26532 = (0);
var G__26533 = (0);
seq__26496 = G__26530;
chunk__26497 = G__26531;
count__26498 = G__26532;
i__26499 = G__26533;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__22248__auto___26534 = re_frame.interop.now.call(null);
var duration__22249__auto___26535 = (end__22248__auto___26534 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__22249__auto___26535,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__22248__auto___26534);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_26495;
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.call(null,effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___26536 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___26536)){
var new_db_26537 = temp__5804__auto___26536;
re_frame.registrar.get_handler.call(null,re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false).call(null,new_db_26537);
} else {
}

var seq__26506 = cljs.core.seq.call(null,effects_without_db);
var chunk__26507 = null;
var count__26508 = (0);
var i__26509 = (0);
while(true){
if((i__26509 < count__26508)){
var vec__26510 = cljs.core._nth.call(null,chunk__26507,i__26509);
var effect_key = cljs.core.nth.call(null,vec__26510,(0),null);
var effect_value = cljs.core.nth.call(null,vec__26510,(1),null);
var temp__5802__auto___26538 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___26538)){
var effect_fn_26539 = temp__5802__auto___26538;
effect_fn_26539.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__26540 = seq__26506;
var G__26541 = chunk__26507;
var G__26542 = count__26508;
var G__26543 = (i__26509 + (1));
seq__26506 = G__26540;
chunk__26507 = G__26541;
count__26508 = G__26542;
i__26509 = G__26543;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__26506);
if(temp__5804__auto__){
var seq__26506__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26506__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__26506__$1);
var G__26544 = cljs.core.chunk_rest.call(null,seq__26506__$1);
var G__26545 = c__4319__auto__;
var G__26546 = cljs.core.count.call(null,c__4319__auto__);
var G__26547 = (0);
seq__26506 = G__26544;
chunk__26507 = G__26545;
count__26508 = G__26546;
i__26509 = G__26547;
continue;
} else {
var vec__26513 = cljs.core.first.call(null,seq__26506__$1);
var effect_key = cljs.core.nth.call(null,vec__26513,(0),null);
var effect_value = cljs.core.nth.call(null,vec__26513,(1),null);
var temp__5802__auto___26548 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___26548)){
var effect_fn_26549 = temp__5802__auto___26548;
effect_fn_26549.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__26550 = cljs.core.next.call(null,seq__26506__$1);
var G__26551 = null;
var G__26552 = (0);
var G__26553 = (0);
seq__26506 = G__26550;
chunk__26507 = G__26551;
count__26508 = G__26552;
i__26509 = G__26553;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__26554){
var map__26555 = p__26554;
var map__26555__$1 = ((((!((map__26555 == null)))?(((((map__26555.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26555.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26555):map__26555);
var effect = map__26555__$1;
var ms = cljs.core.get.call(null,map__26555__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__26555__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number')))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
return re_frame.interop.set_timeout_BANG_.call(null,((function (map__26555,map__26555__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(map__26555,map__26555__$1,effect,ms,dispatch))
,ms);
}
});
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_.call(null,value)){
return re_frame.fx.dispatch_later.call(null,value);
} else {
var seq__26557 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__26558 = null;
var count__26559 = (0);
var i__26560 = (0);
while(true){
if((i__26560 < count__26559)){
var effect = cljs.core._nth.call(null,chunk__26558,i__26560);
re_frame.fx.dispatch_later.call(null,effect);


var G__26561 = seq__26557;
var G__26562 = chunk__26558;
var G__26563 = count__26559;
var G__26564 = (i__26560 + (1));
seq__26557 = G__26561;
chunk__26558 = G__26562;
count__26559 = G__26563;
i__26560 = G__26564;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__26557);
if(temp__5804__auto__){
var seq__26557__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26557__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__26557__$1);
var G__26565 = cljs.core.chunk_rest.call(null,seq__26557__$1);
var G__26566 = c__4319__auto__;
var G__26567 = cljs.core.count.call(null,c__4319__auto__);
var G__26568 = (0);
seq__26557 = G__26565;
chunk__26558 = G__26566;
count__26559 = G__26567;
i__26560 = G__26568;
continue;
} else {
var effect = cljs.core.first.call(null,seq__26557__$1);
re_frame.fx.dispatch_later.call(null,effect);


var G__26569 = cljs.core.next.call(null,seq__26557__$1);
var G__26570 = null;
var G__26571 = (0);
var G__26572 = (0);
seq__26557 = G__26569;
chunk__26558 = G__26570;
count__26559 = G__26571;
i__26560 = G__26572;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if(!(cljs.core.sequential_QMARK_.call(null,seq_of_effects))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type.call(null,seq_of_effects));
} else {
var seq__26573 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,seq_of_effects));
var chunk__26574 = null;
var count__26575 = (0);
var i__26576 = (0);
while(true){
if((i__26576 < count__26575)){
var vec__26577 = cljs.core._nth.call(null,chunk__26574,i__26576);
var effect_key = cljs.core.nth.call(null,vec__26577,(0),null);
var effect_value = cljs.core.nth.call(null,vec__26577,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: \":fx\" effect should not contain a :db effect");
} else {
}

var temp__5802__auto___26583 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___26583)){
var effect_fn_26584 = temp__5802__auto___26583;
effect_fn_26584.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring.");
}


var G__26585 = seq__26573;
var G__26586 = chunk__26574;
var G__26587 = count__26575;
var G__26588 = (i__26576 + (1));
seq__26573 = G__26585;
chunk__26574 = G__26586;
count__26575 = G__26587;
i__26576 = G__26588;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__26573);
if(temp__5804__auto__){
var seq__26573__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26573__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__26573__$1);
var G__26589 = cljs.core.chunk_rest.call(null,seq__26573__$1);
var G__26590 = c__4319__auto__;
var G__26591 = cljs.core.count.call(null,c__4319__auto__);
var G__26592 = (0);
seq__26573 = G__26589;
chunk__26574 = G__26590;
count__26575 = G__26591;
i__26576 = G__26592;
continue;
} else {
var vec__26580 = cljs.core.first.call(null,seq__26573__$1);
var effect_key = cljs.core.nth.call(null,vec__26580,(0),null);
var effect_value = cljs.core.nth.call(null,vec__26580,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: \":fx\" effect should not contain a :db effect");
} else {
}

var temp__5802__auto___26593 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___26593)){
var effect_fn_26594 = temp__5802__auto___26593;
effect_fn_26594.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring.");
}


var G__26595 = cljs.core.next.call(null,seq__26573__$1);
var G__26596 = null;
var G__26597 = (0);
var G__26598 = (0);
seq__26573 = G__26595;
chunk__26574 = G__26596;
count__26575 = G__26597;
i__26576 = G__26598;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value);
} else {
var seq__26599 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__26600 = null;
var count__26601 = (0);
var i__26602 = (0);
while(true){
if((i__26602 < count__26601)){
var event = cljs.core._nth.call(null,chunk__26600,i__26602);
re_frame.router.dispatch.call(null,event);


var G__26603 = seq__26599;
var G__26604 = chunk__26600;
var G__26605 = count__26601;
var G__26606 = (i__26602 + (1));
seq__26599 = G__26603;
chunk__26600 = G__26604;
count__26601 = G__26605;
i__26602 = G__26606;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__26599);
if(temp__5804__auto__){
var seq__26599__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26599__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__26599__$1);
var G__26607 = cljs.core.chunk_rest.call(null,seq__26599__$1);
var G__26608 = c__4319__auto__;
var G__26609 = cljs.core.count.call(null,c__4319__auto__);
var G__26610 = (0);
seq__26599 = G__26607;
chunk__26600 = G__26608;
count__26601 = G__26609;
i__26602 = G__26610;
continue;
} else {
var event = cljs.core.first.call(null,seq__26599__$1);
re_frame.router.dispatch.call(null,event);


var G__26611 = cljs.core.next.call(null,seq__26599__$1);
var G__26612 = null;
var G__26613 = (0);
var G__26614 = (0);
seq__26599 = G__26611;
chunk__26600 = G__26612;
count__26601 = G__26613;
i__26602 = G__26614;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__26615 = cljs.core.seq.call(null,value);
var chunk__26616 = null;
var count__26617 = (0);
var i__26618 = (0);
while(true){
if((i__26618 < count__26617)){
var event = cljs.core._nth.call(null,chunk__26616,i__26618);
clear_event.call(null,event);


var G__26619 = seq__26615;
var G__26620 = chunk__26616;
var G__26621 = count__26617;
var G__26622 = (i__26618 + (1));
seq__26615 = G__26619;
chunk__26616 = G__26620;
count__26617 = G__26621;
i__26618 = G__26622;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__26615);
if(temp__5804__auto__){
var seq__26615__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26615__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__26615__$1);
var G__26623 = cljs.core.chunk_rest.call(null,seq__26615__$1);
var G__26624 = c__4319__auto__;
var G__26625 = cljs.core.count.call(null,c__4319__auto__);
var G__26626 = (0);
seq__26615 = G__26623;
chunk__26616 = G__26624;
count__26617 = G__26625;
i__26618 = G__26626;
continue;
} else {
var event = cljs.core.first.call(null,seq__26615__$1);
clear_event.call(null,event);


var G__26627 = cljs.core.next.call(null,seq__26615__$1);
var G__26628 = null;
var G__26629 = (0);
var G__26630 = (0);
seq__26615 = G__26627;
chunk__26616 = G__26628;
count__26617 = G__26629;
i__26618 = G__26630;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if(!((cljs.core.deref.call(null,re_frame.db.app_db) === value))){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map?rel=1744996262291
