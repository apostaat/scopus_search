// Compiled by ClojureScript 1.10.238 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.debug_loader_QMARK_ = (function figwheel$client$file_reloading$debug_loader_QMARK_(){
return !((goog.debugLoader_ == null));
});
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__3922__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__3922__auto__){
return or__3922__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (cljs.core.truth_(figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (ns){

return goog.debugLoader_.getPathFromDeps_(ns);
}):(function (ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
}));
figwheel.client.file_reloading.provided_QMARK_ = (cljs.core.truth_(figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (ns){
return goog.getObjectByName(ns);
}):(function (ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
}));
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(ns){
var or__3922__auto__ = cljs.core._EQ_.call(null,"goog",ns);
if(or__3922__auto__){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = cljs.core._EQ_.call(null,"cljs.core",ns);
if(or__3922__auto____$1){
return or__3922__auto____$1;
} else {
var or__3922__auto____$2 = cljs.core._EQ_.call(null,"cljs.nodejs",ns);
if(or__3922__auto____$2){
return or__3922__auto____$2;
} else {
var or__3922__auto____$3 = goog.string.startsWith(ns,"clojure.");
if(cljs.core.truth_(or__3922__auto____$3)){
return or__3922__auto____$3;
} else {
return goog.string.startsWith(ns,"goog.");
}
}
}
}
});
figwheel.client.file_reloading.base_requires_for_ns_path = (cljs.core.truth_(figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (path){
var G__29249 = goog.object.get(goog.debugLoader_.dependencies_,path);
if((G__29249 == null)){
return null;
} else {
return goog.object.get(G__29249,"requires");
}
}):(function (path){
var G__29250 = goog.object.get(goog.dependencies_.requires,path);
if((G__29250 == null)){
return null;
} else {
return goog.object.getKeys(G__29250);
}
}));
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__29251_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__29251_SHARP_));
}),figwheel.client.file_reloading.base_requires_for_ns_path.call(null,figwheel.client.file_reloading.name__GT_path.call(null,ns))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (cljs.core.truth_(figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (_,___$1){
return null;
}):(function (path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
}));
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (cljs.core.truth_(figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (){
return null;
}):(function (){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
}));
figwheel.client.file_reloading.path__GT_name = (cljs.core.truth_(figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (path){
var G__29252 = goog.object.get(goog.debugLoader_.dependencies_,path);
var G__29252__$1 = (((G__29252 == null))?null:goog.object.get(G__29252,"provides"));
if((G__29252__$1 == null)){
return null;
} else {
return cljs.core.set.call(null,G__29252__$1);
}
}):(function (path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
}));
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),parent_ns);
});
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (cljs.core.truth_(figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (){
return goog.object.forEach(goog.object.filter(goog.debugLoader_.dependencies_,(function (dep,path,_){
return cljs.core.not.call(null,cljs.core.some.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_,goog.object.get(dep,"provides")));
})),(function (dep,path,_){
var provides = goog.object.get(dep,"provides");
var requires = goog.object.get(dep,"requires");
var seq__29253 = cljs.core.seq.call(null,provides);
var chunk__29254 = null;
var count__29255 = (0);
var i__29256 = (0);
while(true){
if((i__29256 < count__29255)){
var prov = cljs.core._nth.call(null,chunk__29254,i__29256);
var seq__29257_29269 = cljs.core.seq.call(null,requires);
var chunk__29258_29270 = null;
var count__29259_29271 = (0);
var i__29260_29272 = (0);
while(true){
if((i__29260_29272 < count__29259_29271)){
var req_29273 = cljs.core._nth.call(null,chunk__29258_29270,i__29260_29272);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29273,prov);


var G__29274 = seq__29257_29269;
var G__29275 = chunk__29258_29270;
var G__29276 = count__29259_29271;
var G__29277 = (i__29260_29272 + (1));
seq__29257_29269 = G__29274;
chunk__29258_29270 = G__29275;
count__29259_29271 = G__29276;
i__29260_29272 = G__29277;
continue;
} else {
var temp__5804__auto___29278 = cljs.core.seq.call(null,seq__29257_29269);
if(temp__5804__auto___29278){
var seq__29257_29279__$1 = temp__5804__auto___29278;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29257_29279__$1)){
var c__4319__auto___29280 = cljs.core.chunk_first.call(null,seq__29257_29279__$1);
var G__29281 = cljs.core.chunk_rest.call(null,seq__29257_29279__$1);
var G__29282 = c__4319__auto___29280;
var G__29283 = cljs.core.count.call(null,c__4319__auto___29280);
var G__29284 = (0);
seq__29257_29269 = G__29281;
chunk__29258_29270 = G__29282;
count__29259_29271 = G__29283;
i__29260_29272 = G__29284;
continue;
} else {
var req_29285 = cljs.core.first.call(null,seq__29257_29279__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29285,prov);


var G__29286 = cljs.core.next.call(null,seq__29257_29279__$1);
var G__29287 = null;
var G__29288 = (0);
var G__29289 = (0);
seq__29257_29269 = G__29286;
chunk__29258_29270 = G__29287;
count__29259_29271 = G__29288;
i__29260_29272 = G__29289;
continue;
}
} else {
}
}
break;
}


var G__29290 = seq__29253;
var G__29291 = chunk__29254;
var G__29292 = count__29255;
var G__29293 = (i__29256 + (1));
seq__29253 = G__29290;
chunk__29254 = G__29291;
count__29255 = G__29292;
i__29256 = G__29293;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__29253);
if(temp__5804__auto__){
var seq__29253__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29253__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__29253__$1);
var G__29294 = cljs.core.chunk_rest.call(null,seq__29253__$1);
var G__29295 = c__4319__auto__;
var G__29296 = cljs.core.count.call(null,c__4319__auto__);
var G__29297 = (0);
seq__29253 = G__29294;
chunk__29254 = G__29295;
count__29255 = G__29296;
i__29256 = G__29297;
continue;
} else {
var prov = cljs.core.first.call(null,seq__29253__$1);
var seq__29261_29298 = cljs.core.seq.call(null,requires);
var chunk__29262_29299 = null;
var count__29263_29300 = (0);
var i__29264_29301 = (0);
while(true){
if((i__29264_29301 < count__29263_29300)){
var req_29302 = cljs.core._nth.call(null,chunk__29262_29299,i__29264_29301);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29302,prov);


var G__29303 = seq__29261_29298;
var G__29304 = chunk__29262_29299;
var G__29305 = count__29263_29300;
var G__29306 = (i__29264_29301 + (1));
seq__29261_29298 = G__29303;
chunk__29262_29299 = G__29304;
count__29263_29300 = G__29305;
i__29264_29301 = G__29306;
continue;
} else {
var temp__5804__auto___29307__$1 = cljs.core.seq.call(null,seq__29261_29298);
if(temp__5804__auto___29307__$1){
var seq__29261_29308__$1 = temp__5804__auto___29307__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29261_29308__$1)){
var c__4319__auto___29309 = cljs.core.chunk_first.call(null,seq__29261_29308__$1);
var G__29310 = cljs.core.chunk_rest.call(null,seq__29261_29308__$1);
var G__29311 = c__4319__auto___29309;
var G__29312 = cljs.core.count.call(null,c__4319__auto___29309);
var G__29313 = (0);
seq__29261_29298 = G__29310;
chunk__29262_29299 = G__29311;
count__29263_29300 = G__29312;
i__29264_29301 = G__29313;
continue;
} else {
var req_29314 = cljs.core.first.call(null,seq__29261_29308__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29314,prov);


var G__29315 = cljs.core.next.call(null,seq__29261_29308__$1);
var G__29316 = null;
var G__29317 = (0);
var G__29318 = (0);
seq__29261_29298 = G__29315;
chunk__29262_29299 = G__29316;
count__29263_29300 = G__29317;
i__29264_29301 = G__29318;
continue;
}
} else {
}
}
break;
}


var G__29319 = cljs.core.next.call(null,seq__29253__$1);
var G__29320 = null;
var G__29321 = (0);
var G__29322 = (0);
seq__29253 = G__29319;
chunk__29254 = G__29320;
count__29255 = G__29321;
i__29256 = G__29322;
continue;
}
} else {
return null;
}
}
break;
}
}));
}):(function (){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (deps,path,_){
var seq__29265 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,path));
var chunk__29266 = null;
var count__29267 = (0);
var i__29268 = (0);
while(true){
if((i__29268 < count__29267)){
var prov = cljs.core._nth.call(null,chunk__29266,i__29268);
goog.object.forEach(deps,((function (seq__29265,chunk__29266,count__29267,i__29268,prov,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__29265,chunk__29266,count__29267,i__29268,prov,requires))
);


var G__29323 = seq__29265;
var G__29324 = chunk__29266;
var G__29325 = count__29267;
var G__29326 = (i__29268 + (1));
seq__29265 = G__29323;
chunk__29266 = G__29324;
count__29267 = G__29325;
i__29268 = G__29326;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__29265);
if(temp__5804__auto__){
var seq__29265__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29265__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__29265__$1);
var G__29327 = cljs.core.chunk_rest.call(null,seq__29265__$1);
var G__29328 = c__4319__auto__;
var G__29329 = cljs.core.count.call(null,c__4319__auto__);
var G__29330 = (0);
seq__29265 = G__29327;
chunk__29266 = G__29328;
count__29267 = G__29329;
i__29268 = G__29330;
continue;
} else {
var prov = cljs.core.first.call(null,seq__29265__$1);
goog.object.forEach(deps,((function (seq__29265,chunk__29266,count__29267,i__29268,prov,seq__29265__$1,temp__5804__auto__,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__29265,chunk__29266,count__29267,i__29268,prov,seq__29265__$1,temp__5804__auto__,requires))
);


var G__29331 = cljs.core.next.call(null,seq__29265__$1);
var G__29332 = null;
var G__29333 = (0);
var G__29334 = (0);
seq__29265 = G__29331;
chunk__29266 = G__29332;
count__29267 = G__29333;
i__29268 = G__29334;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
}));
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__29335){
var vec__29336 = p__29335;
var _ = cljs.core.nth.call(null,vec__29336,(0),null);
var v = cljs.core.nth.call(null,vec__29336,(1),null);
var and__3911__auto__ = v;
if(cljs.core.truth_(and__3911__auto__)){
return v.call(null,dep);
} else {
return and__3911__auto__;
}
}),cljs.core.filter.call(null,(function (p__29339){
var vec__29340 = p__29339;
var k = cljs.core.nth.call(null,vec__29340,(0),null);
var v = cljs.core.nth.call(null,vec__29340,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__29352_29360 = cljs.core.seq.call(null,deps);
var chunk__29353_29361 = null;
var count__29354_29362 = (0);
var i__29355_29363 = (0);
while(true){
if((i__29355_29363 < count__29354_29362)){
var dep_29364 = cljs.core._nth.call(null,chunk__29353_29361,i__29355_29363);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_29364;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_29364));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_29364,(depth + (1)),state);
} else {
}


var G__29365 = seq__29352_29360;
var G__29366 = chunk__29353_29361;
var G__29367 = count__29354_29362;
var G__29368 = (i__29355_29363 + (1));
seq__29352_29360 = G__29365;
chunk__29353_29361 = G__29366;
count__29354_29362 = G__29367;
i__29355_29363 = G__29368;
continue;
} else {
var temp__5804__auto___29369 = cljs.core.seq.call(null,seq__29352_29360);
if(temp__5804__auto___29369){
var seq__29352_29370__$1 = temp__5804__auto___29369;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29352_29370__$1)){
var c__4319__auto___29371 = cljs.core.chunk_first.call(null,seq__29352_29370__$1);
var G__29372 = cljs.core.chunk_rest.call(null,seq__29352_29370__$1);
var G__29373 = c__4319__auto___29371;
var G__29374 = cljs.core.count.call(null,c__4319__auto___29371);
var G__29375 = (0);
seq__29352_29360 = G__29372;
chunk__29353_29361 = G__29373;
count__29354_29362 = G__29374;
i__29355_29363 = G__29375;
continue;
} else {
var dep_29376 = cljs.core.first.call(null,seq__29352_29370__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_29376;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_29376));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_29376,(depth + (1)),state);
} else {
}


var G__29377 = cljs.core.next.call(null,seq__29352_29370__$1);
var G__29378 = null;
var G__29379 = (0);
var G__29380 = (0);
seq__29352_29360 = G__29377;
chunk__29353_29361 = G__29378;
count__29354_29362 = G__29379;
i__29355_29363 = G__29380;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__29356){
var vec__29357 = p__29356;
var seq__29358 = cljs.core.seq.call(null,vec__29357);
var first__29359 = cljs.core.first.call(null,seq__29358);
var seq__29358__$1 = cljs.core.next.call(null,seq__29358);
var x = first__29359;
var xs = seq__29358__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__29357,seq__29358,first__29359,seq__29358__$1,x,xs,get_deps__$1){
return (function (p1__29343_SHARP_){
return clojure.set.difference.call(null,p1__29343_SHARP_,x);
});})(vec__29357,seq__29358,first__29359,seq__29358__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (cljs.core.truth_(figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.debugLoader_.written_,path);

return goog.object.remove(goog.debugLoader_.written_,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
}):(function (ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
}));
figwheel.client.file_reloading.resolve_ns = (cljs.core.truth_(figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?figwheel.client.file_reloading.name__GT_path:(function (p1__29381_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,p1__29381_SHARP_))].join('');
}));
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__29382 = cljs.core.seq.call(null,provides);
var chunk__29383 = null;
var count__29384 = (0);
var i__29385 = (0);
while(true){
if((i__29385 < count__29384)){
var prov = cljs.core._nth.call(null,chunk__29383,i__29385);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29386_29394 = cljs.core.seq.call(null,requires);
var chunk__29387_29395 = null;
var count__29388_29396 = (0);
var i__29389_29397 = (0);
while(true){
if((i__29389_29397 < count__29388_29396)){
var req_29398 = cljs.core._nth.call(null,chunk__29387_29395,i__29389_29397);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29398,prov);


var G__29399 = seq__29386_29394;
var G__29400 = chunk__29387_29395;
var G__29401 = count__29388_29396;
var G__29402 = (i__29389_29397 + (1));
seq__29386_29394 = G__29399;
chunk__29387_29395 = G__29400;
count__29388_29396 = G__29401;
i__29389_29397 = G__29402;
continue;
} else {
var temp__5804__auto___29403 = cljs.core.seq.call(null,seq__29386_29394);
if(temp__5804__auto___29403){
var seq__29386_29404__$1 = temp__5804__auto___29403;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29386_29404__$1)){
var c__4319__auto___29405 = cljs.core.chunk_first.call(null,seq__29386_29404__$1);
var G__29406 = cljs.core.chunk_rest.call(null,seq__29386_29404__$1);
var G__29407 = c__4319__auto___29405;
var G__29408 = cljs.core.count.call(null,c__4319__auto___29405);
var G__29409 = (0);
seq__29386_29394 = G__29406;
chunk__29387_29395 = G__29407;
count__29388_29396 = G__29408;
i__29389_29397 = G__29409;
continue;
} else {
var req_29410 = cljs.core.first.call(null,seq__29386_29404__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29410,prov);


var G__29411 = cljs.core.next.call(null,seq__29386_29404__$1);
var G__29412 = null;
var G__29413 = (0);
var G__29414 = (0);
seq__29386_29394 = G__29411;
chunk__29387_29395 = G__29412;
count__29388_29396 = G__29413;
i__29389_29397 = G__29414;
continue;
}
} else {
}
}
break;
}


var G__29415 = seq__29382;
var G__29416 = chunk__29383;
var G__29417 = count__29384;
var G__29418 = (i__29385 + (1));
seq__29382 = G__29415;
chunk__29383 = G__29416;
count__29384 = G__29417;
i__29385 = G__29418;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq.call(null,seq__29382);
if(temp__5804__auto__){
var seq__29382__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29382__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__29382__$1);
var G__29419 = cljs.core.chunk_rest.call(null,seq__29382__$1);
var G__29420 = c__4319__auto__;
var G__29421 = cljs.core.count.call(null,c__4319__auto__);
var G__29422 = (0);
seq__29382 = G__29419;
chunk__29383 = G__29420;
count__29384 = G__29421;
i__29385 = G__29422;
continue;
} else {
var prov = cljs.core.first.call(null,seq__29382__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29390_29423 = cljs.core.seq.call(null,requires);
var chunk__29391_29424 = null;
var count__29392_29425 = (0);
var i__29393_29426 = (0);
while(true){
if((i__29393_29426 < count__29392_29425)){
var req_29427 = cljs.core._nth.call(null,chunk__29391_29424,i__29393_29426);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29427,prov);


var G__29428 = seq__29390_29423;
var G__29429 = chunk__29391_29424;
var G__29430 = count__29392_29425;
var G__29431 = (i__29393_29426 + (1));
seq__29390_29423 = G__29428;
chunk__29391_29424 = G__29429;
count__29392_29425 = G__29430;
i__29393_29426 = G__29431;
continue;
} else {
var temp__5804__auto___29432__$1 = cljs.core.seq.call(null,seq__29390_29423);
if(temp__5804__auto___29432__$1){
var seq__29390_29433__$1 = temp__5804__auto___29432__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29390_29433__$1)){
var c__4319__auto___29434 = cljs.core.chunk_first.call(null,seq__29390_29433__$1);
var G__29435 = cljs.core.chunk_rest.call(null,seq__29390_29433__$1);
var G__29436 = c__4319__auto___29434;
var G__29437 = cljs.core.count.call(null,c__4319__auto___29434);
var G__29438 = (0);
seq__29390_29423 = G__29435;
chunk__29391_29424 = G__29436;
count__29392_29425 = G__29437;
i__29393_29426 = G__29438;
continue;
} else {
var req_29439 = cljs.core.first.call(null,seq__29390_29433__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29439,prov);


var G__29440 = cljs.core.next.call(null,seq__29390_29433__$1);
var G__29441 = null;
var G__29442 = (0);
var G__29443 = (0);
seq__29390_29423 = G__29440;
chunk__29391_29424 = G__29441;
count__29392_29425 = G__29442;
i__29393_29426 = G__29443;
continue;
}
} else {
}
}
break;
}


var G__29444 = cljs.core.next.call(null,seq__29382__$1);
var G__29445 = null;
var G__29446 = (0);
var G__29447 = (0);
seq__29382 = G__29444;
chunk__29383 = G__29445;
count__29384 = G__29446;
i__29385 = G__29447;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__29448_29452 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__29449_29453 = null;
var count__29450_29454 = (0);
var i__29451_29455 = (0);
while(true){
if((i__29451_29455 < count__29450_29454)){
var ns_29456 = cljs.core._nth.call(null,chunk__29449_29453,i__29451_29455);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_29456);


var G__29457 = seq__29448_29452;
var G__29458 = chunk__29449_29453;
var G__29459 = count__29450_29454;
var G__29460 = (i__29451_29455 + (1));
seq__29448_29452 = G__29457;
chunk__29449_29453 = G__29458;
count__29450_29454 = G__29459;
i__29451_29455 = G__29460;
continue;
} else {
var temp__5804__auto___29461 = cljs.core.seq.call(null,seq__29448_29452);
if(temp__5804__auto___29461){
var seq__29448_29462__$1 = temp__5804__auto___29461;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29448_29462__$1)){
var c__4319__auto___29463 = cljs.core.chunk_first.call(null,seq__29448_29462__$1);
var G__29464 = cljs.core.chunk_rest.call(null,seq__29448_29462__$1);
var G__29465 = c__4319__auto___29463;
var G__29466 = cljs.core.count.call(null,c__4319__auto___29463);
var G__29467 = (0);
seq__29448_29452 = G__29464;
chunk__29449_29453 = G__29465;
count__29450_29454 = G__29466;
i__29451_29455 = G__29467;
continue;
} else {
var ns_29468 = cljs.core.first.call(null,seq__29448_29462__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_29468);


var G__29469 = cljs.core.next.call(null,seq__29448_29462__$1);
var G__29470 = null;
var G__29471 = (0);
var G__29472 = (0);
seq__29448_29452 = G__29469;
chunk__29449_29453 = G__29470;
count__29450_29454 = G__29471;
i__29451_29455 = G__29472;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__3922__auto__ = goog.require__;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__29473__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__29473 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29474__i = 0, G__29474__a = new Array(arguments.length -  0);
while (G__29474__i < G__29474__a.length) {G__29474__a[G__29474__i] = arguments[G__29474__i + 0]; ++G__29474__i;}
  args = new cljs.core.IndexedSeq(G__29474__a,0,null);
} 
return G__29473__delegate.call(this,args);};
G__29473.cljs$lang$maxFixedArity = 0;
G__29473.cljs$lang$applyTo = (function (arglist__29475){
var args = cljs.core.seq(arglist__29475);
return G__29473__delegate(args);
});
G__29473.cljs$core$IFn$_invoke$arity$variadic = G__29473__delegate;
return G__29473;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__29476_SHARP_,p2__29477_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__29476_SHARP_)].join('')),p2__29477_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__29478_SHARP_,p2__29479_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__29478_SHARP_)].join(''),p2__29479_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__29480 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__29480.addCallback(((function (G__29480){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__29480))
);

G__29480.addErrback(((function (G__29480){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__29480))
);

return G__29480;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e29481){if((e29481 instanceof Error)){
var e = e29481;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e29481;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e29482){if((e29482 instanceof Error)){
var e = e29482;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e29482;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__29483 = cljs.core._EQ_;
var expr__29484 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__29483.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__29484))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__29483.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__29484))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__29483.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__29484))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__29483,expr__29484){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__29483,expr__29484))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__29486,callback){
var map__29487 = p__29486;
var map__29487__$1 = ((((!((map__29487 == null)))?(((((map__29487.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29487.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29487):map__29487);
var file_msg = map__29487__$1;
var request_url = cljs.core.get.call(null,map__29487__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__3922__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__29487,map__29487__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__29487,map__29487__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__24411__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24411__auto__){
return (function (){
var f__24412__auto__ = (function (){var switch__24321__auto__ = ((function (c__24411__auto__){
return (function (state_29525){
var state_val_29526 = (state_29525[(1)]);
if((state_val_29526 === (7))){
var inst_29521 = (state_29525[(2)]);
var state_29525__$1 = state_29525;
var statearr_29527_29553 = state_29525__$1;
(statearr_29527_29553[(2)] = inst_29521);

(statearr_29527_29553[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29526 === (1))){
var state_29525__$1 = state_29525;
var statearr_29528_29554 = state_29525__$1;
(statearr_29528_29554[(2)] = null);

(statearr_29528_29554[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29526 === (4))){
var inst_29491 = (state_29525[(7)]);
var inst_29491__$1 = (state_29525[(2)]);
var state_29525__$1 = (function (){var statearr_29529 = state_29525;
(statearr_29529[(7)] = inst_29491__$1);

return statearr_29529;
})();
if(cljs.core.truth_(inst_29491__$1)){
var statearr_29530_29555 = state_29525__$1;
(statearr_29530_29555[(1)] = (5));

} else {
var statearr_29531_29556 = state_29525__$1;
(statearr_29531_29556[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29526 === (15))){
var inst_29504 = (state_29525[(8)]);
var inst_29506 = (state_29525[(9)]);
var inst_29508 = inst_29506.call(null,inst_29504);
var state_29525__$1 = state_29525;
var statearr_29532_29557 = state_29525__$1;
(statearr_29532_29557[(2)] = inst_29508);

(statearr_29532_29557[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29526 === (13))){
var inst_29515 = (state_29525[(2)]);
var state_29525__$1 = state_29525;
var statearr_29533_29558 = state_29525__$1;
(statearr_29533_29558[(2)] = inst_29515);

(statearr_29533_29558[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29526 === (6))){
var state_29525__$1 = state_29525;
var statearr_29534_29559 = state_29525__$1;
(statearr_29534_29559[(2)] = null);

(statearr_29534_29559[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29526 === (17))){
var inst_29512 = (state_29525[(2)]);
var state_29525__$1 = state_29525;
var statearr_29535_29560 = state_29525__$1;
(statearr_29535_29560[(2)] = inst_29512);

(statearr_29535_29560[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29526 === (3))){
var inst_29523 = (state_29525[(2)]);
var state_29525__$1 = state_29525;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29525__$1,inst_29523);
} else {
if((state_val_29526 === (12))){
var state_29525__$1 = state_29525;
var statearr_29536_29561 = state_29525__$1;
(statearr_29536_29561[(2)] = null);

(statearr_29536_29561[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29526 === (2))){
var state_29525__$1 = state_29525;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29525__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_29526 === (11))){
var inst_29496 = (state_29525[(10)]);
var inst_29502 = figwheel.client.file_reloading.blocking_load.call(null,inst_29496);
var state_29525__$1 = state_29525;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29525__$1,(14),inst_29502);
} else {
if((state_val_29526 === (9))){
var inst_29496 = (state_29525[(10)]);
var state_29525__$1 = state_29525;
if(cljs.core.truth_(inst_29496)){
var statearr_29537_29562 = state_29525__$1;
(statearr_29537_29562[(1)] = (11));

} else {
var statearr_29538_29563 = state_29525__$1;
(statearr_29538_29563[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29526 === (5))){
var inst_29491 = (state_29525[(7)]);
var inst_29497 = (state_29525[(11)]);
var inst_29496 = cljs.core.nth.call(null,inst_29491,(0),null);
var inst_29497__$1 = cljs.core.nth.call(null,inst_29491,(1),null);
var state_29525__$1 = (function (){var statearr_29539 = state_29525;
(statearr_29539[(11)] = inst_29497__$1);

(statearr_29539[(10)] = inst_29496);

return statearr_29539;
})();
if(cljs.core.truth_(inst_29497__$1)){
var statearr_29540_29564 = state_29525__$1;
(statearr_29540_29564[(1)] = (8));

} else {
var statearr_29541_29565 = state_29525__$1;
(statearr_29541_29565[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29526 === (14))){
var inst_29506 = (state_29525[(9)]);
var inst_29496 = (state_29525[(10)]);
var inst_29504 = (state_29525[(2)]);
var inst_29505 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_29506__$1 = cljs.core.get.call(null,inst_29505,inst_29496);
var state_29525__$1 = (function (){var statearr_29542 = state_29525;
(statearr_29542[(8)] = inst_29504);

(statearr_29542[(9)] = inst_29506__$1);

return statearr_29542;
})();
if(cljs.core.truth_(inst_29506__$1)){
var statearr_29543_29566 = state_29525__$1;
(statearr_29543_29566[(1)] = (15));

} else {
var statearr_29544_29567 = state_29525__$1;
(statearr_29544_29567[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29526 === (16))){
var inst_29504 = (state_29525[(8)]);
var inst_29510 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_29504);
var state_29525__$1 = state_29525;
var statearr_29545_29568 = state_29525__$1;
(statearr_29545_29568[(2)] = inst_29510);

(statearr_29545_29568[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29526 === (10))){
var inst_29517 = (state_29525[(2)]);
var state_29525__$1 = (function (){var statearr_29546 = state_29525;
(statearr_29546[(12)] = inst_29517);

return statearr_29546;
})();
var statearr_29547_29569 = state_29525__$1;
(statearr_29547_29569[(2)] = null);

(statearr_29547_29569[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29526 === (8))){
var inst_29497 = (state_29525[(11)]);
var inst_29499 = eval(inst_29497);
var state_29525__$1 = state_29525;
var statearr_29548_29570 = state_29525__$1;
(statearr_29548_29570[(2)] = inst_29499);

(statearr_29548_29570[(1)] = (10));


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
});})(c__24411__auto__))
;
return ((function (switch__24321__auto__,c__24411__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__24322__auto__ = null;
var figwheel$client$file_reloading$state_machine__24322__auto____0 = (function (){
var statearr_29549 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29549[(0)] = figwheel$client$file_reloading$state_machine__24322__auto__);

(statearr_29549[(1)] = (1));

return statearr_29549;
});
var figwheel$client$file_reloading$state_machine__24322__auto____1 = (function (state_29525){
while(true){
var ret_value__24323__auto__ = (function (){try{while(true){
var result__24324__auto__ = switch__24321__auto__.call(null,state_29525);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24324__auto__;
}
break;
}
}catch (e29550){if((e29550 instanceof Object)){
var ex__24325__auto__ = e29550;
var statearr_29551_29571 = state_29525;
(statearr_29551_29571[(5)] = ex__24325__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29525);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29550;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24323__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29572 = state_29525;
state_29525 = G__29572;
continue;
} else {
return ret_value__24323__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__24322__auto__ = function(state_29525){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__24322__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__24322__auto____1.call(this,state_29525);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__24322__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__24322__auto____0;
figwheel$client$file_reloading$state_machine__24322__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__24322__auto____1;
return figwheel$client$file_reloading$state_machine__24322__auto__;
})()
;})(switch__24321__auto__,c__24411__auto__))
})();
var state__24413__auto__ = (function (){var statearr_29552 = f__24412__auto__.call(null);
(statearr_29552[(6)] = c__24411__auto__);

return statearr_29552;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24413__auto__);
});})(c__24411__auto__))
);

return c__24411__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__29574 = arguments.length;
switch (G__29574) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__29576,callback){
var map__29577 = p__29576;
var map__29577__$1 = ((((!((map__29577 == null)))?(((((map__29577.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29577.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29577):map__29577);
var file_msg = map__29577__$1;
var namespace = cljs.core.get.call(null,map__29577__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__29577,map__29577__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__29577,map__29577__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__29579){
var map__29580 = p__29579;
var map__29580__$1 = ((((!((map__29580 == null)))?(((((map__29580.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29580.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29580):map__29580);
var file_msg = map__29580__$1;
var namespace = cljs.core.get.call(null,map__29580__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return !((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__29582){
var map__29583 = p__29582;
var map__29583__$1 = ((((!((map__29583 == null)))?(((((map__29583.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29583.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29583):map__29583);
var file_msg = map__29583__$1;
var namespace = cljs.core.get.call(null,map__29583__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__3911__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__3911__auto__){
var or__3922__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
var or__3922__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__3922__auto____$2)){
return or__3922__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__3911__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__29585,callback){
var map__29586 = p__29585;
var map__29586__$1 = ((((!((map__29586 == null)))?(((((map__29586.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29586.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29586):map__29586);
var file_msg = map__29586__$1;
var request_url = cljs.core.get.call(null,map__29586__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__29586__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__24411__auto___29636 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24411__auto___29636,out){
return (function (){
var f__24412__auto__ = (function (){var switch__24321__auto__ = ((function (c__24411__auto___29636,out){
return (function (state_29621){
var state_val_29622 = (state_29621[(1)]);
if((state_val_29622 === (1))){
var inst_29595 = cljs.core.seq.call(null,files);
var inst_29596 = cljs.core.first.call(null,inst_29595);
var inst_29597 = cljs.core.next.call(null,inst_29595);
var inst_29598 = files;
var state_29621__$1 = (function (){var statearr_29623 = state_29621;
(statearr_29623[(7)] = inst_29596);

(statearr_29623[(8)] = inst_29598);

(statearr_29623[(9)] = inst_29597);

return statearr_29623;
})();
var statearr_29624_29637 = state_29621__$1;
(statearr_29624_29637[(2)] = null);

(statearr_29624_29637[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29622 === (2))){
var inst_29604 = (state_29621[(10)]);
var inst_29598 = (state_29621[(8)]);
var inst_29603 = cljs.core.seq.call(null,inst_29598);
var inst_29604__$1 = cljs.core.first.call(null,inst_29603);
var inst_29605 = cljs.core.next.call(null,inst_29603);
var inst_29606 = (inst_29604__$1 == null);
var inst_29607 = cljs.core.not.call(null,inst_29606);
var state_29621__$1 = (function (){var statearr_29625 = state_29621;
(statearr_29625[(11)] = inst_29605);

(statearr_29625[(10)] = inst_29604__$1);

return statearr_29625;
})();
if(inst_29607){
var statearr_29626_29638 = state_29621__$1;
(statearr_29626_29638[(1)] = (4));

} else {
var statearr_29627_29639 = state_29621__$1;
(statearr_29627_29639[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29622 === (3))){
var inst_29619 = (state_29621[(2)]);
var state_29621__$1 = state_29621;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29621__$1,inst_29619);
} else {
if((state_val_29622 === (4))){
var inst_29604 = (state_29621[(10)]);
var inst_29609 = figwheel.client.file_reloading.reload_js_file.call(null,inst_29604);
var state_29621__$1 = state_29621;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29621__$1,(7),inst_29609);
} else {
if((state_val_29622 === (5))){
var inst_29615 = cljs.core.async.close_BANG_.call(null,out);
var state_29621__$1 = state_29621;
var statearr_29628_29640 = state_29621__$1;
(statearr_29628_29640[(2)] = inst_29615);

(statearr_29628_29640[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29622 === (6))){
var inst_29617 = (state_29621[(2)]);
var state_29621__$1 = state_29621;
var statearr_29629_29641 = state_29621__$1;
(statearr_29629_29641[(2)] = inst_29617);

(statearr_29629_29641[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29622 === (7))){
var inst_29605 = (state_29621[(11)]);
var inst_29611 = (state_29621[(2)]);
var inst_29612 = cljs.core.async.put_BANG_.call(null,out,inst_29611);
var inst_29598 = inst_29605;
var state_29621__$1 = (function (){var statearr_29630 = state_29621;
(statearr_29630[(12)] = inst_29612);

(statearr_29630[(8)] = inst_29598);

return statearr_29630;
})();
var statearr_29631_29642 = state_29621__$1;
(statearr_29631_29642[(2)] = null);

(statearr_29631_29642[(1)] = (2));


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
});})(c__24411__auto___29636,out))
;
return ((function (switch__24321__auto__,c__24411__auto___29636,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24322__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24322__auto____0 = (function (){
var statearr_29632 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29632[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24322__auto__);

(statearr_29632[(1)] = (1));

return statearr_29632;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24322__auto____1 = (function (state_29621){
while(true){
var ret_value__24323__auto__ = (function (){try{while(true){
var result__24324__auto__ = switch__24321__auto__.call(null,state_29621);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24324__auto__;
}
break;
}
}catch (e29633){if((e29633 instanceof Object)){
var ex__24325__auto__ = e29633;
var statearr_29634_29643 = state_29621;
(statearr_29634_29643[(5)] = ex__24325__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29621);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29633;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24323__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29644 = state_29621;
state_29621 = G__29644;
continue;
} else {
return ret_value__24323__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24322__auto__ = function(state_29621){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24322__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24322__auto____1.call(this,state_29621);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24322__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24322__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24322__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24322__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24322__auto__;
})()
;})(switch__24321__auto__,c__24411__auto___29636,out))
})();
var state__24413__auto__ = (function (){var statearr_29635 = f__24412__auto__.call(null);
(statearr_29635[(6)] = c__24411__auto___29636);

return statearr_29635;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24413__auto__);
});})(c__24411__auto___29636,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__29645,opts){
var map__29646 = p__29645;
var map__29646__$1 = ((((!((map__29646 == null)))?(((((map__29646.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29646.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29646):map__29646);
var eval_body = cljs.core.get.call(null,map__29646__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__29646__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__3911__auto__ = eval_body;
if(cljs.core.truth_(and__3911__auto__)){
return typeof eval_body === 'string';
} else {
return and__3911__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e29648){var e = e29648;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5802__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__29649_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29649_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5802__auto__)){
var file_msg = temp__5802__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__29650){
var vec__29651 = p__29650;
var k = cljs.core.nth.call(null,vec__29651,(0),null);
var v = cljs.core.nth.call(null,vec__29651,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__29654){
var vec__29655 = p__29654;
var k = cljs.core.nth.call(null,vec__29655,(0),null);
var v = cljs.core.nth.call(null,vec__29655,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__29661,p__29662){
var map__29663 = p__29661;
var map__29663__$1 = ((((!((map__29663 == null)))?(((((map__29663.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29663.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29663):map__29663);
var opts = map__29663__$1;
var before_jsload = cljs.core.get.call(null,map__29663__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__29663__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__29663__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__29664 = p__29662;
var map__29664__$1 = ((((!((map__29664 == null)))?(((((map__29664.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29664.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29664):map__29664);
var msg = map__29664__$1;
var files = cljs.core.get.call(null,map__29664__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__29664__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__29664__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__24411__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24411__auto__,map__29663,map__29663__$1,opts,before_jsload,on_jsload,reload_dependents,map__29664,map__29664__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__24412__auto__ = (function (){var switch__24321__auto__ = ((function (c__24411__auto__,map__29663,map__29663__$1,opts,before_jsload,on_jsload,reload_dependents,map__29664,map__29664__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_29818){
var state_val_29819 = (state_29818[(1)]);
if((state_val_29819 === (7))){
var inst_29680 = (state_29818[(7)]);
var inst_29679 = (state_29818[(8)]);
var inst_29681 = (state_29818[(9)]);
var inst_29678 = (state_29818[(10)]);
var inst_29686 = cljs.core._nth.call(null,inst_29679,inst_29681);
var inst_29687 = figwheel.client.file_reloading.eval_body.call(null,inst_29686,opts);
var inst_29688 = (inst_29681 + (1));
var tmp29820 = inst_29680;
var tmp29821 = inst_29679;
var tmp29822 = inst_29678;
var inst_29678__$1 = tmp29822;
var inst_29679__$1 = tmp29821;
var inst_29680__$1 = tmp29820;
var inst_29681__$1 = inst_29688;
var state_29818__$1 = (function (){var statearr_29823 = state_29818;
(statearr_29823[(7)] = inst_29680__$1);

(statearr_29823[(11)] = inst_29687);

(statearr_29823[(8)] = inst_29679__$1);

(statearr_29823[(9)] = inst_29681__$1);

(statearr_29823[(10)] = inst_29678__$1);

return statearr_29823;
})();
var statearr_29824_29907 = state_29818__$1;
(statearr_29824_29907[(2)] = null);

(statearr_29824_29907[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29819 === (20))){
var inst_29721 = (state_29818[(12)]);
var inst_29729 = figwheel.client.file_reloading.sort_files.call(null,inst_29721);
var state_29818__$1 = state_29818;
var statearr_29825_29908 = state_29818__$1;
(statearr_29825_29908[(2)] = inst_29729);

(statearr_29825_29908[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29819 === (27))){
var state_29818__$1 = state_29818;
var statearr_29826_29909 = state_29818__$1;
(statearr_29826_29909[(2)] = null);

(statearr_29826_29909[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29819 === (1))){
var inst_29670 = (state_29818[(13)]);
var inst_29667 = before_jsload.call(null,files);
var inst_29668 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_29669 = (function (){return ((function (inst_29670,inst_29667,inst_29668,state_val_29819,c__24411__auto__,map__29663,map__29663__$1,opts,before_jsload,on_jsload,reload_dependents,map__29664,map__29664__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__29658_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29658_SHARP_);
});
;})(inst_29670,inst_29667,inst_29668,state_val_29819,c__24411__auto__,map__29663,map__29663__$1,opts,before_jsload,on_jsload,reload_dependents,map__29664,map__29664__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29670__$1 = cljs.core.filter.call(null,inst_29669,files);
var inst_29671 = cljs.core.not_empty.call(null,inst_29670__$1);
var state_29818__$1 = (function (){var statearr_29827 = state_29818;
(statearr_29827[(14)] = inst_29667);

(statearr_29827[(15)] = inst_29668);

(statearr_29827[(13)] = inst_29670__$1);

return statearr_29827;
})();
if(cljs.core.truth_(inst_29671)){
var statearr_29828_29910 = state_29818__$1;
(statearr_29828_29910[(1)] = (2));

} else {
var statearr_29829_29911 = state_29818__$1;
(statearr_29829_29911[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29819 === (24))){
var state_29818__$1 = state_29818;
var statearr_29830_29912 = state_29818__$1;
(statearr_29830_29912[(2)] = null);

(statearr_29830_29912[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29819 === (39))){
var inst_29771 = (state_29818[(16)]);
var state_29818__$1 = state_29818;
var statearr_29831_29913 = state_29818__$1;
(statearr_29831_29913[(2)] = inst_29771);

(statearr_29831_29913[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29819 === (46))){
var inst_29813 = (state_29818[(2)]);
var state_29818__$1 = state_29818;
var statearr_29832_29914 = state_29818__$1;
(statearr_29832_29914[(2)] = inst_29813);

(statearr_29832_29914[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29819 === (4))){
var inst_29715 = (state_29818[(2)]);
var inst_29716 = cljs.core.List.EMPTY;
var inst_29717 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_29716);
var inst_29718 = (function (){return ((function (inst_29715,inst_29716,inst_29717,state_val_29819,c__24411__auto__,map__29663,map__29663__$1,opts,before_jsload,on_jsload,reload_dependents,map__29664,map__29664__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__29659_SHARP_){
var and__3911__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29659_SHARP_);
if(cljs.core.truth_(and__3911__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29659_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__29659_SHARP_))));
} else {
return and__3911__auto__;
}
});
;})(inst_29715,inst_29716,inst_29717,state_val_29819,c__24411__auto__,map__29663,map__29663__$1,opts,before_jsload,on_jsload,reload_dependents,map__29664,map__29664__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29719 = cljs.core.filter.call(null,inst_29718,files);
var inst_29720 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_29721 = cljs.core.concat.call(null,inst_29719,inst_29720);
var state_29818__$1 = (function (){var statearr_29833 = state_29818;
(statearr_29833[(17)] = inst_29717);

(statearr_29833[(18)] = inst_29715);

(statearr_29833[(12)] = inst_29721);

return statearr_29833;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_29834_29915 = state_29818__$1;
(statearr_29834_29915[(1)] = (16));

} else {
var statearr_29835_29916 = state_29818__$1;
(statearr_29835_29916[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29819 === (15))){
var inst_29705 = (state_29818[(2)]);
var state_29818__$1 = state_29818;
var statearr_29836_29917 = state_29818__$1;
(statearr_29836_29917[(2)] = inst_29705);

(statearr_29836_29917[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29819 === (21))){
var inst_29731 = (state_29818[(19)]);
var inst_29731__$1 = (state_29818[(2)]);
var inst_29732 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_29731__$1);
var state_29818__$1 = (function (){var statearr_29837 = state_29818;
(statearr_29837[(19)] = inst_29731__$1);

return statearr_29837;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29818__$1,(22),inst_29732);
} else {
if((state_val_29819 === (31))){
var inst_29816 = (state_29818[(2)]);
var state_29818__$1 = state_29818;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29818__$1,inst_29816);
} else {
if((state_val_29819 === (32))){
var inst_29771 = (state_29818[(16)]);
var inst_29776 = inst_29771.cljs$lang$protocol_mask$partition0$;
var inst_29777 = (inst_29776 & (64));
var inst_29778 = inst_29771.cljs$core$ISeq$;
var inst_29779 = (cljs.core.PROTOCOL_SENTINEL === inst_29778);
var inst_29780 = ((inst_29777) || (inst_29779));
var state_29818__$1 = state_29818;
if(cljs.core.truth_(inst_29780)){
var statearr_29838_29918 = state_29818__$1;
(statearr_29838_29918[(1)] = (35));

} else {
var statearr_29839_29919 = state_29818__$1;
(statearr_29839_29919[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29819 === (40))){
var inst_29793 = (state_29818[(20)]);
var inst_29792 = (state_29818[(2)]);
var inst_29793__$1 = cljs.core.get.call(null,inst_29792,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_29794 = cljs.core.get.call(null,inst_29792,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_29795 = cljs.core.not_empty.call(null,inst_29793__$1);
var state_29818__$1 = (function (){var statearr_29840 = state_29818;
(statearr_29840[(21)] = inst_29794);

(statearr_29840[(20)] = inst_29793__$1);

return statearr_29840;
})();
if(cljs.core.truth_(inst_29795)){
var statearr_29841_29920 = state_29818__$1;
(statearr_29841_29920[(1)] = (41));

} else {
var statearr_29842_29921 = state_29818__$1;
(statearr_29842_29921[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29819 === (33))){
var state_29818__$1 = state_29818;
var statearr_29843_29922 = state_29818__$1;
(statearr_29843_29922[(2)] = false);

(statearr_29843_29922[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29819 === (13))){
var inst_29691 = (state_29818[(22)]);
var inst_29695 = cljs.core.chunk_first.call(null,inst_29691);
var inst_29696 = cljs.core.chunk_rest.call(null,inst_29691);
var inst_29697 = cljs.core.count.call(null,inst_29695);
var inst_29678 = inst_29696;
var inst_29679 = inst_29695;
var inst_29680 = inst_29697;
var inst_29681 = (0);
var state_29818__$1 = (function (){var statearr_29844 = state_29818;
(statearr_29844[(7)] = inst_29680);

(statearr_29844[(8)] = inst_29679);

(statearr_29844[(9)] = inst_29681);

(statearr_29844[(10)] = inst_29678);

return statearr_29844;
})();
var statearr_29845_29923 = state_29818__$1;
(statearr_29845_29923[(2)] = null);

(statearr_29845_29923[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29819 === (22))){
var inst_29739 = (state_29818[(23)]);
var inst_29731 = (state_29818[(19)]);
var inst_29734 = (state_29818[(24)]);
var inst_29735 = (state_29818[(25)]);
var inst_29734__$1 = (state_29818[(2)]);
var inst_29735__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29734__$1);
var inst_29736 = (function (){var all_files = inst_29731;
var res_SINGLEQUOTE_ = inst_29734__$1;
var res = inst_29735__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_29739,inst_29731,inst_29734,inst_29735,inst_29734__$1,inst_29735__$1,state_val_29819,c__24411__auto__,map__29663,map__29663__$1,opts,before_jsload,on_jsload,reload_dependents,map__29664,map__29664__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__29660_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__29660_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_29739,inst_29731,inst_29734,inst_29735,inst_29734__$1,inst_29735__$1,state_val_29819,c__24411__auto__,map__29663,map__29663__$1,opts,before_jsload,on_jsload,reload_dependents,map__29664,map__29664__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29737 = cljs.core.filter.call(null,inst_29736,inst_29734__$1);
var inst_29738 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_29739__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29738);
var inst_29740 = cljs.core.not_empty.call(null,inst_29739__$1);
var state_29818__$1 = (function (){var statearr_29846 = state_29818;
(statearr_29846[(23)] = inst_29739__$1);

(statearr_29846[(26)] = inst_29737);

(statearr_29846[(24)] = inst_29734__$1);

(statearr_29846[(25)] = inst_29735__$1);

return statearr_29846;
})();
if(cljs.core.truth_(inst_29740)){
var statearr_29847_29924 = state_29818__$1;
(statearr_29847_29924[(1)] = (23));

} else {
var statearr_29848_29925 = state_29818__$1;
(statearr_29848_29925[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29819 === (36))){
var state_29818__$1 = state_29818;
var statearr_29849_29926 = state_29818__$1;
(statearr_29849_29926[(2)] = false);

(statearr_29849_29926[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29819 === (41))){
var inst_29793 = (state_29818[(20)]);
var inst_29797 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_29798 = cljs.core.map.call(null,inst_29797,inst_29793);
var inst_29799 = cljs.core.pr_str.call(null,inst_29798);
var inst_29800 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29799)].join('');
var inst_29801 = figwheel.client.utils.log.call(null,inst_29800);
var state_29818__$1 = state_29818;
var statearr_29850_29927 = state_29818__$1;
(statearr_29850_29927[(2)] = inst_29801);

(statearr_29850_29927[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29819 === (43))){
var inst_29794 = (state_29818[(21)]);
var inst_29804 = (state_29818[(2)]);
var inst_29805 = cljs.core.not_empty.call(null,inst_29794);
var state_29818__$1 = (function (){var statearr_29851 = state_29818;
(statearr_29851[(27)] = inst_29804);

return statearr_29851;
})();
if(cljs.core.truth_(inst_29805)){
var statearr_29852_29928 = state_29818__$1;
(statearr_29852_29928[(1)] = (44));

} else {
var statearr_29853_29929 = state_29818__$1;
(statearr_29853_29929[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29819 === (29))){
var inst_29771 = (state_29818[(16)]);
var inst_29739 = (state_29818[(23)]);
var inst_29737 = (state_29818[(26)]);
var inst_29731 = (state_29818[(19)]);
var inst_29734 = (state_29818[(24)]);
var inst_29735 = (state_29818[(25)]);
var inst_29767 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_29770 = (function (){var all_files = inst_29731;
var res_SINGLEQUOTE_ = inst_29734;
var res = inst_29735;
var files_not_loaded = inst_29737;
var dependencies_that_loaded = inst_29739;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29771,inst_29739,inst_29737,inst_29731,inst_29734,inst_29735,inst_29767,state_val_29819,c__24411__auto__,map__29663,map__29663__$1,opts,before_jsload,on_jsload,reload_dependents,map__29664,map__29664__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29769){
var map__29854 = p__29769;
var map__29854__$1 = ((((!((map__29854 == null)))?(((((map__29854.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29854.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29854):map__29854);
var namespace = cljs.core.get.call(null,map__29854__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29771,inst_29739,inst_29737,inst_29731,inst_29734,inst_29735,inst_29767,state_val_29819,c__24411__auto__,map__29663,map__29663__$1,opts,before_jsload,on_jsload,reload_dependents,map__29664,map__29664__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29771__$1 = cljs.core.group_by.call(null,inst_29770,inst_29737);
var inst_29773 = (inst_29771__$1 == null);
var inst_29774 = cljs.core.not.call(null,inst_29773);
var state_29818__$1 = (function (){var statearr_29856 = state_29818;
(statearr_29856[(16)] = inst_29771__$1);

(statearr_29856[(28)] = inst_29767);

return statearr_29856;
})();
if(inst_29774){
var statearr_29857_29930 = state_29818__$1;
(statearr_29857_29930[(1)] = (32));

} else {
var statearr_29858_29931 = state_29818__$1;
(statearr_29858_29931[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29819 === (44))){
var inst_29794 = (state_29818[(21)]);
var inst_29807 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29794);
var inst_29808 = cljs.core.pr_str.call(null,inst_29807);
var inst_29809 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29808)].join('');
var inst_29810 = figwheel.client.utils.log.call(null,inst_29809);
var state_29818__$1 = state_29818;
var statearr_29859_29932 = state_29818__$1;
(statearr_29859_29932[(2)] = inst_29810);

(statearr_29859_29932[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29819 === (6))){
var inst_29712 = (state_29818[(2)]);
var state_29818__$1 = state_29818;
var statearr_29860_29933 = state_29818__$1;
(statearr_29860_29933[(2)] = inst_29712);

(statearr_29860_29933[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29819 === (28))){
var inst_29737 = (state_29818[(26)]);
var inst_29764 = (state_29818[(2)]);
var inst_29765 = cljs.core.not_empty.call(null,inst_29737);
var state_29818__$1 = (function (){var statearr_29861 = state_29818;
(statearr_29861[(29)] = inst_29764);

return statearr_29861;
})();
if(cljs.core.truth_(inst_29765)){
var statearr_29862_29934 = state_29818__$1;
(statearr_29862_29934[(1)] = (29));

} else {
var statearr_29863_29935 = state_29818__$1;
(statearr_29863_29935[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29819 === (25))){
var inst_29735 = (state_29818[(25)]);
var inst_29751 = (state_29818[(2)]);
var inst_29752 = cljs.core.not_empty.call(null,inst_29735);
var state_29818__$1 = (function (){var statearr_29864 = state_29818;
(statearr_29864[(30)] = inst_29751);

return statearr_29864;
})();
if(cljs.core.truth_(inst_29752)){
var statearr_29865_29936 = state_29818__$1;
(statearr_29865_29936[(1)] = (26));

} else {
var statearr_29866_29937 = state_29818__$1;
(statearr_29866_29937[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29819 === (34))){
var inst_29787 = (state_29818[(2)]);
var state_29818__$1 = state_29818;
if(cljs.core.truth_(inst_29787)){
var statearr_29867_29938 = state_29818__$1;
(statearr_29867_29938[(1)] = (38));

} else {
var statearr_29868_29939 = state_29818__$1;
(statearr_29868_29939[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29819 === (17))){
var state_29818__$1 = state_29818;
var statearr_29869_29940 = state_29818__$1;
(statearr_29869_29940[(2)] = recompile_dependents);

(statearr_29869_29940[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29819 === (3))){
var state_29818__$1 = state_29818;
var statearr_29870_29941 = state_29818__$1;
(statearr_29870_29941[(2)] = null);

(statearr_29870_29941[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29819 === (12))){
var inst_29708 = (state_29818[(2)]);
var state_29818__$1 = state_29818;
var statearr_29871_29942 = state_29818__$1;
(statearr_29871_29942[(2)] = inst_29708);

(statearr_29871_29942[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29819 === (2))){
var inst_29670 = (state_29818[(13)]);
var inst_29677 = cljs.core.seq.call(null,inst_29670);
var inst_29678 = inst_29677;
var inst_29679 = null;
var inst_29680 = (0);
var inst_29681 = (0);
var state_29818__$1 = (function (){var statearr_29872 = state_29818;
(statearr_29872[(7)] = inst_29680);

(statearr_29872[(8)] = inst_29679);

(statearr_29872[(9)] = inst_29681);

(statearr_29872[(10)] = inst_29678);

return statearr_29872;
})();
var statearr_29873_29943 = state_29818__$1;
(statearr_29873_29943[(2)] = null);

(statearr_29873_29943[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29819 === (23))){
var inst_29739 = (state_29818[(23)]);
var inst_29737 = (state_29818[(26)]);
var inst_29731 = (state_29818[(19)]);
var inst_29734 = (state_29818[(24)]);
var inst_29735 = (state_29818[(25)]);
var inst_29742 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_29744 = (function (){var all_files = inst_29731;
var res_SINGLEQUOTE_ = inst_29734;
var res = inst_29735;
var files_not_loaded = inst_29737;
var dependencies_that_loaded = inst_29739;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29739,inst_29737,inst_29731,inst_29734,inst_29735,inst_29742,state_val_29819,c__24411__auto__,map__29663,map__29663__$1,opts,before_jsload,on_jsload,reload_dependents,map__29664,map__29664__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29743){
var map__29874 = p__29743;
var map__29874__$1 = ((((!((map__29874 == null)))?(((((map__29874.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29874.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29874):map__29874);
var request_url = cljs.core.get.call(null,map__29874__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29739,inst_29737,inst_29731,inst_29734,inst_29735,inst_29742,state_val_29819,c__24411__auto__,map__29663,map__29663__$1,opts,before_jsload,on_jsload,reload_dependents,map__29664,map__29664__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29745 = cljs.core.reverse.call(null,inst_29739);
var inst_29746 = cljs.core.map.call(null,inst_29744,inst_29745);
var inst_29747 = cljs.core.pr_str.call(null,inst_29746);
var inst_29748 = figwheel.client.utils.log.call(null,inst_29747);
var state_29818__$1 = (function (){var statearr_29876 = state_29818;
(statearr_29876[(31)] = inst_29742);

return statearr_29876;
})();
var statearr_29877_29944 = state_29818__$1;
(statearr_29877_29944[(2)] = inst_29748);

(statearr_29877_29944[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29819 === (35))){
var state_29818__$1 = state_29818;
var statearr_29878_29945 = state_29818__$1;
(statearr_29878_29945[(2)] = true);

(statearr_29878_29945[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29819 === (19))){
var inst_29721 = (state_29818[(12)]);
var inst_29727 = figwheel.client.file_reloading.expand_files.call(null,inst_29721);
var state_29818__$1 = state_29818;
var statearr_29879_29946 = state_29818__$1;
(statearr_29879_29946[(2)] = inst_29727);

(statearr_29879_29946[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29819 === (11))){
var state_29818__$1 = state_29818;
var statearr_29880_29947 = state_29818__$1;
(statearr_29880_29947[(2)] = null);

(statearr_29880_29947[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29819 === (9))){
var inst_29710 = (state_29818[(2)]);
var state_29818__$1 = state_29818;
var statearr_29881_29948 = state_29818__$1;
(statearr_29881_29948[(2)] = inst_29710);

(statearr_29881_29948[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29819 === (5))){
var inst_29680 = (state_29818[(7)]);
var inst_29681 = (state_29818[(9)]);
var inst_29683 = (inst_29681 < inst_29680);
var inst_29684 = inst_29683;
var state_29818__$1 = state_29818;
if(cljs.core.truth_(inst_29684)){
var statearr_29882_29949 = state_29818__$1;
(statearr_29882_29949[(1)] = (7));

} else {
var statearr_29883_29950 = state_29818__$1;
(statearr_29883_29950[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29819 === (14))){
var inst_29691 = (state_29818[(22)]);
var inst_29700 = cljs.core.first.call(null,inst_29691);
var inst_29701 = figwheel.client.file_reloading.eval_body.call(null,inst_29700,opts);
var inst_29702 = cljs.core.next.call(null,inst_29691);
var inst_29678 = inst_29702;
var inst_29679 = null;
var inst_29680 = (0);
var inst_29681 = (0);
var state_29818__$1 = (function (){var statearr_29884 = state_29818;
(statearr_29884[(7)] = inst_29680);

(statearr_29884[(8)] = inst_29679);

(statearr_29884[(32)] = inst_29701);

(statearr_29884[(9)] = inst_29681);

(statearr_29884[(10)] = inst_29678);

return statearr_29884;
})();
var statearr_29885_29951 = state_29818__$1;
(statearr_29885_29951[(2)] = null);

(statearr_29885_29951[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29819 === (45))){
var state_29818__$1 = state_29818;
var statearr_29886_29952 = state_29818__$1;
(statearr_29886_29952[(2)] = null);

(statearr_29886_29952[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29819 === (26))){
var inst_29739 = (state_29818[(23)]);
var inst_29737 = (state_29818[(26)]);
var inst_29731 = (state_29818[(19)]);
var inst_29734 = (state_29818[(24)]);
var inst_29735 = (state_29818[(25)]);
var inst_29754 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_29756 = (function (){var all_files = inst_29731;
var res_SINGLEQUOTE_ = inst_29734;
var res = inst_29735;
var files_not_loaded = inst_29737;
var dependencies_that_loaded = inst_29739;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29739,inst_29737,inst_29731,inst_29734,inst_29735,inst_29754,state_val_29819,c__24411__auto__,map__29663,map__29663__$1,opts,before_jsload,on_jsload,reload_dependents,map__29664,map__29664__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29755){
var map__29887 = p__29755;
var map__29887__$1 = ((((!((map__29887 == null)))?(((((map__29887.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29887.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29887):map__29887);
var namespace = cljs.core.get.call(null,map__29887__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__29887__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29739,inst_29737,inst_29731,inst_29734,inst_29735,inst_29754,state_val_29819,c__24411__auto__,map__29663,map__29663__$1,opts,before_jsload,on_jsload,reload_dependents,map__29664,map__29664__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29757 = cljs.core.map.call(null,inst_29756,inst_29735);
var inst_29758 = cljs.core.pr_str.call(null,inst_29757);
var inst_29759 = figwheel.client.utils.log.call(null,inst_29758);
var inst_29760 = (function (){var all_files = inst_29731;
var res_SINGLEQUOTE_ = inst_29734;
var res = inst_29735;
var files_not_loaded = inst_29737;
var dependencies_that_loaded = inst_29739;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29739,inst_29737,inst_29731,inst_29734,inst_29735,inst_29754,inst_29756,inst_29757,inst_29758,inst_29759,state_val_29819,c__24411__auto__,map__29663,map__29663__$1,opts,before_jsload,on_jsload,reload_dependents,map__29664,map__29664__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29739,inst_29737,inst_29731,inst_29734,inst_29735,inst_29754,inst_29756,inst_29757,inst_29758,inst_29759,state_val_29819,c__24411__auto__,map__29663,map__29663__$1,opts,before_jsload,on_jsload,reload_dependents,map__29664,map__29664__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29761 = setTimeout(inst_29760,(10));
var state_29818__$1 = (function (){var statearr_29889 = state_29818;
(statearr_29889[(33)] = inst_29759);

(statearr_29889[(34)] = inst_29754);

return statearr_29889;
})();
var statearr_29890_29953 = state_29818__$1;
(statearr_29890_29953[(2)] = inst_29761);

(statearr_29890_29953[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29819 === (16))){
var state_29818__$1 = state_29818;
var statearr_29891_29954 = state_29818__$1;
(statearr_29891_29954[(2)] = reload_dependents);

(statearr_29891_29954[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29819 === (38))){
var inst_29771 = (state_29818[(16)]);
var inst_29789 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29771);
var state_29818__$1 = state_29818;
var statearr_29892_29955 = state_29818__$1;
(statearr_29892_29955[(2)] = inst_29789);

(statearr_29892_29955[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29819 === (30))){
var state_29818__$1 = state_29818;
var statearr_29893_29956 = state_29818__$1;
(statearr_29893_29956[(2)] = null);

(statearr_29893_29956[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29819 === (10))){
var inst_29691 = (state_29818[(22)]);
var inst_29693 = cljs.core.chunked_seq_QMARK_.call(null,inst_29691);
var state_29818__$1 = state_29818;
if(inst_29693){
var statearr_29894_29957 = state_29818__$1;
(statearr_29894_29957[(1)] = (13));

} else {
var statearr_29895_29958 = state_29818__$1;
(statearr_29895_29958[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29819 === (18))){
var inst_29725 = (state_29818[(2)]);
var state_29818__$1 = state_29818;
if(cljs.core.truth_(inst_29725)){
var statearr_29896_29959 = state_29818__$1;
(statearr_29896_29959[(1)] = (19));

} else {
var statearr_29897_29960 = state_29818__$1;
(statearr_29897_29960[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29819 === (42))){
var state_29818__$1 = state_29818;
var statearr_29898_29961 = state_29818__$1;
(statearr_29898_29961[(2)] = null);

(statearr_29898_29961[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29819 === (37))){
var inst_29784 = (state_29818[(2)]);
var state_29818__$1 = state_29818;
var statearr_29899_29962 = state_29818__$1;
(statearr_29899_29962[(2)] = inst_29784);

(statearr_29899_29962[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29819 === (8))){
var inst_29678 = (state_29818[(10)]);
var inst_29691 = (state_29818[(22)]);
var inst_29691__$1 = cljs.core.seq.call(null,inst_29678);
var state_29818__$1 = (function (){var statearr_29900 = state_29818;
(statearr_29900[(22)] = inst_29691__$1);

return statearr_29900;
})();
if(inst_29691__$1){
var statearr_29901_29963 = state_29818__$1;
(statearr_29901_29963[(1)] = (10));

} else {
var statearr_29902_29964 = state_29818__$1;
(statearr_29902_29964[(1)] = (11));

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
});})(c__24411__auto__,map__29663,map__29663__$1,opts,before_jsload,on_jsload,reload_dependents,map__29664,map__29664__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__24321__auto__,c__24411__auto__,map__29663,map__29663__$1,opts,before_jsload,on_jsload,reload_dependents,map__29664,map__29664__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24322__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24322__auto____0 = (function (){
var statearr_29903 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29903[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__24322__auto__);

(statearr_29903[(1)] = (1));

return statearr_29903;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24322__auto____1 = (function (state_29818){
while(true){
var ret_value__24323__auto__ = (function (){try{while(true){
var result__24324__auto__ = switch__24321__auto__.call(null,state_29818);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24324__auto__;
}
break;
}
}catch (e29904){if((e29904 instanceof Object)){
var ex__24325__auto__ = e29904;
var statearr_29905_29965 = state_29818;
(statearr_29905_29965[(5)] = ex__24325__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29818);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29904;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24323__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29966 = state_29818;
state_29818 = G__29966;
continue;
} else {
return ret_value__24323__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__24322__auto__ = function(state_29818){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24322__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24322__auto____1.call(this,state_29818);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__24322__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24322__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__24322__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24322__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24322__auto__;
})()
;})(switch__24321__auto__,c__24411__auto__,map__29663,map__29663__$1,opts,before_jsload,on_jsload,reload_dependents,map__29664,map__29664__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__24413__auto__ = (function (){var statearr_29906 = f__24412__auto__.call(null);
(statearr_29906[(6)] = c__24411__auto__);

return statearr_29906;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24413__auto__);
});})(c__24411__auto__,map__29663,map__29663__$1,opts,before_jsload,on_jsload,reload_dependents,map__29664,map__29664__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__24411__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__29969,link){
var map__29970 = p__29969;
var map__29970__$1 = ((((!((map__29970 == null)))?(((((map__29970.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29970.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29970):map__29970);
var file = cljs.core.get.call(null,map__29970__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5804__auto__ = link.href;
if(cljs.core.truth_(temp__5804__auto__)){
var link_href = temp__5804__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5804__auto__,map__29970,map__29970__$1,file){
return (function (p1__29967_SHARP_,p2__29968_SHARP_){
if(cljs.core._EQ_.call(null,p1__29967_SHARP_,p2__29968_SHARP_)){
return p1__29967_SHARP_;
} else {
return false;
}
});})(link_href,temp__5804__auto__,map__29970,map__29970__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5804__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__29973){
var map__29974 = p__29973;
var map__29974__$1 = ((((!((map__29974 == null)))?(((((map__29974.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29974.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29974):map__29974);
var match_length = cljs.core.get.call(null,map__29974__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__29974__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__29972_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__29972_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5804__auto__)){
var res = temp__5804__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__29976_SHARP_,p2__29977_SHARP_){
return cljs.core.assoc.call(null,p1__29976_SHARP_,cljs.core.get.call(null,p2__29977_SHARP_,key),p2__29977_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5802__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5802__auto__)){
var link = temp__5802__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5802__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5802__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_29978 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_29978);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_29978);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__29979,p__29980){
var map__29981 = p__29979;
var map__29981__$1 = ((((!((map__29981 == null)))?(((((map__29981.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29981.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29981):map__29981);
var on_cssload = cljs.core.get.call(null,map__29981__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__29982 = p__29980;
var map__29982__$1 = ((((!((map__29982 == null)))?(((((map__29982.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29982.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29982):map__29982);
var files_msg = map__29982__$1;
var files = cljs.core.get.call(null,map__29982__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__5804__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5804__auto__)){
var f_datas = temp__5804__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1744996267537
