// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__27985){
var map__27986 = p__27985;
var map__27986__$1 = ((((!((map__27986 == null)))?(((((map__27986.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27986.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27986):map__27986);
var m = map__27986__$1;
var n = cljs.core.get.call(null,map__27986__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__27986__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__27988_28010 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27989_28011 = null;
var count__27990_28012 = (0);
var i__27991_28013 = (0);
while(true){
if((i__27991_28013 < count__27990_28012)){
var f_28014 = cljs.core._nth.call(null,chunk__27989_28011,i__27991_28013);
cljs.core.println.call(null,"  ",f_28014);


var G__28015 = seq__27988_28010;
var G__28016 = chunk__27989_28011;
var G__28017 = count__27990_28012;
var G__28018 = (i__27991_28013 + (1));
seq__27988_28010 = G__28015;
chunk__27989_28011 = G__28016;
count__27990_28012 = G__28017;
i__27991_28013 = G__28018;
continue;
} else {
var temp__5804__auto___28019 = cljs.core.seq.call(null,seq__27988_28010);
if(temp__5804__auto___28019){
var seq__27988_28020__$1 = temp__5804__auto___28019;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27988_28020__$1)){
var c__4319__auto___28021 = cljs.core.chunk_first.call(null,seq__27988_28020__$1);
var G__28022 = cljs.core.chunk_rest.call(null,seq__27988_28020__$1);
var G__28023 = c__4319__auto___28021;
var G__28024 = cljs.core.count.call(null,c__4319__auto___28021);
var G__28025 = (0);
seq__27988_28010 = G__28022;
chunk__27989_28011 = G__28023;
count__27990_28012 = G__28024;
i__27991_28013 = G__28025;
continue;
} else {
var f_28026 = cljs.core.first.call(null,seq__27988_28020__$1);
cljs.core.println.call(null,"  ",f_28026);


var G__28027 = cljs.core.next.call(null,seq__27988_28020__$1);
var G__28028 = null;
var G__28029 = (0);
var G__28030 = (0);
seq__27988_28010 = G__28027;
chunk__27989_28011 = G__28028;
count__27990_28012 = G__28029;
i__27991_28013 = G__28030;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_28031 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_28031);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_28031)))?cljs.core.second.call(null,arglists_28031):arglists_28031));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__27992_28032 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27993_28033 = null;
var count__27994_28034 = (0);
var i__27995_28035 = (0);
while(true){
if((i__27995_28035 < count__27994_28034)){
var vec__27996_28036 = cljs.core._nth.call(null,chunk__27993_28033,i__27995_28035);
var name_28037 = cljs.core.nth.call(null,vec__27996_28036,(0),null);
var map__27999_28038 = cljs.core.nth.call(null,vec__27996_28036,(1),null);
var map__27999_28039__$1 = ((((!((map__27999_28038 == null)))?(((((map__27999_28038.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27999_28038.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27999_28038):map__27999_28038);
var doc_28040 = cljs.core.get.call(null,map__27999_28039__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_28041 = cljs.core.get.call(null,map__27999_28039__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_28037);

cljs.core.println.call(null," ",arglists_28041);

if(cljs.core.truth_(doc_28040)){
cljs.core.println.call(null," ",doc_28040);
} else {
}


var G__28042 = seq__27992_28032;
var G__28043 = chunk__27993_28033;
var G__28044 = count__27994_28034;
var G__28045 = (i__27995_28035 + (1));
seq__27992_28032 = G__28042;
chunk__27993_28033 = G__28043;
count__27994_28034 = G__28044;
i__27995_28035 = G__28045;
continue;
} else {
var temp__5804__auto___28046 = cljs.core.seq.call(null,seq__27992_28032);
if(temp__5804__auto___28046){
var seq__27992_28047__$1 = temp__5804__auto___28046;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27992_28047__$1)){
var c__4319__auto___28048 = cljs.core.chunk_first.call(null,seq__27992_28047__$1);
var G__28049 = cljs.core.chunk_rest.call(null,seq__27992_28047__$1);
var G__28050 = c__4319__auto___28048;
var G__28051 = cljs.core.count.call(null,c__4319__auto___28048);
var G__28052 = (0);
seq__27992_28032 = G__28049;
chunk__27993_28033 = G__28050;
count__27994_28034 = G__28051;
i__27995_28035 = G__28052;
continue;
} else {
var vec__28001_28053 = cljs.core.first.call(null,seq__27992_28047__$1);
var name_28054 = cljs.core.nth.call(null,vec__28001_28053,(0),null);
var map__28004_28055 = cljs.core.nth.call(null,vec__28001_28053,(1),null);
var map__28004_28056__$1 = ((((!((map__28004_28055 == null)))?(((((map__28004_28055.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28004_28055.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28004_28055):map__28004_28055);
var doc_28057 = cljs.core.get.call(null,map__28004_28056__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_28058 = cljs.core.get.call(null,map__28004_28056__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_28054);

cljs.core.println.call(null," ",arglists_28058);

if(cljs.core.truth_(doc_28057)){
cljs.core.println.call(null," ",doc_28057);
} else {
}


var G__28059 = cljs.core.next.call(null,seq__27992_28047__$1);
var G__28060 = null;
var G__28061 = (0);
var G__28062 = (0);
seq__27992_28032 = G__28059;
chunk__27993_28033 = G__28060;
count__27994_28034 = G__28061;
i__27995_28035 = G__28062;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.call(null,"Spec");

var seq__28006 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__28007 = null;
var count__28008 = (0);
var i__28009 = (0);
while(true){
if((i__28009 < count__28008)){
var role = cljs.core._nth.call(null,chunk__28007,i__28009);
var temp__5804__auto___28063__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5804__auto___28063__$1)){
var spec_28064 = temp__5804__auto___28063__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_28064));
} else {
}


var G__28065 = seq__28006;
var G__28066 = chunk__28007;
var G__28067 = count__28008;
var G__28068 = (i__28009 + (1));
seq__28006 = G__28065;
chunk__28007 = G__28066;
count__28008 = G__28067;
i__28009 = G__28068;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq.call(null,seq__28006);
if(temp__5804__auto____$1){
var seq__28006__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28006__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__28006__$1);
var G__28069 = cljs.core.chunk_rest.call(null,seq__28006__$1);
var G__28070 = c__4319__auto__;
var G__28071 = cljs.core.count.call(null,c__4319__auto__);
var G__28072 = (0);
seq__28006 = G__28069;
chunk__28007 = G__28070;
count__28008 = G__28071;
i__28009 = G__28072;
continue;
} else {
var role = cljs.core.first.call(null,seq__28006__$1);
var temp__5804__auto___28073__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5804__auto___28073__$2)){
var spec_28074 = temp__5804__auto___28073__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_28074));
} else {
}


var G__28075 = cljs.core.next.call(null,seq__28006__$1);
var G__28076 = null;
var G__28077 = (0);
var G__28078 = (0);
seq__28006 = G__28075;
chunk__28007 = G__28076;
count__28008 = G__28077;
i__28009 = G__28078;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1744996264961
