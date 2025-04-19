// Compiled by ClojureScript 1.10.238 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('module$Users$artemapostatov$work$wp_test$scopus_search$node_modules$react_dom$index');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('reagent.impl.protocols');
goog.require('reagent.ratom');
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return module$Users$artemapostatov$work$wp_test$scopus_search$node_modules$react_dom$index["default"].unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_36397 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return module$Users$artemapostatov$work$wp_test$scopus_search$node_modules$react_dom$index["default"].render(comp.call(null),container,((function (_STAR_always_update_STAR_36397){
return (function (){
var _STAR_always_update_STAR_36398 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render.call(null);

if(!((callback == null))){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_36398;
}});})(_STAR_always_update_STAR_36397))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_36397;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__36400 = arguments.length;
switch (G__36400) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,reagent.impl.template._STAR_current_default_compiler_STAR_);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_.call(null);

var vec__36401 = ((cljs.core.map_QMARK_.call(null,callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compiler","compiler",-267926731).cljs$core$IFn$_invoke$arity$1(callback_or_compiler),new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null):((cljs.core.fn_QMARK_.call(null,callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template._STAR_current_default_compiler_STAR_,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,null], null)
));
var compiler = cljs.core.nth.call(null,vec__36401,(0),null);
var callback = cljs.core.nth.call(null,vec__36401,(1),null);
var f = ((function (vec__36401,compiler,callback){
return (function (){
return reagent.impl.protocols.as_element.call(null,compiler,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});})(vec__36401,compiler,callback))
;
return reagent.dom.render_comp.call(null,f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return module$Users$artemapostatov$work$wp_test$scopus_search$node_modules$react_dom$index["default"].findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__36405_36415 = cljs.core.seq.call(null,cljs.core.deref.call(null,reagent.dom.roots));
var chunk__36406_36416 = null;
var count__36407_36417 = (0);
var i__36408_36418 = (0);
while(true){
if((i__36408_36418 < count__36407_36417)){
var vec__36409_36419 = cljs.core._nth.call(null,chunk__36406_36416,i__36408_36418);
var container_36420 = cljs.core.nth.call(null,vec__36409_36419,(0),null);
var comp_36421 = cljs.core.nth.call(null,vec__36409_36419,(1),null);
reagent.dom.re_render_component.call(null,comp_36421,container_36420);


var G__36422 = seq__36405_36415;
var G__36423 = chunk__36406_36416;
var G__36424 = count__36407_36417;
var G__36425 = (i__36408_36418 + (1));
seq__36405_36415 = G__36422;
chunk__36406_36416 = G__36423;
count__36407_36417 = G__36424;
i__36408_36418 = G__36425;
continue;
} else {
var temp__5804__auto___36426 = cljs.core.seq.call(null,seq__36405_36415);
if(temp__5804__auto___36426){
var seq__36405_36427__$1 = temp__5804__auto___36426;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36405_36427__$1)){
var c__4319__auto___36428 = cljs.core.chunk_first.call(null,seq__36405_36427__$1);
var G__36429 = cljs.core.chunk_rest.call(null,seq__36405_36427__$1);
var G__36430 = c__4319__auto___36428;
var G__36431 = cljs.core.count.call(null,c__4319__auto___36428);
var G__36432 = (0);
seq__36405_36415 = G__36429;
chunk__36406_36416 = G__36430;
count__36407_36417 = G__36431;
i__36408_36418 = G__36432;
continue;
} else {
var vec__36412_36433 = cljs.core.first.call(null,seq__36405_36427__$1);
var container_36434 = cljs.core.nth.call(null,vec__36412_36433,(0),null);
var comp_36435 = cljs.core.nth.call(null,vec__36412_36433,(1),null);
reagent.dom.re_render_component.call(null,comp_36435,container_36434);


var G__36436 = cljs.core.next.call(null,seq__36405_36427__$1);
var G__36437 = null;
var G__36438 = (0);
var G__36439 = (0);
seq__36405_36415 = G__36436;
chunk__36406_36416 = G__36437;
count__36407_36417 = G__36438;
i__36408_36418 = G__36439;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render.call(null);
});

//# sourceMappingURL=dom.js.map?rel=1744997425329
