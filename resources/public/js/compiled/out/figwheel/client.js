// Compiled by ClojureScript 1.10.238 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.20";
figwheel.client.js_stringify = ((((typeof JSON !== 'undefined') && (!((JSON.stringify == null)))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e30179){if((e30179 instanceof Error)){
var e = e30179;
return "Error: Unable to stringify";
} else {
throw e30179;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__30182 = arguments.length;
switch (G__30182) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__30180_SHARP_){
if(typeof p1__30180_SHARP_ === 'string'){
return p1__30180_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__30180_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___30185 = arguments.length;
var i__4500__auto___30186 = (0);
while(true){
if((i__4500__auto___30186 < len__4499__auto___30185)){
args__4502__auto__.push((arguments[i__4500__auto___30186]));

var G__30187 = (i__4500__auto___30186 + (1));
i__4500__auto___30186 = G__30187;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq30184){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30184));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___30189 = arguments.length;
var i__4500__auto___30190 = (0);
while(true){
if((i__4500__auto___30190 < len__4499__auto___30189)){
args__4502__auto__.push((arguments[i__4500__auto___30190]));

var G__30191 = (i__4500__auto___30190 + (1));
i__4500__auto___30190 = G__30191;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq30188){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30188));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__30192){
var map__30193 = p__30192;
var map__30193__$1 = ((((!((map__30193 == null)))?(((((map__30193.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30193.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30193):map__30193);
var message = cljs.core.get.call(null,map__30193__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__30193__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__3922__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__3911__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__3911__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__3911__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__24411__auto___30272 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24411__auto___30272,ch){
return (function (){
var f__24412__auto__ = (function (){var switch__24321__auto__ = ((function (c__24411__auto___30272,ch){
return (function (state_30244){
var state_val_30245 = (state_30244[(1)]);
if((state_val_30245 === (7))){
var inst_30240 = (state_30244[(2)]);
var state_30244__$1 = state_30244;
var statearr_30246_30273 = state_30244__$1;
(statearr_30246_30273[(2)] = inst_30240);

(statearr_30246_30273[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30245 === (1))){
var state_30244__$1 = state_30244;
var statearr_30247_30274 = state_30244__$1;
(statearr_30247_30274[(2)] = null);

(statearr_30247_30274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30245 === (4))){
var inst_30197 = (state_30244[(7)]);
var inst_30197__$1 = (state_30244[(2)]);
var state_30244__$1 = (function (){var statearr_30248 = state_30244;
(statearr_30248[(7)] = inst_30197__$1);

return statearr_30248;
})();
if(cljs.core.truth_(inst_30197__$1)){
var statearr_30249_30275 = state_30244__$1;
(statearr_30249_30275[(1)] = (5));

} else {
var statearr_30250_30276 = state_30244__$1;
(statearr_30250_30276[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30245 === (15))){
var inst_30204 = (state_30244[(8)]);
var inst_30219 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30204);
var inst_30220 = cljs.core.first.call(null,inst_30219);
var inst_30221 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_30220);
var inst_30222 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30221)].join('');
var inst_30223 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_30222);
var state_30244__$1 = state_30244;
var statearr_30251_30277 = state_30244__$1;
(statearr_30251_30277[(2)] = inst_30223);

(statearr_30251_30277[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30245 === (13))){
var inst_30228 = (state_30244[(2)]);
var state_30244__$1 = state_30244;
var statearr_30252_30278 = state_30244__$1;
(statearr_30252_30278[(2)] = inst_30228);

(statearr_30252_30278[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30245 === (6))){
var state_30244__$1 = state_30244;
var statearr_30253_30279 = state_30244__$1;
(statearr_30253_30279[(2)] = null);

(statearr_30253_30279[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30245 === (17))){
var inst_30226 = (state_30244[(2)]);
var state_30244__$1 = state_30244;
var statearr_30254_30280 = state_30244__$1;
(statearr_30254_30280[(2)] = inst_30226);

(statearr_30254_30280[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30245 === (3))){
var inst_30242 = (state_30244[(2)]);
var state_30244__$1 = state_30244;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30244__$1,inst_30242);
} else {
if((state_val_30245 === (12))){
var inst_30203 = (state_30244[(9)]);
var inst_30217 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_30203,opts);
var state_30244__$1 = state_30244;
if(cljs.core.truth_(inst_30217)){
var statearr_30255_30281 = state_30244__$1;
(statearr_30255_30281[(1)] = (15));

} else {
var statearr_30256_30282 = state_30244__$1;
(statearr_30256_30282[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30245 === (2))){
var state_30244__$1 = state_30244;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30244__$1,(4),ch);
} else {
if((state_val_30245 === (11))){
var inst_30204 = (state_30244[(8)]);
var inst_30209 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30210 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_30204);
var inst_30211 = cljs.core.async.timeout.call(null,(1000));
var inst_30212 = [inst_30210,inst_30211];
var inst_30213 = (new cljs.core.PersistentVector(null,2,(5),inst_30209,inst_30212,null));
var state_30244__$1 = state_30244;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30244__$1,(14),inst_30213);
} else {
if((state_val_30245 === (9))){
var inst_30204 = (state_30244[(8)]);
var inst_30230 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_30231 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30204);
var inst_30232 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30231);
var inst_30233 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30232)].join('');
var inst_30234 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_30233);
var state_30244__$1 = (function (){var statearr_30257 = state_30244;
(statearr_30257[(10)] = inst_30230);

return statearr_30257;
})();
var statearr_30258_30283 = state_30244__$1;
(statearr_30258_30283[(2)] = inst_30234);

(statearr_30258_30283[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30245 === (5))){
var inst_30197 = (state_30244[(7)]);
var inst_30199 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_30200 = (new cljs.core.PersistentArrayMap(null,2,inst_30199,null));
var inst_30201 = (new cljs.core.PersistentHashSet(null,inst_30200,null));
var inst_30202 = figwheel.client.focus_msgs.call(null,inst_30201,inst_30197);
var inst_30203 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_30202);
var inst_30204 = cljs.core.first.call(null,inst_30202);
var inst_30205 = figwheel.client.autoload_QMARK_.call(null);
var state_30244__$1 = (function (){var statearr_30259 = state_30244;
(statearr_30259[(8)] = inst_30204);

(statearr_30259[(9)] = inst_30203);

return statearr_30259;
})();
if(cljs.core.truth_(inst_30205)){
var statearr_30260_30284 = state_30244__$1;
(statearr_30260_30284[(1)] = (8));

} else {
var statearr_30261_30285 = state_30244__$1;
(statearr_30261_30285[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30245 === (14))){
var inst_30215 = (state_30244[(2)]);
var state_30244__$1 = state_30244;
var statearr_30262_30286 = state_30244__$1;
(statearr_30262_30286[(2)] = inst_30215);

(statearr_30262_30286[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30245 === (16))){
var state_30244__$1 = state_30244;
var statearr_30263_30287 = state_30244__$1;
(statearr_30263_30287[(2)] = null);

(statearr_30263_30287[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30245 === (10))){
var inst_30236 = (state_30244[(2)]);
var state_30244__$1 = (function (){var statearr_30264 = state_30244;
(statearr_30264[(11)] = inst_30236);

return statearr_30264;
})();
var statearr_30265_30288 = state_30244__$1;
(statearr_30265_30288[(2)] = null);

(statearr_30265_30288[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30245 === (8))){
var inst_30203 = (state_30244[(9)]);
var inst_30207 = figwheel.client.reload_file_state_QMARK_.call(null,inst_30203,opts);
var state_30244__$1 = state_30244;
if(cljs.core.truth_(inst_30207)){
var statearr_30266_30289 = state_30244__$1;
(statearr_30266_30289[(1)] = (11));

} else {
var statearr_30267_30290 = state_30244__$1;
(statearr_30267_30290[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24411__auto___30272,ch))
;
return ((function (switch__24321__auto__,c__24411__auto___30272,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__24322__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__24322__auto____0 = (function (){
var statearr_30268 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30268[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__24322__auto__);

(statearr_30268[(1)] = (1));

return statearr_30268;
});
var figwheel$client$file_reloader_plugin_$_state_machine__24322__auto____1 = (function (state_30244){
while(true){
var ret_value__24323__auto__ = (function (){try{while(true){
var result__24324__auto__ = switch__24321__auto__.call(null,state_30244);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24324__auto__;
}
break;
}
}catch (e30269){if((e30269 instanceof Object)){
var ex__24325__auto__ = e30269;
var statearr_30270_30291 = state_30244;
(statearr_30270_30291[(5)] = ex__24325__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30244);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30269;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24323__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30292 = state_30244;
state_30244 = G__30292;
continue;
} else {
return ret_value__24323__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__24322__auto__ = function(state_30244){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__24322__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__24322__auto____1.call(this,state_30244);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__24322__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__24322__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__24322__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__24322__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__24322__auto__;
})()
;})(switch__24321__auto__,c__24411__auto___30272,ch))
})();
var state__24413__auto__ = (function (){var statearr_30271 = f__24412__auto__.call(null);
(statearr_30271[(6)] = c__24411__auto___30272);

return statearr_30271;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24413__auto__);
});})(c__24411__auto___30272,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__30293_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__30293_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_30297 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_30297){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_30295 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_30296 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_30295,_STAR_print_fn_STAR_30296,sb,base_path_30297){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR_30295,_STAR_print_fn_STAR_30296,sb,base_path_30297))
;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = ((!(typeof result_value === 'string'))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_30296;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_30295;
}}catch (e30294){if((e30294 instanceof Error)){
var e = e30294;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_30297], null));
} else {
var e = e30294;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_30297))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__30298){
var map__30299 = p__30298;
var map__30299__$1 = ((((!((map__30299 == null)))?(((((map__30299.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30299.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30299):map__30299);
var opts = map__30299__$1;
var build_id = cljs.core.get.call(null,map__30299__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__30299,map__30299__$1,opts,build_id){
return (function (p__30301){
var vec__30302 = p__30301;
var seq__30303 = cljs.core.seq.call(null,vec__30302);
var first__30304 = cljs.core.first.call(null,seq__30303);
var seq__30303__$1 = cljs.core.next.call(null,seq__30303);
var map__30305 = first__30304;
var map__30305__$1 = ((((!((map__30305 == null)))?(((((map__30305.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30305.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30305):map__30305);
var msg = map__30305__$1;
var msg_name = cljs.core.get.call(null,map__30305__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30303__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__30302,seq__30303,first__30304,seq__30303__$1,map__30305,map__30305__$1,msg,msg_name,_,map__30299,map__30299__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__30302,seq__30303,first__30304,seq__30303__$1,map__30305,map__30305__$1,msg,msg_name,_,map__30299,map__30299__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__30299,map__30299__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__30307){
var vec__30308 = p__30307;
var seq__30309 = cljs.core.seq.call(null,vec__30308);
var first__30310 = cljs.core.first.call(null,seq__30309);
var seq__30309__$1 = cljs.core.next.call(null,seq__30309);
var map__30311 = first__30310;
var map__30311__$1 = ((((!((map__30311 == null)))?(((((map__30311.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30311.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30311):map__30311);
var msg = map__30311__$1;
var msg_name = cljs.core.get.call(null,map__30311__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30309__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__30313){
var map__30314 = p__30313;
var map__30314__$1 = ((((!((map__30314 == null)))?(((((map__30314.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30314.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30314):map__30314);
var on_compile_warning = cljs.core.get.call(null,map__30314__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__30314__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__30314,map__30314__$1,on_compile_warning,on_compile_fail){
return (function (p__30316){
var vec__30317 = p__30316;
var seq__30318 = cljs.core.seq.call(null,vec__30317);
var first__30319 = cljs.core.first.call(null,seq__30318);
var seq__30318__$1 = cljs.core.next.call(null,seq__30318);
var map__30320 = first__30319;
var map__30320__$1 = ((((!((map__30320 == null)))?(((((map__30320.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30320.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30320):map__30320);
var msg = map__30320__$1;
var msg_name = cljs.core.get.call(null,map__30320__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30318__$1;
var pred__30322 = cljs.core._EQ_;
var expr__30323 = msg_name;
if(cljs.core.truth_(pred__30322.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__30323))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__30322.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__30323))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__30314,map__30314__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__24411__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24411__auto__,msg_hist,msg_names,msg){
return (function (){
var f__24412__auto__ = (function (){var switch__24321__auto__ = ((function (c__24411__auto__,msg_hist,msg_names,msg){
return (function (state_30412){
var state_val_30413 = (state_30412[(1)]);
if((state_val_30413 === (7))){
var inst_30332 = (state_30412[(2)]);
var state_30412__$1 = state_30412;
if(cljs.core.truth_(inst_30332)){
var statearr_30414_30461 = state_30412__$1;
(statearr_30414_30461[(1)] = (8));

} else {
var statearr_30415_30462 = state_30412__$1;
(statearr_30415_30462[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30413 === (20))){
var inst_30406 = (state_30412[(2)]);
var state_30412__$1 = state_30412;
var statearr_30416_30463 = state_30412__$1;
(statearr_30416_30463[(2)] = inst_30406);

(statearr_30416_30463[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30413 === (27))){
var inst_30402 = (state_30412[(2)]);
var state_30412__$1 = state_30412;
var statearr_30417_30464 = state_30412__$1;
(statearr_30417_30464[(2)] = inst_30402);

(statearr_30417_30464[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30413 === (1))){
var inst_30325 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_30412__$1 = state_30412;
if(cljs.core.truth_(inst_30325)){
var statearr_30418_30465 = state_30412__$1;
(statearr_30418_30465[(1)] = (2));

} else {
var statearr_30419_30466 = state_30412__$1;
(statearr_30419_30466[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30413 === (24))){
var inst_30404 = (state_30412[(2)]);
var state_30412__$1 = state_30412;
var statearr_30420_30467 = state_30412__$1;
(statearr_30420_30467[(2)] = inst_30404);

(statearr_30420_30467[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30413 === (4))){
var inst_30410 = (state_30412[(2)]);
var state_30412__$1 = state_30412;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30412__$1,inst_30410);
} else {
if((state_val_30413 === (15))){
var inst_30408 = (state_30412[(2)]);
var state_30412__$1 = state_30412;
var statearr_30421_30468 = state_30412__$1;
(statearr_30421_30468[(2)] = inst_30408);

(statearr_30421_30468[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30413 === (21))){
var inst_30361 = (state_30412[(2)]);
var inst_30362 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30363 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30362);
var state_30412__$1 = (function (){var statearr_30422 = state_30412;
(statearr_30422[(7)] = inst_30361);

return statearr_30422;
})();
var statearr_30423_30469 = state_30412__$1;
(statearr_30423_30469[(2)] = inst_30363);

(statearr_30423_30469[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30413 === (31))){
var inst_30391 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_30412__$1 = state_30412;
if(cljs.core.truth_(inst_30391)){
var statearr_30424_30470 = state_30412__$1;
(statearr_30424_30470[(1)] = (34));

} else {
var statearr_30425_30471 = state_30412__$1;
(statearr_30425_30471[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30413 === (32))){
var inst_30400 = (state_30412[(2)]);
var state_30412__$1 = state_30412;
var statearr_30426_30472 = state_30412__$1;
(statearr_30426_30472[(2)] = inst_30400);

(statearr_30426_30472[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30413 === (33))){
var inst_30387 = (state_30412[(2)]);
var inst_30388 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30389 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30388);
var state_30412__$1 = (function (){var statearr_30427 = state_30412;
(statearr_30427[(8)] = inst_30387);

return statearr_30427;
})();
var statearr_30428_30473 = state_30412__$1;
(statearr_30428_30473[(2)] = inst_30389);

(statearr_30428_30473[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30413 === (13))){
var inst_30346 = figwheel.client.heads_up.clear.call(null);
var state_30412__$1 = state_30412;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30412__$1,(16),inst_30346);
} else {
if((state_val_30413 === (22))){
var inst_30367 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30368 = figwheel.client.heads_up.append_warning_message.call(null,inst_30367);
var state_30412__$1 = state_30412;
var statearr_30429_30474 = state_30412__$1;
(statearr_30429_30474[(2)] = inst_30368);

(statearr_30429_30474[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30413 === (36))){
var inst_30398 = (state_30412[(2)]);
var state_30412__$1 = state_30412;
var statearr_30430_30475 = state_30412__$1;
(statearr_30430_30475[(2)] = inst_30398);

(statearr_30430_30475[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30413 === (29))){
var inst_30378 = (state_30412[(2)]);
var inst_30379 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30380 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30379);
var state_30412__$1 = (function (){var statearr_30431 = state_30412;
(statearr_30431[(9)] = inst_30378);

return statearr_30431;
})();
var statearr_30432_30476 = state_30412__$1;
(statearr_30432_30476[(2)] = inst_30380);

(statearr_30432_30476[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30413 === (6))){
var inst_30327 = (state_30412[(10)]);
var state_30412__$1 = state_30412;
var statearr_30433_30477 = state_30412__$1;
(statearr_30433_30477[(2)] = inst_30327);

(statearr_30433_30477[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30413 === (28))){
var inst_30374 = (state_30412[(2)]);
var inst_30375 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30376 = figwheel.client.heads_up.display_warning.call(null,inst_30375);
var state_30412__$1 = (function (){var statearr_30434 = state_30412;
(statearr_30434[(11)] = inst_30374);

return statearr_30434;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30412__$1,(29),inst_30376);
} else {
if((state_val_30413 === (25))){
var inst_30372 = figwheel.client.heads_up.clear.call(null);
var state_30412__$1 = state_30412;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30412__$1,(28),inst_30372);
} else {
if((state_val_30413 === (34))){
var inst_30393 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30412__$1 = state_30412;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30412__$1,(37),inst_30393);
} else {
if((state_val_30413 === (17))){
var inst_30352 = (state_30412[(2)]);
var inst_30353 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30354 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30353);
var state_30412__$1 = (function (){var statearr_30435 = state_30412;
(statearr_30435[(12)] = inst_30352);

return statearr_30435;
})();
var statearr_30436_30478 = state_30412__$1;
(statearr_30436_30478[(2)] = inst_30354);

(statearr_30436_30478[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30413 === (3))){
var inst_30344 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_30412__$1 = state_30412;
if(cljs.core.truth_(inst_30344)){
var statearr_30437_30479 = state_30412__$1;
(statearr_30437_30479[(1)] = (13));

} else {
var statearr_30438_30480 = state_30412__$1;
(statearr_30438_30480[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30413 === (12))){
var inst_30340 = (state_30412[(2)]);
var state_30412__$1 = state_30412;
var statearr_30439_30481 = state_30412__$1;
(statearr_30439_30481[(2)] = inst_30340);

(statearr_30439_30481[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30413 === (2))){
var inst_30327 = (state_30412[(10)]);
var inst_30327__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_30412__$1 = (function (){var statearr_30440 = state_30412;
(statearr_30440[(10)] = inst_30327__$1);

return statearr_30440;
})();
if(cljs.core.truth_(inst_30327__$1)){
var statearr_30441_30482 = state_30412__$1;
(statearr_30441_30482[(1)] = (5));

} else {
var statearr_30442_30483 = state_30412__$1;
(statearr_30442_30483[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30413 === (23))){
var inst_30370 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_30412__$1 = state_30412;
if(cljs.core.truth_(inst_30370)){
var statearr_30443_30484 = state_30412__$1;
(statearr_30443_30484[(1)] = (25));

} else {
var statearr_30444_30485 = state_30412__$1;
(statearr_30444_30485[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30413 === (35))){
var state_30412__$1 = state_30412;
var statearr_30445_30486 = state_30412__$1;
(statearr_30445_30486[(2)] = null);

(statearr_30445_30486[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30413 === (19))){
var inst_30365 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_30412__$1 = state_30412;
if(cljs.core.truth_(inst_30365)){
var statearr_30446_30487 = state_30412__$1;
(statearr_30446_30487[(1)] = (22));

} else {
var statearr_30447_30488 = state_30412__$1;
(statearr_30447_30488[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30413 === (11))){
var inst_30336 = (state_30412[(2)]);
var state_30412__$1 = state_30412;
var statearr_30448_30489 = state_30412__$1;
(statearr_30448_30489[(2)] = inst_30336);

(statearr_30448_30489[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30413 === (9))){
var inst_30338 = figwheel.client.heads_up.clear.call(null);
var state_30412__$1 = state_30412;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30412__$1,(12),inst_30338);
} else {
if((state_val_30413 === (5))){
var inst_30329 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_30412__$1 = state_30412;
var statearr_30449_30490 = state_30412__$1;
(statearr_30449_30490[(2)] = inst_30329);

(statearr_30449_30490[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30413 === (14))){
var inst_30356 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_30412__$1 = state_30412;
if(cljs.core.truth_(inst_30356)){
var statearr_30450_30491 = state_30412__$1;
(statearr_30450_30491[(1)] = (18));

} else {
var statearr_30451_30492 = state_30412__$1;
(statearr_30451_30492[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30413 === (26))){
var inst_30382 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_30412__$1 = state_30412;
if(cljs.core.truth_(inst_30382)){
var statearr_30452_30493 = state_30412__$1;
(statearr_30452_30493[(1)] = (30));

} else {
var statearr_30453_30494 = state_30412__$1;
(statearr_30453_30494[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30413 === (16))){
var inst_30348 = (state_30412[(2)]);
var inst_30349 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30350 = figwheel.client.heads_up.display_exception.call(null,inst_30349);
var state_30412__$1 = (function (){var statearr_30454 = state_30412;
(statearr_30454[(13)] = inst_30348);

return statearr_30454;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30412__$1,(17),inst_30350);
} else {
if((state_val_30413 === (30))){
var inst_30384 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30385 = figwheel.client.heads_up.display_warning.call(null,inst_30384);
var state_30412__$1 = state_30412;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30412__$1,(33),inst_30385);
} else {
if((state_val_30413 === (10))){
var inst_30342 = (state_30412[(2)]);
var state_30412__$1 = state_30412;
var statearr_30455_30495 = state_30412__$1;
(statearr_30455_30495[(2)] = inst_30342);

(statearr_30455_30495[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30413 === (18))){
var inst_30358 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30359 = figwheel.client.heads_up.display_exception.call(null,inst_30358);
var state_30412__$1 = state_30412;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30412__$1,(21),inst_30359);
} else {
if((state_val_30413 === (37))){
var inst_30395 = (state_30412[(2)]);
var state_30412__$1 = state_30412;
var statearr_30456_30496 = state_30412__$1;
(statearr_30456_30496[(2)] = inst_30395);

(statearr_30456_30496[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30413 === (8))){
var inst_30334 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30412__$1 = state_30412;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30412__$1,(11),inst_30334);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24411__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__24321__auto__,c__24411__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24322__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24322__auto____0 = (function (){
var statearr_30457 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30457[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24322__auto__);

(statearr_30457[(1)] = (1));

return statearr_30457;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24322__auto____1 = (function (state_30412){
while(true){
var ret_value__24323__auto__ = (function (){try{while(true){
var result__24324__auto__ = switch__24321__auto__.call(null,state_30412);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24324__auto__;
}
break;
}
}catch (e30458){if((e30458 instanceof Object)){
var ex__24325__auto__ = e30458;
var statearr_30459_30497 = state_30412;
(statearr_30459_30497[(5)] = ex__24325__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30412);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30458;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24323__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30498 = state_30412;
state_30412 = G__30498;
continue;
} else {
return ret_value__24323__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24322__auto__ = function(state_30412){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24322__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24322__auto____1.call(this,state_30412);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24322__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24322__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24322__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24322__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24322__auto__;
})()
;})(switch__24321__auto__,c__24411__auto__,msg_hist,msg_names,msg))
})();
var state__24413__auto__ = (function (){var statearr_30460 = f__24412__auto__.call(null);
(statearr_30460[(6)] = c__24411__auto__);

return statearr_30460;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24413__auto__);
});})(c__24411__auto__,msg_hist,msg_names,msg))
);

return c__24411__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__24411__auto___30527 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24411__auto___30527,ch){
return (function (){
var f__24412__auto__ = (function (){var switch__24321__auto__ = ((function (c__24411__auto___30527,ch){
return (function (state_30513){
var state_val_30514 = (state_30513[(1)]);
if((state_val_30514 === (1))){
var state_30513__$1 = state_30513;
var statearr_30515_30528 = state_30513__$1;
(statearr_30515_30528[(2)] = null);

(statearr_30515_30528[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30514 === (2))){
var state_30513__$1 = state_30513;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30513__$1,(4),ch);
} else {
if((state_val_30514 === (3))){
var inst_30511 = (state_30513[(2)]);
var state_30513__$1 = state_30513;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30513__$1,inst_30511);
} else {
if((state_val_30514 === (4))){
var inst_30501 = (state_30513[(7)]);
var inst_30501__$1 = (state_30513[(2)]);
var state_30513__$1 = (function (){var statearr_30516 = state_30513;
(statearr_30516[(7)] = inst_30501__$1);

return statearr_30516;
})();
if(cljs.core.truth_(inst_30501__$1)){
var statearr_30517_30529 = state_30513__$1;
(statearr_30517_30529[(1)] = (5));

} else {
var statearr_30518_30530 = state_30513__$1;
(statearr_30518_30530[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30514 === (5))){
var inst_30501 = (state_30513[(7)]);
var inst_30503 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_30501);
var state_30513__$1 = state_30513;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30513__$1,(8),inst_30503);
} else {
if((state_val_30514 === (6))){
var state_30513__$1 = state_30513;
var statearr_30519_30531 = state_30513__$1;
(statearr_30519_30531[(2)] = null);

(statearr_30519_30531[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30514 === (7))){
var inst_30509 = (state_30513[(2)]);
var state_30513__$1 = state_30513;
var statearr_30520_30532 = state_30513__$1;
(statearr_30520_30532[(2)] = inst_30509);

(statearr_30520_30532[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30514 === (8))){
var inst_30505 = (state_30513[(2)]);
var state_30513__$1 = (function (){var statearr_30521 = state_30513;
(statearr_30521[(8)] = inst_30505);

return statearr_30521;
})();
var statearr_30522_30533 = state_30513__$1;
(statearr_30522_30533[(2)] = null);

(statearr_30522_30533[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__24411__auto___30527,ch))
;
return ((function (switch__24321__auto__,c__24411__auto___30527,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__24322__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__24322__auto____0 = (function (){
var statearr_30523 = [null,null,null,null,null,null,null,null,null];
(statearr_30523[(0)] = figwheel$client$heads_up_plugin_$_state_machine__24322__auto__);

(statearr_30523[(1)] = (1));

return statearr_30523;
});
var figwheel$client$heads_up_plugin_$_state_machine__24322__auto____1 = (function (state_30513){
while(true){
var ret_value__24323__auto__ = (function (){try{while(true){
var result__24324__auto__ = switch__24321__auto__.call(null,state_30513);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24324__auto__;
}
break;
}
}catch (e30524){if((e30524 instanceof Object)){
var ex__24325__auto__ = e30524;
var statearr_30525_30534 = state_30513;
(statearr_30525_30534[(5)] = ex__24325__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30513);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30524;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24323__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30535 = state_30513;
state_30513 = G__30535;
continue;
} else {
return ret_value__24323__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__24322__auto__ = function(state_30513){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__24322__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__24322__auto____1.call(this,state_30513);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__24322__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__24322__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__24322__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__24322__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__24322__auto__;
})()
;})(switch__24321__auto__,c__24411__auto___30527,ch))
})();
var state__24413__auto__ = (function (){var statearr_30526 = f__24412__auto__.call(null);
(statearr_30526[(6)] = c__24411__auto___30527);

return statearr_30526;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24413__auto__);
});})(c__24411__auto___30527,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__24411__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24411__auto__){
return (function (){
var f__24412__auto__ = (function (){var switch__24321__auto__ = ((function (c__24411__auto__){
return (function (state_30541){
var state_val_30542 = (state_30541[(1)]);
if((state_val_30542 === (1))){
var inst_30536 = cljs.core.async.timeout.call(null,(3000));
var state_30541__$1 = state_30541;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30541__$1,(2),inst_30536);
} else {
if((state_val_30542 === (2))){
var inst_30538 = (state_30541[(2)]);
var inst_30539 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_30541__$1 = (function (){var statearr_30543 = state_30541;
(statearr_30543[(7)] = inst_30538);

return statearr_30543;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30541__$1,inst_30539);
} else {
return null;
}
}
});})(c__24411__auto__))
;
return ((function (switch__24321__auto__,c__24411__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__24322__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__24322__auto____0 = (function (){
var statearr_30544 = [null,null,null,null,null,null,null,null];
(statearr_30544[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__24322__auto__);

(statearr_30544[(1)] = (1));

return statearr_30544;
});
var figwheel$client$enforce_project_plugin_$_state_machine__24322__auto____1 = (function (state_30541){
while(true){
var ret_value__24323__auto__ = (function (){try{while(true){
var result__24324__auto__ = switch__24321__auto__.call(null,state_30541);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24324__auto__;
}
break;
}
}catch (e30545){if((e30545 instanceof Object)){
var ex__24325__auto__ = e30545;
var statearr_30546_30548 = state_30541;
(statearr_30546_30548[(5)] = ex__24325__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30541);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30545;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24323__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30549 = state_30541;
state_30541 = G__30549;
continue;
} else {
return ret_value__24323__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__24322__auto__ = function(state_30541){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__24322__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__24322__auto____1.call(this,state_30541);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__24322__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__24322__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__24322__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__24322__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__24322__auto__;
})()
;})(switch__24321__auto__,c__24411__auto__))
})();
var state__24413__auto__ = (function (){var statearr_30547 = f__24412__auto__.call(null);
(statearr_30547[(6)] = c__24411__auto__);

return statearr_30547;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24413__auto__);
});})(c__24411__auto__))
);

return c__24411__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5804__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5804__auto__)){
var figwheel_version = temp__5804__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__24411__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24411__auto__,figwheel_version,temp__5804__auto__){
return (function (){
var f__24412__auto__ = (function (){var switch__24321__auto__ = ((function (c__24411__auto__,figwheel_version,temp__5804__auto__){
return (function (state_30556){
var state_val_30557 = (state_30556[(1)]);
if((state_val_30557 === (1))){
var inst_30550 = cljs.core.async.timeout.call(null,(2000));
var state_30556__$1 = state_30556;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30556__$1,(2),inst_30550);
} else {
if((state_val_30557 === (2))){
var inst_30552 = (state_30556[(2)]);
var inst_30553 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_30554 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_30553);
var state_30556__$1 = (function (){var statearr_30558 = state_30556;
(statearr_30558[(7)] = inst_30552);

return statearr_30558;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30556__$1,inst_30554);
} else {
return null;
}
}
});})(c__24411__auto__,figwheel_version,temp__5804__auto__))
;
return ((function (switch__24321__auto__,c__24411__auto__,figwheel_version,temp__5804__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24322__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24322__auto____0 = (function (){
var statearr_30559 = [null,null,null,null,null,null,null,null];
(statearr_30559[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24322__auto__);

(statearr_30559[(1)] = (1));

return statearr_30559;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24322__auto____1 = (function (state_30556){
while(true){
var ret_value__24323__auto__ = (function (){try{while(true){
var result__24324__auto__ = switch__24321__auto__.call(null,state_30556);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24324__auto__;
}
break;
}
}catch (e30560){if((e30560 instanceof Object)){
var ex__24325__auto__ = e30560;
var statearr_30561_30563 = state_30556;
(statearr_30561_30563[(5)] = ex__24325__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30556);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30560;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24323__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30564 = state_30556;
state_30556 = G__30564;
continue;
} else {
return ret_value__24323__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24322__auto__ = function(state_30556){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24322__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24322__auto____1.call(this,state_30556);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24322__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24322__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24322__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24322__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__24322__auto__;
})()
;})(switch__24321__auto__,c__24411__auto__,figwheel_version,temp__5804__auto__))
})();
var state__24413__auto__ = (function (){var statearr_30562 = f__24412__auto__.call(null);
(statearr_30562[(6)] = c__24411__auto__);

return statearr_30562;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24413__auto__);
});})(c__24411__auto__,figwheel_version,temp__5804__auto__))
);

return c__24411__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__30565){
var map__30566 = p__30565;
var map__30566__$1 = ((((!((map__30566 == null)))?(((((map__30566.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30566.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30566):map__30566);
var file = cljs.core.get.call(null,map__30566__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__30566__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__30566__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__30568 = "";
var G__30568__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30568),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__30568);
var G__30568__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30568__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__30568__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = line;
if(cljs.core.truth_(and__3911__auto__)){
return column;
} else {
return and__3911__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30568__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__30568__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__30569){
var map__30570 = p__30569;
var map__30570__$1 = ((((!((map__30570 == null)))?(((((map__30570.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30570.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30570):map__30570);
var ed = map__30570__$1;
var exception_data = cljs.core.get.call(null,map__30570__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__30570__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_30573 = (function (){var G__30572 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30572)," Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,exception_data))].join('');
} else {
return G__30572;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_30573);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__30574){
var map__30575 = p__30574;
var map__30575__$1 = ((((!((map__30575 == null)))?(((((map__30575.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30575.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30575):map__30575);
var w = map__30575__$1;
var message = cljs.core.get.call(null,map__30575__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,362,362,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__3911__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__3911__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__30577 = cljs.core.seq.call(null,plugins);
var chunk__30578 = null;
var count__30579 = (0);
var i__30580 = (0);
while(true){
if((i__30580 < count__30579)){
var vec__30581 = cljs.core._nth.call(null,chunk__30578,i__30580);
var k = cljs.core.nth.call(null,vec__30581,(0),null);
var plugin = cljs.core.nth.call(null,vec__30581,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30587 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30577,chunk__30578,count__30579,i__30580,pl_30587,vec__30581,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_30587.call(null,msg_hist);
});})(seq__30577,chunk__30578,count__30579,i__30580,pl_30587,vec__30581,k,plugin))
);
} else {
}


var G__30588 = seq__30577;
var G__30589 = chunk__30578;
var G__30590 = count__30579;
var G__30591 = (i__30580 + (1));
seq__30577 = G__30588;
chunk__30578 = G__30589;
count__30579 = G__30590;
i__30580 = G__30591;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__30577);
if(temp__5804__auto__){
var seq__30577__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30577__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__30577__$1);
var G__30592 = cljs.core.chunk_rest.call(null,seq__30577__$1);
var G__30593 = c__4319__auto__;
var G__30594 = cljs.core.count.call(null,c__4319__auto__);
var G__30595 = (0);
seq__30577 = G__30592;
chunk__30578 = G__30593;
count__30579 = G__30594;
i__30580 = G__30595;
continue;
} else {
var vec__30584 = cljs.core.first.call(null,seq__30577__$1);
var k = cljs.core.nth.call(null,vec__30584,(0),null);
var plugin = cljs.core.nth.call(null,vec__30584,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30596 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30577,chunk__30578,count__30579,i__30580,pl_30596,vec__30584,k,plugin,seq__30577__$1,temp__5804__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_30596.call(null,msg_hist);
});})(seq__30577,chunk__30578,count__30579,i__30580,pl_30596,vec__30584,k,plugin,seq__30577__$1,temp__5804__auto__))
);
} else {
}


var G__30597 = cljs.core.next.call(null,seq__30577__$1);
var G__30598 = null;
var G__30599 = (0);
var G__30600 = (0);
seq__30577 = G__30597;
chunk__30578 = G__30598;
count__30579 = G__30599;
i__30580 = G__30600;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__30602 = arguments.length;
switch (G__30602) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if(((!((goog.dependencies_ == null))) || (((!((goog.debugLoader_ == null))) && (!((goog.debugLoader_.dependencies_ == null))))))){
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__30603_30608 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__30604_30609 = null;
var count__30605_30610 = (0);
var i__30606_30611 = (0);
while(true){
if((i__30606_30611 < count__30605_30610)){
var msg_30612 = cljs.core._nth.call(null,chunk__30604_30609,i__30606_30611);
figwheel.client.socket.handle_incoming_message.call(null,msg_30612);


var G__30613 = seq__30603_30608;
var G__30614 = chunk__30604_30609;
var G__30615 = count__30605_30610;
var G__30616 = (i__30606_30611 + (1));
seq__30603_30608 = G__30613;
chunk__30604_30609 = G__30614;
count__30605_30610 = G__30615;
i__30606_30611 = G__30616;
continue;
} else {
var temp__5804__auto___30617 = cljs.core.seq.call(null,seq__30603_30608);
if(temp__5804__auto___30617){
var seq__30603_30618__$1 = temp__5804__auto___30617;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30603_30618__$1)){
var c__4319__auto___30619 = cljs.core.chunk_first.call(null,seq__30603_30618__$1);
var G__30620 = cljs.core.chunk_rest.call(null,seq__30603_30618__$1);
var G__30621 = c__4319__auto___30619;
var G__30622 = cljs.core.count.call(null,c__4319__auto___30619);
var G__30623 = (0);
seq__30603_30608 = G__30620;
chunk__30604_30609 = G__30621;
count__30605_30610 = G__30622;
i__30606_30611 = G__30623;
continue;
} else {
var msg_30624 = cljs.core.first.call(null,seq__30603_30618__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_30624);


var G__30625 = cljs.core.next.call(null,seq__30603_30618__$1);
var G__30626 = null;
var G__30627 = (0);
var G__30628 = (0);
seq__30603_30608 = G__30625;
chunk__30604_30609 = G__30626;
count__30605_30610 = G__30627;
i__30606_30611 = G__30628;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
} else {
return null;
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4502__auto__ = [];
var len__4499__auto___30633 = arguments.length;
var i__4500__auto___30634 = (0);
while(true){
if((i__4500__auto___30634 < len__4499__auto___30633)){
args__4502__auto__.push((arguments[i__4500__auto___30634]));

var G__30635 = (i__4500__auto___30634 + (1));
i__4500__auto___30634 = G__30635;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__30630){
var map__30631 = p__30630;
var map__30631__$1 = ((((!((map__30631 == null)))?(((((map__30631.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30631.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30631):map__30631);
var opts = map__30631__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq30629){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30629));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e30636){if((e30636 instanceof Error)){
var e = e30636;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e30636;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__30637){
var map__30638 = p__30637;
var map__30638__$1 = ((((!((map__30638 == null)))?(((((map__30638.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30638.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30638):map__30638);
var msg_name = cljs.core.get.call(null,map__30638__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1744996268216
