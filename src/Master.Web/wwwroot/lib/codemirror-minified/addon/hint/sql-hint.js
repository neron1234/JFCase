'use strict';(function(g){"object"==typeof exports&&"object"==typeof module?g(require("../../lib/codemirror"),require("../../mode/sql/sql")):"function"==typeof define&&define.amd?define(["../../lib/codemirror","../../mode/sql/sql"],g):g(CodeMirror)})(function(g){function t(a){return"[object Array]"==Object.prototype.toString.call(a)}function E(a){a=a.doc.modeOption;"sql"===a&&(a="text/x-sql");return g.resolveMode(a).keywords}function F(a){a=a.doc.modeOption;"sql"===a&&(a="text/x-sql");return g.resolveMode(a).identifierQuote||
"`"}function r(a){return"string"==typeof a?a:a.text}function w(a,b){t(b)&&(b={columns:b});b.text||(b.text=a);return b}function G(a){var b={};if(t(a))for(var c=a.length-1;0<=c;c--){var d=a[c];b[r(d).toUpperCase()]=w(r(d),d)}else if(a)for(c in a)b[c.toUpperCase()]=w(c,a[c]);return b}function x(a){var b={},c;for(c in a)a.hasOwnProperty(c)&&(b[c]=a[c]);return b}function y(a,b){var c=a.length;b=r(b).substr(0,c);return a.toUpperCase()===b.toUpperCase()}function p(a,b,c,d){if(t(c))for(var e=0;e<c.length;e++)y(b,
c[e])&&a.push(d(c[e]));else for(e in c)if(c.hasOwnProperty(e)){var f=c[e];f=f&&!0!==f?f.displayText?{text:f.text,displayText:f.displayText}:f.text:e;y(b,f)&&a.push(d(f))}}function H(a){"."==a.charAt(0)&&(a=a.substr(1));a=a.split(k+k);for(var b=0;b<a.length;b++)a[b]=a[b].replace(new RegExp(k,"g"),"");return a.join(k)}function u(a){for(var b=r(a).split("."),c=0;c<b.length;c++)b[c]=k+b[c].replace(new RegExp(k,"g"),k+k)+k;b=b.join(".");if("string"==typeof a)return b;a=x(a);a.text=b;return a}function I(a,
b,c,d){for(var e=!1,f=[],z=b.start,q=!0;q;)q="."==b.string.charAt(0),e=e||b.string.charAt(0)==k,z=b.start,f.unshift(H(b.string)),b=d.getTokenAt(m(a.line,b.start)),"."==b.string&&(q=!0,b=d.getTokenAt(m(a.line,b.start)));a=f.join(".");p(c,a,n,function(a){return e?u(a):a});p(c,a,h,function(a){return e?u(a):a});a=f.pop();var l=f.join("."),A=!1,g=l;n[l.toUpperCase()]||(f=l,l=B(l,d),l!==f&&(A=!0));(d=n[l.toUpperCase()])&&d.columns&&(d=d.columns);d&&p(c,a,d,function(a){var b=l;1==A&&(b=g);"string"==typeof a?
a=b+"."+a:(a=x(a),a.text=b+"."+a.text);return e?u(a):a});return z}function J(a,b){a=a.split(/\s+/);for(var c=0;c<a.length;c++)a[c]&&b(a[c].replace(/[,;]/g,""))}function B(a,b){var c=b.doc,d=c.getValue(),e=a.toUpperCase(),f="",k="";a=[];for(var g=m(0,0),l=m(b.lastLine(),b.getLineHandle(b.lastLine()).length),h=d.indexOf(v.QUERY_DIV);-1!=h;)a.push(c.posFromIndex(h)),h=d.indexOf(v.QUERY_DIV,h+1);a.unshift(m(0,0));a.push(m(b.lastLine(),b.getLineHandle(b.lastLine()).text.length));d=null;h=b.getCursor();
for(b=0;b<a.length;b++){if((null==d||0<C(h,d))&&0>=C(h,a[b])){g=d;l=a[b];break}d=a[b]}if(g)for(c=c.getRange(g,l,!1),b=0;b<c.length&&(J(c[b],function(a){var b=a.toUpperCase();b===e&&n[f.toUpperCase()]&&(k=f);b!==v.ALIAS_KEYWORD&&(f=a)}),!k);b++);return k}var n,h,D,k,v={QUERY_DIV:";",ALIAS_KEYWORD:"AS"},m=g.Pos,C=g.cmpPos;g.registerHelper("hint","sql",function(a,b){n=G(b&&b.tables);var c=b&&b.defaultTable;b=b&&b.disableKeywords;h=c&&n[c.toUpperCase()];D=E(a);k=F(a);c&&!h&&(h=B(c,a));h=h||[];h.columns&&
(h=h.columns);c=a.getCursor();var d=[],e=a.getTokenAt(c);e.end>c.ch&&(e.end=c.ch,e.string=e.string.slice(0,c.ch-e.start));if(e.string.match(/^[.`"\w@]\w*$/)){var f=e.string;var g=e.start;var q=e.end}else g=q=c.ch,f="";"."==f.charAt(0)||f.charAt(0)==k?g=I(c,e,d,a):(p(d,f,h,function(a){return{text:a,className:"CodeMirror-hint-table CodeMirror-hint-default-table"}}),p(d,f,n,function(a){"object"===typeof a?a.className="CodeMirror-hint-table":a={text:a,className:"CodeMirror-hint-table"};return a}),b||
p(d,f,D,function(a){return{text:a.toUpperCase(),className:"CodeMirror-hint-keyword"}}));return{list:d,from:m(c.line,g),to:m(c.line,q)}})});
