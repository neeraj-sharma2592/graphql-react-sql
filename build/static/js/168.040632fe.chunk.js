"use strict";(self.webpackChunkexample_graphiql_create_react_app=self.webpackChunkexample_graphiql_create_react_app||[]).push([[168],{2269:function(e,t,n){n.d(t,{f:function(){return r}});function r(e,t){for(var n=[],r=e;null===r||void 0===r?void 0:r.kind;)n.push(r),r=r.prevState;for(var i=n.length-1;i>=0;i--)t(n[i])}(0,Object.defineProperty)(r,"name",{value:"forEachState",configurable:!0})},3168:function(e,t,n){n.r(t);var r=n(889),i=n(4544),a=n(7382),l=n(2269),o=(n(4805),n(2791),n(184),n(4164),Object.defineProperty),u=function(e,t){return o(e,"name",{value:t,configurable:!0})};function c(e,t,n){var r=f(n,p(t.string));if(r){var i=null!==t.type&&/"|\w/.test(t.string[0])?t.start:t.end;return{list:r,from:{line:e.line,ch:i},to:{line:e.line,ch:t.end}}}}function f(e,t){return t?s(s(e.map((function(e){return{proximity:d(p(e.text),t),entry:e}})),(function(e){return e.proximity<=2})),(function(e){return!e.entry.isDeprecated})).sort((function(e,t){return(e.entry.isDeprecated?1:0)-(t.entry.isDeprecated?1:0)||e.proximity-t.proximity||e.entry.text.length-t.entry.text.length})).map((function(e){return e.entry})):s(e,(function(e){return!e.isDeprecated}))}function s(e,t){var n=e.filter(t);return 0===n.length?e:n}function p(e){return e.toLowerCase().replaceAll(/\W/g,"")}function d(e,t){var n=y(t,e);return e.length>t.length&&(n-=e.length-t.length-1,n+=0===e.indexOf(t)?0:.5),n}function y(e,t){var n,r,i=[],a=e.length,l=t.length;for(n=0;n<=a;n++)i[n]=[n];for(r=1;r<=l;r++)i[0][r]=r;for(n=1;n<=a;n++)for(r=1;r<=l;r++){var o=e[n-1]===t[r-1]?0:1;i[n][r]=Math.min(i[n-1][r]+1,i[n][r-1]+1,i[n-1][r-1]+o),n>1&&r>1&&e[n-1]===t[r-2]&&e[n-2]===t[r-1]&&(i[n][r]=Math.min(i[n][r],i[n-2][r-2]+o))}return i[a][l]}function v(e,t,n){var r="Invalid"===t.state.kind?t.state.prevState:t.state,l=r.kind,o=r.step;if("Document"===l&&0===o)return c(e,t,[{text:"{"}]);var u=n.variableToType;if(u){var f=m(u,t.state);if("Document"===l||"Variable"===l&&0===o)return c(e,t,Object.keys(u).map((function(e){return{text:'"'.concat(e,'": '),type:u[e]}})));if(("ObjectValue"===l||"ObjectField"===l&&0===o)&&f.fields)return c(e,t,Object.keys(f.fields).map((function(e){return f.fields[e]})).map((function(e){return{text:'"'.concat(e.name,'": '),type:e.type,description:e.description}})));if("StringValue"===l||"NumberValue"===l||"BooleanValue"===l||"NullValue"===l||"ListValue"===l&&1===o||"ObjectField"===l&&2===o||"Variable"===l&&2===o){var s=f.type?(0,i.xC)(f.type):void 0;if(s instanceof i.sR)return c(e,t,[{text:"{"}]);if(s instanceof i.mR)return c(e,t,s.getValues().map((function(e){return{text:'"'.concat(e.name,'"'),type:s,description:e.description}})));if(s===a.EZ)return c(e,t,[{text:"true",type:a.EZ,description:"Not false."},{text:"false",type:a.EZ,description:"Not true."}])}}}function m(e,t){var n={type:null,fields:null};return(0,l.f)(t,(function(t){switch(t.kind){case"Variable":n.type=e[t.name];break;case"ListValue":var r=n.type?(0,i.tf)(n.type):void 0;n.type=r instanceof i.p2?r.ofType:null;break;case"ObjectValue":var a=n.type?(0,i.xC)(n.type):void 0;n.fields=a instanceof i.sR?a.getFields():null;break;case"ObjectField":var l=t.name&&n.fields?n.fields[t.name]:null;n.type=null===l||void 0===l?void 0:l.type}})),n}u(c,"hintList"),u(f,"filterAndSortList"),u(s,"filterNonEmpty"),u(p,"normalizeText"),u(d,"getProximity"),u(y,"lexicalDistance"),r.C.registerHelper("hint","graphql-variables",(function(e,t){var n=e.getCursor(),i=e.getTokenAt(n),a=v(n,i,t);return(null===a||void 0===a?void 0:a.list)&&a.list.length>0&&(a.from=r.C.Pos(a.from.line,a.from.ch),a.to=r.C.Pos(a.to.line,a.to.ch),r.C.signal(e,"hasCompletion",e,a,i)),a})),u(v,"getVariablesHint"),u(m,"getTypeInfo")}}]);
//# sourceMappingURL=168.040632fe.chunk.js.map