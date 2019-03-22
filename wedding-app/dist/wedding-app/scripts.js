/*! jQuery v1.11.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l="1.11.1",m=function(a,b){return new m.fn.init(a,b)},n=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,o=/^-ms-/,p=/-([\da-z])/gi,q=function(a,b){return b.toUpperCase()};m.fn=m.prototype={jquery:l,constructor:m,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=m.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return m.each(this,a,b)},map:function(a){return this.pushStack(m.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},m.extend=m.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||m.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(m.isPlainObject(c)||(b=m.isArray(c)))?(b?(b=!1,f=a&&m.isArray(a)?a:[]):f=a&&m.isPlainObject(a)?a:{},g[d]=m.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},m.extend({expando:"jQuery"+(l+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===m.type(a)},isArray:Array.isArray||function(a){return"array"===m.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return!m.isArray(a)&&a-parseFloat(a)>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==m.type(a)||a.nodeType||m.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(k.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&m.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(o,"ms-").replace(p,q)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=r(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(n,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(r(Object(a))?m.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=r(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),m.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||m.guid++,e):void 0},now:function(){return+new Date},support:k}),m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function r(a){var b=a.length,c=m.type(a);return"function"===c||m.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var s=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+-new Date,v=a.document,w=0,x=0,y=gb(),z=gb(),A=gb(),B=function(a,b){return a===b&&(l=!0),0},C="undefined",D=1<<31,E={}.hasOwnProperty,F=[],G=F.pop,H=F.push,I=F.push,J=F.slice,K=F.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},L="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",N="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=N.replace("w","w#"),P="\\["+M+"*("+N+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+O+"))|)"+M+"*\\]",Q=":("+N+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+P+")*)|.*)\\)|)",R=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),S=new RegExp("^"+M+"*,"+M+"*"),T=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),V=new RegExp(Q),W=new RegExp("^"+O+"$"),X={ID:new RegExp("^#("+N+")"),CLASS:new RegExp("^\\.("+N+")"),TAG:new RegExp("^("+N.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+Q),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+L+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{I.apply(F=J.call(v.childNodes),v.childNodes),F[v.childNodes.length].nodeType}catch(eb){I={apply:F.length?function(a,b){H.apply(a,J.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],!a||"string"!=typeof a)return d;if(1!==(k=b.nodeType)&&9!==k)return[];if(p&&!e){if(f=_.exec(a))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return I.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return I.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=9===k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+qb(o[l]);w=ab.test(a)&&ob(b.parentNode)||b,x=o.join(",")}if(x)try{return I.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function gb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function hb(a){return a[u]=!0,a}function ib(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function jb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function kb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||D)-(~a.sourceIndex||D);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function lb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function nb(a){return hb(function(b){return b=+b,hb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function ob(a){return a&&typeof a.getElementsByTagName!==C&&a}c=fb.support={},f=fb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fb.setDocument=function(a){var b,e=a?a.ownerDocument||a:v,g=e.defaultView;return e!==n&&9===e.nodeType&&e.documentElement?(n=e,o=e.documentElement,p=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){m()},!1):g.attachEvent&&g.attachEvent("onunload",function(){m()})),c.attributes=ib(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ib(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(e.getElementsByClassName)&&ib(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=ib(function(a){return o.appendChild(a).id=u,!e.getElementsByName||!e.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==C&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c=typeof a.getAttributeNode!==C&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==C?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==C&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(e.querySelectorAll))&&(ib(function(a){a.innerHTML="<select msallowclip=''><option selected=''></option></select>",a.querySelectorAll("[msallowclip^='']").length&&q.push("[*^$]="+M+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+M+"*(?:value|"+L+")"),a.querySelectorAll(":checked").length||q.push(":checked")}),ib(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+M+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ib(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",Q)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===v&&t(v,a)?-1:b===e||b.ownerDocument===v&&t(v,b)?1:k?K.call(k,a)-K.call(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],i=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:k?K.call(k,a)-K.call(k,b):0;if(f===g)return kb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?kb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},e):n},fb.matches=function(a,b){return fb(a,null,null,b)},fb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fb(b,n,null,[a]).length>0},fb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&E.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fb.selectors={cacheLength:50,createPseudo:hb,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+M+")"+a+"("+M+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==C&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?hb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=K.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:hb(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?hb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:hb(function(a){return function(b){return fb(a,b).length>0}}),contains:hb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:hb(function(a){return W.test(a||"")||fb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:nb(function(){return[0]}),last:nb(function(a,b){return[b-1]}),eq:nb(function(a,b,c){return[0>c?c+b:c]}),even:nb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:nb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:nb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:nb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=lb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=mb(b);function pb(){}pb.prototype=d.filters=d.pseudos,d.setFilters=new pb,g=fb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fb.error(a):z(a,i).slice(0)};function qb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function rb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function sb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function tb(a,b,c){for(var d=0,e=b.length;e>d;d++)fb(a,b[d],c);return c}function ub(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function vb(a,b,c,d,e,f){return d&&!d[u]&&(d=vb(d)),e&&!e[u]&&(e=vb(e,f)),hb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||tb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ub(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ub(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?K.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ub(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):I.apply(g,r)})}function wb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=rb(function(a){return a===b},h,!0),l=rb(function(a){return K.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>i;i++)if(c=d.relative[a[i].type])m=[rb(sb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return vb(i>1&&sb(m),i>1&&qb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&wb(a.slice(i,e)),f>e&&wb(a=a.slice(e)),f>e&&qb(a))}m.push(c)}return sb(m)}function xb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=G.call(i));s=ub(s)}I.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&fb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?hb(f):f}return h=fb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xb(e,d)),f.selector=a}return f},i=fb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&ob(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qb(j),!a)return I.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&ob(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ib(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ib(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||jb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ib(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||jb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ib(function(a){return null==a.getAttribute("disabled")})||jb(L,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fb}(a);m.find=s,m.expr=s.selectors,m.expr[":"]=m.expr.pseudos,m.unique=s.uniqueSort,m.text=s.getText,m.isXMLDoc=s.isXML,m.contains=s.contains;var t=m.expr.match.needsContext,u=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,v=/^.[^:#\[\.,]*$/;function w(a,b,c){if(m.isFunction(b))return m.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return m.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(v.test(b))return m.filter(b,a,c);b=m.filter(b,a)}return m.grep(a,function(a){return m.inArray(a,b)>=0!==c})}m.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?m.find.matchesSelector(d,a)?[d]:[]:m.find.matches(a,m.grep(b,function(a){return 1===a.nodeType}))},m.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(m(a).filter(function(){for(b=0;e>b;b++)if(m.contains(d[b],this))return!0}));for(b=0;e>b;b++)m.find(a,d[b],c);return c=this.pushStack(e>1?m.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(w(this,a||[],!1))},not:function(a){return this.pushStack(w(this,a||[],!0))},is:function(a){return!!w(this,"string"==typeof a&&t.test(a)?m(a):a||[],!1).length}});var x,y=a.document,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=m.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||x).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof m?b[0]:b,m.merge(this,m.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:y,!0)),u.test(c[1])&&m.isPlainObject(b))for(c in b)m.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=y.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return x.find(a);this.length=1,this[0]=d}return this.context=y,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):m.isFunction(a)?"undefined"!=typeof x.ready?x.ready(a):a(m):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),m.makeArray(a,this))};A.prototype=m.fn,x=m(y);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};m.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!m(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),m.fn.extend({has:function(a){var b,c=m(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(m.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=t.test(a)||"string"!=typeof a?m(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&m.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?m.unique(f):f)},index:function(a){return a?"string"==typeof a?m.inArray(this[0],m(a)):m.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(m.unique(m.merge(this.get(),m(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}m.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return m.dir(a,"parentNode")},parentsUntil:function(a,b,c){return m.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return m.dir(a,"nextSibling")},prevAll:function(a){return m.dir(a,"previousSibling")},nextUntil:function(a,b,c){return m.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return m.dir(a,"previousSibling",c)},siblings:function(a){return m.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return m.sibling(a.firstChild)},contents:function(a){return m.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:m.merge([],a.childNodes)}},function(a,b){m.fn[a]=function(c,d){var e=m.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=m.filter(d,e)),this.length>1&&(C[a]||(e=m.unique(e)),B.test(a)&&(e=e.reverse())),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return m.each(a.match(E)||[],function(a,c){b[c]=!0}),b}m.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):m.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){m.each(b,function(b,c){var d=m.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&m.each(arguments,function(a,c){var d;while((d=m.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?m.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},m.extend({Deferred:function(a){var b=[["resolve","done",m.Callbacks("once memory"),"resolved"],["reject","fail",m.Callbacks("once memory"),"rejected"],["notify","progress",m.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return m.Deferred(function(c){m.each(b,function(b,f){var g=m.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&m.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?m.extend(a,d):d}},e={};return d.pipe=d.then,m.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&m.isFunction(a.promise)?e:0,g=1===f?a:m.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&m.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;m.fn.ready=function(a){return m.ready.promise().done(a),this},m.extend({isReady:!1,readyWait:1,holdReady:function(a){a?m.readyWait++:m.ready(!0)},ready:function(a){if(a===!0?!--m.readyWait:!m.isReady){if(!y.body)return setTimeout(m.ready);m.isReady=!0,a!==!0&&--m.readyWait>0||(H.resolveWith(y,[m]),m.fn.triggerHandler&&(m(y).triggerHandler("ready"),m(y).off("ready")))}}});function I(){y.addEventListener?(y.removeEventListener("DOMContentLoaded",J,!1),a.removeEventListener("load",J,!1)):(y.detachEvent("onreadystatechange",J),a.detachEvent("onload",J))}function J(){(y.addEventListener||"load"===event.type||"complete"===y.readyState)&&(I(),m.ready())}m.ready.promise=function(b){if(!H)if(H=m.Deferred(),"complete"===y.readyState)setTimeout(m.ready);else if(y.addEventListener)y.addEventListener("DOMContentLoaded",J,!1),a.addEventListener("load",J,!1);else{y.attachEvent("onreadystatechange",J),a.attachEvent("onload",J);var c=!1;try{c=null==a.frameElement&&y.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!m.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}I(),m.ready()}}()}return H.promise(b)};var K="undefined",L;for(L in m(k))break;k.ownLast="0"!==L,k.inlineBlockNeedsLayout=!1,m(function(){var a,b,c,d;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",k.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(d))}),function(){var a=y.createElement("div");if(null==k.deleteExpando){k.deleteExpando=!0;try{delete a.test}catch(b){k.deleteExpando=!1}}a=null}(),m.acceptData=function(a){var b=m.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var M=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,N=/([A-Z])/g;function O(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(N,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:M.test(c)?m.parseJSON(c):c}catch(e){}m.data(a,b,c)}else c=void 0}return c}function P(a){var b;for(b in a)if(("data"!==b||!m.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function Q(a,b,d,e){if(m.acceptData(a)){var f,g,h=m.expando,i=a.nodeType,j=i?m.cache:a,k=i?a[h]:a[h]&&h;
    if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||m.guid++:h),j[k]||(j[k]=i?{}:{toJSON:m.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=m.extend(j[k],b):j[k].data=m.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[m.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[m.camelCase(b)])):f=g,f}}function R(a,b,c){if(m.acceptData(a)){var d,e,f=a.nodeType,g=f?m.cache:a,h=f?a[m.expando]:m.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){m.isArray(b)?b=b.concat(m.map(b,m.camelCase)):b in d?b=[b]:(b=m.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!P(d):!m.isEmptyObject(d))return}(c||(delete g[h].data,P(g[h])))&&(f?m.cleanData([a],!0):k.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}m.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?m.cache[a[m.expando]]:a[m.expando],!!a&&!P(a)},data:function(a,b,c){return Q(a,b,c)},removeData:function(a,b){return R(a,b)},_data:function(a,b,c){return Q(a,b,c,!0)},_removeData:function(a,b){return R(a,b,!0)}}),m.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=m.data(f),1===f.nodeType&&!m._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=m.camelCase(d.slice(5)),O(f,d,e[d])));m._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){m.data(this,a)}):arguments.length>1?this.each(function(){m.data(this,a,b)}):f?O(f,a,m.data(f,a)):void 0},removeData:function(a){return this.each(function(){m.removeData(this,a)})}}),m.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=m._data(a,b),c&&(!d||m.isArray(c)?d=m._data(a,b,m.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=m.queue(a,b),d=c.length,e=c.shift(),f=m._queueHooks(a,b),g=function(){m.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return m._data(a,c)||m._data(a,c,{empty:m.Callbacks("once memory").add(function(){m._removeData(a,b+"queue"),m._removeData(a,c)})})}}),m.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?m.queue(this[0],a):void 0===b?this:this.each(function(){var c=m.queue(this,a,b);m._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&m.dequeue(this,a)})},dequeue:function(a){return this.each(function(){m.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=m.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=m._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=["Top","Right","Bottom","Left"],U=function(a,b){return a=b||a,"none"===m.css(a,"display")||!m.contains(a.ownerDocument,a)},V=m.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===m.type(c)){e=!0;for(h in c)m.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,m.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(m(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},W=/^(?:checkbox|radio)$/i;!function(){var a=y.createElement("input"),b=y.createElement("div"),c=y.createDocumentFragment();if(b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",k.leadingWhitespace=3===b.firstChild.nodeType,k.tbody=!b.getElementsByTagName("tbody").length,k.htmlSerialize=!!b.getElementsByTagName("link").length,k.html5Clone="<:nav></:nav>"!==y.createElement("nav").cloneNode(!0).outerHTML,a.type="checkbox",a.checked=!0,c.appendChild(a),k.appendChecked=a.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,c.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,k.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){k.noCloneEvent=!1}),b.cloneNode(!0).click()),null==k.deleteExpando){k.deleteExpando=!0;try{delete b.test}catch(d){k.deleteExpando=!1}}}(),function(){var b,c,d=y.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(k[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),k[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var X=/^(?:input|select|textarea)$/i,Y=/^key/,Z=/^(?:mouse|pointer|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=/^([^.]*)(?:\.(.+)|)$/;function ab(){return!0}function bb(){return!1}function cb(){try{return y.activeElement}catch(a){}}m.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=m.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof m===K||a&&m.event.triggered===a.type?void 0:m.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(E)||[""],h=b.length;while(h--)f=_.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=m.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=m.event.special[o]||{},l=m.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&m.expr.match.needsContext.test(e),namespace:p.join(".")},i),(n=g[o])||(n=g[o]=[],n.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?n.splice(n.delegateCount++,0,l):n.push(l),m.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m.hasData(a)&&m._data(a);if(r&&(k=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=_.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=m.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,n=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=n.length;while(f--)g=n[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(n.splice(f,1),g.selector&&n.delegateCount--,l.remove&&l.remove.call(a,g));i&&!n.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||m.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)m.event.remove(a,o+b[j],c,d,!0);m.isEmptyObject(k)&&(delete r.handle,m._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,o=[d||y],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||y,3!==d.nodeType&&8!==d.nodeType&&!$.test(p+m.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[m.expando]?b:new m.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:m.makeArray(c,[b]),k=m.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!m.isWindow(d)){for(i=k.delegateType||p,$.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||y)&&o.push(l.defaultView||l.parentWindow||a)}n=0;while((h=o[n++])&&!b.isPropagationStopped())b.type=n>1?i:k.bindType||p,f=(m._data(h,"events")||{})[b.type]&&m._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&m.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&m.acceptData(d)&&g&&d[p]&&!m.isWindow(d)){l=d[g],l&&(d[g]=null),m.event.triggered=p;try{d[p]()}catch(r){}m.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=m.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(m._data(this,"events")||{})[a.type]||[],k=m.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=m.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((m.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?m(c,this).index(i)>=0:m.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[m.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=Z.test(e)?this.mouseHooks:Y.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new m.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||y),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||y,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==cb()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===cb()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return m.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return m.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=m.extend(new m.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?m.event.trigger(e,null,b):m.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},m.removeEvent=y.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===K&&(a[d]=null),a.detachEvent(d,c))},m.Event=function(a,b){return this instanceof m.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ab:bb):this.type=a,b&&m.extend(this,b),this.timeStamp=a&&a.timeStamp||m.now(),void(this[m.expando]=!0)):new m.Event(a,b)},m.Event.prototype={isDefaultPrevented:bb,isPropagationStopped:bb,isImmediatePropagationStopped:bb,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ab,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ab,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ab,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},m.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){m.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!m.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.submitBubbles||(m.event.special.submit={setup:function(){return m.nodeName(this,"form")?!1:void m.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=m.nodeName(b,"input")||m.nodeName(b,"button")?b.form:void 0;c&&!m._data(c,"submitBubbles")&&(m.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),m._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&m.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return m.nodeName(this,"form")?!1:void m.event.remove(this,"._submit")}}),k.changeBubbles||(m.event.special.change={setup:function(){return X.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(m.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),m.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),m.event.simulate("change",this,a,!0)})),!1):void m.event.add(this,"beforeactivate._change",function(a){var b=a.target;X.test(b.nodeName)&&!m._data(b,"changeBubbles")&&(m.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||m.event.simulate("change",this.parentNode,a,!0)}),m._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return m.event.remove(this,"._change"),!X.test(this.nodeName)}}),k.focusinBubbles||m.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){m.event.simulate(b,a.target,m.event.fix(a),!0)};m.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=m._data(d,b);e||d.addEventListener(a,c,!0),m._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=m._data(d,b)-1;e?m._data(d,b,e):(d.removeEventListener(a,c,!0),m._removeData(d,b))}}}),m.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=bb;else if(!d)return this;return 1===e&&(g=d,d=function(a){return m().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=m.guid++)),this.each(function(){m.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,m(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=bb),this.each(function(){m.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){m.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?m.event.trigger(a,b,c,!0):void 0}});function db(a){var b=eb.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var eb="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",fb=/ jQuery\d+="(?:null|\d+)"/g,gb=new RegExp("<(?:"+eb+")[\\s/>]","i"),hb=/^\s+/,ib=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,jb=/<([\w:]+)/,kb=/<tbody/i,lb=/<|&#?\w+;/,mb=/<(?:script|style|link)/i,nb=/checked\s*(?:[^=]|=\s*.checked.)/i,ob=/^$|\/(?:java|ecma)script/i,pb=/^true\/(.*)/,qb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,rb={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:k.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},sb=db(y),tb=sb.appendChild(y.createElement("div"));rb.optgroup=rb.option,rb.tbody=rb.tfoot=rb.colgroup=rb.caption=rb.thead,rb.th=rb.td;function ub(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==K?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==K?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||m.nodeName(d,b)?f.push(d):m.merge(f,ub(d,b));return void 0===b||b&&m.nodeName(a,b)?m.merge([a],f):f}function vb(a){W.test(a.type)&&(a.defaultChecked=a.checked)}function wb(a,b){return m.nodeName(a,"table")&&m.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function xb(a){return a.type=(null!==m.find.attr(a,"type"))+"/"+a.type,a}function yb(a){var b=pb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function zb(a,b){for(var c,d=0;null!=(c=a[d]);d++)m._data(c,"globalEval",!b||m._data(b[d],"globalEval"))}function Ab(a,b){if(1===b.nodeType&&m.hasData(a)){var c,d,e,f=m._data(a),g=m._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)m.event.add(b,c,h[c][d])}g.data&&(g.data=m.extend({},g.data))}}function Bb(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!k.noCloneEvent&&b[m.expando]){e=m._data(b);for(d in e.events)m.removeEvent(b,d,e.handle);b.removeAttribute(m.expando)}"script"===c&&b.text!==a.text?(xb(b).text=a.text,yb(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),k.html5Clone&&a.innerHTML&&!m.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&W.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}m.extend({clone:function(a,b,c){var d,e,f,g,h,i=m.contains(a.ownerDocument,a);if(k.html5Clone||m.isXMLDoc(a)||!gb.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(tb.innerHTML=a.outerHTML,tb.removeChild(f=tb.firstChild)),!(k.noCloneEvent&&k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||m.isXMLDoc(a)))for(d=ub(f),h=ub(a),g=0;null!=(e=h[g]);++g)d[g]&&Bb(e,d[g]);if(b)if(c)for(h=h||ub(a),d=d||ub(f),g=0;null!=(e=h[g]);g++)Ab(e,d[g]);else Ab(a,f);return d=ub(f,"script"),d.length>0&&zb(d,!i&&ub(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,l,n=a.length,o=db(b),p=[],q=0;n>q;q++)if(f=a[q],f||0===f)if("object"===m.type(f))m.merge(p,f.nodeType?[f]:f);else if(lb.test(f)){h=h||o.appendChild(b.createElement("div")),i=(jb.exec(f)||["",""])[1].toLowerCase(),l=rb[i]||rb._default,h.innerHTML=l[1]+f.replace(ib,"<$1></$2>")+l[2],e=l[0];while(e--)h=h.lastChild;if(!k.leadingWhitespace&&hb.test(f)&&p.push(b.createTextNode(hb.exec(f)[0])),!k.tbody){f="table"!==i||kb.test(f)?"<table>"!==l[1]||kb.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)m.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}m.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),k.appendChecked||m.grep(ub(p,"input"),vb),q=0;while(f=p[q++])if((!d||-1===m.inArray(f,d))&&(g=m.contains(f.ownerDocument,f),h=ub(o.appendChild(f),"script"),g&&zb(h),c)){e=0;while(f=h[e++])ob.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=m.expando,j=m.cache,l=k.deleteExpando,n=m.event.special;null!=(d=a[h]);h++)if((b||m.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)n[e]?m.event.remove(d,e):m.removeEvent(d,e,g.handle);j[f]&&(delete j[f],l?delete d[i]:typeof d.removeAttribute!==K?d.removeAttribute(i):d[i]=null,c.push(f))}}}),m.fn.extend({text:function(a){return V(this,function(a){return void 0===a?m.text(this):this.empty().append((this[0]&&this[0].ownerDocument||y).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?m.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||m.cleanData(ub(c)),c.parentNode&&(b&&m.contains(c.ownerDocument,c)&&zb(ub(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&m.cleanData(ub(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&m.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return m.clone(this,a,b)})},html:function(a){return V(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(fb,""):void 0;if(!("string"!=typeof a||mb.test(a)||!k.htmlSerialize&&gb.test(a)||!k.leadingWhitespace&&hb.test(a)||rb[(jb.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(ib,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(m.cleanData(ub(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,m.cleanData(ub(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,n=this,o=l-1,p=a[0],q=m.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&nb.test(p))return this.each(function(c){var d=n.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(i=m.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=m.map(ub(i,"script"),xb),f=g.length;l>j;j++)d=i,j!==o&&(d=m.clone(d,!0,!0),f&&m.merge(g,ub(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,m.map(g,yb),j=0;f>j;j++)d=g[j],ob.test(d.type||"")&&!m._data(d,"globalEval")&&m.contains(h,d)&&(d.src?m._evalUrl&&m._evalUrl(d.src):m.globalEval((d.text||d.textContent||d.innerHTML||"").replace(qb,"")));i=c=null}return this}}),m.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){m.fn[a]=function(a){for(var c,d=0,e=[],g=m(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),m(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Cb,Db={};function Eb(b,c){var d,e=m(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:m.css(e[0],"display");return e.detach(),f}function Fb(a){var b=y,c=Db[a];return c||(c=Eb(a,b),"none"!==c&&c||(Cb=(Cb||m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Cb[0].contentWindow||Cb[0].contentDocument).document,b.write(),b.close(),c=Eb(a,b),Cb.detach()),Db[a]=c),c}!function(){var a;k.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,d;return c=y.getElementsByTagName("body")[0],c&&c.style?(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(y.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(d),a):void 0}}();var Gb=/^margin/,Hb=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ib,Jb,Kb=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ib=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)},Jb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ib(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||m.contains(a.ownerDocument,a)||(g=m.style(a,b)),Hb.test(g)&&Gb.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):y.documentElement.currentStyle&&(Ib=function(a){return a.currentStyle},Jb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ib(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Hb.test(g)&&!Kb.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Lb(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h;if(b=y.createElement("div"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=d&&d.style){c.cssText="float:left;opacity:.5",k.opacity="0.5"===c.opacity,k.cssFloat=!!c.cssFloat,b.style.backgroundClip="content-box",b.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===b.style.backgroundClip,k.boxSizing=""===c.boxSizing||""===c.MozBoxSizing||""===c.WebkitBoxSizing,m.extend(k,{reliableHiddenOffsets:function(){return null==g&&i(),g},boxSizingReliable:function(){return null==f&&i(),f},pixelPosition:function(){return null==e&&i(),e},reliableMarginRight:function(){return null==h&&i(),h}});function i(){var b,c,d,i;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),b.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",e=f=!1,h=!0,a.getComputedStyle&&(e="1%"!==(a.getComputedStyle(b,null)||{}).top,f="4px"===(a.getComputedStyle(b,null)||{width:"4px"}).width,i=b.appendChild(y.createElement("div")),i.style.cssText=b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",i.style.marginRight=i.style.width="0",b.style.width="1px",h=!parseFloat((a.getComputedStyle(i,null)||{}).marginRight)),b.innerHTML="<table><tr><td></td><td>t</td></tr></table>",i=b.getElementsByTagName("td"),i[0].style.cssText="margin:0;border:0;padding:0;display:none",g=0===i[0].offsetHeight,g&&(i[0].style.display="",i[1].style.display="none",g=0===i[0].offsetHeight),c.removeChild(d))}}}(),m.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Mb=/alpha\([^)]*\)/i,Nb=/opacity\s*=\s*([^)]*)/,Ob=/^(none|table(?!-c[ea]).+)/,Pb=new RegExp("^("+S+")(.*)$","i"),Qb=new RegExp("^([+-])=("+S+")","i"),Rb={position:"absolute",visibility:"hidden",display:"block"},Sb={letterSpacing:"0",fontWeight:"400"},Tb=["Webkit","O","Moz","ms"];function Ub(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Tb.length;while(e--)if(b=Tb[e]+c,b in a)return b;return d}function Vb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=m._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&U(d)&&(f[g]=m._data(d,"olddisplay",Fb(d.nodeName)))):(e=U(d),(c&&"none"!==c||!e)&&m._data(d,"olddisplay",e?c:m.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Wb(a,b,c){var d=Pb.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Xb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=m.css(a,c+T[f],!0,e)),d?("content"===c&&(g-=m.css(a,"padding"+T[f],!0,e)),"margin"!==c&&(g-=m.css(a,"border"+T[f]+"Width",!0,e))):(g+=m.css(a,"padding"+T[f],!0,e),"padding"!==c&&(g+=m.css(a,"border"+T[f]+"Width",!0,e)));return g}function Yb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ib(a),g=k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Jb(a,b,f),(0>e||null==e)&&(e=a.style[b]),Hb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Xb(a,b,c||(g?"border":"content"),d,f)+"px"}m.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Jb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":k.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=m.camelCase(b),i=a.style;if(b=m.cssProps[h]||(m.cssProps[h]=Ub(i,h)),g=m.cssHooks[b]||m.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Qb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(m.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||m.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=m.camelCase(b);return b=m.cssProps[h]||(m.cssProps[h]=Ub(a.style,h)),g=m.cssHooks[b]||m.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Jb(a,b,d)),"normal"===f&&b in Sb&&(f=Sb[b]),""===c||c?(e=parseFloat(f),c===!0||m.isNumeric(e)?e||0:f):f}}),m.each(["height","width"],function(a,b){m.cssHooks[b]={get:function(a,c,d){return c?Ob.test(m.css(a,"display"))&&0===a.offsetWidth?m.swap(a,Rb,function(){return Yb(a,b,d)}):Yb(a,b,d):void 0},set:function(a,c,d){var e=d&&Ib(a);return Wb(a,c,d?Xb(a,b,d,k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,e),e):0)}}}),k.opacity||(m.cssHooks.opacity={get:function(a,b){return Nb.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=m.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===m.trim(f.replace(Mb,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Mb.test(f)?f.replace(Mb,e):f+" "+e)}}),m.cssHooks.marginRight=Lb(k.reliableMarginRight,function(a,b){return b?m.swap(a,{display:"inline-block"},Jb,[a,"marginRight"]):void 0}),m.each({margin:"",padding:"",border:"Width"},function(a,b){m.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+T[d]+b]=f[d]||f[d-2]||f[0];return e}},Gb.test(a)||(m.cssHooks[a+b].set=Wb)}),m.fn.extend({css:function(a,b){return V(this,function(a,b,c){var d,e,f={},g=0;if(m.isArray(b)){for(d=Ib(a),e=b.length;e>g;g++)f[b[g]]=m.css(a,b[g],!1,d);return f}return void 0!==c?m.style(a,b,c):m.css(a,b)},a,b,arguments.length>1)},show:function(){return Vb(this,!0)},hide:function(){return Vb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){U(this)?m(this).show():m(this).hide()})}});function Zb(a,b,c,d,e){return new Zb.prototype.init(a,b,c,d,e)}m.Tween=Zb,Zb.prototype={constructor:Zb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(m.cssNumber[c]?"":"px")
    },cur:function(){var a=Zb.propHooks[this.prop];return a&&a.get?a.get(this):Zb.propHooks._default.get(this)},run:function(a){var b,c=Zb.propHooks[this.prop];return this.pos=b=this.options.duration?m.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Zb.propHooks._default.set(this),this}},Zb.prototype.init.prototype=Zb.prototype,Zb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=m.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){m.fx.step[a.prop]?m.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[m.cssProps[a.prop]]||m.cssHooks[a.prop])?m.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Zb.propHooks.scrollTop=Zb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},m.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},m.fx=Zb.prototype.init,m.fx.step={};var $b,_b,ac=/^(?:toggle|show|hide)$/,bc=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),cc=/queueHooks$/,dc=[ic],ec={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=bc.exec(b),f=e&&e[3]||(m.cssNumber[a]?"":"px"),g=(m.cssNumber[a]||"px"!==f&&+d)&&bc.exec(m.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,m.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function fc(){return setTimeout(function(){$b=void 0}),$b=m.now()}function gc(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=T[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function hc(a,b,c){for(var d,e=(ec[b]||[]).concat(ec["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ic(a,b,c){var d,e,f,g,h,i,j,l,n=this,o={},p=a.style,q=a.nodeType&&U(a),r=m._data(a,"fxshow");c.queue||(h=m._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,n.always(function(){n.always(function(){h.unqueued--,m.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=m.css(a,"display"),l="none"===j?m._data(a,"olddisplay")||Fb(a.nodeName):j,"inline"===l&&"none"===m.css(a,"float")&&(k.inlineBlockNeedsLayout&&"inline"!==Fb(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",k.shrinkWrapBlocks()||n.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],ac.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||m.style(a,d)}else j=void 0;if(m.isEmptyObject(o))"inline"===("none"===j?Fb(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=m._data(a,"fxshow",{}),f&&(r.hidden=!q),q?m(a).show():n.done(function(){m(a).hide()}),n.done(function(){var b;m._removeData(a,"fxshow");for(b in o)m.style(a,b,o[b])});for(d in o)g=hc(q?r[d]:0,d,n),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function jc(a,b){var c,d,e,f,g;for(c in a)if(d=m.camelCase(c),e=b[d],f=a[c],m.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=m.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kc(a,b,c){var d,e,f=0,g=dc.length,h=m.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=$b||fc(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:m.extend({},b),opts:m.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:$b||fc(),duration:c.duration,tweens:[],createTween:function(b,c){var d=m.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jc(k,j.opts.specialEasing);g>f;f++)if(d=dc[f].call(j,a,k,j.opts))return d;return m.map(k,hc,j),m.isFunction(j.opts.start)&&j.opts.start.call(a,j),m.fx.timer(m.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}m.Animation=m.extend(kc,{tweener:function(a,b){m.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],ec[c]=ec[c]||[],ec[c].unshift(b)},prefilter:function(a,b){b?dc.unshift(a):dc.push(a)}}),m.speed=function(a,b,c){var d=a&&"object"==typeof a?m.extend({},a):{complete:c||!c&&b||m.isFunction(a)&&a,duration:a,easing:c&&b||b&&!m.isFunction(b)&&b};return d.duration=m.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in m.fx.speeds?m.fx.speeds[d.duration]:m.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){m.isFunction(d.old)&&d.old.call(this),d.queue&&m.dequeue(this,d.queue)},d},m.fn.extend({fadeTo:function(a,b,c,d){return this.filter(U).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=m.isEmptyObject(a),f=m.speed(b,c,d),g=function(){var b=kc(this,m.extend({},a),f);(e||m._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=m.timers,g=m._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&cc.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&m.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=m._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=m.timers,g=d?d.length:0;for(c.finish=!0,m.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),m.each(["toggle","show","hide"],function(a,b){var c=m.fn[b];m.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gc(b,!0),a,d,e)}}),m.each({slideDown:gc("show"),slideUp:gc("hide"),slideToggle:gc("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){m.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),m.timers=[],m.fx.tick=function(){var a,b=m.timers,c=0;for($b=m.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||m.fx.stop(),$b=void 0},m.fx.timer=function(a){m.timers.push(a),a()?m.fx.start():m.timers.pop()},m.fx.interval=13,m.fx.start=function(){_b||(_b=setInterval(m.fx.tick,m.fx.interval))},m.fx.stop=function(){clearInterval(_b),_b=null},m.fx.speeds={slow:600,fast:200,_default:400},m.fn.delay=function(a,b){return a=m.fx?m.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e;b=y.createElement("div"),b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=y.createElement("select"),e=c.appendChild(y.createElement("option")),a=b.getElementsByTagName("input")[0],d.style.cssText="top:1px",k.getSetAttribute="t"!==b.className,k.style=/top/.test(d.getAttribute("style")),k.hrefNormalized="/a"===d.getAttribute("href"),k.checkOn=!!a.value,k.optSelected=e.selected,k.enctype=!!y.createElement("form").enctype,c.disabled=!0,k.optDisabled=!e.disabled,a=y.createElement("input"),a.setAttribute("value",""),k.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),k.radioValue="t"===a.value}();var lc=/\r/g;m.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=m.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,m(this).val()):a,null==e?e="":"number"==typeof e?e+="":m.isArray(e)&&(e=m.map(e,function(a){return null==a?"":a+""})),b=m.valHooks[this.type]||m.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=m.valHooks[e.type]||m.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(lc,""):null==c?"":c)}}}),m.extend({valHooks:{option:{get:function(a){var b=m.find.attr(a,"value");return null!=b?b:m.trim(m.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&m.nodeName(c.parentNode,"optgroup"))){if(b=m(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=m.makeArray(b),g=e.length;while(g--)if(d=e[g],m.inArray(m.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),m.each(["radio","checkbox"],function(){m.valHooks[this]={set:function(a,b){return m.isArray(b)?a.checked=m.inArray(m(a).val(),b)>=0:void 0}},k.checkOn||(m.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var mc,nc,oc=m.expr.attrHandle,pc=/^(?:checked|selected)$/i,qc=k.getSetAttribute,rc=k.input;m.fn.extend({attr:function(a,b){return V(this,m.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){m.removeAttr(this,a)})}}),m.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===K?m.prop(a,b,c):(1===f&&m.isXMLDoc(a)||(b=b.toLowerCase(),d=m.attrHooks[b]||(m.expr.match.bool.test(b)?nc:mc)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=m.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void m.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=m.propFix[c]||c,m.expr.match.bool.test(c)?rc&&qc||!pc.test(c)?a[d]=!1:a[m.camelCase("default-"+c)]=a[d]=!1:m.attr(a,c,""),a.removeAttribute(qc?c:d)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&m.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),nc={set:function(a,b,c){return b===!1?m.removeAttr(a,c):rc&&qc||!pc.test(c)?a.setAttribute(!qc&&m.propFix[c]||c,c):a[m.camelCase("default-"+c)]=a[c]=!0,c}},m.each(m.expr.match.bool.source.match(/\w+/g),function(a,b){var c=oc[b]||m.find.attr;oc[b]=rc&&qc||!pc.test(b)?function(a,b,d){var e,f;return d||(f=oc[b],oc[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,oc[b]=f),e}:function(a,b,c){return c?void 0:a[m.camelCase("default-"+b)]?b.toLowerCase():null}}),rc&&qc||(m.attrHooks.value={set:function(a,b,c){return m.nodeName(a,"input")?void(a.defaultValue=b):mc&&mc.set(a,b,c)}}),qc||(mc={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},oc.id=oc.name=oc.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},m.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:mc.set},m.attrHooks.contenteditable={set:function(a,b,c){mc.set(a,""===b?!1:b,c)}},m.each(["width","height"],function(a,b){m.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),k.style||(m.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var sc=/^(?:input|select|textarea|button|object)$/i,tc=/^(?:a|area)$/i;m.fn.extend({prop:function(a,b){return V(this,m.prop,a,b,arguments.length>1)},removeProp:function(a){return a=m.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),m.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!m.isXMLDoc(a),f&&(b=m.propFix[b]||b,e=m.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=m.find.attr(a,"tabindex");return b?parseInt(b,10):sc.test(a.nodeName)||tc.test(a.nodeName)&&a.href?0:-1}}}}),k.hrefNormalized||m.each(["href","src"],function(a,b){m.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),k.optSelected||(m.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),m.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){m.propFix[this.toLowerCase()]=this}),k.enctype||(m.propFix.enctype="encoding");var uc=/[\t\r\n\f]/g;m.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=m.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?m.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(m.isFunction(a)?function(c){m(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=m(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===K||"boolean"===c)&&(this.className&&m._data(this,"__className__",this.className),this.className=this.className||a===!1?"":m._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(uc," ").indexOf(b)>=0)return!0;return!1}}),m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){m.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),m.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var vc=m.now(),wc=/\?/,xc=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;m.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=m.trim(b+"");return e&&!m.trim(e.replace(xc,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():m.error("Invalid JSON: "+b)},m.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||m.error("Invalid XML: "+b),c};var yc,zc,Ac=/#.*$/,Bc=/([?&])_=[^&]*/,Cc=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Dc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Ec=/^(?:GET|HEAD)$/,Fc=/^\/\//,Gc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Hc={},Ic={},Jc="*/".concat("*");try{zc=location.href}catch(Kc){zc=y.createElement("a"),zc.href="",zc=zc.href}yc=Gc.exec(zc.toLowerCase())||[];function Lc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(m.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Mc(a,b,c,d){var e={},f=a===Ic;function g(h){var i;return e[h]=!0,m.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Nc(a,b){var c,d,e=m.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&m.extend(!0,a,c),a}function Oc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Pc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}m.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:zc,type:"GET",isLocal:Dc.test(yc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Jc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":m.parseJSON,"text xml":m.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Nc(Nc(a,m.ajaxSettings),b):Nc(m.ajaxSettings,a)},ajaxPrefilter:Lc(Hc),ajaxTransport:Lc(Ic),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=m.ajaxSetup({},b),l=k.context||k,n=k.context&&(l.nodeType||l.jquery)?m(l):m.event,o=m.Deferred(),p=m.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Cc.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||zc)+"").replace(Ac,"").replace(Fc,yc[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=m.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(c=Gc.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===yc[1]&&c[2]===yc[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(yc[3]||("http:"===yc[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=m.param(k.data,k.traditional)),Mc(Hc,k,b,v),2===t)return v;h=k.global,h&&0===m.active++&&m.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Ec.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(wc.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Bc.test(e)?e.replace(Bc,"$1_="+vc++):e+(wc.test(e)?"&":"?")+"_="+vc++)),k.ifModified&&(m.lastModified[e]&&v.setRequestHeader("If-Modified-Since",m.lastModified[e]),m.etag[e]&&v.setRequestHeader("If-None-Match",m.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Jc+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Mc(Ic,k,b,v)){v.readyState=1,h&&n.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Oc(k,v,c)),u=Pc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(m.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(m.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&n.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(n.trigger("ajaxComplete",[v,k]),--m.active||m.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return m.get(a,b,c,"json")},getScript:function(a,b){return m.get(a,void 0,b,"script")}}),m.each(["get","post"],function(a,b){m[b]=function(a,c,d,e){return m.isFunction(c)&&(e=e||d,d=c,c=void 0),m.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),m.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){m.fn[b]=function(a){return this.on(b,a)}}),m._evalUrl=function(a){return m.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},m.fn.extend({wrapAll:function(a){if(m.isFunction(a))return this.each(function(b){m(this).wrapAll(a.call(this,b))});if(this[0]){var b=m(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(m.isFunction(a)?function(b){m(this).wrapInner(a.call(this,b))}:function(){var b=m(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=m.isFunction(a);return this.each(function(c){m(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){m.nodeName(this,"body")||m(this).replaceWith(this.childNodes)}).end()}}),m.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!k.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||m.css(a,"display"))},m.expr.filters.visible=function(a){return!m.expr.filters.hidden(a)};var Qc=/%20/g,Rc=/\[\]$/,Sc=/\r?\n/g,Tc=/^(?:submit|button|image|reset|file)$/i,Uc=/^(?:input|select|textarea|keygen)/i;function Vc(a,b,c,d){var e;if(m.isArray(b))m.each(b,function(b,e){c||Rc.test(a)?d(a,e):Vc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==m.type(b))d(a,b);else for(e in b)Vc(a+"["+e+"]",b[e],c,d)}m.param=function(a,b){var c,d=[],e=function(a,b){b=m.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=m.ajaxSettings&&m.ajaxSettings.traditional),m.isArray(a)||a.jquery&&!m.isPlainObject(a))m.each(a,function(){e(this.name,this.value)});else for(c in a)Vc(c,a[c],b,e);return d.join("&").replace(Qc,"+")},m.fn.extend({serialize:function(){return m.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=m.prop(this,"elements");return a?m.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!m(this).is(":disabled")&&Uc.test(this.nodeName)&&!Tc.test(a)&&(this.checked||!W.test(a))}).map(function(a,b){var c=m(this).val();return null==c?null:m.isArray(c)?m.map(c,function(a){return{name:b.name,value:a.replace(Sc,"\r\n")}}):{name:b.name,value:c.replace(Sc,"\r\n")}}).get()}}),m.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&Zc()||$c()}:Zc;var Wc=0,Xc={},Yc=m.ajaxSettings.xhr();a.ActiveXObject&&m(a).on("unload",function(){for(var a in Xc)Xc[a](void 0,!0)}),k.cors=!!Yc&&"withCredentials"in Yc,Yc=k.ajax=!!Yc,Yc&&m.ajaxTransport(function(a){if(!a.crossDomain||k.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Wc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Xc[g],b=void 0,f.onreadystatechange=m.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Xc[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function Zc(){try{return new a.XMLHttpRequest}catch(b){}}function $c(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}m.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return m.globalEval(a),a}}}),m.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),m.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=y.head||m("head")[0]||y.documentElement;return{send:function(d,e){b=y.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var _c=[],ad=/(=)\?(?=&|$)|\?\?/;m.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=_c.pop()||m.expando+"_"+vc++;return this[a]=!0,a}}),m.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(ad.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&ad.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=m.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(ad,"$1"+e):b.jsonp!==!1&&(b.url+=(wc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||m.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,_c.push(e)),g&&m.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),m.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||y;var d=u.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=m.buildFragment([a],b,e),e&&e.length&&m(e).remove(),m.merge([],d.childNodes))};var bd=m.fn.load;m.fn.load=function(a,b,c){if("string"!=typeof a&&bd)return bd.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=m.trim(a.slice(h,a.length)),a=a.slice(0,h)),m.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&m.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?m("<div>").append(m.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},m.expr.filters.animated=function(a){return m.grep(m.timers,function(b){return a===b.elem}).length};var cd=a.document.documentElement;function dd(a){return m.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}m.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=m.css(a,"position"),l=m(a),n={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=m.css(a,"top"),i=m.css(a,"left"),j=("absolute"===k||"fixed"===k)&&m.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),m.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(n.top=b.top-h.top+g),null!=b.left&&(n.left=b.left-h.left+e),"using"in b?b.using.call(a,n):l.css(n)}},m.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){m.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,m.contains(b,e)?(typeof e.getBoundingClientRect!==K&&(d=e.getBoundingClientRect()),c=dd(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===m.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),m.nodeName(a[0],"html")||(c=a.offset()),c.top+=m.css(a[0],"borderTopWidth",!0),c.left+=m.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-m.css(d,"marginTop",!0),left:b.left-c.left-m.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||cd;while(a&&!m.nodeName(a,"html")&&"static"===m.css(a,"position"))a=a.offsetParent;return a||cd})}}),m.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);m.fn[a]=function(d){return V(this,function(a,d,e){var f=dd(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?m(f).scrollLeft():e,c?e:m(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),m.each(["top","left"],function(a,b){m.cssHooks[b]=Lb(k.pixelPosition,function(a,c){return c?(c=Jb(a,b),Hb.test(c)?m(a).position()[b]+"px":c):void 0})}),m.each({Height:"height",Width:"width"},function(a,b){m.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){m.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return V(this,function(b,c,d){var e;return m.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?m.css(b,c,g):m.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),m.fn.size=function(){return this.length},m.fn.andSelf=m.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return m});var ed=a.jQuery,fd=a.$;return m.noConflict=function(b){return a.$===m&&(a.$=fd),b&&a.jQuery===m&&(a.jQuery=ed),m},typeof b===K&&(a.jQuery=a.$=m),m});
;/*
 Copyright (C) Federico Zivolo 2019
 Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 */(function(e,t){'object'==typeof exports&&'undefined'!=typeof module?module.exports=t():'function'==typeof define&&define.amd?define(t):e.Popper=t()})(this,function(){'use strict';function e(e){return e&&'[object Function]'==={}.toString.call(e)}function t(e,t){if(1!==e.nodeType)return[];var o=e.ownerDocument.defaultView,n=o.getComputedStyle(e,null);return t?n[t]:n}function o(e){return'HTML'===e.nodeName?e:e.parentNode||e.host}function n(e){if(!e)return document.body;switch(e.nodeName){case'HTML':case'BODY':return e.ownerDocument.body;case'#document':return e.body;}var i=t(e),r=i.overflow,p=i.overflowX,s=i.overflowY;return /(auto|scroll|overlay)/.test(r+s+p)?e:n(o(e))}function r(e){return 11===e?pe:10===e?se:pe||se}function p(e){if(!e)return document.documentElement;for(var o=r(10)?document.body:null,n=e.offsetParent||null;n===o&&e.nextElementSibling;)n=(e=e.nextElementSibling).offsetParent;var i=n&&n.nodeName;return i&&'BODY'!==i&&'HTML'!==i?-1!==['TH','TD','TABLE'].indexOf(n.nodeName)&&'static'===t(n,'position')?p(n):n:e?e.ownerDocument.documentElement:document.documentElement}function s(e){var t=e.nodeName;return'BODY'!==t&&('HTML'===t||p(e.firstElementChild)===e)}function d(e){return null===e.parentNode?e:d(e.parentNode)}function a(e,t){if(!e||!e.nodeType||!t||!t.nodeType)return document.documentElement;var o=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,n=o?e:t,i=o?t:e,r=document.createRange();r.setStart(n,0),r.setEnd(i,0);var l=r.commonAncestorContainer;if(e!==l&&t!==l||n.contains(i))return s(l)?l:p(l);var f=d(e);return f.host?a(f.host,t):a(e,d(t).host)}function l(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:'top',o='top'===t?'scrollTop':'scrollLeft',n=e.nodeName;if('BODY'===n||'HTML'===n){var i=e.ownerDocument.documentElement,r=e.ownerDocument.scrollingElement||i;return r[o]}return e[o]}function f(e,t){var o=2<arguments.length&&void 0!==arguments[2]&&arguments[2],n=l(t,'top'),i=l(t,'left'),r=o?-1:1;return e.top+=n*r,e.bottom+=n*r,e.left+=i*r,e.right+=i*r,e}function m(e,t){var o='x'===t?'Left':'Top',n='Left'==o?'Right':'Bottom';return parseFloat(e['border'+o+'Width'],10)+parseFloat(e['border'+n+'Width'],10)}function h(e,t,o,n){return ee(t['offset'+e],t['scroll'+e],o['client'+e],o['offset'+e],o['scroll'+e],r(10)?parseInt(o['offset'+e])+parseInt(n['margin'+('Height'===e?'Top':'Left')])+parseInt(n['margin'+('Height'===e?'Bottom':'Right')]):0)}function c(e){var t=e.body,o=e.documentElement,n=r(10)&&getComputedStyle(o);return{height:h('Height',t,o,n),width:h('Width',t,o,n)}}function g(e){return fe({},e,{right:e.left+e.width,bottom:e.top+e.height})}function u(e){var o={};try{if(r(10)){o=e.getBoundingClientRect();var n=l(e,'top'),i=l(e,'left');o.top+=n,o.left+=i,o.bottom+=n,o.right+=i}else o=e.getBoundingClientRect()}catch(t){}var p={left:o.left,top:o.top,width:o.right-o.left,height:o.bottom-o.top},s='HTML'===e.nodeName?c(e.ownerDocument):{},d=s.width||e.clientWidth||p.right-p.left,a=s.height||e.clientHeight||p.bottom-p.top,f=e.offsetWidth-d,h=e.offsetHeight-a;if(f||h){var u=t(e);f-=m(u,'x'),h-=m(u,'y'),p.width-=f,p.height-=h}return g(p)}function b(e,o){var i=2<arguments.length&&void 0!==arguments[2]&&arguments[2],p=r(10),s='HTML'===o.nodeName,d=u(e),a=u(o),l=n(e),m=t(o),h=parseFloat(m.borderTopWidth,10),c=parseFloat(m.borderLeftWidth,10);i&&s&&(a.top=ee(a.top,0),a.left=ee(a.left,0));var b=g({top:d.top-a.top-h,left:d.left-a.left-c,width:d.width,height:d.height});if(b.marginTop=0,b.marginLeft=0,!p&&s){var w=parseFloat(m.marginTop,10),y=parseFloat(m.marginLeft,10);b.top-=h-w,b.bottom-=h-w,b.left-=c-y,b.right-=c-y,b.marginTop=w,b.marginLeft=y}return(p&&!i?o.contains(l):o===l&&'BODY'!==l.nodeName)&&(b=f(b,o)),b}function w(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],o=e.ownerDocument.documentElement,n=b(e,o),i=ee(o.clientWidth,window.innerWidth||0),r=ee(o.clientHeight,window.innerHeight||0),p=t?0:l(o),s=t?0:l(o,'left'),d={top:p-n.top+n.marginTop,left:s-n.left+n.marginLeft,width:i,height:r};return g(d)}function y(e){var n=e.nodeName;if('BODY'===n||'HTML'===n)return!1;if('fixed'===t(e,'position'))return!0;var i=o(e);return!!i&&y(i)}function E(e){if(!e||!e.parentElement||r())return document.documentElement;for(var o=e.parentElement;o&&'none'===t(o,'transform');)o=o.parentElement;return o||document.documentElement}function v(e,t,i,r){var p=4<arguments.length&&void 0!==arguments[4]&&arguments[4],s={top:0,left:0},d=p?E(e):a(e,t);if('viewport'===r)s=w(d,p);else{var l;'scrollParent'===r?(l=n(o(t)),'BODY'===l.nodeName&&(l=e.ownerDocument.documentElement)):'window'===r?l=e.ownerDocument.documentElement:l=r;var f=b(l,d,p);if('HTML'===l.nodeName&&!y(d)){var m=c(e.ownerDocument),h=m.height,g=m.width;s.top+=f.top-f.marginTop,s.bottom=h+f.top,s.left+=f.left-f.marginLeft,s.right=g+f.left}else s=f}i=i||0;var u='number'==typeof i;return s.left+=u?i:i.left||0,s.top+=u?i:i.top||0,s.right-=u?i:i.right||0,s.bottom-=u?i:i.bottom||0,s}function x(e){var t=e.width,o=e.height;return t*o}function O(e,t,o,n,i){var r=5<arguments.length&&void 0!==arguments[5]?arguments[5]:0;if(-1===e.indexOf('auto'))return e;var p=v(o,n,r,i),s={top:{width:p.width,height:t.top-p.top},right:{width:p.right-t.right,height:p.height},bottom:{width:p.width,height:p.bottom-t.bottom},left:{width:t.left-p.left,height:p.height}},d=Object.keys(s).map(function(e){return fe({key:e},s[e],{area:x(s[e])})}).sort(function(e,t){return t.area-e.area}),a=d.filter(function(e){var t=e.width,n=e.height;return t>=o.clientWidth&&n>=o.clientHeight}),l=0<a.length?a[0].key:d[0].key,f=e.split('-')[1];return l+(f?'-'+f:'')}function L(e,t,o){var n=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null,i=n?E(t):a(t,o);return b(o,i,n)}function S(e){var t=e.ownerDocument.defaultView,o=t.getComputedStyle(e),n=parseFloat(o.marginTop||0)+parseFloat(o.marginBottom||0),i=parseFloat(o.marginLeft||0)+parseFloat(o.marginRight||0),r={width:e.offsetWidth+i,height:e.offsetHeight+n};return r}function T(e){var t={left:'right',right:'left',bottom:'top',top:'bottom'};return e.replace(/left|right|bottom|top/g,function(e){return t[e]})}function D(e,t,o){o=o.split('-')[0];var n=S(e),i={width:n.width,height:n.height},r=-1!==['right','left'].indexOf(o),p=r?'top':'left',s=r?'left':'top',d=r?'height':'width',a=r?'width':'height';return i[p]=t[p]+t[d]/2-n[d]/2,i[s]=o===s?t[s]-n[a]:t[T(s)],i}function C(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function N(e,t,o){if(Array.prototype.findIndex)return e.findIndex(function(e){return e[t]===o});var n=C(e,function(e){return e[t]===o});return e.indexOf(n)}function P(t,o,n){var i=void 0===n?t:t.slice(0,N(t,'name',n));return i.forEach(function(t){t['function']&&console.warn('`modifier.function` is deprecated, use `modifier.fn`!');var n=t['function']||t.fn;t.enabled&&e(n)&&(o.offsets.popper=g(o.offsets.popper),o.offsets.reference=g(o.offsets.reference),o=n(o,t))}),o}function k(){if(!this.state.isDestroyed){var e={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};e.offsets.reference=L(this.state,this.popper,this.reference,this.options.positionFixed),e.placement=O(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),e.originalPlacement=e.placement,e.positionFixed=this.options.positionFixed,e.offsets.popper=D(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position=this.options.positionFixed?'fixed':'absolute',e=P(this.modifiers,e),this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}}function W(e,t){return e.some(function(e){var o=e.name,n=e.enabled;return n&&o===t})}function H(e){for(var t=[!1,'ms','Webkit','Moz','O'],o=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<t.length;n++){var i=t[n],r=i?''+i+o:e;if('undefined'!=typeof document.body.style[r])return r}return null}function B(){return this.state.isDestroyed=!0,W(this.modifiers,'applyStyle')&&(this.popper.removeAttribute('x-placement'),this.popper.style.position='',this.popper.style.top='',this.popper.style.left='',this.popper.style.right='',this.popper.style.bottom='',this.popper.style.willChange='',this.popper.style[H('transform')]=''),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function A(e){var t=e.ownerDocument;return t?t.defaultView:window}function M(e,t,o,i){var r='BODY'===e.nodeName,p=r?e.ownerDocument.defaultView:e;p.addEventListener(t,o,{passive:!0}),r||M(n(p.parentNode),t,o,i),i.push(p)}function F(e,t,o,i){o.updateBound=i,A(e).addEventListener('resize',o.updateBound,{passive:!0});var r=n(e);return M(r,'scroll',o.updateBound,o.scrollParents),o.scrollElement=r,o.eventsEnabled=!0,o}function I(){this.state.eventsEnabled||(this.state=F(this.reference,this.options,this.state,this.scheduleUpdate))}function R(e,t){return A(e).removeEventListener('resize',t.updateBound),t.scrollParents.forEach(function(e){e.removeEventListener('scroll',t.updateBound)}),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t}function U(){this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=R(this.reference,this.state))}function Y(e){return''!==e&&!isNaN(parseFloat(e))&&isFinite(e)}function j(e,t){Object.keys(t).forEach(function(o){var n='';-1!==['width','height','top','right','bottom','left'].indexOf(o)&&Y(t[o])&&(n='px'),e.style[o]=t[o]+n})}function V(e,t){Object.keys(t).forEach(function(o){var n=t[o];!1===n?e.removeAttribute(o):e.setAttribute(o,t[o])})}function q(e,t){var o=e.offsets,n=o.popper,i=o.reference,r=$,p=function(e){return e},s=r(i.width),d=r(n.width),a=-1!==['left','right'].indexOf(e.placement),l=-1!==e.placement.indexOf('-'),f=t?a||l||s%2==d%2?r:Z:p,m=t?r:p;return{left:f(1==s%2&&1==d%2&&!l&&t?n.left-1:n.left),top:m(n.top),bottom:m(n.bottom),right:f(n.right)}}function K(e,t,o){var n=C(e,function(e){var o=e.name;return o===t}),i=!!n&&e.some(function(e){return e.name===o&&e.enabled&&e.order<n.order});if(!i){var r='`'+t+'`';console.warn('`'+o+'`'+' modifier is required by '+r+' modifier in order to work, be sure to include it before '+r+'!')}return i}function z(e){return'end'===e?'start':'start'===e?'end':e}function G(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],o=ce.indexOf(e),n=ce.slice(o+1).concat(ce.slice(0,o));return t?n.reverse():n}function _(e,t,o,n){var i=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),r=+i[1],p=i[2];if(!r)return e;if(0===p.indexOf('%')){var s;switch(p){case'%p':s=o;break;case'%':case'%r':default:s=n;}var d=g(s);return d[t]/100*r}if('vh'===p||'vw'===p){var a;return a='vh'===p?ee(document.documentElement.clientHeight,window.innerHeight||0):ee(document.documentElement.clientWidth,window.innerWidth||0),a/100*r}return r}function X(e,t,o,n){var i=[0,0],r=-1!==['right','left'].indexOf(n),p=e.split(/(\+|\-)/).map(function(e){return e.trim()}),s=p.indexOf(C(p,function(e){return-1!==e.search(/,|\s/)}));p[s]&&-1===p[s].indexOf(',')&&console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');var d=/\s*,\s*|\s+/,a=-1===s?[p]:[p.slice(0,s).concat([p[s].split(d)[0]]),[p[s].split(d)[1]].concat(p.slice(s+1))];return a=a.map(function(e,n){var i=(1===n?!r:r)?'height':'width',p=!1;return e.reduce(function(e,t){return''===e[e.length-1]&&-1!==['+','-'].indexOf(t)?(e[e.length-1]=t,p=!0,e):p?(e[e.length-1]+=t,p=!1,e):e.concat(t)},[]).map(function(e){return _(e,i,t,o)})}),a.forEach(function(e,t){e.forEach(function(o,n){Y(o)&&(i[t]+=o*('-'===e[n-1]?-1:1))})}),i}function J(e,t){var o,n=t.offset,i=e.placement,r=e.offsets,p=r.popper,s=r.reference,d=i.split('-')[0];return o=Y(+n)?[+n,0]:X(n,p,s,d),'left'===d?(p.top+=o[0],p.left-=o[1]):'right'===d?(p.top+=o[0],p.left+=o[1]):'top'===d?(p.left+=o[0],p.top-=o[1]):'bottom'===d&&(p.left+=o[0],p.top+=o[1]),e.popper=p,e}for(var Q=Math.min,Z=Math.floor,$=Math.round,ee=Math.max,te='undefined'!=typeof window&&'undefined'!=typeof document,oe=['Edge','Trident','Firefox'],ne=0,ie=0;ie<oe.length;ie+=1)if(te&&0<=navigator.userAgent.indexOf(oe[ie])){ne=1;break}var i=te&&window.Promise,re=i?function(e){var t=!1;return function(){t||(t=!0,window.Promise.resolve().then(function(){t=!1,e()}))}}:function(e){var t=!1;return function(){t||(t=!0,setTimeout(function(){t=!1,e()},ne))}},pe=te&&!!(window.MSInputMethodContext&&document.documentMode),se=te&&/MSIE 10/.test(navigator.userAgent),de=function(e,t){if(!(e instanceof t))throw new TypeError('Cannot call a class as a function')},ae=function(){function e(e,t){for(var o,n=0;n<t.length;n++)o=t[n],o.enumerable=o.enumerable||!1,o.configurable=!0,'value'in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),le=function(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e},fe=Object.assign||function(e){for(var t,o=1;o<arguments.length;o++)for(var n in t=arguments[o],t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},me=te&&/Firefox/i.test(navigator.userAgent),he=['auto-start','auto','auto-end','top-start','top','top-end','right-start','right','right-end','bottom-end','bottom','bottom-start','left-end','left','left-start'],ce=he.slice(3),ge={FLIP:'flip',CLOCKWISE:'clockwise',COUNTERCLOCKWISE:'counterclockwise'},ue=function(){function t(o,n){var i=this,r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};de(this,t),this.scheduleUpdate=function(){return requestAnimationFrame(i.update)},this.update=re(this.update.bind(this)),this.options=fe({},t.Defaults,r),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=o&&o.jquery?o[0]:o,this.popper=n&&n.jquery?n[0]:n,this.options.modifiers={},Object.keys(fe({},t.Defaults.modifiers,r.modifiers)).forEach(function(e){i.options.modifiers[e]=fe({},t.Defaults.modifiers[e]||{},r.modifiers?r.modifiers[e]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(e){return fe({name:e},i.options.modifiers[e])}).sort(function(e,t){return e.order-t.order}),this.modifiers.forEach(function(t){t.enabled&&e(t.onLoad)&&t.onLoad(i.reference,i.popper,i.options,t,i.state)}),this.update();var p=this.options.eventsEnabled;p&&this.enableEventListeners(),this.state.eventsEnabled=p}return ae(t,[{key:'update',value:function(){return k.call(this)}},{key:'destroy',value:function(){return B.call(this)}},{key:'enableEventListeners',value:function(){return I.call(this)}},{key:'disableEventListeners',value:function(){return U.call(this)}}]),t}();return ue.Utils=('undefined'==typeof window?global:window).PopperUtils,ue.placements=he,ue.Defaults={placement:'bottom',positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(e){var t=e.placement,o=t.split('-')[0],n=t.split('-')[1];if(n){var i=e.offsets,r=i.reference,p=i.popper,s=-1!==['bottom','top'].indexOf(o),d=s?'left':'top',a=s?'width':'height',l={start:le({},d,r[d]),end:le({},d,r[d]+r[a]-p[a])};e.offsets.popper=fe({},p,l[n])}return e}},offset:{order:200,enabled:!0,fn:J,offset:0},preventOverflow:{order:300,enabled:!0,fn:function(e,t){var o=t.boundariesElement||p(e.instance.popper);e.instance.reference===o&&(o=p(o));var n=H('transform'),i=e.instance.popper.style,r=i.top,s=i.left,d=i[n];i.top='',i.left='',i[n]='';var a=v(e.instance.popper,e.instance.reference,t.padding,o,e.positionFixed);i.top=r,i.left=s,i[n]=d,t.boundaries=a;var l=t.priority,f=e.offsets.popper,m={primary:function(e){var o=f[e];return f[e]<a[e]&&!t.escapeWithReference&&(o=ee(f[e],a[e])),le({},e,o)},secondary:function(e){var o='right'===e?'left':'top',n=f[o];return f[e]>a[e]&&!t.escapeWithReference&&(n=Q(f[o],a[e]-('right'===e?f.width:f.height))),le({},o,n)}};return l.forEach(function(e){var t=-1===['left','top'].indexOf(e)?'secondary':'primary';f=fe({},f,m[t](e))}),e.offsets.popper=f,e},priority:['left','right','top','bottom'],padding:5,boundariesElement:'scrollParent'},keepTogether:{order:400,enabled:!0,fn:function(e){var t=e.offsets,o=t.popper,n=t.reference,i=e.placement.split('-')[0],r=Z,p=-1!==['top','bottom'].indexOf(i),s=p?'right':'bottom',d=p?'left':'top',a=p?'width':'height';return o[s]<r(n[d])&&(e.offsets.popper[d]=r(n[d])-o[a]),o[d]>r(n[s])&&(e.offsets.popper[d]=r(n[s])),e}},arrow:{order:500,enabled:!0,fn:function(e,o){var n;if(!K(e.instance.modifiers,'arrow','keepTogether'))return e;var i=o.element;if('string'==typeof i){if(i=e.instance.popper.querySelector(i),!i)return e;}else if(!e.instance.popper.contains(i))return console.warn('WARNING: `arrow.element` must be child of its popper element!'),e;var r=e.placement.split('-')[0],p=e.offsets,s=p.popper,d=p.reference,a=-1!==['left','right'].indexOf(r),l=a?'height':'width',f=a?'Top':'Left',m=f.toLowerCase(),h=a?'left':'top',c=a?'bottom':'right',u=S(i)[l];d[c]-u<s[m]&&(e.offsets.popper[m]-=s[m]-(d[c]-u)),d[m]+u>s[c]&&(e.offsets.popper[m]+=d[m]+u-s[c]),e.offsets.popper=g(e.offsets.popper);var b=d[m]+d[l]/2-u/2,w=t(e.instance.popper),y=parseFloat(w['margin'+f],10),E=parseFloat(w['border'+f+'Width'],10),v=b-e.offsets.popper[m]-y-E;return v=ee(Q(s[l]-u,v),0),e.arrowElement=i,e.offsets.arrow=(n={},le(n,m,$(v)),le(n,h,''),n),e},element:'[x-arrow]'},flip:{order:600,enabled:!0,fn:function(e,t){if(W(e.instance.modifiers,'inner'))return e;if(e.flipped&&e.placement===e.originalPlacement)return e;var o=v(e.instance.popper,e.instance.reference,t.padding,t.boundariesElement,e.positionFixed),n=e.placement.split('-')[0],i=T(n),r=e.placement.split('-')[1]||'',p=[];switch(t.behavior){case ge.FLIP:p=[n,i];break;case ge.CLOCKWISE:p=G(n);break;case ge.COUNTERCLOCKWISE:p=G(n,!0);break;default:p=t.behavior;}return p.forEach(function(s,d){if(n!==s||p.length===d+1)return e;n=e.placement.split('-')[0],i=T(n);var a=e.offsets.popper,l=e.offsets.reference,f=Z,m='left'===n&&f(a.right)>f(l.left)||'right'===n&&f(a.left)<f(l.right)||'top'===n&&f(a.bottom)>f(l.top)||'bottom'===n&&f(a.top)<f(l.bottom),h=f(a.left)<f(o.left),c=f(a.right)>f(o.right),g=f(a.top)<f(o.top),u=f(a.bottom)>f(o.bottom),b='left'===n&&h||'right'===n&&c||'top'===n&&g||'bottom'===n&&u,w=-1!==['top','bottom'].indexOf(n),y=!!t.flipVariations&&(w&&'start'===r&&h||w&&'end'===r&&c||!w&&'start'===r&&g||!w&&'end'===r&&u);(m||b||y)&&(e.flipped=!0,(m||b)&&(n=p[d+1]),y&&(r=z(r)),e.placement=n+(r?'-'+r:''),e.offsets.popper=fe({},e.offsets.popper,D(e.instance.popper,e.offsets.reference,e.placement)),e=P(e.instance.modifiers,e,'flip'))}),e},behavior:'flip',padding:5,boundariesElement:'viewport'},inner:{order:700,enabled:!1,fn:function(e){var t=e.placement,o=t.split('-')[0],n=e.offsets,i=n.popper,r=n.reference,p=-1!==['left','right'].indexOf(o),s=-1===['top','left'].indexOf(o);return i[p?'left':'top']=r[o]-(s?i[p?'width':'height']:0),e.placement=T(t),e.offsets.popper=g(i),e}},hide:{order:800,enabled:!0,fn:function(e){if(!K(e.instance.modifiers,'hide','preventOverflow'))return e;var t=e.offsets.reference,o=C(e.instance.modifiers,function(e){return'preventOverflow'===e.name}).boundaries;if(t.bottom<o.top||t.left>o.right||t.top>o.bottom||t.right<o.left){if(!0===e.hide)return e;e.hide=!0,e.attributes['x-out-of-boundaries']=''}else{if(!1===e.hide)return e;e.hide=!1,e.attributes['x-out-of-boundaries']=!1}return e}},computeStyle:{order:850,enabled:!0,fn:function(e,t){var o=t.x,n=t.y,i=e.offsets.popper,r=C(e.instance.modifiers,function(e){return'applyStyle'===e.name}).gpuAcceleration;void 0!==r&&console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');var s,d,a=void 0===r?t.gpuAcceleration:r,l=p(e.instance.popper),f=u(l),m={position:i.position},h=q(e,2>window.devicePixelRatio||!me),c='bottom'===o?'top':'bottom',g='right'===n?'left':'right',b=H('transform');if(d='bottom'==c?'HTML'===l.nodeName?-l.clientHeight+h.bottom:-f.height+h.bottom:h.top,s='right'==g?'HTML'===l.nodeName?-l.clientWidth+h.right:-f.width+h.right:h.left,a&&b)m[b]='translate3d('+s+'px, '+d+'px, 0)',m[c]=0,m[g]=0,m.willChange='transform';else{var w='bottom'==c?-1:1,y='right'==g?-1:1;m[c]=d*w,m[g]=s*y,m.willChange=c+', '+g}var E={"x-placement":e.placement};return e.attributes=fe({},E,e.attributes),e.styles=fe({},m,e.styles),e.arrowStyles=fe({},e.offsets.arrow,e.arrowStyles),e},gpuAcceleration:!0,x:'bottom',y:'right'},applyStyle:{order:900,enabled:!0,fn:function(e){return j(e.instance.popper,e.styles),V(e.instance.popper,e.attributes),e.arrowElement&&Object.keys(e.arrowStyles).length&&j(e.arrowElement,e.arrowStyles),e},onLoad:function(e,t,o,n,i){var r=L(i,t,e,o.positionFixed),p=O(o.placement,r,t,e,o.modifiers.flip.boundariesElement,o.modifiers.flip.padding);return t.setAttribute('x-placement',p),j(t,{position:o.positionFixed?'fixed':'absolute'}),o},gpuAcceleration:void 0}}},ue});
//# sourceMappingURL=popper.min.js.map

;/*!
  * Bootstrap v4.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("jquery"),require("popper.js")):"function"==typeof define&&define.amd?define(["exports","jquery","popper.js"],e):e((t=t||self).bootstrap={},t.jQuery,t.Popper)}(this,function(t,g,u){"use strict";function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function s(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function l(o){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},e=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(r).filter(function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),e.forEach(function(t){var e,n,i;e=o,i=r[n=t],n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i})}return o}g=g&&g.hasOwnProperty("default")?g.default:g,u=u&&u.hasOwnProperty("default")?u.default:u;var e="transitionend";function n(t){var e=this,n=!1;return g(this).one(_.TRANSITION_END,function(){n=!0}),setTimeout(function(){n||_.triggerTransitionEnd(e)},t),this}var _={TRANSITION_END:"bsTransitionEnd",getUID:function(t){for(;t+=~~(1e6*Math.random()),document.getElementById(t););return t},getSelectorFromElement:function(t){var e=t.getAttribute("data-target");if(!e||"#"===e){var n=t.getAttribute("href");e=n&&"#"!==n?n.trim():""}try{return document.querySelector(e)?e:null}catch(t){return null}},getTransitionDurationFromElement:function(t){if(!t)return 0;var e=g(t).css("transition-duration"),n=g(t).css("transition-delay"),i=parseFloat(e),o=parseFloat(n);return i||o?(e=e.split(",")[0],n=n.split(",")[0],1e3*(parseFloat(e)+parseFloat(n))):0},reflow:function(t){return t.offsetHeight},triggerTransitionEnd:function(t){g(t).trigger(e)},supportsTransitionEnd:function(){return Boolean(e)},isElement:function(t){return(t[0]||t).nodeType},typeCheckConfig:function(t,e,n){for(var i in n)if(Object.prototype.hasOwnProperty.call(n,i)){var o=n[i],r=e[i],s=r&&_.isElement(r)?"element":(a=r,{}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());if(!new RegExp(o).test(s))throw new Error(t.toUpperCase()+': Option "'+i+'" provided type "'+s+'" but expected type "'+o+'".')}var a},findShadowRoot:function(t){if(!document.documentElement.attachShadow)return null;if("function"!=typeof t.getRootNode)return t instanceof ShadowRoot?t:t.parentNode?_.findShadowRoot(t.parentNode):null;var e=t.getRootNode();return e instanceof ShadowRoot?e:null}};g.fn.emulateTransitionEnd=n,g.event.special[_.TRANSITION_END]={bindType:e,delegateType:e,handle:function(t){if(g(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}};var o="alert",r="bs.alert",a="."+r,c=g.fn[o],h={CLOSE:"close"+a,CLOSED:"closed"+a,CLICK_DATA_API:"click"+a+".data-api"},f="alert",d="fade",m="show",p=function(){function i(t){this._element=t}var t=i.prototype;return t.close=function(t){var e=this._element;t&&(e=this._getRootElement(t)),this._triggerCloseEvent(e).isDefaultPrevented()||this._removeElement(e)},t.dispose=function(){g.removeData(this._element,r),this._element=null},t._getRootElement=function(t){var e=_.getSelectorFromElement(t),n=!1;return e&&(n=document.querySelector(e)),n||(n=g(t).closest("."+f)[0]),n},t._triggerCloseEvent=function(t){var e=g.Event(h.CLOSE);return g(t).trigger(e),e},t._removeElement=function(e){var n=this;if(g(e).removeClass(m),g(e).hasClass(d)){var t=_.getTransitionDurationFromElement(e);g(e).one(_.TRANSITION_END,function(t){return n._destroyElement(e,t)}).emulateTransitionEnd(t)}else this._destroyElement(e)},t._destroyElement=function(t){g(t).detach().trigger(h.CLOSED).remove()},i._jQueryInterface=function(n){return this.each(function(){var t=g(this),e=t.data(r);e||(e=new i(this),t.data(r,e)),"close"===n&&e[n](this)})},i._handleDismiss=function(e){return function(t){t&&t.preventDefault(),e.close(this)}},s(i,null,[{key:"VERSION",get:function(){return"4.3.1"}}]),i}();g(document).on(h.CLICK_DATA_API,'[data-dismiss="alert"]',p._handleDismiss(new p)),g.fn[o]=p._jQueryInterface,g.fn[o].Constructor=p,g.fn[o].noConflict=function(){return g.fn[o]=c,p._jQueryInterface};var v="button",y="bs.button",E="."+y,C=".data-api",T=g.fn[v],S="active",b="btn",I="focus",D='[data-toggle^="button"]',w='[data-toggle="buttons"]',A='input:not([type="hidden"])',N=".active",O=".btn",k={CLICK_DATA_API:"click"+E+C,FOCUS_BLUR_DATA_API:"focus"+E+C+" blur"+E+C},P=function(){function n(t){this._element=t}var t=n.prototype;return t.toggle=function(){var t=!0,e=!0,n=g(this._element).closest(w)[0];if(n){var i=this._element.querySelector(A);if(i){if("radio"===i.type)if(i.checked&&this._element.classList.contains(S))t=!1;else{var o=n.querySelector(N);o&&g(o).removeClass(S)}if(t){if(i.hasAttribute("disabled")||n.hasAttribute("disabled")||i.classList.contains("disabled")||n.classList.contains("disabled"))return;i.checked=!this._element.classList.contains(S),g(i).trigger("change")}i.focus(),e=!1}}e&&this._element.setAttribute("aria-pressed",!this._element.classList.contains(S)),t&&g(this._element).toggleClass(S)},t.dispose=function(){g.removeData(this._element,y),this._element=null},n._jQueryInterface=function(e){return this.each(function(){var t=g(this).data(y);t||(t=new n(this),g(this).data(y,t)),"toggle"===e&&t[e]()})},s(n,null,[{key:"VERSION",get:function(){return"4.3.1"}}]),n}();g(document).on(k.CLICK_DATA_API,D,function(t){t.preventDefault();var e=t.target;g(e).hasClass(b)||(e=g(e).closest(O)),P._jQueryInterface.call(g(e),"toggle")}).on(k.FOCUS_BLUR_DATA_API,D,function(t){var e=g(t.target).closest(O)[0];g(e).toggleClass(I,/^focus(in)?$/.test(t.type))}),g.fn[v]=P._jQueryInterface,g.fn[v].Constructor=P,g.fn[v].noConflict=function(){return g.fn[v]=T,P._jQueryInterface};var L="carousel",j="bs.carousel",H="."+j,R=".data-api",x=g.fn[L],F={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,touch:!0},U={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"},W="next",q="prev",M="left",K="right",Q={SLIDE:"slide"+H,SLID:"slid"+H,KEYDOWN:"keydown"+H,MOUSEENTER:"mouseenter"+H,MOUSELEAVE:"mouseleave"+H,TOUCHSTART:"touchstart"+H,TOUCHMOVE:"touchmove"+H,TOUCHEND:"touchend"+H,POINTERDOWN:"pointerdown"+H,POINTERUP:"pointerup"+H,DRAG_START:"dragstart"+H,LOAD_DATA_API:"load"+H+R,CLICK_DATA_API:"click"+H+R},B="carousel",V="active",Y="slide",z="carousel-item-right",X="carousel-item-left",$="carousel-item-next",G="carousel-item-prev",J="pointer-event",Z=".active",tt=".active.carousel-item",et=".carousel-item",nt=".carousel-item img",it=".carousel-item-next, .carousel-item-prev",ot=".carousel-indicators",rt="[data-slide], [data-slide-to]",st='[data-ride="carousel"]',at={TOUCH:"touch",PEN:"pen"},lt=function(){function r(t,e){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this.touchStartX=0,this.touchDeltaX=0,this._config=this._getConfig(e),this._element=t,this._indicatorsElement=this._element.querySelector(ot),this._touchSupported="ontouchstart"in document.documentElement||0<navigator.maxTouchPoints,this._pointerEvent=Boolean(window.PointerEvent||window.MSPointerEvent),this._addEventListeners()}var t=r.prototype;return t.next=function(){this._isSliding||this._slide(W)},t.nextWhenVisible=function(){!document.hidden&&g(this._element).is(":visible")&&"hidden"!==g(this._element).css("visibility")&&this.next()},t.prev=function(){this._isSliding||this._slide(q)},t.pause=function(t){t||(this._isPaused=!0),this._element.querySelector(it)&&(_.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},t.cycle=function(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},t.to=function(t){var e=this;this._activeElement=this._element.querySelector(tt);var n=this._getItemIndex(this._activeElement);if(!(t>this._items.length-1||t<0))if(this._isSliding)g(this._element).one(Q.SLID,function(){return e.to(t)});else{if(n===t)return this.pause(),void this.cycle();var i=n<t?W:q;this._slide(i,this._items[t])}},t.dispose=function(){g(this._element).off(H),g.removeData(this._element,j),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},t._getConfig=function(t){return t=l({},F,t),_.typeCheckConfig(L,t,U),t},t._handleSwipe=function(){var t=Math.abs(this.touchDeltaX);if(!(t<=40)){var e=t/this.touchDeltaX;0<e&&this.prev(),e<0&&this.next()}},t._addEventListeners=function(){var e=this;this._config.keyboard&&g(this._element).on(Q.KEYDOWN,function(t){return e._keydown(t)}),"hover"===this._config.pause&&g(this._element).on(Q.MOUSEENTER,function(t){return e.pause(t)}).on(Q.MOUSELEAVE,function(t){return e.cycle(t)}),this._config.touch&&this._addTouchEventListeners()},t._addTouchEventListeners=function(){var n=this;if(this._touchSupported){var e=function(t){n._pointerEvent&&at[t.originalEvent.pointerType.toUpperCase()]?n.touchStartX=t.originalEvent.clientX:n._pointerEvent||(n.touchStartX=t.originalEvent.touches[0].clientX)},i=function(t){n._pointerEvent&&at[t.originalEvent.pointerType.toUpperCase()]&&(n.touchDeltaX=t.originalEvent.clientX-n.touchStartX),n._handleSwipe(),"hover"===n._config.pause&&(n.pause(),n.touchTimeout&&clearTimeout(n.touchTimeout),n.touchTimeout=setTimeout(function(t){return n.cycle(t)},500+n._config.interval))};g(this._element.querySelectorAll(nt)).on(Q.DRAG_START,function(t){return t.preventDefault()}),this._pointerEvent?(g(this._element).on(Q.POINTERDOWN,function(t){return e(t)}),g(this._element).on(Q.POINTERUP,function(t){return i(t)}),this._element.classList.add(J)):(g(this._element).on(Q.TOUCHSTART,function(t){return e(t)}),g(this._element).on(Q.TOUCHMOVE,function(t){var e;(e=t).originalEvent.touches&&1<e.originalEvent.touches.length?n.touchDeltaX=0:n.touchDeltaX=e.originalEvent.touches[0].clientX-n.touchStartX}),g(this._element).on(Q.TOUCHEND,function(t){return i(t)}))}},t._keydown=function(t){if(!/input|textarea/i.test(t.target.tagName))switch(t.which){case 37:t.preventDefault(),this.prev();break;case 39:t.preventDefault(),this.next()}},t._getItemIndex=function(t){return this._items=t&&t.parentNode?[].slice.call(t.parentNode.querySelectorAll(et)):[],this._items.indexOf(t)},t._getItemByDirection=function(t,e){var n=t===W,i=t===q,o=this._getItemIndex(e),r=this._items.length-1;if((i&&0===o||n&&o===r)&&!this._config.wrap)return e;var s=(o+(t===q?-1:1))%this._items.length;return-1===s?this._items[this._items.length-1]:this._items[s]},t._triggerSlideEvent=function(t,e){var n=this._getItemIndex(t),i=this._getItemIndex(this._element.querySelector(tt)),o=g.Event(Q.SLIDE,{relatedTarget:t,direction:e,from:i,to:n});return g(this._element).trigger(o),o},t._setActiveIndicatorElement=function(t){if(this._indicatorsElement){var e=[].slice.call(this._indicatorsElement.querySelectorAll(Z));g(e).removeClass(V);var n=this._indicatorsElement.children[this._getItemIndex(t)];n&&g(n).addClass(V)}},t._slide=function(t,e){var n,i,o,r=this,s=this._element.querySelector(tt),a=this._getItemIndex(s),l=e||s&&this._getItemByDirection(t,s),c=this._getItemIndex(l),h=Boolean(this._interval);if(o=t===W?(n=X,i=$,M):(n=z,i=G,K),l&&g(l).hasClass(V))this._isSliding=!1;else if(!this._triggerSlideEvent(l,o).isDefaultPrevented()&&s&&l){this._isSliding=!0,h&&this.pause(),this._setActiveIndicatorElement(l);var u=g.Event(Q.SLID,{relatedTarget:l,direction:o,from:a,to:c});if(g(this._element).hasClass(Y)){g(l).addClass(i),_.reflow(l),g(s).addClass(n),g(l).addClass(n);var f=parseInt(l.getAttribute("data-interval"),10);this._config.interval=f?(this._config.defaultInterval=this._config.defaultInterval||this._config.interval,f):this._config.defaultInterval||this._config.interval;var d=_.getTransitionDurationFromElement(s);g(s).one(_.TRANSITION_END,function(){g(l).removeClass(n+" "+i).addClass(V),g(s).removeClass(V+" "+i+" "+n),r._isSliding=!1,setTimeout(function(){return g(r._element).trigger(u)},0)}).emulateTransitionEnd(d)}else g(s).removeClass(V),g(l).addClass(V),this._isSliding=!1,g(this._element).trigger(u);h&&this.cycle()}},r._jQueryInterface=function(i){return this.each(function(){var t=g(this).data(j),e=l({},F,g(this).data());"object"==typeof i&&(e=l({},e,i));var n="string"==typeof i?i:e.slide;if(t||(t=new r(this,e),g(this).data(j,t)),"number"==typeof i)t.to(i);else if("string"==typeof n){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}else e.interval&&e.ride&&(t.pause(),t.cycle())})},r._dataApiClickHandler=function(t){var e=_.getSelectorFromElement(this);if(e){var n=g(e)[0];if(n&&g(n).hasClass(B)){var i=l({},g(n).data(),g(this).data()),o=this.getAttribute("data-slide-to");o&&(i.interval=!1),r._jQueryInterface.call(g(n),i),o&&g(n).data(j).to(o),t.preventDefault()}}},s(r,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return F}}]),r}();g(document).on(Q.CLICK_DATA_API,rt,lt._dataApiClickHandler),g(window).on(Q.LOAD_DATA_API,function(){for(var t=[].slice.call(document.querySelectorAll(st)),e=0,n=t.length;e<n;e++){var i=g(t[e]);lt._jQueryInterface.call(i,i.data())}}),g.fn[L]=lt._jQueryInterface,g.fn[L].Constructor=lt,g.fn[L].noConflict=function(){return g.fn[L]=x,lt._jQueryInterface};var ct="collapse",ht="bs.collapse",ut="."+ht,ft=g.fn[ct],dt={toggle:!0,parent:""},gt={toggle:"boolean",parent:"(string|element)"},_t={SHOW:"show"+ut,SHOWN:"shown"+ut,HIDE:"hide"+ut,HIDDEN:"hidden"+ut,CLICK_DATA_API:"click"+ut+".data-api"},mt="show",pt="collapse",vt="collapsing",yt="collapsed",Et="width",Ct="height",Tt=".show, .collapsing",St='[data-toggle="collapse"]',bt=function(){function a(e,t){this._isTransitioning=!1,this._element=e,this._config=this._getConfig(t),this._triggerArray=[].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#'+e.id+'"],[data-toggle="collapse"][data-target="#'+e.id+'"]'));for(var n=[].slice.call(document.querySelectorAll(St)),i=0,o=n.length;i<o;i++){var r=n[i],s=_.getSelectorFromElement(r),a=[].slice.call(document.querySelectorAll(s)).filter(function(t){return t===e});null!==s&&0<a.length&&(this._selector=s,this._triggerArray.push(r))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var t=a.prototype;return t.toggle=function(){g(this._element).hasClass(mt)?this.hide():this.show()},t.show=function(){var t,e,n=this;if(!this._isTransitioning&&!g(this._element).hasClass(mt)&&(this._parent&&0===(t=[].slice.call(this._parent.querySelectorAll(Tt)).filter(function(t){return"string"==typeof n._config.parent?t.getAttribute("data-parent")===n._config.parent:t.classList.contains(pt)})).length&&(t=null),!(t&&(e=g(t).not(this._selector).data(ht))&&e._isTransitioning))){var i=g.Event(_t.SHOW);if(g(this._element).trigger(i),!i.isDefaultPrevented()){t&&(a._jQueryInterface.call(g(t).not(this._selector),"hide"),e||g(t).data(ht,null));var o=this._getDimension();g(this._element).removeClass(pt).addClass(vt),this._element.style[o]=0,this._triggerArray.length&&g(this._triggerArray).removeClass(yt).attr("aria-expanded",!0),this.setTransitioning(!0);var r="scroll"+(o[0].toUpperCase()+o.slice(1)),s=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,function(){g(n._element).removeClass(vt).addClass(pt).addClass(mt),n._element.style[o]="",n.setTransitioning(!1),g(n._element).trigger(_t.SHOWN)}).emulateTransitionEnd(s),this._element.style[o]=this._element[r]+"px"}}},t.hide=function(){var t=this;if(!this._isTransitioning&&g(this._element).hasClass(mt)){var e=g.Event(_t.HIDE);if(g(this._element).trigger(e),!e.isDefaultPrevented()){var n=this._getDimension();this._element.style[n]=this._element.getBoundingClientRect()[n]+"px",_.reflow(this._element),g(this._element).addClass(vt).removeClass(pt).removeClass(mt);var i=this._triggerArray.length;if(0<i)for(var o=0;o<i;o++){var r=this._triggerArray[o],s=_.getSelectorFromElement(r);if(null!==s)g([].slice.call(document.querySelectorAll(s))).hasClass(mt)||g(r).addClass(yt).attr("aria-expanded",!1)}this.setTransitioning(!0);this._element.style[n]="";var a=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,function(){t.setTransitioning(!1),g(t._element).removeClass(vt).addClass(pt).trigger(_t.HIDDEN)}).emulateTransitionEnd(a)}}},t.setTransitioning=function(t){this._isTransitioning=t},t.dispose=function(){g.removeData(this._element,ht),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},t._getConfig=function(t){return(t=l({},dt,t)).toggle=Boolean(t.toggle),_.typeCheckConfig(ct,t,gt),t},t._getDimension=function(){return g(this._element).hasClass(Et)?Et:Ct},t._getParent=function(){var t,n=this;_.isElement(this._config.parent)?(t=this._config.parent,"undefined"!=typeof this._config.parent.jquery&&(t=this._config.parent[0])):t=document.querySelector(this._config.parent);var e='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]',i=[].slice.call(t.querySelectorAll(e));return g(i).each(function(t,e){n._addAriaAndCollapsedClass(a._getTargetFromElement(e),[e])}),t},t._addAriaAndCollapsedClass=function(t,e){var n=g(t).hasClass(mt);e.length&&g(e).toggleClass(yt,!n).attr("aria-expanded",n)},a._getTargetFromElement=function(t){var e=_.getSelectorFromElement(t);return e?document.querySelector(e):null},a._jQueryInterface=function(i){return this.each(function(){var t=g(this),e=t.data(ht),n=l({},dt,t.data(),"object"==typeof i&&i?i:{});if(!e&&n.toggle&&/show|hide/.test(i)&&(n.toggle=!1),e||(e=new a(this,n),t.data(ht,e)),"string"==typeof i){if("undefined"==typeof e[i])throw new TypeError('No method named "'+i+'"');e[i]()}})},s(a,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return dt}}]),a}();g(document).on(_t.CLICK_DATA_API,St,function(t){"A"===t.currentTarget.tagName&&t.preventDefault();var n=g(this),e=_.getSelectorFromElement(this),i=[].slice.call(document.querySelectorAll(e));g(i).each(function(){var t=g(this),e=t.data(ht)?"toggle":n.data();bt._jQueryInterface.call(t,e)})}),g.fn[ct]=bt._jQueryInterface,g.fn[ct].Constructor=bt,g.fn[ct].noConflict=function(){return g.fn[ct]=ft,bt._jQueryInterface};var It="dropdown",Dt="bs.dropdown",wt="."+Dt,At=".data-api",Nt=g.fn[It],Ot=new RegExp("38|40|27"),kt={HIDE:"hide"+wt,HIDDEN:"hidden"+wt,SHOW:"show"+wt,SHOWN:"shown"+wt,CLICK:"click"+wt,CLICK_DATA_API:"click"+wt+At,KEYDOWN_DATA_API:"keydown"+wt+At,KEYUP_DATA_API:"keyup"+wt+At},Pt="disabled",Lt="show",jt="dropup",Ht="dropright",Rt="dropleft",xt="dropdown-menu-right",Ft="position-static",Ut='[data-toggle="dropdown"]',Wt=".dropdown form",qt=".dropdown-menu",Mt=".navbar-nav",Kt=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",Qt="top-start",Bt="top-end",Vt="bottom-start",Yt="bottom-end",zt="right-start",Xt="left-start",$t={offset:0,flip:!0,boundary:"scrollParent",reference:"toggle",display:"dynamic"},Gt={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)",reference:"(string|element)",display:"string"},Jt=function(){function c(t,e){this._element=t,this._popper=null,this._config=this._getConfig(e),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}var t=c.prototype;return t.toggle=function(){if(!this._element.disabled&&!g(this._element).hasClass(Pt)){var t=c._getParentFromElement(this._element),e=g(this._menu).hasClass(Lt);if(c._clearMenus(),!e){var n={relatedTarget:this._element},i=g.Event(kt.SHOW,n);if(g(t).trigger(i),!i.isDefaultPrevented()){if(!this._inNavbar){if("undefined"==typeof u)throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");var o=this._element;"parent"===this._config.reference?o=t:_.isElement(this._config.reference)&&(o=this._config.reference,"undefined"!=typeof this._config.reference.jquery&&(o=this._config.reference[0])),"scrollParent"!==this._config.boundary&&g(t).addClass(Ft),this._popper=new u(o,this._menu,this._getPopperConfig())}"ontouchstart"in document.documentElement&&0===g(t).closest(Mt).length&&g(document.body).children().on("mouseover",null,g.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),g(this._menu).toggleClass(Lt),g(t).toggleClass(Lt).trigger(g.Event(kt.SHOWN,n))}}}},t.show=function(){if(!(this._element.disabled||g(this._element).hasClass(Pt)||g(this._menu).hasClass(Lt))){var t={relatedTarget:this._element},e=g.Event(kt.SHOW,t),n=c._getParentFromElement(this._element);g(n).trigger(e),e.isDefaultPrevented()||(g(this._menu).toggleClass(Lt),g(n).toggleClass(Lt).trigger(g.Event(kt.SHOWN,t)))}},t.hide=function(){if(!this._element.disabled&&!g(this._element).hasClass(Pt)&&g(this._menu).hasClass(Lt)){var t={relatedTarget:this._element},e=g.Event(kt.HIDE,t),n=c._getParentFromElement(this._element);g(n).trigger(e),e.isDefaultPrevented()||(g(this._menu).toggleClass(Lt),g(n).toggleClass(Lt).trigger(g.Event(kt.HIDDEN,t)))}},t.dispose=function(){g.removeData(this._element,Dt),g(this._element).off(wt),this._element=null,(this._menu=null)!==this._popper&&(this._popper.destroy(),this._popper=null)},t.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},t._addEventListeners=function(){var e=this;g(this._element).on(kt.CLICK,function(t){t.preventDefault(),t.stopPropagation(),e.toggle()})},t._getConfig=function(t){return t=l({},this.constructor.Default,g(this._element).data(),t),_.typeCheckConfig(It,t,this.constructor.DefaultType),t},t._getMenuElement=function(){if(!this._menu){var t=c._getParentFromElement(this._element);t&&(this._menu=t.querySelector(qt))}return this._menu},t._getPlacement=function(){var t=g(this._element.parentNode),e=Vt;return t.hasClass(jt)?(e=Qt,g(this._menu).hasClass(xt)&&(e=Bt)):t.hasClass(Ht)?e=zt:t.hasClass(Rt)?e=Xt:g(this._menu).hasClass(xt)&&(e=Yt),e},t._detectNavbar=function(){return 0<g(this._element).closest(".navbar").length},t._getOffset=function(){var e=this,t={};return"function"==typeof this._config.offset?t.fn=function(t){return t.offsets=l({},t.offsets,e._config.offset(t.offsets,e._element)||{}),t}:t.offset=this._config.offset,t},t._getPopperConfig=function(){var t={placement:this._getPlacement(),modifiers:{offset:this._getOffset(),flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}};return"static"===this._config.display&&(t.modifiers.applyStyle={enabled:!1}),t},c._jQueryInterface=function(e){return this.each(function(){var t=g(this).data(Dt);if(t||(t=new c(this,"object"==typeof e?e:null),g(this).data(Dt,t)),"string"==typeof e){if("undefined"==typeof t[e])throw new TypeError('No method named "'+e+'"');t[e]()}})},c._clearMenus=function(t){if(!t||3!==t.which&&("keyup"!==t.type||9===t.which))for(var e=[].slice.call(document.querySelectorAll(Ut)),n=0,i=e.length;n<i;n++){var o=c._getParentFromElement(e[n]),r=g(e[n]).data(Dt),s={relatedTarget:e[n]};if(t&&"click"===t.type&&(s.clickEvent=t),r){var a=r._menu;if(g(o).hasClass(Lt)&&!(t&&("click"===t.type&&/input|textarea/i.test(t.target.tagName)||"keyup"===t.type&&9===t.which)&&g.contains(o,t.target))){var l=g.Event(kt.HIDE,s);g(o).trigger(l),l.isDefaultPrevented()||("ontouchstart"in document.documentElement&&g(document.body).children().off("mouseover",null,g.noop),e[n].setAttribute("aria-expanded","false"),g(a).removeClass(Lt),g(o).removeClass(Lt).trigger(g.Event(kt.HIDDEN,s)))}}}},c._getParentFromElement=function(t){var e,n=_.getSelectorFromElement(t);return n&&(e=document.querySelector(n)),e||t.parentNode},c._dataApiKeydownHandler=function(t){if((/input|textarea/i.test(t.target.tagName)?!(32===t.which||27!==t.which&&(40!==t.which&&38!==t.which||g(t.target).closest(qt).length)):Ot.test(t.which))&&(t.preventDefault(),t.stopPropagation(),!this.disabled&&!g(this).hasClass(Pt))){var e=c._getParentFromElement(this),n=g(e).hasClass(Lt);if(n&&(!n||27!==t.which&&32!==t.which)){var i=[].slice.call(e.querySelectorAll(Kt));if(0!==i.length){var o=i.indexOf(t.target);38===t.which&&0<o&&o--,40===t.which&&o<i.length-1&&o++,o<0&&(o=0),i[o].focus()}}else{if(27===t.which){var r=e.querySelector(Ut);g(r).trigger("focus")}g(this).trigger("click")}}},s(c,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return $t}},{key:"DefaultType",get:function(){return Gt}}]),c}();g(document).on(kt.KEYDOWN_DATA_API,Ut,Jt._dataApiKeydownHandler).on(kt.KEYDOWN_DATA_API,qt,Jt._dataApiKeydownHandler).on(kt.CLICK_DATA_API+" "+kt.KEYUP_DATA_API,Jt._clearMenus).on(kt.CLICK_DATA_API,Ut,function(t){t.preventDefault(),t.stopPropagation(),Jt._jQueryInterface.call(g(this),"toggle")}).on(kt.CLICK_DATA_API,Wt,function(t){t.stopPropagation()}),g.fn[It]=Jt._jQueryInterface,g.fn[It].Constructor=Jt,g.fn[It].noConflict=function(){return g.fn[It]=Nt,Jt._jQueryInterface};var Zt="modal",te="bs.modal",ee="."+te,ne=g.fn[Zt],ie={backdrop:!0,keyboard:!0,focus:!0,show:!0},oe={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},re={HIDE:"hide"+ee,HIDDEN:"hidden"+ee,SHOW:"show"+ee,SHOWN:"shown"+ee,FOCUSIN:"focusin"+ee,RESIZE:"resize"+ee,CLICK_DISMISS:"click.dismiss"+ee,KEYDOWN_DISMISS:"keydown.dismiss"+ee,MOUSEUP_DISMISS:"mouseup.dismiss"+ee,MOUSEDOWN_DISMISS:"mousedown.dismiss"+ee,CLICK_DATA_API:"click"+ee+".data-api"},se="modal-dialog-scrollable",ae="modal-scrollbar-measure",le="modal-backdrop",ce="modal-open",he="fade",ue="show",fe=".modal-dialog",de=".modal-body",ge='[data-toggle="modal"]',_e='[data-dismiss="modal"]',me=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",pe=".sticky-top",ve=function(){function o(t,e){this._config=this._getConfig(e),this._element=t,this._dialog=t.querySelector(fe),this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1,this._scrollbarWidth=0}var t=o.prototype;return t.toggle=function(t){return this._isShown?this.hide():this.show(t)},t.show=function(t){var e=this;if(!this._isShown&&!this._isTransitioning){g(this._element).hasClass(he)&&(this._isTransitioning=!0);var n=g.Event(re.SHOW,{relatedTarget:t});g(this._element).trigger(n),this._isShown||n.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),g(this._element).on(re.CLICK_DISMISS,_e,function(t){return e.hide(t)}),g(this._dialog).on(re.MOUSEDOWN_DISMISS,function(){g(e._element).one(re.MOUSEUP_DISMISS,function(t){g(t.target).is(e._element)&&(e._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return e._showElement(t)}))}},t.hide=function(t){var e=this;if(t&&t.preventDefault(),this._isShown&&!this._isTransitioning){var n=g.Event(re.HIDE);if(g(this._element).trigger(n),this._isShown&&!n.isDefaultPrevented()){this._isShown=!1;var i=g(this._element).hasClass(he);if(i&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),g(document).off(re.FOCUSIN),g(this._element).removeClass(ue),g(this._element).off(re.CLICK_DISMISS),g(this._dialog).off(re.MOUSEDOWN_DISMISS),i){var o=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,function(t){return e._hideModal(t)}).emulateTransitionEnd(o)}else this._hideModal()}}},t.dispose=function(){[window,this._element,this._dialog].forEach(function(t){return g(t).off(ee)}),g(document).off(re.FOCUSIN),g.removeData(this._element,te),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._isTransitioning=null,this._scrollbarWidth=null},t.handleUpdate=function(){this._adjustDialog()},t._getConfig=function(t){return t=l({},ie,t),_.typeCheckConfig(Zt,t,oe),t},t._showElement=function(t){var e=this,n=g(this._element).hasClass(he);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),g(this._dialog).hasClass(se)?this._dialog.querySelector(de).scrollTop=0:this._element.scrollTop=0,n&&_.reflow(this._element),g(this._element).addClass(ue),this._config.focus&&this._enforceFocus();var i=g.Event(re.SHOWN,{relatedTarget:t}),o=function(){e._config.focus&&e._element.focus(),e._isTransitioning=!1,g(e._element).trigger(i)};if(n){var r=_.getTransitionDurationFromElement(this._dialog);g(this._dialog).one(_.TRANSITION_END,o).emulateTransitionEnd(r)}else o()},t._enforceFocus=function(){var e=this;g(document).off(re.FOCUSIN).on(re.FOCUSIN,function(t){document!==t.target&&e._element!==t.target&&0===g(e._element).has(t.target).length&&e._element.focus()})},t._setEscapeEvent=function(){var e=this;this._isShown&&this._config.keyboard?g(this._element).on(re.KEYDOWN_DISMISS,function(t){27===t.which&&(t.preventDefault(),e.hide())}):this._isShown||g(this._element).off(re.KEYDOWN_DISMISS)},t._setResizeEvent=function(){var e=this;this._isShown?g(window).on(re.RESIZE,function(t){return e.handleUpdate(t)}):g(window).off(re.RESIZE)},t._hideModal=function(){var t=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._isTransitioning=!1,this._showBackdrop(function(){g(document.body).removeClass(ce),t._resetAdjustments(),t._resetScrollbar(),g(t._element).trigger(re.HIDDEN)})},t._removeBackdrop=function(){this._backdrop&&(g(this._backdrop).remove(),this._backdrop=null)},t._showBackdrop=function(t){var e=this,n=g(this._element).hasClass(he)?he:"";if(this._isShown&&this._config.backdrop){if(this._backdrop=document.createElement("div"),this._backdrop.className=le,n&&this._backdrop.classList.add(n),g(this._backdrop).appendTo(document.body),g(this._element).on(re.CLICK_DISMISS,function(t){e._ignoreBackdropClick?e._ignoreBackdropClick=!1:t.target===t.currentTarget&&("static"===e._config.backdrop?e._element.focus():e.hide())}),n&&_.reflow(this._backdrop),g(this._backdrop).addClass(ue),!t)return;if(!n)return void t();var i=_.getTransitionDurationFromElement(this._backdrop);g(this._backdrop).one(_.TRANSITION_END,t).emulateTransitionEnd(i)}else if(!this._isShown&&this._backdrop){g(this._backdrop).removeClass(ue);var o=function(){e._removeBackdrop(),t&&t()};if(g(this._element).hasClass(he)){var r=_.getTransitionDurationFromElement(this._backdrop);g(this._backdrop).one(_.TRANSITION_END,o).emulateTransitionEnd(r)}else o()}else t&&t()},t._adjustDialog=function(){var t=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&t&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!t&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},t._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},t._checkScrollbar=function(){var t=document.body.getBoundingClientRect();this._isBodyOverflowing=t.left+t.right<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},t._setScrollbar=function(){var o=this;if(this._isBodyOverflowing){var t=[].slice.call(document.querySelectorAll(me)),e=[].slice.call(document.querySelectorAll(pe));g(t).each(function(t,e){var n=e.style.paddingRight,i=g(e).css("padding-right");g(e).data("padding-right",n).css("padding-right",parseFloat(i)+o._scrollbarWidth+"px")}),g(e).each(function(t,e){var n=e.style.marginRight,i=g(e).css("margin-right");g(e).data("margin-right",n).css("margin-right",parseFloat(i)-o._scrollbarWidth+"px")});var n=document.body.style.paddingRight,i=g(document.body).css("padding-right");g(document.body).data("padding-right",n).css("padding-right",parseFloat(i)+this._scrollbarWidth+"px")}g(document.body).addClass(ce)},t._resetScrollbar=function(){var t=[].slice.call(document.querySelectorAll(me));g(t).each(function(t,e){var n=g(e).data("padding-right");g(e).removeData("padding-right"),e.style.paddingRight=n||""});var e=[].slice.call(document.querySelectorAll(""+pe));g(e).each(function(t,e){var n=g(e).data("margin-right");"undefined"!=typeof n&&g(e).css("margin-right",n).removeData("margin-right")});var n=g(document.body).data("padding-right");g(document.body).removeData("padding-right"),document.body.style.paddingRight=n||""},t._getScrollbarWidth=function(){var t=document.createElement("div");t.className=ae,document.body.appendChild(t);var e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e},o._jQueryInterface=function(n,i){return this.each(function(){var t=g(this).data(te),e=l({},ie,g(this).data(),"object"==typeof n&&n?n:{});if(t||(t=new o(this,e),g(this).data(te,t)),"string"==typeof n){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n](i)}else e.show&&t.show(i)})},s(o,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return ie}}]),o}();g(document).on(re.CLICK_DATA_API,ge,function(t){var e,n=this,i=_.getSelectorFromElement(this);i&&(e=document.querySelector(i));var o=g(e).data(te)?"toggle":l({},g(e).data(),g(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||t.preventDefault();var r=g(e).one(re.SHOW,function(t){t.isDefaultPrevented()||r.one(re.HIDDEN,function(){g(n).is(":visible")&&n.focus()})});ve._jQueryInterface.call(g(e),o,this)}),g.fn[Zt]=ve._jQueryInterface,g.fn[Zt].Constructor=ve,g.fn[Zt].noConflict=function(){return g.fn[Zt]=ne,ve._jQueryInterface};var ye=["background","cite","href","itemtype","longdesc","poster","src","xlink:href"],Ee={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},Ce=/^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,Te=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;function Se(t,s,e){if(0===t.length)return t;if(e&&"function"==typeof e)return e(t);for(var n=(new window.DOMParser).parseFromString(t,"text/html"),a=Object.keys(s),l=[].slice.call(n.body.querySelectorAll("*")),i=function(t,e){var n=l[t],i=n.nodeName.toLowerCase();if(-1===a.indexOf(n.nodeName.toLowerCase()))return n.parentNode.removeChild(n),"continue";var o=[].slice.call(n.attributes),r=[].concat(s["*"]||[],s[i]||[]);o.forEach(function(t){(function(t,e){var n=t.nodeName.toLowerCase();if(-1!==e.indexOf(n))return-1===ye.indexOf(n)||Boolean(t.nodeValue.match(Ce)||t.nodeValue.match(Te));for(var i=e.filter(function(t){return t instanceof RegExp}),o=0,r=i.length;o<r;o++)if(n.match(i[o]))return!0;return!1})(t,r)||n.removeAttribute(t.nodeName)})},o=0,r=l.length;o<r;o++)i(o);return n.body.innerHTML}var be="tooltip",Ie="bs.tooltip",De="."+Ie,we=g.fn[be],Ae="bs-tooltip",Ne=new RegExp("(^|\\s)"+Ae+"\\S+","g"),Oe=["sanitize","whiteList","sanitizeFn"],ke={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string|function)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)",sanitize:"boolean",sanitizeFn:"(null|function)",whiteList:"object"},Pe={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},Le={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent",sanitize:!0,sanitizeFn:null,whiteList:Ee},je="show",He="out",Re={HIDE:"hide"+De,HIDDEN:"hidden"+De,SHOW:"show"+De,SHOWN:"shown"+De,INSERTED:"inserted"+De,CLICK:"click"+De,FOCUSIN:"focusin"+De,FOCUSOUT:"focusout"+De,MOUSEENTER:"mouseenter"+De,MOUSELEAVE:"mouseleave"+De},xe="fade",Fe="show",Ue=".tooltip-inner",We=".arrow",qe="hover",Me="focus",Ke="click",Qe="manual",Be=function(){function i(t,e){if("undefined"==typeof u)throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=t,this.config=this._getConfig(e),this.tip=null,this._setListeners()}var t=i.prototype;return t.enable=function(){this._isEnabled=!0},t.disable=function(){this._isEnabled=!1},t.toggleEnabled=function(){this._isEnabled=!this._isEnabled},t.toggle=function(t){if(this._isEnabled)if(t){var e=this.constructor.DATA_KEY,n=g(t.currentTarget).data(e);n||(n=new this.constructor(t.currentTarget,this._getDelegateConfig()),g(t.currentTarget).data(e,n)),n._activeTrigger.click=!n._activeTrigger.click,n._isWithActiveTrigger()?n._enter(null,n):n._leave(null,n)}else{if(g(this.getTipElement()).hasClass(Fe))return void this._leave(null,this);this._enter(null,this)}},t.dispose=function(){clearTimeout(this._timeout),g.removeData(this.element,this.constructor.DATA_KEY),g(this.element).off(this.constructor.EVENT_KEY),g(this.element).closest(".modal").off("hide.bs.modal"),this.tip&&g(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,(this._activeTrigger=null)!==this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},t.show=function(){var e=this;if("none"===g(this.element).css("display"))throw new Error("Please use show on visible elements");var t=g.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){g(this.element).trigger(t);var n=_.findShadowRoot(this.element),i=g.contains(null!==n?n:this.element.ownerDocument.documentElement,this.element);if(t.isDefaultPrevented()||!i)return;var o=this.getTipElement(),r=_.getUID(this.constructor.NAME);o.setAttribute("id",r),this.element.setAttribute("aria-describedby",r),this.setContent(),this.config.animation&&g(o).addClass(xe);var s="function"==typeof this.config.placement?this.config.placement.call(this,o,this.element):this.config.placement,a=this._getAttachment(s);this.addAttachmentClass(a);var l=this._getContainer();g(o).data(this.constructor.DATA_KEY,this),g.contains(this.element.ownerDocument.documentElement,this.tip)||g(o).appendTo(l),g(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new u(this.element,o,{placement:a,modifiers:{offset:this._getOffset(),flip:{behavior:this.config.fallbackPlacement},arrow:{element:We},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function(t){t.originalPlacement!==t.placement&&e._handlePopperPlacementChange(t)},onUpdate:function(t){return e._handlePopperPlacementChange(t)}}),g(o).addClass(Fe),"ontouchstart"in document.documentElement&&g(document.body).children().on("mouseover",null,g.noop);var c=function(){e.config.animation&&e._fixTransition();var t=e._hoverState;e._hoverState=null,g(e.element).trigger(e.constructor.Event.SHOWN),t===He&&e._leave(null,e)};if(g(this.tip).hasClass(xe)){var h=_.getTransitionDurationFromElement(this.tip);g(this.tip).one(_.TRANSITION_END,c).emulateTransitionEnd(h)}else c()}},t.hide=function(t){var e=this,n=this.getTipElement(),i=g.Event(this.constructor.Event.HIDE),o=function(){e._hoverState!==je&&n.parentNode&&n.parentNode.removeChild(n),e._cleanTipClass(),e.element.removeAttribute("aria-describedby"),g(e.element).trigger(e.constructor.Event.HIDDEN),null!==e._popper&&e._popper.destroy(),t&&t()};if(g(this.element).trigger(i),!i.isDefaultPrevented()){if(g(n).removeClass(Fe),"ontouchstart"in document.documentElement&&g(document.body).children().off("mouseover",null,g.noop),this._activeTrigger[Ke]=!1,this._activeTrigger[Me]=!1,this._activeTrigger[qe]=!1,g(this.tip).hasClass(xe)){var r=_.getTransitionDurationFromElement(n);g(n).one(_.TRANSITION_END,o).emulateTransitionEnd(r)}else o();this._hoverState=""}},t.update=function(){null!==this._popper&&this._popper.scheduleUpdate()},t.isWithContent=function(){return Boolean(this.getTitle())},t.addAttachmentClass=function(t){g(this.getTipElement()).addClass(Ae+"-"+t)},t.getTipElement=function(){return this.tip=this.tip||g(this.config.template)[0],this.tip},t.setContent=function(){var t=this.getTipElement();this.setElementContent(g(t.querySelectorAll(Ue)),this.getTitle()),g(t).removeClass(xe+" "+Fe)},t.setElementContent=function(t,e){"object"!=typeof e||!e.nodeType&&!e.jquery?this.config.html?(this.config.sanitize&&(e=Se(e,this.config.whiteList,this.config.sanitizeFn)),t.html(e)):t.text(e):this.config.html?g(e).parent().is(t)||t.empty().append(e):t.text(g(e).text())},t.getTitle=function(){var t=this.element.getAttribute("data-original-title");return t||(t="function"==typeof this.config.title?this.config.title.call(this.element):this.config.title),t},t._getOffset=function(){var e=this,t={};return"function"==typeof this.config.offset?t.fn=function(t){return t.offsets=l({},t.offsets,e.config.offset(t.offsets,e.element)||{}),t}:t.offset=this.config.offset,t},t._getContainer=function(){return!1===this.config.container?document.body:_.isElement(this.config.container)?g(this.config.container):g(document).find(this.config.container)},t._getAttachment=function(t){return Pe[t.toUpperCase()]},t._setListeners=function(){var i=this;this.config.trigger.split(" ").forEach(function(t){if("click"===t)g(i.element).on(i.constructor.Event.CLICK,i.config.selector,function(t){return i.toggle(t)});else if(t!==Qe){var e=t===qe?i.constructor.Event.MOUSEENTER:i.constructor.Event.FOCUSIN,n=t===qe?i.constructor.Event.MOUSELEAVE:i.constructor.Event.FOCUSOUT;g(i.element).on(e,i.config.selector,function(t){return i._enter(t)}).on(n,i.config.selector,function(t){return i._leave(t)})}}),g(this.element).closest(".modal").on("hide.bs.modal",function(){i.element&&i.hide()}),this.config.selector?this.config=l({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},t._fixTitle=function(){var t=typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title")||"string"!==t)&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},t._enter=function(t,e){var n=this.constructor.DATA_KEY;(e=e||g(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),g(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusin"===t.type?Me:qe]=!0),g(e.getTipElement()).hasClass(Fe)||e._hoverState===je?e._hoverState=je:(clearTimeout(e._timeout),e._hoverState=je,e.config.delay&&e.config.delay.show?e._timeout=setTimeout(function(){e._hoverState===je&&e.show()},e.config.delay.show):e.show())},t._leave=function(t,e){var n=this.constructor.DATA_KEY;(e=e||g(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),g(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusout"===t.type?Me:qe]=!1),e._isWithActiveTrigger()||(clearTimeout(e._timeout),e._hoverState=He,e.config.delay&&e.config.delay.hide?e._timeout=setTimeout(function(){e._hoverState===He&&e.hide()},e.config.delay.hide):e.hide())},t._isWithActiveTrigger=function(){for(var t in this._activeTrigger)if(this._activeTrigger[t])return!0;return!1},t._getConfig=function(t){var e=g(this.element).data();return Object.keys(e).forEach(function(t){-1!==Oe.indexOf(t)&&delete e[t]}),"number"==typeof(t=l({},this.constructor.Default,e,"object"==typeof t&&t?t:{})).delay&&(t.delay={show:t.delay,hide:t.delay}),"number"==typeof t.title&&(t.title=t.title.toString()),"number"==typeof t.content&&(t.content=t.content.toString()),_.typeCheckConfig(be,t,this.constructor.DefaultType),t.sanitize&&(t.template=Se(t.template,t.whiteList,t.sanitizeFn)),t},t._getDelegateConfig=function(){var t={};if(this.config)for(var e in this.config)this.constructor.Default[e]!==this.config[e]&&(t[e]=this.config[e]);return t},t._cleanTipClass=function(){var t=g(this.getTipElement()),e=t.attr("class").match(Ne);null!==e&&e.length&&t.removeClass(e.join(""))},t._handlePopperPlacementChange=function(t){var e=t.instance;this.tip=e.popper,this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(t.placement))},t._fixTransition=function(){var t=this.getTipElement(),e=this.config.animation;null===t.getAttribute("x-placement")&&(g(t).removeClass(xe),this.config.animation=!1,this.hide(),this.show(),this.config.animation=e)},i._jQueryInterface=function(n){return this.each(function(){var t=g(this).data(Ie),e="object"==typeof n&&n;if((t||!/dispose|hide/.test(n))&&(t||(t=new i(this,e),g(this).data(Ie,t)),"string"==typeof n)){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return Le}},{key:"NAME",get:function(){return be}},{key:"DATA_KEY",get:function(){return Ie}},{key:"Event",get:function(){return Re}},{key:"EVENT_KEY",get:function(){return De}},{key:"DefaultType",get:function(){return ke}}]),i}();g.fn[be]=Be._jQueryInterface,g.fn[be].Constructor=Be,g.fn[be].noConflict=function(){return g.fn[be]=we,Be._jQueryInterface};var Ve="popover",Ye="bs.popover",ze="."+Ye,Xe=g.fn[Ve],$e="bs-popover",Ge=new RegExp("(^|\\s)"+$e+"\\S+","g"),Je=l({},Be.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),Ze=l({},Be.DefaultType,{content:"(string|element|function)"}),tn="fade",en="show",nn=".popover-header",on=".popover-body",rn={HIDE:"hide"+ze,HIDDEN:"hidden"+ze,SHOW:"show"+ze,SHOWN:"shown"+ze,INSERTED:"inserted"+ze,CLICK:"click"+ze,FOCUSIN:"focusin"+ze,FOCUSOUT:"focusout"+ze,MOUSEENTER:"mouseenter"+ze,MOUSELEAVE:"mouseleave"+ze},sn=function(t){var e,n;function i(){return t.apply(this,arguments)||this}n=t,(e=i).prototype=Object.create(n.prototype),(e.prototype.constructor=e).__proto__=n;var o=i.prototype;return o.isWithContent=function(){return this.getTitle()||this._getContent()},o.addAttachmentClass=function(t){g(this.getTipElement()).addClass($e+"-"+t)},o.getTipElement=function(){return this.tip=this.tip||g(this.config.template)[0],this.tip},o.setContent=function(){var t=g(this.getTipElement());this.setElementContent(t.find(nn),this.getTitle());var e=this._getContent();"function"==typeof e&&(e=e.call(this.element)),this.setElementContent(t.find(on),e),t.removeClass(tn+" "+en)},o._getContent=function(){return this.element.getAttribute("data-content")||this.config.content},o._cleanTipClass=function(){var t=g(this.getTipElement()),e=t.attr("class").match(Ge);null!==e&&0<e.length&&t.removeClass(e.join(""))},i._jQueryInterface=function(n){return this.each(function(){var t=g(this).data(Ye),e="object"==typeof n?n:null;if((t||!/dispose|hide/.test(n))&&(t||(t=new i(this,e),g(this).data(Ye,t)),"string"==typeof n)){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return Je}},{key:"NAME",get:function(){return Ve}},{key:"DATA_KEY",get:function(){return Ye}},{key:"Event",get:function(){return rn}},{key:"EVENT_KEY",get:function(){return ze}},{key:"DefaultType",get:function(){return Ze}}]),i}(Be);g.fn[Ve]=sn._jQueryInterface,g.fn[Ve].Constructor=sn,g.fn[Ve].noConflict=function(){return g.fn[Ve]=Xe,sn._jQueryInterface};var an="scrollspy",ln="bs.scrollspy",cn="."+ln,hn=g.fn[an],un={offset:10,method:"auto",target:""},fn={offset:"number",method:"string",target:"(string|element)"},dn={ACTIVATE:"activate"+cn,SCROLL:"scroll"+cn,LOAD_DATA_API:"load"+cn+".data-api"},gn="dropdown-item",_n="active",mn='[data-spy="scroll"]',pn=".nav, .list-group",vn=".nav-link",yn=".nav-item",En=".list-group-item",Cn=".dropdown",Tn=".dropdown-item",Sn=".dropdown-toggle",bn="offset",In="position",Dn=function(){function n(t,e){var n=this;this._element=t,this._scrollElement="BODY"===t.tagName?window:t,this._config=this._getConfig(e),this._selector=this._config.target+" "+vn+","+this._config.target+" "+En+","+this._config.target+" "+Tn,this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,g(this._scrollElement).on(dn.SCROLL,function(t){return n._process(t)}),this.refresh(),this._process()}var t=n.prototype;return t.refresh=function(){var e=this,t=this._scrollElement===this._scrollElement.window?bn:In,o="auto"===this._config.method?t:this._config.method,r=o===In?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),[].slice.call(document.querySelectorAll(this._selector)).map(function(t){var e,n=_.getSelectorFromElement(t);if(n&&(e=document.querySelector(n)),e){var i=e.getBoundingClientRect();if(i.width||i.height)return[g(e)[o]().top+r,n]}return null}).filter(function(t){return t}).sort(function(t,e){return t[0]-e[0]}).forEach(function(t){e._offsets.push(t[0]),e._targets.push(t[1])})},t.dispose=function(){g.removeData(this._element,ln),g(this._scrollElement).off(cn),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},t._getConfig=function(t){if("string"!=typeof(t=l({},un,"object"==typeof t&&t?t:{})).target){var e=g(t.target).attr("id");e||(e=_.getUID(an),g(t.target).attr("id",e)),t.target="#"+e}return _.typeCheckConfig(an,t,fn),t},t._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},t._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},t._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},t._process=function(){var t=this._getScrollTop()+this._config.offset,e=this._getScrollHeight(),n=this._config.offset+e-this._getOffsetHeight();if(this._scrollHeight!==e&&this.refresh(),n<=t){var i=this._targets[this._targets.length-1];this._activeTarget!==i&&this._activate(i)}else{if(this._activeTarget&&t<this._offsets[0]&&0<this._offsets[0])return this._activeTarget=null,void this._clear();for(var o=this._offsets.length;o--;){this._activeTarget!==this._targets[o]&&t>=this._offsets[o]&&("undefined"==typeof this._offsets[o+1]||t<this._offsets[o+1])&&this._activate(this._targets[o])}}},t._activate=function(e){this._activeTarget=e,this._clear();var t=this._selector.split(",").map(function(t){return t+'[data-target="'+e+'"],'+t+'[href="'+e+'"]'}),n=g([].slice.call(document.querySelectorAll(t.join(","))));n.hasClass(gn)?(n.closest(Cn).find(Sn).addClass(_n),n.addClass(_n)):(n.addClass(_n),n.parents(pn).prev(vn+", "+En).addClass(_n),n.parents(pn).prev(yn).children(vn).addClass(_n)),g(this._scrollElement).trigger(dn.ACTIVATE,{relatedTarget:e})},t._clear=function(){[].slice.call(document.querySelectorAll(this._selector)).filter(function(t){return t.classList.contains(_n)}).forEach(function(t){return t.classList.remove(_n)})},n._jQueryInterface=function(e){return this.each(function(){var t=g(this).data(ln);if(t||(t=new n(this,"object"==typeof e&&e),g(this).data(ln,t)),"string"==typeof e){if("undefined"==typeof t[e])throw new TypeError('No method named "'+e+'"');t[e]()}})},s(n,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return un}}]),n}();g(window).on(dn.LOAD_DATA_API,function(){for(var t=[].slice.call(document.querySelectorAll(mn)),e=t.length;e--;){var n=g(t[e]);Dn._jQueryInterface.call(n,n.data())}}),g.fn[an]=Dn._jQueryInterface,g.fn[an].Constructor=Dn,g.fn[an].noConflict=function(){return g.fn[an]=hn,Dn._jQueryInterface};var wn="bs.tab",An="."+wn,Nn=g.fn.tab,On={HIDE:"hide"+An,HIDDEN:"hidden"+An,SHOW:"show"+An,SHOWN:"shown"+An,CLICK_DATA_API:"click"+An+".data-api"},kn="dropdown-menu",Pn="active",Ln="disabled",jn="fade",Hn="show",Rn=".dropdown",xn=".nav, .list-group",Fn=".active",Un="> li > .active",Wn='[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',qn=".dropdown-toggle",Mn="> .dropdown-menu .active",Kn=function(){function i(t){this._element=t}var t=i.prototype;return t.show=function(){var n=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&g(this._element).hasClass(Pn)||g(this._element).hasClass(Ln))){var t,i,e=g(this._element).closest(xn)[0],o=_.getSelectorFromElement(this._element);if(e){var r="UL"===e.nodeName||"OL"===e.nodeName?Un:Fn;i=(i=g.makeArray(g(e).find(r)))[i.length-1]}var s=g.Event(On.HIDE,{relatedTarget:this._element}),a=g.Event(On.SHOW,{relatedTarget:i});if(i&&g(i).trigger(s),g(this._element).trigger(a),!a.isDefaultPrevented()&&!s.isDefaultPrevented()){o&&(t=document.querySelector(o)),this._activate(this._element,e);var l=function(){var t=g.Event(On.HIDDEN,{relatedTarget:n._element}),e=g.Event(On.SHOWN,{relatedTarget:i});g(i).trigger(t),g(n._element).trigger(e)};t?this._activate(t,t.parentNode,l):l()}}},t.dispose=function(){g.removeData(this._element,wn),this._element=null},t._activate=function(t,e,n){var i=this,o=(!e||"UL"!==e.nodeName&&"OL"!==e.nodeName?g(e).children(Fn):g(e).find(Un))[0],r=n&&o&&g(o).hasClass(jn),s=function(){return i._transitionComplete(t,o,n)};if(o&&r){var a=_.getTransitionDurationFromElement(o);g(o).removeClass(Hn).one(_.TRANSITION_END,s).emulateTransitionEnd(a)}else s()},t._transitionComplete=function(t,e,n){if(e){g(e).removeClass(Pn);var i=g(e.parentNode).find(Mn)[0];i&&g(i).removeClass(Pn),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!1)}if(g(t).addClass(Pn),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!0),_.reflow(t),t.classList.contains(jn)&&t.classList.add(Hn),t.parentNode&&g(t.parentNode).hasClass(kn)){var o=g(t).closest(Rn)[0];if(o){var r=[].slice.call(o.querySelectorAll(qn));g(r).addClass(Pn)}t.setAttribute("aria-expanded",!0)}n&&n()},i._jQueryInterface=function(n){return this.each(function(){var t=g(this),e=t.data(wn);if(e||(e=new i(this),t.data(wn,e)),"string"==typeof n){if("undefined"==typeof e[n])throw new TypeError('No method named "'+n+'"');e[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.3.1"}}]),i}();g(document).on(On.CLICK_DATA_API,Wn,function(t){t.preventDefault(),Kn._jQueryInterface.call(g(this),"show")}),g.fn.tab=Kn._jQueryInterface,g.fn.tab.Constructor=Kn,g.fn.tab.noConflict=function(){return g.fn.tab=Nn,Kn._jQueryInterface};var Qn="toast",Bn="bs.toast",Vn="."+Bn,Yn=g.fn[Qn],zn={CLICK_DISMISS:"click.dismiss"+Vn,HIDE:"hide"+Vn,HIDDEN:"hidden"+Vn,SHOW:"show"+Vn,SHOWN:"shown"+Vn},Xn="fade",$n="hide",Gn="show",Jn="showing",Zn={animation:"boolean",autohide:"boolean",delay:"number"},ti={animation:!0,autohide:!0,delay:500},ei='[data-dismiss="toast"]',ni=function(){function i(t,e){this._element=t,this._config=this._getConfig(e),this._timeout=null,this._setListeners()}var t=i.prototype;return t.show=function(){var t=this;g(this._element).trigger(zn.SHOW),this._config.animation&&this._element.classList.add(Xn);var e=function(){t._element.classList.remove(Jn),t._element.classList.add(Gn),g(t._element).trigger(zn.SHOWN),t._config.autohide&&t.hide()};if(this._element.classList.remove($n),this._element.classList.add(Jn),this._config.animation){var n=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,e).emulateTransitionEnd(n)}else e()},t.hide=function(t){var e=this;this._element.classList.contains(Gn)&&(g(this._element).trigger(zn.HIDE),t?this._close():this._timeout=setTimeout(function(){e._close()},this._config.delay))},t.dispose=function(){clearTimeout(this._timeout),this._timeout=null,this._element.classList.contains(Gn)&&this._element.classList.remove(Gn),g(this._element).off(zn.CLICK_DISMISS),g.removeData(this._element,Bn),this._element=null,this._config=null},t._getConfig=function(t){return t=l({},ti,g(this._element).data(),"object"==typeof t&&t?t:{}),_.typeCheckConfig(Qn,t,this.constructor.DefaultType),t},t._setListeners=function(){var t=this;g(this._element).on(zn.CLICK_DISMISS,ei,function(){return t.hide(!0)})},t._close=function(){var t=this,e=function(){t._element.classList.add($n),g(t._element).trigger(zn.HIDDEN)};if(this._element.classList.remove(Gn),this._config.animation){var n=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,e).emulateTransitionEnd(n)}else e()},i._jQueryInterface=function(n){return this.each(function(){var t=g(this),e=t.data(Bn);if(e||(e=new i(this,"object"==typeof n&&n),t.data(Bn,e)),"string"==typeof n){if("undefined"==typeof e[n])throw new TypeError('No method named "'+n+'"');e[n](this)}})},s(i,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"DefaultType",get:function(){return Zn}},{key:"Default",get:function(){return ti}}]),i}();g.fn[Qn]=ni._jQueryInterface,g.fn[Qn].Constructor=ni,g.fn[Qn].noConflict=function(){return g.fn[Qn]=Yn,ni._jQueryInterface},function(){if("undefined"==typeof g)throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var t=g.fn.jquery.split(" ")[0].split(".");if(t[0]<2&&t[1]<9||1===t[0]&&9===t[1]&&t[2]<1||4<=t[0])throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}(),t.Util=_,t.Alert=p,t.Button=P,t.Carousel=lt,t.Collapse=bt,t.Dropdown=Jt,t.Modal=ve,t.Popover=sn,t.Scrollspy=Dn,t.Tab=Kn,t.Toast=ni,t.Tooltip=Be,Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=bootstrap.min.js.map
;(function(u,r){"function"===typeof define&&define.amd?define([],r):"object"===typeof module&&module.exports?module.exports=r():u.anime=r()})(this,function(){var u={duration:1E3,delay:0,loop:!1,autoplay:!0,direction:"normal",easing:"easeOutElastic",elasticity:400,round:!1,begin:void 0,update:void 0,complete:void 0},r="translateX translateY translateZ rotate rotateX rotateY rotateZ scale scaleX scaleY scaleZ skewX skewY".split(" "),y,f={arr:function(a){return Array.isArray(a)},obj:function(a){return-1<
Object.prototype.toString.call(a).indexOf("Object")},svg:function(a){return a instanceof SVGElement},dom:function(a){return a.nodeType||f.svg(a)},num:function(a){return!isNaN(parseInt(a))},str:function(a){return"string"===typeof a},fnc:function(a){return"function"===typeof a},und:function(a){return"undefined"===typeof a},nul:function(a){return"null"===typeof a},hex:function(a){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a)},rgb:function(a){return/^rgb/.test(a)},hsl:function(a){return/^hsl/.test(a)},
col:function(a){return f.hex(a)||f.rgb(a)||f.hsl(a)}},D=function(){var a={},b={Sine:function(a){return 1-Math.cos(a*Math.PI/2)},Circ:function(a){return 1-Math.sqrt(1-a*a)},Elastic:function(a,b){if(0===a||1===a)return a;var d=1-Math.min(b,998)/1E3,g=a/1-1;return-(Math.pow(2,10*g)*Math.sin(2*(g-d/(2*Math.PI)*Math.asin(1))*Math.PI/d))},Back:function(a){return a*a*(3*a-2)},Bounce:function(a){for(var b,d=4;a<((b=Math.pow(2,--d))-1)/11;);return 1/Math.pow(4,3-d)-7.5625*Math.pow((3*b-2)/22-a,2)}};["Quad",
"Cubic","Quart","Quint","Expo"].forEach(function(a,e){b[a]=function(a){return Math.pow(a,e+2)}});Object.keys(b).forEach(function(c){var e=b[c];a["easeIn"+c]=e;a["easeOut"+c]=function(a,b){return 1-e(1-a,b)};a["easeInOut"+c]=function(a,b){return.5>a?e(2*a,b)/2:1-e(-2*a+2,b)/2};a["easeOutIn"+c]=function(a,b){return.5>a?(1-e(1-2*a,b))/2:(e(2*a-1,b)+1)/2}});a.linear=function(a){return a};return a}(),z=function(a){return f.str(a)?a:a+""},E=function(a){return a.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()},
F=function(a){if(f.col(a))return!1;try{return document.querySelectorAll(a)}catch(b){return!1}},A=function(a){return a.reduce(function(a,c){return a.concat(f.arr(c)?A(c):c)},[])},t=function(a){if(f.arr(a))return a;f.str(a)&&(a=F(a)||a);return a instanceof NodeList||a instanceof HTMLCollection?[].slice.call(a):[a]},G=function(a,b){return a.some(function(a){return a===b})},R=function(a,b){var c={};a.forEach(function(a){var d=JSON.stringify(b.map(function(b){return a[b]}));c[d]=c[d]||[];c[d].push(a)});
return Object.keys(c).map(function(a){return c[a]})},H=function(a){return a.filter(function(a,c,e){return e.indexOf(a)===c})},B=function(a){var b={},c;for(c in a)b[c]=a[c];return b},v=function(a,b){for(var c in b)a[c]=f.und(a[c])?b[c]:a[c];return a},S=function(a){a=a.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(a,b,c,m){return b+b+c+c+m+m});var b=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);a=parseInt(b[1],16);var c=parseInt(b[2],16),b=parseInt(b[3],16);return"rgb("+a+","+c+","+b+")"},
T=function(a){a=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(a);var b=parseInt(a[1])/360,c=parseInt(a[2])/100,e=parseInt(a[3])/100;a=function(a,b,c){0>c&&(c+=1);1<c&&--c;return c<1/6?a+6*(b-a)*c:.5>c?b:c<2/3?a+(b-a)*(2/3-c)*6:a};if(0==c)c=e=b=e;else var d=.5>e?e*(1+c):e+c-e*c,g=2*e-d,c=a(g,d,b+1/3),e=a(g,d,b),b=a(g,d,b-1/3);return"rgb("+255*c+","+255*e+","+255*b+")"},p=function(a){return/([\+\-]?[0-9|auto\.]+)(%|px|pt|em|rem|in|cm|mm|ex|pc|vw|vh|deg)?/.exec(a)[2]},I=function(a,b,c){return p(b)?
b:-1<a.indexOf("translate")?p(c)?b+p(c):b+"px":-1<a.indexOf("rotate")||-1<a.indexOf("skew")?b+"deg":b},w=function(a,b){if(b in a.style)return getComputedStyle(a).getPropertyValue(E(b))||"0"},U=function(a,b){var c=-1<b.indexOf("scale")?1:0,e=a.style.transform;if(!e)return c;for(var d=/(\w+)\((.+?)\)/g,g=[],m=[],f=[];g=d.exec(e);)m.push(g[1]),f.push(g[2]);e=f.filter(function(a,c){return m[c]===b});return e.length?e[0]:c},J=function(a,b){if(f.dom(a)&&G(r,b))return"transform";if(f.dom(a)&&(a.getAttribute(b)||
f.svg(a)&&a[b]))return"attribute";if(f.dom(a)&&"transform"!==b&&w(a,b))return"css";if(!f.nul(a[b])&&!f.und(a[b]))return"object"},K=function(a,b){switch(J(a,b)){case "transform":return U(a,b);case "css":return w(a,b);case "attribute":return a.getAttribute(b)}return a[b]||0},L=function(a,b,c){if(f.col(b))return b=f.rgb(b)?b:f.hex(b)?S(b):f.hsl(b)?T(b):void 0,b;if(p(b))return b;a=p(a.to)?p(a.to):p(a.from);!a&&c&&(a=p(c));return a?b+a:b},M=function(a){var b=/-?\d*\.?\d+/g;return{original:a,numbers:z(a).match(b)?
z(a).match(b).map(Number):[0],strings:z(a).split(b)}},V=function(a,b,c){return b.reduce(function(b,d,g){d=d?d:c[g-1];return b+a[g-1]+d})},W=function(a){a=a?A(f.arr(a)?a.map(t):t(a)):[];return a.map(function(a,c){return{target:a,id:c}})},N=function(a,b,c,e){"transform"===c?(c=a+"("+I(a,b.from,b.to)+")",b=a+"("+I(a,b.to)+")"):(a="css"===c?w(e,a):void 0,c=L(b,b.from,a),b=L(b,b.to,a));return{from:M(c),to:M(b)}},X=function(a,b){var c=[];a.forEach(function(e,d){var g=e.target;return b.forEach(function(b){var l=
J(g,b.name);if(l){var q;q=b.name;var h=b.value,h=t(f.fnc(h)?h(g,d):h);q={from:1<h.length?h[0]:K(g,q),to:1<h.length?h[1]:h[0]};h=B(b);h.animatables=e;h.type=l;h.from=N(b.name,q,h.type,g).from;h.to=N(b.name,q,h.type,g).to;h.round=f.col(q.from)||h.round?1:0;h.delay=(f.fnc(h.delay)?h.delay(g,d,a.length):h.delay)/k.speed;h.duration=(f.fnc(h.duration)?h.duration(g,d,a.length):h.duration)/k.speed;c.push(h)}})});return c},Y=function(a,b){var c=X(a,b);return R(c,["name","from","to","delay","duration"]).map(function(a){var b=
B(a[0]);b.animatables=a.map(function(a){return a.animatables});b.totalDuration=b.delay+b.duration;return b})},C=function(a,b){a.tweens.forEach(function(c){var e=c.from,d=a.duration-(c.delay+c.duration);c.from=c.to;c.to=e;b&&(c.delay=d)});a.reversed=a.reversed?!1:!0},Z=function(a){if(a.length)return Math.max.apply(Math,a.map(function(a){return a.totalDuration}))},O=function(a){var b=[],c=[];a.tweens.forEach(function(a){if("css"===a.type||"transform"===a.type)b.push("css"===a.type?E(a.name):"transform"),
a.animatables.forEach(function(a){c.push(a.target)})});return{properties:H(b).join(", "),elements:H(c)}},aa=function(a){var b=O(a);b.elements.forEach(function(a){a.style.willChange=b.properties})},ba=function(a){O(a).elements.forEach(function(a){a.style.removeProperty("will-change")})},ca=function(a,b){var c=a.path,e=a.value*b,d=function(d){d=d||0;return c.getPointAtLength(1<b?a.value+d:e+d)},g=d(),f=d(-1),d=d(1);switch(a.name){case "translateX":return g.x;case "translateY":return g.y;case "rotate":return 180*
Math.atan2(d.y-f.y,d.x-f.x)/Math.PI}},da=function(a,b){var c=Math.min(Math.max(b-a.delay,0),a.duration)/a.duration,e=a.to.numbers.map(function(b,e){var f=a.from.numbers[e],l=D[a.easing](c,a.elasticity),f=a.path?ca(a,l):f+l*(b-f);return f=a.round?Math.round(f*a.round)/a.round:f});return V(e,a.to.strings,a.from.strings)},P=function(a,b){var c;a.currentTime=b;a.progress=b/a.duration*100;for(var e=0;e<a.tweens.length;e++){var d=a.tweens[e];d.currentValue=da(d,b);for(var f=d.currentValue,m=0;m<d.animatables.length;m++){var l=
d.animatables[m],k=l.id,l=l.target,h=d.name;switch(d.type){case "css":l.style[h]=f;break;case "attribute":l.setAttribute(h,f);break;case "object":l[h]=f;break;case "transform":c||(c={}),c[k]||(c[k]=[]),c[k].push(f)}}}if(c)for(e in y||(y=(w(document.body,"transform")?"":"-webkit-")+"transform"),c)a.animatables[e].target.style[y]=c[e].join(" ");a.settings.update&&a.settings.update(a)},Q=function(a){var b={};b.animatables=W(a.targets);b.settings=v(a,u);var c=b.settings,e=[],d;for(d in a)if(!u.hasOwnProperty(d)&&
"targets"!==d){var g=f.obj(a[d])?B(a[d]):{value:a[d]};g.name=d;e.push(v(g,c))}b.properties=e;b.tweens=Y(b.animatables,b.properties);b.duration=Z(b.tweens)||a.duration;b.currentTime=0;b.progress=0;b.ended=!1;return b},n=[],x=0,ea=function(){var a=function(){x=requestAnimationFrame(b)},b=function(b){if(n.length){for(var e=0;e<n.length;e++)n[e].tick(b);a()}else cancelAnimationFrame(x),x=0};return a}(),k=function(a){var b=Q(a),c={};b.tick=function(a){b.ended=!1;c.start||(c.start=a);c.current=Math.min(Math.max(c.last+
a-c.start,0),b.duration);P(b,c.current);var d=b.settings;d.begin&&c.current>=d.delay&&(d.begin(b),d.begin=void 0);c.current>=b.duration&&(d.loop?(c.start=a,"alternate"===d.direction&&C(b,!0),f.num(d.loop)&&d.loop--):(b.ended=!0,b.pause(),d.complete&&d.complete(b)),c.last=0)};b.seek=function(a){P(b,a/100*b.duration)};b.pause=function(){ba(b);var a=n.indexOf(b);-1<a&&n.splice(a,1)};b.play=function(a){b.pause();a&&(b=v(Q(v(a,b.settings)),b));c.start=0;c.last=b.ended?0:b.currentTime;a=b.settings;"reverse"===
a.direction&&C(b);"alternate"!==a.direction||a.loop||(a.loop=1);aa(b);n.push(b);x||ea()};b.restart=function(){b.reversed&&C(b);b.pause();b.seek(0);b.play()};b.settings.autoplay&&b.play();return b};k.version="1.1.1";k.speed=1;k.list=n;k.remove=function(a){a=A(f.arr(a)?a.map(t):t(a));for(var b=n.length-1;0<=b;b--)for(var c=n[b],e=c.tweens,d=e.length-1;0<=d;d--)for(var g=e[d].animatables,k=g.length-1;0<=k;k--)G(a,g[k].target)&&(g.splice(k,1),g.length||e.splice(d,1),e.length||c.pause())};k.easings=D;
k.getValue=K;k.path=function(a){a=f.str(a)?F(a)[0]:a;return{path:a,value:a.getTotalLength()}};k.random=function(a,b){return Math.floor(Math.random()*(b-a+1))+a};return k});
;/**
 * main.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2016, Codrops
 * http://www.codrops.com
 */
;(function(window) {

	'use strict';

	// Helper vars and functions.
	function extend( a, b ) {
		for( var key in b ) { 
			if( b.hasOwnProperty( key ) ) {
				a[key] = b[key];
			}
		}
		return a;
	}

	// from http://www.quirksmode.org/js/events_properties.html#position
	function getMousePos(e) {
		var posx = 0, posy = 0;
		if (!e) var e = window.event;
		if (e.pageX || e.pageY) 	{
			posx = e.pageX;
			posy = e.pageY;
		}
		else if (e.clientX || e.clientY) 	{
			posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
			posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
		}
		return { x : posx, y : posy }
	}

	/**
	 * TiltFx obj.
	 */
	function TiltFx(el, options) {
		this.DOM = {};
		this.DOM.el = el;
		this.options = extend({}, this.options);
		extend(this.options, options);
		this._init();
	}

	TiltFx.prototype.options = {
		movement: {
			imgWrapper : {
				translation : {x: 0, y: 0, z: 0},
				rotation : {x: -5, y: 5, z: 0},
				reverseAnimation : {
					duration : 1200,
					easing : 'easeOutElastic',
					elasticity : 600
				}
			},
			lines : {
				translation : {x: 10, y: 10, z: [0,10]},
				reverseAnimation : {
					duration : 1000,
					easing : 'easeOutExpo',
					elasticity : 600
				}
			},
			caption : {
				translation : {x: 20, y: 20, z: 0},
				rotation : {x: 0, y: 0, z: 0},
				reverseAnimation : {
					duration : 1500,
					easing : 'easeOutElastic',
					elasticity : 600
				}
			},
			/*
			overlay : {
				translation : {x: 10, y: 10, z: [0,50]},
				reverseAnimation : {
					duration : 500,
					easing : 'easeOutExpo'
				}
			},
			*/
			shine : {
				translation : {x: 50, y: 50, z: 0},
				reverseAnimation : {
					duration : 1200,
					easing : 'easeOutElastic',
					elasticity: 600
				}
			}
		}
	};

	/**
	 * Init.
	 */
	TiltFx.prototype._init = function() {
		this.DOM.animatable = {};
		this.DOM.animatable.imgWrapper = this.DOM.el.querySelector('.tilter__figure');
		this.DOM.animatable.lines = this.DOM.el.querySelector('.tilter__deco--lines');
		this.DOM.animatable.caption = this.DOM.el.querySelector('.tilter__caption');
		this.DOM.animatable.overlay = this.DOM.el.querySelector('.tilter__deco--overlay');
		this.DOM.animatable.shine = this.DOM.el.querySelector('.tilter__deco--shine > div');
		this._initEvents();
	};

	/**
	 * Init/Bind events.
	 */
	TiltFx.prototype._initEvents = function() {
		var self = this;
		
		this.mouseenterFn = function() {
			for(var key in self.DOM.animatable) {
				anime.remove(self.DOM.animatable[key]);
			}
		};
		
		this.mousemoveFn = function(ev) {
			requestAnimationFrame(function() { self._layout(ev); });
		};
		
		this.mouseleaveFn = function(ev) {
			requestAnimationFrame(function() {
				for(var key in self.DOM.animatable) {
					if( self.options.movement[key] == undefined ) {continue;}
					anime({
						targets: self.DOM.animatable[key],
						duration: self.options.movement[key].reverseAnimation != undefined ? self.options.movement[key].reverseAnimation.duration || 0 : 1,
						easing: self.options.movement[key].reverseAnimation != undefined ? self.options.movement[key].reverseAnimation.easing || 'linear' : 'linear',
						elasticity: self.options.movement[key].reverseAnimation != undefined ? self.options.movement[key].reverseAnimation.elasticity || null : null,
						scaleX: 1,
						scaleY: 1,
						scaleZ: 1,
						translateX: 0,
						translateY: 0,
						translateZ: 0,
						rotateX: 0,
						rotateY: 0,
						rotateZ: 0
					});
				}
			});
		};

		this.DOM.el.addEventListener('mousemove', this.mousemoveFn);
		this.DOM.el.addEventListener('mouseleave', this.mouseleaveFn);
		this.DOM.el.addEventListener('mouseenter', this.mouseenterFn);
	};

	TiltFx.prototype._layout = function(ev) {
		// Mouse position relative to the document.
		var mousepos = getMousePos(ev),
			// Document scrolls.
			docScrolls = {left : document.body.scrollLeft + document.documentElement.scrollLeft, top : document.body.scrollTop + document.documentElement.scrollTop},
			bounds = this.DOM.el.getBoundingClientRect(),
			// Mouse position relative to the main element (this.DOM.el).
			relmousepos = { x : mousepos.x - bounds.left - docScrolls.left, y : mousepos.y - bounds.top - docScrolls.top };

		// Movement settings for the animatable elements.
		for(var key in this.DOM.animatable) {
			if( this.DOM.animatable[key] == undefined || this.options.movement[key] == undefined ) {
				continue;
			}
			var t = this.options.movement[key] != undefined ? this.options.movement[key].translation || {x:0,y:0,z:0} : {x:0,y:0,z:0},
				r = this.options.movement[key] != undefined ? this.options.movement[key].rotation || {x:0,y:0,z:0} : {x:0,y:0,z:0},
				setRange = function (obj) {
					for(var k in obj) {
						if( obj[k] == undefined ) {
							obj[k] = [0,0];
						}
						else if( typeof obj[k] === 'number' ) {
							obj[k] = [-1*obj[k],obj[k]];
						}
					}
				};

			setRange(t);
			setRange(r);
			
			var transforms = {
				translation : {
					x: (t.x[1]-t.x[0])/bounds.width*relmousepos.x + t.x[0],
					y: (t.y[1]-t.y[0])/bounds.height*relmousepos.y + t.y[0],
					z: (t.z[1]-t.z[0])/bounds.height*relmousepos.y + t.z[0],
				},
				rotation : {
					x: (r.x[1]-r.x[0])/bounds.height*relmousepos.y + r.x[0],
					y: (r.y[1]-r.y[0])/bounds.width*relmousepos.x + r.y[0],
					z: (r.z[1]-r.z[0])/bounds.width*relmousepos.x + r.z[0]
				}
			};

			this.DOM.animatable[key].style.WebkitTransform = this.DOM.animatable[key].style.transform = 'translateX(' + transforms.translation.x + 'px) translateY(' + transforms.translation.y + 'px) translateZ(' + transforms.translation.z + 'px) rotateX(' + transforms.rotation.x + 'deg) rotateY(' + transforms.rotation.y + 'deg) rotateZ(' + transforms.rotation.z + 'deg)';
		}
	};

	window.TiltFx = TiltFx;

})(window);
;(function() {
    var tiltSettings = [
    {},
    {
        movement: {
            imgWrapper : {
                translation : {x: 10, y: 10, z: 30},
                rotation : {x: 0, y: -10, z: 0},
                reverseAnimation : {duration : 200, easing : 'easeOutQuad'}
            },
            lines : {
                translation : {x: 10, y: 10, z: [0,70]},
                rotation : {x: 0, y: 0, z: -2},
                reverseAnimation : {duration : 2000, easing : 'easeOutExpo'}
            },
            caption : {
                rotation : {x: 0, y: 0, z: 2},
                reverseAnimation : {duration : 200, easing : 'easeOutQuad'}
            },
            overlay : {
                translation : {x: 10, y: -10, z: 0},
                rotation : {x: 0, y: 0, z: 2},
                reverseAnimation : {duration : 2000, easing : 'easeOutExpo'}
            },
            shine : {
                translation : {x: 100, y: 100, z: 0},
                reverseAnimation : {duration : 200, easing : 'easeOutQuad'}
            }
        }
    },
    {
        movement: {
            imgWrapper : {
                rotation : {x: -5, y: 10, z: 0},
                reverseAnimation : {duration : 900, easing : 'easeOutCubic'}
            },
            caption : {
                translation : {x: 30, y: 30, z: [0,40]},
                rotation : {x: [0,15], y: 0, z: 0},
                reverseAnimation : {duration : 1200, easing : 'easeOutExpo'}
            },
            overlay : {
                translation : {x: 10, y: 10, z: [0,20]},
                reverseAnimation : {duration : 1000, easing : 'easeOutExpo'}
            },
            shine : {
                translation : {x: 100, y: 100, z: 0},
                reverseAnimation : {duration : 900, easing : 'easeOutCubic'}
            }
        }
    },
    {
        movement: {
            imgWrapper : {
                rotation : {x: -5, y: 10, z: 0},
                reverseAnimation : {duration : 50, easing : 'easeOutQuad'}
            },
            caption : {
                translation : {x: 20, y: 20, z: 0},
                reverseAnimation : {duration : 200, easing : 'easeOutQuad'}
            },
            overlay : {
                translation : {x: 5, y: -5, z: 0},
                rotation : {x: 0, y: 0, z: 6},
                reverseAnimation : {duration : 1000, easing : 'easeOutQuad'}
            },
            shine : {
                translation : {x: 50, y: 50, z: 0},
                reverseAnimation : {duration : 50, easing : 'easeOutQuad'}
            }
        }
    },
    {
        movement: {
            imgWrapper : {
                translation : {x: 0, y: -8, z: 0},
                rotation : {x: 3, y: 3, z: 0},
                reverseAnimation : {duration : 1200, easing : 'easeOutExpo'}
            },
            lines : {
                translation : {x: 15, y: 15, z: [0,15]},
                reverseAnimation : {duration : 1200, easing : 'easeOutExpo'}
            },
            overlay : {
                translation : {x: 0, y: 8, z: 0},
                reverseAnimation : {duration : 600, easing : 'easeOutExpo'}
            },
            caption : {
                translation : {x: 10, y: -15, z: 0},
                reverseAnimation : {duration : 900, easing : 'easeOutExpo'}
            },
            shine : {
                translation : {x: 50, y: 50, z: 0},
                reverseAnimation : {duration : 1200, easing : 'easeOutExpo'}
            }
        }
    },
    {
        movement: {
            lines : {
                translation : {x: -5, y: 5, z: 0},
                reverseAnimation : {duration : 1000, easing : 'easeOutExpo'}
            },
            caption : {
                translation : {x: 15, y: 15, z: 0},
                rotation : {x: 0, y: 0, z: 3},
                reverseAnimation : {duration : 1500, easing : 'easeOutElastic', elasticity : 700}
            },
            overlay : {
                translation : {x: 15, y: -15, z: 0},
                reverseAnimation : {duration : 500,easing : 'easeOutExpo'}
            },
            shine : {
                translation : {x: 50, y: 50, z: 0},
                reverseAnimation : {duration : 500, easing : 'easeOutExpo'}
            }
        }
    },
    {
        movement: {
            imgWrapper : {
                translation : {x: 5, y: 5, z: 0},
                reverseAnimation : {duration : 800, easing : 'easeOutQuart'}
            },
            caption : {
                translation : {x: 10, y: 10, z: [0,50]},
                reverseAnimation : {duration : 1000, easing : 'easeOutQuart'}
            },
            shine : {
                translation : {x: 50, y: 50, z: 0},
                reverseAnimation : {duration : 800, easing : 'easeOutQuart'}
            }
        }
    },
    {
        movement: {
            lines : {
                translation : {x: 40, y: 40, z: 0},
                reverseAnimation : {duration : 1500, easing : 'easeOutElastic'}
            },
            caption : {
                translation : {x: 20, y: 20, z: 0},
                rotation : {x: 0, y: 0, z: -5},
                reverseAnimation : {duration : 1000, easing : 'easeOutExpo'}
            },
            overlay : {
                translation : {x: -30, y: -30, z: 0},
                rotation : {x: 0, y: 0, z: 3},
                reverseAnimation : {duration : 750, easing : 'easeOutExpo'}
            },
            shine : {
                translation : {x: 100, y: 100, z: 0},
                reverseAnimation : {duration : 750, easing : 'easeOutExpo'}
            }
        }
    }];

    function init() {
        var idx = 0;
        [].slice.call(document.querySelectorAll('a.tilter')).forEach(function(el, pos) { 
            idx = pos%2 === 0 ? idx+1 : idx;
            new TiltFx(el, tiltSettings[idx-1]);
        });
    }
    init();
    
})();
;/* turn.js 4.1.0 | Copyright (c) 2012 Emmanuel Garcia | turnjs.com | turnjs.com/license.txt */

(function(f){function J(a,b,c){if(!c[0]||"object"==typeof c[0])return b.init.apply(a,c);if(b[c[0]])return b[c[0]].apply(a,Array.prototype.slice.call(c,1));throw q(c[0]+" is not a method or property");}function l(a,b,c,d){return{css:{position:"absolute",top:a,left:b,overflow:d||"hidden",zIndex:c||"auto"}}}function S(a,b,c,d,e){var h=1-e,f=h*h*h,g=e*e*e;return j(Math.round(f*a.x+3*e*h*h*b.x+3*e*e*h*c.x+g*d.x),Math.round(f*a.y+3*e*h*h*b.y+3*e*e*h*c.y+g*d.y))}function j(a,b){return{x:a,y:b}}function F(a,
b,c){return z&&c?" translate3d("+a+"px,"+b+"px, 0px) ":" translate("+a+"px, "+b+"px) "}function G(a){return" rotate("+a+"deg) "}function n(a,b){return Object.prototype.hasOwnProperty.call(b,a)}function T(){for(var a=["Moz","Webkit","Khtml","O","ms"],b=a.length,c="";b--;)a[b]+"Transform"in document.body.style&&(c="-"+a[b].toLowerCase()+"-");return c}function P(a,b,c,d,e){var h,f=[];if("-webkit-"==w){for(h=0;h<e;h++)f.push("color-stop("+d[h][0]+", "+d[h][1]+")");a.css({"background-image":"-webkit-gradient(linear, "+
b.x+"% "+b.y+"%,"+c.x+"% "+c.y+"%, "+f.join(",")+" )"})}else{var b={x:b.x/100*a.width(),y:b.y/100*a.height()},c={x:c.x/100*a.width(),y:c.y/100*a.height()},g=c.x-b.x;h=c.y-b.y;var i=Math.atan2(h,g),x=i-Math.PI/2,x=Math.abs(a.width()*Math.sin(x))+Math.abs(a.height()*Math.cos(x)),g=Math.sqrt(h*h+g*g),c=j(c.x<b.x?a.width():0,c.y<b.y?a.height():0),k=Math.tan(i);h=-1/k;k=(h*c.x-c.y-k*b.x+b.y)/(h-k);c=h*k-h*c.x+c.y;b=Math.sqrt(Math.pow(k-b.x,2)+Math.pow(c-b.y,2));for(h=0;h<e;h++)f.push(" "+d[h][1]+" "+100*
(b+g*d[h][0])/x+"%");a.css({"background-image":w+"linear-gradient("+-i+"rad,"+f.join(",")+")"})}}function t(a,b,c){a=f.Event(a);b.trigger(a,c);return a.isDefaultPrevented()?"prevented":a.isPropagationStopped()?"stopped":""}function q(a){function b(a){this.name="TurnJsError";this.message=a}b.prototype=Error();b.prototype.constructor=b;return new b(a)}function D(a){var b={top:0,left:0};do b.left+=a.offsetLeft,b.top+=a.offsetTop;while(a=a.offsetParent);return b}var z,U,w="",K=Math.PI,L=K/2,u="ontouchstart"in
window,r=u?{down:"touchstart",move:"touchmove",up:"touchend",over:"touchstart",out:"touchend"}:{down:"mousedown",move:"mousemove",up:"mouseup",over:"mouseover",out:"mouseout"},p={backward:["bl","tl"],forward:["br","tr"],all:"tl bl tr br l r".split(" ")},V=["single","double"],W=["ltr","rtl"],X={acceleration:!0,display:"double",duration:600,page:1,gradients:!0,turnCorners:"bl,br",when:null},Y={cornerSize:100},g={init:function(a){z="WebKitCSSMatrix"in window||"MozPerspective"in document.body.style;var b;
U=(b=/AppleWebkit\/([0-9\.]+)/i.exec(navigator.userAgent))?534.3<parseFloat(b[1]):!0;w=T();var c;b=0;var d=this.data(),e=this.children(),a=f.extend({width:this.width(),height:this.height(),direction:this.attr("dir")||this.css("direction")||"ltr"},X,a);d.opts=a;d.pageObjs={};d.pages={};d.pageWrap={};d.pageZoom={};d.pagePlace={};d.pageMv=[];d.zoom=1;d.totalPages=a.pages||0;d.eventHandlers={touchStart:f.proxy(g._touchStart,this),touchMove:f.proxy(g._touchMove,this),touchEnd:f.proxy(g._touchEnd,this),
start:f.proxy(g._eventStart,this)};if(a.when)for(c in a.when)n(c,a.when)&&this.bind(c,a.when[c]);this.css({position:"relative",width:a.width,height:a.height});this.turn("display",a.display);""!==a.direction&&this.turn("direction",a.direction);z&&(!u&&a.acceleration)&&this.transform(F(0,0,!0));for(c=0;c<e.length;c++)"1"!=f(e[c]).attr("ignore")&&this.turn("addPage",e[c],++b);f(this).bind(r.down,d.eventHandlers.touchStart).bind("end",g._eventEnd).bind("pressed",g._eventPressed).bind("released",g._eventReleased).bind("flip",
g._flip);f(this).parent().bind("start",d.eventHandlers.start);f(document).bind(r.move,d.eventHandlers.touchMove).bind(r.up,d.eventHandlers.touchEnd);this.turn("page",a.page);d.done=!0;return this},addPage:function(a,b){var c,d=!1,e=this.data(),h=e.totalPages+1;if(e.destroying)return!1;if(c=/\bp([0-9]+)\b/.exec(f(a).attr("class")))b=parseInt(c[1],10);if(b)if(b==h)d=!0;else{if(b>h)throw q('Page "'+b+'" cannot be inserted');}else b=h,d=!0;1<=b&&b<=h&&(c="double"==e.display?b%2?" odd":" even":"",e.done&&
this.turn("stop"),b in e.pageObjs&&g._movePages.call(this,b,1),d&&(e.totalPages=h),e.pageObjs[b]=f(a).css({"float":"left"}).addClass("page p"+b+c),-1!=navigator.userAgent.indexOf("MSIE 9.0")&&e.pageObjs[b].hasClass("hard")&&e.pageObjs[b].removeClass("hard"),g._addPage.call(this,b),g._removeFromDOM.call(this));return this},_addPage:function(a){var b=this.data(),c=b.pageObjs[a];if(c)if(g._necessPage.call(this,a)){if(!b.pageWrap[a]){b.pageWrap[a]=f("<div/>",{"class":"page-wrapper",page:a,css:{position:"absolute",
overflow:"hidden"}});this.append(b.pageWrap[a]);b.pagePlace[a]||(b.pagePlace[a]=a,b.pageObjs[a].appendTo(b.pageWrap[a]));var d=g._pageSize.call(this,a,!0);c.css({width:d.width,height:d.height});b.pageWrap[a].css(d)}b.pagePlace[a]==a&&g._makeFlip.call(this,a)}else b.pagePlace[a]=0,b.pageObjs[a]&&b.pageObjs[a].remove()},hasPage:function(a){return n(a,this.data().pageObjs)},center:function(a){var b=this.data(),c=f(this).turn("size"),d=0;b.noCenter||("double"==b.display&&(a=this.turn("view",a||b.tpage||
b.page),"ltr"==b.direction?a[0]?a[1]||(d+=c.width/4):d-=c.width/4:a[0]?a[1]||(d-=c.width/4):d+=c.width/4),f(this).css({marginLeft:d}));return this},destroy:function(){var a=this,b=this.data(),c="end first flip last pressed released start turning turned zooming missing".split(" ");if("prevented"!=t("destroying",this)){b.destroying=!0;f.each(c,function(b,c){a.unbind(c)});this.parent().unbind("start",b.eventHandlers.start);for(f(document).unbind(r.move,b.eventHandlers.touchMove).unbind(r.up,b.eventHandlers.touchEnd);0!==
b.totalPages;)this.turn("removePage",b.totalPages);b.fparent&&b.fparent.remove();b.shadow&&b.shadow.remove();this.removeData();b=null;return this}},is:function(){return"object"==typeof this.data().pages},zoom:function(a){var b=this.data();if("number"==typeof a){if(0.0010>a||100<a)throw q(a+" is not a value for zoom");if("prevented"==t("zooming",this,[a,b.zoom]))return this;var c=this.turn("size"),d=this.turn("view"),e=1/b.zoom,h=Math.round(c.width*e*a),c=Math.round(c.height*e*a);b.zoom=a;f(this).turn("stop").turn("size",
h,c);b.opts.autoCenter&&this.turn("center");g._updateShadow.call(this);for(a=0;a<d.length;a++)d[a]&&b.pageZoom[d[a]]!=b.zoom&&(this.trigger("zoomed",[d[a],d,b.pageZoom[d[a]],b.zoom]),b.pageZoom[d[a]]=b.zoom);return this}return b.zoom},_pageSize:function(a,b){var c=this.data(),d={};if("single"==c.display)d.width=this.width(),d.height=this.height(),b&&(d.top=0,d.left=0,d.right="auto");else{var e=this.width()/2,h=this.height();c.pageObjs[a].hasClass("own-size")?(d.width=c.pageObjs[a].width(),d.height=
c.pageObjs[a].height()):(d.width=e,d.height=h);if(b){var f=a%2;d.top=(h-d.height)/2;"ltr"==c.direction?(d[f?"right":"left"]=e-d.width,d[f?"left":"right"]="auto"):(d[f?"left":"right"]=e-d.width,d[f?"right":"left"]="auto")}}return d},_makeFlip:function(a){var b=this.data();if(!b.pages[a]&&b.pagePlace[a]==a){var c="single"==b.display,d=a%2;b.pages[a]=b.pageObjs[a].css(g._pageSize.call(this,a)).flip({page:a,next:d||c?a+1:a-1,turn:this}).flip("disable",b.disabled);g._setPageLoc.call(this,a);b.pageZoom[a]=
b.zoom}return b.pages[a]},_makeRange:function(){var a,b;if(!(1>this.data().totalPages)){b=this.turn("range");for(a=b[0];a<=b[1];a++)g._addPage.call(this,a)}},range:function(a){var b,c,d,e=this.data(),a=a||e.tpage||e.page||1;d=g._view.call(this,a);if(1>a||a>e.totalPages)throw q('"'+a+'" is not a valid page');d[1]=d[1]||d[0];1<=d[0]&&d[1]<=e.totalPages?(a=Math.floor(2),e.totalPages-d[1]>d[0]?(b=Math.min(d[0]-1,a),c=2*a-b):(c=Math.min(e.totalPages-d[1],a),b=2*a-c)):c=b=5;return[Math.max(1,d[0]-b),Math.min(e.totalPages,
d[1]+c)]},_necessPage:function(a){if(0===a)return!0;var b=this.turn("range");return this.data().pageObjs[a].hasClass("fixed")||a>=b[0]&&a<=b[1]},_removeFromDOM:function(){var a,b=this.data();for(a in b.pageWrap)n(a,b.pageWrap)&&!g._necessPage.call(this,a)&&g._removePageFromDOM.call(this,a)},_removePageFromDOM:function(a){var b=this.data();if(b.pages[a]){var c=b.pages[a].data();i._moveFoldingPage.call(b.pages[a],!1);c.f&&c.f.fwrapper&&c.f.fwrapper.remove();b.pages[a].removeData();b.pages[a].remove();
delete b.pages[a]}b.pageObjs[a]&&b.pageObjs[a].remove();b.pageWrap[a]&&(b.pageWrap[a].remove(),delete b.pageWrap[a]);g._removeMv.call(this,a);delete b.pagePlace[a];delete b.pageZoom[a]},removePage:function(a){var b=this.data();if("*"==a)for(;0!==b.totalPages;)this.turn("removePage",b.totalPages);else{if(1>a||a>b.totalPages)throw q("The page "+a+" doesn't exist");b.pageObjs[a]&&(this.turn("stop"),g._removePageFromDOM.call(this,a),delete b.pageObjs[a]);g._movePages.call(this,a,-1);b.totalPages-=1;b.page>
b.totalPages?(b.page=null,g._fitPage.call(this,b.totalPages)):(g._makeRange.call(this),this.turn("update"))}return this},_movePages:function(a,b){var c,d=this,e=this.data(),h="single"==e.display,f=function(a){var c=a+b,f=c%2,i=f?" odd ":" even ";e.pageObjs[a]&&(e.pageObjs[c]=e.pageObjs[a].removeClass("p"+a+" odd even").addClass("p"+c+i));e.pagePlace[a]&&e.pageWrap[a]&&(e.pagePlace[c]=c,e.pageWrap[c]=e.pageObjs[c].hasClass("fixed")?e.pageWrap[a].attr("page",c):e.pageWrap[a].css(g._pageSize.call(d,
c,!0)).attr("page",c),e.pages[a]&&(e.pages[c]=e.pages[a].flip("options",{page:c,next:h||f?c+1:c-1})),b&&(delete e.pages[a],delete e.pagePlace[a],delete e.pageZoom[a],delete e.pageObjs[a],delete e.pageWrap[a]))};if(0<b)for(c=e.totalPages;c>=a;c--)f(c);else for(c=a;c<=e.totalPages;c++)f(c)},display:function(a){var b=this.data(),c=b.display;if(void 0===a)return c;if(-1==f.inArray(a,V))throw q('"'+a+'" is not a value for display');switch(a){case "single":b.pageObjs[0]||(this.turn("stop").css({overflow:"hidden"}),
b.pageObjs[0]=f("<div />",{"class":"page p-temporal"}).css({width:this.width(),height:this.height()}).appendTo(this));this.addClass("shadow");break;case "double":b.pageObjs[0]&&(this.turn("stop").css({overflow:""}),b.pageObjs[0].remove(),delete b.pageObjs[0]),this.removeClass("shadow")}b.display=a;c&&(a=this.turn("size"),g._movePages.call(this,1,0),this.turn("size",a.width,a.height).turn("update"));return this},direction:function(a){var b=this.data();if(void 0===a)return b.direction;a=a.toLowerCase();
if(-1==f.inArray(a,W))throw q('"'+a+'" is not a value for direction');"rtl"==a&&f(this).attr("dir","ltr").css({direction:"ltr"});b.direction=a;b.done&&this.turn("size",f(this).width(),f(this).height());return this},animating:function(){return 0<this.data().pageMv.length},corner:function(){var a,b,c=this.data();for(b in c.pages)if(n(b,c.pages)&&(a=c.pages[b].flip("corner")))return a;return!1},data:function(){return this.data()},disable:function(a){var b,c=this.data(),d=this.turn("view");c.disabled=
void 0===a||!0===a;for(b in c.pages)n(b,c.pages)&&c.pages[b].flip("disable",c.disabled?!0:-1==f.inArray(parseInt(b,10),d));return this},disabled:function(a){return void 0===a?!0===this.data().disabled:this.turn("disable",a)},size:function(a,b){if(void 0===a||void 0===b)return{width:this.width(),height:this.height()};this.turn("stop");var c,d,e=this.data();d="double"==e.display?a/2:a;this.css({width:a,height:b});e.pageObjs[0]&&e.pageObjs[0].css({width:d,height:b});for(c in e.pageWrap)n(c,e.pageWrap)&&
(d=g._pageSize.call(this,c,!0),e.pageObjs[c].css({width:d.width,height:d.height}),e.pageWrap[c].css(d),e.pages[c]&&e.pages[c].css({width:d.width,height:d.height}));this.turn("resize");return this},resize:function(){var a,b=this.data();b.pages[0]&&(b.pageWrap[0].css({left:-this.width()}),b.pages[0].flip("resize",!0));for(a=1;a<=b.totalPages;a++)b.pages[a]&&b.pages[a].flip("resize",!0);g._updateShadow.call(this);b.opts.autoCenter&&this.turn("center")},_removeMv:function(a){var b,c=this.data();for(b=
0;b<c.pageMv.length;b++)if(c.pageMv[b]==a)return c.pageMv.splice(b,1),!0;return!1},_addMv:function(a){var b=this.data();g._removeMv.call(this,a);b.pageMv.push(a)},_view:function(a){var b=this.data(),a=a||b.page;return"double"==b.display?a%2?[a-1,a]:[a,a+1]:[a]},view:function(a){var b=this.data(),a=g._view.call(this,a);return"double"==b.display?[0<a[0]?a[0]:0,a[1]<=b.totalPages?a[1]:0]:[0<a[0]&&a[0]<=b.totalPages?a[0]:0]},stop:function(a,b){if(this.turn("animating")){var c,d,e,h=this.data();h.tpage&&
(h.page=h.tpage,delete h.tpage);for(c=0;c<h.pageMv.length;c++)h.pageMv[c]&&h.pageMv[c]!==a&&(e=h.pages[h.pageMv[c]],d=e.data().f.opts,e.flip("hideFoldedPage",b),b||i._moveFoldingPage.call(e,!1),d.force&&(d.next=0===d.page%2?d.page-1:d.page+1,delete d.force))}this.turn("update");return this},pages:function(a){var b=this.data();if(a){if(a<b.totalPages)for(var c=b.totalPages;c>a;c--)this.turn("removePage",c);b.totalPages=a;g._fitPage.call(this,b.page);return this}return b.totalPages},_missing:function(a){var b=
this.data();if(!(1>b.totalPages)){for(var c=this.turn("range",a),d=[],a=c[0];a<=c[1];a++)b.pageObjs[a]||d.push(a);0<d.length&&this.trigger("missing",[d])}},_fitPage:function(a){var b=this.data(),c=this.turn("view",a);g._missing.call(this,a);if(b.pageObjs[a]){b.page=a;this.turn("stop");for(var d=0;d<c.length;d++)c[d]&&b.pageZoom[c[d]]!=b.zoom&&(this.trigger("zoomed",[c[d],c,b.pageZoom[c[d]],b.zoom]),b.pageZoom[c[d]]=b.zoom);g._removeFromDOM.call(this);g._makeRange.call(this);g._updateShadow.call(this);
this.trigger("turned",[a,c]);this.turn("update");b.opts.autoCenter&&this.turn("center")}},_turnPage:function(a){var b,c,d=this.data(),e=d.pagePlace[a],h=this.turn("view"),i=this.turn("view",a);if(d.page!=a){var j=d.page;if("prevented"==t("turning",this,[a,i])){j==d.page&&-1!=f.inArray(e,d.pageMv)&&d.pages[e].flip("hideFoldedPage",!0);return}-1!=f.inArray(1,i)&&this.trigger("first");-1!=f.inArray(d.totalPages,i)&&this.trigger("last")}"single"==d.display?(b=h[0],c=i[0]):h[1]&&a>h[1]?(b=h[1],c=i[0]):
h[0]&&a<h[0]&&(b=h[0],c=i[1]);e=d.opts.turnCorners.split(",");h=d.pages[b].data().f;i=h.opts;j=h.point;g._missing.call(this,a);d.pageObjs[a]&&(this.turn("stop"),d.page=a,g._makeRange.call(this),d.tpage=c,i.next!=c&&(i.next=c,i.force=!0),this.turn("update"),h.point=j,"hard"==h.effect?"ltr"==d.direction?d.pages[b].flip("turnPage",a>b?"r":"l"):d.pages[b].flip("turnPage",a>b?"l":"r"):"ltr"==d.direction?d.pages[b].flip("turnPage",e[a>b?1:0]):d.pages[b].flip("turnPage",e[a>b?0:1]))},page:function(a){var b=
this.data();if(void 0===a)return b.page;if(!b.disabled&&!b.destroying){a=parseInt(a,10);if(0<a&&a<=b.totalPages)return a!=b.page&&(!b.done||-1!=f.inArray(a,this.turn("view"))?g._fitPage.call(this,a):g._turnPage.call(this,a)),this;throw q("The page "+a+" does not exist");}},next:function(){return this.turn("page",Math.min(this.data().totalPages,g._view.call(this,this.data().page).pop()+1))},previous:function(){return this.turn("page",Math.max(1,g._view.call(this,this.data().page).shift()-1))},peel:function(a,
b){var c=this.data(),d=this.turn("view"),b=void 0===b?!0:!0===b;!1===a?this.turn("stop",null,b):"single"==c.display?c.pages[c.page].flip("peel",a,b):(d="ltr"==c.direction?-1!=a.indexOf("l")?d[0]:d[1]:-1!=a.indexOf("l")?d[1]:d[0],c.pages[d]&&c.pages[d].flip("peel",a,b));return this},_addMotionPage:function(){var a=f(this).data().f.opts,b=a.turn;b.data();g._addMv.call(b,a.page)},_eventStart:function(a,b,c){var d=b.turn.data(),e=d.pageZoom[b.page];a.isDefaultPrevented()||(e&&e!=d.zoom&&(b.turn.trigger("zoomed",
[b.page,b.turn.turn("view",b.page),e,d.zoom]),d.pageZoom[b.page]=d.zoom),"single"==d.display&&c&&("l"==c.charAt(1)&&"ltr"==d.direction||"r"==c.charAt(1)&&"rtl"==d.direction?(b.next=b.next<b.page?b.next:b.page-1,b.force=!0):b.next=b.next>b.page?b.next:b.page+1),g._addMotionPage.call(a.target));g._updateShadow.call(b.turn)},_eventEnd:function(a,b,c){f(a.target).data();var a=b.turn,d=a.data();if(c){if(c=d.tpage||d.page,c==b.next||c==b.page)delete d.tpage,g._fitPage.call(a,c||b.next,!0)}else g._removeMv.call(a,
b.page),g._updateShadow.call(a),a.turn("update")},_eventPressed:function(a){var a=f(a.target).data().f,b=a.opts.turn;b.data().mouseAction=!0;b.turn("update");return a.time=(new Date).getTime()},_eventReleased:function(a,b){var c;c=f(a.target);var d=c.data().f,e=d.opts.turn,h=e.data();c="single"==h.display?"br"==b.corner||"tr"==b.corner?b.x<c.width()/2:b.x>c.width()/2:0>b.x||b.x>c.width();if(200>(new Date).getTime()-d.time||c)a.preventDefault(),g._turnPage.call(e,d.opts.next);h.mouseAction=!1},_flip:function(a){a.stopPropagation();
a=f(a.target).data().f.opts;a.turn.trigger("turn",[a.next]);a.turn.data().opts.autoCenter&&a.turn.turn("center",a.next)},_touchStart:function(){var a=this.data(),b;for(b in a.pages)if(n(b,a.pages)&&!1===i._eventStart.apply(a.pages[b],arguments))return!1},_touchMove:function(){var a=this.data(),b;for(b in a.pages)n(b,a.pages)&&i._eventMove.apply(a.pages[b],arguments)},_touchEnd:function(){var a=this.data(),b;for(b in a.pages)n(b,a.pages)&&i._eventEnd.apply(a.pages[b],arguments)},calculateZ:function(a){var b,
c,d,e,h=this,f=this.data();b=this.turn("view");var i=b[0]||b[1],g=a.length-1,j={pageZ:{},partZ:{},pageV:{}},k=function(a){a=h.turn("view",a);a[0]&&(j.pageV[a[0]]=!0);a[1]&&(j.pageV[a[1]]=!0)};for(b=0;b<=g;b++)c=a[b],d=f.pages[c].data().f.opts.next,e=f.pagePlace[c],k(c),k(d),c=f.pagePlace[d]==d?d:c,j.pageZ[c]=f.totalPages-Math.abs(i-c),j.partZ[e]=2*f.totalPages-g+b;return j},update:function(){var a,b=this.data();if(this.turn("animating")&&0!==b.pageMv[0]){var c,d=this.turn("calculateZ",b.pageMv),e=
this.turn("corner"),h=this.turn("view"),i=this.turn("view",b.tpage);for(a in b.pageWrap)if(n(a,b.pageWrap)&&(c=b.pageObjs[a].hasClass("fixed"),b.pageWrap[a].css({display:d.pageV[a]||c?"":"none",zIndex:(b.pageObjs[a].hasClass("hard")?d.partZ[a]:d.pageZ[a])||(c?-1:0)}),c=b.pages[a]))c.flip("z",d.partZ[a]||null),d.pageV[a]&&c.flip("resize"),b.tpage?c.flip("hover",!1).flip("disable",-1==f.inArray(parseInt(a,10),b.pageMv)&&a!=i[0]&&a!=i[1]):c.flip("hover",!1===e).flip("disable",a!=h[0]&&a!=h[1])}else for(a in b.pageWrap)n(a,
b.pageWrap)&&(d=g._setPageLoc.call(this,a),b.pages[a]&&b.pages[a].flip("disable",b.disabled||1!=d).flip("hover",!0).flip("z",null));return this},_updateShadow:function(){var a,b,c=this.data(),d=this.width(),e=this.height(),h="single"==c.display?d:d/2;a=this.turn("view");c.shadow||(c.shadow=f("<div />",{"class":"shadow",css:l(0,0,0).css}).appendTo(this));for(var i=0;i<c.pageMv.length&&a[0]&&a[1];i++)a=this.turn("view",c.pages[c.pageMv[i]].data().f.opts.next),b=this.turn("view",c.pageMv[i]),a[0]=a[0]&&
b[0],a[1]=a[1]&&b[1];switch(a[0]?a[1]?3:"ltr"==c.direction?2:1:"ltr"==c.direction?1:2){case 1:c.shadow.css({width:h,height:e,top:0,left:h});break;case 2:c.shadow.css({width:h,height:e,top:0,left:0});break;case 3:c.shadow.css({width:d,height:e,top:0,left:0})}},_setPageLoc:function(a){var b=this.data(),c=this.turn("view"),d=0;if(a==c[0]||a==c[1])d=1;else if("single"==b.display&&a==c[0]+1||"double"==b.display&&a==c[0]-2||a==c[1]+2)d=2;if(!this.turn("animating"))switch(d){case 1:b.pageWrap[a].css({zIndex:b.totalPages,
display:""});break;case 2:b.pageWrap[a].css({zIndex:b.totalPages-1,display:""});break;case 0:b.pageWrap[a].css({zIndex:0,display:b.pageObjs[a].hasClass("fixed")?"":"none"})}return d},options:function(a){if(void 0===a)return this.data().opts;var b=this.data();f.extend(b.opts,a);a.pages&&this.turn("pages",a.pages);a.page&&this.turn("page",a.page);a.display&&this.turn("display",a.display);a.direction&&this.turn("direction",a.direction);a.width&&a.height&&this.turn("size",a.width,a.height);if(a.when)for(var c in a.when)n(c,
a.when)&&this.unbind(c).bind(c,a.when[c]);return this},version:function(){return"4.1.0"}},i={init:function(a){this.data({f:{disabled:!1,hover:!1,effect:this.hasClass("hard")?"hard":"sheet"}});this.flip("options",a);i._addPageWrapper.call(this);return this},setData:function(a){var b=this.data();b.f=f.extend(b.f,a);return this},options:function(a){var b=this.data().f;return a?(i.setData.call(this,{opts:f.extend({},b.opts||Y,a)}),this):b.opts},z:function(a){var b=this.data().f;b.opts["z-index"]=a;b.fwrapper&&
b.fwrapper.css({zIndex:a||parseInt(b.parent.css("z-index"),10)||0});return this},_cAllowed:function(){var a=this.data().f,b=a.opts.page,c=a.opts.turn.data(),d=b%2;return"hard"==a.effect?"ltr"==c.direction?[d?"r":"l"]:[d?"l":"r"]:"single"==c.display?1==b?"ltr"==c.direction?p.forward:p.backward:b==c.totalPages?"ltr"==c.direction?p.backward:p.forward:p.all:"ltr"==c.direction?p[d?"forward":"backward"]:p[d?"backward":"forward"]},_cornerActivated:function(a){var b=this.data().f,c=this.width(),d=this.height(),
a={x:a.x,y:a.y,corner:""},e=b.opts.cornerSize;if(0>=a.x||0>=a.y||a.x>=c||a.y>=d)return!1;var h=i._cAllowed.call(this);switch(b.effect){case "hard":if(a.x>c-e)a.corner="r";else if(a.x<e)a.corner="l";else return!1;break;case "sheet":if(a.y<e)a.corner+="t";else if(a.y>=d-e)a.corner+="b";else return!1;if(a.x<=e)a.corner+="l";else if(a.x>=c-e)a.corner+="r";else return!1}return!a.corner||-1==f.inArray(a.corner,h)?!1:a},_isIArea:function(a){var b=this.data().f.parent.offset(),a=u&&a.originalEvent?a.originalEvent.touches[0]:
a;return i._cornerActivated.call(this,{x:a.pageX-b.left,y:a.pageY-b.top})},_c:function(a,b){b=b||0;switch(a){case "tl":return j(b,b);case "tr":return j(this.width()-b,b);case "bl":return j(b,this.height()-b);case "br":return j(this.width()-b,this.height()-b);case "l":return j(b,0);case "r":return j(this.width()-b,0)}},_c2:function(a){switch(a){case "tl":return j(2*this.width(),0);case "tr":return j(-this.width(),0);case "bl":return j(2*this.width(),this.height());case "br":return j(-this.width(),
this.height());case "l":return j(2*this.width(),0);case "r":return j(-this.width(),0)}},_foldingPage:function(){var a=this.data().f;if(a){var b=a.opts;if(b.turn)return a=b.turn.data(),"single"==a.display?1<b.next||1<b.page?a.pageObjs[0]:null:a.pageObjs[b.next]}},_backGradient:function(){var a=this.data().f,b=a.opts.turn.data();if((b=b.opts.gradients&&("single"==b.display||2!=a.opts.page&&a.opts.page!=b.totalPages-1))&&!a.bshadow)a.bshadow=f("<div/>",l(0,0,1)).css({position:"",width:this.width(),height:this.height()}).appendTo(a.parent);
return b},type:function(){return this.data().f.effect},resize:function(a){var b=this.data().f,c=b.opts.turn.data(),d=this.width(),e=this.height();switch(b.effect){case "hard":a&&(b.wrapper.css({width:d,height:e}),b.fpage.css({width:d,height:e}),c.opts.gradients&&(b.ashadow.css({width:d,height:e}),b.bshadow.css({width:d,height:e})));break;case "sheet":a&&(a=Math.round(Math.sqrt(Math.pow(d,2)+Math.pow(e,2))),b.wrapper.css({width:a,height:a}),b.fwrapper.css({width:a,height:a}).children(":first-child").css({width:d,
height:e}),b.fpage.css({width:d,height:e}),c.opts.gradients&&b.ashadow.css({width:d,height:e}),i._backGradient.call(this)&&b.bshadow.css({width:d,height:e})),b.parent.is(":visible")&&(c=D(b.parent[0]),b.fwrapper.css({top:c.top,left:c.left}),c=D(b.opts.turn[0]),b.fparent.css({top:-c.top,left:-c.left})),this.flip("z",b.opts["z-index"])}},_addPageWrapper:function(){var a=this.data().f,b=a.opts.turn.data(),c=this.parent();a.parent=c;if(!a.wrapper)switch(a.effect){case "hard":var d={};d[w+"transform-style"]=
"preserve-3d";d[w+"backface-visibility"]="hidden";a.wrapper=f("<div/>",l(0,0,2)).css(d).appendTo(c).prepend(this);a.fpage=f("<div/>",l(0,0,1)).css(d).appendTo(c);b.opts.gradients&&(a.ashadow=f("<div/>",l(0,0,0)).hide().appendTo(c),a.bshadow=f("<div/>",l(0,0,0)));break;case "sheet":var d=this.width(),e=this.height();Math.round(Math.sqrt(Math.pow(d,2)+Math.pow(e,2)));a.fparent=a.opts.turn.data().fparent;a.fparent||(d=f("<div/>",{css:{"pointer-events":"none"}}).hide(),d.data().flips=0,d.css(l(0,0,"auto",
"visible").css).appendTo(a.opts.turn),a.opts.turn.data().fparent=d,a.fparent=d);this.css({position:"absolute",top:0,left:0,bottom:"auto",right:"auto"});a.wrapper=f("<div/>",l(0,0,this.css("z-index"))).appendTo(c).prepend(this);a.fwrapper=f("<div/>",l(c.offset().top,c.offset().left)).hide().appendTo(a.fparent);a.fpage=f("<div/>",l(0,0,0,"visible")).css({cursor:"default"}).appendTo(a.fwrapper);b.opts.gradients&&(a.ashadow=f("<div/>",l(0,0,1)).appendTo(a.fpage));i.setData.call(this,a)}i.resize.call(this,
!0)},_fold:function(a){var b=this.data().f,c=b.opts.turn.data(),d=i._c.call(this,a.corner),e=this.width(),h=this.height();switch(b.effect){case "hard":a.x="l"==a.corner?Math.min(Math.max(a.x,0),2*e):Math.max(Math.min(a.x,e),-e);var f,g,s,x,k,n=c.totalPages,l=b.opts["z-index"]||n,q={overflow:"visible"},p=d.x?(d.x-a.x)/e:a.x/e,r=90*p,t=90>r;switch(a.corner){case "l":x="0% 50%";k="100% 50%";t?(f=0,g=0<b.opts.next-1,s=1):(f="100%",g=b.opts.page+1<n,s=0);break;case "r":x="100% 50%",k="0% 50%",r=-r,e=-e,
t?(f=0,g=b.opts.next+1<n,s=0):(f="-100%",g=1!=b.opts.page,s=1)}q[w+"perspective-origin"]=k;b.wrapper.transform("rotateY("+r+"deg)translate3d(0px, 0px, "+(this.attr("depth")||0)+"px)",k);b.fpage.transform("translateX("+e+"px) rotateY("+(180+r)+"deg)",x);b.parent.css(q);t?(p=-p+1,b.wrapper.css({zIndex:l+1}),b.fpage.css({zIndex:l})):(p-=1,b.wrapper.css({zIndex:l}),b.fpage.css({zIndex:l+1}));c.opts.gradients&&(g?b.ashadow.css({display:"",left:f,backgroundColor:"rgba(0,0,0,"+0.5*p+")"}).transform("rotateY(0deg)"):
b.ashadow.hide(),b.bshadow.css({opacity:-p+1}),t?b.bshadow.parent()[0]!=b.wrapper[0]&&b.bshadow.appendTo(b.wrapper):b.bshadow.parent()[0]!=b.fpage[0]&&b.bshadow.appendTo(b.fpage),P(b.bshadow,j(100*s,0),j(100*(-s+1),0),[[0,"rgba(0,0,0,0.3)"],[1,"rgba(0,0,0,0)"]],2));break;case "sheet":var u=this,H=0,z,A,B,M,y,N,D,v=j(0,0),Q=j(0,0),m=j(0,0),J=i._foldingPage.call(this);Math.tan(0);var O=c.opts.acceleration,R=b.wrapper.height(),E="t"==a.corner.substr(0,1),C="l"==a.corner.substr(1,1),I=function(){var b=
j(0,0),f=j(0,0);b.x=d.x?d.x-a.x:a.x;b.y=U?d.y?d.y-a.y:a.y:0;f.x=C?e-b.x/2:a.x+b.x/2;f.y=b.y/2;var g=L-Math.atan2(b.y,b.x),k=g-Math.atan2(f.y,f.x),k=Math.max(0,Math.sin(k)*Math.sqrt(Math.pow(f.x,2)+Math.pow(f.y,2)));H=180*(g/K);m=j(k*Math.sin(g),k*Math.cos(g));if(g>L&&(m.x+=Math.abs(m.y*b.y/b.x),m.y=0,Math.round(m.x*Math.tan(K-g))<h))return a.y=Math.sqrt(Math.pow(h,2)+2*f.x*b.x),E&&(a.y=h-a.y),I();g>L&&(b=K-g,f=R-h/Math.sin(b),v=j(Math.round(f*Math.cos(b)),Math.round(f*Math.sin(b))),C&&(v.x=-v.x),
E&&(v.y=-v.y));z=Math.round(m.y/Math.tan(g)+m.x);b=e-z;f=b*Math.cos(2*g);k=b*Math.sin(2*g);Q=j(Math.round(C?b-f:z+f),Math.round(E?k:h-k));c.opts.gradients&&(y=b*Math.sin(g),b=i._c2.call(u,a.corner),b=Math.sqrt(Math.pow(b.x-a.x,2)+Math.pow(b.y-a.y,2))/e,D=Math.sin(L*(1<b?2-b:b)),N=Math.min(b,1),M=100<y?(y-100)/y:0,A=j(100*(y*Math.sin(g)/e),100*(y*Math.cos(g)/h)),i._backGradient.call(u)&&(B=j(100*(1.2*y*Math.sin(g)/e),100*(1.2*y*Math.cos(g)/h)),C||(B.x=100-B.x),E||(B.y=100-B.y)));m.x=Math.round(m.x);
m.y=Math.round(m.y);return!0};f=function(a,d,f,g){var k=["0","auto"],m=(e-R)*f[0]/100,l=(h-R)*f[1]/100,d={left:k[d[0]],top:k[d[1]],right:k[d[2]],bottom:k[d[3]]},k={},n=90!=g&&-90!=g?C?-1:1:0,s=f[0]+"% "+f[1]+"%";u.css(d).transform(G(g)+F(a.x+n,a.y,O),s);b.fpage.css(d).transform(G(g)+F(a.x+Q.x-v.x-e*f[0]/100,a.y+Q.y-v.y-h*f[1]/100,O)+G((180/g-2)*g),s);b.wrapper.transform(F(-a.x+m-n,-a.y+l,O)+G(-g),s);b.fwrapper.transform(F(-a.x+v.x+m,-a.y+v.y+l,O)+G(-g),s);c.opts.gradients&&(f[0]&&(A.x=100-A.x),f[1]&&
(A.y=100-A.y),k["box-shadow"]="0 0 20px rgba(0,0,0,"+0.5*D+")",J.css(k),P(b.ashadow,j(C?100:0,E?0:100),j(A.x,A.y),[[M,"rgba(0,0,0,0)"],[0.8*(1-M)+M,"rgba(0,0,0,"+0.2*N+")"],[1,"rgba(255,255,255,"+0.2*N+")"]],3,0),i._backGradient.call(u)&&P(b.bshadow,j(C?0:100,E?0:100),j(B.x,B.y),[[0.6,"rgba(0,0,0,0)"],[0.8,"rgba(0,0,0,"+0.3*N+")"],[1,"rgba(0,0,0,0)"]],3))};switch(a.corner){case "tl":a.x=Math.max(a.x,1);I();f(m,[1,0,0,1],[100,0],H);break;case "tr":a.x=Math.min(a.x,e-1);I();f(j(-m.x,m.y),[0,0,0,1],
[0,0],-H);break;case "bl":a.x=Math.max(a.x,1);I();f(j(m.x,-m.y),[1,1,0,0],[100,100],-H);break;case "br":a.x=Math.min(a.x,e-1),I(),f(j(-m.x,-m.y),[0,1,1,0],[0,100],H)}}b.point=a},_moveFoldingPage:function(a){var b=this.data().f;if(b){var c=b.opts.turn,d=c.data(),e=d.pagePlace;a?(d=b.opts.next,e[d]!=b.opts.page&&(b.folding&&i._moveFoldingPage.call(this,!1),i._foldingPage.call(this).appendTo(b.fpage),e[d]=b.opts.page,b.folding=d),c.turn("update")):b.folding&&(d.pages[b.folding]?(c=d.pages[b.folding].data().f,
d.pageObjs[b.folding].appendTo(c.wrapper)):d.pageWrap[b.folding]&&d.pageObjs[b.folding].appendTo(d.pageWrap[b.folding]),b.folding in e&&(e[b.folding]=b.folding),delete b.folding)}},_showFoldedPage:function(a,b){var c=i._foldingPage.call(this),d=this.data(),e=d.f,f=e.visible;if(c){if(!f||!e.point||e.point.corner!=a.corner)if(c="hover"==e.status||"peel"==e.status||e.opts.turn.data().mouseAction?a.corner:null,f=!1,"prevented"==t("start",this,[e.opts,c]))return!1;if(b){var g=this,d=e.point&&e.point.corner==
a.corner?e.point:i._c.call(this,a.corner,1);this.animatef({from:[d.x,d.y],to:[a.x,a.y],duration:500,frame:function(b){a.x=Math.round(b[0]);a.y=Math.round(b[1]);i._fold.call(g,a)}})}else i._fold.call(this,a),d.effect&&!d.effect.turning&&this.animatef(!1);if(!f)switch(e.effect){case "hard":e.visible=!0;i._moveFoldingPage.call(this,!0);e.fpage.show();e.opts.shadows&&e.bshadow.show();break;case "sheet":e.visible=!0,e.fparent.show().data().flips++,i._moveFoldingPage.call(this,!0),e.fwrapper.show(),e.bshadow&&
e.bshadow.show()}return!0}return!1},hide:function(){var a=this.data().f,b=a.opts.turn.data(),c=i._foldingPage.call(this);switch(a.effect){case "hard":b.opts.gradients&&(a.bshadowLoc=0,a.bshadow.remove(),a.ashadow.hide());a.wrapper.transform("");a.fpage.hide();break;case "sheet":0===--a.fparent.data().flips&&a.fparent.hide(),this.css({left:0,top:0,right:"auto",bottom:"auto"}).transform(""),a.wrapper.transform(""),a.fwrapper.hide(),a.bshadow&&a.bshadow.hide(),c.transform("")}a.visible=!1;return this},
hideFoldedPage:function(a){var b=this.data().f;if(b.point){var c=this,d=b.point,e=function(){b.point=null;b.status="";c.flip("hide");c.trigger("end",[b.opts,!1])};if(a){var f=i._c.call(this,d.corner),a="t"==d.corner.substr(0,1)?Math.min(0,d.y-f.y)/2:Math.max(0,d.y-f.y)/2,g=j(d.x,d.y+a),l=j(f.x,f.y-a);this.animatef({from:0,to:1,frame:function(a){a=S(d,g,l,f,a);d.x=a.x;d.y=a.y;i._fold.call(c,d)},complete:e,duration:800,hiding:!0})}else this.animatef(!1),e()}},turnPage:function(a){var b=this,c=this.data().f,
d=c.opts.turn.data(),a={corner:c.corner?c.corner.corner:a||i._cAllowed.call(this)[0]},e=c.point||i._c.call(this,a.corner,c.opts.turn?d.opts.elevation:0),f=i._c2.call(this,a.corner);this.trigger("flip").animatef({from:0,to:1,frame:function(c){c=S(e,e,f,f,c);a.x=c.x;a.y=c.y;i._showFoldedPage.call(b,a)},complete:function(){b.trigger("end",[c.opts,!0])},duration:d.opts.duration,turning:!0});c.corner=null},moving:function(){return"effect"in this.data()},isTurning:function(){return this.flip("moving")&&
this.data().effect.turning},corner:function(){return this.data().f.corner},_eventStart:function(a){var b=this.data().f,c=b.opts.turn;if(!b.corner&&!b.disabled&&!this.flip("isTurning")&&b.opts.page==c.data().pagePlace[b.opts.page]){b.corner=i._isIArea.call(this,a);if(b.corner&&i._foldingPage.call(this))return this.trigger("pressed",[b.point]),i._showFoldedPage.call(this,b.corner),!1;b.corner=null}},_eventMove:function(a){var b=this.data().f;if(!b.disabled)if(a=u?a.originalEvent.touches:[a],b.corner){var c=
b.parent.offset();b.corner.x=a[0].pageX-c.left;b.corner.y=a[0].pageY-c.top;i._showFoldedPage.call(this,b.corner)}else if(b.hover&&!this.data().effect&&this.is(":visible"))if(a=i._isIArea.call(this,a[0])){if("sheet"==b.effect&&2==a.corner.length||"hard"==b.effect)b.status="hover",b=i._c.call(this,a.corner,b.opts.cornerSize/2),a.x=b.x,a.y=b.y,i._showFoldedPage.call(this,a,!0)}else"hover"==b.status&&(b.status="",i.hideFoldedPage.call(this,!0))},_eventEnd:function(){var a=this.data().f,b=a.corner;!a.disabled&&
b&&"prevented"!=t("released",this,[a.point||b])&&i.hideFoldedPage.call(this,!0);a.corner=null},disable:function(a){i.setData.call(this,{disabled:a});return this},hover:function(a){i.setData.call(this,{hover:a});return this},peel:function(a,b){var c=this.data().f;if(a){if(-1==f.inArray(a,p.all))throw q("Corner "+a+" is not permitted");if(-1!=f.inArray(a,i._cAllowed.call(this))){var d=i._c.call(this,a,c.opts.cornerSize/2);c.status="peel";i._showFoldedPage.call(this,{corner:a,x:d.x,y:d.y},b)}}else c.status=
"",i.hideFoldedPage.call(this,b);return this}};window.requestAnim=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a){window.setTimeout(a,1E3/60)};f.extend(f.fn,{flip:function(){return J(f(this[0]),i,arguments)},turn:function(){return J(f(this[0]),g,arguments)},transform:function(a,b){var c={};b&&(c[w+"transform-origin"]=b);c[w+"transform"]=a;return this.css(c)},animatef:function(a){var b=
this.data();b.effect&&b.effect.stop();if(a){a.to.length||(a.to=[a.to]);a.from.length||(a.from=[a.from]);for(var c=[],d=a.to.length,e=!0,g=this,i=(new Date).getTime(),j=function(){if(b.effect&&e){for(var f=[],k=Math.min(a.duration,(new Date).getTime()-i),l=0;l<d;l++)f.push(b.effect.easing(1,k,a.from[l],c[l],a.duration));a.frame(1==d?f[0]:f);k==a.duration?(delete b.effect,g.data(b),a.complete&&a.complete()):window.requestAnim(j)}},l=0;l<d;l++)c.push(a.to[l]-a.from[l]);b.effect=f.extend({stop:function(){e=
!1},easing:function(a,b,c,d,e){return d*Math.sqrt(1-(b=b/e-1)*b)+c}},a);this.data(b);j()}else delete b.effect}});f.isTouch=u;f.mouseEvents=r;f.cssPrefix=T;f.cssTransitionEnd=function(){var a,b=document.createElement("fakeelement"),c={transition:"transitionend",OTransition:"oTransitionEnd",MSTransition:"transitionend",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(a in c)if(void 0!==b.style[a])return c[a]};f.findPos=D})(jQuery);

;/*! Copyright (c) 2013 Brandon Aaron (http://brandon.aaron.sh)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Version: 3.1.12
 *
 * Requires: jQuery 1.2.2+
 */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a:a(jQuery)}(function(a){function b(b){var g=b||window.event,h=i.call(arguments,1),j=0,l=0,m=0,n=0,o=0,p=0;if(b=a.event.fix(g),b.type="mousewheel","detail"in g&&(m=-1*g.detail),"wheelDelta"in g&&(m=g.wheelDelta),"wheelDeltaY"in g&&(m=g.wheelDeltaY),"wheelDeltaX"in g&&(l=-1*g.wheelDeltaX),"axis"in g&&g.axis===g.HORIZONTAL_AXIS&&(l=-1*m,m=0),j=0===m?l:m,"deltaY"in g&&(m=-1*g.deltaY,j=m),"deltaX"in g&&(l=g.deltaX,0===m&&(j=-1*l)),0!==m||0!==l){if(1===g.deltaMode){var q=a.data(this,"mousewheel-line-height");j*=q,m*=q,l*=q}else if(2===g.deltaMode){var r=a.data(this,"mousewheel-page-height");j*=r,m*=r,l*=r}if(n=Math.max(Math.abs(m),Math.abs(l)),(!f||f>n)&&(f=n,d(g,n)&&(f/=40)),d(g,n)&&(j/=40,l/=40,m/=40),j=Math[j>=1?"floor":"ceil"](j/f),l=Math[l>=1?"floor":"ceil"](l/f),m=Math[m>=1?"floor":"ceil"](m/f),k.settings.normalizeOffset&&this.getBoundingClientRect){var s=this.getBoundingClientRect();o=b.clientX-s.left,p=b.clientY-s.top}return b.deltaX=l,b.deltaY=m,b.deltaFactor=f,b.offsetX=o,b.offsetY=p,b.deltaMode=0,h.unshift(b,j,l,m),e&&clearTimeout(e),e=setTimeout(c,200),(a.event.dispatch||a.event.handle).apply(this,h)}}function c(){f=null}function d(a,b){return k.settings.adjustOldDeltas&&"mousewheel"===a.type&&b%120===0}var e,f,g=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],h="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],i=Array.prototype.slice;if(a.event.fixHooks)for(var j=g.length;j;)a.event.fixHooks[g[--j]]=a.event.mouseHooks;var k=a.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var c=h.length;c;)this.addEventListener(h[--c],b,!1);else this.onmousewheel=b;a.data(this,"mousewheel-line-height",k.getLineHeight(this)),a.data(this,"mousewheel-page-height",k.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var c=h.length;c;)this.removeEventListener(h[--c],b,!1);else this.onmousewheel=null;a.removeData(this,"mousewheel-line-height"),a.removeData(this,"mousewheel-page-height")},getLineHeight:function(b){var c=a(b),d=c["offsetParent"in a.fn?"offsetParent":"parent"]();return d.length||(d=a("body")),parseInt(d.css("fontSize"),10)||parseInt(c.css("fontSize"),10)||16},getPageHeight:function(b){return a(b).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})});
;// threejs.org/license
'use strict';var THREE={REVISION:"68"};"object"===typeof module&&(module.exports=THREE);THREE.CullFaceNone=0;THREE.CullFaceBack=1;THREE.CullFaceFront=2;THREE.CullFaceFrontBack=3;THREE.FrontFaceDirectionCW=0;THREE.FrontFaceDirectionCCW=1;THREE.BasicShadowMap=0;THREE.PCFShadowMap=1;THREE.PCFSoftShadowMap=2;THREE.FrontSide=0;THREE.BackSide=1;THREE.DoubleSide=2;THREE.NoShading=0;THREE.FlatShading=1;THREE.SmoothShading=2;THREE.NoColors=0;THREE.FaceColors=1;THREE.VertexColors=2;THREE.NoBlending=0;
THREE.NormalBlending=1;THREE.AdditiveBlending=2;THREE.SubtractiveBlending=3;THREE.MultiplyBlending=4;THREE.CustomBlending=5;THREE.AddEquation=100;THREE.SubtractEquation=101;THREE.ReverseSubtractEquation=102;THREE.ZeroFactor=200;THREE.OneFactor=201;THREE.SrcColorFactor=202;THREE.OneMinusSrcColorFactor=203;THREE.SrcAlphaFactor=204;THREE.OneMinusSrcAlphaFactor=205;THREE.DstAlphaFactor=206;THREE.OneMinusDstAlphaFactor=207;THREE.DstColorFactor=208;THREE.OneMinusDstColorFactor=209;
THREE.SrcAlphaSaturateFactor=210;THREE.MultiplyOperation=0;THREE.MixOperation=1;THREE.AddOperation=2;THREE.UVMapping=function(){};THREE.CubeReflectionMapping=function(){};THREE.CubeRefractionMapping=function(){};THREE.SphericalReflectionMapping=function(){};THREE.SphericalRefractionMapping=function(){};THREE.RepeatWrapping=1E3;THREE.ClampToEdgeWrapping=1001;THREE.MirroredRepeatWrapping=1002;THREE.NearestFilter=1003;THREE.NearestMipMapNearestFilter=1004;THREE.NearestMipMapLinearFilter=1005;
THREE.LinearFilter=1006;THREE.LinearMipMapNearestFilter=1007;THREE.LinearMipMapLinearFilter=1008;THREE.UnsignedByteType=1009;THREE.ByteType=1010;THREE.ShortType=1011;THREE.UnsignedShortType=1012;THREE.IntType=1013;THREE.UnsignedIntType=1014;THREE.FloatType=1015;THREE.UnsignedShort4444Type=1016;THREE.UnsignedShort5551Type=1017;THREE.UnsignedShort565Type=1018;THREE.AlphaFormat=1019;THREE.RGBFormat=1020;THREE.RGBAFormat=1021;THREE.LuminanceFormat=1022;THREE.LuminanceAlphaFormat=1023;
THREE.RGB_S3TC_DXT1_Format=2001;THREE.RGBA_S3TC_DXT1_Format=2002;THREE.RGBA_S3TC_DXT3_Format=2003;THREE.RGBA_S3TC_DXT5_Format=2004;THREE.Color=function(a){return 3===arguments.length?this.setRGB(arguments[0],arguments[1],arguments[2]):this.set(a)};
THREE.Color.prototype={constructor:THREE.Color,r:1,g:1,b:1,set:function(a){a instanceof THREE.Color?this.copy(a):"number"===typeof a?this.setHex(a):"string"===typeof a&&this.setStyle(a);return this},setHex:function(a){a=Math.floor(a);this.r=(a>>16&255)/255;this.g=(a>>8&255)/255;this.b=(a&255)/255;return this},setRGB:function(a,b,c){this.r=a;this.g=b;this.b=c;return this},setHSL:function(a,b,c){if(0===b)this.r=this.g=this.b=c;else{var d=function(a,b,c){0>c&&(c+=1);1<c&&(c-=1);return c<1/6?a+6*(b-a)*
c:0.5>c?b:c<2/3?a+6*(b-a)*(2/3-c):a};b=0.5>=c?c*(1+b):c+b-c*b;c=2*c-b;this.r=d(c,b,a+1/3);this.g=d(c,b,a);this.b=d(c,b,a-1/3)}return this},setStyle:function(a){if(/^rgb\((\d+), ?(\d+), ?(\d+)\)$/i.test(a))return a=/^rgb\((\d+), ?(\d+), ?(\d+)\)$/i.exec(a),this.r=Math.min(255,parseInt(a[1],10))/255,this.g=Math.min(255,parseInt(a[2],10))/255,this.b=Math.min(255,parseInt(a[3],10))/255,this;if(/^rgb\((\d+)\%, ?(\d+)\%, ?(\d+)\%\)$/i.test(a))return a=/^rgb\((\d+)\%, ?(\d+)\%, ?(\d+)\%\)$/i.exec(a),this.r=
Math.min(100,parseInt(a[1],10))/100,this.g=Math.min(100,parseInt(a[2],10))/100,this.b=Math.min(100,parseInt(a[3],10))/100,this;if(/^\#([0-9a-f]{6})$/i.test(a))return a=/^\#([0-9a-f]{6})$/i.exec(a),this.setHex(parseInt(a[1],16)),this;if(/^\#([0-9a-f])([0-9a-f])([0-9a-f])$/i.test(a))return a=/^\#([0-9a-f])([0-9a-f])([0-9a-f])$/i.exec(a),this.setHex(parseInt(a[1]+a[1]+a[2]+a[2]+a[3]+a[3],16)),this;if(/^(\w+)$/i.test(a))return this.setHex(THREE.ColorKeywords[a]),this},copy:function(a){this.r=a.r;this.g=
a.g;this.b=a.b;return this},copyGammaToLinear:function(a){this.r=a.r*a.r;this.g=a.g*a.g;this.b=a.b*a.b;return this},copyLinearToGamma:function(a){this.r=Math.sqrt(a.r);this.g=Math.sqrt(a.g);this.b=Math.sqrt(a.b);return this},convertGammaToLinear:function(){var a=this.r,b=this.g,c=this.b;this.r=a*a;this.g=b*b;this.b=c*c;return this},convertLinearToGamma:function(){this.r=Math.sqrt(this.r);this.g=Math.sqrt(this.g);this.b=Math.sqrt(this.b);return this},getHex:function(){return 255*this.r<<16^255*this.g<<
8^255*this.b<<0},getHexString:function(){return("000000"+this.getHex().toString(16)).slice(-6)},getHSL:function(a){a=a||{h:0,s:0,l:0};var b=this.r,c=this.g,d=this.b,e=Math.max(b,c,d),f=Math.min(b,c,d),g,h=(f+e)/2;if(f===e)f=g=0;else{var k=e-f,f=0.5>=h?k/(e+f):k/(2-e-f);switch(e){case b:g=(c-d)/k+(c<d?6:0);break;case c:g=(d-b)/k+2;break;case d:g=(b-c)/k+4}g/=6}a.h=g;a.s=f;a.l=h;return a},getStyle:function(){return"rgb("+(255*this.r|0)+","+(255*this.g|0)+","+(255*this.b|0)+")"},offsetHSL:function(a,
b,c){var d=this.getHSL();d.h+=a;d.s+=b;d.l+=c;this.setHSL(d.h,d.s,d.l);return this},add:function(a){this.r+=a.r;this.g+=a.g;this.b+=a.b;return this},addColors:function(a,b){this.r=a.r+b.r;this.g=a.g+b.g;this.b=a.b+b.b;return this},addScalar:function(a){this.r+=a;this.g+=a;this.b+=a;return this},multiply:function(a){this.r*=a.r;this.g*=a.g;this.b*=a.b;return this},multiplyScalar:function(a){this.r*=a;this.g*=a;this.b*=a;return this},lerp:function(a,b){this.r+=(a.r-this.r)*b;this.g+=(a.g-this.g)*b;
this.b+=(a.b-this.b)*b;return this},equals:function(a){return a.r===this.r&&a.g===this.g&&a.b===this.b},fromArray:function(a){this.r=a[0];this.g=a[1];this.b=a[2];return this},toArray:function(){return[this.r,this.g,this.b]},clone:function(){return(new THREE.Color).setRGB(this.r,this.g,this.b)}};
THREE.ColorKeywords={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,
darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,
grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,
lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,
palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,
tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};THREE.Quaternion=function(a,b,c,d){this._x=a||0;this._y=b||0;this._z=c||0;this._w=void 0!==d?d:1};
THREE.Quaternion.prototype={constructor:THREE.Quaternion,_x:0,_y:0,_z:0,_w:0,get x(){return this._x},set x(a){this._x=a;this.onChangeCallback()},get y(){return this._y},set y(a){this._y=a;this.onChangeCallback()},get z(){return this._z},set z(a){this._z=a;this.onChangeCallback()},get w(){return this._w},set w(a){this._w=a;this.onChangeCallback()},set:function(a,b,c,d){this._x=a;this._y=b;this._z=c;this._w=d;this.onChangeCallback();return this},copy:function(a){this._x=a.x;this._y=a.y;this._z=a.z;
this._w=a.w;this.onChangeCallback();return this},setFromEuler:function(a,b){if(!1===a instanceof THREE.Euler)throw Error("THREE.Quaternion: .setFromEuler() now expects a Euler rotation rather than a Vector3 and order.");var c=Math.cos(a._x/2),d=Math.cos(a._y/2),e=Math.cos(a._z/2),f=Math.sin(a._x/2),g=Math.sin(a._y/2),h=Math.sin(a._z/2);"XYZ"===a.order?(this._x=f*d*e+c*g*h,this._y=c*g*e-f*d*h,this._z=c*d*h+f*g*e,this._w=c*d*e-f*g*h):"YXZ"===a.order?(this._x=f*d*e+c*g*h,this._y=c*g*e-f*d*h,this._z=
c*d*h-f*g*e,this._w=c*d*e+f*g*h):"ZXY"===a.order?(this._x=f*d*e-c*g*h,this._y=c*g*e+f*d*h,this._z=c*d*h+f*g*e,this._w=c*d*e-f*g*h):"ZYX"===a.order?(this._x=f*d*e-c*g*h,this._y=c*g*e+f*d*h,this._z=c*d*h-f*g*e,this._w=c*d*e+f*g*h):"YZX"===a.order?(this._x=f*d*e+c*g*h,this._y=c*g*e+f*d*h,this._z=c*d*h-f*g*e,this._w=c*d*e-f*g*h):"XZY"===a.order&&(this._x=f*d*e-c*g*h,this._y=c*g*e-f*d*h,this._z=c*d*h+f*g*e,this._w=c*d*e+f*g*h);if(!1!==b)this.onChangeCallback();return this},setFromAxisAngle:function(a,
b){var c=b/2,d=Math.sin(c);this._x=a.x*d;this._y=a.y*d;this._z=a.z*d;this._w=Math.cos(c);this.onChangeCallback();return this},setFromRotationMatrix:function(a){var b=a.elements,c=b[0];a=b[4];var d=b[8],e=b[1],f=b[5],g=b[9],h=b[2],k=b[6],b=b[10],l=c+f+b;0<l?(c=0.5/Math.sqrt(l+1),this._w=0.25/c,this._x=(k-g)*c,this._y=(d-h)*c,this._z=(e-a)*c):c>f&&c>b?(c=2*Math.sqrt(1+c-f-b),this._w=(k-g)/c,this._x=0.25*c,this._y=(a+e)/c,this._z=(d+h)/c):f>b?(c=2*Math.sqrt(1+f-c-b),this._w=(d-h)/c,this._x=(a+e)/c,this._y=
0.25*c,this._z=(g+k)/c):(c=2*Math.sqrt(1+b-c-f),this._w=(e-a)/c,this._x=(d+h)/c,this._y=(g+k)/c,this._z=0.25*c);this.onChangeCallback();return this},setFromUnitVectors:function(){var a,b;return function(c,d){void 0===a&&(a=new THREE.Vector3);b=c.dot(d)+1;1E-6>b?(b=0,Math.abs(c.x)>Math.abs(c.z)?a.set(-c.y,c.x,0):a.set(0,-c.z,c.y)):a.crossVectors(c,d);this._x=a.x;this._y=a.y;this._z=a.z;this._w=b;this.normalize();return this}}(),inverse:function(){this.conjugate().normalize();return this},conjugate:function(){this._x*=
-1;this._y*=-1;this._z*=-1;this.onChangeCallback();return this},dot:function(a){return this._x*a._x+this._y*a._y+this._z*a._z+this._w*a._w},lengthSq:function(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w},length:function(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)},normalize:function(){var a=this.length();0===a?(this._z=this._y=this._x=0,this._w=1):(a=1/a,this._x*=a,this._y*=a,this._z*=a,this._w*=a);this.onChangeCallback();return this},
multiply:function(a,b){return void 0!==b?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(a,b)):this.multiplyQuaternions(this,a)},multiplyQuaternions:function(a,b){var c=a._x,d=a._y,e=a._z,f=a._w,g=b._x,h=b._y,k=b._z,l=b._w;this._x=c*l+f*g+d*k-e*h;this._y=d*l+f*h+e*g-c*k;this._z=e*l+f*k+c*h-d*g;this._w=f*l-c*g-d*h-e*k;this.onChangeCallback();return this},multiplyVector3:function(a){console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead.");
return a.applyQuaternion(this)},slerp:function(a,b){var c=this._x,d=this._y,e=this._z,f=this._w,g=f*a._w+c*a._x+d*a._y+e*a._z;0>g?(this._w=-a._w,this._x=-a._x,this._y=-a._y,this._z=-a._z,g=-g):this.copy(a);if(1<=g)return this._w=f,this._x=c,this._y=d,this._z=e,this;var h=Math.acos(g),k=Math.sqrt(1-g*g);if(0.001>Math.abs(k))return this._w=0.5*(f+this._w),this._x=0.5*(c+this._x),this._y=0.5*(d+this._y),this._z=0.5*(e+this._z),this;g=Math.sin((1-b)*h)/k;h=Math.sin(b*h)/k;this._w=f*g+this._w*h;this._x=
c*g+this._x*h;this._y=d*g+this._y*h;this._z=e*g+this._z*h;this.onChangeCallback();return this},equals:function(a){return a._x===this._x&&a._y===this._y&&a._z===this._z&&a._w===this._w},fromArray:function(a){this._x=a[0];this._y=a[1];this._z=a[2];this._w=a[3];this.onChangeCallback();return this},toArray:function(){return[this._x,this._y,this._z,this._w]},onChange:function(a){this.onChangeCallback=a;return this},onChangeCallback:function(){},clone:function(){return new THREE.Quaternion(this._x,this._y,
this._z,this._w)}};THREE.Quaternion.slerp=function(a,b,c,d){return c.copy(a).slerp(b,d)};THREE.Vector2=function(a,b){this.x=a||0;this.y=b||0};
THREE.Vector2.prototype={constructor:THREE.Vector2,set:function(a,b){this.x=a;this.y=b;return this},setX:function(a){this.x=a;return this},setY:function(a){this.y=a;return this},setComponent:function(a,b){switch(a){case 0:this.x=b;break;case 1:this.y=b;break;default:throw Error("index is out of range: "+a);}},getComponent:function(a){switch(a){case 0:return this.x;case 1:return this.y;default:throw Error("index is out of range: "+a);}},copy:function(a){this.x=a.x;this.y=a.y;return this},add:function(a,
b){if(void 0!==b)return console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(a,b);this.x+=a.x;this.y+=a.y;return this},addVectors:function(a,b){this.x=a.x+b.x;this.y=a.y+b.y;return this},addScalar:function(a){this.x+=a;this.y+=a;return this},sub:function(a,b){if(void 0!==b)return console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(a,b);this.x-=a.x;this.y-=a.y;return this},
subVectors:function(a,b){this.x=a.x-b.x;this.y=a.y-b.y;return this},multiply:function(a){this.x*=a.x;this.y*=a.y;return this},multiplyScalar:function(a){this.x*=a;this.y*=a;return this},divide:function(a){this.x/=a.x;this.y/=a.y;return this},divideScalar:function(a){0!==a?(a=1/a,this.x*=a,this.y*=a):this.y=this.x=0;return this},min:function(a){this.x>a.x&&(this.x=a.x);this.y>a.y&&(this.y=a.y);return this},max:function(a){this.x<a.x&&(this.x=a.x);this.y<a.y&&(this.y=a.y);return this},clamp:function(a,
b){this.x<a.x?this.x=a.x:this.x>b.x&&(this.x=b.x);this.y<a.y?this.y=a.y:this.y>b.y&&(this.y=b.y);return this},clampScalar:function(){var a,b;return function(c,d){void 0===a&&(a=new THREE.Vector2,b=new THREE.Vector2);a.set(c,c);b.set(d,d);return this.clamp(a,b)}}(),floor:function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this},ceil:function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this},round:function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this},
roundToZero:function(){this.x=0>this.x?Math.ceil(this.x):Math.floor(this.x);this.y=0>this.y?Math.ceil(this.y):Math.floor(this.y);return this},negate:function(){this.x=-this.x;this.y=-this.y;return this},dot:function(a){return this.x*a.x+this.y*a.y},lengthSq:function(){return this.x*this.x+this.y*this.y},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y)},normalize:function(){return this.divideScalar(this.length())},distanceTo:function(a){return Math.sqrt(this.distanceToSquared(a))},distanceToSquared:function(a){var b=
this.x-a.x;a=this.y-a.y;return b*b+a*a},setLength:function(a){var b=this.length();0!==b&&a!==b&&this.multiplyScalar(a/b);return this},lerp:function(a,b){this.x+=(a.x-this.x)*b;this.y+=(a.y-this.y)*b;return this},equals:function(a){return a.x===this.x&&a.y===this.y},fromArray:function(a){this.x=a[0];this.y=a[1];return this},toArray:function(){return[this.x,this.y]},clone:function(){return new THREE.Vector2(this.x,this.y)}};THREE.Vector3=function(a,b,c){this.x=a||0;this.y=b||0;this.z=c||0};
THREE.Vector3.prototype={constructor:THREE.Vector3,set:function(a,b,c){this.x=a;this.y=b;this.z=c;return this},setX:function(a){this.x=a;return this},setY:function(a){this.y=a;return this},setZ:function(a){this.z=a;return this},setComponent:function(a,b){switch(a){case 0:this.x=b;break;case 1:this.y=b;break;case 2:this.z=b;break;default:throw Error("index is out of range: "+a);}},getComponent:function(a){switch(a){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("index is out of range: "+
a);}},copy:function(a){this.x=a.x;this.y=a.y;this.z=a.z;return this},add:function(a,b){if(void 0!==b)return console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(a,b);this.x+=a.x;this.y+=a.y;this.z+=a.z;return this},addScalar:function(a){this.x+=a;this.y+=a;this.z+=a;return this},addVectors:function(a,b){this.x=a.x+b.x;this.y=a.y+b.y;this.z=a.z+b.z;return this},sub:function(a,b){if(void 0!==b)return console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),
this.subVectors(a,b);this.x-=a.x;this.y-=a.y;this.z-=a.z;return this},subVectors:function(a,b){this.x=a.x-b.x;this.y=a.y-b.y;this.z=a.z-b.z;return this},multiply:function(a,b){if(void 0!==b)return console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(a,b);this.x*=a.x;this.y*=a.y;this.z*=a.z;return this},multiplyScalar:function(a){this.x*=a;this.y*=a;this.z*=a;return this},multiplyVectors:function(a,b){this.x=a.x*b.x;this.y=
a.y*b.y;this.z=a.z*b.z;return this},applyEuler:function(){var a;return function(b){!1===b instanceof THREE.Euler&&console.error("THREE.Vector3: .applyEuler() now expects a Euler rotation rather than a Vector3 and order.");void 0===a&&(a=new THREE.Quaternion);this.applyQuaternion(a.setFromEuler(b));return this}}(),applyAxisAngle:function(){var a;return function(b,c){void 0===a&&(a=new THREE.Quaternion);this.applyQuaternion(a.setFromAxisAngle(b,c));return this}}(),applyMatrix3:function(a){var b=this.x,
c=this.y,d=this.z;a=a.elements;this.x=a[0]*b+a[3]*c+a[6]*d;this.y=a[1]*b+a[4]*c+a[7]*d;this.z=a[2]*b+a[5]*c+a[8]*d;return this},applyMatrix4:function(a){var b=this.x,c=this.y,d=this.z;a=a.elements;this.x=a[0]*b+a[4]*c+a[8]*d+a[12];this.y=a[1]*b+a[5]*c+a[9]*d+a[13];this.z=a[2]*b+a[6]*c+a[10]*d+a[14];return this},applyProjection:function(a){var b=this.x,c=this.y,d=this.z;a=a.elements;var e=1/(a[3]*b+a[7]*c+a[11]*d+a[15]);this.x=(a[0]*b+a[4]*c+a[8]*d+a[12])*e;this.y=(a[1]*b+a[5]*c+a[9]*d+a[13])*e;this.z=
(a[2]*b+a[6]*c+a[10]*d+a[14])*e;return this},applyQuaternion:function(a){var b=this.x,c=this.y,d=this.z,e=a.x,f=a.y,g=a.z;a=a.w;var h=a*b+f*d-g*c,k=a*c+g*b-e*d,l=a*d+e*c-f*b,b=-e*b-f*c-g*d;this.x=h*a+b*-e+k*-g-l*-f;this.y=k*a+b*-f+l*-e-h*-g;this.z=l*a+b*-g+h*-f-k*-e;return this},transformDirection:function(a){var b=this.x,c=this.y,d=this.z;a=a.elements;this.x=a[0]*b+a[4]*c+a[8]*d;this.y=a[1]*b+a[5]*c+a[9]*d;this.z=a[2]*b+a[6]*c+a[10]*d;this.normalize();return this},divide:function(a){this.x/=a.x;
this.y/=a.y;this.z/=a.z;return this},divideScalar:function(a){0!==a?(a=1/a,this.x*=a,this.y*=a,this.z*=a):this.z=this.y=this.x=0;return this},min:function(a){this.x>a.x&&(this.x=a.x);this.y>a.y&&(this.y=a.y);this.z>a.z&&(this.z=a.z);return this},max:function(a){this.x<a.x&&(this.x=a.x);this.y<a.y&&(this.y=a.y);this.z<a.z&&(this.z=a.z);return this},clamp:function(a,b){this.x<a.x?this.x=a.x:this.x>b.x&&(this.x=b.x);this.y<a.y?this.y=a.y:this.y>b.y&&(this.y=b.y);this.z<a.z?this.z=a.z:this.z>b.z&&(this.z=
b.z);return this},clampScalar:function(){var a,b;return function(c,d){void 0===a&&(a=new THREE.Vector3,b=new THREE.Vector3);a.set(c,c,c);b.set(d,d,d);return this.clamp(a,b)}}(),floor:function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);this.z=Math.floor(this.z);return this},ceil:function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);this.z=Math.ceil(this.z);return this},round:function(){this.x=Math.round(this.x);this.y=Math.round(this.y);this.z=Math.round(this.z);return this},roundToZero:function(){this.x=
0>this.x?Math.ceil(this.x):Math.floor(this.x);this.y=0>this.y?Math.ceil(this.y):Math.floor(this.y);this.z=0>this.z?Math.ceil(this.z):Math.floor(this.z);return this},negate:function(){this.x=-this.x;this.y=-this.y;this.z=-this.z;return this},dot:function(a){return this.x*a.x+this.y*a.y+this.z*a.z},lengthSq:function(){return this.x*this.x+this.y*this.y+this.z*this.z},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)},lengthManhattan:function(){return Math.abs(this.x)+Math.abs(this.y)+
Math.abs(this.z)},normalize:function(){return this.divideScalar(this.length())},setLength:function(a){var b=this.length();0!==b&&a!==b&&this.multiplyScalar(a/b);return this},lerp:function(a,b){this.x+=(a.x-this.x)*b;this.y+=(a.y-this.y)*b;this.z+=(a.z-this.z)*b;return this},cross:function(a,b){if(void 0!==b)return console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(a,b);var c=this.x,d=this.y,e=this.z;this.x=d*a.z-e*a.y;this.y=
e*a.x-c*a.z;this.z=c*a.y-d*a.x;return this},crossVectors:function(a,b){var c=a.x,d=a.y,e=a.z,f=b.x,g=b.y,h=b.z;this.x=d*h-e*g;this.y=e*f-c*h;this.z=c*g-d*f;return this},projectOnVector:function(){var a,b;return function(c){void 0===a&&(a=new THREE.Vector3);a.copy(c).normalize();b=this.dot(a);return this.copy(a).multiplyScalar(b)}}(),projectOnPlane:function(){var a;return function(b){void 0===a&&(a=new THREE.Vector3);a.copy(this).projectOnVector(b);return this.sub(a)}}(),reflect:function(){var a;return function(b){void 0===
a&&(a=new THREE.Vector3);return this.sub(a.copy(b).multiplyScalar(2*this.dot(b)))}}(),angleTo:function(a){a=this.dot(a)/(this.length()*a.length());return Math.acos(THREE.Math.clamp(a,-1,1))},distanceTo:function(a){return Math.sqrt(this.distanceToSquared(a))},distanceToSquared:function(a){var b=this.x-a.x,c=this.y-a.y;a=this.z-a.z;return b*b+c*c+a*a},setEulerFromRotationMatrix:function(a,b){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")},
setEulerFromQuaternion:function(a,b){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")},getPositionFromMatrix:function(a){console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition().");return this.setFromMatrixPosition(a)},getScaleFromMatrix:function(a){console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale().");return this.setFromMatrixScale(a)},getColumnFromMatrix:function(a,
b){console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn().");return this.setFromMatrixColumn(a,b)},setFromMatrixPosition:function(a){this.x=a.elements[12];this.y=a.elements[13];this.z=a.elements[14];return this},setFromMatrixScale:function(a){var b=this.set(a.elements[0],a.elements[1],a.elements[2]).length(),c=this.set(a.elements[4],a.elements[5],a.elements[6]).length();a=this.set(a.elements[8],a.elements[9],a.elements[10]).length();this.x=b;this.y=c;this.z=
a;return this},setFromMatrixColumn:function(a,b){var c=4*a,d=b.elements;this.x=d[c];this.y=d[c+1];this.z=d[c+2];return this},equals:function(a){return a.x===this.x&&a.y===this.y&&a.z===this.z},fromArray:function(a){this.x=a[0];this.y=a[1];this.z=a[2];return this},toArray:function(){return[this.x,this.y,this.z]},clone:function(){return new THREE.Vector3(this.x,this.y,this.z)}};THREE.Vector4=function(a,b,c,d){this.x=a||0;this.y=b||0;this.z=c||0;this.w=void 0!==d?d:1};
THREE.Vector4.prototype={constructor:THREE.Vector4,set:function(a,b,c,d){this.x=a;this.y=b;this.z=c;this.w=d;return this},setX:function(a){this.x=a;return this},setY:function(a){this.y=a;return this},setZ:function(a){this.z=a;return this},setW:function(a){this.w=a;return this},setComponent:function(a,b){switch(a){case 0:this.x=b;break;case 1:this.y=b;break;case 2:this.z=b;break;case 3:this.w=b;break;default:throw Error("index is out of range: "+a);}},getComponent:function(a){switch(a){case 0:return this.x;
case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("index is out of range: "+a);}},copy:function(a){this.x=a.x;this.y=a.y;this.z=a.z;this.w=void 0!==a.w?a.w:1;return this},add:function(a,b){if(void 0!==b)return console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(a,b);this.x+=a.x;this.y+=a.y;this.z+=a.z;this.w+=a.w;return this},addScalar:function(a){this.x+=a;this.y+=a;this.z+=a;this.w+=a;return this},
addVectors:function(a,b){this.x=a.x+b.x;this.y=a.y+b.y;this.z=a.z+b.z;this.w=a.w+b.w;return this},sub:function(a,b){if(void 0!==b)return console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(a,b);this.x-=a.x;this.y-=a.y;this.z-=a.z;this.w-=a.w;return this},subVectors:function(a,b){this.x=a.x-b.x;this.y=a.y-b.y;this.z=a.z-b.z;this.w=a.w-b.w;return this},multiplyScalar:function(a){this.x*=a;this.y*=a;this.z*=a;this.w*=a;return this},applyMatrix4:function(a){var b=
this.x,c=this.y,d=this.z,e=this.w;a=a.elements;this.x=a[0]*b+a[4]*c+a[8]*d+a[12]*e;this.y=a[1]*b+a[5]*c+a[9]*d+a[13]*e;this.z=a[2]*b+a[6]*c+a[10]*d+a[14]*e;this.w=a[3]*b+a[7]*c+a[11]*d+a[15]*e;return this},divideScalar:function(a){0!==a?(a=1/a,this.x*=a,this.y*=a,this.z*=a,this.w*=a):(this.z=this.y=this.x=0,this.w=1);return this},setAxisAngleFromQuaternion:function(a){this.w=2*Math.acos(a.w);var b=Math.sqrt(1-a.w*a.w);1E-4>b?(this.x=1,this.z=this.y=0):(this.x=a.x/b,this.y=a.y/b,this.z=a.z/b);return this},
setAxisAngleFromRotationMatrix:function(a){var b,c,d;a=a.elements;var e=a[0];d=a[4];var f=a[8],g=a[1],h=a[5],k=a[9];c=a[2];b=a[6];var l=a[10];if(0.01>Math.abs(d-g)&&0.01>Math.abs(f-c)&&0.01>Math.abs(k-b)){if(0.1>Math.abs(d+g)&&0.1>Math.abs(f+c)&&0.1>Math.abs(k+b)&&0.1>Math.abs(e+h+l-3))return this.set(1,0,0,0),this;a=Math.PI;e=(e+1)/2;h=(h+1)/2;l=(l+1)/2;d=(d+g)/4;f=(f+c)/4;k=(k+b)/4;e>h&&e>l?0.01>e?(b=0,d=c=0.707106781):(b=Math.sqrt(e),c=d/b,d=f/b):h>l?0.01>h?(b=0.707106781,c=0,d=0.707106781):(c=
Math.sqrt(h),b=d/c,d=k/c):0.01>l?(c=b=0.707106781,d=0):(d=Math.sqrt(l),b=f/d,c=k/d);this.set(b,c,d,a);return this}a=Math.sqrt((b-k)*(b-k)+(f-c)*(f-c)+(g-d)*(g-d));0.001>Math.abs(a)&&(a=1);this.x=(b-k)/a;this.y=(f-c)/a;this.z=(g-d)/a;this.w=Math.acos((e+h+l-1)/2);return this},min:function(a){this.x>a.x&&(this.x=a.x);this.y>a.y&&(this.y=a.y);this.z>a.z&&(this.z=a.z);this.w>a.w&&(this.w=a.w);return this},max:function(a){this.x<a.x&&(this.x=a.x);this.y<a.y&&(this.y=a.y);this.z<a.z&&(this.z=a.z);this.w<
a.w&&(this.w=a.w);return this},clamp:function(a,b){this.x<a.x?this.x=a.x:this.x>b.x&&(this.x=b.x);this.y<a.y?this.y=a.y:this.y>b.y&&(this.y=b.y);this.z<a.z?this.z=a.z:this.z>b.z&&(this.z=b.z);this.w<a.w?this.w=a.w:this.w>b.w&&(this.w=b.w);return this},clampScalar:function(){var a,b;return function(c,d){void 0===a&&(a=new THREE.Vector4,b=new THREE.Vector4);a.set(c,c,c,c);b.set(d,d,d,d);return this.clamp(a,b)}}(),floor:function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);this.z=Math.floor(this.z);
this.w=Math.floor(this.w);return this},ceil:function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);this.z=Math.ceil(this.z);this.w=Math.ceil(this.w);return this},round:function(){this.x=Math.round(this.x);this.y=Math.round(this.y);this.z=Math.round(this.z);this.w=Math.round(this.w);return this},roundToZero:function(){this.x=0>this.x?Math.ceil(this.x):Math.floor(this.x);this.y=0>this.y?Math.ceil(this.y):Math.floor(this.y);this.z=0>this.z?Math.ceil(this.z):Math.floor(this.z);this.w=0>this.w?Math.ceil(this.w):
Math.floor(this.w);return this},negate:function(){this.x=-this.x;this.y=-this.y;this.z=-this.z;this.w=-this.w;return this},dot:function(a){return this.x*a.x+this.y*a.y+this.z*a.z+this.w*a.w},lengthSq:function(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)},lengthManhattan:function(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)},normalize:function(){return this.divideScalar(this.length())},
setLength:function(a){var b=this.length();0!==b&&a!==b&&this.multiplyScalar(a/b);return this},lerp:function(a,b){this.x+=(a.x-this.x)*b;this.y+=(a.y-this.y)*b;this.z+=(a.z-this.z)*b;this.w+=(a.w-this.w)*b;return this},equals:function(a){return a.x===this.x&&a.y===this.y&&a.z===this.z&&a.w===this.w},fromArray:function(a){this.x=a[0];this.y=a[1];this.z=a[2];this.w=a[3];return this},toArray:function(){return[this.x,this.y,this.z,this.w]},clone:function(){return new THREE.Vector4(this.x,this.y,this.z,
this.w)}};THREE.Euler=function(a,b,c,d){this._x=a||0;this._y=b||0;this._z=c||0;this._order=d||THREE.Euler.DefaultOrder};THREE.Euler.RotationOrders="XYZ YZX ZXY XZY YXZ ZYX".split(" ");THREE.Euler.DefaultOrder="XYZ";
THREE.Euler.prototype={constructor:THREE.Euler,_x:0,_y:0,_z:0,_order:THREE.Euler.DefaultOrder,get x(){return this._x},set x(a){this._x=a;this.onChangeCallback()},get y(){return this._y},set y(a){this._y=a;this.onChangeCallback()},get z(){return this._z},set z(a){this._z=a;this.onChangeCallback()},get order(){return this._order},set order(a){this._order=a;this.onChangeCallback()},set:function(a,b,c,d){this._x=a;this._y=b;this._z=c;this._order=d||this._order;this.onChangeCallback();return this},copy:function(a){this._x=
a._x;this._y=a._y;this._z=a._z;this._order=a._order;this.onChangeCallback();return this},setFromRotationMatrix:function(a,b){var c=THREE.Math.clamp,d=a.elements,e=d[0],f=d[4],g=d[8],h=d[1],k=d[5],l=d[9],n=d[2],q=d[6],d=d[10];b=b||this._order;"XYZ"===b?(this._y=Math.asin(c(g,-1,1)),0.99999>Math.abs(g)?(this._x=Math.atan2(-l,d),this._z=Math.atan2(-f,e)):(this._x=Math.atan2(q,k),this._z=0)):"YXZ"===b?(this._x=Math.asin(-c(l,-1,1)),0.99999>Math.abs(l)?(this._y=Math.atan2(g,d),this._z=Math.atan2(h,k)):
(this._y=Math.atan2(-n,e),this._z=0)):"ZXY"===b?(this._x=Math.asin(c(q,-1,1)),0.99999>Math.abs(q)?(this._y=Math.atan2(-n,d),this._z=Math.atan2(-f,k)):(this._y=0,this._z=Math.atan2(h,e))):"ZYX"===b?(this._y=Math.asin(-c(n,-1,1)),0.99999>Math.abs(n)?(this._x=Math.atan2(q,d),this._z=Math.atan2(h,e)):(this._x=0,this._z=Math.atan2(-f,k))):"YZX"===b?(this._z=Math.asin(c(h,-1,1)),0.99999>Math.abs(h)?(this._x=Math.atan2(-l,k),this._y=Math.atan2(-n,e)):(this._x=0,this._y=Math.atan2(g,d))):"XZY"===b?(this._z=
Math.asin(-c(f,-1,1)),0.99999>Math.abs(f)?(this._x=Math.atan2(q,k),this._y=Math.atan2(g,e)):(this._x=Math.atan2(-l,d),this._y=0)):console.warn("THREE.Euler: .setFromRotationMatrix() given unsupported order: "+b);this._order=b;this.onChangeCallback();return this},setFromQuaternion:function(a,b,c){var d=THREE.Math.clamp,e=a.x*a.x,f=a.y*a.y,g=a.z*a.z,h=a.w*a.w;b=b||this._order;"XYZ"===b?(this._x=Math.atan2(2*(a.x*a.w-a.y*a.z),h-e-f+g),this._y=Math.asin(d(2*(a.x*a.z+a.y*a.w),-1,1)),this._z=Math.atan2(2*
(a.z*a.w-a.x*a.y),h+e-f-g)):"YXZ"===b?(this._x=Math.asin(d(2*(a.x*a.w-a.y*a.z),-1,1)),this._y=Math.atan2(2*(a.x*a.z+a.y*a.w),h-e-f+g),this._z=Math.atan2(2*(a.x*a.y+a.z*a.w),h-e+f-g)):"ZXY"===b?(this._x=Math.asin(d(2*(a.x*a.w+a.y*a.z),-1,1)),this._y=Math.atan2(2*(a.y*a.w-a.z*a.x),h-e-f+g),this._z=Math.atan2(2*(a.z*a.w-a.x*a.y),h-e+f-g)):"ZYX"===b?(this._x=Math.atan2(2*(a.x*a.w+a.z*a.y),h-e-f+g),this._y=Math.asin(d(2*(a.y*a.w-a.x*a.z),-1,1)),this._z=Math.atan2(2*(a.x*a.y+a.z*a.w),h+e-f-g)):"YZX"===
b?(this._x=Math.atan2(2*(a.x*a.w-a.z*a.y),h-e+f-g),this._y=Math.atan2(2*(a.y*a.w-a.x*a.z),h+e-f-g),this._z=Math.asin(d(2*(a.x*a.y+a.z*a.w),-1,1))):"XZY"===b?(this._x=Math.atan2(2*(a.x*a.w+a.y*a.z),h-e+f-g),this._y=Math.atan2(2*(a.x*a.z+a.y*a.w),h+e-f-g),this._z=Math.asin(d(2*(a.z*a.w-a.x*a.y),-1,1))):console.warn("THREE.Euler: .setFromQuaternion() given unsupported order: "+b);this._order=b;if(!1!==c)this.onChangeCallback();return this},reorder:function(){var a=new THREE.Quaternion;return function(b){a.setFromEuler(this);
this.setFromQuaternion(a,b)}}(),equals:function(a){return a._x===this._x&&a._y===this._y&&a._z===this._z&&a._order===this._order},fromArray:function(a){this._x=a[0];this._y=a[1];this._z=a[2];void 0!==a[3]&&(this._order=a[3]);this.onChangeCallback();return this},toArray:function(){return[this._x,this._y,this._z,this._order]},onChange:function(a){this.onChangeCallback=a;return this},onChangeCallback:function(){},clone:function(){return new THREE.Euler(this._x,this._y,this._z,this._order)}};
THREE.Line3=function(a,b){this.start=void 0!==a?a:new THREE.Vector3;this.end=void 0!==b?b:new THREE.Vector3};
THREE.Line3.prototype={constructor:THREE.Line3,set:function(a,b){this.start.copy(a);this.end.copy(b);return this},copy:function(a){this.start.copy(a.start);this.end.copy(a.end);return this},center:function(a){return(a||new THREE.Vector3).addVectors(this.start,this.end).multiplyScalar(0.5)},delta:function(a){return(a||new THREE.Vector3).subVectors(this.end,this.start)},distanceSq:function(){return this.start.distanceToSquared(this.end)},distance:function(){return this.start.distanceTo(this.end)},at:function(a,
b){var c=b||new THREE.Vector3;return this.delta(c).multiplyScalar(a).add(this.start)},closestPointToPointParameter:function(){var a=new THREE.Vector3,b=new THREE.Vector3;return function(c,d){a.subVectors(c,this.start);b.subVectors(this.end,this.start);var e=b.dot(b),e=b.dot(a)/e;d&&(e=THREE.Math.clamp(e,0,1));return e}}(),closestPointToPoint:function(a,b,c){a=this.closestPointToPointParameter(a,b);c=c||new THREE.Vector3;return this.delta(c).multiplyScalar(a).add(this.start)},applyMatrix4:function(a){this.start.applyMatrix4(a);
this.end.applyMatrix4(a);return this},equals:function(a){return a.start.equals(this.start)&&a.end.equals(this.end)},clone:function(){return(new THREE.Line3).copy(this)}};THREE.Box2=function(a,b){this.min=void 0!==a?a:new THREE.Vector2(Infinity,Infinity);this.max=void 0!==b?b:new THREE.Vector2(-Infinity,-Infinity)};
THREE.Box2.prototype={constructor:THREE.Box2,set:function(a,b){this.min.copy(a);this.max.copy(b);return this},setFromPoints:function(a){this.makeEmpty();for(var b=0,c=a.length;b<c;b++)this.expandByPoint(a[b]);return this},setFromCenterAndSize:function(){var a=new THREE.Vector2;return function(b,c){var d=a.copy(c).multiplyScalar(0.5);this.min.copy(b).sub(d);this.max.copy(b).add(d);return this}}(),copy:function(a){this.min.copy(a.min);this.max.copy(a.max);return this},makeEmpty:function(){this.min.x=
this.min.y=Infinity;this.max.x=this.max.y=-Infinity;return this},empty:function(){return this.max.x<this.min.x||this.max.y<this.min.y},center:function(a){return(a||new THREE.Vector2).addVectors(this.min,this.max).multiplyScalar(0.5)},size:function(a){return(a||new THREE.Vector2).subVectors(this.max,this.min)},expandByPoint:function(a){this.min.min(a);this.max.max(a);return this},expandByVector:function(a){this.min.sub(a);this.max.add(a);return this},expandByScalar:function(a){this.min.addScalar(-a);
this.max.addScalar(a);return this},containsPoint:function(a){return a.x<this.min.x||a.x>this.max.x||a.y<this.min.y||a.y>this.max.y?!1:!0},containsBox:function(a){return this.min.x<=a.min.x&&a.max.x<=this.max.x&&this.min.y<=a.min.y&&a.max.y<=this.max.y?!0:!1},getParameter:function(a,b){return(b||new THREE.Vector2).set((a.x-this.min.x)/(this.max.x-this.min.x),(a.y-this.min.y)/(this.max.y-this.min.y))},isIntersectionBox:function(a){return a.max.x<this.min.x||a.min.x>this.max.x||a.max.y<this.min.y||a.min.y>
this.max.y?!1:!0},clampPoint:function(a,b){return(b||new THREE.Vector2).copy(a).clamp(this.min,this.max)},distanceToPoint:function(){var a=new THREE.Vector2;return function(b){return a.copy(b).clamp(this.min,this.max).sub(b).length()}}(),intersect:function(a){this.min.max(a.min);this.max.min(a.max);return this},union:function(a){this.min.min(a.min);this.max.max(a.max);return this},translate:function(a){this.min.add(a);this.max.add(a);return this},equals:function(a){return a.min.equals(this.min)&&
a.max.equals(this.max)},clone:function(){return(new THREE.Box2).copy(this)}};THREE.Box3=function(a,b){this.min=void 0!==a?a:new THREE.Vector3(Infinity,Infinity,Infinity);this.max=void 0!==b?b:new THREE.Vector3(-Infinity,-Infinity,-Infinity)};
THREE.Box3.prototype={constructor:THREE.Box3,set:function(a,b){this.min.copy(a);this.max.copy(b);return this},setFromPoints:function(a){this.makeEmpty();for(var b=0,c=a.length;b<c;b++)this.expandByPoint(a[b]);return this},setFromCenterAndSize:function(){var a=new THREE.Vector3;return function(b,c){var d=a.copy(c).multiplyScalar(0.5);this.min.copy(b).sub(d);this.max.copy(b).add(d);return this}}(),setFromObject:function(){var a=new THREE.Vector3;return function(b){var c=this;b.updateMatrixWorld(!0);
this.makeEmpty();b.traverse(function(b){if(void 0!==b.geometry&&void 0!==b.geometry.vertices)for(var e=b.geometry.vertices,f=0,g=e.length;f<g;f++)a.copy(e[f]),a.applyMatrix4(b.matrixWorld),c.expandByPoint(a)});return this}}(),copy:function(a){this.min.copy(a.min);this.max.copy(a.max);return this},makeEmpty:function(){this.min.x=this.min.y=this.min.z=Infinity;this.max.x=this.max.y=this.max.z=-Infinity;return this},empty:function(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z},
center:function(a){return(a||new THREE.Vector3).addVectors(this.min,this.max).multiplyScalar(0.5)},size:function(a){return(a||new THREE.Vector3).subVectors(this.max,this.min)},expandByPoint:function(a){this.min.min(a);this.max.max(a);return this},expandByVector:function(a){this.min.sub(a);this.max.add(a);return this},expandByScalar:function(a){this.min.addScalar(-a);this.max.addScalar(a);return this},containsPoint:function(a){return a.x<this.min.x||a.x>this.max.x||a.y<this.min.y||a.y>this.max.y||
a.z<this.min.z||a.z>this.max.z?!1:!0},containsBox:function(a){return this.min.x<=a.min.x&&a.max.x<=this.max.x&&this.min.y<=a.min.y&&a.max.y<=this.max.y&&this.min.z<=a.min.z&&a.max.z<=this.max.z?!0:!1},getParameter:function(a,b){return(b||new THREE.Vector3).set((a.x-this.min.x)/(this.max.x-this.min.x),(a.y-this.min.y)/(this.max.y-this.min.y),(a.z-this.min.z)/(this.max.z-this.min.z))},isIntersectionBox:function(a){return a.max.x<this.min.x||a.min.x>this.max.x||a.max.y<this.min.y||a.min.y>this.max.y||
a.max.z<this.min.z||a.min.z>this.max.z?!1:!0},clampPoint:function(a,b){return(b||new THREE.Vector3).copy(a).clamp(this.min,this.max)},distanceToPoint:function(){var a=new THREE.Vector3;return function(b){return a.copy(b).clamp(this.min,this.max).sub(b).length()}}(),getBoundingSphere:function(){var a=new THREE.Vector3;return function(b){b=b||new THREE.Sphere;b.center=this.center();b.radius=0.5*this.size(a).length();return b}}(),intersect:function(a){this.min.max(a.min);this.max.min(a.max);return this},
union:function(a){this.min.min(a.min);this.max.max(a.max);return this},applyMatrix4:function(){var a=[new THREE.Vector3,new THREE.Vector3,new THREE.Vector3,new THREE.Vector3,new THREE.Vector3,new THREE.Vector3,new THREE.Vector3,new THREE.Vector3];return function(b){a[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(b);a[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(b);a[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(b);a[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(b);
a[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(b);a[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(b);a[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(b);a[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(b);this.makeEmpty();this.setFromPoints(a);return this}}(),translate:function(a){this.min.add(a);this.max.add(a);return this},equals:function(a){return a.min.equals(this.min)&&a.max.equals(this.max)},clone:function(){return(new THREE.Box3).copy(this)}};
THREE.Matrix3=function(a,b,c,d,e,f,g,h,k){var l=this.elements=new Float32Array(9);l[0]=void 0!==a?a:1;l[3]=b||0;l[6]=c||0;l[1]=d||0;l[4]=void 0!==e?e:1;l[7]=f||0;l[2]=g||0;l[5]=h||0;l[8]=void 0!==k?k:1};
THREE.Matrix3.prototype={constructor:THREE.Matrix3,set:function(a,b,c,d,e,f,g,h,k){var l=this.elements;l[0]=a;l[3]=b;l[6]=c;l[1]=d;l[4]=e;l[7]=f;l[2]=g;l[5]=h;l[8]=k;return this},identity:function(){this.set(1,0,0,0,1,0,0,0,1);return this},copy:function(a){a=a.elements;this.set(a[0],a[3],a[6],a[1],a[4],a[7],a[2],a[5],a[8]);return this},multiplyVector3:function(a){console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead.");return a.applyMatrix3(this)},
multiplyVector3Array:function(a){console.warn("THREE.Matrix3: .multiplyVector3Array() has been renamed. Use matrix.applyToVector3Array( array ) instead.");return this.applyToVector3Array(a)},applyToVector3Array:function(){var a=new THREE.Vector3;return function(b,c,d){void 0===c&&(c=0);void 0===d&&(d=b.length);for(var e=0;e<d;e+=3,c+=3)a.x=b[c],a.y=b[c+1],a.z=b[c+2],a.applyMatrix3(this),b[c]=a.x,b[c+1]=a.y,b[c+2]=a.z;return b}}(),multiplyScalar:function(a){var b=this.elements;b[0]*=a;b[3]*=a;b[6]*=
a;b[1]*=a;b[4]*=a;b[7]*=a;b[2]*=a;b[5]*=a;b[8]*=a;return this},determinant:function(){var a=this.elements,b=a[0],c=a[1],d=a[2],e=a[3],f=a[4],g=a[5],h=a[6],k=a[7],a=a[8];return b*f*a-b*g*k-c*e*a+c*g*h+d*e*k-d*f*h},getInverse:function(a,b){var c=a.elements,d=this.elements;d[0]=c[10]*c[5]-c[6]*c[9];d[1]=-c[10]*c[1]+c[2]*c[9];d[2]=c[6]*c[1]-c[2]*c[5];d[3]=-c[10]*c[4]+c[6]*c[8];d[4]=c[10]*c[0]-c[2]*c[8];d[5]=-c[6]*c[0]+c[2]*c[4];d[6]=c[9]*c[4]-c[5]*c[8];d[7]=-c[9]*c[0]+c[1]*c[8];d[8]=c[5]*c[0]-c[1]*c[4];
c=c[0]*d[0]+c[1]*d[3]+c[2]*d[6];if(0===c){if(b)throw Error("Matrix3.getInverse(): can't invert matrix, determinant is 0");console.warn("Matrix3.getInverse(): can't invert matrix, determinant is 0");this.identity();return this}this.multiplyScalar(1/c);return this},transpose:function(){var a,b=this.elements;a=b[1];b[1]=b[3];b[3]=a;a=b[2];b[2]=b[6];b[6]=a;a=b[5];b[5]=b[7];b[7]=a;return this},flattenToArrayOffset:function(a,b){var c=this.elements;a[b]=c[0];a[b+1]=c[1];a[b+2]=c[2];a[b+3]=c[3];a[b+4]=c[4];
a[b+5]=c[5];a[b+6]=c[6];a[b+7]=c[7];a[b+8]=c[8];return a},getNormalMatrix:function(a){this.getInverse(a).transpose();return this},transposeIntoArray:function(a){var b=this.elements;a[0]=b[0];a[1]=b[3];a[2]=b[6];a[3]=b[1];a[4]=b[4];a[5]=b[7];a[6]=b[2];a[7]=b[5];a[8]=b[8];return this},fromArray:function(a){this.elements.set(a);return this},toArray:function(){var a=this.elements;return[a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7],a[8]]},clone:function(){var a=this.elements;return new THREE.Matrix3(a[0],a[3],
a[6],a[1],a[4],a[7],a[2],a[5],a[8])}};THREE.Matrix4=function(a,b,c,d,e,f,g,h,k,l,n,q,r,t,s,p){var v=this.elements=new Float32Array(16);v[0]=void 0!==a?a:1;v[4]=b||0;v[8]=c||0;v[12]=d||0;v[1]=e||0;v[5]=void 0!==f?f:1;v[9]=g||0;v[13]=h||0;v[2]=k||0;v[6]=l||0;v[10]=void 0!==n?n:1;v[14]=q||0;v[3]=r||0;v[7]=t||0;v[11]=s||0;v[15]=void 0!==p?p:1};
THREE.Matrix4.prototype={constructor:THREE.Matrix4,set:function(a,b,c,d,e,f,g,h,k,l,n,q,r,t,s,p){var v=this.elements;v[0]=a;v[4]=b;v[8]=c;v[12]=d;v[1]=e;v[5]=f;v[9]=g;v[13]=h;v[2]=k;v[6]=l;v[10]=n;v[14]=q;v[3]=r;v[7]=t;v[11]=s;v[15]=p;return this},identity:function(){this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);return this},copy:function(a){this.elements.set(a.elements);return this},extractPosition:function(a){console.warn("THREEMatrix4: .extractPosition() has been renamed to .copyPosition().");return this.copyPosition(a)},
copyPosition:function(a){var b=this.elements;a=a.elements;b[12]=a[12];b[13]=a[13];b[14]=a[14];return this},extractRotation:function(){var a=new THREE.Vector3;return function(b){var c=this.elements;b=b.elements;var d=1/a.set(b[0],b[1],b[2]).length(),e=1/a.set(b[4],b[5],b[6]).length(),f=1/a.set(b[8],b[9],b[10]).length();c[0]=b[0]*d;c[1]=b[1]*d;c[2]=b[2]*d;c[4]=b[4]*e;c[5]=b[5]*e;c[6]=b[6]*e;c[8]=b[8]*f;c[9]=b[9]*f;c[10]=b[10]*f;return this}}(),makeRotationFromEuler:function(a){!1===a instanceof THREE.Euler&&
console.error("THREE.Matrix: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");var b=this.elements,c=a.x,d=a.y,e=a.z,f=Math.cos(c),c=Math.sin(c),g=Math.cos(d),d=Math.sin(d),h=Math.cos(e),e=Math.sin(e);if("XYZ"===a.order){a=f*h;var k=f*e,l=c*h,n=c*e;b[0]=g*h;b[4]=-g*e;b[8]=d;b[1]=k+l*d;b[5]=a-n*d;b[9]=-c*g;b[2]=n-a*d;b[6]=l+k*d;b[10]=f*g}else"YXZ"===a.order?(a=g*h,k=g*e,l=d*h,n=d*e,b[0]=a+n*c,b[4]=l*c-k,b[8]=f*d,b[1]=f*e,b[5]=f*h,b[9]=-c,b[2]=k*c-l,b[6]=n+a*c,
b[10]=f*g):"ZXY"===a.order?(a=g*h,k=g*e,l=d*h,n=d*e,b[0]=a-n*c,b[4]=-f*e,b[8]=l+k*c,b[1]=k+l*c,b[5]=f*h,b[9]=n-a*c,b[2]=-f*d,b[6]=c,b[10]=f*g):"ZYX"===a.order?(a=f*h,k=f*e,l=c*h,n=c*e,b[0]=g*h,b[4]=l*d-k,b[8]=a*d+n,b[1]=g*e,b[5]=n*d+a,b[9]=k*d-l,b[2]=-d,b[6]=c*g,b[10]=f*g):"YZX"===a.order?(a=f*g,k=f*d,l=c*g,n=c*d,b[0]=g*h,b[4]=n-a*e,b[8]=l*e+k,b[1]=e,b[5]=f*h,b[9]=-c*h,b[2]=-d*h,b[6]=k*e+l,b[10]=a-n*e):"XZY"===a.order&&(a=f*g,k=f*d,l=c*g,n=c*d,b[0]=g*h,b[4]=-e,b[8]=d*h,b[1]=a*e+n,b[5]=f*h,b[9]=k*
e-l,b[2]=l*e-k,b[6]=c*h,b[10]=n*e+a);b[3]=0;b[7]=0;b[11]=0;b[12]=0;b[13]=0;b[14]=0;b[15]=1;return this},setRotationFromQuaternion:function(a){console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion().");return this.makeRotationFromQuaternion(a)},makeRotationFromQuaternion:function(a){var b=this.elements,c=a.x,d=a.y,e=a.z,f=a.w,g=c+c,h=d+d,k=e+e;a=c*g;var l=c*h,c=c*k,n=d*h,d=d*k,e=e*k,g=f*g,h=f*h,f=f*k;b[0]=1-(n+e);b[4]=l-f;b[8]=c+h;b[1]=l+f;b[5]=1-
(a+e);b[9]=d-g;b[2]=c-h;b[6]=d+g;b[10]=1-(a+n);b[3]=0;b[7]=0;b[11]=0;b[12]=0;b[13]=0;b[14]=0;b[15]=1;return this},lookAt:function(){var a=new THREE.Vector3,b=new THREE.Vector3,c=new THREE.Vector3;return function(d,e,f){var g=this.elements;c.subVectors(d,e).normalize();0===c.length()&&(c.z=1);a.crossVectors(f,c).normalize();0===a.length()&&(c.x+=1E-4,a.crossVectors(f,c).normalize());b.crossVectors(c,a);g[0]=a.x;g[4]=b.x;g[8]=c.x;g[1]=a.y;g[5]=b.y;g[9]=c.y;g[2]=a.z;g[6]=b.z;g[10]=c.z;return this}}(),
multiply:function(a,b){return void 0!==b?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(a,b)):this.multiplyMatrices(this,a)},multiplyMatrices:function(a,b){var c=a.elements,d=b.elements,e=this.elements,f=c[0],g=c[4],h=c[8],k=c[12],l=c[1],n=c[5],q=c[9],r=c[13],t=c[2],s=c[6],p=c[10],v=c[14],w=c[3],u=c[7],D=c[11],c=c[15],A=d[0],x=d[4],C=d[8],I=d[12],z=d[1],y=d[5],K=d[9],N=d[13],ba=d[2],P=d[6],O=d[10],J=d[14],E=d[3],
Q=d[7],L=d[11],d=d[15];e[0]=f*A+g*z+h*ba+k*E;e[4]=f*x+g*y+h*P+k*Q;e[8]=f*C+g*K+h*O+k*L;e[12]=f*I+g*N+h*J+k*d;e[1]=l*A+n*z+q*ba+r*E;e[5]=l*x+n*y+q*P+r*Q;e[9]=l*C+n*K+q*O+r*L;e[13]=l*I+n*N+q*J+r*d;e[2]=t*A+s*z+p*ba+v*E;e[6]=t*x+s*y+p*P+v*Q;e[10]=t*C+s*K+p*O+v*L;e[14]=t*I+s*N+p*J+v*d;e[3]=w*A+u*z+D*ba+c*E;e[7]=w*x+u*y+D*P+c*Q;e[11]=w*C+u*K+D*O+c*L;e[15]=w*I+u*N+D*J+c*d;return this},multiplyToArray:function(a,b,c){var d=this.elements;this.multiplyMatrices(a,b);c[0]=d[0];c[1]=d[1];c[2]=d[2];c[3]=d[3];
c[4]=d[4];c[5]=d[5];c[6]=d[6];c[7]=d[7];c[8]=d[8];c[9]=d[9];c[10]=d[10];c[11]=d[11];c[12]=d[12];c[13]=d[13];c[14]=d[14];c[15]=d[15];return this},multiplyScalar:function(a){var b=this.elements;b[0]*=a;b[4]*=a;b[8]*=a;b[12]*=a;b[1]*=a;b[5]*=a;b[9]*=a;b[13]*=a;b[2]*=a;b[6]*=a;b[10]*=a;b[14]*=a;b[3]*=a;b[7]*=a;b[11]*=a;b[15]*=a;return this},multiplyVector3:function(a){console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) or vector.applyProjection( matrix ) instead.");
return a.applyProjection(this)},multiplyVector4:function(a){console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead.");return a.applyMatrix4(this)},multiplyVector3Array:function(a){console.warn("THREE.Matrix4: .multiplyVector3Array() has been renamed. Use matrix.applyToVector3Array( array ) instead.");return this.applyToVector3Array(a)},applyToVector3Array:function(){var a=new THREE.Vector3;return function(b,c,d){void 0===c&&(c=0);void 0===d&&(d=
b.length);for(var e=0;e<d;e+=3,c+=3)a.x=b[c],a.y=b[c+1],a.z=b[c+2],a.applyMatrix4(this),b[c]=a.x,b[c+1]=a.y,b[c+2]=a.z;return b}}(),rotateAxis:function(a){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead.");a.transformDirection(this)},crossVector:function(a){console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead.");return a.applyMatrix4(this)},determinant:function(){var a=this.elements,b=
a[0],c=a[4],d=a[8],e=a[12],f=a[1],g=a[5],h=a[9],k=a[13],l=a[2],n=a[6],q=a[10],r=a[14];return a[3]*(+e*h*n-d*k*n-e*g*q+c*k*q+d*g*r-c*h*r)+a[7]*(+b*h*r-b*k*q+e*f*q-d*f*r+d*k*l-e*h*l)+a[11]*(+b*k*n-b*g*r-e*f*n+c*f*r+e*g*l-c*k*l)+a[15]*(-d*g*l-b*h*n+b*g*q+d*f*n-c*f*q+c*h*l)},transpose:function(){var a=this.elements,b;b=a[1];a[1]=a[4];a[4]=b;b=a[2];a[2]=a[8];a[8]=b;b=a[6];a[6]=a[9];a[9]=b;b=a[3];a[3]=a[12];a[12]=b;b=a[7];a[7]=a[13];a[13]=b;b=a[11];a[11]=a[14];a[14]=b;return this},flattenToArrayOffset:function(a,
b){var c=this.elements;a[b]=c[0];a[b+1]=c[1];a[b+2]=c[2];a[b+3]=c[3];a[b+4]=c[4];a[b+5]=c[5];a[b+6]=c[6];a[b+7]=c[7];a[b+8]=c[8];a[b+9]=c[9];a[b+10]=c[10];a[b+11]=c[11];a[b+12]=c[12];a[b+13]=c[13];a[b+14]=c[14];a[b+15]=c[15];return a},getPosition:function(){var a=new THREE.Vector3;return function(){console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead.");var b=this.elements;return a.set(b[12],b[13],b[14])}}(),setPosition:function(a){var b=
this.elements;b[12]=a.x;b[13]=a.y;b[14]=a.z;return this},getInverse:function(a,b){var c=this.elements,d=a.elements,e=d[0],f=d[4],g=d[8],h=d[12],k=d[1],l=d[5],n=d[9],q=d[13],r=d[2],t=d[6],s=d[10],p=d[14],v=d[3],w=d[7],u=d[11],d=d[15];c[0]=n*p*w-q*s*w+q*t*u-l*p*u-n*t*d+l*s*d;c[4]=h*s*w-g*p*w-h*t*u+f*p*u+g*t*d-f*s*d;c[8]=g*q*w-h*n*w+h*l*u-f*q*u-g*l*d+f*n*d;c[12]=h*n*t-g*q*t-h*l*s+f*q*s+g*l*p-f*n*p;c[1]=q*s*v-n*p*v-q*r*u+k*p*u+n*r*d-k*s*d;c[5]=g*p*v-h*s*v+h*r*u-e*p*u-g*r*d+e*s*d;c[9]=h*n*v-g*q*v-h*k*
u+e*q*u+g*k*d-e*n*d;c[13]=g*q*r-h*n*r+h*k*s-e*q*s-g*k*p+e*n*p;c[2]=l*p*v-q*t*v+q*r*w-k*p*w-l*r*d+k*t*d;c[6]=h*t*v-f*p*v-h*r*w+e*p*w+f*r*d-e*t*d;c[10]=f*q*v-h*l*v+h*k*w-e*q*w-f*k*d+e*l*d;c[14]=h*l*r-f*q*r-h*k*t+e*q*t+f*k*p-e*l*p;c[3]=n*t*v-l*s*v-n*r*w+k*s*w+l*r*u-k*t*u;c[7]=f*s*v-g*t*v+g*r*w-e*s*w-f*r*u+e*t*u;c[11]=g*l*v-f*n*v-g*k*w+e*n*w+f*k*u-e*l*u;c[15]=f*n*r-g*l*r+g*k*t-e*n*t-f*k*s+e*l*s;c=e*c[0]+k*c[4]+r*c[8]+v*c[12];if(0==c){if(b)throw Error("Matrix4.getInverse(): can't invert matrix, determinant is 0");
console.warn("Matrix4.getInverse(): can't invert matrix, determinant is 0");this.identity();return this}this.multiplyScalar(1/c);return this},translate:function(a){console.warn("THREE.Matrix4: .translate() has been removed.")},rotateX:function(a){console.warn("THREE.Matrix4: .rotateX() has been removed.")},rotateY:function(a){console.warn("THREE.Matrix4: .rotateY() has been removed.")},rotateZ:function(a){console.warn("THREE.Matrix4: .rotateZ() has been removed.")},rotateByAxis:function(a,b){console.warn("THREE.Matrix4: .rotateByAxis() has been removed.")},
scale:function(a){var b=this.elements,c=a.x,d=a.y;a=a.z;b[0]*=c;b[4]*=d;b[8]*=a;b[1]*=c;b[5]*=d;b[9]*=a;b[2]*=c;b[6]*=d;b[10]*=a;b[3]*=c;b[7]*=d;b[11]*=a;return this},getMaxScaleOnAxis:function(){var a=this.elements;return Math.sqrt(Math.max(a[0]*a[0]+a[1]*a[1]+a[2]*a[2],Math.max(a[4]*a[4]+a[5]*a[5]+a[6]*a[6],a[8]*a[8]+a[9]*a[9]+a[10]*a[10])))},makeTranslation:function(a,b,c){this.set(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1);return this},makeRotationX:function(a){var b=Math.cos(a);a=Math.sin(a);this.set(1,
0,0,0,0,b,-a,0,0,a,b,0,0,0,0,1);return this},makeRotationY:function(a){var b=Math.cos(a);a=Math.sin(a);this.set(b,0,a,0,0,1,0,0,-a,0,b,0,0,0,0,1);return this},makeRotationZ:function(a){var b=Math.cos(a);a=Math.sin(a);this.set(b,-a,0,0,a,b,0,0,0,0,1,0,0,0,0,1);return this},makeRotationAxis:function(a,b){var c=Math.cos(b),d=Math.sin(b),e=1-c,f=a.x,g=a.y,h=a.z,k=e*f,l=e*g;this.set(k*f+c,k*g-d*h,k*h+d*g,0,k*g+d*h,l*g+c,l*h-d*f,0,k*h-d*g,l*h+d*f,e*h*h+c,0,0,0,0,1);return this},makeScale:function(a,b,c){this.set(a,
0,0,0,0,b,0,0,0,0,c,0,0,0,0,1);return this},compose:function(a,b,c){this.makeRotationFromQuaternion(b);this.scale(c);this.setPosition(a);return this},decompose:function(){var a=new THREE.Vector3,b=new THREE.Matrix4;return function(c,d,e){var f=this.elements,g=a.set(f[0],f[1],f[2]).length(),h=a.set(f[4],f[5],f[6]).length(),k=a.set(f[8],f[9],f[10]).length();0>this.determinant()&&(g=-g);c.x=f[12];c.y=f[13];c.z=f[14];b.elements.set(this.elements);c=1/g;var f=1/h,l=1/k;b.elements[0]*=c;b.elements[1]*=
c;b.elements[2]*=c;b.elements[4]*=f;b.elements[5]*=f;b.elements[6]*=f;b.elements[8]*=l;b.elements[9]*=l;b.elements[10]*=l;d.setFromRotationMatrix(b);e.x=g;e.y=h;e.z=k;return this}}(),makeFrustum:function(a,b,c,d,e,f){var g=this.elements;g[0]=2*e/(b-a);g[4]=0;g[8]=(b+a)/(b-a);g[12]=0;g[1]=0;g[5]=2*e/(d-c);g[9]=(d+c)/(d-c);g[13]=0;g[2]=0;g[6]=0;g[10]=-(f+e)/(f-e);g[14]=-2*f*e/(f-e);g[3]=0;g[7]=0;g[11]=-1;g[15]=0;return this},makePerspective:function(a,b,c,d){a=c*Math.tan(THREE.Math.degToRad(0.5*a));
var e=-a;return this.makeFrustum(e*b,a*b,e,a,c,d)},makeOrthographic:function(a,b,c,d,e,f){var g=this.elements,h=b-a,k=c-d,l=f-e;g[0]=2/h;g[4]=0;g[8]=0;g[12]=-((b+a)/h);g[1]=0;g[5]=2/k;g[9]=0;g[13]=-((c+d)/k);g[2]=0;g[6]=0;g[10]=-2/l;g[14]=-((f+e)/l);g[3]=0;g[7]=0;g[11]=0;g[15]=1;return this},fromArray:function(a){this.elements.set(a);return this},toArray:function(){var a=this.elements;return[a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7],a[8],a[9],a[10],a[11],a[12],a[13],a[14],a[15]]},clone:function(){var a=
this.elements;return new THREE.Matrix4(a[0],a[4],a[8],a[12],a[1],a[5],a[9],a[13],a[2],a[6],a[10],a[14],a[3],a[7],a[11],a[15])}};THREE.Ray=function(a,b){this.origin=void 0!==a?a:new THREE.Vector3;this.direction=void 0!==b?b:new THREE.Vector3};
THREE.Ray.prototype={constructor:THREE.Ray,set:function(a,b){this.origin.copy(a);this.direction.copy(b);return this},copy:function(a){this.origin.copy(a.origin);this.direction.copy(a.direction);return this},at:function(a,b){return(b||new THREE.Vector3).copy(this.direction).multiplyScalar(a).add(this.origin)},recast:function(){var a=new THREE.Vector3;return function(b){this.origin.copy(this.at(b,a));return this}}(),closestPointToPoint:function(a,b){var c=b||new THREE.Vector3;c.subVectors(a,this.origin);
var d=c.dot(this.direction);return 0>d?c.copy(this.origin):c.copy(this.direction).multiplyScalar(d).add(this.origin)},distanceToPoint:function(){var a=new THREE.Vector3;return function(b){var c=a.subVectors(b,this.origin).dot(this.direction);if(0>c)return this.origin.distanceTo(b);a.copy(this.direction).multiplyScalar(c).add(this.origin);return a.distanceTo(b)}}(),distanceSqToSegment:function(a,b,c,d){var e=a.clone().add(b).multiplyScalar(0.5),f=b.clone().sub(a).normalize(),g=0.5*a.distanceTo(b),
h=this.origin.clone().sub(e);a=-this.direction.dot(f);b=h.dot(this.direction);var k=-h.dot(f),l=h.lengthSq(),n=Math.abs(1-a*a),q,r;0<=n?(h=a*k-b,q=a*b-k,r=g*n,0<=h?q>=-r?q<=r?(g=1/n,h*=g,q*=g,a=h*(h+a*q+2*b)+q*(a*h+q+2*k)+l):(q=g,h=Math.max(0,-(a*q+b)),a=-h*h+q*(q+2*k)+l):(q=-g,h=Math.max(0,-(a*q+b)),a=-h*h+q*(q+2*k)+l):q<=-r?(h=Math.max(0,-(-a*g+b)),q=0<h?-g:Math.min(Math.max(-g,-k),g),a=-h*h+q*(q+2*k)+l):q<=r?(h=0,q=Math.min(Math.max(-g,-k),g),a=q*(q+2*k)+l):(h=Math.max(0,-(a*g+b)),q=0<h?g:Math.min(Math.max(-g,
-k),g),a=-h*h+q*(q+2*k)+l)):(q=0<a?-g:g,h=Math.max(0,-(a*q+b)),a=-h*h+q*(q+2*k)+l);c&&c.copy(this.direction.clone().multiplyScalar(h).add(this.origin));d&&d.copy(f.clone().multiplyScalar(q).add(e));return a},isIntersectionSphere:function(a){return this.distanceToPoint(a.center)<=a.radius},intersectSphere:function(){var a=new THREE.Vector3;return function(b,c){a.subVectors(b.center,this.origin);var d=a.dot(this.direction),e=a.dot(a)-d*d,f=b.radius*b.radius;if(e>f)return null;f=Math.sqrt(f-e);e=d-f;
d+=f;return 0>e&&0>d?null:0>e?this.at(d,c):this.at(e,c)}}(),isIntersectionPlane:function(a){var b=a.distanceToPoint(this.origin);return 0===b||0>a.normal.dot(this.direction)*b?!0:!1},distanceToPlane:function(a){var b=a.normal.dot(this.direction);if(0==b)return 0==a.distanceToPoint(this.origin)?0:null;a=-(this.origin.dot(a.normal)+a.constant)/b;return 0<=a?a:null},intersectPlane:function(a,b){var c=this.distanceToPlane(a);return null===c?null:this.at(c,b)},isIntersectionBox:function(){var a=new THREE.Vector3;
return function(b){return null!==this.intersectBox(b,a)}}(),intersectBox:function(a,b){var c,d,e,f,g;d=1/this.direction.x;f=1/this.direction.y;g=1/this.direction.z;var h=this.origin;0<=d?(c=(a.min.x-h.x)*d,d*=a.max.x-h.x):(c=(a.max.x-h.x)*d,d*=a.min.x-h.x);0<=f?(e=(a.min.y-h.y)*f,f*=a.max.y-h.y):(e=(a.max.y-h.y)*f,f*=a.min.y-h.y);if(c>f||e>d)return null;if(e>c||c!==c)c=e;if(f<d||d!==d)d=f;0<=g?(e=(a.min.z-h.z)*g,g*=a.max.z-h.z):(e=(a.max.z-h.z)*g,g*=a.min.z-h.z);if(c>g||e>d)return null;if(e>c||c!==
c)c=e;if(g<d||d!==d)d=g;return 0>d?null:this.at(0<=c?c:d,b)},intersectTriangle:function(){var a=new THREE.Vector3,b=new THREE.Vector3,c=new THREE.Vector3,d=new THREE.Vector3;return function(e,f,g,h,k){b.subVectors(f,e);c.subVectors(g,e);d.crossVectors(b,c);f=this.direction.dot(d);if(0<f){if(h)return null;h=1}else if(0>f)h=-1,f=-f;else return null;a.subVectors(this.origin,e);e=h*this.direction.dot(c.crossVectors(a,c));if(0>e)return null;g=h*this.direction.dot(b.cross(a));if(0>g||e+g>f)return null;
e=-h*a.dot(d);return 0>e?null:this.at(e/f,k)}}(),applyMatrix4:function(a){this.direction.add(this.origin).applyMatrix4(a);this.origin.applyMatrix4(a);this.direction.sub(this.origin);this.direction.normalize();return this},equals:function(a){return a.origin.equals(this.origin)&&a.direction.equals(this.direction)},clone:function(){return(new THREE.Ray).copy(this)}};THREE.Sphere=function(a,b){this.center=void 0!==a?a:new THREE.Vector3;this.radius=void 0!==b?b:0};
THREE.Sphere.prototype={constructor:THREE.Sphere,set:function(a,b){this.center.copy(a);this.radius=b;return this},setFromPoints:function(){var a=new THREE.Box3;return function(b,c){var d=this.center;void 0!==c?d.copy(c):a.setFromPoints(b).center(d);for(var e=0,f=0,g=b.length;f<g;f++)e=Math.max(e,d.distanceToSquared(b[f]));this.radius=Math.sqrt(e);return this}}(),copy:function(a){this.center.copy(a.center);this.radius=a.radius;return this},empty:function(){return 0>=this.radius},containsPoint:function(a){return a.distanceToSquared(this.center)<=
this.radius*this.radius},distanceToPoint:function(a){return a.distanceTo(this.center)-this.radius},intersectsSphere:function(a){var b=this.radius+a.radius;return a.center.distanceToSquared(this.center)<=b*b},clampPoint:function(a,b){var c=this.center.distanceToSquared(a),d=b||new THREE.Vector3;d.copy(a);c>this.radius*this.radius&&(d.sub(this.center).normalize(),d.multiplyScalar(this.radius).add(this.center));return d},getBoundingBox:function(a){a=a||new THREE.Box3;a.set(this.center,this.center);a.expandByScalar(this.radius);
return a},applyMatrix4:function(a){this.center.applyMatrix4(a);this.radius*=a.getMaxScaleOnAxis();return this},translate:function(a){this.center.add(a);return this},equals:function(a){return a.center.equals(this.center)&&a.radius===this.radius},clone:function(){return(new THREE.Sphere).copy(this)}};
THREE.Frustum=function(a,b,c,d,e,f){this.planes=[void 0!==a?a:new THREE.Plane,void 0!==b?b:new THREE.Plane,void 0!==c?c:new THREE.Plane,void 0!==d?d:new THREE.Plane,void 0!==e?e:new THREE.Plane,void 0!==f?f:new THREE.Plane]};
THREE.Frustum.prototype={constructor:THREE.Frustum,set:function(a,b,c,d,e,f){var g=this.planes;g[0].copy(a);g[1].copy(b);g[2].copy(c);g[3].copy(d);g[4].copy(e);g[5].copy(f);return this},copy:function(a){for(var b=this.planes,c=0;6>c;c++)b[c].copy(a.planes[c]);return this},setFromMatrix:function(a){var b=this.planes,c=a.elements;a=c[0];var d=c[1],e=c[2],f=c[3],g=c[4],h=c[5],k=c[6],l=c[7],n=c[8],q=c[9],r=c[10],t=c[11],s=c[12],p=c[13],v=c[14],c=c[15];b[0].setComponents(f-a,l-g,t-n,c-s).normalize();b[1].setComponents(f+
a,l+g,t+n,c+s).normalize();b[2].setComponents(f+d,l+h,t+q,c+p).normalize();b[3].setComponents(f-d,l-h,t-q,c-p).normalize();b[4].setComponents(f-e,l-k,t-r,c-v).normalize();b[5].setComponents(f+e,l+k,t+r,c+v).normalize();return this},intersectsObject:function(){var a=new THREE.Sphere;return function(b){var c=b.geometry;null===c.boundingSphere&&c.computeBoundingSphere();a.copy(c.boundingSphere);a.applyMatrix4(b.matrixWorld);return this.intersectsSphere(a)}}(),intersectsSphere:function(a){var b=this.planes,
c=a.center;a=-a.radius;for(var d=0;6>d;d++)if(b[d].distanceToPoint(c)<a)return!1;return!0},intersectsBox:function(){var a=new THREE.Vector3,b=new THREE.Vector3;return function(c){for(var d=this.planes,e=0;6>e;e++){var f=d[e];a.x=0<f.normal.x?c.min.x:c.max.x;b.x=0<f.normal.x?c.max.x:c.min.x;a.y=0<f.normal.y?c.min.y:c.max.y;b.y=0<f.normal.y?c.max.y:c.min.y;a.z=0<f.normal.z?c.min.z:c.max.z;b.z=0<f.normal.z?c.max.z:c.min.z;var g=f.distanceToPoint(a),f=f.distanceToPoint(b);if(0>g&&0>f)return!1}return!0}}(),
containsPoint:function(a){for(var b=this.planes,c=0;6>c;c++)if(0>b[c].distanceToPoint(a))return!1;return!0},clone:function(){return(new THREE.Frustum).copy(this)}};THREE.Plane=function(a,b){this.normal=void 0!==a?a:new THREE.Vector3(1,0,0);this.constant=void 0!==b?b:0};
THREE.Plane.prototype={constructor:THREE.Plane,set:function(a,b){this.normal.copy(a);this.constant=b;return this},setComponents:function(a,b,c,d){this.normal.set(a,b,c);this.constant=d;return this},setFromNormalAndCoplanarPoint:function(a,b){this.normal.copy(a);this.constant=-b.dot(this.normal);return this},setFromCoplanarPoints:function(){var a=new THREE.Vector3,b=new THREE.Vector3;return function(c,d,e){d=a.subVectors(e,d).cross(b.subVectors(c,d)).normalize();this.setFromNormalAndCoplanarPoint(d,
c);return this}}(),copy:function(a){this.normal.copy(a.normal);this.constant=a.constant;return this},normalize:function(){var a=1/this.normal.length();this.normal.multiplyScalar(a);this.constant*=a;return this},negate:function(){this.constant*=-1;this.normal.negate();return this},distanceToPoint:function(a){return this.normal.dot(a)+this.constant},distanceToSphere:function(a){return this.distanceToPoint(a.center)-a.radius},projectPoint:function(a,b){return this.orthoPoint(a,b).sub(a).negate()},orthoPoint:function(a,
b){var c=this.distanceToPoint(a);return(b||new THREE.Vector3).copy(this.normal).multiplyScalar(c)},isIntersectionLine:function(a){var b=this.distanceToPoint(a.start);a=this.distanceToPoint(a.end);return 0>b&&0<a||0>a&&0<b},intersectLine:function(){var a=new THREE.Vector3;return function(b,c){var d=c||new THREE.Vector3,e=b.delta(a),f=this.normal.dot(e);if(0==f){if(0==this.distanceToPoint(b.start))return d.copy(b.start)}else return f=-(b.start.dot(this.normal)+this.constant)/f,0>f||1<f?void 0:d.copy(e).multiplyScalar(f).add(b.start)}}(),
coplanarPoint:function(a){return(a||new THREE.Vector3).copy(this.normal).multiplyScalar(-this.constant)},applyMatrix4:function(){var a=new THREE.Vector3,b=new THREE.Vector3,c=new THREE.Matrix3;return function(d,e){var f=e||c.getNormalMatrix(d),f=a.copy(this.normal).applyMatrix3(f),g=this.coplanarPoint(b);g.applyMatrix4(d);this.setFromNormalAndCoplanarPoint(f,g);return this}}(),translate:function(a){this.constant-=a.dot(this.normal);return this},equals:function(a){return a.normal.equals(this.normal)&&
a.constant==this.constant},clone:function(){return(new THREE.Plane).copy(this)}};
THREE.Math={generateUUID:function(){var a="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),b=Array(36),c=0,d;return function(){for(var e=0;36>e;e++)8==e||13==e||18==e||23==e?b[e]="-":14==e?b[e]="4":(2>=c&&(c=33554432+16777216*Math.random()|0),d=c&15,c>>=4,b[e]=a[19==e?d&3|8:d]);return b.join("")}}(),clamp:function(a,b,c){return a<b?b:a>c?c:a},clampBottom:function(a,b){return a<b?b:a},mapLinear:function(a,b,c,d,e){return d+(a-b)*(e-d)/(c-b)},smoothstep:function(a,b,c){if(a<=
b)return 0;if(a>=c)return 1;a=(a-b)/(c-b);return a*a*(3-2*a)},smootherstep:function(a,b,c){if(a<=b)return 0;if(a>=c)return 1;a=(a-b)/(c-b);return a*a*a*(a*(6*a-15)+10)},random16:function(){return(65280*Math.random()+255*Math.random())/65535},randInt:function(a,b){return a+Math.floor(Math.random()*(b-a+1))},randFloat:function(a,b){return a+Math.random()*(b-a)},randFloatSpread:function(a){return a*(0.5-Math.random())},sign:function(a){return 0>a?-1:0<a?1:0},degToRad:function(){var a=Math.PI/180;return function(b){return b*
a}}(),radToDeg:function(){var a=180/Math.PI;return function(b){return b*a}}(),isPowerOfTwo:function(a){return 0===(a&a-1)&&0!==a}};
THREE.Spline=function(a){function b(a,b,c,d,e,f,g){a=0.5*(c-a);d=0.5*(d-b);return(2*(b-c)+a+d)*g+(-3*(b-c)-2*a-d)*f+a*e+b}this.points=a;var c=[],d={x:0,y:0,z:0},e,f,g,h,k,l,n,q,r;this.initFromArray=function(a){this.points=[];for(var b=0;b<a.length;b++)this.points[b]={x:a[b][0],y:a[b][1],z:a[b][2]}};this.getPoint=function(a){e=(this.points.length-1)*a;f=Math.floor(e);g=e-f;c[0]=0===f?f:f-1;c[1]=f;c[2]=f>this.points.length-2?this.points.length-1:f+1;c[3]=f>this.points.length-3?this.points.length-1:
f+2;l=this.points[c[0]];n=this.points[c[1]];q=this.points[c[2]];r=this.points[c[3]];h=g*g;k=g*h;d.x=b(l.x,n.x,q.x,r.x,g,h,k);d.y=b(l.y,n.y,q.y,r.y,g,h,k);d.z=b(l.z,n.z,q.z,r.z,g,h,k);return d};this.getControlPointsArray=function(){var a,b,c=this.points.length,d=[];for(a=0;a<c;a++)b=this.points[a],d[a]=[b.x,b.y,b.z];return d};this.getLength=function(a){var b,c,d,e=b=b=0,f=new THREE.Vector3,g=new THREE.Vector3,h=[],k=0;h[0]=0;a||(a=100);c=this.points.length*a;f.copy(this.points[0]);for(a=1;a<c;a++)b=
a/c,d=this.getPoint(b),g.copy(d),k+=g.distanceTo(f),f.copy(d),b*=this.points.length-1,b=Math.floor(b),b!=e&&(h[b]=k,e=b);h[h.length]=k;return{chunks:h,total:k}};this.reparametrizeByArcLength=function(a){var b,c,d,e,f,g,h=[],k=new THREE.Vector3,l=this.getLength();h.push(k.copy(this.points[0]).clone());for(b=1;b<this.points.length;b++){c=l.chunks[b]-l.chunks[b-1];g=Math.ceil(a*c/l.total);e=(b-1)/(this.points.length-1);f=b/(this.points.length-1);for(c=1;c<g-1;c++)d=e+1/g*c*(f-e),d=this.getPoint(d),h.push(k.copy(d).clone());
h.push(k.copy(this.points[b]).clone())}this.points=h}};THREE.Triangle=function(a,b,c){this.a=void 0!==a?a:new THREE.Vector3;this.b=void 0!==b?b:new THREE.Vector3;this.c=void 0!==c?c:new THREE.Vector3};THREE.Triangle.normal=function(){var a=new THREE.Vector3;return function(b,c,d,e){e=e||new THREE.Vector3;e.subVectors(d,c);a.subVectors(b,c);e.cross(a);b=e.lengthSq();return 0<b?e.multiplyScalar(1/Math.sqrt(b)):e.set(0,0,0)}}();
THREE.Triangle.barycoordFromPoint=function(){var a=new THREE.Vector3,b=new THREE.Vector3,c=new THREE.Vector3;return function(d,e,f,g,h){a.subVectors(g,e);b.subVectors(f,e);c.subVectors(d,e);d=a.dot(a);e=a.dot(b);f=a.dot(c);var k=b.dot(b);g=b.dot(c);var l=d*k-e*e;h=h||new THREE.Vector3;if(0==l)return h.set(-2,-1,-1);l=1/l;k=(k*f-e*g)*l;d=(d*g-e*f)*l;return h.set(1-k-d,d,k)}}();
THREE.Triangle.containsPoint=function(){var a=new THREE.Vector3;return function(b,c,d,e){b=THREE.Triangle.barycoordFromPoint(b,c,d,e,a);return 0<=b.x&&0<=b.y&&1>=b.x+b.y}}();
THREE.Triangle.prototype={constructor:THREE.Triangle,set:function(a,b,c){this.a.copy(a);this.b.copy(b);this.c.copy(c);return this},setFromPointsAndIndices:function(a,b,c,d){this.a.copy(a[b]);this.b.copy(a[c]);this.c.copy(a[d]);return this},copy:function(a){this.a.copy(a.a);this.b.copy(a.b);this.c.copy(a.c);return this},area:function(){var a=new THREE.Vector3,b=new THREE.Vector3;return function(){a.subVectors(this.c,this.b);b.subVectors(this.a,this.b);return 0.5*a.cross(b).length()}}(),midpoint:function(a){return(a||
new THREE.Vector3).addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)},normal:function(a){return THREE.Triangle.normal(this.a,this.b,this.c,a)},plane:function(a){return(a||new THREE.Plane).setFromCoplanarPoints(this.a,this.b,this.c)},barycoordFromPoint:function(a,b){return THREE.Triangle.barycoordFromPoint(a,this.a,this.b,this.c,b)},containsPoint:function(a){return THREE.Triangle.containsPoint(a,this.a,this.b,this.c)},equals:function(a){return a.a.equals(this.a)&&a.b.equals(this.b)&&a.c.equals(this.c)},
clone:function(){return(new THREE.Triangle).copy(this)}};THREE.Clock=function(a){this.autoStart=void 0!==a?a:!0;this.elapsedTime=this.oldTime=this.startTime=0;this.running=!1};
THREE.Clock.prototype={constructor:THREE.Clock,start:function(){this.oldTime=this.startTime=void 0!==self.performance&&void 0!==self.performance.now?self.performance.now():Date.now();this.running=!0},stop:function(){this.getElapsedTime();this.running=!1},getElapsedTime:function(){this.getDelta();return this.elapsedTime},getDelta:function(){var a=0;this.autoStart&&!this.running&&this.start();if(this.running){var b=void 0!==self.performance&&void 0!==self.performance.now?self.performance.now():Date.now(),
a=0.001*(b-this.oldTime);this.oldTime=b;this.elapsedTime+=a}return a}};THREE.EventDispatcher=function(){};
THREE.EventDispatcher.prototype={constructor:THREE.EventDispatcher,apply:function(a){a.addEventListener=THREE.EventDispatcher.prototype.addEventListener;a.hasEventListener=THREE.EventDispatcher.prototype.hasEventListener;a.removeEventListener=THREE.EventDispatcher.prototype.removeEventListener;a.dispatchEvent=THREE.EventDispatcher.prototype.dispatchEvent},addEventListener:function(a,b){void 0===this._listeners&&(this._listeners={});var c=this._listeners;void 0===c[a]&&(c[a]=[]);-1===c[a].indexOf(b)&&
c[a].push(b)},hasEventListener:function(a,b){if(void 0===this._listeners)return!1;var c=this._listeners;return void 0!==c[a]&&-1!==c[a].indexOf(b)?!0:!1},removeEventListener:function(a,b){if(void 0!==this._listeners){var c=this._listeners[a];if(void 0!==c){var d=c.indexOf(b);-1!==d&&c.splice(d,1)}}},dispatchEvent:function(a){if(void 0!==this._listeners){var b=this._listeners[a.type];if(void 0!==b){a.target=this;for(var c=[],d=b.length,e=0;e<d;e++)c[e]=b[e];for(e=0;e<d;e++)c[e].call(this,a)}}}};
(function(a){a.Raycaster=function(b,c,f,g){this.ray=new a.Ray(b,c);this.near=f||0;this.far=g||Infinity;this.params={Sprite:{},Mesh:{},PointCloud:{threshold:1},LOD:{},Line:{}}};var b=function(a,b){return a.distance-b.distance},c=function(a,b,f,g){a.raycast(b,f);if(!0===g){a=a.children;g=0;for(var h=a.length;g<h;g++)c(a[g],b,f,!0)}};a.Raycaster.prototype={constructor:a.Raycaster,precision:1E-4,linePrecision:1,set:function(a,b){this.ray.set(a,b)},intersectObject:function(a,e){var f=[];c(a,this,f,e);
f.sort(b);return f},intersectObjects:function(a,e){for(var f=[],g=0,h=a.length;g<h;g++)c(a[g],this,f,e);f.sort(b);return f}}})(THREE);
THREE.Object3D=function(){this.id=THREE.Object3DIdCount++;this.uuid=THREE.Math.generateUUID();this.name="";this.parent=void 0;this.children=[];this.up=THREE.Object3D.DefaultUp.clone();var a=new THREE.Vector3,b=new THREE.Euler,c=new THREE.Quaternion,d=new THREE.Vector3(1,1,1);b.onChange(function(){c.setFromEuler(b,!1)});c.onChange(function(){b.setFromQuaternion(c,void 0,!1)});Object.defineProperties(this,{position:{enumerable:!0,value:a},rotation:{enumerable:!0,value:b},quaternion:{enumerable:!0,value:c},
scale:{enumerable:!0,value:d}});this.renderDepth=null;this.rotationAutoUpdate=!0;this.matrix=new THREE.Matrix4;this.matrixWorld=new THREE.Matrix4;this.matrixAutoUpdate=!0;this.matrixWorldNeedsUpdate=!1;this.visible=!0;this.receiveShadow=this.castShadow=!1;this.frustumCulled=!0;this.userData={}};THREE.Object3D.DefaultUp=new THREE.Vector3(0,1,0);
THREE.Object3D.prototype={constructor:THREE.Object3D,get eulerOrder(){console.warn("THREE.Object3D: .eulerOrder has been moved to .rotation.order.");return this.rotation.order},set eulerOrder(a){console.warn("THREE.Object3D: .eulerOrder has been moved to .rotation.order.");this.rotation.order=a},get useQuaternion(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set useQuaternion(a){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},
applyMatrix:function(a){this.matrix.multiplyMatrices(a,this.matrix);this.matrix.decompose(this.position,this.quaternion,this.scale)},setRotationFromAxisAngle:function(a,b){this.quaternion.setFromAxisAngle(a,b)},setRotationFromEuler:function(a){this.quaternion.setFromEuler(a,!0)},setRotationFromMatrix:function(a){this.quaternion.setFromRotationMatrix(a)},setRotationFromQuaternion:function(a){this.quaternion.copy(a)},rotateOnAxis:function(){var a=new THREE.Quaternion;return function(b,c){a.setFromAxisAngle(b,
c);this.quaternion.multiply(a);return this}}(),rotateX:function(){var a=new THREE.Vector3(1,0,0);return function(b){return this.rotateOnAxis(a,b)}}(),rotateY:function(){var a=new THREE.Vector3(0,1,0);return function(b){return this.rotateOnAxis(a,b)}}(),rotateZ:function(){var a=new THREE.Vector3(0,0,1);return function(b){return this.rotateOnAxis(a,b)}}(),translateOnAxis:function(){var a=new THREE.Vector3;return function(b,c){a.copy(b).applyQuaternion(this.quaternion);this.position.add(a.multiplyScalar(c));
return this}}(),translate:function(a,b){console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead.");return this.translateOnAxis(b,a)},translateX:function(){var a=new THREE.Vector3(1,0,0);return function(b){return this.translateOnAxis(a,b)}}(),translateY:function(){var a=new THREE.Vector3(0,1,0);return function(b){return this.translateOnAxis(a,b)}}(),translateZ:function(){var a=new THREE.Vector3(0,0,1);return function(b){return this.translateOnAxis(a,
b)}}(),localToWorld:function(a){return a.applyMatrix4(this.matrixWorld)},worldToLocal:function(){var a=new THREE.Matrix4;return function(b){return b.applyMatrix4(a.getInverse(this.matrixWorld))}}(),lookAt:function(){var a=new THREE.Matrix4;return function(b){a.lookAt(b,this.position,this.up);this.quaternion.setFromRotationMatrix(a)}}(),add:function(a){if(1<arguments.length){for(var b=0;b<arguments.length;b++)this.add(arguments[b]);return this}if(a===this)return console.error("THREE.Object3D.add:",
a,"can't be added as a child of itself."),this;if(a instanceof THREE.Object3D){void 0!==a.parent&&a.parent.remove(a);a.parent=this;a.dispatchEvent({type:"added"});this.children.push(a);for(b=this;void 0!==b.parent;)b=b.parent;void 0!==b&&b instanceof THREE.Scene&&b.__addObject(a)}else console.error("THREE.Object3D.add:",a,"is not an instance of THREE.Object3D.");return this},remove:function(a){if(1<arguments.length)for(var b=0;b<arguments.length;b++)this.remove(arguments[b]);b=this.children.indexOf(a);
if(-1!==b){a.parent=void 0;a.dispatchEvent({type:"removed"});this.children.splice(b,1);for(b=this;void 0!==b.parent;)b=b.parent;void 0!==b&&b instanceof THREE.Scene&&b.__removeObject(a)}},raycast:function(){},traverse:function(a){a(this);for(var b=0,c=this.children.length;b<c;b++)this.children[b].traverse(a)},traverseVisible:function(a){if(!1!==this.visible){a(this);for(var b=0,c=this.children.length;b<c;b++)this.children[b].traverseVisible(a)}},getObjectById:function(a,b){for(var c=0,d=this.children.length;c<
d;c++){var e=this.children[c];if(e.id===a||!0===b&&(e=e.getObjectById(a,b),void 0!==e))return e}},getObjectByName:function(a,b){for(var c=0,d=this.children.length;c<d;c++){var e=this.children[c];if(e.name===a||!0===b&&(e=e.getObjectByName(a,b),void 0!==e))return e}},getChildByName:function(a,b){console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName().");return this.getObjectByName(a,b)},updateMatrix:function(){this.matrix.compose(this.position,this.quaternion,this.scale);
this.matrixWorldNeedsUpdate=!0},updateMatrixWorld:function(a){!0===this.matrixAutoUpdate&&this.updateMatrix();if(!0===this.matrixWorldNeedsUpdate||!0===a)void 0===this.parent?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,a=!0;for(var b=0,c=this.children.length;b<c;b++)this.children[b].updateMatrixWorld(a)},clone:function(a,b){void 0===a&&(a=new THREE.Object3D);void 0===b&&(b=!0);a.name=this.name;a.up.copy(this.up);
a.position.copy(this.position);a.quaternion.copy(this.quaternion);a.scale.copy(this.scale);a.renderDepth=this.renderDepth;a.rotationAutoUpdate=this.rotationAutoUpdate;a.matrix.copy(this.matrix);a.matrixWorld.copy(this.matrixWorld);a.matrixAutoUpdate=this.matrixAutoUpdate;a.matrixWorldNeedsUpdate=this.matrixWorldNeedsUpdate;a.visible=this.visible;a.castShadow=this.castShadow;a.receiveShadow=this.receiveShadow;a.frustumCulled=this.frustumCulled;a.userData=JSON.parse(JSON.stringify(this.userData));if(!0===
b)for(var c=0;c<this.children.length;c++)a.add(this.children[c].clone());return a}};THREE.EventDispatcher.prototype.apply(THREE.Object3D.prototype);THREE.Object3DIdCount=0;
THREE.Projector=function(){function a(){if(q===t){var a=new THREE.RenderableVertex;r.push(a);t++;q++;return a}return r[q++]}function b(){if(p===w){var a=new THREE.RenderableFace;v.push(a);w++;p++;return a}return v[p++]}function c(){if(D===x){var a=new THREE.RenderableLine;A.push(a);x++;D++;return a}return A[D++]}function d(){if(I===y){var a=new THREE.RenderableSprite;z.push(a);y++;I++;return a}return z[I++]}function e(a,b){return a.z!==b.z?b.z-a.z:a.id!==b.id?a.id-b.id:0}function f(a,b){var c=0,d=
1,e=a.z+a.w,f=b.z+b.w,g=-a.z+a.w,h=-b.z+b.w;if(0<=e&&0<=f&&0<=g&&0<=h)return!0;if(0>e&&0>f||0>g&&0>h)return!1;0>e?c=Math.max(c,e/(e-f)):0>f&&(d=Math.min(d,e/(e-f)));0>g?c=Math.max(c,g/(g-h)):0>h&&(d=Math.min(d,g/(g-h)));if(d<c)return!1;a.lerp(b,c);b.lerp(a,1-d);return!0}var g,h,k=[],l=0,n,q,r=[],t=0,s,p,v=[],w=0,u,D,A=[],x=0,C,I,z=[],y=0,K={objects:[],lights:[],elements:[]},N=new THREE.Vector3,ba=new THREE.Vector3,P=new THREE.Vector3,O=new THREE.Vector3,J=new THREE.Vector4,E=new THREE.Box3(new THREE.Vector3(-1,
-1,-1),new THREE.Vector3(1,1,1)),Q=new THREE.Box3,L=Array(3),R=new THREE.Matrix4,B=new THREE.Matrix4,S,V=new THREE.Matrix4,W=new THREE.Matrix3,H=new THREE.Frustum,oa=new THREE.Vector4,$=new THREE.Vector4;this.projectVector=function(a,b){b.matrixWorldInverse.getInverse(b.matrixWorld);B.multiplyMatrices(b.projectionMatrix,b.matrixWorldInverse);return a.applyProjection(B)};this.unprojectVector=function(){var a=new THREE.Matrix4;return function(b,c){a.getInverse(c.projectionMatrix);B.multiplyMatrices(c.matrixWorld,
a);return b.applyProjection(B)}}();this.pickingRay=function(a,b){a.z=-1;var c=new THREE.Vector3(a.x,a.y,1);this.unprojectVector(a,b);this.unprojectVector(c,b);c.sub(a).normalize();return new THREE.Raycaster(a,c)};var X=new function(){var d=[],e=[],f=null,g=null,h=new THREE.Matrix3,k=function(a){var b=a.positionWorld,c=a.positionScreen;b.copy(a.position).applyMatrix4(S);c.copy(b).applyMatrix4(B);b=1/c.w;c.x*=b;c.y*=b;c.z*=b;a.visible=-1<=c.x&&1>=c.x&&-1<=c.y&&1>=c.y&&-1<=c.z&&1>=c.z},l=function(a,
b,c){if(!0===a.visible||!0===b.visible||!0===c.visible)return!0;L[0]=a.positionScreen;L[1]=b.positionScreen;L[2]=c.positionScreen;return E.isIntersectionBox(Q.setFromPoints(L))},q=function(a,b,c){return 0>(c.positionScreen.x-a.positionScreen.x)*(b.positionScreen.y-a.positionScreen.y)-(c.positionScreen.y-a.positionScreen.y)*(b.positionScreen.x-a.positionScreen.x)};return{setObject:function(a){f=a;g=f.material;h.getNormalMatrix(f.matrixWorld);d.length=0;e.length=0},projectVertex:k,checkTriangleVisibility:l,
checkBackfaceCulling:q,pushVertex:function(b,c,d){n=a();n.position.set(b,c,d);k(n)},pushNormal:function(a,b,c){d.push(a,b,c)},pushUv:function(a,b){e.push(a,b)},pushLine:function(a,b){var d=r[a],e=r[b];u=c();u.id=f.id;u.v1.copy(d);u.v2.copy(e);u.z=(d.positionScreen.z+e.positionScreen.z)/2;u.material=f.material;K.elements.push(u)},pushTriangle:function(a,c,k){var n=r[a],p=r[c],t=r[k];if(!1!==l(n,p,t)&&(g.side===THREE.DoubleSide||!0===q(n,p,t))){s=b();s.id=f.id;s.v1.copy(n);s.v2.copy(p);s.v3.copy(t);
s.z=(n.positionScreen.z+p.positionScreen.z+t.positionScreen.z)/3;for(n=0;3>n;n++)p=3*arguments[n],t=s.vertexNormalsModel[n],t.set(d[p],d[p+1],d[p+2]),t.applyMatrix3(h).normalize(),p=2*arguments[n],s.uvs[n].set(e[p],e[p+1]);s.vertexNormalsLength=3;s.material=f.material;K.elements.push(s)}}}};this.projectScene=function(n,t,w,v){I=D=p=0;K.elements.length=0;!0===n.autoUpdate&&n.updateMatrixWorld();void 0===t.parent&&t.updateMatrixWorld();R.copy(t.matrixWorldInverse.getInverse(t.matrixWorld));B.multiplyMatrices(t.projectionMatrix,
R);H.setFromMatrix(B);h=0;K.objects.length=0;K.lights.length=0;n.traverseVisible(function(a){if(a instanceof THREE.Light)K.lights.push(a);else if(a instanceof THREE.Mesh||a instanceof THREE.Line||a instanceof THREE.Sprite)if(!1===a.frustumCulled||!0===H.intersectsObject(a)){if(h===l){var b=new THREE.RenderableObject;k.push(b);l++;h++;g=b}else g=k[h++];g.id=a.id;g.object=a;null!==a.renderDepth?g.z=a.renderDepth:(O.setFromMatrixPosition(a.matrixWorld),O.applyProjection(B),g.z=O.z);K.objects.push(g)}});
!0===w&&K.objects.sort(e);n=0;for(w=K.objects.length;n<w;n++){var A=K.objects[n].object,x=A.geometry;X.setObject(A);S=A.matrixWorld;q=0;if(A instanceof THREE.Mesh)if(x instanceof THREE.BufferGeometry){var z=x.attributes,A=x.offsets;if(void 0!==z.position){for(var G=z.position.array,x=0,y=G.length;x<y;x+=3)X.pushVertex(G[x],G[x+1],G[x+2]);if(void 0!==z.normal)for(var L=z.normal.array,x=0,y=L.length;x<y;x+=3)X.pushNormal(L[x],L[x+1],L[x+2]);if(void 0!==z.uv)for(L=z.uv.array,x=0,y=L.length;x<y;x+=2)X.pushUv(L[x],
L[x+1]);if(void 0!==z.index)if(z=z.index.array,0<A.length)for(n=0;n<A.length;n++)for(y=A[n],G=y.index,x=y.start,y=y.start+y.count;x<y;x+=3)X.pushTriangle(z[x]+G,z[x+1]+G,z[x+2]+G);else for(x=0,y=z.length;x<y;x+=3)X.pushTriangle(z[x],z[x+1],z[x+2]);else for(x=0,y=G.length/3;x<y;x+=3)X.pushTriangle(x,x+1,x+2)}}else{if(x instanceof THREE.Geometry){var Q=x.vertices,y=x.faces,z=x.faceVertexUvs[0];W.getNormalMatrix(S);for(var G=A.material instanceof THREE.MeshFaceMaterial,L=!0===G?A.material:null,E=0,ca=
Q.length;E<ca;E++){var la=Q[E];X.pushVertex(la.x,la.y,la.z)}Q=0;for(E=y.length;Q<E;Q++){var ca=y[Q],qa=!0===G?L.materials[ca.materialIndex]:A.material;if(void 0!==qa){var ua=qa.side,la=r[ca.a],ja=r[ca.b],Fa=r[ca.c];if(!0===qa.morphTargets){var va=x.morphTargets,Ka=A.morphTargetInfluences,aa=la.position,ra=ja.position,Da=Fa.position;N.set(0,0,0);ba.set(0,0,0);P.set(0,0,0);for(var Qa=0,cb=va.length;Qa<cb;Qa++){var Ga=Ka[Qa];if(0!==Ga){var xa=va[Qa].vertices;N.x+=(xa[ca.a].x-aa.x)*Ga;N.y+=(xa[ca.a].y-
aa.y)*Ga;N.z+=(xa[ca.a].z-aa.z)*Ga;ba.x+=(xa[ca.b].x-ra.x)*Ga;ba.y+=(xa[ca.b].y-ra.y)*Ga;ba.z+=(xa[ca.b].z-ra.z)*Ga;P.x+=(xa[ca.c].x-Da.x)*Ga;P.y+=(xa[ca.c].y-Da.y)*Ga;P.z+=(xa[ca.c].z-Da.z)*Ga}}la.position.add(N);ja.position.add(ba);Fa.position.add(P);X.projectVertex(la);X.projectVertex(ja);X.projectVertex(Fa)}if(!1!==X.checkTriangleVisibility(la,ja,Fa)){va=X.checkBackfaceCulling(la,ja,Fa);if(ua!==THREE.DoubleSide){if(ua===THREE.FrontSide&&!1===va)continue;if(ua===THREE.BackSide&&!0===va)continue}s=
b();s.id=A.id;s.v1.copy(la);s.v2.copy(ja);s.v3.copy(Fa);s.normalModel.copy(ca.normal);!1!==va||ua!==THREE.BackSide&&ua!==THREE.DoubleSide||s.normalModel.negate();s.normalModel.applyMatrix3(W).normalize();Ka=ca.vertexNormals;aa=0;for(ra=Math.min(Ka.length,3);aa<ra;aa++)Da=s.vertexNormalsModel[aa],Da.copy(Ka[aa]),!1!==va||ua!==THREE.BackSide&&ua!==THREE.DoubleSide||Da.negate(),Da.applyMatrix3(W).normalize();s.vertexNormalsLength=Ka.length;ua=z[Q];if(void 0!==ua)for(va=0;3>va;va++)s.uvs[va].copy(ua[va]);
s.color=ca.color;s.material=qa;s.z=(la.positionScreen.z+ja.positionScreen.z+Fa.positionScreen.z)/3;K.elements.push(s)}}}}}else if(A instanceof THREE.Line)if(x instanceof THREE.BufferGeometry){if(z=x.attributes,void 0!==z.position){G=z.position.array;x=0;for(y=G.length;x<y;x+=3)X.pushVertex(G[x],G[x+1],G[x+2]);if(void 0!==z.index)for(z=z.index.array,x=0,y=z.length;x<y;x+=2)X.pushLine(z[x],z[x+1]);else for(z=A.type===THREE.LinePieces?2:1,x=0,y=G.length/3-1;x<y;x+=z)X.pushLine(x,x+1)}}else{if(x instanceof
THREE.Geometry&&(V.multiplyMatrices(B,S),Q=A.geometry.vertices,0!==Q.length))for(la=a(),la.positionScreen.copy(Q[0]).applyMatrix4(V),z=A.type===THREE.LinePieces?2:1,E=1,ca=Q.length;E<ca;E++)la=a(),la.positionScreen.copy(Q[E]).applyMatrix4(V),0<(E+1)%z||(ja=r[q-2],oa.copy(la.positionScreen),$.copy(ja.positionScreen),!0===f(oa,$)&&(oa.multiplyScalar(1/oa.w),$.multiplyScalar(1/$.w),u=c(),u.id=A.id,u.v1.positionScreen.copy(oa),u.v2.positionScreen.copy($),u.z=Math.max(oa.z,$.z),u.material=A.material,A.material.vertexColors===
THREE.VertexColors&&(u.vertexColors[0].copy(A.geometry.colors[E]),u.vertexColors[1].copy(A.geometry.colors[E-1])),K.elements.push(u)))}else A instanceof THREE.Sprite&&(J.set(S.elements[12],S.elements[13],S.elements[14],1),J.applyMatrix4(B),x=1/J.w,J.z*=x,-1<=J.z&&1>=J.z&&(C=d(),C.id=A.id,C.x=J.x*x,C.y=J.y*x,C.z=J.z,C.object=A,C.rotation=A.rotation,C.scale.x=A.scale.x*Math.abs(C.x-(J.x+t.projectionMatrix.elements[0])/(J.w+t.projectionMatrix.elements[12])),C.scale.y=A.scale.y*Math.abs(C.y-(J.y+t.projectionMatrix.elements[5])/
(J.w+t.projectionMatrix.elements[13])),C.material=A.material,K.elements.push(C)))}!0===v&&K.elements.sort(e);return K}};THREE.Face3=function(a,b,c,d,e,f){this.a=a;this.b=b;this.c=c;this.normal=d instanceof THREE.Vector3?d:new THREE.Vector3;this.vertexNormals=d instanceof Array?d:[];this.color=e instanceof THREE.Color?e:new THREE.Color;this.vertexColors=e instanceof Array?e:[];this.vertexTangents=[];this.materialIndex=void 0!==f?f:0};
THREE.Face3.prototype={constructor:THREE.Face3,clone:function(){var a=new THREE.Face3(this.a,this.b,this.c);a.normal.copy(this.normal);a.color.copy(this.color);a.materialIndex=this.materialIndex;for(var b=0,c=this.vertexNormals.length;b<c;b++)a.vertexNormals[b]=this.vertexNormals[b].clone();b=0;for(c=this.vertexColors.length;b<c;b++)a.vertexColors[b]=this.vertexColors[b].clone();b=0;for(c=this.vertexTangents.length;b<c;b++)a.vertexTangents[b]=this.vertexTangents[b].clone();return a}};
THREE.Face4=function(a,b,c,d,e,f,g){console.warn("THREE.Face4 has been removed. A THREE.Face3 will be created instead.");return new THREE.Face3(a,b,c,e,f,g)};THREE.BufferAttribute=function(a,b){this.array=a;this.itemSize=b};
THREE.BufferAttribute.prototype={constructor:THREE.BufferAttribute,get length(){return this.array.length},set:function(a){this.array.set(a);return this},setX:function(a,b){this.array[a*this.itemSize]=b;return this},setY:function(a,b){this.array[a*this.itemSize+1]=b;return this},setZ:function(a,b){this.array[a*this.itemSize+2]=b;return this},setXY:function(a,b,c){a*=this.itemSize;this.array[a]=b;this.array[a+1]=c;return this},setXYZ:function(a,b,c,d){a*=this.itemSize;this.array[a]=b;this.array[a+1]=
c;this.array[a+2]=d;return this},setXYZW:function(a,b,c,d,e){a*=this.itemSize;this.array[a]=b;this.array[a+1]=c;this.array[a+2]=d;this.array[a+3]=e;return this}};THREE.Int8Attribute=function(a,b){console.warn("THREE.Int8Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead.");return new THREE.BufferAttribute(a,b)};
THREE.Uint8Attribute=function(a,b){console.warn("THREE.Uint8Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead.");return new THREE.BufferAttribute(a,b)};THREE.Uint8ClampedAttribute=function(a,b){console.warn("THREE.Uint8ClampedAttribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead.");return new THREE.BufferAttribute(a,b)};
THREE.Int16Attribute=function(a,b){console.warn("THREE.Int16Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead.");return new THREE.BufferAttribute(a,b)};THREE.Uint16Attribute=function(a,b){console.warn("THREE.Uint16Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead.");return new THREE.BufferAttribute(a,b)};
THREE.Int32Attribute=function(a,b){console.warn("THREE.Int32Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead.");return new THREE.BufferAttribute(a,b)};THREE.Uint32Attribute=function(a,b){console.warn("THREE.Uint32Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead.");return new THREE.BufferAttribute(a,b)};
THREE.Float32Attribute=function(a,b){console.warn("THREE.Float32Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead.");return new THREE.BufferAttribute(a,b)};THREE.Float64Attribute=function(a,b){console.warn("THREE.Float64Attribute has been removed. Use THREE.BufferAttribute( array, itemSize ) instead.");return new THREE.BufferAttribute(a,b)};
THREE.BufferGeometry=function(){this.id=THREE.GeometryIdCount++;this.uuid=THREE.Math.generateUUID();this.name="";this.attributes={};this.offsets=this.drawcalls=[];this.boundingSphere=this.boundingBox=null};
THREE.BufferGeometry.prototype={constructor:THREE.BufferGeometry,addAttribute:function(a,b,c){!1===b instanceof THREE.BufferAttribute?(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.attributes[a]={array:b,itemSize:c}):this.attributes[a]=b},getAttribute:function(a){return this.attributes[a]},addDrawCall:function(a,b,c){this.drawcalls.push({start:a,count:b,index:void 0!==c?c:0})},applyMatrix:function(a){var b=this.attributes.position;void 0!==b&&(a.applyToVector3Array(b.array),
b.needsUpdate=!0);b=this.attributes.normal;void 0!==b&&((new THREE.Matrix3).getNormalMatrix(a).applyToVector3Array(b.array),b.needsUpdate=!0)},fromGeometry:function(a,b){b=b||{vertexColors:THREE.NoColors};var c=a.vertices,d=a.faces,e=a.faceVertexUvs,f=b.vertexColors,g=0<e[0].length,h=3==d[0].vertexNormals.length,k=new Float32Array(9*d.length);this.addAttribute("position",new THREE.BufferAttribute(k,3));var l=new Float32Array(9*d.length);this.addAttribute("normal",new THREE.BufferAttribute(l,3));if(f!==
THREE.NoColors){var n=new Float32Array(9*d.length);this.addAttribute("color",new THREE.BufferAttribute(n,3))}if(!0===g){var q=new Float32Array(6*d.length);this.addAttribute("uvs",new THREE.BufferAttribute(q,2))}for(var r=0,t=0,s=0;r<d.length;r++,t+=6,s+=9){var p=d[r],v=c[p.a],w=c[p.b],u=c[p.c];k[s]=v.x;k[s+1]=v.y;k[s+2]=v.z;k[s+3]=w.x;k[s+4]=w.y;k[s+5]=w.z;k[s+6]=u.x;k[s+7]=u.y;k[s+8]=u.z;!0===h?(v=p.vertexNormals[0],w=p.vertexNormals[1],u=p.vertexNormals[2],l[s]=v.x,l[s+1]=v.y,l[s+2]=v.z,l[s+3]=
w.x,l[s+4]=w.y,l[s+5]=w.z,l[s+6]=u.x,l[s+7]=u.y,l[s+8]=u.z):(v=p.normal,l[s]=v.x,l[s+1]=v.y,l[s+2]=v.z,l[s+3]=v.x,l[s+4]=v.y,l[s+5]=v.z,l[s+6]=v.x,l[s+7]=v.y,l[s+8]=v.z);f===THREE.FaceColors?(p=p.color,n[s]=p.r,n[s+1]=p.g,n[s+2]=p.b,n[s+3]=p.r,n[s+4]=p.g,n[s+5]=p.b,n[s+6]=p.r,n[s+7]=p.g,n[s+8]=p.b):f===THREE.VertexColors&&(v=p.vertexColors[0],w=p.vertexColors[1],p=p.vertexColors[2],n[s]=v.r,n[s+1]=v.g,n[s+2]=v.b,n[s+3]=w.r,n[s+4]=w.g,n[s+5]=w.b,n[s+6]=p.r,n[s+7]=p.g,n[s+8]=p.b);!0===g&&(p=e[0][r][0],
v=e[0][r][1],w=e[0][r][2],q[t]=p.x,q[t+1]=p.y,q[t+2]=v.x,q[t+3]=v.y,q[t+4]=w.x,q[t+5]=w.y)}this.computeBoundingSphere();return this},computeBoundingBox:function(){null===this.boundingBox&&(this.boundingBox=new THREE.Box3);var a=this.attributes.position.array;if(a){var b=this.boundingBox;3<=a.length&&(b.min.x=b.max.x=a[0],b.min.y=b.max.y=a[1],b.min.z=b.max.z=a[2]);for(var c=3,d=a.length;c<d;c+=3){var e=a[c],f=a[c+1],g=a[c+2];e<b.min.x?b.min.x=e:e>b.max.x&&(b.max.x=e);f<b.min.y?b.min.y=f:f>b.max.y&&
(b.max.y=f);g<b.min.z?b.min.z=g:g>b.max.z&&(b.max.z=g)}}if(void 0===a||0===a.length)this.boundingBox.min.set(0,0,0),this.boundingBox.max.set(0,0,0);(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The "position" attribute is likely to have NaN values.')},computeBoundingSphere:function(){var a=new THREE.Box3,b=new THREE.Vector3;return function(){null===this.boundingSphere&&
(this.boundingSphere=new THREE.Sphere);var c=this.attributes.position.array;if(c){a.makeEmpty();for(var d=this.boundingSphere.center,e=0,f=c.length;e<f;e+=3)b.set(c[e],c[e+1],c[e+2]),a.expandByPoint(b);a.center(d);for(var g=0,e=0,f=c.length;e<f;e+=3)b.set(c[e],c[e+1],c[e+2]),g=Math.max(g,d.distanceToSquared(b));this.boundingSphere.radius=Math.sqrt(g);isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.')}}}(),
computeFaceNormals:function(){},computeVertexNormals:function(){if(this.attributes.position){var a,b,c,d;a=this.attributes.position.array.length;if(void 0===this.attributes.normal)this.attributes.normal={itemSize:3,array:new Float32Array(a)};else for(a=0,b=this.attributes.normal.array.length;a<b;a++)this.attributes.normal.array[a]=0;var e=this.attributes.position.array,f=this.attributes.normal.array,g,h,k,l,n,q,r=new THREE.Vector3,t=new THREE.Vector3,s=new THREE.Vector3,p=new THREE.Vector3,v=new THREE.Vector3;
if(this.attributes.index){var w=this.attributes.index.array,u=0<this.offsets.length?this.offsets:[{start:0,count:w.length,index:0}];c=0;for(d=u.length;c<d;++c){b=u[c].start;g=u[c].count;var D=u[c].index;a=b;for(b+=g;a<b;a+=3)g=D+w[a],h=D+w[a+1],k=D+w[a+2],l=e[3*g],n=e[3*g+1],q=e[3*g+2],r.set(l,n,q),l=e[3*h],n=e[3*h+1],q=e[3*h+2],t.set(l,n,q),l=e[3*k],n=e[3*k+1],q=e[3*k+2],s.set(l,n,q),p.subVectors(s,t),v.subVectors(r,t),p.cross(v),f[3*g]+=p.x,f[3*g+1]+=p.y,f[3*g+2]+=p.z,f[3*h]+=p.x,f[3*h+1]+=p.y,
f[3*h+2]+=p.z,f[3*k]+=p.x,f[3*k+1]+=p.y,f[3*k+2]+=p.z}}else for(a=0,b=e.length;a<b;a+=9)l=e[a],n=e[a+1],q=e[a+2],r.set(l,n,q),l=e[a+3],n=e[a+4],q=e[a+5],t.set(l,n,q),l=e[a+6],n=e[a+7],q=e[a+8],s.set(l,n,q),p.subVectors(s,t),v.subVectors(r,t),p.cross(v),f[a]=p.x,f[a+1]=p.y,f[a+2]=p.z,f[a+3]=p.x,f[a+4]=p.y,f[a+5]=p.z,f[a+6]=p.x,f[a+7]=p.y,f[a+8]=p.z;this.normalizeNormals();this.normalsNeedUpdate=!0}},computeTangents:function(){function a(a,b,c){q=d[3*a];r=d[3*a+1];t=d[3*a+2];s=d[3*b];p=d[3*b+1];v=d[3*
b+2];w=d[3*c];u=d[3*c+1];D=d[3*c+2];A=f[2*a];x=f[2*a+1];C=f[2*b];I=f[2*b+1];z=f[2*c];y=f[2*c+1];K=s-q;N=w-q;ba=p-r;P=u-r;O=v-t;J=D-t;E=C-A;Q=z-A;L=I-x;R=y-x;B=1/(E*R-Q*L);S.set((R*K-L*N)*B,(R*ba-L*P)*B,(R*O-L*J)*B);V.set((E*N-Q*K)*B,(E*P-Q*ba)*B,(E*J-Q*O)*B);k[a].add(S);k[b].add(S);k[c].add(S);l[a].add(V);l[b].add(V);l[c].add(V)}function b(a){za.x=e[3*a];za.y=e[3*a+1];za.z=e[3*a+2];Oa.copy(za);G=k[a];Ea.copy(G);Ea.sub(za.multiplyScalar(za.dot(G))).normalize();Aa.crossVectors(Oa,G);Ba=Aa.dot(l[a]);
Pa=0>Ba?-1:1;h[4*a]=Ea.x;h[4*a+1]=Ea.y;h[4*a+2]=Ea.z;h[4*a+3]=Pa}if(void 0===this.attributes.index||void 0===this.attributes.position||void 0===this.attributes.normal||void 0===this.attributes.uv)console.warn("Missing required attributes (index, position, normal or uv) in BufferGeometry.computeTangents()");else{var c=this.attributes.index.array,d=this.attributes.position.array,e=this.attributes.normal.array,f=this.attributes.uv.array,g=d.length/3;void 0===this.attributes.tangent&&(this.attributes.tangent=
{itemSize:4,array:new Float32Array(4*g)});for(var h=this.attributes.tangent.array,k=[],l=[],n=0;n<g;n++)k[n]=new THREE.Vector3,l[n]=new THREE.Vector3;var q,r,t,s,p,v,w,u,D,A,x,C,I,z,y,K,N,ba,P,O,J,E,Q,L,R,B,S=new THREE.Vector3,V=new THREE.Vector3,W,H,oa,$,X,T=this.offsets,n=0;for(H=T.length;n<H;++n){W=T[n].start;oa=T[n].count;var ya=T[n].index,g=W;for(W+=oa;g<W;g+=3)oa=ya+c[g],$=ya+c[g+1],X=ya+c[g+2],a(oa,$,X)}var Ea=new THREE.Vector3,Aa=new THREE.Vector3,za=new THREE.Vector3,Oa=new THREE.Vector3,
Pa,G,Ba,n=0;for(H=T.length;n<H;++n)for(W=T[n].start,oa=T[n].count,ya=T[n].index,g=W,W+=oa;g<W;g+=3)oa=ya+c[g],$=ya+c[g+1],X=ya+c[g+2],b(oa),b($),b(X)}},computeOffsets:function(a){var b=a;void 0===a&&(b=65535);Date.now();a=this.attributes.index.array;for(var c=this.attributes.position.array,d=a.length/3,e=new Uint16Array(a.length),f=0,g=0,h=[{start:0,count:0,index:0}],k=h[0],l=0,n=0,q=new Int32Array(6),r=new Int32Array(c.length),t=new Int32Array(c.length),s=0;s<c.length;s++)r[s]=-1,t[s]=-1;for(c=0;c<
d;c++){for(var p=n=0;3>p;p++)s=a[3*c+p],-1==r[s]?(q[2*p]=s,q[2*p+1]=-1,n++):r[s]<k.index?(q[2*p]=s,q[2*p+1]=-1,l++):(q[2*p]=s,q[2*p+1]=r[s]);if(g+n>k.index+b)for(k={start:f,count:0,index:g},h.push(k),n=0;6>n;n+=2)p=q[n+1],-1<p&&p<k.index&&(q[n+1]=-1);for(n=0;6>n;n+=2)s=q[n],p=q[n+1],-1===p&&(p=g++),r[s]=p,t[p]=s,e[f++]=p-k.index,k.count++}this.reorderBuffers(e,t,g);return this.offsets=h},merge:function(){console.log("BufferGeometry.merge(): TODO")},normalizeNormals:function(){for(var a=this.attributes.normal.array,
b,c,d,e=0,f=a.length;e<f;e+=3)b=a[e],c=a[e+1],d=a[e+2],b=1/Math.sqrt(b*b+c*c+d*d),a[e]*=b,a[e+1]*=b,a[e+2]*=b},reorderBuffers:function(a,b,c){var d={},e=[Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array],f;for(f in this.attributes)if("index"!=f)for(var g=this.attributes[f].array,h=0,k=e.length;h<k;h++){var l=e[h];if(g instanceof l){d[f]=new l(this.attributes[f].itemSize*c);break}}for(e=0;e<c;e++)for(f in g=b[e],this.attributes)if("index"!=
f)for(var h=this.attributes[f].array,k=this.attributes[f].itemSize,l=d[f],n=0;n<k;n++)l[e*k+n]=h[g*k+n];this.attributes.index.array=a;for(f in this.attributes)"index"!=f&&(this.attributes[f].array=d[f],this.attributes[f].numItems=this.attributes[f].itemSize*c)},clone:function(){var a=new THREE.BufferGeometry,b=[Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array],c;for(c in this.attributes){for(var d=this.attributes[c],e=d.array,f={itemSize:d.itemSize,
array:null},d=0,g=b.length;d<g;d++){var h=b[d];if(e instanceof h){f.array=new h(e);break}}a.attributes[c]=f}d=0;for(g=this.offsets.length;d<g;d++)b=this.offsets[d],a.offsets.push({start:b.start,index:b.index,count:b.count});return a},dispose:function(){this.dispatchEvent({type:"dispose"})}};THREE.EventDispatcher.prototype.apply(THREE.BufferGeometry.prototype);
THREE.Geometry=function(){this.id=THREE.GeometryIdCount++;this.uuid=THREE.Math.generateUUID();this.name="";this.vertices=[];this.colors=[];this.faces=[];this.faceVertexUvs=[[]];this.morphTargets=[];this.morphColors=[];this.morphNormals=[];this.skinWeights=[];this.skinIndices=[];this.lineDistances=[];this.boundingSphere=this.boundingBox=null;this.hasTangents=!1;this.dynamic=!0;this.groupsNeedUpdate=this.buffersNeedUpdate=this.lineDistancesNeedUpdate=this.colorsNeedUpdate=this.tangentsNeedUpdate=this.normalsNeedUpdate=
this.uvsNeedUpdate=this.elementsNeedUpdate=this.verticesNeedUpdate=!1};
THREE.Geometry.prototype={constructor:THREE.Geometry,applyMatrix:function(a){for(var b=(new THREE.Matrix3).getNormalMatrix(a),c=0,d=this.vertices.length;c<d;c++)this.vertices[c].applyMatrix4(a);c=0;for(d=this.faces.length;c<d;c++){a=this.faces[c];a.normal.applyMatrix3(b).normalize();for(var e=0,f=a.vertexNormals.length;e<f;e++)a.vertexNormals[e].applyMatrix3(b).normalize()}this.boundingBox instanceof THREE.Box3&&this.computeBoundingBox();this.boundingSphere instanceof THREE.Sphere&&this.computeBoundingSphere()},
center:function(){this.computeBoundingBox();var a=new THREE.Vector3;a.addVectors(this.boundingBox.min,this.boundingBox.max);a.multiplyScalar(-0.5);this.applyMatrix((new THREE.Matrix4).makeTranslation(a.x,a.y,a.z));this.computeBoundingBox();return a},computeFaceNormals:function(){for(var a=new THREE.Vector3,b=new THREE.Vector3,c=0,d=this.faces.length;c<d;c++){var e=this.faces[c],f=this.vertices[e.a],g=this.vertices[e.b];a.subVectors(this.vertices[e.c],g);b.subVectors(f,g);a.cross(b);a.normalize();
e.normal.copy(a)}},computeVertexNormals:function(a){var b,c,d;d=Array(this.vertices.length);b=0;for(c=this.vertices.length;b<c;b++)d[b]=new THREE.Vector3;if(a){var e,f,g,h=new THREE.Vector3,k=new THREE.Vector3;new THREE.Vector3;new THREE.Vector3;new THREE.Vector3;a=0;for(b=this.faces.length;a<b;a++)c=this.faces[a],e=this.vertices[c.a],f=this.vertices[c.b],g=this.vertices[c.c],h.subVectors(g,f),k.subVectors(e,f),h.cross(k),d[c.a].add(h),d[c.b].add(h),d[c.c].add(h)}else for(a=0,b=this.faces.length;a<
b;a++)c=this.faces[a],d[c.a].add(c.normal),d[c.b].add(c.normal),d[c.c].add(c.normal);b=0;for(c=this.vertices.length;b<c;b++)d[b].normalize();a=0;for(b=this.faces.length;a<b;a++)c=this.faces[a],c.vertexNormals[0]=d[c.a].clone(),c.vertexNormals[1]=d[c.b].clone(),c.vertexNormals[2]=d[c.c].clone()},computeMorphNormals:function(){var a,b,c,d,e;c=0;for(d=this.faces.length;c<d;c++)for(e=this.faces[c],e.__originalFaceNormal?e.__originalFaceNormal.copy(e.normal):e.__originalFaceNormal=e.normal.clone(),e.__originalVertexNormals||
(e.__originalVertexNormals=[]),a=0,b=e.vertexNormals.length;a<b;a++)e.__originalVertexNormals[a]?e.__originalVertexNormals[a].copy(e.vertexNormals[a]):e.__originalVertexNormals[a]=e.vertexNormals[a].clone();var f=new THREE.Geometry;f.faces=this.faces;a=0;for(b=this.morphTargets.length;a<b;a++){if(!this.morphNormals[a]){this.morphNormals[a]={};this.morphNormals[a].faceNormals=[];this.morphNormals[a].vertexNormals=[];e=this.morphNormals[a].faceNormals;var g=this.morphNormals[a].vertexNormals,h,k;c=
0;for(d=this.faces.length;c<d;c++)h=new THREE.Vector3,k={a:new THREE.Vector3,b:new THREE.Vector3,c:new THREE.Vector3},e.push(h),g.push(k)}g=this.morphNormals[a];f.vertices=this.morphTargets[a].vertices;f.computeFaceNormals();f.computeVertexNormals();c=0;for(d=this.faces.length;c<d;c++)e=this.faces[c],h=g.faceNormals[c],k=g.vertexNormals[c],h.copy(e.normal),k.a.copy(e.vertexNormals[0]),k.b.copy(e.vertexNormals[1]),k.c.copy(e.vertexNormals[2])}c=0;for(d=this.faces.length;c<d;c++)e=this.faces[c],e.normal=
e.__originalFaceNormal,e.vertexNormals=e.__originalVertexNormals},computeTangents:function(){var a,b,c,d,e,f,g,h,k,l,n,q,r,t,s,p,v,w=[],u=[];c=new THREE.Vector3;var D=new THREE.Vector3,A=new THREE.Vector3,x=new THREE.Vector3,C=new THREE.Vector3;a=0;for(b=this.vertices.length;a<b;a++)w[a]=new THREE.Vector3,u[a]=new THREE.Vector3;a=0;for(b=this.faces.length;a<b;a++)e=this.faces[a],f=this.faceVertexUvs[0][a],d=e.a,v=e.b,e=e.c,g=this.vertices[d],h=this.vertices[v],k=this.vertices[e],l=f[0],n=f[1],q=f[2],
f=h.x-g.x,r=k.x-g.x,t=h.y-g.y,s=k.y-g.y,h=h.z-g.z,g=k.z-g.z,k=n.x-l.x,p=q.x-l.x,n=n.y-l.y,l=q.y-l.y,q=1/(k*l-p*n),c.set((l*f-n*r)*q,(l*t-n*s)*q,(l*h-n*g)*q),D.set((k*r-p*f)*q,(k*s-p*t)*q,(k*g-p*h)*q),w[d].add(c),w[v].add(c),w[e].add(c),u[d].add(D),u[v].add(D),u[e].add(D);D=["a","b","c","d"];a=0;for(b=this.faces.length;a<b;a++)for(e=this.faces[a],c=0;c<Math.min(e.vertexNormals.length,3);c++)C.copy(e.vertexNormals[c]),d=e[D[c]],v=w[d],A.copy(v),A.sub(C.multiplyScalar(C.dot(v))).normalize(),x.crossVectors(e.vertexNormals[c],
v),d=x.dot(u[d]),d=0>d?-1:1,e.vertexTangents[c]=new THREE.Vector4(A.x,A.y,A.z,d);this.hasTangents=!0},computeLineDistances:function(){for(var a=0,b=this.vertices,c=0,d=b.length;c<d;c++)0<c&&(a+=b[c].distanceTo(b[c-1])),this.lineDistances[c]=a},computeBoundingBox:function(){null===this.boundingBox&&(this.boundingBox=new THREE.Box3);this.boundingBox.setFromPoints(this.vertices)},computeBoundingSphere:function(){null===this.boundingSphere&&(this.boundingSphere=new THREE.Sphere);this.boundingSphere.setFromPoints(this.vertices)},
merge:function(a,b,c){if(!1===a instanceof THREE.Geometry)console.error("THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.",a);else{var d,e=this.vertices.length,f=this.vertices,g=a.vertices,h=this.faces,k=a.faces,l=this.faceVertexUvs[0];a=a.faceVertexUvs[0];void 0===c&&(c=0);void 0!==b&&(d=(new THREE.Matrix3).getNormalMatrix(b));for(var n=0,q=g.length;n<q;n++){var r=g[n].clone();void 0!==b&&r.applyMatrix4(b);f.push(r)}n=0;for(q=k.length;n<q;n++){var g=k[n],t,s=g.vertexNormals,p=
g.vertexColors,r=new THREE.Face3(g.a+e,g.b+e,g.c+e);r.normal.copy(g.normal);void 0!==d&&r.normal.applyMatrix3(d).normalize();b=0;for(f=s.length;b<f;b++)t=s[b].clone(),void 0!==d&&t.applyMatrix3(d).normalize(),r.vertexNormals.push(t);r.color.copy(g.color);b=0;for(f=p.length;b<f;b++)t=p[b],r.vertexColors.push(t.clone());r.materialIndex=g.materialIndex+c;h.push(r)}n=0;for(q=a.length;n<q;n++)if(c=a[n],d=[],void 0!==c){b=0;for(f=c.length;b<f;b++)d.push(new THREE.Vector2(c[b].x,c[b].y));l.push(d)}}},mergeVertices:function(){var a=
{},b=[],c=[],d,e=Math.pow(10,4),f,g;f=0;for(g=this.vertices.length;f<g;f++)d=this.vertices[f],d=Math.round(d.x*e)+"_"+Math.round(d.y*e)+"_"+Math.round(d.z*e),void 0===a[d]?(a[d]=f,b.push(this.vertices[f]),c[f]=b.length-1):c[f]=c[a[d]];a=[];f=0;for(g=this.faces.length;f<g;f++)for(e=this.faces[f],e.a=c[e.a],e.b=c[e.b],e.c=c[e.c],e=[e.a,e.b,e.c],d=0;3>d;d++)if(e[d]==e[(d+1)%3]){a.push(f);break}for(f=a.length-1;0<=f;f--)for(e=a[f],this.faces.splice(e,1),c=0,g=this.faceVertexUvs.length;c<g;c++)this.faceVertexUvs[c].splice(e,
1);f=this.vertices.length-b.length;this.vertices=b;return f},makeGroups:function(){var a=0;return function(b,c){var d,e,f,g,h={},k,l=this.morphTargets.length,n=this.morphNormals.length;this.geometryGroups={};this.geometryGroupsList=[];d=0;for(e=this.faces.length;d<e;d++)f=this.faces[d],f=b?f.materialIndex:0,f in h||(h[f]={hash:f,counter:0}),g=h[f].hash+"_"+h[f].counter,g in this.geometryGroups||(k={id:a++,faces3:[],materialIndex:f,vertices:0,numMorphTargets:l,numMorphNormals:n},this.geometryGroups[g]=
k,this.geometryGroupsList.push(k)),this.geometryGroups[g].vertices+3>c&&(h[f].counter+=1,g=h[f].hash+"_"+h[f].counter,g in this.geometryGroups||(k={id:a++,faces3:[],materialIndex:f,vertices:0,numMorphTargets:l,numMorphNormals:n},this.geometryGroups[g]=k,this.geometryGroupsList.push(k))),this.geometryGroups[g].faces3.push(d),this.geometryGroups[g].vertices+=3}}(),clone:function(){for(var a=new THREE.Geometry,b=this.vertices,c=0,d=b.length;c<d;c++)a.vertices.push(b[c].clone());b=this.faces;c=0;for(d=
b.length;c<d;c++)a.faces.push(b[c].clone());b=this.faceVertexUvs[0];c=0;for(d=b.length;c<d;c++){for(var e=b[c],f=[],g=0,h=e.length;g<h;g++)f.push(new THREE.Vector2(e[g].x,e[g].y));a.faceVertexUvs[0].push(f)}return a},dispose:function(){this.dispatchEvent({type:"dispose"})}};THREE.EventDispatcher.prototype.apply(THREE.Geometry.prototype);THREE.GeometryIdCount=0;THREE.Camera=function(){THREE.Object3D.call(this);this.matrixWorldInverse=new THREE.Matrix4;this.projectionMatrix=new THREE.Matrix4};
THREE.Camera.prototype=Object.create(THREE.Object3D.prototype);THREE.Camera.prototype.lookAt=function(){var a=new THREE.Matrix4;return function(b){a.lookAt(this.position,b,this.up);this.quaternion.setFromRotationMatrix(a)}}();THREE.Camera.prototype.clone=function(a){void 0===a&&(a=new THREE.Camera);THREE.Object3D.prototype.clone.call(this,a);a.matrixWorldInverse.copy(this.matrixWorldInverse);a.projectionMatrix.copy(this.projectionMatrix);return a};
THREE.CubeCamera=function(a,b,c){THREE.Object3D.call(this);var d=new THREE.PerspectiveCamera(90,1,a,b);d.up.set(0,-1,0);d.lookAt(new THREE.Vector3(1,0,0));this.add(d);var e=new THREE.PerspectiveCamera(90,1,a,b);e.up.set(0,-1,0);e.lookAt(new THREE.Vector3(-1,0,0));this.add(e);var f=new THREE.PerspectiveCamera(90,1,a,b);f.up.set(0,0,1);f.lookAt(new THREE.Vector3(0,1,0));this.add(f);var g=new THREE.PerspectiveCamera(90,1,a,b);g.up.set(0,0,-1);g.lookAt(new THREE.Vector3(0,-1,0));this.add(g);var h=new THREE.PerspectiveCamera(90,
1,a,b);h.up.set(0,-1,0);h.lookAt(new THREE.Vector3(0,0,1));this.add(h);var k=new THREE.PerspectiveCamera(90,1,a,b);k.up.set(0,-1,0);k.lookAt(new THREE.Vector3(0,0,-1));this.add(k);this.renderTarget=new THREE.WebGLRenderTargetCube(c,c,{format:THREE.RGBFormat,magFilter:THREE.LinearFilter,minFilter:THREE.LinearFilter});this.updateCubeMap=function(a,b){var c=this.renderTarget,r=c.generateMipmaps;c.generateMipmaps=!1;c.activeCubeFace=0;a.render(b,d,c);c.activeCubeFace=1;a.render(b,e,c);c.activeCubeFace=
2;a.render(b,f,c);c.activeCubeFace=3;a.render(b,g,c);c.activeCubeFace=4;a.render(b,h,c);c.generateMipmaps=r;c.activeCubeFace=5;a.render(b,k,c)}};THREE.CubeCamera.prototype=Object.create(THREE.Object3D.prototype);THREE.OrthographicCamera=function(a,b,c,d,e,f){THREE.Camera.call(this);this.left=a;this.right=b;this.top=c;this.bottom=d;this.near=void 0!==e?e:0.1;this.far=void 0!==f?f:2E3;this.updateProjectionMatrix()};THREE.OrthographicCamera.prototype=Object.create(THREE.Camera.prototype);
THREE.OrthographicCamera.prototype.updateProjectionMatrix=function(){this.projectionMatrix.makeOrthographic(this.left,this.right,this.top,this.bottom,this.near,this.far)};THREE.OrthographicCamera.prototype.clone=function(){var a=new THREE.OrthographicCamera;THREE.Camera.prototype.clone.call(this,a);a.left=this.left;a.right=this.right;a.top=this.top;a.bottom=this.bottom;a.near=this.near;a.far=this.far;return a};
THREE.PerspectiveCamera=function(a,b,c,d){THREE.Camera.call(this);this.fov=void 0!==a?a:50;this.aspect=void 0!==b?b:1;this.near=void 0!==c?c:0.1;this.far=void 0!==d?d:2E3;this.updateProjectionMatrix()};THREE.PerspectiveCamera.prototype=Object.create(THREE.Camera.prototype);THREE.PerspectiveCamera.prototype.setLens=function(a,b){void 0===b&&(b=24);this.fov=2*THREE.Math.radToDeg(Math.atan(b/(2*a)));this.updateProjectionMatrix()};
THREE.PerspectiveCamera.prototype.setViewOffset=function(a,b,c,d,e,f){this.fullWidth=a;this.fullHeight=b;this.x=c;this.y=d;this.width=e;this.height=f;this.updateProjectionMatrix()};
THREE.PerspectiveCamera.prototype.updateProjectionMatrix=function(){if(this.fullWidth){var a=this.fullWidth/this.fullHeight,b=Math.tan(THREE.Math.degToRad(0.5*this.fov))*this.near,c=-b,d=a*c,a=Math.abs(a*b-d),c=Math.abs(b-c);this.projectionMatrix.makeFrustum(d+this.x*a/this.fullWidth,d+(this.x+this.width)*a/this.fullWidth,b-(this.y+this.height)*c/this.fullHeight,b-this.y*c/this.fullHeight,this.near,this.far)}else this.projectionMatrix.makePerspective(this.fov,this.aspect,this.near,this.far)};
THREE.PerspectiveCamera.prototype.clone=function(){var a=new THREE.PerspectiveCamera;THREE.Camera.prototype.clone.call(this,a);a.fov=this.fov;a.aspect=this.aspect;a.near=this.near;a.far=this.far;return a};THREE.Light=function(a){THREE.Object3D.call(this);this.color=new THREE.Color(a)};THREE.Light.prototype=Object.create(THREE.Object3D.prototype);THREE.Light.prototype.clone=function(a){void 0===a&&(a=new THREE.Light);THREE.Object3D.prototype.clone.call(this,a);a.color.copy(this.color);return a};
THREE.AmbientLight=function(a){THREE.Light.call(this,a)};THREE.AmbientLight.prototype=Object.create(THREE.Light.prototype);THREE.AmbientLight.prototype.clone=function(){var a=new THREE.AmbientLight;THREE.Light.prototype.clone.call(this,a);return a};
THREE.AreaLight=function(a,b){THREE.Light.call(this,a);this.normal=new THREE.Vector3(0,-1,0);this.right=new THREE.Vector3(1,0,0);this.intensity=void 0!==b?b:1;this.height=this.width=1;this.constantAttenuation=1.5;this.linearAttenuation=0.5;this.quadraticAttenuation=0.1};THREE.AreaLight.prototype=Object.create(THREE.Light.prototype);
THREE.DirectionalLight=function(a,b){THREE.Light.call(this,a);this.position.set(0,1,0);this.target=new THREE.Object3D;this.intensity=void 0!==b?b:1;this.onlyShadow=this.castShadow=!1;this.shadowCameraNear=50;this.shadowCameraFar=5E3;this.shadowCameraLeft=-500;this.shadowCameraTop=this.shadowCameraRight=500;this.shadowCameraBottom=-500;this.shadowCameraVisible=!1;this.shadowBias=0;this.shadowDarkness=0.5;this.shadowMapHeight=this.shadowMapWidth=512;this.shadowCascade=!1;this.shadowCascadeOffset=new THREE.Vector3(0,
0,-1E3);this.shadowCascadeCount=2;this.shadowCascadeBias=[0,0,0];this.shadowCascadeWidth=[512,512,512];this.shadowCascadeHeight=[512,512,512];this.shadowCascadeNearZ=[-1,0.99,0.998];this.shadowCascadeFarZ=[0.99,0.998,1];this.shadowCascadeArray=[];this.shadowMatrix=this.shadowCamera=this.shadowMapSize=this.shadowMap=null};THREE.DirectionalLight.prototype=Object.create(THREE.Light.prototype);
THREE.DirectionalLight.prototype.clone=function(){var a=new THREE.DirectionalLight;THREE.Light.prototype.clone.call(this,a);a.target=this.target.clone();a.intensity=this.intensity;a.castShadow=this.castShadow;a.onlyShadow=this.onlyShadow;a.shadowCameraNear=this.shadowCameraNear;a.shadowCameraFar=this.shadowCameraFar;a.shadowCameraLeft=this.shadowCameraLeft;a.shadowCameraRight=this.shadowCameraRight;a.shadowCameraTop=this.shadowCameraTop;a.shadowCameraBottom=this.shadowCameraBottom;a.shadowCameraVisible=
this.shadowCameraVisible;a.shadowBias=this.shadowBias;a.shadowDarkness=this.shadowDarkness;a.shadowMapWidth=this.shadowMapWidth;a.shadowMapHeight=this.shadowMapHeight;a.shadowCascade=this.shadowCascade;a.shadowCascadeOffset.copy(this.shadowCascadeOffset);a.shadowCascadeCount=this.shadowCascadeCount;a.shadowCascadeBias=this.shadowCascadeBias.slice(0);a.shadowCascadeWidth=this.shadowCascadeWidth.slice(0);a.shadowCascadeHeight=this.shadowCascadeHeight.slice(0);a.shadowCascadeNearZ=this.shadowCascadeNearZ.slice(0);
a.shadowCascadeFarZ=this.shadowCascadeFarZ.slice(0);return a};THREE.HemisphereLight=function(a,b,c){THREE.Light.call(this,a);this.position.set(0,100,0);this.groundColor=new THREE.Color(b);this.intensity=void 0!==c?c:1};THREE.HemisphereLight.prototype=Object.create(THREE.Light.prototype);THREE.HemisphereLight.prototype.clone=function(){var a=new THREE.HemisphereLight;THREE.Light.prototype.clone.call(this,a);a.groundColor.copy(this.groundColor);a.intensity=this.intensity;return a};
THREE.PointLight=function(a,b,c){THREE.Light.call(this,a);this.intensity=void 0!==b?b:1;this.distance=void 0!==c?c:0};THREE.PointLight.prototype=Object.create(THREE.Light.prototype);THREE.PointLight.prototype.clone=function(){var a=new THREE.PointLight;THREE.Light.prototype.clone.call(this,a);a.intensity=this.intensity;a.distance=this.distance;return a};
THREE.SpotLight=function(a,b,c,d,e){THREE.Light.call(this,a);this.position.set(0,1,0);this.target=new THREE.Object3D;this.intensity=void 0!==b?b:1;this.distance=void 0!==c?c:0;this.angle=void 0!==d?d:Math.PI/3;this.exponent=void 0!==e?e:10;this.onlyShadow=this.castShadow=!1;this.shadowCameraNear=50;this.shadowCameraFar=5E3;this.shadowCameraFov=50;this.shadowCameraVisible=!1;this.shadowBias=0;this.shadowDarkness=0.5;this.shadowMapHeight=this.shadowMapWidth=512;this.shadowMatrix=this.shadowCamera=this.shadowMapSize=
this.shadowMap=null};THREE.SpotLight.prototype=Object.create(THREE.Light.prototype);
THREE.SpotLight.prototype.clone=function(){var a=new THREE.SpotLight;THREE.Light.prototype.clone.call(this,a);a.target=this.target.clone();a.intensity=this.intensity;a.distance=this.distance;a.angle=this.angle;a.exponent=this.exponent;a.castShadow=this.castShadow;a.onlyShadow=this.onlyShadow;a.shadowCameraNear=this.shadowCameraNear;a.shadowCameraFar=this.shadowCameraFar;a.shadowCameraFov=this.shadowCameraFov;a.shadowCameraVisible=this.shadowCameraVisible;a.shadowBias=this.shadowBias;a.shadowDarkness=
this.shadowDarkness;a.shadowMapWidth=this.shadowMapWidth;a.shadowMapHeight=this.shadowMapHeight;return a};THREE.Cache=function(){this.files={}};THREE.Cache.prototype={constructor:THREE.Cache,add:function(a,b){this.files[a]=b},get:function(a){return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}};
THREE.Loader=function(a){this.statusDomElement=(this.showStatus=a)?THREE.Loader.prototype.addStatusElement():null;this.imageLoader=new THREE.ImageLoader;this.onLoadStart=function(){};this.onLoadProgress=function(){};this.onLoadComplete=function(){}};
THREE.Loader.prototype={constructor:THREE.Loader,crossOrigin:void 0,addStatusElement:function(){var a=document.createElement("div");a.style.position="absolute";a.style.right="0px";a.style.top="0px";a.style.fontSize="0.8em";a.style.textAlign="left";a.style.background="rgba(0,0,0,0.25)";a.style.color="#fff";a.style.width="120px";a.style.padding="0.5em 0.5em 0.5em 0.5em";a.style.zIndex=1E3;a.innerHTML="Loading ...";return a},updateProgress:function(a){var b="Loaded ",b=a.total?b+((100*a.loaded/a.total).toFixed(0)+
"%"):b+((a.loaded/1024).toFixed(2)+" KB");this.statusDomElement.innerHTML=b},extractUrlBase:function(a){a=a.split("/");if(1===a.length)return"./";a.pop();return a.join("/")+"/"},initMaterials:function(a,b){for(var c=[],d=0;d<a.length;++d)c[d]=this.createMaterial(a[d],b);return c},needsTangents:function(a){for(var b=0,c=a.length;b<c;b++)if(a[b]instanceof THREE.ShaderMaterial)return!0;return!1},createMaterial:function(a,b){function c(a){a=Math.log(a)/Math.LN2;return Math.pow(2,Math.round(a))}function d(a,
d,e,g,h,k,p){var v=b+e,w,u=THREE.Loader.Handlers.get(v);null!==u?w=u.load(v):(w=new THREE.Texture,u=f.imageLoader,u.crossOrigin=f.crossOrigin,u.load(v,function(a){if(!1===THREE.Math.isPowerOfTwo(a.width)||!1===THREE.Math.isPowerOfTwo(a.height)){var b=c(a.width),d=c(a.height),e=document.createElement("canvas");e.width=b;e.height=d;e.getContext("2d").drawImage(a,0,0,b,d);w.image=e}else w.image=a;w.needsUpdate=!0}));w.sourceFile=e;g&&(w.repeat.set(g[0],g[1]),1!==g[0]&&(w.wrapS=THREE.RepeatWrapping),
1!==g[1]&&(w.wrapT=THREE.RepeatWrapping));h&&w.offset.set(h[0],h[1]);k&&(e={repeat:THREE.RepeatWrapping,mirror:THREE.MirroredRepeatWrapping},void 0!==e[k[0]]&&(w.wrapS=e[k[0]]),void 0!==e[k[1]]&&(w.wrapT=e[k[1]]));p&&(w.anisotropy=p);a[d]=w}function e(a){return(255*a[0]<<16)+(255*a[1]<<8)+255*a[2]}var f=this,g="MeshLambertMaterial",h={color:15658734,opacity:1,map:null,lightMap:null,normalMap:null,bumpMap:null,wireframe:!1};if(a.shading){var k=a.shading.toLowerCase();"phong"===k?g="MeshPhongMaterial":
"basic"===k&&(g="MeshBasicMaterial")}void 0!==a.blending&&void 0!==THREE[a.blending]&&(h.blending=THREE[a.blending]);if(void 0!==a.transparent||1>a.opacity)h.transparent=a.transparent;void 0!==a.depthTest&&(h.depthTest=a.depthTest);void 0!==a.depthWrite&&(h.depthWrite=a.depthWrite);void 0!==a.visible&&(h.visible=a.visible);void 0!==a.flipSided&&(h.side=THREE.BackSide);void 0!==a.doubleSided&&(h.side=THREE.DoubleSide);void 0!==a.wireframe&&(h.wireframe=a.wireframe);void 0!==a.vertexColors&&("face"===
a.vertexColors?h.vertexColors=THREE.FaceColors:a.vertexColors&&(h.vertexColors=THREE.VertexColors));a.colorDiffuse?h.color=e(a.colorDiffuse):a.DbgColor&&(h.color=a.DbgColor);a.colorSpecular&&(h.specular=e(a.colorSpecular));a.colorAmbient&&(h.ambient=e(a.colorAmbient));a.colorEmissive&&(h.emissive=e(a.colorEmissive));a.transparency&&(h.opacity=a.transparency);a.specularCoef&&(h.shininess=a.specularCoef);a.mapDiffuse&&b&&d(h,"map",a.mapDiffuse,a.mapDiffuseRepeat,a.mapDiffuseOffset,a.mapDiffuseWrap,
a.mapDiffuseAnisotropy);a.mapLight&&b&&d(h,"lightMap",a.mapLight,a.mapLightRepeat,a.mapLightOffset,a.mapLightWrap,a.mapLightAnisotropy);a.mapBump&&b&&d(h,"bumpMap",a.mapBump,a.mapBumpRepeat,a.mapBumpOffset,a.mapBumpWrap,a.mapBumpAnisotropy);a.mapNormal&&b&&d(h,"normalMap",a.mapNormal,a.mapNormalRepeat,a.mapNormalOffset,a.mapNormalWrap,a.mapNormalAnisotropy);a.mapSpecular&&b&&d(h,"specularMap",a.mapSpecular,a.mapSpecularRepeat,a.mapSpecularOffset,a.mapSpecularWrap,a.mapSpecularAnisotropy);a.mapAlpha&&
b&&d(h,"alphaMap",a.mapAlpha,a.mapAlphaRepeat,a.mapAlphaOffset,a.mapAlphaWrap,a.mapAlphaAnisotropy);a.mapBumpScale&&(h.bumpScale=a.mapBumpScale);a.mapNormal?(g=THREE.ShaderLib.normalmap,k=THREE.UniformsUtils.clone(g.uniforms),k.tNormal.value=h.normalMap,a.mapNormalFactor&&k.uNormalScale.value.set(a.mapNormalFactor,a.mapNormalFactor),h.map&&(k.tDiffuse.value=h.map,k.enableDiffuse.value=!0),h.specularMap&&(k.tSpecular.value=h.specularMap,k.enableSpecular.value=!0),h.lightMap&&(k.tAO.value=h.lightMap,
k.enableAO.value=!0),k.diffuse.value.setHex(h.color),k.specular.value.setHex(h.specular),k.ambient.value.setHex(h.ambient),k.shininess.value=h.shininess,void 0!==h.opacity&&(k.opacity.value=h.opacity),g=new THREE.ShaderMaterial({fragmentShader:g.fragmentShader,vertexShader:g.vertexShader,uniforms:k,lights:!0,fog:!0}),h.transparent&&(g.transparent=!0)):g=new THREE[g](h);void 0!==a.DbgName&&(g.name=a.DbgName);return g}};
THREE.Loader.Handlers={handlers:[],add:function(a,b){this.handlers.push(a,b)},get:function(a){for(var b=0,c=this.handlers.length;b<c;b+=2){var d=this.handlers[b+1];if(this.handlers[b].test(a))return d}return null}};THREE.XHRLoader=function(a){this.cache=new THREE.Cache;this.manager=void 0!==a?a:THREE.DefaultLoadingManager};
THREE.XHRLoader.prototype={constructor:THREE.XHRLoader,load:function(a,b,c,d){var e=this,f=e.cache.get(a);void 0!==f?b&&b(f):(f=new XMLHttpRequest,f.open("GET",a,!0),f.addEventListener("load",function(c){e.cache.add(a,this.response);b&&b(this.response);e.manager.itemEnd(a)},!1),void 0!==c&&f.addEventListener("progress",function(a){c(a)},!1),void 0!==d&&f.addEventListener("error",function(a){d(a)},!1),void 0!==this.crossOrigin&&(f.crossOrigin=this.crossOrigin),void 0!==this.responseType&&(f.responseType=
this.responseType),f.send(null),e.manager.itemStart(a))},setResponseType:function(a){this.responseType=a},setCrossOrigin:function(a){this.crossOrigin=a}};THREE.ImageLoader=function(a){this.cache=new THREE.Cache;this.manager=void 0!==a?a:THREE.DefaultLoadingManager};
THREE.ImageLoader.prototype={constructor:THREE.ImageLoader,load:function(a,b,c,d){var e=this,f=e.cache.get(a);if(void 0!==f)b(f);else return f=document.createElement("img"),void 0!==b&&f.addEventListener("load",function(c){e.cache.add(a,this);b(this);e.manager.itemEnd(a)},!1),void 0!==c&&f.addEventListener("progress",function(a){c(a)},!1),void 0!==d&&f.addEventListener("error",function(a){d(a)},!1),void 0!==this.crossOrigin&&(f.crossOrigin=this.crossOrigin),f.src=a,e.manager.itemStart(a),f},setCrossOrigin:function(a){this.crossOrigin=
a}};THREE.JSONLoader=function(a){THREE.Loader.call(this,a);this.withCredentials=!1};THREE.JSONLoader.prototype=Object.create(THREE.Loader.prototype);THREE.JSONLoader.prototype.load=function(a,b,c){c=c&&"string"===typeof c?c:this.extractUrlBase(a);this.onLoadStart();this.loadAjaxJSON(this,a,b,c)};
THREE.JSONLoader.prototype.loadAjaxJSON=function(a,b,c,d,e){var f=new XMLHttpRequest,g=0;f.onreadystatechange=function(){if(f.readyState===f.DONE)if(200===f.status||0===f.status){if(f.responseText){var h=JSON.parse(f.responseText);if(void 0!==h.metadata&&"scene"===h.metadata.type){console.error('THREE.JSONLoader: "'+b+'" seems to be a Scene. Use THREE.SceneLoader instead.');return}h=a.parse(h,d);c(h.geometry,h.materials)}else console.error('THREE.JSONLoader: "'+b+'" seems to be unreachable or the file is empty.');
a.onLoadComplete()}else console.error("THREE.JSONLoader: Couldn't load \""+b+'" ('+f.status+")");else f.readyState===f.LOADING?e&&(0===g&&(g=f.getResponseHeader("Content-Length")),e({total:g,loaded:f.responseText.length})):f.readyState===f.HEADERS_RECEIVED&&void 0!==e&&(g=f.getResponseHeader("Content-Length"))};f.open("GET",b,!0);f.withCredentials=this.withCredentials;f.send(null)};
THREE.JSONLoader.prototype.parse=function(a,b){var c=new THREE.Geometry,d=void 0!==a.scale?1/a.scale:1;(function(b){var d,g,h,k,l,n,q,r,t,s,p,v,w,u=a.faces;n=a.vertices;var D=a.normals,A=a.colors,x=0;if(void 0!==a.uvs){for(d=0;d<a.uvs.length;d++)a.uvs[d].length&&x++;for(d=0;d<x;d++)c.faceVertexUvs[d]=[]}k=0;for(l=n.length;k<l;)d=new THREE.Vector3,d.x=n[k++]*b,d.y=n[k++]*b,d.z=n[k++]*b,c.vertices.push(d);k=0;for(l=u.length;k<l;)if(b=u[k++],t=b&1,h=b&2,d=b&8,q=b&16,s=b&32,n=b&64,b&=128,t){t=new THREE.Face3;
t.a=u[k];t.b=u[k+1];t.c=u[k+3];p=new THREE.Face3;p.a=u[k+1];p.b=u[k+2];p.c=u[k+3];k+=4;h&&(h=u[k++],t.materialIndex=h,p.materialIndex=h);h=c.faces.length;if(d)for(d=0;d<x;d++)for(v=a.uvs[d],c.faceVertexUvs[d][h]=[],c.faceVertexUvs[d][h+1]=[],g=0;4>g;g++)r=u[k++],w=v[2*r],r=v[2*r+1],w=new THREE.Vector2(w,r),2!==g&&c.faceVertexUvs[d][h].push(w),0!==g&&c.faceVertexUvs[d][h+1].push(w);q&&(q=3*u[k++],t.normal.set(D[q++],D[q++],D[q]),p.normal.copy(t.normal));if(s)for(d=0;4>d;d++)q=3*u[k++],s=new THREE.Vector3(D[q++],
D[q++],D[q]),2!==d&&t.vertexNormals.push(s),0!==d&&p.vertexNormals.push(s);n&&(n=u[k++],n=A[n],t.color.setHex(n),p.color.setHex(n));if(b)for(d=0;4>d;d++)n=u[k++],n=A[n],2!==d&&t.vertexColors.push(new THREE.Color(n)),0!==d&&p.vertexColors.push(new THREE.Color(n));c.faces.push(t);c.faces.push(p)}else{t=new THREE.Face3;t.a=u[k++];t.b=u[k++];t.c=u[k++];h&&(h=u[k++],t.materialIndex=h);h=c.faces.length;if(d)for(d=0;d<x;d++)for(v=a.uvs[d],c.faceVertexUvs[d][h]=[],g=0;3>g;g++)r=u[k++],w=v[2*r],r=v[2*r+1],
w=new THREE.Vector2(w,r),c.faceVertexUvs[d][h].push(w);q&&(q=3*u[k++],t.normal.set(D[q++],D[q++],D[q]));if(s)for(d=0;3>d;d++)q=3*u[k++],s=new THREE.Vector3(D[q++],D[q++],D[q]),t.vertexNormals.push(s);n&&(n=u[k++],t.color.setHex(A[n]));if(b)for(d=0;3>d;d++)n=u[k++],t.vertexColors.push(new THREE.Color(A[n]));c.faces.push(t)}})(d);(function(){var b=void 0!==a.influencesPerVertex?a.influencesPerVertex:2;if(a.skinWeights)for(var d=0,g=a.skinWeights.length;d<g;d+=b)c.skinWeights.push(new THREE.Vector4(a.skinWeights[d],
1<b?a.skinWeights[d+1]:0,2<b?a.skinWeights[d+2]:0,3<b?a.skinWeights[d+3]:0));if(a.skinIndices)for(d=0,g=a.skinIndices.length;d<g;d+=b)c.skinIndices.push(new THREE.Vector4(a.skinIndices[d],1<b?a.skinIndices[d+1]:0,2<b?a.skinIndices[d+2]:0,3<b?a.skinIndices[d+3]:0));c.bones=a.bones;c.bones&&0<c.bones.length&&(c.skinWeights.length!==c.skinIndices.length||c.skinIndices.length!==c.vertices.length)&&console.warn("When skinning, number of vertices ("+c.vertices.length+"), skinIndices ("+c.skinIndices.length+
"), and skinWeights ("+c.skinWeights.length+") should match.");c.animation=a.animation;c.animations=a.animations})();(function(b){if(void 0!==a.morphTargets){var d,g,h,k,l,n;d=0;for(g=a.morphTargets.length;d<g;d++)for(c.morphTargets[d]={},c.morphTargets[d].name=a.morphTargets[d].name,c.morphTargets[d].vertices=[],l=c.morphTargets[d].vertices,n=a.morphTargets[d].vertices,h=0,k=n.length;h<k;h+=3){var q=new THREE.Vector3;q.x=n[h]*b;q.y=n[h+1]*b;q.z=n[h+2]*b;l.push(q)}}if(void 0!==a.morphColors)for(d=
0,g=a.morphColors.length;d<g;d++)for(c.morphColors[d]={},c.morphColors[d].name=a.morphColors[d].name,c.morphColors[d].colors=[],k=c.morphColors[d].colors,l=a.morphColors[d].colors,b=0,h=l.length;b<h;b+=3)n=new THREE.Color(16755200),n.setRGB(l[b],l[b+1],l[b+2]),k.push(n)})(d);c.computeFaceNormals();c.computeBoundingSphere();if(void 0===a.materials||0===a.materials.length)return{geometry:c};d=this.initMaterials(a.materials,b);this.needsTangents(d)&&c.computeTangents();return{geometry:c,materials:d}};
THREE.LoadingManager=function(a,b,c){var d=this,e=0,f=0;this.onLoad=a;this.onProgress=b;this.onError=c;this.itemStart=function(a){f++};this.itemEnd=function(a){e++;if(void 0!==d.onProgress)d.onProgress(a,e,f);if(e===f&&void 0!==d.onLoad)d.onLoad()}};THREE.DefaultLoadingManager=new THREE.LoadingManager;THREE.BufferGeometryLoader=function(a){this.manager=void 0!==a?a:THREE.DefaultLoadingManager};
THREE.BufferGeometryLoader.prototype={constructor:THREE.BufferGeometryLoader,load:function(a,b,c,d){var e=this,f=new THREE.XHRLoader;f.setCrossOrigin(this.crossOrigin);f.load(a,function(a){b(e.parse(JSON.parse(a)))},c,d)},setCrossOrigin:function(a){this.crossOrigin=a},parse:function(a){var b=new THREE.BufferGeometry,c=a.attributes,d;for(d in c){var e=c[d];b.attributes[d]={itemSize:e.itemSize,array:new self[e.type](e.array)}}c=a.offsets;void 0!==c&&(b.offsets=JSON.parse(JSON.stringify(c)));a=a.boundingSphere;
void 0!==a&&(b.boundingSphere=new THREE.Sphere((new THREE.Vector3).fromArray(void 0!==a.center?a.center:[0,0,0]),a.radius));return b}};THREE.MaterialLoader=function(a){this.manager=void 0!==a?a:THREE.DefaultLoadingManager};
THREE.MaterialLoader.prototype={constructor:THREE.MaterialLoader,load:function(a,b,c,d){var e=this,f=new THREE.XHRLoader;f.setCrossOrigin(this.crossOrigin);f.load(a,function(a){b(e.parse(JSON.parse(a)))},c,d)},setCrossOrigin:function(a){this.crossOrigin=a},parse:function(a){var b=new THREE[a.type];void 0!==a.color&&b.color.setHex(a.color);void 0!==a.ambient&&b.ambient.setHex(a.ambient);void 0!==a.emissive&&b.emissive.setHex(a.emissive);void 0!==a.specular&&b.specular.setHex(a.specular);void 0!==a.shininess&&
(b.shininess=a.shininess);void 0!==a.uniforms&&(b.uniforms=a.uniforms);void 0!==a.vertexShader&&(b.vertexShader=a.vertexShader);void 0!==a.fragmentShader&&(b.fragmentShader=a.fragmentShader);void 0!==a.vertexColors&&(b.vertexColors=a.vertexColors);void 0!==a.blending&&(b.blending=a.blending);void 0!==a.side&&(b.side=a.side);void 0!==a.opacity&&(b.opacity=a.opacity);void 0!==a.transparent&&(b.transparent=a.transparent);void 0!==a.wireframe&&(b.wireframe=a.wireframe);if(void 0!==a.materials)for(var c=
0,d=a.materials.length;c<d;c++)b.materials.push(this.parse(a.materials[c]));return b}};THREE.ObjectLoader=function(a){this.manager=void 0!==a?a:THREE.DefaultLoadingManager};
THREE.ObjectLoader.prototype={constructor:THREE.ObjectLoader,load:function(a,b,c,d){var e=this,f=new THREE.XHRLoader(e.manager);f.setCrossOrigin(this.crossOrigin);f.load(a,function(a){b(e.parse(JSON.parse(a)))},c,d)},setCrossOrigin:function(a){this.crossOrigin=a},parse:function(a){var b=this.parseGeometries(a.geometries),c=this.parseMaterials(a.materials);return this.parseObject(a.object,b,c)},parseGeometries:function(a){var b={};if(void 0!==a)for(var c=new THREE.JSONLoader,d=new THREE.BufferGeometryLoader,
e=0,f=a.length;e<f;e++){var g,h=a[e];switch(h.type){case "PlaneGeometry":g=new THREE.PlaneGeometry(h.width,h.height,h.widthSegments,h.heightSegments);break;case "BoxGeometry":case "CubeGeometry":g=new THREE.BoxGeometry(h.width,h.height,h.depth,h.widthSegments,h.heightSegments,h.depthSegments);break;case "CircleGeometry":g=new THREE.CircleGeometry(h.radius,h.segments);break;case "CylinderGeometry":g=new THREE.CylinderGeometry(h.radiusTop,h.radiusBottom,h.height,h.radialSegments,h.heightSegments,h.openEnded);
break;case "SphereGeometry":g=new THREE.SphereGeometry(h.radius,h.widthSegments,h.heightSegments,h.phiStart,h.phiLength,h.thetaStart,h.thetaLength);break;case "IcosahedronGeometry":g=new THREE.IcosahedronGeometry(h.radius,h.detail);break;case "TorusGeometry":g=new THREE.TorusGeometry(h.radius,h.tube,h.radialSegments,h.tubularSegments,h.arc);break;case "TorusKnotGeometry":g=new THREE.TorusKnotGeometry(h.radius,h.tube,h.radialSegments,h.tubularSegments,h.p,h.q,h.heightScale);break;case "BufferGeometry":g=
d.parse(h.data);break;case "Geometry":g=c.parse(h.data).geometry}g.uuid=h.uuid;void 0!==h.name&&(g.name=h.name);b[h.uuid]=g}return b},parseMaterials:function(a){var b={};if(void 0!==a)for(var c=new THREE.MaterialLoader,d=0,e=a.length;d<e;d++){var f=a[d],g=c.parse(f);g.uuid=f.uuid;void 0!==f.name&&(g.name=f.name);b[f.uuid]=g}return b},parseObject:function(){var a=new THREE.Matrix4;return function(b,c,d){var e;switch(b.type){case "Scene":e=new THREE.Scene;break;case "PerspectiveCamera":e=new THREE.PerspectiveCamera(b.fov,
b.aspect,b.near,b.far);break;case "OrthographicCamera":e=new THREE.OrthographicCamera(b.left,b.right,b.top,b.bottom,b.near,b.far);break;case "AmbientLight":e=new THREE.AmbientLight(b.color);break;case "DirectionalLight":e=new THREE.DirectionalLight(b.color,b.intensity);break;case "PointLight":e=new THREE.PointLight(b.color,b.intensity,b.distance);break;case "SpotLight":e=new THREE.SpotLight(b.color,b.intensity,b.distance,b.angle,b.exponent);break;case "HemisphereLight":e=new THREE.HemisphereLight(b.color,
b.groundColor,b.intensity);break;case "Mesh":e=c[b.geometry];var f=d[b.material];void 0===e&&console.error("THREE.ObjectLoader: Undefined geometry "+b.geometry);void 0===f&&console.error("THREE.ObjectLoader: Undefined material "+b.material);e=new THREE.Mesh(e,f);break;case "Sprite":f=d[b.material];void 0===f&&console.error("THREE.ObjectLoader: Undefined material "+b.material);e=new THREE.Sprite(f);break;default:e=new THREE.Object3D}e.uuid=b.uuid;void 0!==b.name&&(e.name=b.name);void 0!==b.matrix?
(a.fromArray(b.matrix),a.decompose(e.position,e.quaternion,e.scale)):(void 0!==b.position&&e.position.fromArray(b.position),void 0!==b.rotation&&e.rotation.fromArray(b.rotation),void 0!==b.scale&&e.scale.fromArray(b.scale));void 0!==b.visible&&(e.visible=b.visible);void 0!==b.userData&&(e.userData=b.userData);if(void 0!==b.children)for(var g in b.children)e.add(this.parseObject(b.children[g],c,d));return e}}()};THREE.TextureLoader=function(a){this.manager=void 0!==a?a:THREE.DefaultLoadingManager};
THREE.TextureLoader.prototype={constructor:THREE.TextureLoader,load:function(a,b,c,d){var e=new THREE.ImageLoader(this.manager);e.setCrossOrigin(this.crossOrigin);e.load(a,function(a){a=new THREE.Texture(a);a.needsUpdate=!0;void 0!==b&&b(a)},c,d)},setCrossOrigin:function(a){this.crossOrigin=a}};
THREE.Material=function(){this.id=THREE.MaterialIdCount++;this.uuid=THREE.Math.generateUUID();this.name="";this.side=THREE.FrontSide;this.opacity=1;this.transparent=!1;this.blending=THREE.NormalBlending;this.blendSrc=THREE.SrcAlphaFactor;this.blendDst=THREE.OneMinusSrcAlphaFactor;this.blendEquation=THREE.AddEquation;this.depthWrite=this.depthTest=!0;this.polygonOffset=!1;this.overdraw=this.alphaTest=this.polygonOffsetUnits=this.polygonOffsetFactor=0;this.needsUpdate=this.visible=!0};
THREE.Material.prototype={constructor:THREE.Material,setValues:function(a){if(void 0!==a)for(var b in a){var c=a[b];if(void 0===c)console.warn("THREE.Material: '"+b+"' parameter is undefined.");else if(b in this){var d=this[b];d instanceof THREE.Color?d.set(c):d instanceof THREE.Vector3&&c instanceof THREE.Vector3?d.copy(c):this[b]="overdraw"==b?Number(c):c}}},clone:function(a){void 0===a&&(a=new THREE.Material);a.name=this.name;a.side=this.side;a.opacity=this.opacity;a.transparent=this.transparent;
a.blending=this.blending;a.blendSrc=this.blendSrc;a.blendDst=this.blendDst;a.blendEquation=this.blendEquation;a.depthTest=this.depthTest;a.depthWrite=this.depthWrite;a.polygonOffset=this.polygonOffset;a.polygonOffsetFactor=this.polygonOffsetFactor;a.polygonOffsetUnits=this.polygonOffsetUnits;a.alphaTest=this.alphaTest;a.overdraw=this.overdraw;a.visible=this.visible;return a},dispose:function(){this.dispatchEvent({type:"dispose"})}};THREE.EventDispatcher.prototype.apply(THREE.Material.prototype);
THREE.MaterialIdCount=0;THREE.LineBasicMaterial=function(a){THREE.Material.call(this);this.color=new THREE.Color(16777215);this.linewidth=1;this.linejoin=this.linecap="round";this.vertexColors=THREE.NoColors;this.fog=!0;this.setValues(a)};THREE.LineBasicMaterial.prototype=Object.create(THREE.Material.prototype);
THREE.LineBasicMaterial.prototype.clone=function(){var a=new THREE.LineBasicMaterial;THREE.Material.prototype.clone.call(this,a);a.color.copy(this.color);a.linewidth=this.linewidth;a.linecap=this.linecap;a.linejoin=this.linejoin;a.vertexColors=this.vertexColors;a.fog=this.fog;return a};THREE.LineDashedMaterial=function(a){THREE.Material.call(this);this.color=new THREE.Color(16777215);this.scale=this.linewidth=1;this.dashSize=3;this.gapSize=1;this.vertexColors=!1;this.fog=!0;this.setValues(a)};
THREE.LineDashedMaterial.prototype=Object.create(THREE.Material.prototype);THREE.LineDashedMaterial.prototype.clone=function(){var a=new THREE.LineDashedMaterial;THREE.Material.prototype.clone.call(this,a);a.color.copy(this.color);a.linewidth=this.linewidth;a.scale=this.scale;a.dashSize=this.dashSize;a.gapSize=this.gapSize;a.vertexColors=this.vertexColors;a.fog=this.fog;return a};
THREE.MeshBasicMaterial=function(a){THREE.Material.call(this);this.color=new THREE.Color(16777215);this.envMap=this.alphaMap=this.specularMap=this.lightMap=this.map=null;this.combine=THREE.MultiplyOperation;this.reflectivity=1;this.refractionRatio=0.98;this.fog=!0;this.shading=THREE.SmoothShading;this.wireframe=!1;this.wireframeLinewidth=1;this.wireframeLinejoin=this.wireframeLinecap="round";this.vertexColors=THREE.NoColors;this.morphTargets=this.skinning=!1;this.setValues(a)};
THREE.MeshBasicMaterial.prototype=Object.create(THREE.Material.prototype);
THREE.MeshBasicMaterial.prototype.clone=function(){var a=new THREE.MeshBasicMaterial;THREE.Material.prototype.clone.call(this,a);a.color.copy(this.color);a.map=this.map;a.lightMap=this.lightMap;a.specularMap=this.specularMap;a.alphaMap=this.alphaMap;a.envMap=this.envMap;a.combine=this.combine;a.reflectivity=this.reflectivity;a.refractionRatio=this.refractionRatio;a.fog=this.fog;a.shading=this.shading;a.wireframe=this.wireframe;a.wireframeLinewidth=this.wireframeLinewidth;a.wireframeLinecap=this.wireframeLinecap;
a.wireframeLinejoin=this.wireframeLinejoin;a.vertexColors=this.vertexColors;a.skinning=this.skinning;a.morphTargets=this.morphTargets;return a};
THREE.MeshLambertMaterial=function(a){THREE.Material.call(this);this.color=new THREE.Color(16777215);this.ambient=new THREE.Color(16777215);this.emissive=new THREE.Color(0);this.wrapAround=!1;this.wrapRGB=new THREE.Vector3(1,1,1);this.envMap=this.alphaMap=this.specularMap=this.lightMap=this.map=null;this.combine=THREE.MultiplyOperation;this.reflectivity=1;this.refractionRatio=0.98;this.fog=!0;this.shading=THREE.SmoothShading;this.wireframe=!1;this.wireframeLinewidth=1;this.wireframeLinejoin=this.wireframeLinecap=
"round";this.vertexColors=THREE.NoColors;this.morphNormals=this.morphTargets=this.skinning=!1;this.setValues(a)};THREE.MeshLambertMaterial.prototype=Object.create(THREE.Material.prototype);
THREE.MeshLambertMaterial.prototype.clone=function(){var a=new THREE.MeshLambertMaterial;THREE.Material.prototype.clone.call(this,a);a.color.copy(this.color);a.ambient.copy(this.ambient);a.emissive.copy(this.emissive);a.wrapAround=this.wrapAround;a.wrapRGB.copy(this.wrapRGB);a.map=this.map;a.lightMap=this.lightMap;a.specularMap=this.specularMap;a.alphaMap=this.alphaMap;a.envMap=this.envMap;a.combine=this.combine;a.reflectivity=this.reflectivity;a.refractionRatio=this.refractionRatio;a.fog=this.fog;
a.shading=this.shading;a.wireframe=this.wireframe;a.wireframeLinewidth=this.wireframeLinewidth;a.wireframeLinecap=this.wireframeLinecap;a.wireframeLinejoin=this.wireframeLinejoin;a.vertexColors=this.vertexColors;a.skinning=this.skinning;a.morphTargets=this.morphTargets;a.morphNormals=this.morphNormals;return a};
THREE.MeshPhongMaterial=function(a){THREE.Material.call(this);this.color=new THREE.Color(16777215);this.ambient=new THREE.Color(16777215);this.emissive=new THREE.Color(0);this.specular=new THREE.Color(1118481);this.shininess=30;this.wrapAround=this.metal=!1;this.wrapRGB=new THREE.Vector3(1,1,1);this.bumpMap=this.lightMap=this.map=null;this.bumpScale=1;this.normalMap=null;this.normalScale=new THREE.Vector2(1,1);this.envMap=this.alphaMap=this.specularMap=null;this.combine=THREE.MultiplyOperation;this.reflectivity=
1;this.refractionRatio=0.98;this.fog=!0;this.shading=THREE.SmoothShading;this.wireframe=!1;this.wireframeLinewidth=1;this.wireframeLinejoin=this.wireframeLinecap="round";this.vertexColors=THREE.NoColors;this.morphNormals=this.morphTargets=this.skinning=!1;this.setValues(a)};THREE.MeshPhongMaterial.prototype=Object.create(THREE.Material.prototype);
THREE.MeshPhongMaterial.prototype.clone=function(){var a=new THREE.MeshPhongMaterial;THREE.Material.prototype.clone.call(this,a);a.color.copy(this.color);a.ambient.copy(this.ambient);a.emissive.copy(this.emissive);a.specular.copy(this.specular);a.shininess=this.shininess;a.metal=this.metal;a.wrapAround=this.wrapAround;a.wrapRGB.copy(this.wrapRGB);a.map=this.map;a.lightMap=this.lightMap;a.bumpMap=this.bumpMap;a.bumpScale=this.bumpScale;a.normalMap=this.normalMap;a.normalScale.copy(this.normalScale);
a.specularMap=this.specularMap;a.alphaMap=this.alphaMap;a.envMap=this.envMap;a.combine=this.combine;a.reflectivity=this.reflectivity;a.refractionRatio=this.refractionRatio;a.fog=this.fog;a.shading=this.shading;a.wireframe=this.wireframe;a.wireframeLinewidth=this.wireframeLinewidth;a.wireframeLinecap=this.wireframeLinecap;a.wireframeLinejoin=this.wireframeLinejoin;a.vertexColors=this.vertexColors;a.skinning=this.skinning;a.morphTargets=this.morphTargets;a.morphNormals=this.morphNormals;return a};
THREE.MeshDepthMaterial=function(a){THREE.Material.call(this);this.wireframe=this.morphTargets=!1;this.wireframeLinewidth=1;this.setValues(a)};THREE.MeshDepthMaterial.prototype=Object.create(THREE.Material.prototype);THREE.MeshDepthMaterial.prototype.clone=function(){var a=new THREE.MeshDepthMaterial;THREE.Material.prototype.clone.call(this,a);a.wireframe=this.wireframe;a.wireframeLinewidth=this.wireframeLinewidth;return a};
THREE.MeshNormalMaterial=function(a){THREE.Material.call(this,a);this.shading=THREE.FlatShading;this.wireframe=!1;this.wireframeLinewidth=1;this.morphTargets=!1;this.setValues(a)};THREE.MeshNormalMaterial.prototype=Object.create(THREE.Material.prototype);THREE.MeshNormalMaterial.prototype.clone=function(){var a=new THREE.MeshNormalMaterial;THREE.Material.prototype.clone.call(this,a);a.shading=this.shading;a.wireframe=this.wireframe;a.wireframeLinewidth=this.wireframeLinewidth;return a};
THREE.MeshFaceMaterial=function(a){this.materials=a instanceof Array?a:[]};THREE.MeshFaceMaterial.prototype.clone=function(){for(var a=new THREE.MeshFaceMaterial,b=0;b<this.materials.length;b++)a.materials.push(this.materials[b].clone());return a};THREE.PointCloudMaterial=function(a){THREE.Material.call(this);this.color=new THREE.Color(16777215);this.map=null;this.size=1;this.sizeAttenuation=!0;this.vertexColors=THREE.NoColors;this.fog=!0;this.setValues(a)};THREE.PointCloudMaterial.prototype=Object.create(THREE.Material.prototype);
THREE.PointCloudMaterial.prototype.clone=function(){var a=new THREE.PointCloudMaterial;THREE.Material.prototype.clone.call(this,a);a.color.copy(this.color);a.map=this.map;a.size=this.size;a.sizeAttenuation=this.sizeAttenuation;a.vertexColors=this.vertexColors;a.fog=this.fog;return a};THREE.ParticleBasicMaterial=function(a){console.warn("THREE.ParticleBasicMaterial has been renamed to THREE.PointCloudMaterial.");return new THREE.PointCloudMaterial(a)};
THREE.ParticleSystemMaterial=function(a){console.warn("THREE.ParticleSystemMaterial has been renamed to THREE.PointCloudMaterial.");return new THREE.PointCloudMaterial(a)};
THREE.ShaderMaterial=function(a){THREE.Material.call(this);this.defines={};this.uniforms={};this.attributes=null;this.vertexShader="void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}";this.fragmentShader="void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}";this.shading=THREE.SmoothShading;this.linewidth=1;this.wireframe=!1;this.wireframeLinewidth=1;this.lights=this.fog=!1;this.vertexColors=THREE.NoColors;this.morphNormals=this.morphTargets=this.skinning=
!1;this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]};this.index0AttributeName=void 0;this.setValues(a)};THREE.ShaderMaterial.prototype=Object.create(THREE.Material.prototype);
THREE.ShaderMaterial.prototype.clone=function(){var a=new THREE.ShaderMaterial;THREE.Material.prototype.clone.call(this,a);a.fragmentShader=this.fragmentShader;a.vertexShader=this.vertexShader;a.uniforms=THREE.UniformsUtils.clone(this.uniforms);a.attributes=this.attributes;a.defines=this.defines;a.shading=this.shading;a.wireframe=this.wireframe;a.wireframeLinewidth=this.wireframeLinewidth;a.fog=this.fog;a.lights=this.lights;a.vertexColors=this.vertexColors;a.skinning=this.skinning;a.morphTargets=
this.morphTargets;a.morphNormals=this.morphNormals;return a};THREE.RawShaderMaterial=function(a){THREE.ShaderMaterial.call(this,a)};THREE.RawShaderMaterial.prototype=Object.create(THREE.ShaderMaterial.prototype);THREE.RawShaderMaterial.prototype.clone=function(){var a=new THREE.RawShaderMaterial;THREE.ShaderMaterial.prototype.clone.call(this,a);return a};THREE.SpriteMaterial=function(a){THREE.Material.call(this);this.color=new THREE.Color(16777215);this.map=null;this.rotation=0;this.fog=!1;this.setValues(a)};
THREE.SpriteMaterial.prototype=Object.create(THREE.Material.prototype);THREE.SpriteMaterial.prototype.clone=function(){var a=new THREE.SpriteMaterial;THREE.Material.prototype.clone.call(this,a);a.color.copy(this.color);a.map=this.map;a.rotation=this.rotation;a.fog=this.fog;return a};THREE.SpriteCanvasMaterial=function(a){THREE.Material.call(this);this.color=new THREE.Color(16777215);this.program=function(a,c){};this.setValues(a)};THREE.SpriteCanvasMaterial.prototype=Object.create(THREE.Material.prototype);
THREE.SpriteCanvasMaterial.prototype.clone=function(){var a=new THREE.SpriteCanvasMaterial;THREE.Material.prototype.clone.call(this,a);a.color.copy(this.color);a.program=this.program;return a};THREE.ParticleCanvasMaterial=THREE.SpriteCanvasMaterial;
THREE.Texture=function(a,b,c,d,e,f,g,h,k){this.id=THREE.TextureIdCount++;this.uuid=THREE.Math.generateUUID();this.name="";this.image=void 0!==a?a:THREE.Texture.DEFAULT_IMAGE;this.mipmaps=[];this.mapping=void 0!==b?b:THREE.Texture.DEFAULT_MAPPING;this.wrapS=void 0!==c?c:THREE.ClampToEdgeWrapping;this.wrapT=void 0!==d?d:THREE.ClampToEdgeWrapping;this.magFilter=void 0!==e?e:THREE.LinearFilter;this.minFilter=void 0!==f?f:THREE.LinearMipMapLinearFilter;this.anisotropy=void 0!==k?k:1;this.format=void 0!==
g?g:THREE.RGBAFormat;this.type=void 0!==h?h:THREE.UnsignedByteType;this.offset=new THREE.Vector2(0,0);this.repeat=new THREE.Vector2(1,1);this.generateMipmaps=!0;this.premultiplyAlpha=!1;this.flipY=!0;this.unpackAlignment=4;this._needsUpdate=!1;this.onUpdate=null};THREE.Texture.DEFAULT_IMAGE=void 0;THREE.Texture.DEFAULT_MAPPING=new THREE.UVMapping;
THREE.Texture.prototype={constructor:THREE.Texture,get needsUpdate(){return this._needsUpdate},set needsUpdate(a){!0===a&&this.update();this._needsUpdate=a},clone:function(a){void 0===a&&(a=new THREE.Texture);a.image=this.image;a.mipmaps=this.mipmaps.slice(0);a.mapping=this.mapping;a.wrapS=this.wrapS;a.wrapT=this.wrapT;a.magFilter=this.magFilter;a.minFilter=this.minFilter;a.anisotropy=this.anisotropy;a.format=this.format;a.type=this.type;a.offset.copy(this.offset);a.repeat.copy(this.repeat);a.generateMipmaps=
this.generateMipmaps;a.premultiplyAlpha=this.premultiplyAlpha;a.flipY=this.flipY;a.unpackAlignment=this.unpackAlignment;return a},update:function(){this.dispatchEvent({type:"update"})},dispose:function(){this.dispatchEvent({type:"dispose"})}};THREE.EventDispatcher.prototype.apply(THREE.Texture.prototype);THREE.TextureIdCount=0;THREE.CubeTexture=function(a,b,c,d,e,f,g,h,k){THREE.Texture.call(this,a,b,c,d,e,f,g,h,k);this.images=a};THREE.CubeTexture.prototype=Object.create(THREE.Texture.prototype);
THREE.CubeTexture.clone=function(a){void 0===a&&(a=new THREE.CubeTexture);THREE.Texture.prototype.clone.call(this,a);a.images=this.images;return a};THREE.CompressedTexture=function(a,b,c,d,e,f,g,h,k,l,n){THREE.Texture.call(this,null,f,g,h,k,l,d,e,n);this.image={width:b,height:c};this.mipmaps=a;this.generateMipmaps=!1};THREE.CompressedTexture.prototype=Object.create(THREE.Texture.prototype);
THREE.CompressedTexture.prototype.clone=function(){var a=new THREE.CompressedTexture;THREE.Texture.prototype.clone.call(this,a);return a};THREE.DataTexture=function(a,b,c,d,e,f,g,h,k,l,n){THREE.Texture.call(this,null,f,g,h,k,l,d,e,n);this.image={data:a,width:b,height:c}};THREE.DataTexture.prototype=Object.create(THREE.Texture.prototype);THREE.DataTexture.prototype.clone=function(){var a=new THREE.DataTexture;THREE.Texture.prototype.clone.call(this,a);return a};
THREE.PointCloud=function(a,b){THREE.Object3D.call(this);this.geometry=void 0!==a?a:new THREE.Geometry;this.material=void 0!==b?b:new THREE.PointCloudMaterial({color:16777215*Math.random()});this.sortParticles=!1};THREE.PointCloud.prototype=Object.create(THREE.Object3D.prototype);
THREE.PointCloud.prototype.raycast=function(){var a=new THREE.Matrix4,b=new THREE.Ray;return function(c,d){var e=this,f=e.geometry,g=c.params.PointCloud.threshold;a.getInverse(this.matrixWorld);b.copy(c.ray).applyMatrix4(a);if(null===f.boundingBox||!1!==b.isIntersectionBox(f.boundingBox)){var h=g/((this.scale.x+this.scale.y+this.scale.z)/3),k=new THREE.Vector3,g=function(a,f){var g=b.distanceToPoint(a);if(g<h){var k=b.closestPointToPoint(a);k.applyMatrix4(e.matrixWorld);var l=c.ray.origin.distanceTo(k);
d.push({distance:l,distanceToRay:g,point:k.clone(),index:f,face:null,object:e})}};if(f instanceof THREE.BufferGeometry){var l=f.attributes,n=l.position.array;if(void 0!==l.index){var l=l.index.array,q=f.offsets;0===q.length&&(q=[{start:0,count:l.length,index:0}]);for(var r=0,t=q.length;r<t;++r)for(var s=q[r].start,p=q[r].index,f=s,s=s+q[r].count;f<s;f++){var v=p+l[f];k.set(n[3*v],n[3*v+1],n[3*v+2]);g(k,v)}}else for(l=n.length/3,f=0;f<l;f++)k.set(n[3*f],n[3*f+1],n[3*f+2]),g(k,f)}else for(k=this.geometry.vertices,
f=0;f<k.length;f++)g(k[f],f)}}}();THREE.PointCloud.prototype.clone=function(a){void 0===a&&(a=new THREE.PointCloud(this.geometry,this.material));a.sortParticles=this.sortParticles;THREE.Object3D.prototype.clone.call(this,a);return a};THREE.ParticleSystem=function(a,b){console.warn("THREE.ParticleSystem has been renamed to THREE.PointCloud.");return new THREE.PointCloud(a,b)};
THREE.Line=function(a,b,c){THREE.Object3D.call(this);this.geometry=void 0!==a?a:new THREE.Geometry;this.material=void 0!==b?b:new THREE.LineBasicMaterial({color:16777215*Math.random()});this.type=void 0!==c?c:THREE.LineStrip};THREE.LineStrip=0;THREE.LinePieces=1;THREE.Line.prototype=Object.create(THREE.Object3D.prototype);
THREE.Line.prototype.raycast=function(){var a=new THREE.Matrix4,b=new THREE.Ray,c=new THREE.Sphere;return function(d,e){var f=d.linePrecision,f=f*f,g=this.geometry;null===g.boundingSphere&&g.computeBoundingSphere();c.copy(g.boundingSphere);c.applyMatrix4(this.matrixWorld);if(!1!==d.ray.isIntersectionSphere(c)&&(a.getInverse(this.matrixWorld),b.copy(d.ray).applyMatrix4(a),g instanceof THREE.Geometry))for(var g=g.vertices,h=g.length,k=new THREE.Vector3,l=new THREE.Vector3,n=this.type===THREE.LineStrip?
1:2,q=0;q<h-1;q+=n)if(!(b.distanceSqToSegment(g[q],g[q+1],l,k)>f)){var r=b.origin.distanceTo(l);r<d.near||r>d.far||e.push({distance:r,point:k.clone().applyMatrix4(this.matrixWorld),face:null,faceIndex:null,object:this})}}}();THREE.Line.prototype.clone=function(a){void 0===a&&(a=new THREE.Line(this.geometry,this.material,this.type));THREE.Object3D.prototype.clone.call(this,a);return a};
THREE.Mesh=function(a,b){THREE.Object3D.call(this);this.geometry=void 0!==a?a:new THREE.Geometry;this.material=void 0!==b?b:new THREE.MeshBasicMaterial({color:16777215*Math.random()});this.updateMorphTargets()};THREE.Mesh.prototype=Object.create(THREE.Object3D.prototype);
THREE.Mesh.prototype.updateMorphTargets=function(){if(void 0!==this.geometry.morphTargets&&0<this.geometry.morphTargets.length){this.morphTargetBase=-1;this.morphTargetForcedOrder=[];this.morphTargetInfluences=[];this.morphTargetDictionary={};for(var a=0,b=this.geometry.morphTargets.length;a<b;a++)this.morphTargetInfluences.push(0),this.morphTargetDictionary[this.geometry.morphTargets[a].name]=a}};
THREE.Mesh.prototype.getMorphTargetIndexByName=function(a){if(void 0!==this.morphTargetDictionary[a])return this.morphTargetDictionary[a];console.log("THREE.Mesh.getMorphTargetIndexByName: morph target "+a+" does not exist. Returning 0.");return 0};
THREE.Mesh.prototype.raycast=function(){var a=new THREE.Matrix4,b=new THREE.Ray,c=new THREE.Sphere,d=new THREE.Vector3,e=new THREE.Vector3,f=new THREE.Vector3;return function(g,h){var k=this.geometry;null===k.boundingSphere&&k.computeBoundingSphere();c.copy(k.boundingSphere);c.applyMatrix4(this.matrixWorld);if(!1!==g.ray.isIntersectionSphere(c)&&(a.getInverse(this.matrixWorld),b.copy(g.ray).applyMatrix4(a),null===k.boundingBox||!1!==b.isIntersectionBox(k.boundingBox)))if(k instanceof THREE.BufferGeometry){var l=
this.material;if(void 0!==l){var n=k.attributes,q,r,t=g.precision;if(void 0!==n.index){var s=n.index.array,p=n.position.array,v=k.offsets;0===v.length&&(v=[{start:0,count:s.length,index:0}]);for(var w=0,u=v.length;w<u;++w)for(var n=v[w].start,D=v[w].index,k=n,A=n+v[w].count;k<A;k+=3){n=D+s[k];q=D+s[k+1];r=D+s[k+2];d.set(p[3*n],p[3*n+1],p[3*n+2]);e.set(p[3*q],p[3*q+1],p[3*q+2]);f.set(p[3*r],p[3*r+1],p[3*r+2]);var x=l.side===THREE.BackSide?b.intersectTriangle(f,e,d,!0):b.intersectTriangle(d,e,f,l.side!==
THREE.DoubleSide);if(null!==x){x.applyMatrix4(this.matrixWorld);var C=g.ray.origin.distanceTo(x);C<t||C<g.near||C>g.far||h.push({distance:C,point:x,indices:[n,q,r],face:null,faceIndex:null,object:this})}}}else for(p=n.position.array,s=k=0,A=p.length;k<A;k+=3,s+=9)n=k,q=k+1,r=k+2,d.set(p[s],p[s+1],p[s+2]),e.set(p[s+3],p[s+4],p[s+5]),f.set(p[s+6],p[s+7],p[s+8]),x=l.side===THREE.BackSide?b.intersectTriangle(f,e,d,!0):b.intersectTriangle(d,e,f,l.side!==THREE.DoubleSide),null!==x&&(x.applyMatrix4(this.matrixWorld),
C=g.ray.origin.distanceTo(x),C<t||C<g.near||C>g.far||h.push({distance:C,point:x,indices:[n,q,r],face:null,faceIndex:null,object:this}))}}else if(k instanceof THREE.Geometry)for(s=this.material instanceof THREE.MeshFaceMaterial,p=!0===s?this.material.materials:null,t=g.precision,v=k.vertices,w=0,u=k.faces.length;w<u;w++)if(D=k.faces[w],l=!0===s?p[D.materialIndex]:this.material,void 0!==l){n=v[D.a];q=v[D.b];r=v[D.c];if(!0===l.morphTargets){x=k.morphTargets;C=this.morphTargetInfluences;d.set(0,0,0);
e.set(0,0,0);f.set(0,0,0);for(var A=0,I=x.length;A<I;A++){var z=C[A];if(0!==z){var y=x[A].vertices;d.x+=(y[D.a].x-n.x)*z;d.y+=(y[D.a].y-n.y)*z;d.z+=(y[D.a].z-n.z)*z;e.x+=(y[D.b].x-q.x)*z;e.y+=(y[D.b].y-q.y)*z;e.z+=(y[D.b].z-q.z)*z;f.x+=(y[D.c].x-r.x)*z;f.y+=(y[D.c].y-r.y)*z;f.z+=(y[D.c].z-r.z)*z}}d.add(n);e.add(q);f.add(r);n=d;q=e;r=f}x=l.side===THREE.BackSide?b.intersectTriangle(r,q,n,!0):b.intersectTriangle(n,q,r,l.side!==THREE.DoubleSide);null!==x&&(x.applyMatrix4(this.matrixWorld),C=g.ray.origin.distanceTo(x),
C<t||C<g.near||C>g.far||h.push({distance:C,point:x,face:D,faceIndex:w,object:this}))}}}();THREE.Mesh.prototype.clone=function(a,b){void 0===a&&(a=new THREE.Mesh(this.geometry,this.material));THREE.Object3D.prototype.clone.call(this,a,b);return a};THREE.Bone=function(a){THREE.Object3D.call(this);this.skin=a;this.accumulatedSclWeight=this.accumulatedPosWeight=this.accumulatedRotWeight=0};THREE.Bone.prototype=Object.create(THREE.Object3D.prototype);
THREE.Bone.prototype.updateMatrixWorld=function(a){THREE.Object3D.prototype.updateMatrixWorld.call(this,a);this.accumulatedSclWeight=this.accumulatedPosWeight=this.accumulatedRotWeight=0};
THREE.Skeleton=function(a,b,c){this.useVertexTexture=void 0!==c?c:!0;this.identityMatrix=new THREE.Matrix4;a=a||[];this.bones=a.slice(0);this.useVertexTexture?(this.boneTextureHeight=this.boneTextureWidth=a=256<this.bones.length?64:64<this.bones.length?32:16<this.bones.length?16:8,this.boneMatrices=new Float32Array(this.boneTextureWidth*this.boneTextureHeight*4),this.boneTexture=new THREE.DataTexture(this.boneMatrices,this.boneTextureWidth,this.boneTextureHeight,THREE.RGBAFormat,THREE.FloatType),
this.boneTexture.minFilter=THREE.NearestFilter,this.boneTexture.magFilter=THREE.NearestFilter,this.boneTexture.generateMipmaps=!1,this.boneTexture.flipY=!1):this.boneMatrices=new Float32Array(16*this.bones.length);if(void 0===b)this.calculateInverses();else if(this.bones.length===b.length)this.boneInverses=b.slice(0);else for(console.warn("THREE.Skeleton bonInverses is the wrong length."),this.boneInverses=[],b=0,a=this.bones.length;b<a;b++)this.boneInverses.push(new THREE.Matrix4)};
THREE.Skeleton.prototype.calculateInverses=function(){this.boneInverses=[];for(var a=0,b=this.bones.length;a<b;a++){var c=new THREE.Matrix4;this.bones[a]&&c.getInverse(this.bones[a].matrixWorld);this.boneInverses.push(c)}};
THREE.Skeleton.prototype.pose=function(){for(var a,b=0,c=this.bones.length;b<c;b++)(a=this.bones[b])&&a.matrixWorld.getInverse(this.boneInverses[b]);b=0;for(c=this.bones.length;b<c;b++)if(a=this.bones[b])a.parent?(a.matrix.getInverse(a.parent.matrixWorld),a.matrix.multiply(a.matrixWorld)):a.matrix.copy(a.matrixWorld),a.matrix.decompose(a.position,a.quaternion,a.scale)};
THREE.Skeleton.prototype.update=function(){for(var a=new THREE.Matrix4,b=0,c=this.bones.length;b<c;b++)a.multiplyMatrices(this.bones[b]?this.bones[b].matrixWorld:this.identityMatrix,this.boneInverses[b]),a.flattenToArrayOffset(this.boneMatrices,16*b);this.useVertexTexture&&(this.boneTexture.needsUpdate=!0)};
THREE.SkinnedMesh=function(a,b,c){THREE.Mesh.call(this,a,b);this.bindMode="attached";this.bindMatrix=new THREE.Matrix4;this.bindMatrixInverse=new THREE.Matrix4;a=[];if(this.geometry&&void 0!==this.geometry.bones){for(var d,e,f,g,h=0,k=this.geometry.bones.length;h<k;++h)d=this.geometry.bones[h],e=d.pos,f=d.rotq,g=d.scl,b=new THREE.Bone(this),a.push(b),b.name=d.name,b.position.set(e[0],e[1],e[2]),b.quaternion.set(f[0],f[1],f[2],f[3]),void 0!==g?b.scale.set(g[0],g[1],g[2]):b.scale.set(1,1,1);h=0;for(k=
this.geometry.bones.length;h<k;++h)d=this.geometry.bones[h],-1!==d.parent?a[d.parent].add(a[h]):this.add(a[h])}this.normalizeSkinWeights();this.updateMatrixWorld(!0);this.bind(new THREE.Skeleton(a,void 0,c))};THREE.SkinnedMesh.prototype=Object.create(THREE.Mesh.prototype);THREE.SkinnedMesh.prototype.bind=function(a,b){this.skeleton=a;void 0===b&&(this.updateMatrixWorld(!0),b=this.matrixWorld);this.bindMatrix.copy(b);this.bindMatrixInverse.getInverse(b)};THREE.SkinnedMesh.prototype.pose=function(){this.skeleton.pose()};
THREE.SkinnedMesh.prototype.normalizeSkinWeights=function(){if(this.geometry instanceof THREE.Geometry)for(var a=0;a<this.geometry.skinIndices.length;a++){var b=this.geometry.skinWeights[a],c=1/b.lengthManhattan();Infinity!==c?b.multiplyScalar(c):b.set(1)}};
THREE.SkinnedMesh.prototype.updateMatrixWorld=function(a){THREE.Mesh.prototype.updateMatrixWorld.call(this,!0);"attached"===this.bindMode?this.bindMatrixInverse.getInverse(this.matrixWorld):"detached"===this.bindMode?this.bindMatrixInverse.getInverse(this.bindMatrix):console.warn("THREE.SkinnedMesh unreckognized bindMode: "+this.bindMode)};
THREE.SkinnedMesh.prototype.clone=function(a){void 0===a&&(a=new THREE.SkinnedMesh(this.geometry,this.material,this.useVertexTexture));THREE.Mesh.prototype.clone.call(this,a);return a};THREE.MorphAnimMesh=function(a,b){THREE.Mesh.call(this,a,b);this.duration=1E3;this.mirroredLoop=!1;this.currentKeyframe=this.lastKeyframe=this.time=0;this.direction=1;this.directionBackwards=!1;this.setFrameRange(0,this.geometry.morphTargets.length-1)};THREE.MorphAnimMesh.prototype=Object.create(THREE.Mesh.prototype);
THREE.MorphAnimMesh.prototype.setFrameRange=function(a,b){this.startKeyframe=a;this.endKeyframe=b;this.length=this.endKeyframe-this.startKeyframe+1};THREE.MorphAnimMesh.prototype.setDirectionForward=function(){this.direction=1;this.directionBackwards=!1};THREE.MorphAnimMesh.prototype.setDirectionBackward=function(){this.direction=-1;this.directionBackwards=!0};
THREE.MorphAnimMesh.prototype.parseAnimations=function(){var a=this.geometry;a.animations||(a.animations={});for(var b,c=a.animations,d=/([a-z]+)_?(\d+)/,e=0,f=a.morphTargets.length;e<f;e++){var g=a.morphTargets[e].name.match(d);if(g&&1<g.length){g=g[1];c[g]||(c[g]={start:Infinity,end:-Infinity});var h=c[g];e<h.start&&(h.start=e);e>h.end&&(h.end=e);b||(b=g)}}a.firstAnimation=b};
THREE.MorphAnimMesh.prototype.setAnimationLabel=function(a,b,c){this.geometry.animations||(this.geometry.animations={});this.geometry.animations[a]={start:b,end:c}};THREE.MorphAnimMesh.prototype.playAnimation=function(a,b){var c=this.geometry.animations[a];c?(this.setFrameRange(c.start,c.end),this.duration=(c.end-c.start)/b*1E3,this.time=0):console.warn("animation["+a+"] undefined")};
THREE.MorphAnimMesh.prototype.updateAnimation=function(a){var b=this.duration/this.length;this.time+=this.direction*a;if(this.mirroredLoop){if(this.time>this.duration||0>this.time)this.direction*=-1,this.time>this.duration&&(this.time=this.duration,this.directionBackwards=!0),0>this.time&&(this.time=0,this.directionBackwards=!1)}else this.time%=this.duration,0>this.time&&(this.time+=this.duration);a=this.startKeyframe+THREE.Math.clamp(Math.floor(this.time/b),0,this.length-1);a!==this.currentKeyframe&&
(this.morphTargetInfluences[this.lastKeyframe]=0,this.morphTargetInfluences[this.currentKeyframe]=1,this.morphTargetInfluences[a]=0,this.lastKeyframe=this.currentKeyframe,this.currentKeyframe=a);b=this.time%b/b;this.directionBackwards&&(b=1-b);this.morphTargetInfluences[this.currentKeyframe]=b;this.morphTargetInfluences[this.lastKeyframe]=1-b};
THREE.MorphAnimMesh.prototype.interpolateTargets=function(a,b,c){for(var d=this.morphTargetInfluences,e=0,f=d.length;e<f;e++)d[e]=0;-1<a&&(d[a]=1-c);-1<b&&(d[b]=c)};
THREE.MorphAnimMesh.prototype.clone=function(a){void 0===a&&(a=new THREE.MorphAnimMesh(this.geometry,this.material));a.duration=this.duration;a.mirroredLoop=this.mirroredLoop;a.time=this.time;a.lastKeyframe=this.lastKeyframe;a.currentKeyframe=this.currentKeyframe;a.direction=this.direction;a.directionBackwards=this.directionBackwards;THREE.Mesh.prototype.clone.call(this,a);return a};THREE.LOD=function(){THREE.Object3D.call(this);this.objects=[]};THREE.LOD.prototype=Object.create(THREE.Object3D.prototype);
THREE.LOD.prototype.addLevel=function(a,b){void 0===b&&(b=0);b=Math.abs(b);for(var c=0;c<this.objects.length&&!(b<this.objects[c].distance);c++);this.objects.splice(c,0,{distance:b,object:a});this.add(a)};THREE.LOD.prototype.getObjectForDistance=function(a){for(var b=1,c=this.objects.length;b<c&&!(a<this.objects[b].distance);b++);return this.objects[b-1].object};
THREE.LOD.prototype.raycast=function(){var a=new THREE.Vector3;return function(b,c){a.setFromMatrixPosition(this.matrixWorld);var d=b.ray.origin.distanceTo(a);this.getObjectForDistance(d).raycast(b,c)}}();
THREE.LOD.prototype.update=function(){var a=new THREE.Vector3,b=new THREE.Vector3;return function(c){if(1<this.objects.length){a.setFromMatrixPosition(c.matrixWorld);b.setFromMatrixPosition(this.matrixWorld);c=a.distanceTo(b);this.objects[0].object.visible=!0;for(var d=1,e=this.objects.length;d<e;d++)if(c>=this.objects[d].distance)this.objects[d-1].object.visible=!1,this.objects[d].object.visible=!0;else break;for(;d<e;d++)this.objects[d].object.visible=!1}}}();
THREE.LOD.prototype.clone=function(a){void 0===a&&(a=new THREE.LOD);THREE.Object3D.prototype.clone.call(this,a);for(var b=0,c=this.objects.length;b<c;b++){var d=this.objects[b].object.clone();d.visible=0===b;a.addLevel(d,this.objects[b].distance)}return a};
THREE.Sprite=function(){var a=new Float32Array([-0.5,-0.5,0,0.5,-0.5,0,0.5,0.5,0]),b=new THREE.BufferGeometry;b.addAttribute("position",new THREE.BufferAttribute(a,3));return function(a){THREE.Object3D.call(this);this.geometry=b;this.material=void 0!==a?a:new THREE.SpriteMaterial}}();THREE.Sprite.prototype=Object.create(THREE.Object3D.prototype);
THREE.Sprite.prototype.raycast=function(){var a=new THREE.Vector3;return function(b,c){a.setFromMatrixPosition(this.matrixWorld);var d=b.ray.distanceToPoint(a);d>this.scale.x||c.push({distance:d,point:this.position,face:null,object:this})}}();THREE.Sprite.prototype.updateMatrix=function(){this.matrix.compose(this.position,this.quaternion,this.scale);this.matrixWorldNeedsUpdate=!0};
THREE.Sprite.prototype.clone=function(a){void 0===a&&(a=new THREE.Sprite(this.material));THREE.Object3D.prototype.clone.call(this,a);return a};THREE.Particle=THREE.Sprite;THREE.Scene=function(){THREE.Object3D.call(this);this.overrideMaterial=this.fog=null;this.autoUpdate=!0;this.matrixAutoUpdate=!1;this.__lights=[];this.__objectsAdded=[];this.__objectsRemoved=[]};THREE.Scene.prototype=Object.create(THREE.Object3D.prototype);
THREE.Scene.prototype.__addObject=function(a){if(a instanceof THREE.Light)-1===this.__lights.indexOf(a)&&this.__lights.push(a),a.target&&void 0===a.target.parent&&this.add(a.target);else if(!(a instanceof THREE.Camera||a instanceof THREE.Bone)){this.__objectsAdded.push(a);var b=this.__objectsRemoved.indexOf(a);-1!==b&&this.__objectsRemoved.splice(b,1)}this.dispatchEvent({type:"objectAdded",object:a});a.dispatchEvent({type:"addedToScene",scene:this});for(b=0;b<a.children.length;b++)this.__addObject(a.children[b])};
THREE.Scene.prototype.__removeObject=function(a){if(a instanceof THREE.Light){var b=this.__lights.indexOf(a);-1!==b&&this.__lights.splice(b,1);if(a.shadowCascadeArray)for(b=0;b<a.shadowCascadeArray.length;b++)this.__removeObject(a.shadowCascadeArray[b])}else a instanceof THREE.Camera||(this.__objectsRemoved.push(a),b=this.__objectsAdded.indexOf(a),-1!==b&&this.__objectsAdded.splice(b,1));this.dispatchEvent({type:"objectRemoved",object:a});a.dispatchEvent({type:"removedFromScene",scene:this});for(b=
0;b<a.children.length;b++)this.__removeObject(a.children[b])};THREE.Scene.prototype.clone=function(a){void 0===a&&(a=new THREE.Scene);THREE.Object3D.prototype.clone.call(this,a);null!==this.fog&&(a.fog=this.fog.clone());null!==this.overrideMaterial&&(a.overrideMaterial=this.overrideMaterial.clone());a.autoUpdate=this.autoUpdate;a.matrixAutoUpdate=this.matrixAutoUpdate;return a};THREE.Fog=function(a,b,c){this.name="";this.color=new THREE.Color(a);this.near=void 0!==b?b:1;this.far=void 0!==c?c:1E3};
THREE.Fog.prototype.clone=function(){return new THREE.Fog(this.color.getHex(),this.near,this.far)};THREE.FogExp2=function(a,b){this.name="";this.color=new THREE.Color(a);this.density=void 0!==b?b:2.5E-4};THREE.FogExp2.prototype.clone=function(){return new THREE.FogExp2(this.color.getHex(),this.density)};
THREE.CanvasRenderer=function(a){function b(a,b,c,d){l(b);n(c);q(d);r(a.getStyle());O.stroke();ra.expandByScalar(2*b)}function c(a){t(a.getStyle());O.fill()}function d(a){e(a.target)}function e(a){if(!(a instanceof THREE.CompressedTexture)){var b=a.wrapS===THREE.RepeatWrapping,c=a.wrapT===THREE.RepeatWrapping,d=a.image,e=document.createElement("canvas");e.width=d.width;e.height=d.height;var f=e.getContext("2d");f.setTransform(1,0,0,-1,0,d.height);f.drawImage(d,0,0);Ca[a.id]=O.createPattern(e,!0===
b&&!0===c?"repeat":!0===b&&!1===c?"repeat-x":!1===b&&!0===c?"repeat-y":"no-repeat")}}function f(a,b,c,f,g,h,k,l,n,r,q,s,p){if(!(p instanceof THREE.DataTexture)){!1===p.hasEventListener("update",d)&&(void 0!==p.image&&0<p.image.width&&e(p),p.addEventListener("update",d));var m=Ca[p.id];if(void 0!==m){t(m);var m=p.offset.x/p.repeat.x,w=p.offset.y/p.repeat.y,u=p.image.width*p.repeat.x;p=p.image.height*p.repeat.y;k=(k+m)*u;l=(l+w)*p;c-=a;f-=b;g-=a;h-=b;n=(n+m)*u-k;r=(r+w)*p-l;q=(q+m)*u-k;s=(s+w)*p-l;
p=n*s-q*r;0!==p&&(m=1/p,p=(s*c-r*g)*m,r=(s*f-r*h)*m,c=(n*g-q*c)*m,f=(n*h-q*f)*m,a=a-p*k-c*l,b=b-r*k-f*l,O.save(),O.transform(p,r,c,f,a,b),O.fill(),O.restore())}else t("rgba(0,0,0,1)"),O.fill()}}function g(a,b,c){var d=b.x-a.x,e=b.y-a.y,f=d*d+e*e;0!==f&&(c/=Math.sqrt(f),d*=c,e*=c,b.x+=d,b.y+=e,a.x-=d,a.y-=e)}function h(a){Q!==a&&(Q=O.globalAlpha=a)}function k(a){L!==a&&(a===THREE.NormalBlending?O.globalCompositeOperation="source-over":a===THREE.AdditiveBlending?O.globalCompositeOperation="lighter":
a===THREE.SubtractiveBlending&&(O.globalCompositeOperation="darker"),L=a)}function l(a){S!==a&&(S=O.lineWidth=a)}function n(a){V!==a&&(V=O.lineCap=a)}function q(a){W!==a&&(W=O.lineJoin=a)}function r(a){R!==a&&(R=O.strokeStyle=a)}function t(a){B!==a&&(B=O.fillStyle=a)}function s(a){H.length!==a.length&&(O.setLineDash(a),H=a)}console.log("THREE.CanvasRenderer",THREE.REVISION);var p=THREE.Math.smoothstep;a=a||{};var v=this,w,u,D,A=new THREE.Projector,x=void 0!==a.canvas?a.canvas:document.createElement("canvas"),
C=x.width,I=x.height,z=Math.floor(C/2),y=Math.floor(I/2),K=0,N=0,ba=C,P=I,O=x.getContext("2d",{alpha:!0===a.alpha}),J=new THREE.Color(0),E=0,Q=1,L=0,R=null,B=null,S=null,V=null,W=null,H=[],oa,$,X,T;new THREE.RenderableVertex;new THREE.RenderableVertex;var ya,Ea,Aa,za,Oa,Pa,G=new THREE.Color;new THREE.Color;new THREE.Color;new THREE.Color;new THREE.Color;var Ba=new THREE.Color,Ya=new THREE.Color,Za=new THREE.Color,Ca={},ca,la,qa,ua,ja,Fa,va,Ka=new THREE.Box2,aa=new THREE.Box2,ra=new THREE.Box2,Da=
new THREE.Color,Qa=new THREE.Color,cb=new THREE.Color,Ga=new THREE.Vector3,xa=new THREE.Vector3,ma=new THREE.Vector3,Ja=new THREE.Matrix3;void 0===O.setLineDash&&(O.setLineDash=function(){});this.domElement=x;this.devicePixelRatio=void 0!==a.devicePixelRatio?a.devicePixelRatio:void 0!==self.devicePixelRatio?self.devicePixelRatio:1;this.sortElements=this.sortObjects=this.autoClear=!0;this.info={render:{vertices:0,faces:0}};this.supportsVertexTextures=function(){};this.setFaceCulling=function(){};this.setSize=
function(a,b,c){C=a*this.devicePixelRatio;I=b*this.devicePixelRatio;x.width=C;x.height=I;z=Math.floor(C/2);y=Math.floor(I/2);!1!==c&&(x.style.width=a+"px",x.style.height=b+"px");Ka.min.set(-z,-y);Ka.max.set(z,y);aa.min.set(-z,-y);aa.max.set(z,y);Q=1;L=0;W=V=S=B=R=null;this.setViewport(0,0,a,b)};this.setViewport=function(a,b,c,d){K=a*this.devicePixelRatio;N=b*this.devicePixelRatio;ba=c*this.devicePixelRatio;P=d*this.devicePixelRatio};this.setScissor=function(){};this.enableScissorTest=function(){};
this.setClearColor=function(a,b){J.set(a);E=void 0!==b?b:1;aa.min.set(-z,-y);aa.max.set(z,y)};this.setClearColorHex=function(a,b){console.warn("THREE.CanvasRenderer: .setClearColorHex() is being removed. Use .setClearColor() instead.");this.setClearColor(a,b)};this.getClearColor=function(){return J};this.getClearAlpha=function(){return E};this.getMaxAnisotropy=function(){return 0};this.clear=function(){!1===aa.empty()&&(aa.intersect(Ka),aa.expandByScalar(2),aa.min.x+=z,aa.min.y=-aa.min.y+y,aa.max.x+=
z,aa.max.y=-aa.max.y+y,1>E&&O.clearRect(aa.min.x|0,aa.min.y|0,aa.max.x-aa.min.x|0,aa.max.y-aa.min.y|0),0<E&&(k(THREE.NormalBlending),h(1),t("rgba("+Math.floor(255*J.r)+","+Math.floor(255*J.g)+","+Math.floor(255*J.b)+","+E+")"),O.fillRect(aa.min.x|0,aa.min.y|0,aa.max.x-aa.min.x|0,aa.max.y-aa.min.y|0)),aa.makeEmpty())};this.clearColor=function(){};this.clearDepth=function(){};this.clearStencil=function(){};this.render=function(a,x){if(!1===x instanceof THREE.Camera)console.error("THREE.CanvasRenderer.render: camera is not an instance of THREE.Camera.");
else{!0===this.autoClear&&this.clear();v.info.render.vertices=0;v.info.render.faces=0;O.setTransform(ba/C,0,0,-P/I,K,I-N);O.translate(z,y);w=A.projectScene(a,x,this.sortObjects,this.sortElements);u=w.elements;D=w.lights;oa=x;Ja.getNormalMatrix(x.matrixWorldInverse);Da.setRGB(0,0,0);Qa.setRGB(0,0,0);cb.setRGB(0,0,0);for(var L=0,Q=D.length;L<Q;L++){var E=D[L],H=E.color;E instanceof THREE.AmbientLight?Da.add(H):E instanceof THREE.DirectionalLight?Qa.add(H):E instanceof THREE.PointLight&&cb.add(H)}L=
0;for(Q=u.length;L<Q;L++){var J=u[L],B=J.material;if(void 0!==B&&0!==B.opacity){ra.makeEmpty();if(J instanceof THREE.RenderableSprite){$=J;$.x*=z;$.y*=y;var E=$,R=J,H=B;h(H.opacity);k(H.blending);var ea=R.scale.x*z,R=R.scale.y*y,J=0.5*Math.sqrt(ea*ea+R*R);ra.min.set(E.x-J,E.y-J);ra.max.set(E.x+J,E.y+J);if(H instanceof THREE.SpriteMaterial){var da=H.map;if(null!==da&&void 0!==da.image){!1===da.hasEventListener("update",d)&&(0<da.image.width&&e(da),da.addEventListener("update",d));J=Ca[da.id];void 0!==
J?t(J):t("rgba( 0, 0, 0, 1 )");var S=da.image,J=S.width*da.offset.x,B=S.height*da.offset.y,V=S.width*da.repeat.x,da=S.height*da.repeat.y,S=ea/V,m=R/da;O.save();O.translate(E.x,E.y);0!==H.rotation&&O.rotate(H.rotation);O.translate(-ea/2,-R/2);O.scale(S,m);O.translate(-J,-B);O.fillRect(J,B,V,da)}else t(H.color.getStyle()),O.save(),O.translate(E.x,E.y),0!==H.rotation&&O.rotate(H.rotation),O.scale(ea,-R),O.fillRect(-0.5,-0.5,1,1);O.restore()}else H instanceof THREE.SpriteCanvasMaterial&&(r(H.color.getStyle()),
t(H.color.getStyle()),O.save(),O.translate(E.x,E.y),0!==H.rotation&&O.rotate(H.rotation),O.scale(ea,R),H.program(O),O.restore())}else if(J instanceof THREE.RenderableLine){if($=J.v1,X=J.v2,$.positionScreen.x*=z,$.positionScreen.y*=y,X.positionScreen.x*=z,X.positionScreen.y*=y,ra.setFromPoints([$.positionScreen,X.positionScreen]),!0===Ka.isIntersectionBox(ra))if(E=$,H=X,ea=J,R=B,h(R.opacity),k(R.blending),O.beginPath(),O.moveTo(E.positionScreen.x,E.positionScreen.y),O.lineTo(H.positionScreen.x,H.positionScreen.y),
R instanceof THREE.LineBasicMaterial){l(R.linewidth);n(R.linecap);q(R.linejoin);if(R.vertexColors!==THREE.VertexColors)r(R.color.getStyle());else if(J=ea.vertexColors[0].getStyle(),ea=ea.vertexColors[1].getStyle(),J===ea)r(J);else{try{var W=O.createLinearGradient(E.positionScreen.x,E.positionScreen.y,H.positionScreen.x,H.positionScreen.y);W.addColorStop(0,J);W.addColorStop(1,ea)}catch(xb){W=J}r(W)}O.stroke();ra.expandByScalar(2*R.linewidth)}else R instanceof THREE.LineDashedMaterial&&(l(R.linewidth),
n(R.linecap),q(R.linejoin),r(R.color.getStyle()),s([R.dashSize,R.gapSize]),O.stroke(),ra.expandByScalar(2*R.linewidth),s([]))}else if(J instanceof THREE.RenderableFace){$=J.v1;X=J.v2;T=J.v3;if(-1>$.positionScreen.z||1<$.positionScreen.z)continue;if(-1>X.positionScreen.z||1<X.positionScreen.z)continue;if(-1>T.positionScreen.z||1<T.positionScreen.z)continue;$.positionScreen.x*=z;$.positionScreen.y*=y;X.positionScreen.x*=z;X.positionScreen.y*=y;T.positionScreen.x*=z;T.positionScreen.y*=y;0<B.overdraw&&
(g($.positionScreen,X.positionScreen,B.overdraw),g(X.positionScreen,T.positionScreen,B.overdraw),g(T.positionScreen,$.positionScreen,B.overdraw));ra.setFromPoints([$.positionScreen,X.positionScreen,T.positionScreen]);if(!0===Ka.isIntersectionBox(ra)){H=$;ea=X;R=T;E=B;v.info.render.vertices+=3;v.info.render.faces++;h(E.opacity);k(E.blending);ya=H.positionScreen.x;Ea=H.positionScreen.y;Aa=ea.positionScreen.x;za=ea.positionScreen.y;Oa=R.positionScreen.x;Pa=R.positionScreen.y;var B=ya,V=Ea,da=Aa,S=za,
m=Oa,Ta=Pa;O.beginPath();O.moveTo(B,V);O.lineTo(da,S);O.lineTo(m,Ta);O.closePath();if((E instanceof THREE.MeshLambertMaterial||E instanceof THREE.MeshPhongMaterial)&&null===E.map){Ba.copy(E.color);Ya.copy(E.emissive);E.vertexColors===THREE.FaceColors&&Ba.multiply(J.color);G.copy(Da);xa.copy(H.positionWorld).add(ea.positionWorld).add(R.positionWorld).divideScalar(3);H=xa;ea=J.normalModel;R=G;J=0;for(B=D.length;J<B;J++)V=D[J],Za.copy(V.color),V instanceof THREE.DirectionalLight?(da=Ga.setFromMatrixPosition(V.matrixWorld).normalize(),
S=ea.dot(da),0>=S||(S*=V.intensity,R.add(Za.multiplyScalar(S)))):V instanceof THREE.PointLight&&(da=Ga.setFromMatrixPosition(V.matrixWorld),S=ea.dot(Ga.subVectors(da,H).normalize()),0>=S||(S*=0==V.distance?1:1-Math.min(H.distanceTo(da)/V.distance,1),0!=S&&(S*=V.intensity,R.add(Za.multiplyScalar(S)))));G.multiply(Ba).add(Ya);!0===E.wireframe?b(G,E.wireframeLinewidth,E.wireframeLinecap,E.wireframeLinejoin):c(G)}else E instanceof THREE.MeshBasicMaterial||E instanceof THREE.MeshLambertMaterial||E instanceof
THREE.MeshPhongMaterial?null!==E.map?E.map.mapping instanceof THREE.UVMapping&&(ca=J.uvs,f(ya,Ea,Aa,za,Oa,Pa,ca[0].x,ca[0].y,ca[1].x,ca[1].y,ca[2].x,ca[2].y,E.map)):null!==E.envMap?E.envMap.mapping instanceof THREE.SphericalReflectionMapping?(ma.copy(J.vertexNormalsModel[0]).applyMatrix3(Ja),la=0.5*ma.x+0.5,qa=0.5*ma.y+0.5,ma.copy(J.vertexNormalsModel[1]).applyMatrix3(Ja),ua=0.5*ma.x+0.5,ja=0.5*ma.y+0.5,ma.copy(J.vertexNormalsModel[2]).applyMatrix3(Ja),Fa=0.5*ma.x+0.5,va=0.5*ma.y+0.5,f(ya,Ea,Aa,za,
Oa,Pa,la,qa,ua,ja,Fa,va,E.envMap)):E.envMap.mapping instanceof THREE.SphericalRefractionMapping&&(ma.copy(J.vertexNormalsModel[0]).applyMatrix3(Ja),la=-0.5*ma.x+0.5,qa=-0.5*ma.y+0.5,ma.copy(J.vertexNormalsModel[1]).applyMatrix3(Ja),ua=-0.5*ma.x+0.5,ja=-0.5*ma.y+0.5,ma.copy(J.vertexNormalsModel[2]).applyMatrix3(Ja),Fa=-0.5*ma.x+0.5,va=-0.5*ma.y+0.5,f(ya,Ea,Aa,za,Oa,Pa,la,qa,ua,ja,Fa,va,E.envMap)):(G.copy(E.color),E.vertexColors===THREE.FaceColors&&G.multiply(J.color),!0===E.wireframe?b(G,E.wireframeLinewidth,
E.wireframeLinecap,E.wireframeLinejoin):c(G)):(E instanceof THREE.MeshDepthMaterial?G.r=G.g=G.b=1-p(H.positionScreen.z*H.positionScreen.w,oa.near,oa.far):E instanceof THREE.MeshNormalMaterial?(ma.copy(J.normalModel).applyMatrix3(Ja),G.setRGB(ma.x,ma.y,ma.z).multiplyScalar(0.5).addScalar(0.5)):G.setRGB(1,1,1),!0===E.wireframe?b(G,E.wireframeLinewidth,E.wireframeLinecap,E.wireframeLinejoin):c(G))}}aa.union(ra)}}O.setTransform(1,0,0,1,0,0)}}};THREE.ShaderChunk={};
THREE.ShaderChunk.alphatest_fragment="#ifdef ALPHATEST\n\n\tif ( gl_FragColor.a < ALPHATEST ) discard;\n\n#endif\n";THREE.ShaderChunk.lights_lambert_vertex="vLightFront = vec3( 0.0 );\n\n#ifdef DOUBLE_SIDED\n\n\tvLightBack = vec3( 0.0 );\n\n#endif\n\ntransformedNormal = normalize( transformedNormal );\n\n#if MAX_DIR_LIGHTS > 0\n\nfor( int i = 0; i < MAX_DIR_LIGHTS; i ++ ) {\n\n\tvec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );\n\tvec3 dirVector = normalize( lDirection.xyz );\n\n\tfloat dotProduct = dot( transformedNormal, dirVector );\n\tvec3 directionalLightWeighting = vec3( max( dotProduct, 0.0 ) );\n\n\t#ifdef DOUBLE_SIDED\n\n\t\tvec3 directionalLightWeightingBack = vec3( max( -dotProduct, 0.0 ) );\n\n\t\t#ifdef WRAP_AROUND\n\n\t\t\tvec3 directionalLightWeightingHalfBack = vec3( max( -0.5 * dotProduct + 0.5, 0.0 ) );\n\n\t\t#endif\n\n\t#endif\n\n\t#ifdef WRAP_AROUND\n\n\t\tvec3 directionalLightWeightingHalf = vec3( max( 0.5 * dotProduct + 0.5, 0.0 ) );\n\t\tdirectionalLightWeighting = mix( directionalLightWeighting, directionalLightWeightingHalf, wrapRGB );\n\n\t\t#ifdef DOUBLE_SIDED\n\n\t\t\tdirectionalLightWeightingBack = mix( directionalLightWeightingBack, directionalLightWeightingHalfBack, wrapRGB );\n\n\t\t#endif\n\n\t#endif\n\n\tvLightFront += directionalLightColor[ i ] * directionalLightWeighting;\n\n\t#ifdef DOUBLE_SIDED\n\n\t\tvLightBack += directionalLightColor[ i ] * directionalLightWeightingBack;\n\n\t#endif\n\n}\n\n#endif\n\n#if MAX_POINT_LIGHTS > 0\n\n\tfor( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\n\n\t\tvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\n\t\tvec3 lVector = lPosition.xyz - mvPosition.xyz;\n\n\t\tfloat lDistance = 1.0;\n\t\tif ( pointLightDistance[ i ] > 0.0 )\n\t\t\tlDistance = 1.0 - min( ( length( lVector ) / pointLightDistance[ i ] ), 1.0 );\n\n\t\tlVector = normalize( lVector );\n\t\tfloat dotProduct = dot( transformedNormal, lVector );\n\n\t\tvec3 pointLightWeighting = vec3( max( dotProduct, 0.0 ) );\n\n\t\t#ifdef DOUBLE_SIDED\n\n\t\t\tvec3 pointLightWeightingBack = vec3( max( -dotProduct, 0.0 ) );\n\n\t\t\t#ifdef WRAP_AROUND\n\n\t\t\t\tvec3 pointLightWeightingHalfBack = vec3( max( -0.5 * dotProduct + 0.5, 0.0 ) );\n\n\t\t\t#endif\n\n\t\t#endif\n\n\t\t#ifdef WRAP_AROUND\n\n\t\t\tvec3 pointLightWeightingHalf = vec3( max( 0.5 * dotProduct + 0.5, 0.0 ) );\n\t\t\tpointLightWeighting = mix( pointLightWeighting, pointLightWeightingHalf, wrapRGB );\n\n\t\t\t#ifdef DOUBLE_SIDED\n\n\t\t\t\tpointLightWeightingBack = mix( pointLightWeightingBack, pointLightWeightingHalfBack, wrapRGB );\n\n\t\t\t#endif\n\n\t\t#endif\n\n\t\tvLightFront += pointLightColor[ i ] * pointLightWeighting * lDistance;\n\n\t\t#ifdef DOUBLE_SIDED\n\n\t\t\tvLightBack += pointLightColor[ i ] * pointLightWeightingBack * lDistance;\n\n\t\t#endif\n\n\t}\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0\n\n\tfor( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {\n\n\t\tvec4 lPosition = viewMatrix * vec4( spotLightPosition[ i ], 1.0 );\n\t\tvec3 lVector = lPosition.xyz - mvPosition.xyz;\n\n\t\tfloat spotEffect = dot( spotLightDirection[ i ], normalize( spotLightPosition[ i ] - worldPosition.xyz ) );\n\n\t\tif ( spotEffect > spotLightAngleCos[ i ] ) {\n\n\t\t\tspotEffect = max( pow( max( spotEffect, 0.0 ), spotLightExponent[ i ] ), 0.0 );\n\n\t\t\tfloat lDistance = 1.0;\n\t\t\tif ( spotLightDistance[ i ] > 0.0 )\n\t\t\t\tlDistance = 1.0 - min( ( length( lVector ) / spotLightDistance[ i ] ), 1.0 );\n\n\t\t\tlVector = normalize( lVector );\n\n\t\t\tfloat dotProduct = dot( transformedNormal, lVector );\n\t\t\tvec3 spotLightWeighting = vec3( max( dotProduct, 0.0 ) );\n\n\t\t\t#ifdef DOUBLE_SIDED\n\n\t\t\t\tvec3 spotLightWeightingBack = vec3( max( -dotProduct, 0.0 ) );\n\n\t\t\t\t#ifdef WRAP_AROUND\n\n\t\t\t\t\tvec3 spotLightWeightingHalfBack = vec3( max( -0.5 * dotProduct + 0.5, 0.0 ) );\n\n\t\t\t\t#endif\n\n\t\t\t#endif\n\n\t\t\t#ifdef WRAP_AROUND\n\n\t\t\t\tvec3 spotLightWeightingHalf = vec3( max( 0.5 * dotProduct + 0.5, 0.0 ) );\n\t\t\t\tspotLightWeighting = mix( spotLightWeighting, spotLightWeightingHalf, wrapRGB );\n\n\t\t\t\t#ifdef DOUBLE_SIDED\n\n\t\t\t\t\tspotLightWeightingBack = mix( spotLightWeightingBack, spotLightWeightingHalfBack, wrapRGB );\n\n\t\t\t\t#endif\n\n\t\t\t#endif\n\n\t\t\tvLightFront += spotLightColor[ i ] * spotLightWeighting * lDistance * spotEffect;\n\n\t\t\t#ifdef DOUBLE_SIDED\n\n\t\t\t\tvLightBack += spotLightColor[ i ] * spotLightWeightingBack * lDistance * spotEffect;\n\n\t\t\t#endif\n\n\t\t}\n\n\t}\n\n#endif\n\n#if MAX_HEMI_LIGHTS > 0\n\n\tfor( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {\n\n\t\tvec4 lDirection = viewMatrix * vec4( hemisphereLightDirection[ i ], 0.0 );\n\t\tvec3 lVector = normalize( lDirection.xyz );\n\n\t\tfloat dotProduct = dot( transformedNormal, lVector );\n\n\t\tfloat hemiDiffuseWeight = 0.5 * dotProduct + 0.5;\n\t\tfloat hemiDiffuseWeightBack = -0.5 * dotProduct + 0.5;\n\n\t\tvLightFront += mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );\n\n\t\t#ifdef DOUBLE_SIDED\n\n\t\t\tvLightBack += mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeightBack );\n\n\t\t#endif\n\n\t}\n\n#endif\n\nvLightFront = vLightFront * diffuse + ambient * ambientLightColor + emissive;\n\n#ifdef DOUBLE_SIDED\n\n\tvLightBack = vLightBack * diffuse + ambient * ambientLightColor + emissive;\n\n#endif";
THREE.ShaderChunk.map_particle_pars_fragment="#ifdef USE_MAP\n\n\tuniform sampler2D map;\n\n#endif";THREE.ShaderChunk.default_vertex="vec4 mvPosition;\n\n#ifdef USE_SKINNING\n\n\tmvPosition = modelViewMatrix * skinned;\n\n#endif\n\n#if !defined( USE_SKINNING ) && defined( USE_MORPHTARGETS )\n\n\tmvPosition = modelViewMatrix * vec4( morphed, 1.0 );\n\n#endif\n\n#if !defined( USE_SKINNING ) && ! defined( USE_MORPHTARGETS )\n\n\tmvPosition = modelViewMatrix * vec4( position, 1.0 );\n\n#endif\n\ngl_Position = projectionMatrix * mvPosition;";
THREE.ShaderChunk.map_pars_fragment="#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP )\n\n\tvarying vec2 vUv;\n\n#endif\n\n#ifdef USE_MAP\n\n\tuniform sampler2D map;\n\n#endif";THREE.ShaderChunk.skinnormal_vertex="#ifdef USE_SKINNING\n\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;\n\n\t#ifdef USE_MORPHNORMALS\n\n\tvec4 skinnedNormal = skinMatrix * vec4( morphedNormal, 0.0 );\n\n\t#else\n\n\tvec4 skinnedNormal = skinMatrix * vec4( normal, 0.0 );\n\n\t#endif\n\n#endif\n";
THREE.ShaderChunk.logdepthbuf_pars_vertex="#ifdef USE_LOGDEPTHBUF\n\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\n\t\tvarying float vFragDepth;\n\n\t#endif\n\n\tuniform float logDepthBufFC;\n\n#endif";THREE.ShaderChunk.lightmap_pars_vertex="#ifdef USE_LIGHTMAP\n\n\tvarying vec2 vUv2;\n\n#endif";THREE.ShaderChunk.lights_phong_fragment="vec3 normal = normalize( vNormal );\nvec3 viewPosition = normalize( vViewPosition );\n\n#ifdef DOUBLE_SIDED\n\n\tnormal = normal * ( -1.0 + 2.0 * float( gl_FrontFacing ) );\n\n#endif\n\n#ifdef USE_NORMALMAP\n\n\tnormal = perturbNormal2Arb( -vViewPosition, normal );\n\n#elif defined( USE_BUMPMAP )\n\n\tnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n\n#endif\n\n#if MAX_POINT_LIGHTS > 0\n\n\tvec3 pointDiffuse = vec3( 0.0 );\n\tvec3 pointSpecular = vec3( 0.0 );\n\n\tfor ( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\n\n\t\tvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\n\t\tvec3 lVector = lPosition.xyz + vViewPosition.xyz;\n\n\t\tfloat lDistance = 1.0;\n\t\tif ( pointLightDistance[ i ] > 0.0 )\n\t\t\tlDistance = 1.0 - min( ( length( lVector ) / pointLightDistance[ i ] ), 1.0 );\n\n\t\tlVector = normalize( lVector );\n\n\t\t\t\t// diffuse\n\n\t\tfloat dotProduct = dot( normal, lVector );\n\n\t\t#ifdef WRAP_AROUND\n\n\t\t\tfloat pointDiffuseWeightFull = max( dotProduct, 0.0 );\n\t\t\tfloat pointDiffuseWeightHalf = max( 0.5 * dotProduct + 0.5, 0.0 );\n\n\t\t\tvec3 pointDiffuseWeight = mix( vec3( pointDiffuseWeightFull ), vec3( pointDiffuseWeightHalf ), wrapRGB );\n\n\t\t#else\n\n\t\t\tfloat pointDiffuseWeight = max( dotProduct, 0.0 );\n\n\t\t#endif\n\n\t\tpointDiffuse += diffuse * pointLightColor[ i ] * pointDiffuseWeight * lDistance;\n\n\t\t\t\t// specular\n\n\t\tvec3 pointHalfVector = normalize( lVector + viewPosition );\n\t\tfloat pointDotNormalHalf = max( dot( normal, pointHalfVector ), 0.0 );\n\t\tfloat pointSpecularWeight = specularStrength * max( pow( pointDotNormalHalf, shininess ), 0.0 );\n\n\t\tfloat specularNormalization = ( shininess + 2.0 ) / 8.0;\n\n\t\tvec3 schlick = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( lVector, pointHalfVector ), 0.0 ), 5.0 );\n\t\tpointSpecular += schlick * pointLightColor[ i ] * pointSpecularWeight * pointDiffuseWeight * lDistance * specularNormalization;\n\n\t}\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0\n\n\tvec3 spotDiffuse = vec3( 0.0 );\n\tvec3 spotSpecular = vec3( 0.0 );\n\n\tfor ( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {\n\n\t\tvec4 lPosition = viewMatrix * vec4( spotLightPosition[ i ], 1.0 );\n\t\tvec3 lVector = lPosition.xyz + vViewPosition.xyz;\n\n\t\tfloat lDistance = 1.0;\n\t\tif ( spotLightDistance[ i ] > 0.0 )\n\t\t\tlDistance = 1.0 - min( ( length( lVector ) / spotLightDistance[ i ] ), 1.0 );\n\n\t\tlVector = normalize( lVector );\n\n\t\tfloat spotEffect = dot( spotLightDirection[ i ], normalize( spotLightPosition[ i ] - vWorldPosition ) );\n\n\t\tif ( spotEffect > spotLightAngleCos[ i ] ) {\n\n\t\t\tspotEffect = max( pow( max( spotEffect, 0.0 ), spotLightExponent[ i ] ), 0.0 );\n\n\t\t\t\t\t// diffuse\n\n\t\t\tfloat dotProduct = dot( normal, lVector );\n\n\t\t\t#ifdef WRAP_AROUND\n\n\t\t\t\tfloat spotDiffuseWeightFull = max( dotProduct, 0.0 );\n\t\t\t\tfloat spotDiffuseWeightHalf = max( 0.5 * dotProduct + 0.5, 0.0 );\n\n\t\t\t\tvec3 spotDiffuseWeight = mix( vec3( spotDiffuseWeightFull ), vec3( spotDiffuseWeightHalf ), wrapRGB );\n\n\t\t\t#else\n\n\t\t\t\tfloat spotDiffuseWeight = max( dotProduct, 0.0 );\n\n\t\t\t#endif\n\n\t\t\tspotDiffuse += diffuse * spotLightColor[ i ] * spotDiffuseWeight * lDistance * spotEffect;\n\n\t\t\t\t\t// specular\n\n\t\t\tvec3 spotHalfVector = normalize( lVector + viewPosition );\n\t\t\tfloat spotDotNormalHalf = max( dot( normal, spotHalfVector ), 0.0 );\n\t\t\tfloat spotSpecularWeight = specularStrength * max( pow( spotDotNormalHalf, shininess ), 0.0 );\n\n\t\t\tfloat specularNormalization = ( shininess + 2.0 ) / 8.0;\n\n\t\t\tvec3 schlick = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( lVector, spotHalfVector ), 0.0 ), 5.0 );\n\t\t\tspotSpecular += schlick * spotLightColor[ i ] * spotSpecularWeight * spotDiffuseWeight * lDistance * specularNormalization * spotEffect;\n\n\t\t}\n\n\t}\n\n#endif\n\n#if MAX_DIR_LIGHTS > 0\n\n\tvec3 dirDiffuse = vec3( 0.0 );\n\tvec3 dirSpecular = vec3( 0.0 );\n\n\tfor( int i = 0; i < MAX_DIR_LIGHTS; i ++ ) {\n\n\t\tvec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );\n\t\tvec3 dirVector = normalize( lDirection.xyz );\n\n\t\t\t\t// diffuse\n\n\t\tfloat dotProduct = dot( normal, dirVector );\n\n\t\t#ifdef WRAP_AROUND\n\n\t\t\tfloat dirDiffuseWeightFull = max( dotProduct, 0.0 );\n\t\t\tfloat dirDiffuseWeightHalf = max( 0.5 * dotProduct + 0.5, 0.0 );\n\n\t\t\tvec3 dirDiffuseWeight = mix( vec3( dirDiffuseWeightFull ), vec3( dirDiffuseWeightHalf ), wrapRGB );\n\n\t\t#else\n\n\t\t\tfloat dirDiffuseWeight = max( dotProduct, 0.0 );\n\n\t\t#endif\n\n\t\tdirDiffuse += diffuse * directionalLightColor[ i ] * dirDiffuseWeight;\n\n\t\t// specular\n\n\t\tvec3 dirHalfVector = normalize( dirVector + viewPosition );\n\t\tfloat dirDotNormalHalf = max( dot( normal, dirHalfVector ), 0.0 );\n\t\tfloat dirSpecularWeight = specularStrength * max( pow( dirDotNormalHalf, shininess ), 0.0 );\n\n\t\t/*\n\t\t// fresnel term from skin shader\n\t\tconst float F0 = 0.128;\n\n\t\tfloat base = 1.0 - dot( viewPosition, dirHalfVector );\n\t\tfloat exponential = pow( base, 5.0 );\n\n\t\tfloat fresnel = exponential + F0 * ( 1.0 - exponential );\n\t\t*/\n\n\t\t/*\n\t\t// fresnel term from fresnel shader\n\t\tconst float mFresnelBias = 0.08;\n\t\tconst float mFresnelScale = 0.3;\n\t\tconst float mFresnelPower = 5.0;\n\n\t\tfloat fresnel = mFresnelBias + mFresnelScale * pow( 1.0 + dot( normalize( -viewPosition ), normal ), mFresnelPower );\n\t\t*/\n\n\t\tfloat specularNormalization = ( shininess + 2.0 ) / 8.0;\n\n\t\t// \t\tdirSpecular += specular * directionalLightColor[ i ] * dirSpecularWeight * dirDiffuseWeight * specularNormalization * fresnel;\n\n\t\tvec3 schlick = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( dirVector, dirHalfVector ), 0.0 ), 5.0 );\n\t\tdirSpecular += schlick * directionalLightColor[ i ] * dirSpecularWeight * dirDiffuseWeight * specularNormalization;\n\n\n\t}\n\n#endif\n\n#if MAX_HEMI_LIGHTS > 0\n\n\tvec3 hemiDiffuse = vec3( 0.0 );\n\tvec3 hemiSpecular = vec3( 0.0 );\n\n\tfor( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {\n\n\t\tvec4 lDirection = viewMatrix * vec4( hemisphereLightDirection[ i ], 0.0 );\n\t\tvec3 lVector = normalize( lDirection.xyz );\n\n\t\t// diffuse\n\n\t\tfloat dotProduct = dot( normal, lVector );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotProduct + 0.5;\n\n\t\tvec3 hemiColor = mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );\n\n\t\themiDiffuse += diffuse * hemiColor;\n\n\t\t// specular (sky light)\n\n\t\tvec3 hemiHalfVectorSky = normalize( lVector + viewPosition );\n\t\tfloat hemiDotNormalHalfSky = 0.5 * dot( normal, hemiHalfVectorSky ) + 0.5;\n\t\tfloat hemiSpecularWeightSky = specularStrength * max( pow( max( hemiDotNormalHalfSky, 0.0 ), shininess ), 0.0 );\n\n\t\t// specular (ground light)\n\n\t\tvec3 lVectorGround = -lVector;\n\n\t\tvec3 hemiHalfVectorGround = normalize( lVectorGround + viewPosition );\n\t\tfloat hemiDotNormalHalfGround = 0.5 * dot( normal, hemiHalfVectorGround ) + 0.5;\n\t\tfloat hemiSpecularWeightGround = specularStrength * max( pow( max( hemiDotNormalHalfGround, 0.0 ), shininess ), 0.0 );\n\n\t\tfloat dotProductGround = dot( normal, lVectorGround );\n\n\t\tfloat specularNormalization = ( shininess + 2.0 ) / 8.0;\n\n\t\tvec3 schlickSky = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( lVector, hemiHalfVectorSky ), 0.0 ), 5.0 );\n\t\tvec3 schlickGround = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( lVectorGround, hemiHalfVectorGround ), 0.0 ), 5.0 );\n\t\themiSpecular += hemiColor * specularNormalization * ( schlickSky * hemiSpecularWeightSky * max( dotProduct, 0.0 ) + schlickGround * hemiSpecularWeightGround * max( dotProductGround, 0.0 ) );\n\n\t}\n\n#endif\n\nvec3 totalDiffuse = vec3( 0.0 );\nvec3 totalSpecular = vec3( 0.0 );\n\n#if MAX_DIR_LIGHTS > 0\n\n\ttotalDiffuse += dirDiffuse;\n\ttotalSpecular += dirSpecular;\n\n#endif\n\n#if MAX_HEMI_LIGHTS > 0\n\n\ttotalDiffuse += hemiDiffuse;\n\ttotalSpecular += hemiSpecular;\n\n#endif\n\n#if MAX_POINT_LIGHTS > 0\n\n\ttotalDiffuse += pointDiffuse;\n\ttotalSpecular += pointSpecular;\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0\n\n\ttotalDiffuse += spotDiffuse;\n\ttotalSpecular += spotSpecular;\n\n#endif\n\n#ifdef METAL\n\n\tgl_FragColor.xyz = gl_FragColor.xyz * ( emissive + totalDiffuse + ambientLightColor * ambient + totalSpecular );\n\n#else\n\n\tgl_FragColor.xyz = gl_FragColor.xyz * ( emissive + totalDiffuse + ambientLightColor * ambient ) + totalSpecular;\n\n#endif";
THREE.ShaderChunk.fog_pars_fragment="#ifdef USE_FOG\n\n\tuniform vec3 fogColor;\n\n\t#ifdef FOG_EXP2\n\n\t\tuniform float fogDensity;\n\n\t#else\n\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n\n#endif";THREE.ShaderChunk.morphnormal_vertex="#ifdef USE_MORPHNORMALS\n\n\tvec3 morphedNormal = vec3( 0.0 );\n\n\tmorphedNormal += ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];\n\tmorphedNormal += ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];\n\tmorphedNormal += ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];\n\tmorphedNormal += ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];\n\n\tmorphedNormal += normal;\n\n#endif";
THREE.ShaderChunk.envmap_pars_fragment="#ifdef USE_ENVMAP\n\n\tuniform float reflectivity;\n\tuniform samplerCube envMap;\n\tuniform float flipEnvMap;\n\tuniform int combine;\n\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )\n\n\t\tuniform bool useRefract;\n\t\tuniform float refractionRatio;\n\n\t#else\n\n\t\tvarying vec3 vReflect;\n\n\t#endif\n\n#endif";THREE.ShaderChunk.logdepthbuf_fragment="#if defined(USE_LOGDEPTHBUF) && defined(USE_LOGDEPTHBUF_EXT)\n\n\tgl_FragDepthEXT = log2(vFragDepth) * logDepthBufFC * 0.5;\n\n#endif";
THREE.ShaderChunk.normalmap_pars_fragment="#ifdef USE_NORMALMAP\n\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n\n\t\t\t// Per-Pixel Tangent Space Normal Mapping\n\t\t\t// http://hacksoflife.blogspot.ch/2009/11/per-pixel-tangent-space-normal-mapping.html\n\n\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm ) {\n\n\t\tvec3 q0 = dFdx( eye_pos.xyz );\n\t\tvec3 q1 = dFdy( eye_pos.xyz );\n\t\tvec2 st0 = dFdx( vUv.st );\n\t\tvec2 st1 = dFdy( vUv.st );\n\n\t\tvec3 S = normalize( q0 * st1.t - q1 * st0.t );\n\t\tvec3 T = normalize( -q0 * st1.s + q1 * st0.s );\n\t\tvec3 N = normalize( surf_norm );\n\n\t\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t\tmapN.xy = normalScale * mapN.xy;\n\t\tmat3 tsn = mat3( S, T, N );\n\t\treturn normalize( tsn * mapN );\n\n\t}\n\n#endif\n";
THREE.ShaderChunk.lights_phong_pars_vertex="#if MAX_SPOT_LIGHTS > 0 || defined( USE_BUMPMAP ) || defined( USE_ENVMAP )\n\n\tvarying vec3 vWorldPosition;\n\n#endif\n";THREE.ShaderChunk.lightmap_pars_fragment="#ifdef USE_LIGHTMAP\n\n\tvarying vec2 vUv2;\n\tuniform sampler2D lightMap;\n\n#endif";THREE.ShaderChunk.shadowmap_vertex="#ifdef USE_SHADOWMAP\n\n\tfor( int i = 0; i < MAX_SHADOWS; i ++ ) {\n\n\t\tvShadowCoord[ i ] = shadowMatrix[ i ] * worldPosition;\n\n\t}\n\n#endif";
THREE.ShaderChunk.lights_phong_vertex="#if MAX_SPOT_LIGHTS > 0 || defined( USE_BUMPMAP ) || defined( USE_ENVMAP )\n\n\tvWorldPosition = worldPosition.xyz;\n\n#endif";THREE.ShaderChunk.map_fragment="#ifdef USE_MAP\n\n\tvec4 texelColor = texture2D( map, vUv );\n\n\t#ifdef GAMMA_INPUT\n\n\t\ttexelColor.xyz *= texelColor.xyz;\n\n\t#endif\n\n\tgl_FragColor = gl_FragColor * texelColor;\n\n#endif";THREE.ShaderChunk.lightmap_vertex="#ifdef USE_LIGHTMAP\n\n\tvUv2 = uv2;\n\n#endif";
THREE.ShaderChunk.map_particle_fragment="#ifdef USE_MAP\n\n\tgl_FragColor = gl_FragColor * texture2D( map, vec2( gl_PointCoord.x, 1.0 - gl_PointCoord.y ) );\n\n#endif";THREE.ShaderChunk.color_pars_fragment="#ifdef USE_COLOR\n\n\tvarying vec3 vColor;\n\n#endif\n";THREE.ShaderChunk.color_vertex="#ifdef USE_COLOR\n\n\t#ifdef GAMMA_INPUT\n\n\t\tvColor = color * color;\n\n\t#else\n\n\t\tvColor = color;\n\n\t#endif\n\n#endif";THREE.ShaderChunk.skinning_vertex="#ifdef USE_SKINNING\n\n\t#ifdef USE_MORPHTARGETS\n\n\tvec4 skinVertex = bindMatrix * vec4( morphed, 1.0 );\n\n\t#else\n\n\tvec4 skinVertex = bindMatrix * vec4( position, 1.0 );\n\n\t#endif\n\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\tskinned  = bindMatrixInverse * skinned;\n\n#endif\n";
THREE.ShaderChunk.envmap_pars_vertex="#if defined( USE_ENVMAP ) && ! defined( USE_BUMPMAP ) && ! defined( USE_NORMALMAP )\n\n\tvarying vec3 vReflect;\n\n\tuniform float refractionRatio;\n\tuniform bool useRefract;\n\n#endif\n";THREE.ShaderChunk.linear_to_gamma_fragment="#ifdef GAMMA_OUTPUT\n\n\tgl_FragColor.xyz = sqrt( gl_FragColor.xyz );\n\n#endif";THREE.ShaderChunk.color_pars_vertex="#ifdef USE_COLOR\n\n\tvarying vec3 vColor;\n\n#endif";THREE.ShaderChunk.lights_lambert_pars_vertex="uniform vec3 ambient;\nuniform vec3 diffuse;\nuniform vec3 emissive;\n\nuniform vec3 ambientLightColor;\n\n#if MAX_DIR_LIGHTS > 0\n\n\tuniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\n\tuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\n\n#endif\n\n#if MAX_HEMI_LIGHTS > 0\n\n\tuniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];\n\tuniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];\n\tuniform vec3 hemisphereLightDirection[ MAX_HEMI_LIGHTS ];\n\n#endif\n\n#if MAX_POINT_LIGHTS > 0\n\n\tuniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\n\tuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\n\tuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0\n\n\tuniform vec3 spotLightColor[ MAX_SPOT_LIGHTS ];\n\tuniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];\n\tuniform vec3 spotLightDirection[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightDistance[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightAngleCos[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightExponent[ MAX_SPOT_LIGHTS ];\n\n#endif\n\n#ifdef WRAP_AROUND\n\n\tuniform vec3 wrapRGB;\n\n#endif\n";
THREE.ShaderChunk.map_pars_vertex="#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP )\n\n\tvarying vec2 vUv;\n\tuniform vec4 offsetRepeat;\n\n#endif\n";THREE.ShaderChunk.envmap_fragment="#ifdef USE_ENVMAP\n\n\tvec3 reflectVec;\n\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )\n\n\t\tvec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\n\n\t\t// http://en.wikibooks.org/wiki/GLSL_Programming/Applying_Matrix_Transformations\n\t\t// Transforming Normal Vectors with the Inverse Transformation\n\n\t\tvec3 worldNormal = normalize( vec3( vec4( normal, 0.0 ) * viewMatrix ) );\n\n\t\tif ( useRefract ) {\n\n\t\t\treflectVec = refract( cameraToVertex, worldNormal, refractionRatio );\n\n\t\t} else { \n\n\t\t\treflectVec = reflect( cameraToVertex, worldNormal );\n\n\t\t}\n\n\t#else\n\n\t\treflectVec = vReflect;\n\n\t#endif\n\n\t#ifdef DOUBLE_SIDED\n\n\t\tfloat flipNormal = ( -1.0 + 2.0 * float( gl_FrontFacing ) );\n\t\tvec4 cubeColor = textureCube( envMap, flipNormal * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\n\t#else\n\n\t\tvec4 cubeColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\n\t#endif\n\n\t#ifdef GAMMA_INPUT\n\n\t\tcubeColor.xyz *= cubeColor.xyz;\n\n\t#endif\n\n\tif ( combine == 1 ) {\n\n\t\tgl_FragColor.xyz = mix( gl_FragColor.xyz, cubeColor.xyz, specularStrength * reflectivity );\n\n\t} else if ( combine == 2 ) {\n\n\t\tgl_FragColor.xyz += cubeColor.xyz * specularStrength * reflectivity;\n\n\t} else {\n\n\t\tgl_FragColor.xyz = mix( gl_FragColor.xyz, gl_FragColor.xyz * cubeColor.xyz, specularStrength * reflectivity );\n\n\t}\n\n#endif";
THREE.ShaderChunk.specularmap_pars_fragment="#ifdef USE_SPECULARMAP\n\n\tuniform sampler2D specularMap;\n\n#endif";THREE.ShaderChunk.logdepthbuf_vertex="#ifdef USE_LOGDEPTHBUF\n\n\tgl_Position.z = log2(max(1e-6, gl_Position.w + 1.0)) * logDepthBufFC;\n\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\n#else\n\n\t\tgl_Position.z = (gl_Position.z - 1.0) * gl_Position.w;\n\n\t#endif\n\n#endif";THREE.ShaderChunk.morphtarget_pars_vertex="#ifdef USE_MORPHTARGETS\n\n\t#ifndef USE_MORPHNORMALS\n\n\tuniform float morphTargetInfluences[ 8 ];\n\n\t#else\n\n\tuniform float morphTargetInfluences[ 4 ];\n\n\t#endif\n\n#endif";
THREE.ShaderChunk.specularmap_fragment="float specularStrength;\n\n#ifdef USE_SPECULARMAP\n\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n\n#else\n\n\tspecularStrength = 1.0;\n\n#endif";THREE.ShaderChunk.fog_fragment="#ifdef USE_FOG\n\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\n\t\tfloat depth = gl_FragDepthEXT / gl_FragCoord.w;\n\n\t#else\n\n\t\tfloat depth = gl_FragCoord.z / gl_FragCoord.w;\n\n\t#endif\n\n\t#ifdef FOG_EXP2\n\n\t\tconst float LOG2 = 1.442695;\n\t\tfloat fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );\n\t\tfogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );\n\n\t#else\n\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, depth );\n\n\t#endif\n\t\n\tgl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\n\n#endif";
THREE.ShaderChunk.bumpmap_pars_fragment="#ifdef USE_BUMPMAP\n\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\n\t\t\t// Derivative maps - bump mapping unparametrized surfaces by Morten Mikkelsen\n\t\t\t//\thttp://mmikkelsen3d.blogspot.sk/2011/07/derivative-maps.html\n\n\t\t\t// Evaluate the derivative of the height w.r.t. screen-space using forward differencing (listing 2)\n\n\tvec2 dHdxy_fwd() {\n\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\n\t\treturn vec2( dBx, dBy );\n\n\t}\n\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\n\n\t\tvec3 vSigmaX = dFdx( surf_pos );\n\t\tvec3 vSigmaY = dFdy( surf_pos );\n\t\tvec3 vN = surf_norm;\t\t// normalized\n\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\n\t\tfloat fDet = dot( vSigmaX, R1 );\n\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\n\t}\n\n#endif";
THREE.ShaderChunk.defaultnormal_vertex="vec3 objectNormal;\n\n#ifdef USE_SKINNING\n\n\tobjectNormal = skinnedNormal.xyz;\n\n#endif\n\n#if !defined( USE_SKINNING ) && defined( USE_MORPHNORMALS )\n\n\tobjectNormal = morphedNormal;\n\n#endif\n\n#if !defined( USE_SKINNING ) && ! defined( USE_MORPHNORMALS )\n\n\tobjectNormal = normal;\n\n#endif\n\n#ifdef FLIP_SIDED\n\n\tobjectNormal = -objectNormal;\n\n#endif\n\nvec3 transformedNormal = normalMatrix * objectNormal;";
THREE.ShaderChunk.lights_phong_pars_fragment="uniform vec3 ambientLightColor;\n\n#if MAX_DIR_LIGHTS > 0\n\n\tuniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\n\tuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\n\n#endif\n\n#if MAX_HEMI_LIGHTS > 0\n\n\tuniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];\n\tuniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];\n\tuniform vec3 hemisphereLightDirection[ MAX_HEMI_LIGHTS ];\n\n#endif\n\n#if MAX_POINT_LIGHTS > 0\n\n\tuniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\n\n\tuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\n\tuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0\n\n\tuniform vec3 spotLightColor[ MAX_SPOT_LIGHTS ];\n\tuniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];\n\tuniform vec3 spotLightDirection[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightAngleCos[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightExponent[ MAX_SPOT_LIGHTS ];\n\n\tuniform float spotLightDistance[ MAX_SPOT_LIGHTS ];\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0 || defined( USE_BUMPMAP ) || defined( USE_ENVMAP )\n\n\tvarying vec3 vWorldPosition;\n\n#endif\n\n#ifdef WRAP_AROUND\n\n\tuniform vec3 wrapRGB;\n\n#endif\n\nvarying vec3 vViewPosition;\nvarying vec3 vNormal;";
THREE.ShaderChunk.skinbase_vertex="#ifdef USE_SKINNING\n\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n\n#endif";THREE.ShaderChunk.map_vertex="#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP )\n\n\tvUv = uv * offsetRepeat.zw + offsetRepeat.xy;\n\n#endif";
THREE.ShaderChunk.lightmap_fragment="#ifdef USE_LIGHTMAP\n\n\tgl_FragColor = gl_FragColor * texture2D( lightMap, vUv2 );\n\n#endif";THREE.ShaderChunk.shadowmap_pars_vertex="#ifdef USE_SHADOWMAP\n\n\tvarying vec4 vShadowCoord[ MAX_SHADOWS ];\n\tuniform mat4 shadowMatrix[ MAX_SHADOWS ];\n\n#endif";THREE.ShaderChunk.color_fragment="#ifdef USE_COLOR\n\n\tgl_FragColor = gl_FragColor * vec4( vColor, 1.0 );\n\n#endif";THREE.ShaderChunk.morphtarget_vertex="#ifdef USE_MORPHTARGETS\n\n\tvec3 morphed = vec3( 0.0 );\n\tmorphed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];\n\tmorphed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];\n\tmorphed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];\n\tmorphed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];\n\n\t#ifndef USE_MORPHNORMALS\n\n\tmorphed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];\n\tmorphed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];\n\tmorphed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];\n\tmorphed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];\n\n\t#endif\n\n\tmorphed += position;\n\n#endif";
THREE.ShaderChunk.envmap_vertex="#if defined( USE_ENVMAP ) && ! defined( USE_BUMPMAP ) && ! defined( USE_NORMALMAP )\n\n\tvec3 worldNormal = mat3( modelMatrix[ 0 ].xyz, modelMatrix[ 1 ].xyz, modelMatrix[ 2 ].xyz ) * objectNormal;\n\tworldNormal = normalize( worldNormal );\n\n\tvec3 cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\n\tif ( useRefract ) {\n\n\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\n\t} else {\n\n\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\n\t}\n\n#endif";
THREE.ShaderChunk.shadowmap_fragment="#ifdef USE_SHADOWMAP\n\n\t#ifdef SHADOWMAP_DEBUG\n\n\t\tvec3 frustumColors[3];\n\t\tfrustumColors[0] = vec3( 1.0, 0.5, 0.0 );\n\t\tfrustumColors[1] = vec3( 0.0, 1.0, 0.8 );\n\t\tfrustumColors[2] = vec3( 0.0, 0.5, 1.0 );\n\n\t#endif\n\n\t#ifdef SHADOWMAP_CASCADE\n\n\t\tint inFrustumCount = 0;\n\n\t#endif\n\n\tfloat fDepth;\n\tvec3 shadowColor = vec3( 1.0 );\n\n\tfor( int i = 0; i < MAX_SHADOWS; i ++ ) {\n\n\t\tvec3 shadowCoord = vShadowCoord[ i ].xyz / vShadowCoord[ i ].w;\n\n\t\t\t\t// if ( something && something ) breaks ATI OpenGL shader compiler\n\t\t\t\t// if ( all( something, something ) ) using this instead\n\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\n\t\t\t\t// don't shadow pixels outside of light frustum\n\t\t\t\t// use just first frustum (for cascades)\n\t\t\t\t// don't shadow pixels behind far plane of light frustum\n\n\t\t#ifdef SHADOWMAP_CASCADE\n\n\t\t\tinFrustumCount += int( inFrustum );\n\t\t\tbvec3 frustumTestVec = bvec3( inFrustum, inFrustumCount == 1, shadowCoord.z <= 1.0 );\n\n\t\t#else\n\n\t\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\n\t\t#endif\n\n\t\tbool frustumTest = all( frustumTestVec );\n\n\t\tif ( frustumTest ) {\n\n\t\t\tshadowCoord.z += shadowBias[ i ];\n\n\t\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\n\t\t\t\t\t\t// Percentage-close filtering\n\t\t\t\t\t\t// (9 pixel kernel)\n\t\t\t\t\t\t// http://fabiensanglard.net/shadowmappingPCF/\n\n\t\t\t\tfloat shadow = 0.0;\n\n\t\t/*\n\t\t\t\t\t\t// nested loops breaks shader compiler / validator on some ATI cards when using OpenGL\n\t\t\t\t\t\t// must enroll loop manually\n\n\t\t\t\tfor ( float y = -1.25; y <= 1.25; y += 1.25 )\n\t\t\t\t\tfor ( float x = -1.25; x <= 1.25; x += 1.25 ) {\n\n\t\t\t\t\t\tvec4 rgbaDepth = texture2D( shadowMap[ i ], vec2( x * xPixelOffset, y * yPixelOffset ) + shadowCoord.xy );\n\n\t\t\t\t\t\t\t\t// doesn't seem to produce any noticeable visual difference compared to simple texture2D lookup\n\t\t\t\t\t\t\t\t//vec4 rgbaDepth = texture2DProj( shadowMap[ i ], vec4( vShadowCoord[ i ].w * ( vec2( x * xPixelOffset, y * yPixelOffset ) + shadowCoord.xy ), 0.05, vShadowCoord[ i ].w ) );\n\n\t\t\t\t\t\tfloat fDepth = unpackDepth( rgbaDepth );\n\n\t\t\t\t\t\tif ( fDepth < shadowCoord.z )\n\t\t\t\t\t\t\tshadow += 1.0;\n\n\t\t\t\t}\n\n\t\t\t\tshadow /= 9.0;\n\n\t\t*/\n\n\t\t\t\tconst float shadowDelta = 1.0 / 9.0;\n\n\t\t\t\tfloat xPixelOffset = 1.0 / shadowMapSize[ i ].x;\n\t\t\t\tfloat yPixelOffset = 1.0 / shadowMapSize[ i ].y;\n\n\t\t\t\tfloat dx0 = -1.25 * xPixelOffset;\n\t\t\t\tfloat dy0 = -1.25 * yPixelOffset;\n\t\t\t\tfloat dx1 = 1.25 * xPixelOffset;\n\t\t\t\tfloat dy1 = 1.25 * yPixelOffset;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy0 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy0 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy0 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, 0.0 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, 0.0 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy1 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy1 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tfDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy1 ) ) );\n\t\t\t\tif ( fDepth < shadowCoord.z ) shadow += shadowDelta;\n\n\t\t\t\tshadowColor = shadowColor * vec3( ( 1.0 - shadowDarkness[ i ] * shadow ) );\n\n\t\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\n\t\t\t\t\t\t// Percentage-close filtering\n\t\t\t\t\t\t// (9 pixel kernel)\n\t\t\t\t\t\t// http://fabiensanglard.net/shadowmappingPCF/\n\n\t\t\t\tfloat shadow = 0.0;\n\n\t\t\t\tfloat xPixelOffset = 1.0 / shadowMapSize[ i ].x;\n\t\t\t\tfloat yPixelOffset = 1.0 / shadowMapSize[ i ].y;\n\n\t\t\t\tfloat dx0 = -1.0 * xPixelOffset;\n\t\t\t\tfloat dy0 = -1.0 * yPixelOffset;\n\t\t\t\tfloat dx1 = 1.0 * xPixelOffset;\n\t\t\t\tfloat dy1 = 1.0 * yPixelOffset;\n\n\t\t\t\tmat3 shadowKernel;\n\t\t\t\tmat3 depthKernel;\n\n\t\t\t\tdepthKernel[0][0] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy0 ) ) );\n\t\t\t\tdepthKernel[0][1] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, 0.0 ) ) );\n\t\t\t\tdepthKernel[0][2] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy1 ) ) );\n\t\t\t\tdepthKernel[1][0] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy0 ) ) );\n\t\t\t\tdepthKernel[1][1] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy ) );\n\t\t\t\tdepthKernel[1][2] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy1 ) ) );\n\t\t\t\tdepthKernel[2][0] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy0 ) ) );\n\t\t\t\tdepthKernel[2][1] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, 0.0 ) ) );\n\t\t\t\tdepthKernel[2][2] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy1 ) ) );\n\n\t\t\t\tvec3 shadowZ = vec3( shadowCoord.z );\n\t\t\t\tshadowKernel[0] = vec3(lessThan(depthKernel[0], shadowZ ));\n\t\t\t\tshadowKernel[0] *= vec3(0.25);\n\n\t\t\t\tshadowKernel[1] = vec3(lessThan(depthKernel[1], shadowZ ));\n\t\t\t\tshadowKernel[1] *= vec3(0.25);\n\n\t\t\t\tshadowKernel[2] = vec3(lessThan(depthKernel[2], shadowZ ));\n\t\t\t\tshadowKernel[2] *= vec3(0.25);\n\n\t\t\t\tvec2 fractionalCoord = 1.0 - fract( shadowCoord.xy * shadowMapSize[i].xy );\n\n\t\t\t\tshadowKernel[0] = mix( shadowKernel[1], shadowKernel[0], fractionalCoord.x );\n\t\t\t\tshadowKernel[1] = mix( shadowKernel[2], shadowKernel[1], fractionalCoord.x );\n\n\t\t\t\tvec4 shadowValues;\n\t\t\t\tshadowValues.x = mix( shadowKernel[0][1], shadowKernel[0][0], fractionalCoord.y );\n\t\t\t\tshadowValues.y = mix( shadowKernel[0][2], shadowKernel[0][1], fractionalCoord.y );\n\t\t\t\tshadowValues.z = mix( shadowKernel[1][1], shadowKernel[1][0], fractionalCoord.y );\n\t\t\t\tshadowValues.w = mix( shadowKernel[1][2], shadowKernel[1][1], fractionalCoord.y );\n\n\t\t\t\tshadow = dot( shadowValues, vec4( 1.0 ) );\n\n\t\t\t\tshadowColor = shadowColor * vec3( ( 1.0 - shadowDarkness[ i ] * shadow ) );\n\n\t\t\t#else\n\n\t\t\t\tvec4 rgbaDepth = texture2D( shadowMap[ i ], shadowCoord.xy );\n\t\t\t\tfloat fDepth = unpackDepth( rgbaDepth );\n\n\t\t\t\tif ( fDepth < shadowCoord.z )\n\n\t\t// spot with multiple shadows is darker\n\n\t\t\t\t\tshadowColor = shadowColor * vec3( 1.0 - shadowDarkness[ i ] );\n\n\t\t// spot with multiple shadows has the same color as single shadow spot\n\n\t\t// \t\t\t\t\tshadowColor = min( shadowColor, vec3( shadowDarkness[ i ] ) );\n\n\t\t\t#endif\n\n\t\t}\n\n\n\t\t#ifdef SHADOWMAP_DEBUG\n\n\t\t\t#ifdef SHADOWMAP_CASCADE\n\n\t\t\t\tif ( inFrustum && inFrustumCount == 1 ) gl_FragColor.xyz *= frustumColors[ i ];\n\n\t\t\t#else\n\n\t\t\t\tif ( inFrustum ) gl_FragColor.xyz *= frustumColors[ i ];\n\n\t\t\t#endif\n\n\t\t#endif\n\n\t}\n\n\t#ifdef GAMMA_OUTPUT\n\n\t\tshadowColor *= shadowColor;\n\n\t#endif\n\n\tgl_FragColor.xyz = gl_FragColor.xyz * shadowColor;\n\n#endif\n";
THREE.ShaderChunk.worldpos_vertex="#if defined( USE_ENVMAP ) || defined( PHONG ) || defined( LAMBERT ) || defined ( USE_SHADOWMAP )\n\n\t#ifdef USE_SKINNING\n\n\t\tvec4 worldPosition = modelMatrix * skinned;\n\n\t#endif\n\n\t#if defined( USE_MORPHTARGETS ) && ! defined( USE_SKINNING )\n\n\t\tvec4 worldPosition = modelMatrix * vec4( morphed, 1.0 );\n\n\t#endif\n\n\t#if ! defined( USE_MORPHTARGETS ) && ! defined( USE_SKINNING )\n\n\t\tvec4 worldPosition = modelMatrix * vec4( position, 1.0 );\n\n\t#endif\n\n#endif";
THREE.ShaderChunk.shadowmap_pars_fragment="#ifdef USE_SHADOWMAP\n\n\tuniform sampler2D shadowMap[ MAX_SHADOWS ];\n\tuniform vec2 shadowMapSize[ MAX_SHADOWS ];\n\n\tuniform float shadowDarkness[ MAX_SHADOWS ];\n\tuniform float shadowBias[ MAX_SHADOWS ];\n\n\tvarying vec4 vShadowCoord[ MAX_SHADOWS ];\n\n\tfloat unpackDepth( const in vec4 rgba_depth ) {\n\n\t\tconst vec4 bit_shift = vec4( 1.0 / ( 256.0 * 256.0 * 256.0 ), 1.0 / ( 256.0 * 256.0 ), 1.0 / 256.0, 1.0 );\n\t\tfloat depth = dot( rgba_depth, bit_shift );\n\t\treturn depth;\n\n\t}\n\n#endif";
THREE.ShaderChunk.skinning_pars_vertex="#ifdef USE_SKINNING\n\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\n\t#ifdef BONE_TEXTURE\n\n\t\tuniform sampler2D boneTexture;\n\t\tuniform int boneTextureWidth;\n\t\tuniform int boneTextureHeight;\n\n\t\tmat4 getBoneMatrix( const in float i ) {\n\n\t\t\tfloat j = i * 4.0;\n\t\t\tfloat x = mod( j, float( boneTextureWidth ) );\n\t\t\tfloat y = floor( j / float( boneTextureWidth ) );\n\n\t\t\tfloat dx = 1.0 / float( boneTextureWidth );\n\t\t\tfloat dy = 1.0 / float( boneTextureHeight );\n\n\t\t\ty = dy * ( y + 0.5 );\n\n\t\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\n\t\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\n\t\t\treturn bone;\n\n\t\t}\n\n\t#else\n\n\t\tuniform mat4 boneGlobalMatrices[ MAX_BONES ];\n\n\t\tmat4 getBoneMatrix( const in float i ) {\n\n\t\t\tmat4 bone = boneGlobalMatrices[ int(i) ];\n\t\t\treturn bone;\n\n\t\t}\n\n\t#endif\n\n#endif\n";
THREE.ShaderChunk.logdepthbuf_pars_fragment="#ifdef USE_LOGDEPTHBUF\n\n\tuniform float logDepthBufFC;\n\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\n\t\t#extension GL_EXT_frag_depth : enable\n\t\tvarying float vFragDepth;\n\n\t#endif\n\n#endif";THREE.ShaderChunk.alphamap_fragment="#ifdef USE_ALPHAMAP\n\n\tgl_FragColor.a *= texture2D( alphaMap, vUv ).g;\n\n#endif\n";THREE.ShaderChunk.alphamap_pars_fragment="#ifdef USE_ALPHAMAP\n\n\tuniform sampler2D alphaMap;\n\n#endif\n";
THREE.UniformsUtils={merge:function(a){var b,c,d,e={};for(b=0;b<a.length;b++)for(c in d=this.clone(a[b]),d)e[c]=d[c];return e},clone:function(a){var b,c,d,e={};for(b in a)for(c in e[b]={},a[b])d=a[b][c],e[b][c]=d instanceof THREE.Color||d instanceof THREE.Vector2||d instanceof THREE.Vector3||d instanceof THREE.Vector4||d instanceof THREE.Matrix4||d instanceof THREE.Texture?d.clone():d instanceof Array?d.slice():d;return e}};
THREE.UniformsLib={common:{diffuse:{type:"c",value:new THREE.Color(15658734)},opacity:{type:"f",value:1},map:{type:"t",value:null},offsetRepeat:{type:"v4",value:new THREE.Vector4(0,0,1,1)},lightMap:{type:"t",value:null},specularMap:{type:"t",value:null},alphaMap:{type:"t",value:null},envMap:{type:"t",value:null},flipEnvMap:{type:"f",value:-1},useRefract:{type:"i",value:0},reflectivity:{type:"f",value:1},refractionRatio:{type:"f",value:0.98},combine:{type:"i",value:0},morphTargetInfluences:{type:"f",
value:0}},bump:{bumpMap:{type:"t",value:null},bumpScale:{type:"f",value:1}},normalmap:{normalMap:{type:"t",value:null},normalScale:{type:"v2",value:new THREE.Vector2(1,1)}},fog:{fogDensity:{type:"f",value:2.5E-4},fogNear:{type:"f",value:1},fogFar:{type:"f",value:2E3},fogColor:{type:"c",value:new THREE.Color(16777215)}},lights:{ambientLightColor:{type:"fv",value:[]},directionalLightDirection:{type:"fv",value:[]},directionalLightColor:{type:"fv",value:[]},hemisphereLightDirection:{type:"fv",value:[]},
hemisphereLightSkyColor:{type:"fv",value:[]},hemisphereLightGroundColor:{type:"fv",value:[]},pointLightColor:{type:"fv",value:[]},pointLightPosition:{type:"fv",value:[]},pointLightDistance:{type:"fv1",value:[]},spotLightColor:{type:"fv",value:[]},spotLightPosition:{type:"fv",value:[]},spotLightDirection:{type:"fv",value:[]},spotLightDistance:{type:"fv1",value:[]},spotLightAngleCos:{type:"fv1",value:[]},spotLightExponent:{type:"fv1",value:[]}},particle:{psColor:{type:"c",value:new THREE.Color(15658734)},
opacity:{type:"f",value:1},size:{type:"f",value:1},scale:{type:"f",value:1},map:{type:"t",value:null},fogDensity:{type:"f",value:2.5E-4},fogNear:{type:"f",value:1},fogFar:{type:"f",value:2E3},fogColor:{type:"c",value:new THREE.Color(16777215)}},shadowmap:{shadowMap:{type:"tv",value:[]},shadowMapSize:{type:"v2v",value:[]},shadowBias:{type:"fv1",value:[]},shadowDarkness:{type:"fv1",value:[]},shadowMatrix:{type:"m4v",value:[]}}};
THREE.ShaderLib={basic:{uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.common,THREE.UniformsLib.fog,THREE.UniformsLib.shadowmap]),vertexShader:[THREE.ShaderChunk.map_pars_vertex,THREE.ShaderChunk.lightmap_pars_vertex,THREE.ShaderChunk.envmap_pars_vertex,THREE.ShaderChunk.color_pars_vertex,THREE.ShaderChunk.morphtarget_pars_vertex,THREE.ShaderChunk.skinning_pars_vertex,THREE.ShaderChunk.shadowmap_pars_vertex,THREE.ShaderChunk.logdepthbuf_pars_vertex,"void main() {",THREE.ShaderChunk.map_vertex,
THREE.ShaderChunk.lightmap_vertex,THREE.ShaderChunk.color_vertex,THREE.ShaderChunk.skinbase_vertex,"\t#ifdef USE_ENVMAP",THREE.ShaderChunk.morphnormal_vertex,THREE.ShaderChunk.skinnormal_vertex,THREE.ShaderChunk.defaultnormal_vertex,"\t#endif",THREE.ShaderChunk.morphtarget_vertex,THREE.ShaderChunk.skinning_vertex,THREE.ShaderChunk.default_vertex,THREE.ShaderChunk.logdepthbuf_vertex,THREE.ShaderChunk.worldpos_vertex,THREE.ShaderChunk.envmap_vertex,THREE.ShaderChunk.shadowmap_vertex,"}"].join("\n"),
fragmentShader:["uniform vec3 diffuse;\nuniform float opacity;",THREE.ShaderChunk.color_pars_fragment,THREE.ShaderChunk.map_pars_fragment,THREE.ShaderChunk.alphamap_pars_fragment,THREE.ShaderChunk.lightmap_pars_fragment,THREE.ShaderChunk.envmap_pars_fragment,THREE.ShaderChunk.fog_pars_fragment,THREE.ShaderChunk.shadowmap_pars_fragment,THREE.ShaderChunk.specularmap_pars_fragment,THREE.ShaderChunk.logdepthbuf_pars_fragment,"void main() {\n\tgl_FragColor = vec4( diffuse, opacity );",THREE.ShaderChunk.logdepthbuf_fragment,
THREE.ShaderChunk.map_fragment,THREE.ShaderChunk.alphamap_fragment,THREE.ShaderChunk.alphatest_fragment,THREE.ShaderChunk.specularmap_fragment,THREE.ShaderChunk.lightmap_fragment,THREE.ShaderChunk.color_fragment,THREE.ShaderChunk.envmap_fragment,THREE.ShaderChunk.shadowmap_fragment,THREE.ShaderChunk.linear_to_gamma_fragment,THREE.ShaderChunk.fog_fragment,"}"].join("\n")},lambert:{uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.common,THREE.UniformsLib.fog,THREE.UniformsLib.lights,THREE.UniformsLib.shadowmap,
{ambient:{type:"c",value:new THREE.Color(16777215)},emissive:{type:"c",value:new THREE.Color(0)},wrapRGB:{type:"v3",value:new THREE.Vector3(1,1,1)}}]),vertexShader:["#define LAMBERT\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n#endif",THREE.ShaderChunk.map_pars_vertex,THREE.ShaderChunk.lightmap_pars_vertex,THREE.ShaderChunk.envmap_pars_vertex,THREE.ShaderChunk.lights_lambert_pars_vertex,THREE.ShaderChunk.color_pars_vertex,THREE.ShaderChunk.morphtarget_pars_vertex,THREE.ShaderChunk.skinning_pars_vertex,
THREE.ShaderChunk.shadowmap_pars_vertex,THREE.ShaderChunk.logdepthbuf_pars_vertex,"void main() {",THREE.ShaderChunk.map_vertex,THREE.ShaderChunk.lightmap_vertex,THREE.ShaderChunk.color_vertex,THREE.ShaderChunk.morphnormal_vertex,THREE.ShaderChunk.skinbase_vertex,THREE.ShaderChunk.skinnormal_vertex,THREE.ShaderChunk.defaultnormal_vertex,THREE.ShaderChunk.morphtarget_vertex,THREE.ShaderChunk.skinning_vertex,THREE.ShaderChunk.default_vertex,THREE.ShaderChunk.logdepthbuf_vertex,THREE.ShaderChunk.worldpos_vertex,
THREE.ShaderChunk.envmap_vertex,THREE.ShaderChunk.lights_lambert_vertex,THREE.ShaderChunk.shadowmap_vertex,"}"].join("\n"),fragmentShader:["uniform float opacity;\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n#endif",THREE.ShaderChunk.color_pars_fragment,THREE.ShaderChunk.map_pars_fragment,THREE.ShaderChunk.alphamap_pars_fragment,THREE.ShaderChunk.lightmap_pars_fragment,THREE.ShaderChunk.envmap_pars_fragment,THREE.ShaderChunk.fog_pars_fragment,THREE.ShaderChunk.shadowmap_pars_fragment,
THREE.ShaderChunk.specularmap_pars_fragment,THREE.ShaderChunk.logdepthbuf_pars_fragment,"void main() {\n\tgl_FragColor = vec4( vec3( 1.0 ), opacity );",THREE.ShaderChunk.logdepthbuf_fragment,THREE.ShaderChunk.map_fragment,THREE.ShaderChunk.alphamap_fragment,THREE.ShaderChunk.alphatest_fragment,THREE.ShaderChunk.specularmap_fragment,"\t#ifdef DOUBLE_SIDED\n\t\tif ( gl_FrontFacing )\n\t\t\tgl_FragColor.xyz *= vLightFront;\n\t\telse\n\t\t\tgl_FragColor.xyz *= vLightBack;\n\t#else\n\t\tgl_FragColor.xyz *= vLightFront;\n\t#endif",
THREE.ShaderChunk.lightmap_fragment,THREE.ShaderChunk.color_fragment,THREE.ShaderChunk.envmap_fragment,THREE.ShaderChunk.shadowmap_fragment,THREE.ShaderChunk.linear_to_gamma_fragment,THREE.ShaderChunk.fog_fragment,"}"].join("\n")},phong:{uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.common,THREE.UniformsLib.bump,THREE.UniformsLib.normalmap,THREE.UniformsLib.fog,THREE.UniformsLib.lights,THREE.UniformsLib.shadowmap,{ambient:{type:"c",value:new THREE.Color(16777215)},emissive:{type:"c",value:new THREE.Color(0)},
specular:{type:"c",value:new THREE.Color(1118481)},shininess:{type:"f",value:30},wrapRGB:{type:"v3",value:new THREE.Vector3(1,1,1)}}]),vertexShader:["#define PHONG\nvarying vec3 vViewPosition;\nvarying vec3 vNormal;",THREE.ShaderChunk.map_pars_vertex,THREE.ShaderChunk.lightmap_pars_vertex,THREE.ShaderChunk.envmap_pars_vertex,THREE.ShaderChunk.lights_phong_pars_vertex,THREE.ShaderChunk.color_pars_vertex,THREE.ShaderChunk.morphtarget_pars_vertex,THREE.ShaderChunk.skinning_pars_vertex,THREE.ShaderChunk.shadowmap_pars_vertex,
THREE.ShaderChunk.logdepthbuf_pars_vertex,"void main() {",THREE.ShaderChunk.map_vertex,THREE.ShaderChunk.lightmap_vertex,THREE.ShaderChunk.color_vertex,THREE.ShaderChunk.morphnormal_vertex,THREE.ShaderChunk.skinbase_vertex,THREE.ShaderChunk.skinnormal_vertex,THREE.ShaderChunk.defaultnormal_vertex,"\tvNormal = normalize( transformedNormal );",THREE.ShaderChunk.morphtarget_vertex,THREE.ShaderChunk.skinning_vertex,THREE.ShaderChunk.default_vertex,THREE.ShaderChunk.logdepthbuf_vertex,"\tvViewPosition = -mvPosition.xyz;",
THREE.ShaderChunk.worldpos_vertex,THREE.ShaderChunk.envmap_vertex,THREE.ShaderChunk.lights_phong_vertex,THREE.ShaderChunk.shadowmap_vertex,"}"].join("\n"),fragmentShader:["uniform vec3 diffuse;\nuniform float opacity;\nuniform vec3 ambient;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;",THREE.ShaderChunk.color_pars_fragment,THREE.ShaderChunk.map_pars_fragment,THREE.ShaderChunk.alphamap_pars_fragment,THREE.ShaderChunk.lightmap_pars_fragment,THREE.ShaderChunk.envmap_pars_fragment,
THREE.ShaderChunk.fog_pars_fragment,THREE.ShaderChunk.lights_phong_pars_fragment,THREE.ShaderChunk.shadowmap_pars_fragment,THREE.ShaderChunk.bumpmap_pars_fragment,THREE.ShaderChunk.normalmap_pars_fragment,THREE.ShaderChunk.specularmap_pars_fragment,THREE.ShaderChunk.logdepthbuf_pars_fragment,"void main() {\n\tgl_FragColor = vec4( vec3( 1.0 ), opacity );",THREE.ShaderChunk.logdepthbuf_fragment,THREE.ShaderChunk.map_fragment,THREE.ShaderChunk.alphamap_fragment,THREE.ShaderChunk.alphatest_fragment,THREE.ShaderChunk.specularmap_fragment,
THREE.ShaderChunk.lights_phong_fragment,THREE.ShaderChunk.lightmap_fragment,THREE.ShaderChunk.color_fragment,THREE.ShaderChunk.envmap_fragment,THREE.ShaderChunk.shadowmap_fragment,THREE.ShaderChunk.linear_to_gamma_fragment,THREE.ShaderChunk.fog_fragment,"}"].join("\n")},particle_basic:{uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.particle,THREE.UniformsLib.shadowmap]),vertexShader:["uniform float size;\nuniform float scale;",THREE.ShaderChunk.color_pars_vertex,THREE.ShaderChunk.shadowmap_pars_vertex,
THREE.ShaderChunk.logdepthbuf_pars_vertex,"void main() {",THREE.ShaderChunk.color_vertex,"\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\t#ifdef USE_SIZEATTENUATION\n\t\tgl_PointSize = size * ( scale / length( mvPosition.xyz ) );\n\t#else\n\t\tgl_PointSize = size;\n\t#endif\n\tgl_Position = projectionMatrix * mvPosition;",THREE.ShaderChunk.logdepthbuf_vertex,THREE.ShaderChunk.worldpos_vertex,THREE.ShaderChunk.shadowmap_vertex,"}"].join("\n"),fragmentShader:["uniform vec3 psColor;\nuniform float opacity;",
THREE.ShaderChunk.color_pars_fragment,THREE.ShaderChunk.map_particle_pars_fragment,THREE.ShaderChunk.fog_pars_fragment,THREE.ShaderChunk.shadowmap_pars_fragment,THREE.ShaderChunk.logdepthbuf_pars_fragment,"void main() {\n\tgl_FragColor = vec4( psColor, opacity );",THREE.ShaderChunk.logdepthbuf_fragment,THREE.ShaderChunk.map_particle_fragment,THREE.ShaderChunk.alphatest_fragment,THREE.ShaderChunk.color_fragment,THREE.ShaderChunk.shadowmap_fragment,THREE.ShaderChunk.fog_fragment,"}"].join("\n")},dashed:{uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.common,
THREE.UniformsLib.fog,{scale:{type:"f",value:1},dashSize:{type:"f",value:1},totalSize:{type:"f",value:2}}]),vertexShader:["uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;",THREE.ShaderChunk.color_pars_vertex,THREE.ShaderChunk.logdepthbuf_pars_vertex,"void main() {",THREE.ShaderChunk.color_vertex,"\tvLineDistance = scale * lineDistance;\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\tgl_Position = projectionMatrix * mvPosition;",THREE.ShaderChunk.logdepthbuf_vertex,
"}"].join("\n"),fragmentShader:["uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;",THREE.ShaderChunk.color_pars_fragment,THREE.ShaderChunk.fog_pars_fragment,THREE.ShaderChunk.logdepthbuf_pars_fragment,"void main() {\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tgl_FragColor = vec4( diffuse, opacity );",THREE.ShaderChunk.logdepthbuf_fragment,THREE.ShaderChunk.color_fragment,THREE.ShaderChunk.fog_fragment,
"}"].join("\n")},depth:{uniforms:{mNear:{type:"f",value:1},mFar:{type:"f",value:2E3},opacity:{type:"f",value:1}},vertexShader:[THREE.ShaderChunk.morphtarget_pars_vertex,THREE.ShaderChunk.logdepthbuf_pars_vertex,"void main() {",THREE.ShaderChunk.morphtarget_vertex,THREE.ShaderChunk.default_vertex,THREE.ShaderChunk.logdepthbuf_vertex,"}"].join("\n"),fragmentShader:["uniform float mNear;\nuniform float mFar;\nuniform float opacity;",THREE.ShaderChunk.logdepthbuf_pars_fragment,"void main() {",THREE.ShaderChunk.logdepthbuf_fragment,
"\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tfloat depth = gl_FragDepthEXT / gl_FragCoord.w;\n\t#else\n\t\tfloat depth = gl_FragCoord.z / gl_FragCoord.w;\n\t#endif\n\tfloat color = 1.0 - smoothstep( mNear, mFar, depth );\n\tgl_FragColor = vec4( vec3( color ), opacity );\n}"].join("\n")},normal:{uniforms:{opacity:{type:"f",value:1}},vertexShader:["varying vec3 vNormal;",THREE.ShaderChunk.morphtarget_pars_vertex,THREE.ShaderChunk.logdepthbuf_pars_vertex,"void main() {\n\tvNormal = normalize( normalMatrix * normal );",
THREE.ShaderChunk.morphtarget_vertex,THREE.ShaderChunk.default_vertex,THREE.ShaderChunk.logdepthbuf_vertex,"}"].join("\n"),fragmentShader:["uniform float opacity;\nvarying vec3 vNormal;",THREE.ShaderChunk.logdepthbuf_pars_fragment,"void main() {\n\tgl_FragColor = vec4( 0.5 * normalize( vNormal ) + 0.5, opacity );",THREE.ShaderChunk.logdepthbuf_fragment,"}"].join("\n")},normalmap:{uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.fog,THREE.UniformsLib.lights,THREE.UniformsLib.shadowmap,{enableAO:{type:"i",
value:0},enableDiffuse:{type:"i",value:0},enableSpecular:{type:"i",value:0},enableReflection:{type:"i",value:0},enableDisplacement:{type:"i",value:0},tDisplacement:{type:"t",value:null},tDiffuse:{type:"t",value:null},tCube:{type:"t",value:null},tNormal:{type:"t",value:null},tSpecular:{type:"t",value:null},tAO:{type:"t",value:null},uNormalScale:{type:"v2",value:new THREE.Vector2(1,1)},uDisplacementBias:{type:"f",value:0},uDisplacementScale:{type:"f",value:1},diffuse:{type:"c",value:new THREE.Color(16777215)},
specular:{type:"c",value:new THREE.Color(1118481)},ambient:{type:"c",value:new THREE.Color(16777215)},shininess:{type:"f",value:30},opacity:{type:"f",value:1},useRefract:{type:"i",value:0},refractionRatio:{type:"f",value:0.98},reflectivity:{type:"f",value:0.5},uOffset:{type:"v2",value:new THREE.Vector2(0,0)},uRepeat:{type:"v2",value:new THREE.Vector2(1,1)},wrapRGB:{type:"v3",value:new THREE.Vector3(1,1,1)}}]),fragmentShader:["uniform vec3 ambient;\nuniform vec3 diffuse;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\nuniform bool enableDiffuse;\nuniform bool enableSpecular;\nuniform bool enableAO;\nuniform bool enableReflection;\nuniform sampler2D tDiffuse;\nuniform sampler2D tNormal;\nuniform sampler2D tSpecular;\nuniform sampler2D tAO;\nuniform samplerCube tCube;\nuniform vec2 uNormalScale;\nuniform bool useRefract;\nuniform float refractionRatio;\nuniform float reflectivity;\nvarying vec3 vTangent;\nvarying vec3 vBinormal;\nvarying vec3 vNormal;\nvarying vec2 vUv;\nuniform vec3 ambientLightColor;\n#if MAX_DIR_LIGHTS > 0\n\tuniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\n\tuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\n#endif\n#if MAX_HEMI_LIGHTS > 0\n\tuniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];\n\tuniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];\n\tuniform vec3 hemisphereLightDirection[ MAX_HEMI_LIGHTS ];\n#endif\n#if MAX_POINT_LIGHTS > 0\n\tuniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\n\tuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\n\tuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\n#endif\n#if MAX_SPOT_LIGHTS > 0\n\tuniform vec3 spotLightColor[ MAX_SPOT_LIGHTS ];\n\tuniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];\n\tuniform vec3 spotLightDirection[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightAngleCos[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightExponent[ MAX_SPOT_LIGHTS ];\n\tuniform float spotLightDistance[ MAX_SPOT_LIGHTS ];\n#endif\n#ifdef WRAP_AROUND\n\tuniform vec3 wrapRGB;\n#endif\nvarying vec3 vWorldPosition;\nvarying vec3 vViewPosition;",
THREE.ShaderChunk.shadowmap_pars_fragment,THREE.ShaderChunk.fog_pars_fragment,THREE.ShaderChunk.logdepthbuf_pars_fragment,"void main() {",THREE.ShaderChunk.logdepthbuf_fragment,"\tgl_FragColor = vec4( vec3( 1.0 ), opacity );\n\tvec3 specularTex = vec3( 1.0 );\n\tvec3 normalTex = texture2D( tNormal, vUv ).xyz * 2.0 - 1.0;\n\tnormalTex.xy *= uNormalScale;\n\tnormalTex = normalize( normalTex );\n\tif( enableDiffuse ) {\n\t\t#ifdef GAMMA_INPUT\n\t\t\tvec4 texelColor = texture2D( tDiffuse, vUv );\n\t\t\ttexelColor.xyz *= texelColor.xyz;\n\t\t\tgl_FragColor = gl_FragColor * texelColor;\n\t\t#else\n\t\t\tgl_FragColor = gl_FragColor * texture2D( tDiffuse, vUv );\n\t\t#endif\n\t}\n\tif( enableAO ) {\n\t\t#ifdef GAMMA_INPUT\n\t\t\tvec4 aoColor = texture2D( tAO, vUv );\n\t\t\taoColor.xyz *= aoColor.xyz;\n\t\t\tgl_FragColor.xyz = gl_FragColor.xyz * aoColor.xyz;\n\t\t#else\n\t\t\tgl_FragColor.xyz = gl_FragColor.xyz * texture2D( tAO, vUv ).xyz;\n\t\t#endif\n\t}",
THREE.ShaderChunk.alphatest_fragment,"\tif( enableSpecular )\n\t\tspecularTex = texture2D( tSpecular, vUv ).xyz;\n\tmat3 tsb = mat3( normalize( vTangent ), normalize( vBinormal ), normalize( vNormal ) );\n\tvec3 finalNormal = tsb * normalTex;\n\t#ifdef FLIP_SIDED\n\t\tfinalNormal = -finalNormal;\n\t#endif\n\tvec3 normal = normalize( finalNormal );\n\tvec3 viewPosition = normalize( vViewPosition );\n\t#if MAX_POINT_LIGHTS > 0\n\t\tvec3 pointDiffuse = vec3( 0.0 );\n\t\tvec3 pointSpecular = vec3( 0.0 );\n\t\tfor ( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\n\t\t\tvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\n\t\t\tvec3 pointVector = lPosition.xyz + vViewPosition.xyz;\n\t\t\tfloat pointDistance = 1.0;\n\t\t\tif ( pointLightDistance[ i ] > 0.0 )\n\t\t\t\tpointDistance = 1.0 - min( ( length( pointVector ) / pointLightDistance[ i ] ), 1.0 );\n\t\t\tpointVector = normalize( pointVector );\n\t\t\t#ifdef WRAP_AROUND\n\t\t\t\tfloat pointDiffuseWeightFull = max( dot( normal, pointVector ), 0.0 );\n\t\t\t\tfloat pointDiffuseWeightHalf = max( 0.5 * dot( normal, pointVector ) + 0.5, 0.0 );\n\t\t\t\tvec3 pointDiffuseWeight = mix( vec3( pointDiffuseWeightFull ), vec3( pointDiffuseWeightHalf ), wrapRGB );\n\t\t\t#else\n\t\t\t\tfloat pointDiffuseWeight = max( dot( normal, pointVector ), 0.0 );\n\t\t\t#endif\n\t\t\tpointDiffuse += pointDistance * pointLightColor[ i ] * diffuse * pointDiffuseWeight;\n\t\t\tvec3 pointHalfVector = normalize( pointVector + viewPosition );\n\t\t\tfloat pointDotNormalHalf = max( dot( normal, pointHalfVector ), 0.0 );\n\t\t\tfloat pointSpecularWeight = specularTex.r * max( pow( pointDotNormalHalf, shininess ), 0.0 );\n\t\t\tfloat specularNormalization = ( shininess + 2.0 ) / 8.0;\n\t\t\tvec3 schlick = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( pointVector, pointHalfVector ), 0.0 ), 5.0 );\n\t\t\tpointSpecular += schlick * pointLightColor[ i ] * pointSpecularWeight * pointDiffuseWeight * pointDistance * specularNormalization;\n\t\t}\n\t#endif\n\t#if MAX_SPOT_LIGHTS > 0\n\t\tvec3 spotDiffuse = vec3( 0.0 );\n\t\tvec3 spotSpecular = vec3( 0.0 );\n\t\tfor ( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {\n\t\t\tvec4 lPosition = viewMatrix * vec4( spotLightPosition[ i ], 1.0 );\n\t\t\tvec3 spotVector = lPosition.xyz + vViewPosition.xyz;\n\t\t\tfloat spotDistance = 1.0;\n\t\t\tif ( spotLightDistance[ i ] > 0.0 )\n\t\t\t\tspotDistance = 1.0 - min( ( length( spotVector ) / spotLightDistance[ i ] ), 1.0 );\n\t\t\tspotVector = normalize( spotVector );\n\t\t\tfloat spotEffect = dot( spotLightDirection[ i ], normalize( spotLightPosition[ i ] - vWorldPosition ) );\n\t\t\tif ( spotEffect > spotLightAngleCos[ i ] ) {\n\t\t\t\tspotEffect = max( pow( max( spotEffect, 0.0 ), spotLightExponent[ i ] ), 0.0 );\n\t\t\t\t#ifdef WRAP_AROUND\n\t\t\t\t\tfloat spotDiffuseWeightFull = max( dot( normal, spotVector ), 0.0 );\n\t\t\t\t\tfloat spotDiffuseWeightHalf = max( 0.5 * dot( normal, spotVector ) + 0.5, 0.0 );\n\t\t\t\t\tvec3 spotDiffuseWeight = mix( vec3( spotDiffuseWeightFull ), vec3( spotDiffuseWeightHalf ), wrapRGB );\n\t\t\t\t#else\n\t\t\t\t\tfloat spotDiffuseWeight = max( dot( normal, spotVector ), 0.0 );\n\t\t\t\t#endif\n\t\t\t\tspotDiffuse += spotDistance * spotLightColor[ i ] * diffuse * spotDiffuseWeight * spotEffect;\n\t\t\t\tvec3 spotHalfVector = normalize( spotVector + viewPosition );\n\t\t\t\tfloat spotDotNormalHalf = max( dot( normal, spotHalfVector ), 0.0 );\n\t\t\t\tfloat spotSpecularWeight = specularTex.r * max( pow( spotDotNormalHalf, shininess ), 0.0 );\n\t\t\t\tfloat specularNormalization = ( shininess + 2.0 ) / 8.0;\n\t\t\t\tvec3 schlick = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( spotVector, spotHalfVector ), 0.0 ), 5.0 );\n\t\t\t\tspotSpecular += schlick * spotLightColor[ i ] * spotSpecularWeight * spotDiffuseWeight * spotDistance * specularNormalization * spotEffect;\n\t\t\t}\n\t\t}\n\t#endif\n\t#if MAX_DIR_LIGHTS > 0\n\t\tvec3 dirDiffuse = vec3( 0.0 );\n\t\tvec3 dirSpecular = vec3( 0.0 );\n\t\tfor( int i = 0; i < MAX_DIR_LIGHTS; i++ ) {\n\t\t\tvec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );\n\t\t\tvec3 dirVector = normalize( lDirection.xyz );\n\t\t\t#ifdef WRAP_AROUND\n\t\t\t\tfloat directionalLightWeightingFull = max( dot( normal, dirVector ), 0.0 );\n\t\t\t\tfloat directionalLightWeightingHalf = max( 0.5 * dot( normal, dirVector ) + 0.5, 0.0 );\n\t\t\t\tvec3 dirDiffuseWeight = mix( vec3( directionalLightWeightingFull ), vec3( directionalLightWeightingHalf ), wrapRGB );\n\t\t\t#else\n\t\t\t\tfloat dirDiffuseWeight = max( dot( normal, dirVector ), 0.0 );\n\t\t\t#endif\n\t\t\tdirDiffuse += directionalLightColor[ i ] * diffuse * dirDiffuseWeight;\n\t\t\tvec3 dirHalfVector = normalize( dirVector + viewPosition );\n\t\t\tfloat dirDotNormalHalf = max( dot( normal, dirHalfVector ), 0.0 );\n\t\t\tfloat dirSpecularWeight = specularTex.r * max( pow( dirDotNormalHalf, shininess ), 0.0 );\n\t\t\tfloat specularNormalization = ( shininess + 2.0 ) / 8.0;\n\t\t\tvec3 schlick = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( dirVector, dirHalfVector ), 0.0 ), 5.0 );\n\t\t\tdirSpecular += schlick * directionalLightColor[ i ] * dirSpecularWeight * dirDiffuseWeight * specularNormalization;\n\t\t}\n\t#endif\n\t#if MAX_HEMI_LIGHTS > 0\n\t\tvec3 hemiDiffuse = vec3( 0.0 );\n\t\tvec3 hemiSpecular = vec3( 0.0 );\n\t\tfor( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {\n\t\t\tvec4 lDirection = viewMatrix * vec4( hemisphereLightDirection[ i ], 0.0 );\n\t\t\tvec3 lVector = normalize( lDirection.xyz );\n\t\t\tfloat dotProduct = dot( normal, lVector );\n\t\t\tfloat hemiDiffuseWeight = 0.5 * dotProduct + 0.5;\n\t\t\tvec3 hemiColor = mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );\n\t\t\themiDiffuse += diffuse * hemiColor;\n\t\t\tvec3 hemiHalfVectorSky = normalize( lVector + viewPosition );\n\t\t\tfloat hemiDotNormalHalfSky = 0.5 * dot( normal, hemiHalfVectorSky ) + 0.5;\n\t\t\tfloat hemiSpecularWeightSky = specularTex.r * max( pow( max( hemiDotNormalHalfSky, 0.0 ), shininess ), 0.0 );\n\t\t\tvec3 lVectorGround = -lVector;\n\t\t\tvec3 hemiHalfVectorGround = normalize( lVectorGround + viewPosition );\n\t\t\tfloat hemiDotNormalHalfGround = 0.5 * dot( normal, hemiHalfVectorGround ) + 0.5;\n\t\t\tfloat hemiSpecularWeightGround = specularTex.r * max( pow( max( hemiDotNormalHalfGround, 0.0 ), shininess ), 0.0 );\n\t\t\tfloat dotProductGround = dot( normal, lVectorGround );\n\t\t\tfloat specularNormalization = ( shininess + 2.0 ) / 8.0;\n\t\t\tvec3 schlickSky = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( lVector, hemiHalfVectorSky ), 0.0 ), 5.0 );\n\t\t\tvec3 schlickGround = specular + vec3( 1.0 - specular ) * pow( max( 1.0 - dot( lVectorGround, hemiHalfVectorGround ), 0.0 ), 5.0 );\n\t\t\themiSpecular += hemiColor * specularNormalization * ( schlickSky * hemiSpecularWeightSky * max( dotProduct, 0.0 ) + schlickGround * hemiSpecularWeightGround * max( dotProductGround, 0.0 ) );\n\t\t}\n\t#endif\n\tvec3 totalDiffuse = vec3( 0.0 );\n\tvec3 totalSpecular = vec3( 0.0 );\n\t#if MAX_DIR_LIGHTS > 0\n\t\ttotalDiffuse += dirDiffuse;\n\t\ttotalSpecular += dirSpecular;\n\t#endif\n\t#if MAX_HEMI_LIGHTS > 0\n\t\ttotalDiffuse += hemiDiffuse;\n\t\ttotalSpecular += hemiSpecular;\n\t#endif\n\t#if MAX_POINT_LIGHTS > 0\n\t\ttotalDiffuse += pointDiffuse;\n\t\ttotalSpecular += pointSpecular;\n\t#endif\n\t#if MAX_SPOT_LIGHTS > 0\n\t\ttotalDiffuse += spotDiffuse;\n\t\ttotalSpecular += spotSpecular;\n\t#endif\n\t#ifdef METAL\n\t\tgl_FragColor.xyz = gl_FragColor.xyz * ( totalDiffuse + ambientLightColor * ambient + totalSpecular );\n\t#else\n\t\tgl_FragColor.xyz = gl_FragColor.xyz * ( totalDiffuse + ambientLightColor * ambient ) + totalSpecular;\n\t#endif\n\tif ( enableReflection ) {\n\t\tvec3 vReflect;\n\t\tvec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\n\t\tif ( useRefract ) {\n\t\t\tvReflect = refract( cameraToVertex, normal, refractionRatio );\n\t\t} else {\n\t\t\tvReflect = reflect( cameraToVertex, normal );\n\t\t}\n\t\tvec4 cubeColor = textureCube( tCube, vec3( -vReflect.x, vReflect.yz ) );\n\t\t#ifdef GAMMA_INPUT\n\t\t\tcubeColor.xyz *= cubeColor.xyz;\n\t\t#endif\n\t\tgl_FragColor.xyz = mix( gl_FragColor.xyz, cubeColor.xyz, specularTex.r * reflectivity );\n\t}",
THREE.ShaderChunk.shadowmap_fragment,THREE.ShaderChunk.linear_to_gamma_fragment,THREE.ShaderChunk.fog_fragment,"}"].join("\n"),vertexShader:["attribute vec4 tangent;\nuniform vec2 uOffset;\nuniform vec2 uRepeat;\nuniform bool enableDisplacement;\n#ifdef VERTEX_TEXTURES\n\tuniform sampler2D tDisplacement;\n\tuniform float uDisplacementScale;\n\tuniform float uDisplacementBias;\n#endif\nvarying vec3 vTangent;\nvarying vec3 vBinormal;\nvarying vec3 vNormal;\nvarying vec2 vUv;\nvarying vec3 vWorldPosition;\nvarying vec3 vViewPosition;",
THREE.ShaderChunk.skinning_pars_vertex,THREE.ShaderChunk.shadowmap_pars_vertex,THREE.ShaderChunk.logdepthbuf_pars_vertex,"void main() {",THREE.ShaderChunk.skinbase_vertex,THREE.ShaderChunk.skinnormal_vertex,"\t#ifdef USE_SKINNING\n\t\tvNormal = normalize( normalMatrix * skinnedNormal.xyz );\n\t\tvec4 skinnedTangent = skinMatrix * vec4( tangent.xyz, 0.0 );\n\t\tvTangent = normalize( normalMatrix * skinnedTangent.xyz );\n\t#else\n\t\tvNormal = normalize( normalMatrix * normal );\n\t\tvTangent = normalize( normalMatrix * tangent.xyz );\n\t#endif\n\tvBinormal = normalize( cross( vNormal, vTangent ) * tangent.w );\n\tvUv = uv * uRepeat + uOffset;\n\tvec3 displacedPosition;\n\t#ifdef VERTEX_TEXTURES\n\t\tif ( enableDisplacement ) {\n\t\t\tvec3 dv = texture2D( tDisplacement, uv ).xyz;\n\t\t\tfloat df = uDisplacementScale * dv.x + uDisplacementBias;\n\t\t\tdisplacedPosition = position + normalize( normal ) * df;\n\t\t} else {\n\t\t\t#ifdef USE_SKINNING\n\t\t\t\tvec4 skinVertex = bindMatrix * vec4( position, 1.0 );\n\t\t\t\tvec4 skinned = vec4( 0.0 );\n\t\t\t\tskinned += boneMatX * skinVertex * skinWeight.x;\n\t\t\t\tskinned += boneMatY * skinVertex * skinWeight.y;\n\t\t\t\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\t\t\t\tskinned += boneMatW * skinVertex * skinWeight.w;\n\t\t\t\tskinned  = bindMatrixInverse * skinned;\n\t\t\t\tdisplacedPosition = skinned.xyz;\n\t\t\t#else\n\t\t\t\tdisplacedPosition = position;\n\t\t\t#endif\n\t\t}\n\t#else\n\t\t#ifdef USE_SKINNING\n\t\t\tvec4 skinVertex = bindMatrix * vec4( position, 1.0 );\n\t\t\tvec4 skinned = vec4( 0.0 );\n\t\t\tskinned += boneMatX * skinVertex * skinWeight.x;\n\t\t\tskinned += boneMatY * skinVertex * skinWeight.y;\n\t\t\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\t\t\tskinned += boneMatW * skinVertex * skinWeight.w;\n\t\t\tskinned  = bindMatrixInverse * skinned;\n\t\t\tdisplacedPosition = skinned.xyz;\n\t\t#else\n\t\t\tdisplacedPosition = position;\n\t\t#endif\n\t#endif\n\tvec4 mvPosition = modelViewMatrix * vec4( displacedPosition, 1.0 );\n\tvec4 worldPosition = modelMatrix * vec4( displacedPosition, 1.0 );\n\tgl_Position = projectionMatrix * mvPosition;",
THREE.ShaderChunk.logdepthbuf_vertex,"\tvWorldPosition = worldPosition.xyz;\n\tvViewPosition = -mvPosition.xyz;\n\t#ifdef USE_SHADOWMAP\n\t\tfor( int i = 0; i < MAX_SHADOWS; i ++ ) {\n\t\t\tvShadowCoord[ i ] = shadowMatrix[ i ] * worldPosition;\n\t\t}\n\t#endif\n}"].join("\n")},cube:{uniforms:{tCube:{type:"t",value:null},tFlip:{type:"f",value:-1}},vertexShader:["varying vec3 vWorldPosition;",THREE.ShaderChunk.logdepthbuf_pars_vertex,"void main() {\n\tvec4 worldPosition = modelMatrix * vec4( position, 1.0 );\n\tvWorldPosition = worldPosition.xyz;\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",
THREE.ShaderChunk.logdepthbuf_vertex,"}"].join("\n"),fragmentShader:["uniform samplerCube tCube;\nuniform float tFlip;\nvarying vec3 vWorldPosition;",THREE.ShaderChunk.logdepthbuf_pars_fragment,"void main() {\n\tgl_FragColor = textureCube( tCube, vec3( tFlip * vWorldPosition.x, vWorldPosition.yz ) );",THREE.ShaderChunk.logdepthbuf_fragment,"}"].join("\n")},depthRGBA:{uniforms:{},vertexShader:[THREE.ShaderChunk.morphtarget_pars_vertex,THREE.ShaderChunk.skinning_pars_vertex,THREE.ShaderChunk.logdepthbuf_pars_vertex,
"void main() {",THREE.ShaderChunk.skinbase_vertex,THREE.ShaderChunk.morphtarget_vertex,THREE.ShaderChunk.skinning_vertex,THREE.ShaderChunk.default_vertex,THREE.ShaderChunk.logdepthbuf_vertex,"}"].join("\n"),fragmentShader:[THREE.ShaderChunk.logdepthbuf_pars_fragment,"vec4 pack_depth( const in float depth ) {\n\tconst vec4 bit_shift = vec4( 256.0 * 256.0 * 256.0, 256.0 * 256.0, 256.0, 1.0 );\n\tconst vec4 bit_mask = vec4( 0.0, 1.0 / 256.0, 1.0 / 256.0, 1.0 / 256.0 );\n\tvec4 res = mod( depth * bit_shift * vec4( 255 ), vec4( 256 ) ) / vec4( 255 );\n\tres -= res.xxyz * bit_mask;\n\treturn res;\n}\nvoid main() {",
THREE.ShaderChunk.logdepthbuf_fragment,"\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tgl_FragData[ 0 ] = pack_depth( gl_FragDepthEXT );\n\t#else\n\t\tgl_FragData[ 0 ] = pack_depth( gl_FragCoord.z );\n\t#endif\n}"].join("\n")}};
THREE.WebGLRenderer=function(a){function b(a,b){var c=a.vertices.length,d=b.material;if(d.attributes){void 0===a.__webglCustomAttributesList&&(a.__webglCustomAttributesList=[]);for(var e in d.attributes){var f=d.attributes[e];if(!f.__webglInitialized||f.createUniqueBuffers){f.__webglInitialized=!0;var g=1;"v2"===f.type?g=2:"v3"===f.type?g=3:"v4"===f.type?g=4:"c"===f.type&&(g=3);f.size=g;f.array=new Float32Array(c*g);f.buffer=m.createBuffer();f.buffer.belongsToAttribute=e;f.needsUpdate=!0}a.__webglCustomAttributesList.push(f)}}}
function c(a,b){var c=b.geometry,g=a.faces3,h=3*g.length,k=1*g.length,l=3*g.length,g=d(b,a),n=f(g),r=e(g),p=g.vertexColors?g.vertexColors:!1;a.__vertexArray=new Float32Array(3*h);r&&(a.__normalArray=new Float32Array(3*h));c.hasTangents&&(a.__tangentArray=new Float32Array(4*h));p&&(a.__colorArray=new Float32Array(3*h));n&&(0<c.faceVertexUvs.length&&(a.__uvArray=new Float32Array(2*h)),1<c.faceVertexUvs.length&&(a.__uv2Array=new Float32Array(2*h)));b.geometry.skinWeights.length&&b.geometry.skinIndices.length&&
(a.__skinIndexArray=new Float32Array(4*h),a.__skinWeightArray=new Float32Array(4*h));c=null!==Eb&&21845<k?Uint32Array:Uint16Array;a.__typeArray=c;a.__faceArray=new c(3*k);a.__lineArray=new c(2*l);if(a.numMorphTargets)for(a.__morphTargetsArrays=[],c=0,n=a.numMorphTargets;c<n;c++)a.__morphTargetsArrays.push(new Float32Array(3*h));if(a.numMorphNormals)for(a.__morphNormalsArrays=[],c=0,n=a.numMorphNormals;c<n;c++)a.__morphNormalsArrays.push(new Float32Array(3*h));a.__webglFaceCount=3*k;a.__webglLineCount=
2*l;if(g.attributes){void 0===a.__webglCustomAttributesList&&(a.__webglCustomAttributesList=[]);for(var q in g.attributes){var k=g.attributes[q],l={},s;for(s in k)l[s]=k[s];if(!l.__webglInitialized||l.createUniqueBuffers)l.__webglInitialized=!0,c=1,"v2"===l.type?c=2:"v3"===l.type?c=3:"v4"===l.type?c=4:"c"===l.type&&(c=3),l.size=c,l.array=new Float32Array(h*c),l.buffer=m.createBuffer(),l.buffer.belongsToAttribute=q,k.needsUpdate=!0,l.__original=k;a.__webglCustomAttributesList.push(l)}}a.__inittedArrays=
!0}function d(a,b){return a.material instanceof THREE.MeshFaceMaterial?a.material.materials[b.materialIndex]:a.material}function e(a){return a instanceof THREE.MeshBasicMaterial&&!a.envMap||a instanceof THREE.MeshDepthMaterial?!1:a&&void 0!==a.shading&&a.shading===THREE.SmoothShading?THREE.SmoothShading:THREE.FlatShading}function f(a){return a.map||a.lightMap||a.bumpMap||a.normalMap||a.specularMap||a.alphaMap||a instanceof THREE.ShaderMaterial?!0:!1}function g(a){for(var b in a.attributes){var c=
"index"===b?m.ELEMENT_ARRAY_BUFFER:m.ARRAY_BUFFER,d=a.attributes[b];d.buffer=m.createBuffer();m.bindBuffer(c,d.buffer);m.bufferData(c,d.array,m.STATIC_DRAW)}}function h(a,b,c,d){for(var e in b){var f=b[e],g=c[e];if(0<=f)if(g){var h=g.itemSize;m.bindBuffer(m.ARRAY_BUFFER,g.buffer);l(f);m.vertexAttribPointer(f,h,m.FLOAT,!1,0,d*h*4)}else a.defaultAttributeValues&&(2===a.defaultAttributeValues[e].length?m.vertexAttrib2fv(f,a.defaultAttributeValues[e]):3===a.defaultAttributeValues[e].length&&m.vertexAttrib3fv(f,
a.defaultAttributeValues[e]))}n()}function k(){for(var a=0,b=pb.length;a<b;a++)pb[a]=0}function l(a){pb[a]=1;0===tb[a]&&(m.enableVertexAttribArray(a),tb[a]=1)}function n(){for(var a=0,b=tb.length;a<b;a++)tb[a]!==pb[a]&&(m.disableVertexAttribArray(a),tb[a]=0)}function q(a,b){return a.z!==b.z?b.z-a.z:a.id-b.id}function r(a,b){return a.z!==b.z?a.z-b.z:a.id-b.id}function t(a,b){return b[0]-a[0]}function s(a,b,h){if(!1!==b.visible){var k=a.__webglObjects[b.id];if(k&&(!1===b.frustumCulled||!0===jc.intersectsObject(b))){var l=
b.geometry,n,r,p;if(l instanceof THREE.BufferGeometry){var q=m.DYNAMIC_DRAW,w=l.attributes,u,v;for(u in w)v=w[u],v.needsUpdate&&("index"===u?(m.bindBuffer(m.ELEMENT_ARRAY_BUFFER,v.buffer),m.bufferData(m.ELEMENT_ARRAY_BUFFER,v.array,q)):(m.bindBuffer(m.ARRAY_BUFFER,v.buffer),m.bufferData(m.ARRAY_BUFFER,v.array,q)),v.needsUpdate=!1)}else if(b instanceof THREE.Mesh){if(l.buffersNeedUpdate||l.groupsNeedUpdate)l instanceof THREE.BufferGeometry?g(l):b instanceof THREE.Mesh&&D(a,b,l);for(var A=0,z=l.geometryGroupsList.length;A<
z;A++)if(n=l.geometryGroupsList[A],p=d(b,n),(l.buffersNeedUpdate||l.groupsNeedUpdate)&&c(n,b),r=p.attributes&&x(p),l.verticesNeedUpdate||l.morphTargetsNeedUpdate||l.elementsNeedUpdate||l.uvsNeedUpdate||l.normalsNeedUpdate||l.colorsNeedUpdate||l.tangentsNeedUpdate||r){var y=n,E=b,I=m.DYNAMIC_DRAW,J=!l.dynamic,L=p;if(y.__inittedArrays){var K=e(L),H=L.vertexColors?L.vertexColors:!1,Q=f(L),O=K===THREE.SmoothShading,B=void 0,N=void 0,P=void 0,T=void 0,R=void 0,ba=void 0,S=void 0,$=void 0,X=void 0,V=void 0,
za=void 0,ga=void 0,ha=void 0,ia=void 0,Ea=void 0,aa=void 0,da=void 0,ya=void 0,U=void 0,ca=void 0,W=void 0,Ba=void 0,Aa=void 0,la=void 0,ma=void 0,oa=void 0,ra=void 0,ua=void 0,va=void 0,ja=void 0,Fa=void 0,Da=void 0,Ga=void 0,Ya=void 0,qa=void 0,Ka=void 0,xa=void 0,Ca=void 0,Ja=void 0,Qa=void 0,db=0,eb=0,Sa=0,Za=0,Ta=0,gb=0,Ua=0,ub=0,$a=0,wa=0,Ha=0,M=0,Ra=void 0,hb=y.__vertexArray,cb=y.__uvArray,fb=y.__uv2Array,yb=y.__normalArray,Va=y.__tangentArray,ib=y.__colorArray,Wa=y.__skinIndexArray,Xa=y.__skinWeightArray,
tb=y.__morphTargetsArrays,wb=y.__morphNormalsArrays,sb=y.__webglCustomAttributesList,F=void 0,pb=y.__faceArray,zb=y.__lineArray,La=E.geometry,Db=La.elementsNeedUpdate,xb=La.uvsNeedUpdate,Eb=La.normalsNeedUpdate,Ob=La.tangentsNeedUpdate,Pb=La.colorsNeedUpdate,Sb=La.morphTargetsNeedUpdate,lc=La.vertices,ka=y.faces3,jb=La.faces,Hb=La.faceVertexUvs[0],Ib=La.faceVertexUvs[1],mc=La.skinIndices,Vb=La.skinWeights,Wb=La.morphTargets,Jb=La.morphNormals;if(La.verticesNeedUpdate){B=0;for(N=ka.length;B<N;B++)T=
jb[ka[B]],ga=lc[T.a],ha=lc[T.b],ia=lc[T.c],hb[eb]=ga.x,hb[eb+1]=ga.y,hb[eb+2]=ga.z,hb[eb+3]=ha.x,hb[eb+4]=ha.y,hb[eb+5]=ha.z,hb[eb+6]=ia.x,hb[eb+7]=ia.y,hb[eb+8]=ia.z,eb+=9;m.bindBuffer(m.ARRAY_BUFFER,y.__webglVertexBuffer);m.bufferData(m.ARRAY_BUFFER,hb,I)}if(Sb)for(qa=0,Ka=Wb.length;qa<Ka;qa++){B=Ha=0;for(N=ka.length;B<N;B++)Ja=ka[B],T=jb[Ja],ga=Wb[qa].vertices[T.a],ha=Wb[qa].vertices[T.b],ia=Wb[qa].vertices[T.c],xa=tb[qa],xa[Ha]=ga.x,xa[Ha+1]=ga.y,xa[Ha+2]=ga.z,xa[Ha+3]=ha.x,xa[Ha+4]=ha.y,xa[Ha+
5]=ha.z,xa[Ha+6]=ia.x,xa[Ha+7]=ia.y,xa[Ha+8]=ia.z,L.morphNormals&&(O?(Qa=Jb[qa].vertexNormals[Ja],ya=Qa.a,U=Qa.b,ca=Qa.c):ca=U=ya=Jb[qa].faceNormals[Ja],Ca=wb[qa],Ca[Ha]=ya.x,Ca[Ha+1]=ya.y,Ca[Ha+2]=ya.z,Ca[Ha+3]=U.x,Ca[Ha+4]=U.y,Ca[Ha+5]=U.z,Ca[Ha+6]=ca.x,Ca[Ha+7]=ca.y,Ca[Ha+8]=ca.z),Ha+=9;m.bindBuffer(m.ARRAY_BUFFER,y.__webglMorphTargetsBuffers[qa]);m.bufferData(m.ARRAY_BUFFER,tb[qa],I);L.morphNormals&&(m.bindBuffer(m.ARRAY_BUFFER,y.__webglMorphNormalsBuffers[qa]),m.bufferData(m.ARRAY_BUFFER,wb[qa],
I))}if(Vb.length){B=0;for(N=ka.length;B<N;B++)T=jb[ka[B]],la=Vb[T.a],ma=Vb[T.b],oa=Vb[T.c],Xa[wa]=la.x,Xa[wa+1]=la.y,Xa[wa+2]=la.z,Xa[wa+3]=la.w,Xa[wa+4]=ma.x,Xa[wa+5]=ma.y,Xa[wa+6]=ma.z,Xa[wa+7]=ma.w,Xa[wa+8]=oa.x,Xa[wa+9]=oa.y,Xa[wa+10]=oa.z,Xa[wa+11]=oa.w,ra=mc[T.a],ua=mc[T.b],va=mc[T.c],Wa[wa]=ra.x,Wa[wa+1]=ra.y,Wa[wa+2]=ra.z,Wa[wa+3]=ra.w,Wa[wa+4]=ua.x,Wa[wa+5]=ua.y,Wa[wa+6]=ua.z,Wa[wa+7]=ua.w,Wa[wa+8]=va.x,Wa[wa+9]=va.y,Wa[wa+10]=va.z,Wa[wa+11]=va.w,wa+=12;0<wa&&(m.bindBuffer(m.ARRAY_BUFFER,
y.__webglSkinIndicesBuffer),m.bufferData(m.ARRAY_BUFFER,Wa,I),m.bindBuffer(m.ARRAY_BUFFER,y.__webglSkinWeightsBuffer),m.bufferData(m.ARRAY_BUFFER,Xa,I))}if(Pb&&H){B=0;for(N=ka.length;B<N;B++)T=jb[ka[B]],S=T.vertexColors,$=T.color,3===S.length&&H===THREE.VertexColors?(W=S[0],Ba=S[1],Aa=S[2]):Aa=Ba=W=$,ib[$a]=W.r,ib[$a+1]=W.g,ib[$a+2]=W.b,ib[$a+3]=Ba.r,ib[$a+4]=Ba.g,ib[$a+5]=Ba.b,ib[$a+6]=Aa.r,ib[$a+7]=Aa.g,ib[$a+8]=Aa.b,$a+=9;0<$a&&(m.bindBuffer(m.ARRAY_BUFFER,y.__webglColorBuffer),m.bufferData(m.ARRAY_BUFFER,
ib,I))}if(Ob&&La.hasTangents){B=0;for(N=ka.length;B<N;B++)T=jb[ka[B]],X=T.vertexTangents,Ea=X[0],aa=X[1],da=X[2],Va[Ua]=Ea.x,Va[Ua+1]=Ea.y,Va[Ua+2]=Ea.z,Va[Ua+3]=Ea.w,Va[Ua+4]=aa.x,Va[Ua+5]=aa.y,Va[Ua+6]=aa.z,Va[Ua+7]=aa.w,Va[Ua+8]=da.x,Va[Ua+9]=da.y,Va[Ua+10]=da.z,Va[Ua+11]=da.w,Ua+=12;m.bindBuffer(m.ARRAY_BUFFER,y.__webglTangentBuffer);m.bufferData(m.ARRAY_BUFFER,Va,I)}if(Eb&&K){B=0;for(N=ka.length;B<N;B++)if(T=jb[ka[B]],R=T.vertexNormals,ba=T.normal,3===R.length&&O)for(ja=0;3>ja;ja++)Da=R[ja],
yb[gb]=Da.x,yb[gb+1]=Da.y,yb[gb+2]=Da.z,gb+=3;else for(ja=0;3>ja;ja++)yb[gb]=ba.x,yb[gb+1]=ba.y,yb[gb+2]=ba.z,gb+=3;m.bindBuffer(m.ARRAY_BUFFER,y.__webglNormalBuffer);m.bufferData(m.ARRAY_BUFFER,yb,I)}if(xb&&Hb&&Q){B=0;for(N=ka.length;B<N;B++)if(P=ka[B],V=Hb[P],void 0!==V)for(ja=0;3>ja;ja++)Ga=V[ja],cb[Sa]=Ga.x,cb[Sa+1]=Ga.y,Sa+=2;0<Sa&&(m.bindBuffer(m.ARRAY_BUFFER,y.__webglUVBuffer),m.bufferData(m.ARRAY_BUFFER,cb,I))}if(xb&&Ib&&Q){B=0;for(N=ka.length;B<N;B++)if(P=ka[B],za=Ib[P],void 0!==za)for(ja=
0;3>ja;ja++)Ya=za[ja],fb[Za]=Ya.x,fb[Za+1]=Ya.y,Za+=2;0<Za&&(m.bindBuffer(m.ARRAY_BUFFER,y.__webglUV2Buffer),m.bufferData(m.ARRAY_BUFFER,fb,I))}if(Db){B=0;for(N=ka.length;B<N;B++)pb[Ta]=db,pb[Ta+1]=db+1,pb[Ta+2]=db+2,Ta+=3,zb[ub]=db,zb[ub+1]=db+1,zb[ub+2]=db,zb[ub+3]=db+2,zb[ub+4]=db+1,zb[ub+5]=db+2,ub+=6,db+=3;m.bindBuffer(m.ELEMENT_ARRAY_BUFFER,y.__webglFaceBuffer);m.bufferData(m.ELEMENT_ARRAY_BUFFER,pb,I);m.bindBuffer(m.ELEMENT_ARRAY_BUFFER,y.__webglLineBuffer);m.bufferData(m.ELEMENT_ARRAY_BUFFER,
zb,I)}if(sb)for(ja=0,Fa=sb.length;ja<Fa;ja++)if(F=sb[ja],F.__original.needsUpdate){M=0;if(1===F.size)if(void 0===F.boundTo||"vertices"===F.boundTo)for(B=0,N=ka.length;B<N;B++)T=jb[ka[B]],F.array[M]=F.value[T.a],F.array[M+1]=F.value[T.b],F.array[M+2]=F.value[T.c],M+=3;else{if("faces"===F.boundTo)for(B=0,N=ka.length;B<N;B++)Ra=F.value[ka[B]],F.array[M]=Ra,F.array[M+1]=Ra,F.array[M+2]=Ra,M+=3}else if(2===F.size)if(void 0===F.boundTo||"vertices"===F.boundTo)for(B=0,N=ka.length;B<N;B++)T=jb[ka[B]],ga=
F.value[T.a],ha=F.value[T.b],ia=F.value[T.c],F.array[M]=ga.x,F.array[M+1]=ga.y,F.array[M+2]=ha.x,F.array[M+3]=ha.y,F.array[M+4]=ia.x,F.array[M+5]=ia.y,M+=6;else{if("faces"===F.boundTo)for(B=0,N=ka.length;B<N;B++)ia=ha=ga=Ra=F.value[ka[B]],F.array[M]=ga.x,F.array[M+1]=ga.y,F.array[M+2]=ha.x,F.array[M+3]=ha.y,F.array[M+4]=ia.x,F.array[M+5]=ia.y,M+=6}else if(3===F.size){var ta;ta="c"===F.type?["r","g","b"]:["x","y","z"];if(void 0===F.boundTo||"vertices"===F.boundTo)for(B=0,N=ka.length;B<N;B++)T=jb[ka[B]],
ga=F.value[T.a],ha=F.value[T.b],ia=F.value[T.c],F.array[M]=ga[ta[0]],F.array[M+1]=ga[ta[1]],F.array[M+2]=ga[ta[2]],F.array[M+3]=ha[ta[0]],F.array[M+4]=ha[ta[1]],F.array[M+5]=ha[ta[2]],F.array[M+6]=ia[ta[0]],F.array[M+7]=ia[ta[1]],F.array[M+8]=ia[ta[2]],M+=9;else if("faces"===F.boundTo)for(B=0,N=ka.length;B<N;B++)ia=ha=ga=Ra=F.value[ka[B]],F.array[M]=ga[ta[0]],F.array[M+1]=ga[ta[1]],F.array[M+2]=ga[ta[2]],F.array[M+3]=ha[ta[0]],F.array[M+4]=ha[ta[1]],F.array[M+5]=ha[ta[2]],F.array[M+6]=ia[ta[0]],F.array[M+
7]=ia[ta[1]],F.array[M+8]=ia[ta[2]],M+=9;else if("faceVertices"===F.boundTo)for(B=0,N=ka.length;B<N;B++)Ra=F.value[ka[B]],ga=Ra[0],ha=Ra[1],ia=Ra[2],F.array[M]=ga[ta[0]],F.array[M+1]=ga[ta[1]],F.array[M+2]=ga[ta[2]],F.array[M+3]=ha[ta[0]],F.array[M+4]=ha[ta[1]],F.array[M+5]=ha[ta[2]],F.array[M+6]=ia[ta[0]],F.array[M+7]=ia[ta[1]],F.array[M+8]=ia[ta[2]],M+=9}else if(4===F.size)if(void 0===F.boundTo||"vertices"===F.boundTo)for(B=0,N=ka.length;B<N;B++)T=jb[ka[B]],ga=F.value[T.a],ha=F.value[T.b],ia=F.value[T.c],
F.array[M]=ga.x,F.array[M+1]=ga.y,F.array[M+2]=ga.z,F.array[M+3]=ga.w,F.array[M+4]=ha.x,F.array[M+5]=ha.y,F.array[M+6]=ha.z,F.array[M+7]=ha.w,F.array[M+8]=ia.x,F.array[M+9]=ia.y,F.array[M+10]=ia.z,F.array[M+11]=ia.w,M+=12;else if("faces"===F.boundTo)for(B=0,N=ka.length;B<N;B++)ia=ha=ga=Ra=F.value[ka[B]],F.array[M]=ga.x,F.array[M+1]=ga.y,F.array[M+2]=ga.z,F.array[M+3]=ga.w,F.array[M+4]=ha.x,F.array[M+5]=ha.y,F.array[M+6]=ha.z,F.array[M+7]=ha.w,F.array[M+8]=ia.x,F.array[M+9]=ia.y,F.array[M+10]=ia.z,
F.array[M+11]=ia.w,M+=12;else if("faceVertices"===F.boundTo)for(B=0,N=ka.length;B<N;B++)Ra=F.value[ka[B]],ga=Ra[0],ha=Ra[1],ia=Ra[2],F.array[M]=ga.x,F.array[M+1]=ga.y,F.array[M+2]=ga.z,F.array[M+3]=ga.w,F.array[M+4]=ha.x,F.array[M+5]=ha.y,F.array[M+6]=ha.z,F.array[M+7]=ha.w,F.array[M+8]=ia.x,F.array[M+9]=ia.y,F.array[M+10]=ia.z,F.array[M+11]=ia.w,M+=12;m.bindBuffer(m.ARRAY_BUFFER,F.buffer);m.bufferData(m.ARRAY_BUFFER,F.array,I)}J&&(delete y.__inittedArrays,delete y.__colorArray,delete y.__normalArray,
delete y.__tangentArray,delete y.__uvArray,delete y.__uv2Array,delete y.__faceArray,delete y.__vertexArray,delete y.__lineArray,delete y.__skinIndexArray,delete y.__skinWeightArray)}}l.verticesNeedUpdate=!1;l.morphTargetsNeedUpdate=!1;l.elementsNeedUpdate=!1;l.uvsNeedUpdate=!1;l.normalsNeedUpdate=!1;l.colorsNeedUpdate=!1;l.tangentsNeedUpdate=!1;l.buffersNeedUpdate=!1;p.attributes&&C(p)}else if(b instanceof THREE.Line){p=d(b,l);r=p.attributes&&x(p);if(l.verticesNeedUpdate||l.colorsNeedUpdate||l.lineDistancesNeedUpdate||
r){var Xb=m.DYNAMIC_DRAW,Kb,Lb,Mb,Yb,sa,Zb,Nb=l.vertices,Qb=l.colors,Rb=l.lineDistances,ec=Nb.length,fc=Qb.length,gc=Rb.length,$b=l.__vertexArray,ac=l.__colorArray,Tb=l.__lineDistanceArray,hc=l.colorsNeedUpdate,ic=l.lineDistancesNeedUpdate,nc=l.__webglCustomAttributesList,bc,uc,Ia,Fb,Ma,pa;if(l.verticesNeedUpdate){for(Kb=0;Kb<ec;Kb++)Yb=Nb[Kb],sa=3*Kb,$b[sa]=Yb.x,$b[sa+1]=Yb.y,$b[sa+2]=Yb.z;m.bindBuffer(m.ARRAY_BUFFER,l.__webglVertexBuffer);m.bufferData(m.ARRAY_BUFFER,$b,Xb)}if(hc){for(Lb=0;Lb<fc;Lb++)Zb=
Qb[Lb],sa=3*Lb,ac[sa]=Zb.r,ac[sa+1]=Zb.g,ac[sa+2]=Zb.b;m.bindBuffer(m.ARRAY_BUFFER,l.__webglColorBuffer);m.bufferData(m.ARRAY_BUFFER,ac,Xb)}if(ic){for(Mb=0;Mb<gc;Mb++)Tb[Mb]=Rb[Mb];m.bindBuffer(m.ARRAY_BUFFER,l.__webglLineDistanceBuffer);m.bufferData(m.ARRAY_BUFFER,Tb,Xb)}if(nc)for(bc=0,uc=nc.length;bc<uc;bc++)if(pa=nc[bc],pa.needsUpdate&&(void 0===pa.boundTo||"vertices"===pa.boundTo)){sa=0;Fb=pa.value.length;if(1===pa.size)for(Ia=0;Ia<Fb;Ia++)pa.array[Ia]=pa.value[Ia];else if(2===pa.size)for(Ia=
0;Ia<Fb;Ia++)Ma=pa.value[Ia],pa.array[sa]=Ma.x,pa.array[sa+1]=Ma.y,sa+=2;else if(3===pa.size)if("c"===pa.type)for(Ia=0;Ia<Fb;Ia++)Ma=pa.value[Ia],pa.array[sa]=Ma.r,pa.array[sa+1]=Ma.g,pa.array[sa+2]=Ma.b,sa+=3;else for(Ia=0;Ia<Fb;Ia++)Ma=pa.value[Ia],pa.array[sa]=Ma.x,pa.array[sa+1]=Ma.y,pa.array[sa+2]=Ma.z,sa+=3;else if(4===pa.size)for(Ia=0;Ia<Fb;Ia++)Ma=pa.value[Ia],pa.array[sa]=Ma.x,pa.array[sa+1]=Ma.y,pa.array[sa+2]=Ma.z,pa.array[sa+3]=Ma.w,sa+=4;m.bindBuffer(m.ARRAY_BUFFER,pa.buffer);m.bufferData(m.ARRAY_BUFFER,
pa.array,Xb)}}l.verticesNeedUpdate=!1;l.colorsNeedUpdate=!1;l.lineDistancesNeedUpdate=!1;p.attributes&&C(p)}else if(b instanceof THREE.PointCloud){p=d(b,l);r=p.attributes&&x(p);if(l.verticesNeedUpdate||l.colorsNeedUpdate||b.sortParticles||r){var oc=m.DYNAMIC_DRAW,Na,kb,lb,Z,mb,vb,cc=l.vertices,pc=cc.length,qc=l.colors,vc=qc.length,Ab=l.__vertexArray,Bb=l.__colorArray,qb=l.__sortArray,wc=l.verticesNeedUpdate,xc=l.colorsNeedUpdate,rb=l.__webglCustomAttributesList,ab,Gb,fa,bb,na,Y;if(b.sortParticles){kc.copy(Ub);
kc.multiply(b.matrixWorld);for(Na=0;Na<pc;Na++)lb=cc[Na],ea.copy(lb),ea.applyProjection(kc),qb[Na]=[ea.z,Na];qb.sort(t);for(Na=0;Na<pc;Na++)lb=cc[qb[Na][1]],Z=3*Na,Ab[Z]=lb.x,Ab[Z+1]=lb.y,Ab[Z+2]=lb.z;for(kb=0;kb<vc;kb++)Z=3*kb,vb=qc[qb[kb][1]],Bb[Z]=vb.r,Bb[Z+1]=vb.g,Bb[Z+2]=vb.b;if(rb)for(ab=0,Gb=rb.length;ab<Gb;ab++)if(Y=rb[ab],void 0===Y.boundTo||"vertices"===Y.boundTo)if(Z=0,bb=Y.value.length,1===Y.size)for(fa=0;fa<bb;fa++)mb=qb[fa][1],Y.array[fa]=Y.value[mb];else if(2===Y.size)for(fa=0;fa<bb;fa++)mb=
qb[fa][1],na=Y.value[mb],Y.array[Z]=na.x,Y.array[Z+1]=na.y,Z+=2;else if(3===Y.size)if("c"===Y.type)for(fa=0;fa<bb;fa++)mb=qb[fa][1],na=Y.value[mb],Y.array[Z]=na.r,Y.array[Z+1]=na.g,Y.array[Z+2]=na.b,Z+=3;else for(fa=0;fa<bb;fa++)mb=qb[fa][1],na=Y.value[mb],Y.array[Z]=na.x,Y.array[Z+1]=na.y,Y.array[Z+2]=na.z,Z+=3;else if(4===Y.size)for(fa=0;fa<bb;fa++)mb=qb[fa][1],na=Y.value[mb],Y.array[Z]=na.x,Y.array[Z+1]=na.y,Y.array[Z+2]=na.z,Y.array[Z+3]=na.w,Z+=4}else{if(wc)for(Na=0;Na<pc;Na++)lb=cc[Na],Z=3*
Na,Ab[Z]=lb.x,Ab[Z+1]=lb.y,Ab[Z+2]=lb.z;if(xc)for(kb=0;kb<vc;kb++)vb=qc[kb],Z=3*kb,Bb[Z]=vb.r,Bb[Z+1]=vb.g,Bb[Z+2]=vb.b;if(rb)for(ab=0,Gb=rb.length;ab<Gb;ab++)if(Y=rb[ab],Y.needsUpdate&&(void 0===Y.boundTo||"vertices"===Y.boundTo))if(bb=Y.value.length,Z=0,1===Y.size)for(fa=0;fa<bb;fa++)Y.array[fa]=Y.value[fa];else if(2===Y.size)for(fa=0;fa<bb;fa++)na=Y.value[fa],Y.array[Z]=na.x,Y.array[Z+1]=na.y,Z+=2;else if(3===Y.size)if("c"===Y.type)for(fa=0;fa<bb;fa++)na=Y.value[fa],Y.array[Z]=na.r,Y.array[Z+1]=
na.g,Y.array[Z+2]=na.b,Z+=3;else for(fa=0;fa<bb;fa++)na=Y.value[fa],Y.array[Z]=na.x,Y.array[Z+1]=na.y,Y.array[Z+2]=na.z,Z+=3;else if(4===Y.size)for(fa=0;fa<bb;fa++)na=Y.value[fa],Y.array[Z]=na.x,Y.array[Z+1]=na.y,Y.array[Z+2]=na.z,Y.array[Z+3]=na.w,Z+=4}if(wc||b.sortParticles)m.bindBuffer(m.ARRAY_BUFFER,l.__webglVertexBuffer),m.bufferData(m.ARRAY_BUFFER,Ab,oc);if(xc||b.sortParticles)m.bindBuffer(m.ARRAY_BUFFER,l.__webglColorBuffer),m.bufferData(m.ARRAY_BUFFER,Bb,oc);if(rb)for(ab=0,Gb=rb.length;ab<
Gb;ab++)if(Y=rb[ab],Y.needsUpdate||b.sortParticles)m.bindBuffer(m.ARRAY_BUFFER,Y.buffer),m.bufferData(m.ARRAY_BUFFER,Y.array,oc)}l.verticesNeedUpdate=!1;l.colorsNeedUpdate=!1;p.attributes&&C(p)}for(var Cb=0,rc=k.length;Cb<rc;Cb++){var dc=k[Cb],nb=dc,yc=nb.object,sc=nb.buffer,tc=yc.geometry,ob=yc.material;ob instanceof THREE.MeshFaceMaterial?(ob=ob.materials[tc instanceof THREE.BufferGeometry?0:sc.materialIndex],ob.transparent?(nb.material=ob,Pa.push(nb)):(nb.material=ob,Oa.push(nb))):ob&&(ob.transparent?
(nb.material=ob,Pa.push(nb)):(nb.material=ob,Oa.push(nb)));dc.render=!0;!0===G.sortObjects&&(null!==b.renderDepth?dc.z=b.renderDepth:(ea.setFromMatrixPosition(b.matrixWorld),ea.applyProjection(Ub),dc.z=ea.z))}}Cb=0;for(rc=b.children.length;Cb<rc;Cb++)s(a,b.children[Cb],h)}}function p(a,b,c){if(0!==a.length)for(var d=0,e=a.length;d<e;d++)la=Ya=null,Ca=ca=ja=ua=Da=ra=Fa=-1,fb=!0,a[d].render(b,c,Hb,Ib),la=Ya=null,Ca=ca=ja=ua=Da=ra=Fa=-1,fb=!0}function v(a,b,c,d,e,f){for(var g,h,k,m=a.length-1;-1!==m;m--){g=
a[m];h=g.object;k=g.buffer;N(h,b);if(f)g=f;else{g=g.material;if(!g)continue;e&&G.setBlending(g.blending,g.blendEquation,g.blendSrc,g.blendDst);G.setDepthTest(g.depthTest);G.setDepthWrite(g.depthWrite);J(g.polygonOffset,g.polygonOffsetFactor,g.polygonOffsetUnits)}G.setMaterialFaces(g);k instanceof THREE.BufferGeometry?G.renderBufferDirect(b,c,d,g,k,h):G.renderBuffer(b,c,d,g,k,h)}}function w(a,b,c,d,e,f,g){for(var h,k,m=0,l=a.length;m<l;m++)if(h=a[m],k=h.object,k.visible){if(g)h=g;else{h=h[b];if(!h)continue;
f&&G.setBlending(h.blending,h.blendEquation,h.blendSrc,h.blendDst);G.setDepthTest(h.depthTest);G.setDepthWrite(h.depthWrite);J(h.polygonOffset,h.polygonOffsetFactor,h.polygonOffsetUnits)}G.renderImmediateObject(c,d,e,h,k)}}function u(a){var b=a.object.material;b.transparent?(a.transparent=b,a.opaque=null):(a.opaque=b,a.transparent=null)}function D(a,b,d){var e,f=!1;e=b.material;if(void 0===d.geometryGroups||d.groupsNeedUpdate)delete a.__webglObjects[b.id],d.makeGroups(e instanceof THREE.MeshFaceMaterial,
Eb?4294967296:65535),d.groupsNeedUpdate=!1;for(var g=0,h=d.geometryGroupsList.length;g<h;g++){e=d.geometryGroupsList[g];if(e.__webglVertexBuffer)f=!1;else{f=e;f.__webglVertexBuffer=m.createBuffer();f.__webglNormalBuffer=m.createBuffer();f.__webglTangentBuffer=m.createBuffer();f.__webglColorBuffer=m.createBuffer();f.__webglUVBuffer=m.createBuffer();f.__webglUV2Buffer=m.createBuffer();f.__webglSkinIndicesBuffer=m.createBuffer();f.__webglSkinWeightsBuffer=m.createBuffer();f.__webglFaceBuffer=m.createBuffer();
f.__webglLineBuffer=m.createBuffer();var k=void 0,l=void 0;if(f.numMorphTargets)for(f.__webglMorphTargetsBuffers=[],k=0,l=f.numMorphTargets;k<l;k++)f.__webglMorphTargetsBuffers.push(m.createBuffer());if(f.numMorphNormals)for(f.__webglMorphNormalsBuffers=[],k=0,l=f.numMorphNormals;k<l;k++)f.__webglMorphNormalsBuffers.push(m.createBuffer());G.info.memory.geometries++;c(e,b);d.verticesNeedUpdate=!0;d.morphTargetsNeedUpdate=!0;d.elementsNeedUpdate=!0;d.uvsNeedUpdate=!0;d.normalsNeedUpdate=!0;d.tangentsNeedUpdate=
!0;f=d.colorsNeedUpdate=!0}(f||void 0===b.__webglActive)&&A(a.__webglObjects,e,b)}b.__webglActive=!0}function A(a,b,c){var d=c.id;a[d]=a[d]||[];a[d].push({id:d,buffer:b,object:c,material:null,z:0})}function x(a){for(var b in a.attributes)if(a.attributes[b].needsUpdate)return!0;return!1}function C(a){for(var b in a.attributes)a.attributes[b].needsUpdate=!1}function I(a,b){if(a instanceof THREE.Mesh||a instanceof THREE.PointCloud||a instanceof THREE.Line)delete b.__webglObjects[a.id];else if(a instanceof
THREE.ImmediateRenderObject||a.immediateRenderCallback)for(var c=b.__webglObjectsImmediate,d=c.length-1;0<=d;d--)c[d].object===a&&c.splice(d,1);delete a.__webglActive}function z(a,b,c,d,e){qa=0;d.needsUpdate&&(d.program&&Nb(d),G.initMaterial(d,b,c,e),d.needsUpdate=!1);d.morphTargets&&!e.__webglMorphTargetInfluences&&(e.__webglMorphTargetInfluences=new Float32Array(G.maxMorphTargets));var f=!1,g=!1,h=!1,k=d.program,l=k.uniforms,n=d.__webglShader.uniforms;k.id!==Ya&&(m.useProgram(k.program),Ya=k.id,
h=g=f=!0);d.id!==Ca&&(-1===Ca&&(h=!0),Ca=d.id,g=!0);if(f||a!==la)m.uniformMatrix4fv(l.projectionMatrix,!1,a.projectionMatrix.elements),Ea&&m.uniform1f(l.logDepthBufFC,2/(Math.log(a.far+1)/Math.LN2)),a!==la&&(la=a),(d instanceof THREE.ShaderMaterial||d instanceof THREE.MeshPhongMaterial||d.envMap)&&null!==l.cameraPosition&&(ea.setFromMatrixPosition(a.matrixWorld),m.uniform3f(l.cameraPosition,ea.x,ea.y,ea.z)),(d instanceof THREE.MeshPhongMaterial||d instanceof THREE.MeshLambertMaterial||d instanceof
THREE.ShaderMaterial||d.skinning)&&null!==l.viewMatrix&&m.uniformMatrix4fv(l.viewMatrix,!1,a.matrixWorldInverse.elements);d.skinning&&(e.bindMatrix&&null!==l.bindMatrix&&m.uniformMatrix4fv(l.bindMatrix,!1,e.bindMatrix.elements),e.bindMatrixInverse&&null!==l.bindMatrixInverse&&m.uniformMatrix4fv(l.bindMatrixInverse,!1,e.bindMatrixInverse.elements),Ob&&e.skeleton&&e.skeleton.useVertexTexture?(null!==l.boneTexture&&(f=K(),m.uniform1i(l.boneTexture,f),G.setTexture(e.skeleton.boneTexture,f)),null!==l.boneTextureWidth&&
m.uniform1i(l.boneTextureWidth,e.skeleton.boneTextureWidth),null!==l.boneTextureHeight&&m.uniform1i(l.boneTextureHeight,e.skeleton.boneTextureHeight)):e.skeleton&&e.skeleton.boneMatrices&&null!==l.boneGlobalMatrices&&m.uniformMatrix4fv(l.boneGlobalMatrices,!1,e.skeleton.boneMatrices));if(g){c&&d.fog&&(n.fogColor.value=c.color,c instanceof THREE.Fog?(n.fogNear.value=c.near,n.fogFar.value=c.far):c instanceof THREE.FogExp2&&(n.fogDensity.value=c.density));if(d instanceof THREE.MeshPhongMaterial||d instanceof
THREE.MeshLambertMaterial||d.lights){if(fb){var h=!0,p,r=f=0,q=0,s,t,w,u=Jb,v=u.directional.colors,x=u.directional.positions,D=u.point.colors,A=u.point.positions,z=u.point.distances,C=u.spot.colors,I=u.spot.positions,L=u.spot.distances,N=u.spot.directions,J=u.spot.anglesCos,T=u.spot.exponents,H=u.hemi.skyColors,Q=u.hemi.groundColors,O=u.hemi.positions,R=0,X=0,V=0,$=0,za=0,aa=0,ya=0,ca=0,W=p=0;c=w=W=0;for(g=b.length;c<g;c++)p=b[c],p.onlyShadow||(s=p.color,t=p.intensity,w=p.distance,p instanceof THREE.AmbientLight?
p.visible&&(G.gammaInput?(f+=s.r*s.r,r+=s.g*s.g,q+=s.b*s.b):(f+=s.r,r+=s.g,q+=s.b)):p instanceof THREE.DirectionalLight?(za+=1,p.visible&&(da.setFromMatrixPosition(p.matrixWorld),ea.setFromMatrixPosition(p.target.matrixWorld),da.sub(ea),da.normalize(),p=3*R,x[p]=da.x,x[p+1]=da.y,x[p+2]=da.z,G.gammaInput?ba(v,p,s,t*t):P(v,p,s,t),R+=1)):p instanceof THREE.PointLight?(aa+=1,p.visible&&(W=3*X,G.gammaInput?ba(D,W,s,t*t):P(D,W,s,t),ea.setFromMatrixPosition(p.matrixWorld),A[W]=ea.x,A[W+1]=ea.y,A[W+2]=ea.z,
z[X]=w,X+=1)):p instanceof THREE.SpotLight?(ya+=1,p.visible&&(W=3*V,G.gammaInput?ba(C,W,s,t*t):P(C,W,s,t),ea.setFromMatrixPosition(p.matrixWorld),I[W]=ea.x,I[W+1]=ea.y,I[W+2]=ea.z,L[V]=w,da.copy(ea),ea.setFromMatrixPosition(p.target.matrixWorld),da.sub(ea),da.normalize(),N[W]=da.x,N[W+1]=da.y,N[W+2]=da.z,J[V]=Math.cos(p.angle),T[V]=p.exponent,V+=1)):p instanceof THREE.HemisphereLight&&(ca+=1,p.visible&&(da.setFromMatrixPosition(p.matrixWorld),da.normalize(),w=3*$,O[w]=da.x,O[w+1]=da.y,O[w+2]=da.z,
s=p.color,p=p.groundColor,G.gammaInput?(t*=t,ba(H,w,s,t),ba(Q,w,p,t)):(P(H,w,s,t),P(Q,w,p,t)),$+=1)));c=3*R;for(g=Math.max(v.length,3*za);c<g;c++)v[c]=0;c=3*X;for(g=Math.max(D.length,3*aa);c<g;c++)D[c]=0;c=3*V;for(g=Math.max(C.length,3*ya);c<g;c++)C[c]=0;c=3*$;for(g=Math.max(H.length,3*ca);c<g;c++)H[c]=0;c=3*$;for(g=Math.max(Q.length,3*ca);c<g;c++)Q[c]=0;u.directional.length=R;u.point.length=X;u.spot.length=V;u.hemi.length=$;u.ambient[0]=f;u.ambient[1]=r;u.ambient[2]=q;fb=!1}h?(h=Jb,n.ambientLightColor.value=
h.ambient,n.directionalLightColor.value=h.directional.colors,n.directionalLightDirection.value=h.directional.positions,n.pointLightColor.value=h.point.colors,n.pointLightPosition.value=h.point.positions,n.pointLightDistance.value=h.point.distances,n.spotLightColor.value=h.spot.colors,n.spotLightPosition.value=h.spot.positions,n.spotLightDistance.value=h.spot.distances,n.spotLightDirection.value=h.spot.directions,n.spotLightAngleCos.value=h.spot.anglesCos,n.spotLightExponent.value=h.spot.exponents,
n.hemisphereLightSkyColor.value=h.hemi.skyColors,n.hemisphereLightGroundColor.value=h.hemi.groundColors,n.hemisphereLightDirection.value=h.hemi.positions,y(n,!0)):y(n,!1)}if(d instanceof THREE.MeshBasicMaterial||d instanceof THREE.MeshLambertMaterial||d instanceof THREE.MeshPhongMaterial){n.opacity.value=d.opacity;G.gammaInput?n.diffuse.value.copyGammaToLinear(d.color):n.diffuse.value=d.color;n.map.value=d.map;n.lightMap.value=d.lightMap;n.specularMap.value=d.specularMap;n.alphaMap.value=d.alphaMap;
d.bumpMap&&(n.bumpMap.value=d.bumpMap,n.bumpScale.value=d.bumpScale);d.normalMap&&(n.normalMap.value=d.normalMap,n.normalScale.value.copy(d.normalScale));var U;d.map?U=d.map:d.specularMap?U=d.specularMap:d.normalMap?U=d.normalMap:d.bumpMap?U=d.bumpMap:d.alphaMap&&(U=d.alphaMap);void 0!==U&&(h=U.offset,U=U.repeat,n.offsetRepeat.value.set(h.x,h.y,U.x,U.y));n.envMap.value=d.envMap;n.flipEnvMap.value=d.envMap instanceof THREE.WebGLRenderTargetCube?1:-1;n.reflectivity.value=d.reflectivity;n.refractionRatio.value=
d.refractionRatio;n.combine.value=d.combine;n.useRefract.value=d.envMap&&d.envMap.mapping instanceof THREE.CubeRefractionMapping}d instanceof THREE.LineBasicMaterial?(n.diffuse.value=d.color,n.opacity.value=d.opacity):d instanceof THREE.LineDashedMaterial?(n.diffuse.value=d.color,n.opacity.value=d.opacity,n.dashSize.value=d.dashSize,n.totalSize.value=d.dashSize+d.gapSize,n.scale.value=d.scale):d instanceof THREE.PointCloudMaterial?(n.psColor.value=d.color,n.opacity.value=d.opacity,n.size.value=d.size,
n.scale.value=S.height/2,n.map.value=d.map):d instanceof THREE.MeshPhongMaterial?(n.shininess.value=d.shininess,G.gammaInput?(n.ambient.value.copyGammaToLinear(d.ambient),n.emissive.value.copyGammaToLinear(d.emissive),n.specular.value.copyGammaToLinear(d.specular)):(n.ambient.value=d.ambient,n.emissive.value=d.emissive,n.specular.value=d.specular),d.wrapAround&&n.wrapRGB.value.copy(d.wrapRGB)):d instanceof THREE.MeshLambertMaterial?(G.gammaInput?(n.ambient.value.copyGammaToLinear(d.ambient),n.emissive.value.copyGammaToLinear(d.emissive)):
(n.ambient.value=d.ambient,n.emissive.value=d.emissive),d.wrapAround&&n.wrapRGB.value.copy(d.wrapRGB)):d instanceof THREE.MeshDepthMaterial?(n.mNear.value=a.near,n.mFar.value=a.far,n.opacity.value=d.opacity):d instanceof THREE.MeshNormalMaterial&&(n.opacity.value=d.opacity);if(e.receiveShadow&&!d._shadowPass&&n.shadowMatrix)for(U=a=0,h=b.length;U<h;U++)c=b[U],c.castShadow&&(c instanceof THREE.SpotLight||c instanceof THREE.DirectionalLight&&!c.shadowCascade)&&(n.shadowMap.value[a]=c.shadowMap,n.shadowMapSize.value[a]=
c.shadowMapSize,n.shadowMatrix.value[a]=c.shadowMatrix,n.shadowDarkness.value[a]=c.shadowDarkness,n.shadowBias.value[a]=c.shadowBias,a++);b=d.uniformsList;d=0;for(n=b.length;d<n;d++)if(a=b[d][0],!1!==a.needsUpdate)switch(c=a.type,h=a.value,U=b[d][1],c){case "1i":m.uniform1i(U,h);break;case "1f":m.uniform1f(U,h);break;case "2f":m.uniform2f(U,h[0],h[1]);break;case "3f":m.uniform3f(U,h[0],h[1],h[2]);break;case "4f":m.uniform4f(U,h[0],h[1],h[2],h[3]);break;case "1iv":m.uniform1iv(U,h);break;case "3iv":m.uniform3iv(U,
h);break;case "1fv":m.uniform1fv(U,h);break;case "2fv":m.uniform2fv(U,h);break;case "3fv":m.uniform3fv(U,h);break;case "4fv":m.uniform4fv(U,h);break;case "Matrix3fv":m.uniformMatrix3fv(U,!1,h);break;case "Matrix4fv":m.uniformMatrix4fv(U,!1,h);break;case "i":m.uniform1i(U,h);break;case "f":m.uniform1f(U,h);break;case "v2":m.uniform2f(U,h.x,h.y);break;case "v3":m.uniform3f(U,h.x,h.y,h.z);break;case "v4":m.uniform4f(U,h.x,h.y,h.z,h.w);break;case "c":m.uniform3f(U,h.r,h.g,h.b);break;case "iv1":m.uniform1iv(U,
h);break;case "iv":m.uniform3iv(U,h);break;case "fv1":m.uniform1fv(U,h);break;case "fv":m.uniform3fv(U,h);break;case "v2v":void 0===a._array&&(a._array=new Float32Array(2*h.length));c=0;for(g=h.length;c<g;c++)f=2*c,a._array[f]=h[c].x,a._array[f+1]=h[c].y;m.uniform2fv(U,a._array);break;case "v3v":void 0===a._array&&(a._array=new Float32Array(3*h.length));c=0;for(g=h.length;c<g;c++)f=3*c,a._array[f]=h[c].x,a._array[f+1]=h[c].y,a._array[f+2]=h[c].z;m.uniform3fv(U,a._array);break;case "v4v":void 0===
a._array&&(a._array=new Float32Array(4*h.length));c=0;for(g=h.length;c<g;c++)f=4*c,a._array[f]=h[c].x,a._array[f+1]=h[c].y,a._array[f+2]=h[c].z,a._array[f+3]=h[c].w;m.uniform4fv(U,a._array);break;case "m3":m.uniformMatrix3fv(U,!1,h.elements);break;case "m3v":void 0===a._array&&(a._array=new Float32Array(9*h.length));c=0;for(g=h.length;c<g;c++)h[c].flattenToArrayOffset(a._array,9*c);m.uniformMatrix3fv(U,!1,a._array);break;case "m4":m.uniformMatrix4fv(U,!1,h.elements);break;case "m4v":void 0===a._array&&
(a._array=new Float32Array(16*h.length));c=0;for(g=h.length;c<g;c++)h[c].flattenToArrayOffset(a._array,16*c);m.uniformMatrix4fv(U,!1,a._array);break;case "t":f=h;h=K();m.uniform1i(U,h);if(!f)continue;if(f instanceof THREE.CubeTexture||f.image instanceof Array&&6===f.image.length){if(a=f,U=h,6===a.image.length)if(a.needsUpdate){a.image.__webglTextureCube||(a.addEventListener("dispose",Pb),a.image.__webglTextureCube=m.createTexture(),G.info.memory.textures++);m.activeTexture(m.TEXTURE0+U);m.bindTexture(m.TEXTURE_CUBE_MAP,
a.image.__webglTextureCube);m.pixelStorei(m.UNPACK_FLIP_Y_WEBGL,a.flipY);U=a instanceof THREE.CompressedTexture;h=[];for(c=0;6>c;c++)G.autoScaleCubemaps&&!U?(g=h,f=c,r=a.image[c],u=sc,r.width<=u&&r.height<=u||(v=Math.max(r.width,r.height),q=Math.floor(r.width*u/v),u=Math.floor(r.height*u/v),v=document.createElement("canvas"),v.width=q,v.height=u,v.getContext("2d").drawImage(r,0,0,r.width,r.height,0,0,q,u),r=v),g[f]=r):h[c]=a.image[c];c=h[0];g=THREE.Math.isPowerOfTwo(c.width)&&THREE.Math.isPowerOfTwo(c.height);
f=B(a.format);r=B(a.type);E(m.TEXTURE_CUBE_MAP,a,g);for(c=0;6>c;c++)if(U)for(u=h[c].mipmaps,v=0,x=u.length;v<x;v++)q=u[v],a.format!==THREE.RGBAFormat?m.compressedTexImage2D(m.TEXTURE_CUBE_MAP_POSITIVE_X+c,v,f,q.width,q.height,0,q.data):m.texImage2D(m.TEXTURE_CUBE_MAP_POSITIVE_X+c,v,f,q.width,q.height,0,f,r,q.data);else m.texImage2D(m.TEXTURE_CUBE_MAP_POSITIVE_X+c,0,f,f,r,h[c]);a.generateMipmaps&&g&&m.generateMipmap(m.TEXTURE_CUBE_MAP);a.needsUpdate=!1;if(a.onUpdate)a.onUpdate()}else m.activeTexture(m.TEXTURE0+
U),m.bindTexture(m.TEXTURE_CUBE_MAP,a.image.__webglTextureCube)}else f instanceof THREE.WebGLRenderTargetCube?(a=f,m.activeTexture(m.TEXTURE0+h),m.bindTexture(m.TEXTURE_CUBE_MAP,a.__webglTexture)):G.setTexture(f,h);break;case "tv":void 0===a._array&&(a._array=[]);c=0;for(g=a.value.length;c<g;c++)a._array[c]=K();m.uniform1iv(U,a._array);c=0;for(g=a.value.length;c<g;c++)f=a.value[c],h=a._array[c],f&&G.setTexture(f,h);break;default:console.warn("THREE.WebGLRenderer: Unknown uniform type: "+c)}}m.uniformMatrix4fv(l.modelViewMatrix,
!1,e._modelViewMatrix.elements);l.normalMatrix&&m.uniformMatrix3fv(l.normalMatrix,!1,e._normalMatrix.elements);null!==l.modelMatrix&&m.uniformMatrix4fv(l.modelMatrix,!1,e.matrixWorld.elements);return k}function y(a,b){a.ambientLightColor.needsUpdate=b;a.directionalLightColor.needsUpdate=b;a.directionalLightDirection.needsUpdate=b;a.pointLightColor.needsUpdate=b;a.pointLightPosition.needsUpdate=b;a.pointLightDistance.needsUpdate=b;a.spotLightColor.needsUpdate=b;a.spotLightPosition.needsUpdate=b;a.spotLightDistance.needsUpdate=
b;a.spotLightDirection.needsUpdate=b;a.spotLightAngleCos.needsUpdate=b;a.spotLightExponent.needsUpdate=b;a.hemisphereLightSkyColor.needsUpdate=b;a.hemisphereLightGroundColor.needsUpdate=b;a.hemisphereLightDirection.needsUpdate=b}function K(){var a=qa;a>=Qb&&console.warn("WebGLRenderer: trying to use "+a+" texture units while this GPU supports only "+Qb);qa+=1;return a}function N(a,b){a._modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,a.matrixWorld);a._normalMatrix.getNormalMatrix(a._modelViewMatrix)}
function ba(a,b,c,d){a[b]=c.r*c.r*d;a[b+1]=c.g*c.g*d;a[b+2]=c.b*c.b*d}function P(a,b,c,d){a[b]=c.r*d;a[b+1]=c.g*d;a[b+2]=c.b*d}function O(a){a!==xa&&(m.lineWidth(a),xa=a)}function J(a,b,c){Qa!==a&&(a?m.enable(m.POLYGON_OFFSET_FILL):m.disable(m.POLYGON_OFFSET_FILL),Qa=a);!a||cb===b&&Ga===c||(m.polygonOffset(b,c),cb=b,Ga=c)}function E(a,b,c){c?(m.texParameteri(a,m.TEXTURE_WRAP_S,B(b.wrapS)),m.texParameteri(a,m.TEXTURE_WRAP_T,B(b.wrapT)),m.texParameteri(a,m.TEXTURE_MAG_FILTER,B(b.magFilter)),m.texParameteri(a,
m.TEXTURE_MIN_FILTER,B(b.minFilter))):(m.texParameteri(a,m.TEXTURE_WRAP_S,m.CLAMP_TO_EDGE),m.texParameteri(a,m.TEXTURE_WRAP_T,m.CLAMP_TO_EDGE),m.texParameteri(a,m.TEXTURE_MAG_FILTER,R(b.magFilter)),m.texParameteri(a,m.TEXTURE_MIN_FILTER,R(b.minFilter)));Ta&&b.type!==THREE.FloatType&&(1<b.anisotropy||b.__oldAnisotropy)&&(m.texParameterf(a,Ta.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,Rb)),b.__oldAnisotropy=b.anisotropy)}function Q(a,b){m.bindRenderbuffer(m.RENDERBUFFER,a);b.depthBuffer&&!b.stencilBuffer?
(m.renderbufferStorage(m.RENDERBUFFER,m.DEPTH_COMPONENT16,b.width,b.height),m.framebufferRenderbuffer(m.FRAMEBUFFER,m.DEPTH_ATTACHMENT,m.RENDERBUFFER,a)):b.depthBuffer&&b.stencilBuffer?(m.renderbufferStorage(m.RENDERBUFFER,m.DEPTH_STENCIL,b.width,b.height),m.framebufferRenderbuffer(m.FRAMEBUFFER,m.DEPTH_STENCIL_ATTACHMENT,m.RENDERBUFFER,a)):m.renderbufferStorage(m.RENDERBUFFER,m.RGBA4,b.width,b.height)}function L(a){a instanceof THREE.WebGLRenderTargetCube?(m.bindTexture(m.TEXTURE_CUBE_MAP,a.__webglTexture),
m.generateMipmap(m.TEXTURE_CUBE_MAP),m.bindTexture(m.TEXTURE_CUBE_MAP,null)):(m.bindTexture(m.TEXTURE_2D,a.__webglTexture),m.generateMipmap(m.TEXTURE_2D),m.bindTexture(m.TEXTURE_2D,null))}function R(a){return a===THREE.NearestFilter||a===THREE.NearestMipMapNearestFilter||a===THREE.NearestMipMapLinearFilter?m.NEAREST:m.LINEAR}function B(a){if(a===THREE.RepeatWrapping)return m.REPEAT;if(a===THREE.ClampToEdgeWrapping)return m.CLAMP_TO_EDGE;if(a===THREE.MirroredRepeatWrapping)return m.MIRRORED_REPEAT;
if(a===THREE.NearestFilter)return m.NEAREST;if(a===THREE.NearestMipMapNearestFilter)return m.NEAREST_MIPMAP_NEAREST;if(a===THREE.NearestMipMapLinearFilter)return m.NEAREST_MIPMAP_LINEAR;if(a===THREE.LinearFilter)return m.LINEAR;if(a===THREE.LinearMipMapNearestFilter)return m.LINEAR_MIPMAP_NEAREST;if(a===THREE.LinearMipMapLinearFilter)return m.LINEAR_MIPMAP_LINEAR;if(a===THREE.UnsignedByteType)return m.UNSIGNED_BYTE;if(a===THREE.UnsignedShort4444Type)return m.UNSIGNED_SHORT_4_4_4_4;if(a===THREE.UnsignedShort5551Type)return m.UNSIGNED_SHORT_5_5_5_1;
if(a===THREE.UnsignedShort565Type)return m.UNSIGNED_SHORT_5_6_5;if(a===THREE.ByteType)return m.BYTE;if(a===THREE.ShortType)return m.SHORT;if(a===THREE.UnsignedShortType)return m.UNSIGNED_SHORT;if(a===THREE.IntType)return m.INT;if(a===THREE.UnsignedIntType)return m.UNSIGNED_INT;if(a===THREE.FloatType)return m.FLOAT;if(a===THREE.AlphaFormat)return m.ALPHA;if(a===THREE.RGBFormat)return m.RGB;if(a===THREE.RGBAFormat)return m.RGBA;if(a===THREE.LuminanceFormat)return m.LUMINANCE;if(a===THREE.LuminanceAlphaFormat)return m.LUMINANCE_ALPHA;
if(a===THREE.AddEquation)return m.FUNC_ADD;if(a===THREE.SubtractEquation)return m.FUNC_SUBTRACT;if(a===THREE.ReverseSubtractEquation)return m.FUNC_REVERSE_SUBTRACT;if(a===THREE.ZeroFactor)return m.ZERO;if(a===THREE.OneFactor)return m.ONE;if(a===THREE.SrcColorFactor)return m.SRC_COLOR;if(a===THREE.OneMinusSrcColorFactor)return m.ONE_MINUS_SRC_COLOR;if(a===THREE.SrcAlphaFactor)return m.SRC_ALPHA;if(a===THREE.OneMinusSrcAlphaFactor)return m.ONE_MINUS_SRC_ALPHA;if(a===THREE.DstAlphaFactor)return m.DST_ALPHA;
if(a===THREE.OneMinusDstAlphaFactor)return m.ONE_MINUS_DST_ALPHA;if(a===THREE.DstColorFactor)return m.DST_COLOR;if(a===THREE.OneMinusDstColorFactor)return m.ONE_MINUS_DST_COLOR;if(a===THREE.SrcAlphaSaturateFactor)return m.SRC_ALPHA_SATURATE;if(void 0!==Sa){if(a===THREE.RGB_S3TC_DXT1_Format)return Sa.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===THREE.RGBA_S3TC_DXT1_Format)return Sa.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===THREE.RGBA_S3TC_DXT3_Format)return Sa.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===THREE.RGBA_S3TC_DXT5_Format)return Sa.COMPRESSED_RGBA_S3TC_DXT5_EXT}return 0}
console.log("THREE.WebGLRenderer",THREE.REVISION);a=a||{};var S=void 0!==a.canvas?a.canvas:document.createElement("canvas"),V=void 0!==a.context?a.context:null,W=void 0!==a.precision?a.precision:"highp",H=void 0!==a.alpha?a.alpha:!1,oa=void 0!==a.depth?a.depth:!0,$=void 0!==a.stencil?a.stencil:!0,X=void 0!==a.antialias?a.antialias:!1,T=void 0!==a.premultipliedAlpha?a.premultipliedAlpha:!0,ya=void 0!==a.preserveDrawingBuffer?a.preserveDrawingBuffer:!1,Ea=void 0!==a.logarithmicDepthBuffer?a.logarithmicDepthBuffer:
!1,Aa=new THREE.Color(0),za=0,Oa=[],Pa=[];this.domElement=S;this.context=null;this.devicePixelRatio=void 0!==a.devicePixelRatio?a.devicePixelRatio:void 0!==self.devicePixelRatio?self.devicePixelRatio:1;this.sortObjects=this.autoClearStencil=this.autoClearDepth=this.autoClearColor=this.autoClear=!0;this.shadowMapEnabled=this.gammaOutput=this.gammaInput=!1;this.shadowMapAutoUpdate=!0;this.shadowMapType=THREE.PCFShadowMap;this.shadowMapCullFace=THREE.CullFaceFront;this.shadowMapCascade=this.shadowMapDebug=
!1;this.maxMorphTargets=8;this.maxMorphNormals=4;this.autoScaleCubemaps=!0;this.renderPluginsPre=[];this.renderPluginsPost=[];this.info={memory:{programs:0,geometries:0,textures:0},render:{calls:0,vertices:0,faces:0,points:0}};var G=this,Ba=[],Ya=null,Za=null,Ca=-1,ca=null,la=null,qa=0,ua=-1,ja=-1,Fa=-1,va=-1,Ka=-1,aa=-1,ra=-1,Da=-1,Qa=null,cb=null,Ga=null,xa=null,ma=0,Ja=0,wb=S.width,sb=S.height,Hb=0,Ib=0,pb=new Uint8Array(16),tb=new Uint8Array(16),jc=new THREE.Frustum,Ub=new THREE.Matrix4,kc=new THREE.Matrix4,
ea=new THREE.Vector3,da=new THREE.Vector3,fb=!0,Jb={ambient:[0,0,0],directional:{length:0,colors:[],positions:[]},point:{length:0,colors:[],positions:[],distances:[]},spot:{length:0,colors:[],positions:[],distances:[],directions:[],anglesCos:[],exponents:[]},hemi:{length:0,skyColors:[],groundColors:[],positions:[]}},m,Db,xb,Ta,Sa,Eb;(function(){try{var a={alpha:H,depth:oa,stencil:$,antialias:X,premultipliedAlpha:T,preserveDrawingBuffer:ya};m=V||S.getContext("webgl",a)||S.getContext("experimental-webgl",
a);if(null===m)throw"Error creating WebGL context.";}catch(b){console.error(b)}Db=m.getExtension("OES_texture_float");m.getExtension("OES_texture_float_linear");xb=m.getExtension("OES_standard_derivatives");Ta=m.getExtension("EXT_texture_filter_anisotropic")||m.getExtension("MOZ_EXT_texture_filter_anisotropic")||m.getExtension("WEBKIT_EXT_texture_filter_anisotropic");Sa=m.getExtension("WEBGL_compressed_texture_s3tc")||m.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||m.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
Eb=m.getExtension("OES_element_index_uint");null===Db&&console.log("THREE.WebGLRenderer: Float textures not supported.");null===xb&&console.log("THREE.WebGLRenderer: Standard derivatives not supported.");null===Ta&&console.log("THREE.WebGLRenderer: Anisotropic texture filtering not supported.");null===Sa&&console.log("THREE.WebGLRenderer: S3TC compressed textures not supported.");null===Eb&&console.log("THREE.WebGLRenderer: elementindex as unsigned integer not supported.");void 0===m.getShaderPrecisionFormat&&
(m.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}});Ea&&m.getExtension("EXT_frag_depth")})();m.clearColor(0,0,0,1);m.clearDepth(1);m.clearStencil(0);m.enable(m.DEPTH_TEST);m.depthFunc(m.LEQUAL);m.frontFace(m.CCW);m.cullFace(m.BACK);m.enable(m.CULL_FACE);m.enable(m.BLEND);m.blendEquation(m.FUNC_ADD);m.blendFunc(m.SRC_ALPHA,m.ONE_MINUS_SRC_ALPHA);m.viewport(ma,Ja,wb,sb);m.clearColor(Aa.r,Aa.g,Aa.b,za);this.context=m;var Qb=m.getParameter(m.MAX_TEXTURE_IMAGE_UNITS),tc=
m.getParameter(m.MAX_VERTEX_TEXTURE_IMAGE_UNITS);m.getParameter(m.MAX_TEXTURE_SIZE);var sc=m.getParameter(m.MAX_CUBE_MAP_TEXTURE_SIZE),Rb=Ta?m.getParameter(Ta.MAX_TEXTURE_MAX_ANISOTROPY_EXT):0,Sb=0<tc,Ob=Sb&&Db;Sa&&m.getParameter(m.COMPRESSED_TEXTURE_FORMATS);var zc=m.getShaderPrecisionFormat(m.VERTEX_SHADER,m.HIGH_FLOAT),Ac=m.getShaderPrecisionFormat(m.VERTEX_SHADER,m.MEDIUM_FLOAT);m.getShaderPrecisionFormat(m.VERTEX_SHADER,m.LOW_FLOAT);var Bc=m.getShaderPrecisionFormat(m.FRAGMENT_SHADER,m.HIGH_FLOAT),
Cc=m.getShaderPrecisionFormat(m.FRAGMENT_SHADER,m.MEDIUM_FLOAT);m.getShaderPrecisionFormat(m.FRAGMENT_SHADER,m.LOW_FLOAT);var Dc=0<zc.precision&&0<Bc.precision,ec=0<Ac.precision&&0<Cc.precision;"highp"!==W||Dc||(ec?(W="mediump",console.warn("THREE.WebGLRenderer: highp not supported, using mediump.")):(W="lowp",console.warn("THREE.WebGLRenderer: highp and mediump not supported, using lowp.")));"mediump"!==W||ec||(W="lowp",console.warn("THREE.WebGLRenderer: mediump not supported, using lowp."));this.getContext=
function(){return m};this.supportsVertexTextures=function(){return Sb};this.supportsFloatTextures=function(){return Db};this.supportsStandardDerivatives=function(){return xb};this.supportsCompressedTextureS3TC=function(){return Sa};this.getMaxAnisotropy=function(){return Rb};this.getPrecision=function(){return W};this.setSize=function(a,b,c){S.width=a*this.devicePixelRatio;S.height=b*this.devicePixelRatio;!1!==c&&(S.style.width=a+"px",S.style.height=b+"px");this.setViewport(0,0,a,b)};this.setViewport=
function(a,b,c,d){ma=a*this.devicePixelRatio;Ja=b*this.devicePixelRatio;wb=c*this.devicePixelRatio;sb=d*this.devicePixelRatio;m.viewport(ma,Ja,wb,sb)};this.setScissor=function(a,b,c,d){m.scissor(a*this.devicePixelRatio,b*this.devicePixelRatio,c*this.devicePixelRatio,d*this.devicePixelRatio)};this.enableScissorTest=function(a){a?m.enable(m.SCISSOR_TEST):m.disable(m.SCISSOR_TEST)};this.setClearColor=function(a,b){Aa.set(a);za=void 0!==b?b:1;m.clearColor(Aa.r,Aa.g,Aa.b,za)};this.setClearColorHex=function(a,
b){console.warn("THREE.WebGLRenderer: .setClearColorHex() is being removed. Use .setClearColor() instead.");this.setClearColor(a,b)};this.getClearColor=function(){return Aa};this.getClearAlpha=function(){return za};this.clear=function(a,b,c){var d=0;if(void 0===a||a)d|=m.COLOR_BUFFER_BIT;if(void 0===b||b)d|=m.DEPTH_BUFFER_BIT;if(void 0===c||c)d|=m.STENCIL_BUFFER_BIT;m.clear(d)};this.clearColor=function(){m.clear(m.COLOR_BUFFER_BIT)};this.clearDepth=function(){m.clear(m.DEPTH_BUFFER_BIT)};this.clearStencil=
function(){m.clear(m.STENCIL_BUFFER_BIT)};this.clearTarget=function(a,b,c,d){this.setRenderTarget(a);this.clear(b,c,d)};this.addPostPlugin=function(a){a.init(this);this.renderPluginsPost.push(a)};this.addPrePlugin=function(a){a.init(this);this.renderPluginsPre.push(a)};this.updateShadowMap=function(a,b){Ya=null;Ca=ca=Da=ra=Fa=-1;fb=!0;ja=ua=-1;fc(a);this.shadowMapPlugin.update(a,b)};var gc=function(a){a=a.target;a.removeEventListener("dispose",gc);a.__webglInit=void 0;if(a instanceof THREE.BufferGeometry){a=
a.attributes;for(var b in a)void 0!==a[b].buffer&&m.deleteBuffer(a[b].buffer);G.info.memory.geometries--}else if(void 0!==a.geometryGroups){b=0;for(var c=a.geometryGroupsList.length;b<c;b++){var d=a.geometryGroupsList[b];if(void 0!==d.numMorphTargets)for(var e=0,f=d.numMorphTargets;e<f;e++)m.deleteBuffer(d.__webglMorphTargetsBuffers[e]);if(void 0!==d.numMorphNormals)for(e=0,f=d.numMorphNormals;e<f;e++)m.deleteBuffer(d.__webglMorphNormalsBuffers[e]);Tb(d)}}else Tb(a)},Pb=function(a){a=a.target;a.removeEventListener("dispose",
Pb);a.image&&a.image.__webglTextureCube?m.deleteTexture(a.image.__webglTextureCube):a.__webglInit&&(a.__webglInit=!1,m.deleteTexture(a.__webglTexture));G.info.memory.textures--},hc=function(a){a=a.target;a.removeEventListener("dispose",hc);if(a&&a.__webglTexture)if(m.deleteTexture(a.__webglTexture),a instanceof THREE.WebGLRenderTargetCube)for(var b=0;6>b;b++)m.deleteFramebuffer(a.__webglFramebuffer[b]),m.deleteRenderbuffer(a.__webglRenderbuffer[b]);else m.deleteFramebuffer(a.__webglFramebuffer),m.deleteRenderbuffer(a.__webglRenderbuffer);
G.info.memory.textures--},ic=function(a){a=a.target;a.removeEventListener("dispose",ic);Nb(a)},Tb=function(a){void 0!==a.__webglVertexBuffer&&m.deleteBuffer(a.__webglVertexBuffer);void 0!==a.__webglNormalBuffer&&m.deleteBuffer(a.__webglNormalBuffer);void 0!==a.__webglTangentBuffer&&m.deleteBuffer(a.__webglTangentBuffer);void 0!==a.__webglColorBuffer&&m.deleteBuffer(a.__webglColorBuffer);void 0!==a.__webglUVBuffer&&m.deleteBuffer(a.__webglUVBuffer);void 0!==a.__webglUV2Buffer&&m.deleteBuffer(a.__webglUV2Buffer);
void 0!==a.__webglSkinIndicesBuffer&&m.deleteBuffer(a.__webglSkinIndicesBuffer);void 0!==a.__webglSkinWeightsBuffer&&m.deleteBuffer(a.__webglSkinWeightsBuffer);void 0!==a.__webglFaceBuffer&&m.deleteBuffer(a.__webglFaceBuffer);void 0!==a.__webglLineBuffer&&m.deleteBuffer(a.__webglLineBuffer);void 0!==a.__webglLineDistanceBuffer&&m.deleteBuffer(a.__webglLineDistanceBuffer);if(void 0!==a.__webglCustomAttributesList)for(var b in a.__webglCustomAttributesList)m.deleteBuffer(a.__webglCustomAttributesList[b].buffer);
G.info.memory.geometries--},Nb=function(a){var b=a.program.program;if(void 0!==b){a.program=void 0;var c,d,e=!1;a=0;for(c=Ba.length;a<c;a++)if(d=Ba[a],d.program===b){d.usedTimes--;0===d.usedTimes&&(e=!0);break}if(!0===e){e=[];a=0;for(c=Ba.length;a<c;a++)d=Ba[a],d.program!==b&&e.push(d);Ba=e;m.deleteProgram(b);G.info.memory.programs--}}};this.renderBufferImmediate=function(a,b,c){k();a.hasPositions&&!a.__webglVertexBuffer&&(a.__webglVertexBuffer=m.createBuffer());a.hasNormals&&!a.__webglNormalBuffer&&
(a.__webglNormalBuffer=m.createBuffer());a.hasUvs&&!a.__webglUvBuffer&&(a.__webglUvBuffer=m.createBuffer());a.hasColors&&!a.__webglColorBuffer&&(a.__webglColorBuffer=m.createBuffer());a.hasPositions&&(m.bindBuffer(m.ARRAY_BUFFER,a.__webglVertexBuffer),m.bufferData(m.ARRAY_BUFFER,a.positionArray,m.DYNAMIC_DRAW),l(b.attributes.position),m.vertexAttribPointer(b.attributes.position,3,m.FLOAT,!1,0,0));if(a.hasNormals){m.bindBuffer(m.ARRAY_BUFFER,a.__webglNormalBuffer);if(c.shading===THREE.FlatShading){var d,
e,f,g,h,p,r,q,s,t,u,w=3*a.count;for(u=0;u<w;u+=9)t=a.normalArray,d=t[u],e=t[u+1],f=t[u+2],g=t[u+3],p=t[u+4],q=t[u+5],h=t[u+6],r=t[u+7],s=t[u+8],d=(d+g+h)/3,e=(e+p+r)/3,f=(f+q+s)/3,t[u]=d,t[u+1]=e,t[u+2]=f,t[u+3]=d,t[u+4]=e,t[u+5]=f,t[u+6]=d,t[u+7]=e,t[u+8]=f}m.bufferData(m.ARRAY_BUFFER,a.normalArray,m.DYNAMIC_DRAW);l(b.attributes.normal);m.vertexAttribPointer(b.attributes.normal,3,m.FLOAT,!1,0,0)}a.hasUvs&&c.map&&(m.bindBuffer(m.ARRAY_BUFFER,a.__webglUvBuffer),m.bufferData(m.ARRAY_BUFFER,a.uvArray,
m.DYNAMIC_DRAW),l(b.attributes.uv),m.vertexAttribPointer(b.attributes.uv,2,m.FLOAT,!1,0,0));a.hasColors&&c.vertexColors!==THREE.NoColors&&(m.bindBuffer(m.ARRAY_BUFFER,a.__webglColorBuffer),m.bufferData(m.ARRAY_BUFFER,a.colorArray,m.DYNAMIC_DRAW),l(b.attributes.color),m.vertexAttribPointer(b.attributes.color,3,m.FLOAT,!1,0,0));n();m.drawArrays(m.TRIANGLES,0,a.count);a.count=0};this.renderBufferDirect=function(a,b,c,d,e,f){if(!1!==d.visible){var g=z(a,b,c,d,f);a=g.attributes;b=e.attributes;c=!1;g=16777215*
e.id+2*g.id+(d.wireframe?1:0);g!==ca&&(ca=g,c=!0);c&&k();if(f instanceof THREE.Mesh)if(g=b.index){var l,n;g.array instanceof Uint32Array?(l=m.UNSIGNED_INT,n=4):(l=m.UNSIGNED_SHORT,n=2);e=e.offsets;if(0===e.length)c&&(h(d,a,b,0),m.bindBuffer(m.ELEMENT_ARRAY_BUFFER,g.buffer)),m.drawElements(m.TRIANGLES,g.array.length,l,0),G.info.render.calls++,G.info.render.vertices+=g.array.length,G.info.render.faces+=g.array.length/3;else{c=!0;for(var p=0,r=e.length;p<r;p++){var q=e[p].index;c&&(h(d,a,b,q),m.bindBuffer(m.ELEMENT_ARRAY_BUFFER,
g.buffer));m.drawElements(m.TRIANGLES,e[p].count,l,e[p].start*n);G.info.render.calls++;G.info.render.vertices+=e[p].count;G.info.render.faces+=e[p].count/3}}}else c&&h(d,a,b,0),d=e.attributes.position,m.drawArrays(m.TRIANGLES,0,d.array.length/3),G.info.render.calls++,G.info.render.vertices+=d.array.length/3,G.info.render.faces+=d.array.length/9;else if(f instanceof THREE.PointCloud)c&&h(d,a,b,0),d=b.position,m.drawArrays(m.POINTS,0,d.array.length/3),G.info.render.calls++,G.info.render.points+=d.array.length/
3;else if(f instanceof THREE.Line)if(f=f.type===THREE.LineStrip?m.LINE_STRIP:m.LINES,O(d.linewidth),g=b.index)if(g.array instanceof Uint32Array?(l=m.UNSIGNED_INT,n=4):(l=m.UNSIGNED_SHORT,n=2),e=e.offsets,0===e.length)c&&(h(d,a,b,0),m.bindBuffer(m.ELEMENT_ARRAY_BUFFER,g.buffer)),m.drawElements(f,g.array.length,l,0),G.info.render.calls++,G.info.render.vertices+=g.array.length;else for(1<e.length&&(c=!0),p=0,r=e.length;p<r;p++)q=e[p].index,c&&(h(d,a,b,q),m.bindBuffer(m.ELEMENT_ARRAY_BUFFER,g.buffer)),
m.drawElements(f,e[p].count,l,e[p].start*n),G.info.render.calls++,G.info.render.vertices+=e[p].count;else c&&h(d,a,b,0),d=b.position,m.drawArrays(f,0,d.array.length/3),G.info.render.calls++,G.info.render.points+=d.array.length/3}};this.renderBuffer=function(a,b,c,d,e,f){if(!1!==d.visible){var g,h;c=z(a,b,c,d,f);b=c.attributes;a=!1;c=16777215*e.id+2*c.id+(d.wireframe?1:0);c!==ca&&(ca=c,a=!0);a&&k();if(!d.morphTargets&&0<=b.position)a&&(m.bindBuffer(m.ARRAY_BUFFER,e.__webglVertexBuffer),l(b.position),
m.vertexAttribPointer(b.position,3,m.FLOAT,!1,0,0));else if(f.morphTargetBase){c=d.program.attributes;-1!==f.morphTargetBase&&0<=c.position?(m.bindBuffer(m.ARRAY_BUFFER,e.__webglMorphTargetsBuffers[f.morphTargetBase]),l(c.position),m.vertexAttribPointer(c.position,3,m.FLOAT,!1,0,0)):0<=c.position&&(m.bindBuffer(m.ARRAY_BUFFER,e.__webglVertexBuffer),l(c.position),m.vertexAttribPointer(c.position,3,m.FLOAT,!1,0,0));if(f.morphTargetForcedOrder.length){var p=0;h=f.morphTargetForcedOrder;for(g=f.morphTargetInfluences;p<
d.numSupportedMorphTargets&&p<h.length;)0<=c["morphTarget"+p]&&(m.bindBuffer(m.ARRAY_BUFFER,e.__webglMorphTargetsBuffers[h[p]]),l(c["morphTarget"+p]),m.vertexAttribPointer(c["morphTarget"+p],3,m.FLOAT,!1,0,0)),0<=c["morphNormal"+p]&&d.morphNormals&&(m.bindBuffer(m.ARRAY_BUFFER,e.__webglMorphNormalsBuffers[h[p]]),l(c["morphNormal"+p]),m.vertexAttribPointer(c["morphNormal"+p],3,m.FLOAT,!1,0,0)),f.__webglMorphTargetInfluences[p]=g[h[p]],p++}else{h=[];g=f.morphTargetInfluences;var r,q=g.length;for(r=
0;r<q;r++)p=g[r],0<p&&h.push([p,r]);h.length>d.numSupportedMorphTargets?(h.sort(t),h.length=d.numSupportedMorphTargets):h.length>d.numSupportedMorphNormals?h.sort(t):0===h.length&&h.push([0,0]);for(p=0;p<d.numSupportedMorphTargets;)h[p]?(r=h[p][1],0<=c["morphTarget"+p]&&(m.bindBuffer(m.ARRAY_BUFFER,e.__webglMorphTargetsBuffers[r]),l(c["morphTarget"+p]),m.vertexAttribPointer(c["morphTarget"+p],3,m.FLOAT,!1,0,0)),0<=c["morphNormal"+p]&&d.morphNormals&&(m.bindBuffer(m.ARRAY_BUFFER,e.__webglMorphNormalsBuffers[r]),
l(c["morphNormal"+p]),m.vertexAttribPointer(c["morphNormal"+p],3,m.FLOAT,!1,0,0)),f.__webglMorphTargetInfluences[p]=g[r]):f.__webglMorphTargetInfluences[p]=0,p++}null!==d.program.uniforms.morphTargetInfluences&&m.uniform1fv(d.program.uniforms.morphTargetInfluences,f.__webglMorphTargetInfluences)}if(a){if(e.__webglCustomAttributesList)for(g=0,h=e.__webglCustomAttributesList.length;g<h;g++)c=e.__webglCustomAttributesList[g],0<=b[c.buffer.belongsToAttribute]&&(m.bindBuffer(m.ARRAY_BUFFER,c.buffer),l(b[c.buffer.belongsToAttribute]),
m.vertexAttribPointer(b[c.buffer.belongsToAttribute],c.size,m.FLOAT,!1,0,0));0<=b.color&&(0<f.geometry.colors.length||0<f.geometry.faces.length?(m.bindBuffer(m.ARRAY_BUFFER,e.__webglColorBuffer),l(b.color),m.vertexAttribPointer(b.color,3,m.FLOAT,!1,0,0)):d.defaultAttributeValues&&m.vertexAttrib3fv(b.color,d.defaultAttributeValues.color));0<=b.normal&&(m.bindBuffer(m.ARRAY_BUFFER,e.__webglNormalBuffer),l(b.normal),m.vertexAttribPointer(b.normal,3,m.FLOAT,!1,0,0));0<=b.tangent&&(m.bindBuffer(m.ARRAY_BUFFER,
e.__webglTangentBuffer),l(b.tangent),m.vertexAttribPointer(b.tangent,4,m.FLOAT,!1,0,0));0<=b.uv&&(f.geometry.faceVertexUvs[0]?(m.bindBuffer(m.ARRAY_BUFFER,e.__webglUVBuffer),l(b.uv),m.vertexAttribPointer(b.uv,2,m.FLOAT,!1,0,0)):d.defaultAttributeValues&&m.vertexAttrib2fv(b.uv,d.defaultAttributeValues.uv));0<=b.uv2&&(f.geometry.faceVertexUvs[1]?(m.bindBuffer(m.ARRAY_BUFFER,e.__webglUV2Buffer),l(b.uv2),m.vertexAttribPointer(b.uv2,2,m.FLOAT,!1,0,0)):d.defaultAttributeValues&&m.vertexAttrib2fv(b.uv2,
d.defaultAttributeValues.uv2));d.skinning&&0<=b.skinIndex&&0<=b.skinWeight&&(m.bindBuffer(m.ARRAY_BUFFER,e.__webglSkinIndicesBuffer),l(b.skinIndex),m.vertexAttribPointer(b.skinIndex,4,m.FLOAT,!1,0,0),m.bindBuffer(m.ARRAY_BUFFER,e.__webglSkinWeightsBuffer),l(b.skinWeight),m.vertexAttribPointer(b.skinWeight,4,m.FLOAT,!1,0,0));0<=b.lineDistance&&(m.bindBuffer(m.ARRAY_BUFFER,e.__webglLineDistanceBuffer),l(b.lineDistance),m.vertexAttribPointer(b.lineDistance,1,m.FLOAT,!1,0,0))}n();f instanceof THREE.Mesh?
(f=e.__typeArray===Uint32Array?m.UNSIGNED_INT:m.UNSIGNED_SHORT,d.wireframe?(O(d.wireframeLinewidth),a&&m.bindBuffer(m.ELEMENT_ARRAY_BUFFER,e.__webglLineBuffer),m.drawElements(m.LINES,e.__webglLineCount,f,0)):(a&&m.bindBuffer(m.ELEMENT_ARRAY_BUFFER,e.__webglFaceBuffer),m.drawElements(m.TRIANGLES,e.__webglFaceCount,f,0)),G.info.render.calls++,G.info.render.vertices+=e.__webglFaceCount,G.info.render.faces+=e.__webglFaceCount/3):f instanceof THREE.Line?(f=f.type===THREE.LineStrip?m.LINE_STRIP:m.LINES,
O(d.linewidth),m.drawArrays(f,0,e.__webglLineCount),G.info.render.calls++):f instanceof THREE.PointCloud&&(m.drawArrays(m.POINTS,0,e.__webglParticleCount),G.info.render.calls++,G.info.render.points+=e.__webglParticleCount)}};this.render=function(a,b,c,d){function e(a){a instanceof THREE.SkinnedMesh&&a.skeleton.update();for(var b=0,c=a.children.length;b<c;b++)e(a.children[b])}if(!1===b instanceof THREE.Camera)console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");else{var f,
g,h,k,m=a.__lights,l=a.fog;Ca=-1;la=null;fb=!0;!0===a.autoUpdate&&a.updateMatrixWorld();void 0===b.parent&&b.updateMatrixWorld();e(a);b.matrixWorldInverse.getInverse(b.matrixWorld);Ub.multiplyMatrices(b.projectionMatrix,b.matrixWorldInverse);jc.setFromMatrix(Ub);fc(a);Oa.length=0;Pa.length=0;s(a,a,b);!0===G.sortObjects&&(Oa.sort(q),Pa.sort(r));p(this.renderPluginsPre,a,b);G.info.render.calls=0;G.info.render.vertices=0;G.info.render.faces=0;G.info.render.points=0;this.setRenderTarget(c);(this.autoClear||
d)&&this.clear(this.autoClearColor,this.autoClearDepth,this.autoClearStencil);k=a.__webglObjectsImmediate;d=0;for(f=k.length;d<f;d++)g=k[d],h=g.object,h.visible&&(N(h,b),u(g));a.overrideMaterial?(d=a.overrideMaterial,this.setBlending(d.blending,d.blendEquation,d.blendSrc,d.blendDst),this.setDepthTest(d.depthTest),this.setDepthWrite(d.depthWrite),J(d.polygonOffset,d.polygonOffsetFactor,d.polygonOffsetUnits),v(Oa,b,m,l,!0,d),v(Pa,b,m,l,!0,d),w(a.__webglObjectsImmediate,"",b,m,l,!1,d)):(d=null,this.setBlending(THREE.NoBlending),
v(Oa,b,m,l,!1,d),w(a.__webglObjectsImmediate,"opaque",b,m,l,!1,d),v(Pa,b,m,l,!0,d),w(a.__webglObjectsImmediate,"transparent",b,m,l,!0,d));p(this.renderPluginsPost,a,b);c&&c.generateMipmaps&&c.minFilter!==THREE.NearestFilter&&c.minFilter!==THREE.LinearFilter&&L(c);this.setDepthTest(!0);this.setDepthWrite(!0)}};this.renderImmediateObject=function(a,b,c,d,e){var f=z(a,b,c,d,e);ca=-1;G.setMaterialFaces(d);e.immediateRenderCallback?e.immediateRenderCallback(f,m,jc):e.render(function(a){G.renderBufferImmediate(a,
f,d)})};var fc=function(a){a.__webglObjects||(a.__webglObjects={},a.__webglObjectsImmediate=[]);for(;a.__objectsAdded.length;){var c=a.__objectsAdded[0],d=a,e=void 0,f=void 0;void 0===c.__webglInit&&(c.__webglInit=!0,c._modelViewMatrix=new THREE.Matrix4,c._normalMatrix=new THREE.Matrix3);e=c.geometry;if(void 0!==e&&void 0===e.__webglInit)if(e.__webglInit=!0,e.addEventListener("dispose",gc),e instanceof THREE.BufferGeometry)g(e);else if(c instanceof THREE.Mesh)void 0!==c.__webglActive&&I(c,d),D(d,
c,e);else if(c instanceof THREE.Line){if(!e.__webglVertexBuffer){f=e;f.__webglVertexBuffer=m.createBuffer();f.__webglColorBuffer=m.createBuffer();f.__webglLineDistanceBuffer=m.createBuffer();G.info.memory.geometries++;var f=e,h=c,k=f.vertices.length;f.__vertexArray=new Float32Array(3*k);f.__colorArray=new Float32Array(3*k);f.__lineDistanceArray=new Float32Array(1*k);f.__webglLineCount=k;b(f,h);e.verticesNeedUpdate=!0;e.colorsNeedUpdate=!0;e.lineDistancesNeedUpdate=!0}}else c instanceof THREE.PointCloud&&
!e.__webglVertexBuffer&&(f=e,f.__webglVertexBuffer=m.createBuffer(),f.__webglColorBuffer=m.createBuffer(),G.info.memory.geometries++,f=e,h=c,k=f.vertices.length,f.__vertexArray=new Float32Array(3*k),f.__colorArray=new Float32Array(3*k),f.__sortArray=[],f.__webglParticleCount=k,b(f,h),e.verticesNeedUpdate=!0,e.colorsNeedUpdate=!0);if(void 0===c.__webglActive){if(c instanceof THREE.Mesh)if(e=c.geometry,e instanceof THREE.BufferGeometry)A(d.__webglObjects,e,c);else{if(e instanceof THREE.Geometry)for(h=
0,k=e.geometryGroupsList.length;h<k;h++)f=e.geometryGroupsList[h],A(d.__webglObjects,f,c)}else c instanceof THREE.Line||c instanceof THREE.PointCloud?(e=c.geometry,A(d.__webglObjects,e,c)):(c instanceof THREE.ImmediateRenderObject||c.immediateRenderCallback)&&d.__webglObjectsImmediate.push({id:null,object:c,opaque:null,transparent:null,z:0});c.__webglActive=!0}a.__objectsAdded.splice(0,1)}for(;a.__objectsRemoved.length;)I(a.__objectsRemoved[0],a),a.__objectsRemoved.splice(0,1)};this.initMaterial=
function(a,b,c,d){var e,f,g,h;a.addEventListener("dispose",ic);var k,l,n,p;a instanceof THREE.MeshDepthMaterial?p="depth":a instanceof THREE.MeshNormalMaterial?p="normal":a instanceof THREE.MeshBasicMaterial?p="basic":a instanceof THREE.MeshLambertMaterial?p="lambert":a instanceof THREE.MeshPhongMaterial?p="phong":a instanceof THREE.LineBasicMaterial?p="basic":a instanceof THREE.LineDashedMaterial?p="dashed":a instanceof THREE.PointCloudMaterial&&(p="particle_basic");p?(e=THREE.ShaderLib[p],a.__webglShader=
{uniforms:THREE.UniformsUtils.clone(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}):a.__webglShader={uniforms:a.uniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader};n=h=g=f=e=0;for(var r=b.length;n<r;n++){var q=b[n];q.onlyShadow||!1===q.visible||(q instanceof THREE.DirectionalLight&&e++,q instanceof THREE.PointLight&&f++,q instanceof THREE.SpotLight&&g++,q instanceof THREE.HemisphereLight&&h++)}r=n=0;for(q=b.length;r<q;r++){var s=b[r];s.castShadow&&(s instanceof
THREE.SpotLight&&n++,s instanceof THREE.DirectionalLight&&!s.shadowCascade&&n++)}b=n;Ob&&d&&d.skeleton&&d.skeleton.useVertexTexture?n=1024:(n=m.getParameter(m.MAX_VERTEX_UNIFORM_VECTORS),n=Math.floor((n-20)/4),void 0!==d&&d instanceof THREE.SkinnedMesh&&(n=Math.min(d.skeleton.bones.length,n),n<d.skeleton.bones.length&&console.warn("WebGLRenderer: too many bones - "+d.skeleton.bones.length+", this GPU supports just "+n+" (try OpenGL instead of ANGLE)")));c={precision:W,supportsVertexTextures:Sb,map:!!a.map,
envMap:!!a.envMap,lightMap:!!a.lightMap,bumpMap:!!a.bumpMap,normalMap:!!a.normalMap,specularMap:!!a.specularMap,alphaMap:!!a.alphaMap,vertexColors:a.vertexColors,fog:c,useFog:a.fog,fogExp:c instanceof THREE.FogExp2,sizeAttenuation:a.sizeAttenuation,logarithmicDepthBuffer:Ea,skinning:a.skinning,maxBones:n,useVertexTexture:Ob&&d&&d.skeleton&&d.skeleton.useVertexTexture,morphTargets:a.morphTargets,morphNormals:a.morphNormals,maxMorphTargets:this.maxMorphTargets,maxMorphNormals:this.maxMorphNormals,maxDirLights:e,
maxPointLights:f,maxSpotLights:g,maxHemiLights:h,maxShadows:b,shadowMapEnabled:this.shadowMapEnabled&&d.receiveShadow&&0<b,shadowMapType:this.shadowMapType,shadowMapDebug:this.shadowMapDebug,shadowMapCascade:this.shadowMapCascade,alphaTest:a.alphaTest,metal:a.metal,wrapAround:a.wrapAround,doubleSided:a.side===THREE.DoubleSide,flipSided:a.side===THREE.BackSide};d=[];p?d.push(p):(d.push(a.fragmentShader),d.push(a.vertexShader));for(var t in a.defines)d.push(t),d.push(a.defines[t]);for(l in c)d.push(l),
d.push(c[l]);p=d.join();var u;l=0;for(t=Ba.length;l<t;l++)if(d=Ba[l],d.code===p){u=d;u.usedTimes++;break}void 0===u&&(u=new THREE.WebGLProgram(this,p,a,c),Ba.push(u),G.info.memory.programs=Ba.length);a.program=u;u=a.program.attributes;if(a.morphTargets)for(a.numSupportedMorphTargets=0,t="morphTarget",l=0;l<this.maxMorphTargets;l++)p=t+l,0<=u[p]&&a.numSupportedMorphTargets++;if(a.morphNormals)for(a.numSupportedMorphNormals=0,t="morphNormal",l=0;l<this.maxMorphNormals;l++)p=t+l,0<=u[p]&&a.numSupportedMorphNormals++;
a.uniformsList=[];for(k in a.__webglShader.uniforms)(l=a.program.uniforms[k])&&a.uniformsList.push([a.__webglShader.uniforms[k],l])};this.setFaceCulling=function(a,b){a===THREE.CullFaceNone?m.disable(m.CULL_FACE):(b===THREE.FrontFaceDirectionCW?m.frontFace(m.CW):m.frontFace(m.CCW),a===THREE.CullFaceBack?m.cullFace(m.BACK):a===THREE.CullFaceFront?m.cullFace(m.FRONT):m.cullFace(m.FRONT_AND_BACK),m.enable(m.CULL_FACE))};this.setMaterialFaces=function(a){var b=a.side===THREE.DoubleSide;a=a.side===THREE.BackSide;
ua!==b&&(b?m.disable(m.CULL_FACE):m.enable(m.CULL_FACE),ua=b);ja!==a&&(a?m.frontFace(m.CW):m.frontFace(m.CCW),ja=a)};this.setDepthTest=function(a){ra!==a&&(a?m.enable(m.DEPTH_TEST):m.disable(m.DEPTH_TEST),ra=a)};this.setDepthWrite=function(a){Da!==a&&(m.depthMask(a),Da=a)};this.setBlending=function(a,b,c,d){a!==Fa&&(a===THREE.NoBlending?m.disable(m.BLEND):a===THREE.AdditiveBlending?(m.enable(m.BLEND),m.blendEquation(m.FUNC_ADD),m.blendFunc(m.SRC_ALPHA,m.ONE)):a===THREE.SubtractiveBlending?(m.enable(m.BLEND),
m.blendEquation(m.FUNC_ADD),m.blendFunc(m.ZERO,m.ONE_MINUS_SRC_COLOR)):a===THREE.MultiplyBlending?(m.enable(m.BLEND),m.blendEquation(m.FUNC_ADD),m.blendFunc(m.ZERO,m.SRC_COLOR)):a===THREE.CustomBlending?m.enable(m.BLEND):(m.enable(m.BLEND),m.blendEquationSeparate(m.FUNC_ADD,m.FUNC_ADD),m.blendFuncSeparate(m.SRC_ALPHA,m.ONE_MINUS_SRC_ALPHA,m.ONE,m.ONE_MINUS_SRC_ALPHA)),Fa=a);if(a===THREE.CustomBlending){if(b!==va&&(m.blendEquation(B(b)),va=b),c!==Ka||d!==aa)m.blendFunc(B(c),B(d)),Ka=c,aa=d}else aa=
Ka=va=null};this.setTexture=function(a,b){if(a.needsUpdate){a.__webglInit||(a.__webglInit=!0,a.addEventListener("dispose",Pb),a.__webglTexture=m.createTexture(),G.info.memory.textures++);m.activeTexture(m.TEXTURE0+b);m.bindTexture(m.TEXTURE_2D,a.__webglTexture);m.pixelStorei(m.UNPACK_FLIP_Y_WEBGL,a.flipY);m.pixelStorei(m.UNPACK_PREMULTIPLY_ALPHA_WEBGL,a.premultiplyAlpha);m.pixelStorei(m.UNPACK_ALIGNMENT,a.unpackAlignment);var c=a.image,d=THREE.Math.isPowerOfTwo(c.width)&&THREE.Math.isPowerOfTwo(c.height),
e=B(a.format),f=B(a.type);E(m.TEXTURE_2D,a,d);var g=a.mipmaps;if(a instanceof THREE.DataTexture)if(0<g.length&&d){for(var h=0,k=g.length;h<k;h++)c=g[h],m.texImage2D(m.TEXTURE_2D,h,e,c.width,c.height,0,e,f,c.data);a.generateMipmaps=!1}else m.texImage2D(m.TEXTURE_2D,0,e,c.width,c.height,0,e,f,c.data);else if(a instanceof THREE.CompressedTexture)for(h=0,k=g.length;h<k;h++)c=g[h],a.format!==THREE.RGBAFormat?m.compressedTexImage2D(m.TEXTURE_2D,h,e,c.width,c.height,0,c.data):m.texImage2D(m.TEXTURE_2D,h,
e,c.width,c.height,0,e,f,c.data);else if(0<g.length&&d){h=0;for(k=g.length;h<k;h++)c=g[h],m.texImage2D(m.TEXTURE_2D,h,e,e,f,c);a.generateMipmaps=!1}else m.texImage2D(m.TEXTURE_2D,0,e,e,f,a.image);a.generateMipmaps&&d&&m.generateMipmap(m.TEXTURE_2D);a.needsUpdate=!1;if(a.onUpdate)a.onUpdate()}else m.activeTexture(m.TEXTURE0+b),m.bindTexture(m.TEXTURE_2D,a.__webglTexture)};this.setRenderTarget=function(a){var b=a instanceof THREE.WebGLRenderTargetCube;if(a&&!a.__webglFramebuffer){void 0===a.depthBuffer&&
(a.depthBuffer=!0);void 0===a.stencilBuffer&&(a.stencilBuffer=!0);a.addEventListener("dispose",hc);a.__webglTexture=m.createTexture();G.info.memory.textures++;var c=THREE.Math.isPowerOfTwo(a.width)&&THREE.Math.isPowerOfTwo(a.height),d=B(a.format),e=B(a.type);if(b){a.__webglFramebuffer=[];a.__webglRenderbuffer=[];m.bindTexture(m.TEXTURE_CUBE_MAP,a.__webglTexture);E(m.TEXTURE_CUBE_MAP,a,c);for(var f=0;6>f;f++){a.__webglFramebuffer[f]=m.createFramebuffer();a.__webglRenderbuffer[f]=m.createRenderbuffer();
m.texImage2D(m.TEXTURE_CUBE_MAP_POSITIVE_X+f,0,d,a.width,a.height,0,d,e,null);var g=a,h=m.TEXTURE_CUBE_MAP_POSITIVE_X+f;m.bindFramebuffer(m.FRAMEBUFFER,a.__webglFramebuffer[f]);m.framebufferTexture2D(m.FRAMEBUFFER,m.COLOR_ATTACHMENT0,h,g.__webglTexture,0);Q(a.__webglRenderbuffer[f],a)}c&&m.generateMipmap(m.TEXTURE_CUBE_MAP)}else a.__webglFramebuffer=m.createFramebuffer(),a.__webglRenderbuffer=a.shareDepthFrom?a.shareDepthFrom.__webglRenderbuffer:m.createRenderbuffer(),m.bindTexture(m.TEXTURE_2D,a.__webglTexture),
E(m.TEXTURE_2D,a,c),m.texImage2D(m.TEXTURE_2D,0,d,a.width,a.height,0,d,e,null),d=m.TEXTURE_2D,m.bindFramebuffer(m.FRAMEBUFFER,a.__webglFramebuffer),m.framebufferTexture2D(m.FRAMEBUFFER,m.COLOR_ATTACHMENT0,d,a.__webglTexture,0),a.shareDepthFrom?a.depthBuffer&&!a.stencilBuffer?m.framebufferRenderbuffer(m.FRAMEBUFFER,m.DEPTH_ATTACHMENT,m.RENDERBUFFER,a.__webglRenderbuffer):a.depthBuffer&&a.stencilBuffer&&m.framebufferRenderbuffer(m.FRAMEBUFFER,m.DEPTH_STENCIL_ATTACHMENT,m.RENDERBUFFER,a.__webglRenderbuffer):
Q(a.__webglRenderbuffer,a),c&&m.generateMipmap(m.TEXTURE_2D);b?m.bindTexture(m.TEXTURE_CUBE_MAP,null):m.bindTexture(m.TEXTURE_2D,null);m.bindRenderbuffer(m.RENDERBUFFER,null);m.bindFramebuffer(m.FRAMEBUFFER,null)}a?(b=b?a.__webglFramebuffer[a.activeCubeFace]:a.__webglFramebuffer,c=a.width,a=a.height,e=d=0):(b=null,c=wb,a=sb,d=ma,e=Ja);b!==Za&&(m.bindFramebuffer(m.FRAMEBUFFER,b),m.viewport(d,e,c,a),Za=b);Hb=c;Ib=a};this.shadowMapPlugin=new THREE.ShadowMapPlugin;this.addPrePlugin(this.shadowMapPlugin);
this.addPostPlugin(new THREE.SpritePlugin);this.addPostPlugin(new THREE.LensFlarePlugin)};
THREE.WebGLRenderTarget=function(a,b,c){this.width=a;this.height=b;c=c||{};this.wrapS=void 0!==c.wrapS?c.wrapS:THREE.ClampToEdgeWrapping;this.wrapT=void 0!==c.wrapT?c.wrapT:THREE.ClampToEdgeWrapping;this.magFilter=void 0!==c.magFilter?c.magFilter:THREE.LinearFilter;this.minFilter=void 0!==c.minFilter?c.minFilter:THREE.LinearMipMapLinearFilter;this.anisotropy=void 0!==c.anisotropy?c.anisotropy:1;this.offset=new THREE.Vector2(0,0);this.repeat=new THREE.Vector2(1,1);this.format=void 0!==c.format?c.format:
THREE.RGBAFormat;this.type=void 0!==c.type?c.type:THREE.UnsignedByteType;this.depthBuffer=void 0!==c.depthBuffer?c.depthBuffer:!0;this.stencilBuffer=void 0!==c.stencilBuffer?c.stencilBuffer:!0;this.generateMipmaps=!0;this.shareDepthFrom=null};
THREE.WebGLRenderTarget.prototype={constructor:THREE.WebGLRenderTarget,setSize:function(a,b){this.width=a;this.height=b},clone:function(){var a=new THREE.WebGLRenderTarget(this.width,this.height);a.wrapS=this.wrapS;a.wrapT=this.wrapT;a.magFilter=this.magFilter;a.minFilter=this.minFilter;a.anisotropy=this.anisotropy;a.offset.copy(this.offset);a.repeat.copy(this.repeat);a.format=this.format;a.type=this.type;a.depthBuffer=this.depthBuffer;a.stencilBuffer=this.stencilBuffer;a.generateMipmaps=this.generateMipmaps;
a.shareDepthFrom=this.shareDepthFrom;return a},dispose:function(){this.dispatchEvent({type:"dispose"})}};THREE.EventDispatcher.prototype.apply(THREE.WebGLRenderTarget.prototype);THREE.WebGLRenderTargetCube=function(a,b,c){THREE.WebGLRenderTarget.call(this,a,b,c);this.activeCubeFace=0};THREE.WebGLRenderTargetCube.prototype=Object.create(THREE.WebGLRenderTarget.prototype);
THREE.WebGLProgram=function(){var a=0;return function(b,c,d,e){var f=b.context,g=d.defines,h=d.__webglShader.uniforms,k=d.attributes,l=d.__webglShader.vertexShader,n=d.__webglShader.fragmentShader,q=d.index0AttributeName;void 0===q&&!0===e.morphTargets&&(q="position");var r="SHADOWMAP_TYPE_BASIC";e.shadowMapType===THREE.PCFShadowMap?r="SHADOWMAP_TYPE_PCF":e.shadowMapType===THREE.PCFSoftShadowMap&&(r="SHADOWMAP_TYPE_PCF_SOFT");var t,s;t=[];for(var p in g)s=g[p],!1!==s&&(s="#define "+p+" "+s,t.push(s));
t=t.join("\n");g=f.createProgram();d instanceof THREE.RawShaderMaterial?b=d="":(d=["precision "+e.precision+" float;","precision "+e.precision+" int;",t,e.supportsVertexTextures?"#define VERTEX_TEXTURES":"",b.gammaInput?"#define GAMMA_INPUT":"",b.gammaOutput?"#define GAMMA_OUTPUT":"","#define MAX_DIR_LIGHTS "+e.maxDirLights,"#define MAX_POINT_LIGHTS "+e.maxPointLights,"#define MAX_SPOT_LIGHTS "+e.maxSpotLights,"#define MAX_HEMI_LIGHTS "+e.maxHemiLights,"#define MAX_SHADOWS "+e.maxShadows,"#define MAX_BONES "+
e.maxBones,e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.lightMap?"#define USE_LIGHTMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.vertexColors?"#define USE_COLOR":"",e.skinning?"#define USE_SKINNING":"",e.useVertexTexture?"#define BONE_TEXTURE":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals?"#define USE_MORPHNORMALS":"",e.wrapAround?"#define WRAP_AROUND":
"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+r:"",e.shadowMapDebug?"#define SHADOWMAP_DEBUG":"",e.shadowMapCascade?"#define SHADOWMAP_CASCADE":"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 viewMatrix;\nuniform mat3 normalMatrix;\nuniform vec3 cameraPosition;\nattribute vec3 position;\nattribute vec3 normal;\nattribute vec2 uv;\nattribute vec2 uv2;\n#ifdef USE_COLOR\n\tattribute vec3 color;\n#endif\n#ifdef USE_MORPHTARGETS\n\tattribute vec3 morphTarget0;\n\tattribute vec3 morphTarget1;\n\tattribute vec3 morphTarget2;\n\tattribute vec3 morphTarget3;\n\t#ifdef USE_MORPHNORMALS\n\t\tattribute vec3 morphNormal0;\n\t\tattribute vec3 morphNormal1;\n\t\tattribute vec3 morphNormal2;\n\t\tattribute vec3 morphNormal3;\n\t#else\n\t\tattribute vec3 morphTarget4;\n\t\tattribute vec3 morphTarget5;\n\t\tattribute vec3 morphTarget6;\n\t\tattribute vec3 morphTarget7;\n\t#endif\n#endif\n#ifdef USE_SKINNING\n\tattribute vec4 skinIndex;\n\tattribute vec4 skinWeight;\n#endif\n"].join("\n"),
b=["precision "+e.precision+" float;","precision "+e.precision+" int;",e.bumpMap||e.normalMap?"#extension GL_OES_standard_derivatives : enable":"",t,"#define MAX_DIR_LIGHTS "+e.maxDirLights,"#define MAX_POINT_LIGHTS "+e.maxPointLights,"#define MAX_SPOT_LIGHTS "+e.maxSpotLights,"#define MAX_HEMI_LIGHTS "+e.maxHemiLights,"#define MAX_SHADOWS "+e.maxShadows,e.alphaTest?"#define ALPHATEST "+e.alphaTest:"",b.gammaInput?"#define GAMMA_INPUT":"",b.gammaOutput?"#define GAMMA_OUTPUT":"",e.useFog&&e.fog?"#define USE_FOG":
"",e.useFog&&e.fogExp?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.lightMap?"#define USE_LIGHTMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.vertexColors?"#define USE_COLOR":"",e.metal?"#define METAL":"",e.wrapAround?"#define WRAP_AROUND":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":
"",e.shadowMapEnabled?"#define "+r:"",e.shadowMapDebug?"#define SHADOWMAP_DEBUG":"",e.shadowMapCascade?"#define SHADOWMAP_CASCADE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;\nuniform vec3 cameraPosition;\n"].join("\n"));l=new THREE.WebGLShader(f,f.VERTEX_SHADER,d+l);n=new THREE.WebGLShader(f,f.FRAGMENT_SHADER,b+n);f.attachShader(g,l);f.attachShader(g,n);void 0!==q&&f.bindAttribLocation(g,0,q);f.linkProgram(g);!1===f.getProgramParameter(g,f.LINK_STATUS)&&(console.error("THREE.WebGLProgram: Could not initialise shader."),
console.error("gl.VALIDATE_STATUS",f.getProgramParameter(g,f.VALIDATE_STATUS)),console.error("gl.getError()",f.getError()));""!==f.getProgramInfoLog(g)&&console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()",f.getProgramInfoLog(g));f.deleteShader(l);f.deleteShader(n);q="viewMatrix modelViewMatrix projectionMatrix normalMatrix modelMatrix cameraPosition morphTargetInfluences bindMatrix bindMatrixInverse".split(" ");e.useVertexTexture?(q.push("boneTexture"),q.push("boneTextureWidth"),q.push("boneTextureHeight")):
q.push("boneGlobalMatrices");e.logarithmicDepthBuffer&&q.push("logDepthBufFC");for(var v in h)q.push(v);h=q;v={};q=0;for(b=h.length;q<b;q++)r=h[q],v[r]=f.getUniformLocation(g,r);this.uniforms=v;q="position normal uv uv2 tangent color skinIndex skinWeight lineDistance".split(" ");for(h=0;h<e.maxMorphTargets;h++)q.push("morphTarget"+h);for(h=0;h<e.maxMorphNormals;h++)q.push("morphNormal"+h);for(var w in k)q.push(w);e=q;k={};w=0;for(h=e.length;w<h;w++)v=e[w],k[v]=f.getAttribLocation(g,v);this.attributes=
k;this.id=a++;this.code=c;this.usedTimes=1;this.program=g;this.vertexShader=l;this.fragmentShader=n;return this}}();
THREE.WebGLShader=function(){var a=function(a){a=a.split("\n");for(var c=0;c<a.length;c++)a[c]=c+1+": "+a[c];return a.join("\n")};return function(b,c,d){c=b.createShader(c);b.shaderSource(c,d);b.compileShader(c);!1===b.getShaderParameter(c,b.COMPILE_STATUS)&&console.error("THREE.WebGLShader: Shader couldn't compile.");""!==b.getShaderInfoLog(c)&&(console.warn("THREE.WebGLShader: gl.getShaderInfoLog()",b.getShaderInfoLog(c)),console.warn(a(d)));return c}}();
THREE.RenderableVertex=function(){this.position=new THREE.Vector3;this.positionWorld=new THREE.Vector3;this.positionScreen=new THREE.Vector4;this.visible=!0};THREE.RenderableVertex.prototype.copy=function(a){this.positionWorld.copy(a.positionWorld);this.positionScreen.copy(a.positionScreen)};
THREE.RenderableFace=function(){this.id=0;this.v1=new THREE.RenderableVertex;this.v2=new THREE.RenderableVertex;this.v3=new THREE.RenderableVertex;this.normalModel=new THREE.Vector3;this.vertexNormalsModel=[new THREE.Vector3,new THREE.Vector3,new THREE.Vector3];this.vertexNormalsLength=0;this.color=new THREE.Color;this.material=null;this.uvs=[new THREE.Vector2,new THREE.Vector2,new THREE.Vector2];this.z=0};THREE.RenderableObject=function(){this.id=0;this.object=null;this.z=0};
THREE.RenderableSprite=function(){this.id=0;this.object=null;this.rotation=this.z=this.y=this.x=0;this.scale=new THREE.Vector2;this.material=null};THREE.RenderableLine=function(){this.id=0;this.v1=new THREE.RenderableVertex;this.v2=new THREE.RenderableVertex;this.vertexColors=[new THREE.Color,new THREE.Color];this.material=null;this.z=0};
THREE.GeometryUtils={merge:function(a,b,c){console.warn("THREE.GeometryUtils: .merge() has been moved to Geometry. Use geometry.merge( geometry2, matrix, materialIndexOffset ) instead.");var d;b instanceof THREE.Mesh&&(b.matrixAutoUpdate&&b.updateMatrix(),d=b.matrix,b=b.geometry);a.merge(b,d,c)},center:function(a){console.warn("THREE.GeometryUtils: .center() has been moved to Geometry. Use geometry.center() instead.");return a.center()}};
THREE.ImageUtils={crossOrigin:void 0,loadTexture:function(a,b,c,d){var e=new THREE.ImageLoader;e.crossOrigin=this.crossOrigin;var f=new THREE.Texture(void 0,b);e.load(a,function(a){f.image=a;f.needsUpdate=!0;c&&c(f)},void 0,function(a){d&&d(a)});f.sourceFile=a;return f},loadTextureCube:function(a,b,c,d){var e=new THREE.ImageLoader;e.crossOrigin=this.crossOrigin;var f=new THREE.CubeTexture([],b);f.flipY=!1;var g=0;b=function(b){e.load(a[b],function(a){f.images[b]=a;g+=1;6===g&&(f.needsUpdate=!0,c&&
c(f))})};d=0;for(var h=a.length;d<h;++d)b(d);return f},loadCompressedTexture:function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")},loadCompressedTextureCube:function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")},getNormalMap:function(a,b){var c=function(a){var b=Math.sqrt(a[0]*a[0]+a[1]*a[1]+a[2]*a[2]);return[a[0]/b,a[1]/b,a[2]/b]};b|=1;var d=a.width,e=a.height,f=document.createElement("canvas");
f.width=d;f.height=e;var g=f.getContext("2d");g.drawImage(a,0,0);for(var h=g.getImageData(0,0,d,e).data,k=g.createImageData(d,e),l=k.data,n=0;n<d;n++)for(var q=0;q<e;q++){var r=0>q-1?0:q-1,t=q+1>e-1?e-1:q+1,s=0>n-1?0:n-1,p=n+1>d-1?d-1:n+1,v=[],w=[0,0,h[4*(q*d+n)]/255*b];v.push([-1,0,h[4*(q*d+s)]/255*b]);v.push([-1,-1,h[4*(r*d+s)]/255*b]);v.push([0,-1,h[4*(r*d+n)]/255*b]);v.push([1,-1,h[4*(r*d+p)]/255*b]);v.push([1,0,h[4*(q*d+p)]/255*b]);v.push([1,1,h[4*(t*d+p)]/255*b]);v.push([0,1,h[4*(t*d+n)]/255*
b]);v.push([-1,1,h[4*(t*d+s)]/255*b]);r=[];s=v.length;for(t=0;t<s;t++){var p=v[t],u=v[(t+1)%s],p=[p[0]-w[0],p[1]-w[1],p[2]-w[2]],u=[u[0]-w[0],u[1]-w[1],u[2]-w[2]];r.push(c([p[1]*u[2]-p[2]*u[1],p[2]*u[0]-p[0]*u[2],p[0]*u[1]-p[1]*u[0]]))}v=[0,0,0];for(t=0;t<r.length;t++)v[0]+=r[t][0],v[1]+=r[t][1],v[2]+=r[t][2];v[0]/=r.length;v[1]/=r.length;v[2]/=r.length;w=4*(q*d+n);l[w]=(v[0]+1)/2*255|0;l[w+1]=(v[1]+1)/2*255|0;l[w+2]=255*v[2]|0;l[w+3]=255}g.putImageData(k,0,0);return f},generateDataTexture:function(a,
b,c){var d=a*b,e=new Uint8Array(3*d),f=Math.floor(255*c.r),g=Math.floor(255*c.g);c=Math.floor(255*c.b);for(var h=0;h<d;h++)e[3*h]=f,e[3*h+1]=g,e[3*h+2]=c;a=new THREE.DataTexture(e,a,b,THREE.RGBFormat);a.needsUpdate=!0;return a}};
THREE.SceneUtils={createMultiMaterialObject:function(a,b){for(var c=new THREE.Object3D,d=0,e=b.length;d<e;d++)c.add(new THREE.Mesh(a,b[d]));return c},detach:function(a,b,c){a.applyMatrix(b.matrixWorld);b.remove(a);c.add(a)},attach:function(a,b,c){var d=new THREE.Matrix4;d.getInverse(c.matrixWorld);a.applyMatrix(d);b.remove(a);c.add(a)}};
THREE.FontUtils={faces:{},face:"helvetiker",weight:"normal",style:"normal",size:150,divisions:10,getFace:function(){try{return this.faces[this.face][this.weight][this.style]}catch(a){throw"The font "+this.face+" with "+this.weight+" weight and "+this.style+" style is missing.";}},loadFace:function(a){var b=a.familyName.toLowerCase();this.faces[b]=this.faces[b]||{};this.faces[b][a.cssFontWeight]=this.faces[b][a.cssFontWeight]||{};this.faces[b][a.cssFontWeight][a.cssFontStyle]=a;return this.faces[b][a.cssFontWeight][a.cssFontStyle]=
a},drawText:function(a){var b=this.getFace(),c=this.size/b.resolution,d=0,e=String(a).split(""),f=e.length,g=[];for(a=0;a<f;a++){var h=new THREE.Path,h=this.extractGlyphPoints(e[a],b,c,d,h),d=d+h.offset;g.push(h.path)}return{paths:g,offset:d/2}},extractGlyphPoints:function(a,b,c,d,e){var f=[],g,h,k,l,n,q,r,t,s,p,v,w=b.glyphs[a]||b.glyphs["?"];if(w){if(w.o)for(b=w._cachedOutline||(w._cachedOutline=w.o.split(" ")),l=b.length,a=0;a<l;)switch(k=b[a++],k){case "m":k=b[a++]*c+d;n=b[a++]*c;e.moveTo(k,n);
break;case "l":k=b[a++]*c+d;n=b[a++]*c;e.lineTo(k,n);break;case "q":k=b[a++]*c+d;n=b[a++]*c;t=b[a++]*c+d;s=b[a++]*c;e.quadraticCurveTo(t,s,k,n);if(g=f[f.length-1])for(q=g.x,r=g.y,g=1,h=this.divisions;g<=h;g++){var u=g/h;THREE.Shape.Utils.b2(u,q,t,k);THREE.Shape.Utils.b2(u,r,s,n)}break;case "b":if(k=b[a++]*c+d,n=b[a++]*c,t=b[a++]*c+d,s=b[a++]*c,p=b[a++]*c+d,v=b[a++]*c,e.bezierCurveTo(t,s,p,v,k,n),g=f[f.length-1])for(q=g.x,r=g.y,g=1,h=this.divisions;g<=h;g++)u=g/h,THREE.Shape.Utils.b3(u,q,t,p,k),THREE.Shape.Utils.b3(u,
r,s,v,n)}return{offset:w.ha*c,path:e}}}};
THREE.FontUtils.generateShapes=function(a,b){b=b||{};var c=void 0!==b.curveSegments?b.curveSegments:4,d=void 0!==b.font?b.font:"helvetiker",e=void 0!==b.weight?b.weight:"normal",f=void 0!==b.style?b.style:"normal";THREE.FontUtils.size=void 0!==b.size?b.size:100;THREE.FontUtils.divisions=c;THREE.FontUtils.face=d;THREE.FontUtils.weight=e;THREE.FontUtils.style=f;c=THREE.FontUtils.drawText(a).paths;d=[];e=0;for(f=c.length;e<f;e++)Array.prototype.push.apply(d,c[e].toShapes());return d};
(function(a){var b=function(a){for(var b=a.length,e=0,f=b-1,g=0;g<b;f=g++)e+=a[f].x*a[g].y-a[g].x*a[f].y;return 0.5*e};a.Triangulate=function(a,d){var e=a.length;if(3>e)return null;var f=[],g=[],h=[],k,l,n;if(0<b(a))for(l=0;l<e;l++)g[l]=l;else for(l=0;l<e;l++)g[l]=e-1-l;var q=2*e;for(l=e-1;2<e;){if(0>=q--){console.log("Warning, unable to triangulate polygon!");break}k=l;e<=k&&(k=0);l=k+1;e<=l&&(l=0);n=l+1;e<=n&&(n=0);var r;a:{var t=r=void 0,s=void 0,p=void 0,v=void 0,w=void 0,u=void 0,D=void 0,A=
void 0,t=a[g[k]].x,s=a[g[k]].y,p=a[g[l]].x,v=a[g[l]].y,w=a[g[n]].x,u=a[g[n]].y;if(1E-10>(p-t)*(u-s)-(v-s)*(w-t))r=!1;else{var x=void 0,C=void 0,I=void 0,z=void 0,y=void 0,K=void 0,N=void 0,ba=void 0,P=void 0,O=void 0,P=ba=N=A=D=void 0,x=w-p,C=u-v,I=t-w,z=s-u,y=p-t,K=v-s;for(r=0;r<e;r++)if(D=a[g[r]].x,A=a[g[r]].y,!(D===t&&A===s||D===p&&A===v||D===w&&A===u)&&(N=D-t,ba=A-s,P=D-p,O=A-v,D-=w,A-=u,P=x*O-C*P,N=y*ba-K*N,ba=I*A-z*D,-1E-10<=P&&-1E-10<=ba&&-1E-10<=N)){r=!1;break a}r=!0}}if(r){f.push([a[g[k]],
a[g[l]],a[g[n]]]);h.push([g[k],g[l],g[n]]);k=l;for(n=l+1;n<e;k++,n++)g[k]=g[n];e--;q=2*e}}return d?h:f};a.Triangulate.area=b;return a})(THREE.FontUtils);self._typeface_js={faces:THREE.FontUtils.faces,loadFace:THREE.FontUtils.loadFace};THREE.typeface_js=self._typeface_js;THREE.Curve=function(){};THREE.Curve.prototype.getPoint=function(a){console.log("Warning, getPoint() not implemented!");return null};THREE.Curve.prototype.getPointAt=function(a){a=this.getUtoTmapping(a);return this.getPoint(a)};
THREE.Curve.prototype.getPoints=function(a){a||(a=5);var b,c=[];for(b=0;b<=a;b++)c.push(this.getPoint(b/a));return c};THREE.Curve.prototype.getSpacedPoints=function(a){a||(a=5);var b,c=[];for(b=0;b<=a;b++)c.push(this.getPointAt(b/a));return c};THREE.Curve.prototype.getLength=function(){var a=this.getLengths();return a[a.length-1]};
THREE.Curve.prototype.getLengths=function(a){a||(a=this.__arcLengthDivisions?this.__arcLengthDivisions:200);if(this.cacheArcLengths&&this.cacheArcLengths.length==a+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;var b=[],c,d=this.getPoint(0),e,f=0;b.push(0);for(e=1;e<=a;e++)c=this.getPoint(e/a),f+=c.distanceTo(d),b.push(f),d=c;return this.cacheArcLengths=b};THREE.Curve.prototype.updateArcLengths=function(){this.needsUpdate=!0;this.getLengths()};
THREE.Curve.prototype.getUtoTmapping=function(a,b){var c=this.getLengths(),d=0,e=c.length,f;f=b?b:a*c[e-1];for(var g=0,h=e-1,k;g<=h;)if(d=Math.floor(g+(h-g)/2),k=c[d]-f,0>k)g=d+1;else if(0<k)h=d-1;else{h=d;break}d=h;if(c[d]==f)return d/(e-1);g=c[d];return c=(d+(f-g)/(c[d+1]-g))/(e-1)};THREE.Curve.prototype.getTangent=function(a){var b=a-1E-4;a+=1E-4;0>b&&(b=0);1<a&&(a=1);b=this.getPoint(b);return this.getPoint(a).clone().sub(b).normalize()};
THREE.Curve.prototype.getTangentAt=function(a){a=this.getUtoTmapping(a);return this.getTangent(a)};
THREE.Curve.Utils={tangentQuadraticBezier:function(a,b,c,d){return 2*(1-a)*(c-b)+2*a*(d-c)},tangentCubicBezier:function(a,b,c,d,e){return-3*b*(1-a)*(1-a)+3*c*(1-a)*(1-a)-6*a*c*(1-a)+6*a*d*(1-a)-3*a*a*d+3*a*a*e},tangentSpline:function(a,b,c,d,e){return 6*a*a-6*a+(3*a*a-4*a+1)+(-6*a*a+6*a)+(3*a*a-2*a)},interpolate:function(a,b,c,d,e){a=0.5*(c-a);d=0.5*(d-b);var f=e*e;return(2*b-2*c+a+d)*e*f+(-3*b+3*c-2*a-d)*f+a*e+b}};
THREE.Curve.create=function(a,b){a.prototype=Object.create(THREE.Curve.prototype);a.prototype.getPoint=b;return a};THREE.CurvePath=function(){this.curves=[];this.bends=[];this.autoClose=!1};THREE.CurvePath.prototype=Object.create(THREE.Curve.prototype);THREE.CurvePath.prototype.add=function(a){this.curves.push(a)};THREE.CurvePath.prototype.checkConnection=function(){};
THREE.CurvePath.prototype.closePath=function(){var a=this.curves[0].getPoint(0),b=this.curves[this.curves.length-1].getPoint(1);a.equals(b)||this.curves.push(new THREE.LineCurve(b,a))};THREE.CurvePath.prototype.getPoint=function(a){var b=a*this.getLength(),c=this.getCurveLengths();for(a=0;a<c.length;){if(c[a]>=b)return b=c[a]-b,a=this.curves[a],b=1-b/a.getLength(),a.getPointAt(b);a++}return null};THREE.CurvePath.prototype.getLength=function(){var a=this.getCurveLengths();return a[a.length-1]};
THREE.CurvePath.prototype.getCurveLengths=function(){if(this.cacheLengths&&this.cacheLengths.length==this.curves.length)return this.cacheLengths;var a=[],b=0,c,d=this.curves.length;for(c=0;c<d;c++)b+=this.curves[c].getLength(),a.push(b);return this.cacheLengths=a};
THREE.CurvePath.prototype.getBoundingBox=function(){var a=this.getPoints(),b,c,d,e,f,g;b=c=Number.NEGATIVE_INFINITY;e=f=Number.POSITIVE_INFINITY;var h,k,l,n,q=a[0]instanceof THREE.Vector3;n=q?new THREE.Vector3:new THREE.Vector2;k=0;for(l=a.length;k<l;k++)h=a[k],h.x>b?b=h.x:h.x<e&&(e=h.x),h.y>c?c=h.y:h.y<f&&(f=h.y),q&&(h.z>d?d=h.z:h.z<g&&(g=h.z)),n.add(h);a={minX:e,minY:f,maxX:b,maxY:c};q&&(a.maxZ=d,a.minZ=g);return a};
THREE.CurvePath.prototype.createPointsGeometry=function(a){a=this.getPoints(a,!0);return this.createGeometry(a)};THREE.CurvePath.prototype.createSpacedPointsGeometry=function(a){a=this.getSpacedPoints(a,!0);return this.createGeometry(a)};THREE.CurvePath.prototype.createGeometry=function(a){for(var b=new THREE.Geometry,c=0;c<a.length;c++)b.vertices.push(new THREE.Vector3(a[c].x,a[c].y,a[c].z||0));return b};THREE.CurvePath.prototype.addWrapPath=function(a){this.bends.push(a)};
THREE.CurvePath.prototype.getTransformedPoints=function(a,b){var c=this.getPoints(a),d,e;b||(b=this.bends);d=0;for(e=b.length;d<e;d++)c=this.getWrapPoints(c,b[d]);return c};THREE.CurvePath.prototype.getTransformedSpacedPoints=function(a,b){var c=this.getSpacedPoints(a),d,e;b||(b=this.bends);d=0;for(e=b.length;d<e;d++)c=this.getWrapPoints(c,b[d]);return c};
THREE.CurvePath.prototype.getWrapPoints=function(a,b){var c=this.getBoundingBox(),d,e,f,g,h,k;d=0;for(e=a.length;d<e;d++)f=a[d],g=f.x,h=f.y,k=g/c.maxX,k=b.getUtoTmapping(k,g),g=b.getPoint(k),k=b.getTangent(k),k.set(-k.y,k.x).multiplyScalar(h),f.x=g.x+k.x,f.y=g.y+k.y;return a};THREE.Gyroscope=function(){THREE.Object3D.call(this)};THREE.Gyroscope.prototype=Object.create(THREE.Object3D.prototype);
THREE.Gyroscope.prototype.updateMatrixWorld=function(a){this.matrixAutoUpdate&&this.updateMatrix();if(this.matrixWorldNeedsUpdate||a)this.parent?(this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorld.decompose(this.translationWorld,this.quaternionWorld,this.scaleWorld),this.matrix.decompose(this.translationObject,this.quaternionObject,this.scaleObject),this.matrixWorld.compose(this.translationWorld,this.quaternionObject,this.scaleWorld)):this.matrixWorld.copy(this.matrix),
this.matrixWorldNeedsUpdate=!1,a=!0;for(var b=0,c=this.children.length;b<c;b++)this.children[b].updateMatrixWorld(a)};THREE.Gyroscope.prototype.translationWorld=new THREE.Vector3;THREE.Gyroscope.prototype.translationObject=new THREE.Vector3;THREE.Gyroscope.prototype.quaternionWorld=new THREE.Quaternion;THREE.Gyroscope.prototype.quaternionObject=new THREE.Quaternion;THREE.Gyroscope.prototype.scaleWorld=new THREE.Vector3;THREE.Gyroscope.prototype.scaleObject=new THREE.Vector3;
THREE.Path=function(a){THREE.CurvePath.call(this);this.actions=[];a&&this.fromPoints(a)};THREE.Path.prototype=Object.create(THREE.CurvePath.prototype);THREE.PathActions={MOVE_TO:"moveTo",LINE_TO:"lineTo",QUADRATIC_CURVE_TO:"quadraticCurveTo",BEZIER_CURVE_TO:"bezierCurveTo",CSPLINE_THRU:"splineThru",ARC:"arc",ELLIPSE:"ellipse"};THREE.Path.prototype.fromPoints=function(a){this.moveTo(a[0].x,a[0].y);for(var b=1,c=a.length;b<c;b++)this.lineTo(a[b].x,a[b].y)};
THREE.Path.prototype.moveTo=function(a,b){var c=Array.prototype.slice.call(arguments);this.actions.push({action:THREE.PathActions.MOVE_TO,args:c})};THREE.Path.prototype.lineTo=function(a,b){var c=Array.prototype.slice.call(arguments),d=this.actions[this.actions.length-1].args,d=new THREE.LineCurve(new THREE.Vector2(d[d.length-2],d[d.length-1]),new THREE.Vector2(a,b));this.curves.push(d);this.actions.push({action:THREE.PathActions.LINE_TO,args:c})};
THREE.Path.prototype.quadraticCurveTo=function(a,b,c,d){var e=Array.prototype.slice.call(arguments),f=this.actions[this.actions.length-1].args,f=new THREE.QuadraticBezierCurve(new THREE.Vector2(f[f.length-2],f[f.length-1]),new THREE.Vector2(a,b),new THREE.Vector2(c,d));this.curves.push(f);this.actions.push({action:THREE.PathActions.QUADRATIC_CURVE_TO,args:e})};
THREE.Path.prototype.bezierCurveTo=function(a,b,c,d,e,f){var g=Array.prototype.slice.call(arguments),h=this.actions[this.actions.length-1].args,h=new THREE.CubicBezierCurve(new THREE.Vector2(h[h.length-2],h[h.length-1]),new THREE.Vector2(a,b),new THREE.Vector2(c,d),new THREE.Vector2(e,f));this.curves.push(h);this.actions.push({action:THREE.PathActions.BEZIER_CURVE_TO,args:g})};
THREE.Path.prototype.splineThru=function(a){var b=Array.prototype.slice.call(arguments),c=this.actions[this.actions.length-1].args,c=[new THREE.Vector2(c[c.length-2],c[c.length-1])];Array.prototype.push.apply(c,a);c=new THREE.SplineCurve(c);this.curves.push(c);this.actions.push({action:THREE.PathActions.CSPLINE_THRU,args:b})};THREE.Path.prototype.arc=function(a,b,c,d,e,f){var g=this.actions[this.actions.length-1].args;this.absarc(a+g[g.length-2],b+g[g.length-1],c,d,e,f)};
THREE.Path.prototype.absarc=function(a,b,c,d,e,f){this.absellipse(a,b,c,c,d,e,f)};THREE.Path.prototype.ellipse=function(a,b,c,d,e,f,g){var h=this.actions[this.actions.length-1].args;this.absellipse(a+h[h.length-2],b+h[h.length-1],c,d,e,f,g)};THREE.Path.prototype.absellipse=function(a,b,c,d,e,f,g){var h=Array.prototype.slice.call(arguments),k=new THREE.EllipseCurve(a,b,c,d,e,f,g);this.curves.push(k);k=k.getPoint(1);h.push(k.x);h.push(k.y);this.actions.push({action:THREE.PathActions.ELLIPSE,args:h})};
THREE.Path.prototype.getSpacedPoints=function(a,b){a||(a=40);for(var c=[],d=0;d<a;d++)c.push(this.getPoint(d/a));return c};
THREE.Path.prototype.getPoints=function(a,b){if(this.useSpacedPoints)return console.log("tata"),this.getSpacedPoints(a,b);a=a||12;var c=[],d,e,f,g,h,k,l,n,q,r,t,s,p;d=0;for(e=this.actions.length;d<e;d++)switch(f=this.actions[d],g=f.action,f=f.args,g){case THREE.PathActions.MOVE_TO:c.push(new THREE.Vector2(f[0],f[1]));break;case THREE.PathActions.LINE_TO:c.push(new THREE.Vector2(f[0],f[1]));break;case THREE.PathActions.QUADRATIC_CURVE_TO:h=f[2];k=f[3];q=f[0];r=f[1];0<c.length?(g=c[c.length-1],t=g.x,
s=g.y):(g=this.actions[d-1].args,t=g[g.length-2],s=g[g.length-1]);for(f=1;f<=a;f++)p=f/a,g=THREE.Shape.Utils.b2(p,t,q,h),p=THREE.Shape.Utils.b2(p,s,r,k),c.push(new THREE.Vector2(g,p));break;case THREE.PathActions.BEZIER_CURVE_TO:h=f[4];k=f[5];q=f[0];r=f[1];l=f[2];n=f[3];0<c.length?(g=c[c.length-1],t=g.x,s=g.y):(g=this.actions[d-1].args,t=g[g.length-2],s=g[g.length-1]);for(f=1;f<=a;f++)p=f/a,g=THREE.Shape.Utils.b3(p,t,q,l,h),p=THREE.Shape.Utils.b3(p,s,r,n,k),c.push(new THREE.Vector2(g,p));break;case THREE.PathActions.CSPLINE_THRU:g=
this.actions[d-1].args;p=[new THREE.Vector2(g[g.length-2],g[g.length-1])];g=a*f[0].length;p=p.concat(f[0]);p=new THREE.SplineCurve(p);for(f=1;f<=g;f++)c.push(p.getPointAt(f/g));break;case THREE.PathActions.ARC:h=f[0];k=f[1];r=f[2];l=f[3];g=f[4];q=!!f[5];t=g-l;s=2*a;for(f=1;f<=s;f++)p=f/s,q||(p=1-p),p=l+p*t,g=h+r*Math.cos(p),p=k+r*Math.sin(p),c.push(new THREE.Vector2(g,p));break;case THREE.PathActions.ELLIPSE:for(h=f[0],k=f[1],r=f[2],n=f[3],l=f[4],g=f[5],q=!!f[6],t=g-l,s=2*a,f=1;f<=s;f++)p=f/s,q||
(p=1-p),p=l+p*t,g=h+r*Math.cos(p),p=k+n*Math.sin(p),c.push(new THREE.Vector2(g,p))}d=c[c.length-1];1E-10>Math.abs(d.x-c[0].x)&&1E-10>Math.abs(d.y-c[0].y)&&c.splice(c.length-1,1);b&&c.push(c[0]);return c};
THREE.Path.prototype.toShapes=function(a,b){function c(a){for(var b=[],c=0,d=a.length;c<d;c++){var e=a[c],f=new THREE.Shape;f.actions=e.actions;f.curves=e.curves;b.push(f)}return b}function d(a,b){for(var c=b.length,d=!1,e=c-1,f=0;f<c;e=f++){var g=b[e],h=b[f],k=h.x-g.x,l=h.y-g.y;if(1E-10<Math.abs(l)){if(0>l&&(g=b[f],k=-k,h=b[e],l=-l),!(a.y<g.y||a.y>h.y))if(a.y==g.y){if(a.x==g.x)return!0}else{e=l*(a.x-g.x)-k*(a.y-g.y);if(0==e)return!0;0>e||(d=!d)}}else if(a.y==g.y&&(h.x<=a.x&&a.x<=g.x||g.x<=a.x&&a.x<=
h.x))return!0}return d}var e=function(a){var b,c,d,e,f=[],g=new THREE.Path;b=0;for(c=a.length;b<c;b++)d=a[b],e=d.args,d=d.action,d==THREE.PathActions.MOVE_TO&&0!=g.actions.length&&(f.push(g),g=new THREE.Path),g[d].apply(g,e);0!=g.actions.length&&f.push(g);return f}(this.actions);if(0==e.length)return[];if(!0===b)return c(e);var f,g,h,k=[];if(1==e.length)return g=e[0],h=new THREE.Shape,h.actions=g.actions,h.curves=g.curves,k.push(h),k;var l=!THREE.Shape.Utils.isClockWise(e[0].getPoints()),l=a?!l:l;
h=[];var n=[],q=[],r=0,t;n[r]=void 0;q[r]=[];var s,p;s=0;for(p=e.length;s<p;s++)g=e[s],t=g.getPoints(),f=THREE.Shape.Utils.isClockWise(t),(f=a?!f:f)?(!l&&n[r]&&r++,n[r]={s:new THREE.Shape,p:t},n[r].s.actions=g.actions,n[r].s.curves=g.curves,l&&r++,q[r]=[]):q[r].push({h:g,p:t[0]});if(!n[0])return c(e);if(1<n.length){s=!1;p=[];g=0;for(e=n.length;g<e;g++)h[g]=[];g=0;for(e=n.length;g<e;g++)for(f=q[g],l=0;l<f.length;l++){r=f[l];t=!0;for(var v=0;v<n.length;v++)d(r.p,n[v].p)&&(g!=v&&p.push({froms:g,tos:v,
hole:l}),t?(t=!1,h[v].push(r)):s=!0);t&&h[g].push(r)}0<p.length&&(s||(q=h))}s=0;for(p=n.length;s<p;s++)for(h=n[s].s,k.push(h),g=q[s],e=0,f=g.length;e<f;e++)h.holes.push(g[e].h);return k};THREE.Shape=function(){THREE.Path.apply(this,arguments);this.holes=[]};THREE.Shape.prototype=Object.create(THREE.Path.prototype);THREE.Shape.prototype.extrude=function(a){return new THREE.ExtrudeGeometry(this,a)};THREE.Shape.prototype.makeGeometry=function(a){return new THREE.ShapeGeometry(this,a)};
THREE.Shape.prototype.getPointsHoles=function(a){var b,c=this.holes.length,d=[];for(b=0;b<c;b++)d[b]=this.holes[b].getTransformedPoints(a,this.bends);return d};THREE.Shape.prototype.getSpacedPointsHoles=function(a){var b,c=this.holes.length,d=[];for(b=0;b<c;b++)d[b]=this.holes[b].getTransformedSpacedPoints(a,this.bends);return d};THREE.Shape.prototype.extractAllPoints=function(a){return{shape:this.getTransformedPoints(a),holes:this.getPointsHoles(a)}};
THREE.Shape.prototype.extractPoints=function(a){return this.useSpacedPoints?this.extractAllSpacedPoints(a):this.extractAllPoints(a)};THREE.Shape.prototype.extractAllSpacedPoints=function(a){return{shape:this.getTransformedSpacedPoints(a),holes:this.getSpacedPointsHoles(a)}};
THREE.Shape.Utils={triangulateShape:function(a,b){function c(a,b,c){return a.x!=b.x?a.x<b.x?a.x<=c.x&&c.x<=b.x:b.x<=c.x&&c.x<=a.x:a.y<b.y?a.y<=c.y&&c.y<=b.y:b.y<=c.y&&c.y<=a.y}function d(a,b,d,e,f){var g=b.x-a.x,h=b.y-a.y,k=e.x-d.x,l=e.y-d.y,n=a.x-d.x,q=a.y-d.y,I=h*k-g*l,z=h*n-g*q;if(1E-10<Math.abs(I)){if(0<I){if(0>z||z>I)return[];k=l*n-k*q;if(0>k||k>I)return[]}else{if(0<z||z<I)return[];k=l*n-k*q;if(0<k||k<I)return[]}if(0==k)return!f||0!=z&&z!=I?[a]:[];if(k==I)return!f||0!=z&&z!=I?[b]:[];if(0==z)return[d];
if(z==I)return[e];f=k/I;return[{x:a.x+f*g,y:a.y+f*h}]}if(0!=z||l*n!=k*q)return[];h=0==g&&0==h;k=0==k&&0==l;if(h&&k)return a.x!=d.x||a.y!=d.y?[]:[a];if(h)return c(d,e,a)?[a]:[];if(k)return c(a,b,d)?[d]:[];0!=g?(a.x<b.x?(g=a,k=a.x,h=b,a=b.x):(g=b,k=b.x,h=a,a=a.x),d.x<e.x?(b=d,I=d.x,l=e,d=e.x):(b=e,I=e.x,l=d,d=d.x)):(a.y<b.y?(g=a,k=a.y,h=b,a=b.y):(g=b,k=b.y,h=a,a=a.y),d.y<e.y?(b=d,I=d.y,l=e,d=e.y):(b=e,I=e.y,l=d,d=d.y));return k<=I?a<I?[]:a==I?f?[]:[b]:a<=d?[b,h]:[b,l]:k>d?[]:k==d?f?[]:[g]:a<=d?[g,h]:
[g,l]}function e(a,b,c,d){var e=b.x-a.x,f=b.y-a.y;b=c.x-a.x;c=c.y-a.y;var g=d.x-a.x;d=d.y-a.y;a=e*c-f*b;e=e*d-f*g;return 1E-10<Math.abs(a)?(b=g*c-d*b,0<a?0<=e&&0<=b:0<=e||0<=b):0<e}var f,g,h,k,l,n={};h=a.concat();f=0;for(g=b.length;f<g;f++)Array.prototype.push.apply(h,b[f]);f=0;for(g=h.length;f<g;f++)l=h[f].x+":"+h[f].y,void 0!==n[l]&&console.log("Duplicate point",l),n[l]=f;f=function(a,b){function c(a,b){var d=h.length-1,f=a-1;0>f&&(f=d);var g=a+1;g>d&&(g=0);d=e(h[a],h[f],h[g],k[b]);if(!d)return!1;
d=k.length-1;f=b-1;0>f&&(f=d);g=b+1;g>d&&(g=0);return(d=e(k[b],k[f],k[g],h[a]))?!0:!1}function f(a,b){var c,e;for(c=0;c<h.length;c++)if(e=c+1,e%=h.length,e=d(a,b,h[c],h[e],!0),0<e.length)return!0;return!1}function g(a,c){var e,f,h,k;for(e=0;e<l.length;e++)for(f=b[l[e]],h=0;h<f.length;h++)if(k=h+1,k%=f.length,k=d(a,c,f[h],f[k],!0),0<k.length)return!0;return!1}var h=a.concat(),k,l=[],n,q,C,I,z,y=[],K,N,ba,P=0;for(n=b.length;P<n;P++)l.push(P);K=0;for(var O=2*l.length;0<l.length;){O--;if(0>O){console.log("Infinite Loop! Holes left:"+
l.length+", Probably Hole outside Shape!");break}for(q=K;q<h.length;q++){C=h[q];n=-1;for(P=0;P<l.length;P++)if(I=l[P],z=C.x+":"+C.y+":"+I,void 0===y[z]){k=b[I];for(N=0;N<k.length;N++)if(I=k[N],c(q,N)&&!f(C,I)&&!g(C,I)){n=N;l.splice(P,1);K=h.slice(0,q+1);I=h.slice(q);N=k.slice(n);ba=k.slice(0,n+1);h=K.concat(N).concat(ba).concat(I);K=q;break}if(0<=n)break;y[z]=!0}if(0<=n)break}}return h}(a,b);var q=THREE.FontUtils.Triangulate(f,!1);f=0;for(g=q.length;f<g;f++)for(k=q[f],h=0;3>h;h++)l=k[h].x+":"+k[h].y,
l=n[l],void 0!==l&&(k[h]=l);return q.concat()},isClockWise:function(a){return 0>THREE.FontUtils.Triangulate.area(a)},b2p0:function(a,b){var c=1-a;return c*c*b},b2p1:function(a,b){return 2*(1-a)*a*b},b2p2:function(a,b){return a*a*b},b2:function(a,b,c,d){return this.b2p0(a,b)+this.b2p1(a,c)+this.b2p2(a,d)},b3p0:function(a,b){var c=1-a;return c*c*c*b},b3p1:function(a,b){var c=1-a;return 3*c*c*a*b},b3p2:function(a,b){return 3*(1-a)*a*a*b},b3p3:function(a,b){return a*a*a*b},b3:function(a,b,c,d,e){return this.b3p0(a,
b)+this.b3p1(a,c)+this.b3p2(a,d)+this.b3p3(a,e)}};THREE.LineCurve=function(a,b){this.v1=a;this.v2=b};THREE.LineCurve.prototype=Object.create(THREE.Curve.prototype);THREE.LineCurve.prototype.getPoint=function(a){var b=this.v2.clone().sub(this.v1);b.multiplyScalar(a).add(this.v1);return b};THREE.LineCurve.prototype.getPointAt=function(a){return this.getPoint(a)};THREE.LineCurve.prototype.getTangent=function(a){return this.v2.clone().sub(this.v1).normalize()};
THREE.QuadraticBezierCurve=function(a,b,c){this.v0=a;this.v1=b;this.v2=c};THREE.QuadraticBezierCurve.prototype=Object.create(THREE.Curve.prototype);THREE.QuadraticBezierCurve.prototype.getPoint=function(a){var b;b=THREE.Shape.Utils.b2(a,this.v0.x,this.v1.x,this.v2.x);a=THREE.Shape.Utils.b2(a,this.v0.y,this.v1.y,this.v2.y);return new THREE.Vector2(b,a)};
THREE.QuadraticBezierCurve.prototype.getTangent=function(a){var b;b=THREE.Curve.Utils.tangentQuadraticBezier(a,this.v0.x,this.v1.x,this.v2.x);a=THREE.Curve.Utils.tangentQuadraticBezier(a,this.v0.y,this.v1.y,this.v2.y);b=new THREE.Vector2(b,a);b.normalize();return b};THREE.CubicBezierCurve=function(a,b,c,d){this.v0=a;this.v1=b;this.v2=c;this.v3=d};THREE.CubicBezierCurve.prototype=Object.create(THREE.Curve.prototype);
THREE.CubicBezierCurve.prototype.getPoint=function(a){var b;b=THREE.Shape.Utils.b3(a,this.v0.x,this.v1.x,this.v2.x,this.v3.x);a=THREE.Shape.Utils.b3(a,this.v0.y,this.v1.y,this.v2.y,this.v3.y);return new THREE.Vector2(b,a)};THREE.CubicBezierCurve.prototype.getTangent=function(a){var b;b=THREE.Curve.Utils.tangentCubicBezier(a,this.v0.x,this.v1.x,this.v2.x,this.v3.x);a=THREE.Curve.Utils.tangentCubicBezier(a,this.v0.y,this.v1.y,this.v2.y,this.v3.y);b=new THREE.Vector2(b,a);b.normalize();return b};
THREE.SplineCurve=function(a){this.points=void 0==a?[]:a};THREE.SplineCurve.prototype=Object.create(THREE.Curve.prototype);THREE.SplineCurve.prototype.getPoint=function(a){var b=new THREE.Vector2,c=[],d=this.points,e;e=(d.length-1)*a;a=Math.floor(e);e-=a;c[0]=0==a?a:a-1;c[1]=a;c[2]=a>d.length-2?d.length-1:a+1;c[3]=a>d.length-3?d.length-1:a+2;b.x=THREE.Curve.Utils.interpolate(d[c[0]].x,d[c[1]].x,d[c[2]].x,d[c[3]].x,e);b.y=THREE.Curve.Utils.interpolate(d[c[0]].y,d[c[1]].y,d[c[2]].y,d[c[3]].y,e);return b};
THREE.EllipseCurve=function(a,b,c,d,e,f,g){this.aX=a;this.aY=b;this.xRadius=c;this.yRadius=d;this.aStartAngle=e;this.aEndAngle=f;this.aClockwise=g};THREE.EllipseCurve.prototype=Object.create(THREE.Curve.prototype);
THREE.EllipseCurve.prototype.getPoint=function(a){var b;b=this.aEndAngle-this.aStartAngle;0>b&&(b+=2*Math.PI);b>2*Math.PI&&(b-=2*Math.PI);b=!0===this.aClockwise?this.aEndAngle+(1-a)*(2*Math.PI-b):this.aStartAngle+a*b;a=this.aX+this.xRadius*Math.cos(b);b=this.aY+this.yRadius*Math.sin(b);return new THREE.Vector2(a,b)};THREE.ArcCurve=function(a,b,c,d,e,f){THREE.EllipseCurve.call(this,a,b,c,c,d,e,f)};THREE.ArcCurve.prototype=Object.create(THREE.EllipseCurve.prototype);
THREE.LineCurve3=THREE.Curve.create(function(a,b){this.v1=a;this.v2=b},function(a){var b=new THREE.Vector3;b.subVectors(this.v2,this.v1);b.multiplyScalar(a);b.add(this.v1);return b});THREE.QuadraticBezierCurve3=THREE.Curve.create(function(a,b,c){this.v0=a;this.v1=b;this.v2=c},function(a){var b,c;b=THREE.Shape.Utils.b2(a,this.v0.x,this.v1.x,this.v2.x);c=THREE.Shape.Utils.b2(a,this.v0.y,this.v1.y,this.v2.y);a=THREE.Shape.Utils.b2(a,this.v0.z,this.v1.z,this.v2.z);return new THREE.Vector3(b,c,a)});
THREE.CubicBezierCurve3=THREE.Curve.create(function(a,b,c,d){this.v0=a;this.v1=b;this.v2=c;this.v3=d},function(a){var b,c;b=THREE.Shape.Utils.b3(a,this.v0.x,this.v1.x,this.v2.x,this.v3.x);c=THREE.Shape.Utils.b3(a,this.v0.y,this.v1.y,this.v2.y,this.v3.y);a=THREE.Shape.Utils.b3(a,this.v0.z,this.v1.z,this.v2.z,this.v3.z);return new THREE.Vector3(b,c,a)});
THREE.SplineCurve3=THREE.Curve.create(function(a){this.points=void 0==a?[]:a},function(a){var b=new THREE.Vector3,c=[],d=this.points,e;a*=d.length-1;e=Math.floor(a);a-=e;c[0]=0==e?e:e-1;c[1]=e;c[2]=e>d.length-2?d.length-1:e+1;c[3]=e>d.length-3?d.length-1:e+2;e=d[c[0]];var f=d[c[1]],g=d[c[2]],c=d[c[3]];b.x=THREE.Curve.Utils.interpolate(e.x,f.x,g.x,c.x,a);b.y=THREE.Curve.Utils.interpolate(e.y,f.y,g.y,c.y,a);b.z=THREE.Curve.Utils.interpolate(e.z,f.z,g.z,c.z,a);return b});
THREE.ClosedSplineCurve3=THREE.Curve.create(function(a){this.points=void 0==a?[]:a},function(a){var b=new THREE.Vector3,c=[],d=this.points,e;e=(d.length-0)*a;a=Math.floor(e);e-=a;a+=0<a?0:(Math.floor(Math.abs(a)/d.length)+1)*d.length;c[0]=(a-1)%d.length;c[1]=a%d.length;c[2]=(a+1)%d.length;c[3]=(a+2)%d.length;b.x=THREE.Curve.Utils.interpolate(d[c[0]].x,d[c[1]].x,d[c[2]].x,d[c[3]].x,e);b.y=THREE.Curve.Utils.interpolate(d[c[0]].y,d[c[1]].y,d[c[2]].y,d[c[3]].y,e);b.z=THREE.Curve.Utils.interpolate(d[c[0]].z,
d[c[1]].z,d[c[2]].z,d[c[3]].z,e);return b});
THREE.AnimationHandler={LINEAR:0,CATMULLROM:1,CATMULLROM_FORWARD:2,add:function(){console.warn("THREE.AnimationHandler.add() has been deprecated.")},get:function(){console.warn("THREE.AnimationHandler.get() has been deprecated.")},remove:function(){console.warn("THREE.AnimationHandler.remove() has been deprecated.")},animations:[],init:function(a){if(!0!==a.initialized){for(var b=0;b<a.hierarchy.length;b++){for(var c=0;c<a.hierarchy[b].keys.length;c++)if(0>a.hierarchy[b].keys[c].time&&(a.hierarchy[b].keys[c].time=
0),void 0!==a.hierarchy[b].keys[c].rot&&!(a.hierarchy[b].keys[c].rot instanceof THREE.Quaternion)){var d=a.hierarchy[b].keys[c].rot;a.hierarchy[b].keys[c].rot=(new THREE.Quaternion).fromArray(d)}if(a.hierarchy[b].keys.length&&void 0!==a.hierarchy[b].keys[0].morphTargets){d={};for(c=0;c<a.hierarchy[b].keys.length;c++)for(var e=0;e<a.hierarchy[b].keys[c].morphTargets.length;e++){var f=a.hierarchy[b].keys[c].morphTargets[e];d[f]=-1}a.hierarchy[b].usedMorphTargets=d;for(c=0;c<a.hierarchy[b].keys.length;c++){var g=
{};for(f in d){for(e=0;e<a.hierarchy[b].keys[c].morphTargets.length;e++)if(a.hierarchy[b].keys[c].morphTargets[e]===f){g[f]=a.hierarchy[b].keys[c].morphTargetsInfluences[e];break}e===a.hierarchy[b].keys[c].morphTargets.length&&(g[f]=0)}a.hierarchy[b].keys[c].morphTargetsInfluences=g}}for(c=1;c<a.hierarchy[b].keys.length;c++)a.hierarchy[b].keys[c].time===a.hierarchy[b].keys[c-1].time&&(a.hierarchy[b].keys.splice(c,1),c--);for(c=0;c<a.hierarchy[b].keys.length;c++)a.hierarchy[b].keys[c].index=c}a.initialized=
!0;return a}},parse:function(a){var b=function(a,c){c.push(a);for(var d=0;d<a.children.length;d++)b(a.children[d],c)},c=[];if(a instanceof THREE.SkinnedMesh)for(var d=0;d<a.skeleton.bones.length;d++)c.push(a.skeleton.bones[d]);else b(a,c);return c},play:function(a){-1===this.animations.indexOf(a)&&this.animations.push(a)},stop:function(a){a=this.animations.indexOf(a);-1!==a&&this.animations.splice(a,1)},update:function(a){for(var b=0;b<this.animations.length;b++)this.animations[b].update(a)}};
THREE.Animation=function(a,b){this.root=a;this.data=THREE.AnimationHandler.init(b);this.hierarchy=THREE.AnimationHandler.parse(a);this.currentTime=0;this.timeScale=1;this.isPlaying=!1;this.loop=!0;this.weight=0;this.interpolationType=THREE.AnimationHandler.LINEAR};THREE.Animation.prototype.keyTypes=["pos","rot","scl"];THREE.Animation.prototype.play=function(a,b){this.currentTime=void 0!==a?a:0;this.weight=void 0!==b?b:1;this.isPlaying=!0;this.reset();THREE.AnimationHandler.play(this)};
THREE.Animation.prototype.stop=function(){this.isPlaying=!1;THREE.AnimationHandler.stop(this)};
THREE.Animation.prototype.reset=function(){for(var a=0,b=this.hierarchy.length;a<b;a++){var c=this.hierarchy[a];c.matrixAutoUpdate=!0;void 0===c.animationCache&&(c.animationCache={});void 0===c.animationCache[this.data.name]&&(c.animationCache[this.data.name]={},c.animationCache[this.data.name].prevKey={pos:0,rot:0,scl:0},c.animationCache[this.data.name].nextKey={pos:0,rot:0,scl:0},c.animationCache[this.data.name].originalMatrix=c.matrix);for(var c=c.animationCache[this.data.name],d=0;3>d;d++){for(var e=
this.keyTypes[d],f=this.data.hierarchy[a].keys[0],g=this.getNextKeyWith(e,a,1);g.time<this.currentTime&&g.index>f.index;)f=g,g=this.getNextKeyWith(e,a,g.index+1);c.prevKey[e]=f;c.nextKey[e]=g}}};
THREE.Animation.prototype.update=function(){var a=[],b=new THREE.Vector3,c=new THREE.Vector3,d=new THREE.Quaternion,e=function(a,b){var c=[],d=[],e,q,r,t,s,p;e=(a.length-1)*b;q=Math.floor(e);e-=q;c[0]=0===q?q:q-1;c[1]=q;c[2]=q>a.length-2?q:q+1;c[3]=q>a.length-3?q:q+2;q=a[c[0]];t=a[c[1]];s=a[c[2]];p=a[c[3]];c=e*e;r=e*c;d[0]=f(q[0],t[0],s[0],p[0],e,c,r);d[1]=f(q[1],t[1],s[1],p[1],e,c,r);d[2]=f(q[2],t[2],s[2],p[2],e,c,r);return d},f=function(a,b,c,d,e,f,r){a=0.5*(c-a);d=0.5*(d-b);return(2*(b-c)+a+d)*
r+(-3*(b-c)-2*a-d)*f+a*e+b};return function(f){if(!1!==this.isPlaying&&(this.currentTime+=f*this.timeScale,0!==this.weight)){f=this.data.length;if(!0===this.loop&&this.currentTime>f)this.currentTime%=f,this.reset();else if(!1===this.loop&&this.currentTime>f){this.stop();return}f=0;for(var h=this.hierarchy.length;f<h;f++)for(var k=this.hierarchy[f],l=k.animationCache[this.data.name],n=0;3>n;n++){var q=this.keyTypes[n],r=l.prevKey[q],t=l.nextKey[q];if(t.time<=this.currentTime){r=this.data.hierarchy[f].keys[0];
for(t=this.getNextKeyWith(q,f,1);t.time<this.currentTime&&t.index>r.index;)r=t,t=this.getNextKeyWith(q,f,t.index+1);l.prevKey[q]=r;l.nextKey[q]=t}k.matrixAutoUpdate=!0;k.matrixWorldNeedsUpdate=!0;var s=(this.currentTime-r.time)/(t.time-r.time),p=r[q],v=t[q];0>s&&(s=0);1<s&&(s=1);if("pos"===q)if(this.interpolationType===THREE.AnimationHandler.LINEAR)c.x=p[0]+(v[0]-p[0])*s,c.y=p[1]+(v[1]-p[1])*s,c.z=p[2]+(v[2]-p[2])*s,k instanceof THREE.Bone?(r=this.weight/(this.weight+k.accumulatedPosWeight),k.position.lerp(c,
r),k.accumulatedPosWeight+=this.weight):k.position.copy(c);else{if(this.interpolationType===THREE.AnimationHandler.CATMULLROM||this.interpolationType===THREE.AnimationHandler.CATMULLROM_FORWARD)a[0]=this.getPrevKeyWith("pos",f,r.index-1).pos,a[1]=p,a[2]=v,a[3]=this.getNextKeyWith("pos",f,t.index+1).pos,s=0.33*s+0.33,t=e(a,s),r=1,k instanceof THREE.Bone&&(r=this.weight/(this.weight+k.accumulatedPosWeight),k.accumulatedPosWeight+=this.weight),q=k.position,q.x+=(t[0]-q.x)*r,q.y+=(t[1]-q.y)*r,q.z+=(t[2]-
q.z)*r,this.interpolationType===THREE.AnimationHandler.CATMULLROM_FORWARD&&(s=e(a,1.01*s),b.set(s[0],s[1],s[2]),b.sub(q),b.y=0,b.normalize(),s=Math.atan2(b.x,b.z),k.rotation.set(0,s,0))}else"rot"===q?(THREE.Quaternion.slerp(p,v,d,s),k instanceof THREE.Bone?0===k.accumulatedRotWeight?(k.quaternion.copy(d),k.accumulatedRotWeight=this.weight):(r=this.weight/(this.weight+k.accumulatedRotWeight),THREE.Quaternion.slerp(k.quaternion,d,k.quaternion,r),k.accumulatedRotWeight+=this.weight):k.quaternion.copy(d)):
"scl"===q&&(c.x=p[0]+(v[0]-p[0])*s,c.y=p[1]+(v[1]-p[1])*s,c.z=p[2]+(v[2]-p[2])*s,k instanceof THREE.Bone?(r=this.weight/(this.weight+k.accumulatedSclWeight),k.scale.lerp(c,r),k.accumulatedSclWeight+=this.weight):k.scale.copy(c))}return!0}}}();
THREE.Animation.prototype.getNextKeyWith=function(a,b,c){var d=this.data.hierarchy[b].keys;for(c=this.interpolationType===THREE.AnimationHandler.CATMULLROM||this.interpolationType===THREE.AnimationHandler.CATMULLROM_FORWARD?c<d.length-1?c:d.length-1:c%d.length;c<d.length;c++)if(void 0!==d[c][a])return d[c];return this.data.hierarchy[b].keys[0]};
THREE.Animation.prototype.getPrevKeyWith=function(a,b,c){var d=this.data.hierarchy[b].keys;for(c=this.interpolationType===THREE.AnimationHandler.CATMULLROM||this.interpolationType===THREE.AnimationHandler.CATMULLROM_FORWARD?0<c?c:0:0<=c?c:c+d.length;0<=c;c--)if(void 0!==d[c][a])return d[c];return this.data.hierarchy[b].keys[d.length-1]};
THREE.KeyFrameAnimation=function(a){this.root=a.node;this.data=THREE.AnimationHandler.init(a);this.hierarchy=THREE.AnimationHandler.parse(this.root);this.currentTime=0;this.timeScale=0.001;this.isPlaying=!1;this.loop=this.isPaused=!0;a=0;for(var b=this.hierarchy.length;a<b;a++){var c=this.data.hierarchy[a].sids,d=this.hierarchy[a];if(this.data.hierarchy[a].keys.length&&c){for(var e=0;e<c.length;e++){var f=c[e],g=this.getNextKeyWith(f,a,0);g&&g.apply(f)}d.matrixAutoUpdate=!1;this.data.hierarchy[a].node.updateMatrix();
d.matrixWorldNeedsUpdate=!0}}};
THREE.KeyFrameAnimation.prototype.play=function(a){this.currentTime=void 0!==a?a:0;if(!1===this.isPlaying){this.isPlaying=!0;var b=this.hierarchy.length,c,d;for(a=0;a<b;a++)c=this.hierarchy[a],d=this.data.hierarchy[a],void 0===d.animationCache&&(d.animationCache={},d.animationCache.prevKey=null,d.animationCache.nextKey=null,d.animationCache.originalMatrix=c.matrix),c=this.data.hierarchy[a].keys,c.length&&(d.animationCache.prevKey=c[0],d.animationCache.nextKey=c[1],this.startTime=Math.min(c[0].time,
this.startTime),this.endTime=Math.max(c[c.length-1].time,this.endTime));this.update(0)}this.isPaused=!1;THREE.AnimationHandler.play(this)};THREE.KeyFrameAnimation.prototype.stop=function(){this.isPaused=this.isPlaying=!1;THREE.AnimationHandler.stop(this);for(var a=0;a<this.data.hierarchy.length;a++){var b=this.hierarchy[a],c=this.data.hierarchy[a];if(void 0!==c.animationCache){var d=c.animationCache.originalMatrix;d.copy(b.matrix);b.matrix=d;delete c.animationCache}}};
THREE.KeyFrameAnimation.prototype.update=function(a){if(!1!==this.isPlaying){this.currentTime+=a*this.timeScale;a=this.data.length;!0===this.loop&&this.currentTime>a&&(this.currentTime%=a);this.currentTime=Math.min(this.currentTime,a);a=0;for(var b=this.hierarchy.length;a<b;a++){var c=this.hierarchy[a],d=this.data.hierarchy[a],e=d.keys,d=d.animationCache;if(e.length){var f=d.prevKey,g=d.nextKey;if(g.time<=this.currentTime){for(;g.time<this.currentTime&&g.index>f.index;)f=g,g=e[f.index+1];d.prevKey=
f;d.nextKey=g}g.time>=this.currentTime?f.interpolate(g,this.currentTime):f.interpolate(g,g.time);this.data.hierarchy[a].node.updateMatrix();c.matrixWorldNeedsUpdate=!0}}}};THREE.KeyFrameAnimation.prototype.getNextKeyWith=function(a,b,c){b=this.data.hierarchy[b].keys;for(c%=b.length;c<b.length;c++)if(b[c].hasTarget(a))return b[c];return b[0]};
THREE.KeyFrameAnimation.prototype.getPrevKeyWith=function(a,b,c){b=this.data.hierarchy[b].keys;for(c=0<=c?c:c+b.length;0<=c;c--)if(b[c].hasTarget(a))return b[c];return b[b.length-1]};THREE.MorphAnimation=function(a){this.mesh=a;this.frames=a.morphTargetInfluences.length;this.currentTime=0;this.duration=1E3;this.loop=!0;this.isPlaying=!1};
THREE.MorphAnimation.prototype={play:function(){this.isPlaying=!0},pause:function(){this.isPlaying=!1},update:function(){var a=0,b=0;return function(c){if(!1!==this.isPlaying){this.currentTime+=c;!0===this.loop&&this.currentTime>this.duration&&(this.currentTime%=this.duration);this.currentTime=Math.min(this.currentTime,this.duration);c=this.duration/this.frames;var d=Math.floor(this.currentTime/c);d!=b&&(this.mesh.morphTargetInfluences[a]=0,this.mesh.morphTargetInfluences[b]=1,this.mesh.morphTargetInfluences[d]=
0,a=b,b=d);this.mesh.morphTargetInfluences[d]=this.currentTime%c/c;this.mesh.morphTargetInfluences[a]=1-this.mesh.morphTargetInfluences[d]}}}()};
THREE.BoxGeometry=function(a,b,c,d,e,f){function g(a,b,c,d,e,f,g,p){var v,w=h.widthSegments,u=h.heightSegments,D=e/2,A=f/2,x=h.vertices.length;if("x"===a&&"y"===b||"y"===a&&"x"===b)v="z";else if("x"===a&&"z"===b||"z"===a&&"x"===b)v="y",u=h.depthSegments;else if("z"===a&&"y"===b||"y"===a&&"z"===b)v="x",w=h.depthSegments;var C=w+1,I=u+1,z=e/w,y=f/u,K=new THREE.Vector3;K[v]=0<g?1:-1;for(e=0;e<I;e++)for(f=0;f<C;f++){var N=new THREE.Vector3;N[a]=(f*z-D)*c;N[b]=(e*y-A)*d;N[v]=g;h.vertices.push(N)}for(e=
0;e<u;e++)for(f=0;f<w;f++)A=f+C*e,a=f+C*(e+1),b=f+1+C*(e+1),c=f+1+C*e,d=new THREE.Vector2(f/w,1-e/u),g=new THREE.Vector2(f/w,1-(e+1)/u),v=new THREE.Vector2((f+1)/w,1-(e+1)/u),D=new THREE.Vector2((f+1)/w,1-e/u),A=new THREE.Face3(A+x,a+x,c+x),A.normal.copy(K),A.vertexNormals.push(K.clone(),K.clone(),K.clone()),A.materialIndex=p,h.faces.push(A),h.faceVertexUvs[0].push([d,g,D]),A=new THREE.Face3(a+x,b+x,c+x),A.normal.copy(K),A.vertexNormals.push(K.clone(),K.clone(),K.clone()),A.materialIndex=p,h.faces.push(A),
h.faceVertexUvs[0].push([g.clone(),v,D.clone()])}THREE.Geometry.call(this);this.parameters={width:a,height:b,depth:c,widthSegments:d,heightSegments:e,depthSegments:f};this.widthSegments=d||1;this.heightSegments=e||1;this.depthSegments=f||1;var h=this;d=a/2;e=b/2;f=c/2;g("z","y",-1,-1,c,b,d,0);g("z","y",1,-1,c,b,-d,1);g("x","z",1,1,a,c,e,2);g("x","z",1,-1,a,c,-e,3);g("x","y",1,-1,a,b,f,4);g("x","y",-1,-1,a,b,-f,5);this.mergeVertices()};THREE.BoxGeometry.prototype=Object.create(THREE.Geometry.prototype);
THREE.CircleGeometry=function(a,b,c,d){THREE.Geometry.call(this);this.parameters={radius:a,segments:b,thetaStart:c,thetaLength:d};a=a||50;b=void 0!==b?Math.max(3,b):8;c=void 0!==c?c:0;d=void 0!==d?d:2*Math.PI;var e,f=[];e=new THREE.Vector3;var g=new THREE.Vector2(0.5,0.5);this.vertices.push(e);f.push(g);for(e=0;e<=b;e++){var h=new THREE.Vector3,k=c+e/b*d;h.x=a*Math.cos(k);h.y=a*Math.sin(k);this.vertices.push(h);f.push(new THREE.Vector2((h.x/a+1)/2,(h.y/a+1)/2))}c=new THREE.Vector3(0,0,1);for(e=1;e<=
b;e++)this.faces.push(new THREE.Face3(e,e+1,0,[c.clone(),c.clone(),c.clone()])),this.faceVertexUvs[0].push([f[e].clone(),f[e+1].clone(),g.clone()]);this.computeFaceNormals();this.boundingSphere=new THREE.Sphere(new THREE.Vector3,a)};THREE.CircleGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.CubeGeometry=function(a,b,c,d,e,f){console.warn("THEE.CubeGeometry has been renamed to THREE.BoxGeometry.");return new THREE.BoxGeometry(a,b,c,d,e,f)};
THREE.CylinderGeometry=function(a,b,c,d,e,f){THREE.Geometry.call(this);this.parameters={radiusTop:a,radiusBottom:b,height:c,radialSegments:d,heightSegments:e,openEnded:f};a=void 0!==a?a:20;b=void 0!==b?b:20;c=void 0!==c?c:100;d=d||8;e=e||1;f=void 0!==f?f:!1;var g=c/2,h,k,l=[],n=[];for(k=0;k<=e;k++){var q=[],r=[],t=k/e,s=t*(b-a)+a;for(h=0;h<=d;h++){var p=h/d,v=new THREE.Vector3;v.x=s*Math.sin(p*Math.PI*2);v.y=-t*c+g;v.z=s*Math.cos(p*Math.PI*2);this.vertices.push(v);q.push(this.vertices.length-1);r.push(new THREE.Vector2(p,
1-t))}l.push(q);n.push(r)}c=(b-a)/c;for(h=0;h<d;h++)for(0!==a?(q=this.vertices[l[0][h]].clone(),r=this.vertices[l[0][h+1]].clone()):(q=this.vertices[l[1][h]].clone(),r=this.vertices[l[1][h+1]].clone()),q.setY(Math.sqrt(q.x*q.x+q.z*q.z)*c).normalize(),r.setY(Math.sqrt(r.x*r.x+r.z*r.z)*c).normalize(),k=0;k<e;k++){var t=l[k][h],s=l[k+1][h],p=l[k+1][h+1],v=l[k][h+1],w=q.clone(),u=q.clone(),D=r.clone(),A=r.clone(),x=n[k][h].clone(),C=n[k+1][h].clone(),I=n[k+1][h+1].clone(),z=n[k][h+1].clone();this.faces.push(new THREE.Face3(t,
s,v,[w,u,A]));this.faceVertexUvs[0].push([x,C,z]);this.faces.push(new THREE.Face3(s,p,v,[u.clone(),D,A.clone()]));this.faceVertexUvs[0].push([C.clone(),I,z.clone()])}if(!1===f&&0<a)for(this.vertices.push(new THREE.Vector3(0,g,0)),h=0;h<d;h++)t=l[0][h],s=l[0][h+1],p=this.vertices.length-1,w=new THREE.Vector3(0,1,0),u=new THREE.Vector3(0,1,0),D=new THREE.Vector3(0,1,0),x=n[0][h].clone(),C=n[0][h+1].clone(),I=new THREE.Vector2(C.x,0),this.faces.push(new THREE.Face3(t,s,p,[w,u,D])),this.faceVertexUvs[0].push([x,
C,I]);if(!1===f&&0<b)for(this.vertices.push(new THREE.Vector3(0,-g,0)),h=0;h<d;h++)t=l[k][h+1],s=l[k][h],p=this.vertices.length-1,w=new THREE.Vector3(0,-1,0),u=new THREE.Vector3(0,-1,0),D=new THREE.Vector3(0,-1,0),x=n[k][h+1].clone(),C=n[k][h].clone(),I=new THREE.Vector2(C.x,1),this.faces.push(new THREE.Face3(t,s,p,[w,u,D])),this.faceVertexUvs[0].push([x,C,I]);this.computeFaceNormals()};THREE.CylinderGeometry.prototype=Object.create(THREE.Geometry.prototype);
THREE.ExtrudeGeometry=function(a,b){"undefined"!==typeof a&&(THREE.Geometry.call(this),a=a instanceof Array?a:[a],this.addShapeList(a,b),this.computeFaceNormals())};THREE.ExtrudeGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.ExtrudeGeometry.prototype.addShapeList=function(a,b){for(var c=a.length,d=0;d<c;d++)this.addShape(a[d],b)};
THREE.ExtrudeGeometry.prototype.addShape=function(a,b){function c(a,b,c){b||console.log("die");return b.clone().multiplyScalar(c).add(a)}function d(a,b,c){var d=THREE.Math.sign,e=1,e=a.x-b.x,f=a.y-b.y,g=c.x-a.x,h=c.y-a.y,k=e*e+f*f;if(1E-10<Math.abs(e*h-f*g)){var l=Math.sqrt(k),d=Math.sqrt(g*g+h*h),k=b.x-f/l;b=b.y+e/l;g=((c.x-h/d-k)*h-(c.y+g/d-b)*g)/(e*h-f*g);c=k+e*g-a.x;a=b+f*g-a.y;e=c*c+a*a;if(2>=e)return new THREE.Vector2(c,a);e=Math.sqrt(e/2)}else a=!1,1E-10<e?1E-10<g&&(a=!0):-1E-10>e?-1E-10>g&&
(a=!0):d(f)==d(h)&&(a=!0),a?(c=-f,a=e,e=Math.sqrt(k)):(c=e,a=f,e=Math.sqrt(k/2));return new THREE.Vector2(c/e,a/e)}function e(c,d){var e,f;for(H=c.length;0<=--H;){e=H;f=H-1;0>f&&(f=c.length-1);for(var g=0,h=t+2*n,g=0;g<h;g++){var k=S*g,l=S*(g+1),p=d+e+k,k=d+f+k,q=d+f+l,l=d+e+l,r=c,s=g,v=h,w=e,x=f,p=p+ba,k=k+ba,q=q+ba,l=l+ba;N.faces.push(new THREE.Face3(p,k,l,null,null,u));N.faces.push(new THREE.Face3(k,q,l,null,null,u));p=D.generateSideWallUV(N,a,r,b,p,k,q,l,s,v,w,x);N.faceVertexUvs[0].push([p[0],
p[1],p[3]]);N.faceVertexUvs[0].push([p[1],p[2],p[3]])}}}function f(a,b,c){N.vertices.push(new THREE.Vector3(a,b,c))}function g(c,d,e,f){c+=ba;d+=ba;e+=ba;N.faces.push(new THREE.Face3(c,d,e,null,null,w));c=f?D.generateBottomUV(N,a,b,c,d,e):D.generateTopUV(N,a,b,c,d,e);N.faceVertexUvs[0].push(c)}var h=void 0!==b.amount?b.amount:100,k=void 0!==b.bevelThickness?b.bevelThickness:6,l=void 0!==b.bevelSize?b.bevelSize:k-2,n=void 0!==b.bevelSegments?b.bevelSegments:3,q=void 0!==b.bevelEnabled?b.bevelEnabled:
!0,r=void 0!==b.curveSegments?b.curveSegments:12,t=void 0!==b.steps?b.steps:1,s=b.extrudePath,p,v=!1,w=b.material,u=b.extrudeMaterial,D=void 0!==b.UVGenerator?b.UVGenerator:THREE.ExtrudeGeometry.WorldUVGenerator,A,x,C,I;s&&(p=s.getSpacedPoints(t),v=!0,q=!1,A=void 0!==b.frames?b.frames:new THREE.TubeGeometry.FrenetFrames(s,t,!1),x=new THREE.Vector3,C=new THREE.Vector3,I=new THREE.Vector3);q||(l=k=n=0);var z,y,K,N=this,ba=this.vertices.length,s=a.extractPoints(r),r=s.shape,P=s.holes;if(s=!THREE.Shape.Utils.isClockWise(r)){r=
r.reverse();y=0;for(K=P.length;y<K;y++)z=P[y],THREE.Shape.Utils.isClockWise(z)&&(P[y]=z.reverse());s=!1}var O=THREE.Shape.Utils.triangulateShape(r,P),J=r;y=0;for(K=P.length;y<K;y++)z=P[y],r=r.concat(z);var E,Q,L,R,B,S=r.length,V,W=O.length,s=[],H=0;L=J.length;E=L-1;for(Q=H+1;H<L;H++,E++,Q++)E===L&&(E=0),Q===L&&(Q=0),s[H]=d(J[H],J[E],J[Q]);var oa=[],$,X=s.concat();y=0;for(K=P.length;y<K;y++){z=P[y];$=[];H=0;L=z.length;E=L-1;for(Q=H+1;H<L;H++,E++,Q++)E===L&&(E=0),Q===L&&(Q=0),$[H]=d(z[H],z[E],z[Q]);
oa.push($);X=X.concat($)}for(E=0;E<n;E++){L=E/n;R=k*(1-L);Q=l*Math.sin(L*Math.PI/2);H=0;for(L=J.length;H<L;H++)B=c(J[H],s[H],Q),f(B.x,B.y,-R);y=0;for(K=P.length;y<K;y++)for(z=P[y],$=oa[y],H=0,L=z.length;H<L;H++)B=c(z[H],$[H],Q),f(B.x,B.y,-R)}Q=l;for(H=0;H<S;H++)B=q?c(r[H],X[H],Q):r[H],v?(C.copy(A.normals[0]).multiplyScalar(B.x),x.copy(A.binormals[0]).multiplyScalar(B.y),I.copy(p[0]).add(C).add(x),f(I.x,I.y,I.z)):f(B.x,B.y,0);for(L=1;L<=t;L++)for(H=0;H<S;H++)B=q?c(r[H],X[H],Q):r[H],v?(C.copy(A.normals[L]).multiplyScalar(B.x),
x.copy(A.binormals[L]).multiplyScalar(B.y),I.copy(p[L]).add(C).add(x),f(I.x,I.y,I.z)):f(B.x,B.y,h/t*L);for(E=n-1;0<=E;E--){L=E/n;R=k*(1-L);Q=l*Math.sin(L*Math.PI/2);H=0;for(L=J.length;H<L;H++)B=c(J[H],s[H],Q),f(B.x,B.y,h+R);y=0;for(K=P.length;y<K;y++)for(z=P[y],$=oa[y],H=0,L=z.length;H<L;H++)B=c(z[H],$[H],Q),v?f(B.x,B.y+p[t-1].y,p[t-1].x+R):f(B.x,B.y,h+R)}(function(){if(q){var a;a=0*S;for(H=0;H<W;H++)V=O[H],g(V[2]+a,V[1]+a,V[0]+a,!0);a=t+2*n;a*=S;for(H=0;H<W;H++)V=O[H],g(V[0]+a,V[1]+a,V[2]+a,!1)}else{for(H=
0;H<W;H++)V=O[H],g(V[2],V[1],V[0],!0);for(H=0;H<W;H++)V=O[H],g(V[0]+S*t,V[1]+S*t,V[2]+S*t,!1)}})();(function(){var a=0;e(J,a);a+=J.length;y=0;for(K=P.length;y<K;y++)z=P[y],e(z,a),a+=z.length})()};
THREE.ExtrudeGeometry.WorldUVGenerator={generateTopUV:function(a,b,c,d,e,f){b=a.vertices[e].x;e=a.vertices[e].y;c=a.vertices[f].x;f=a.vertices[f].y;return[new THREE.Vector2(a.vertices[d].x,a.vertices[d].y),new THREE.Vector2(b,e),new THREE.Vector2(c,f)]},generateBottomUV:function(a,b,c,d,e,f){return this.generateTopUV(a,b,c,d,e,f)},generateSideWallUV:function(a,b,c,d,e,f,g,h,k,l,n,q){b=a.vertices[e].x;c=a.vertices[e].y;e=a.vertices[e].z;d=a.vertices[f].x;k=a.vertices[f].y;f=a.vertices[f].z;l=a.vertices[g].x;
n=a.vertices[g].y;g=a.vertices[g].z;q=a.vertices[h].x;var r=a.vertices[h].y;a=a.vertices[h].z;return 0.01>Math.abs(c-k)?[new THREE.Vector2(b,1-e),new THREE.Vector2(d,1-f),new THREE.Vector2(l,1-g),new THREE.Vector2(q,1-a)]:[new THREE.Vector2(c,1-e),new THREE.Vector2(k,1-f),new THREE.Vector2(n,1-g),new THREE.Vector2(r,1-a)]}};THREE.ExtrudeGeometry.__v1=new THREE.Vector2;THREE.ExtrudeGeometry.__v2=new THREE.Vector2;THREE.ExtrudeGeometry.__v3=new THREE.Vector2;THREE.ExtrudeGeometry.__v4=new THREE.Vector2;
THREE.ExtrudeGeometry.__v5=new THREE.Vector2;THREE.ExtrudeGeometry.__v6=new THREE.Vector2;THREE.ShapeGeometry=function(a,b){THREE.Geometry.call(this);!1===a instanceof Array&&(a=[a]);this.addShapeList(a,b);this.computeFaceNormals()};THREE.ShapeGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.ShapeGeometry.prototype.addShapeList=function(a,b){for(var c=0,d=a.length;c<d;c++)this.addShape(a[c],b);return this};
THREE.ShapeGeometry.prototype.addShape=function(a,b){void 0===b&&(b={});var c=b.material,d=void 0===b.UVGenerator?THREE.ExtrudeGeometry.WorldUVGenerator:b.UVGenerator,e,f,g,h=this.vertices.length;e=a.extractPoints(void 0!==b.curveSegments?b.curveSegments:12);var k=e.shape,l=e.holes;if(!THREE.Shape.Utils.isClockWise(k))for(k=k.reverse(),e=0,f=l.length;e<f;e++)g=l[e],THREE.Shape.Utils.isClockWise(g)&&(l[e]=g.reverse());var n=THREE.Shape.Utils.triangulateShape(k,l);e=0;for(f=l.length;e<f;e++)g=l[e],
k=k.concat(g);l=k.length;f=n.length;for(e=0;e<l;e++)g=k[e],this.vertices.push(new THREE.Vector3(g.x,g.y,0));for(e=0;e<f;e++)l=n[e],k=l[0]+h,g=l[1]+h,l=l[2]+h,this.faces.push(new THREE.Face3(k,g,l,null,null,c)),this.faceVertexUvs[0].push(d.generateBottomUV(this,a,b,k,g,l))};
THREE.LatheGeometry=function(a,b,c,d){THREE.Geometry.call(this);b=b||12;c=c||0;d=d||2*Math.PI;for(var e=1/(a.length-1),f=1/b,g=0,h=b;g<=h;g++)for(var k=c+g*f*d,l=Math.cos(k),n=Math.sin(k),k=0,q=a.length;k<q;k++){var r=a[k],t=new THREE.Vector3;t.x=l*r.x-n*r.y;t.y=n*r.x+l*r.y;t.z=r.z;this.vertices.push(t)}c=a.length;g=0;for(h=b;g<h;g++)for(k=0,q=a.length-1;k<q;k++){b=n=k+c*g;d=n+c;var l=n+1+c,n=n+1,r=g*f,t=k*e,s=r+f,p=t+e;this.faces.push(new THREE.Face3(b,d,n));this.faceVertexUvs[0].push([new THREE.Vector2(r,
t),new THREE.Vector2(s,t),new THREE.Vector2(r,p)]);this.faces.push(new THREE.Face3(d,l,n));this.faceVertexUvs[0].push([new THREE.Vector2(s,t),new THREE.Vector2(s,p),new THREE.Vector2(r,p)])}this.mergeVertices();this.computeFaceNormals();this.computeVertexNormals()};THREE.LatheGeometry.prototype=Object.create(THREE.Geometry.prototype);
THREE.PlaneGeometry=function(a,b,c,d){THREE.Geometry.call(this);this.parameters={width:a,height:b,widthSegments:c,heightSegments:d};var e=a/2,f=b/2;c=c||1;d=d||1;var g=c+1,h=d+1,k=a/c,l=b/d,n=new THREE.Vector3(0,0,1);for(a=0;a<h;a++){var q=a*l-f;for(b=0;b<g;b++)this.vertices.push(new THREE.Vector3(b*k-e,-q,0))}for(a=0;a<d;a++)for(b=0;b<c;b++){var r=b+g*a,e=b+g*(a+1),f=b+1+g*(a+1),h=b+1+g*a,k=new THREE.Vector2(b/c,1-a/d),l=new THREE.Vector2(b/c,1-(a+1)/d),q=new THREE.Vector2((b+1)/c,1-(a+1)/d),t=new THREE.Vector2((b+
1)/c,1-a/d),r=new THREE.Face3(r,e,h);r.normal.copy(n);r.vertexNormals.push(n.clone(),n.clone(),n.clone());this.faces.push(r);this.faceVertexUvs[0].push([k,l,t]);r=new THREE.Face3(e,f,h);r.normal.copy(n);r.vertexNormals.push(n.clone(),n.clone(),n.clone());this.faces.push(r);this.faceVertexUvs[0].push([l.clone(),q,t.clone()])}};THREE.PlaneGeometry.prototype=Object.create(THREE.Geometry.prototype);
THREE.RingGeometry=function(a,b,c,d,e,f){THREE.Geometry.call(this);a=a||0;b=b||50;e=void 0!==e?e:0;f=void 0!==f?f:2*Math.PI;c=void 0!==c?Math.max(3,c):8;d=void 0!==d?Math.max(1,d):8;var g,h=[],k=a,l=(b-a)/d;for(a=0;a<d+1;a++){for(g=0;g<c+1;g++){var n=new THREE.Vector3,q=e+g/c*f;n.x=k*Math.cos(q);n.y=k*Math.sin(q);this.vertices.push(n);h.push(new THREE.Vector2((n.x/b+1)/2,(n.y/b+1)/2))}k+=l}b=new THREE.Vector3(0,0,1);for(a=0;a<d;a++)for(e=a*(c+1),g=0;g<c;g++)f=q=g+e,l=q+c+1,n=q+c+2,this.faces.push(new THREE.Face3(f,
l,n,[b.clone(),b.clone(),b.clone()])),this.faceVertexUvs[0].push([h[f].clone(),h[l].clone(),h[n].clone()]),f=q,l=q+c+2,n=q+1,this.faces.push(new THREE.Face3(f,l,n,[b.clone(),b.clone(),b.clone()])),this.faceVertexUvs[0].push([h[f].clone(),h[l].clone(),h[n].clone()]);this.computeFaceNormals();this.boundingSphere=new THREE.Sphere(new THREE.Vector3,k)};THREE.RingGeometry.prototype=Object.create(THREE.Geometry.prototype);
THREE.SphereGeometry=function(a,b,c,d,e,f,g){THREE.Geometry.call(this);this.parameters={radius:a,widthSegments:b,heightSegments:c,phiStart:d,phiLength:e,thetaStart:f,thetaLength:g};a=a||50;b=Math.max(3,Math.floor(b)||8);c=Math.max(2,Math.floor(c)||6);d=void 0!==d?d:0;e=void 0!==e?e:2*Math.PI;f=void 0!==f?f:0;g=void 0!==g?g:Math.PI;var h,k,l=[],n=[];for(k=0;k<=c;k++){var q=[],r=[];for(h=0;h<=b;h++){var t=h/b,s=k/c,p=new THREE.Vector3;p.x=-a*Math.cos(d+t*e)*Math.sin(f+s*g);p.y=a*Math.cos(f+s*g);p.z=
a*Math.sin(d+t*e)*Math.sin(f+s*g);this.vertices.push(p);q.push(this.vertices.length-1);r.push(new THREE.Vector2(t,1-s))}l.push(q);n.push(r)}for(k=0;k<c;k++)for(h=0;h<b;h++){d=l[k][h+1];e=l[k][h];f=l[k+1][h];g=l[k+1][h+1];var q=this.vertices[d].clone().normalize(),r=this.vertices[e].clone().normalize(),t=this.vertices[f].clone().normalize(),s=this.vertices[g].clone().normalize(),p=n[k][h+1].clone(),v=n[k][h].clone(),w=n[k+1][h].clone(),u=n[k+1][h+1].clone();Math.abs(this.vertices[d].y)===a?(p.x=(p.x+
v.x)/2,this.faces.push(new THREE.Face3(d,f,g,[q,t,s])),this.faceVertexUvs[0].push([p,w,u])):Math.abs(this.vertices[f].y)===a?(w.x=(w.x+u.x)/2,this.faces.push(new THREE.Face3(d,e,f,[q,r,t])),this.faceVertexUvs[0].push([p,v,w])):(this.faces.push(new THREE.Face3(d,e,g,[q,r,s])),this.faceVertexUvs[0].push([p,v,u]),this.faces.push(new THREE.Face3(e,f,g,[r.clone(),t,s.clone()])),this.faceVertexUvs[0].push([v.clone(),w,u.clone()]))}this.computeFaceNormals();this.boundingSphere=new THREE.Sphere(new THREE.Vector3,
a)};THREE.SphereGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.TextGeometry=function(a,b){b=b||{};var c=THREE.FontUtils.generateShapes(a,b);b.amount=void 0!==b.height?b.height:50;void 0===b.bevelThickness&&(b.bevelThickness=10);void 0===b.bevelSize&&(b.bevelSize=8);void 0===b.bevelEnabled&&(b.bevelEnabled=!1);THREE.ExtrudeGeometry.call(this,c,b)};THREE.TextGeometry.prototype=Object.create(THREE.ExtrudeGeometry.prototype);
THREE.TorusGeometry=function(a,b,c,d,e){THREE.Geometry.call(this);this.parameters={radius:a,tube:b,radialSegments:c,tubularSegments:d,arc:e};a=a||100;b=b||40;c=c||8;d=d||6;e=e||2*Math.PI;for(var f=new THREE.Vector3,g=[],h=[],k=0;k<=c;k++)for(var l=0;l<=d;l++){var n=l/d*e,q=k/c*Math.PI*2;f.x=a*Math.cos(n);f.y=a*Math.sin(n);var r=new THREE.Vector3;r.x=(a+b*Math.cos(q))*Math.cos(n);r.y=(a+b*Math.cos(q))*Math.sin(n);r.z=b*Math.sin(q);this.vertices.push(r);g.push(new THREE.Vector2(l/d,k/c));h.push(r.clone().sub(f).normalize())}for(k=
1;k<=c;k++)for(l=1;l<=d;l++)a=(d+1)*k+l-1,b=(d+1)*(k-1)+l-1,e=(d+1)*(k-1)+l,f=(d+1)*k+l,n=new THREE.Face3(a,b,f,[h[a].clone(),h[b].clone(),h[f].clone()]),this.faces.push(n),this.faceVertexUvs[0].push([g[a].clone(),g[b].clone(),g[f].clone()]),n=new THREE.Face3(b,e,f,[h[b].clone(),h[e].clone(),h[f].clone()]),this.faces.push(n),this.faceVertexUvs[0].push([g[b].clone(),g[e].clone(),g[f].clone()]);this.computeFaceNormals()};THREE.TorusGeometry.prototype=Object.create(THREE.Geometry.prototype);
THREE.TorusKnotGeometry=function(a,b,c,d,e,f,g){function h(a,b,c,d,e){var f=Math.cos(a),g=Math.sin(a);a*=b/c;b=Math.cos(a);f*=d*(2+b)*0.5;g=d*(2+b)*g*0.5;d=e*d*Math.sin(a)*0.5;return new THREE.Vector3(f,g,d)}THREE.Geometry.call(this);this.parameters={radius:a,tube:b,radialSegments:c,tubularSegments:d,p:e,q:f,heightScale:g};a=a||100;b=b||40;c=c||64;d=d||8;e=e||2;f=f||3;g=g||1;for(var k=Array(c),l=new THREE.Vector3,n=new THREE.Vector3,q=new THREE.Vector3,r=0;r<c;++r){k[r]=Array(d);var t=r/c*2*e*Math.PI,
s=h(t,f,e,a,g),t=h(t+0.01,f,e,a,g);l.subVectors(t,s);n.addVectors(t,s);q.crossVectors(l,n);n.crossVectors(q,l);q.normalize();n.normalize();for(t=0;t<d;++t){var p=t/d*2*Math.PI,v=-b*Math.cos(p),p=b*Math.sin(p),w=new THREE.Vector3;w.x=s.x+v*n.x+p*q.x;w.y=s.y+v*n.y+p*q.y;w.z=s.z+v*n.z+p*q.z;k[r][t]=this.vertices.push(w)-1}}for(r=0;r<c;++r)for(t=0;t<d;++t)e=(r+1)%c,f=(t+1)%d,a=k[r][t],b=k[e][t],e=k[e][f],f=k[r][f],g=new THREE.Vector2(r/c,t/d),l=new THREE.Vector2((r+1)/c,t/d),n=new THREE.Vector2((r+1)/
c,(t+1)/d),q=new THREE.Vector2(r/c,(t+1)/d),this.faces.push(new THREE.Face3(a,b,f)),this.faceVertexUvs[0].push([g,l,q]),this.faces.push(new THREE.Face3(b,e,f)),this.faceVertexUvs[0].push([l.clone(),n,q.clone()]);this.computeFaceNormals();this.computeVertexNormals()};THREE.TorusKnotGeometry.prototype=Object.create(THREE.Geometry.prototype);
THREE.TubeGeometry=function(a,b,c,d,e){THREE.Geometry.call(this);this.parameters={path:a,segments:b,radius:c,radialSegments:d,closed:e};b=b||64;c=c||1;d=d||8;e=e||!1;var f=[],g,h,k=b+1,l,n,q,r,t=new THREE.Vector3,s,p,v;s=new THREE.TubeGeometry.FrenetFrames(a,b,e);p=s.normals;v=s.binormals;this.tangents=s.tangents;this.normals=p;this.binormals=v;for(s=0;s<k;s++)for(f[s]=[],l=s/(k-1),r=a.getPointAt(l),g=p[s],h=v[s],l=0;l<d;l++)n=l/d*2*Math.PI,q=-c*Math.cos(n),n=c*Math.sin(n),t.copy(r),t.x+=q*g.x+n*
h.x,t.y+=q*g.y+n*h.y,t.z+=q*g.z+n*h.z,f[s][l]=this.vertices.push(new THREE.Vector3(t.x,t.y,t.z))-1;for(s=0;s<b;s++)for(l=0;l<d;l++)k=e?(s+1)%b:s+1,t=(l+1)%d,a=f[s][l],c=f[k][l],k=f[k][t],t=f[s][t],p=new THREE.Vector2(s/b,l/d),v=new THREE.Vector2((s+1)/b,l/d),g=new THREE.Vector2((s+1)/b,(l+1)/d),h=new THREE.Vector2(s/b,(l+1)/d),this.faces.push(new THREE.Face3(a,c,t)),this.faceVertexUvs[0].push([p,v,h]),this.faces.push(new THREE.Face3(c,k,t)),this.faceVertexUvs[0].push([v.clone(),g,h.clone()]);this.computeFaceNormals();
this.computeVertexNormals()};THREE.TubeGeometry.prototype=Object.create(THREE.Geometry.prototype);
THREE.TubeGeometry.FrenetFrames=function(a,b,c){new THREE.Vector3;var d=new THREE.Vector3;new THREE.Vector3;var e=[],f=[],g=[],h=new THREE.Vector3,k=new THREE.Matrix4;b+=1;var l,n,q;this.tangents=e;this.normals=f;this.binormals=g;for(l=0;l<b;l++)n=l/(b-1),e[l]=a.getTangentAt(n),e[l].normalize();f[0]=new THREE.Vector3;g[0]=new THREE.Vector3;a=Number.MAX_VALUE;l=Math.abs(e[0].x);n=Math.abs(e[0].y);q=Math.abs(e[0].z);l<=a&&(a=l,d.set(1,0,0));n<=a&&(a=n,d.set(0,1,0));q<=a&&d.set(0,0,1);h.crossVectors(e[0],
d).normalize();f[0].crossVectors(e[0],h);g[0].crossVectors(e[0],f[0]);for(l=1;l<b;l++)f[l]=f[l-1].clone(),g[l]=g[l-1].clone(),h.crossVectors(e[l-1],e[l]),1E-4<h.length()&&(h.normalize(),d=Math.acos(THREE.Math.clamp(e[l-1].dot(e[l]),-1,1)),f[l].applyMatrix4(k.makeRotationAxis(h,d))),g[l].crossVectors(e[l],f[l]);if(c)for(d=Math.acos(THREE.Math.clamp(f[0].dot(f[b-1]),-1,1)),d/=b-1,0<e[0].dot(h.crossVectors(f[0],f[b-1]))&&(d=-d),l=1;l<b;l++)f[l].applyMatrix4(k.makeRotationAxis(e[l],d*l)),g[l].crossVectors(e[l],
f[l])};
THREE.PolyhedronGeometry=function(a,b,c,d){function e(a){var b=a.normalize().clone();b.index=k.vertices.push(b)-1;var c=Math.atan2(a.z,-a.x)/2/Math.PI+0.5;a=Math.atan2(-a.y,Math.sqrt(a.x*a.x+a.z*a.z))/Math.PI+0.5;b.uv=new THREE.Vector2(c,1-a);return b}function f(a,b,c){var d=new THREE.Face3(a.index,b.index,c.index,[a.clone(),b.clone(),c.clone()]);k.faces.push(d);v.copy(a).add(b).add(c).divideScalar(3);d=Math.atan2(v.z,-v.x);k.faceVertexUvs[0].push([h(a.uv,a,d),h(b.uv,b,d),h(c.uv,c,d)])}function g(a,b){var c=
Math.pow(2,b);Math.pow(4,b);for(var d=e(k.vertices[a.a]),g=e(k.vertices[a.b]),h=e(k.vertices[a.c]),l=[],n=0;n<=c;n++){l[n]=[];for(var p=e(d.clone().lerp(h,n/c)),q=e(g.clone().lerp(h,n/c)),r=c-n,s=0;s<=r;s++)l[n][s]=0==s&&n==c?p:e(p.clone().lerp(q,s/r))}for(n=0;n<c;n++)for(s=0;s<2*(c-n)-1;s++)d=Math.floor(s/2),0==s%2?f(l[n][d+1],l[n+1][d],l[n][d]):f(l[n][d+1],l[n+1][d+1],l[n+1][d])}function h(a,b,c){0>c&&1===a.x&&(a=new THREE.Vector2(a.x-1,a.y));0===b.x&&0===b.z&&(a=new THREE.Vector2(c/2/Math.PI+0.5,
a.y));return a.clone()}THREE.Geometry.call(this);c=c||1;d=d||0;for(var k=this,l=0,n=a.length;l<n;l+=3)e(new THREE.Vector3(a[l],a[l+1],a[l+2]));a=this.vertices;for(var q=[],r=l=0,n=b.length;l<n;l+=3,r++){var t=a[b[l]],s=a[b[l+1]],p=a[b[l+2]];q[r]=new THREE.Face3(t.index,s.index,p.index,[t.clone(),s.clone(),p.clone()])}for(var v=new THREE.Vector3,l=0,n=q.length;l<n;l++)g(q[l],d);l=0;for(n=this.faceVertexUvs[0].length;l<n;l++)b=this.faceVertexUvs[0][l],d=b[0].x,a=b[1].x,q=b[2].x,r=Math.max(d,Math.max(a,
q)),t=Math.min(d,Math.min(a,q)),0.9<r&&0.1>t&&(0.2>d&&(b[0].x+=1),0.2>a&&(b[1].x+=1),0.2>q&&(b[2].x+=1));l=0;for(n=this.vertices.length;l<n;l++)this.vertices[l].multiplyScalar(c);this.mergeVertices();this.computeFaceNormals();this.boundingSphere=new THREE.Sphere(new THREE.Vector3,c)};THREE.PolyhedronGeometry.prototype=Object.create(THREE.Geometry.prototype);
THREE.IcosahedronGeometry=function(a,b){this.parameters={radius:a,detail:b};var c=(1+Math.sqrt(5))/2;THREE.PolyhedronGeometry.call(this,[-1,c,0,1,c,0,-1,-c,0,1,-c,0,0,-1,c,0,1,c,0,-1,-c,0,1,-c,c,0,-1,c,0,1,-c,0,-1,-c,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],a,b)};THREE.IcosahedronGeometry.prototype=Object.create(THREE.Geometry.prototype);
THREE.OctahedronGeometry=function(a,b){this.parameters={radius:a,detail:b};THREE.PolyhedronGeometry.call(this,[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],a,b)};THREE.OctahedronGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.TetrahedronGeometry=function(a,b){THREE.PolyhedronGeometry.call(this,[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],a,b)};THREE.TetrahedronGeometry.prototype=Object.create(THREE.Geometry.prototype);
THREE.ParametricGeometry=function(a,b,c){THREE.Geometry.call(this);var d=this.vertices,e=this.faces,f=this.faceVertexUvs[0],g,h,k,l,n=b+1;for(g=0;g<=c;g++)for(l=g/c,h=0;h<=b;h++)k=h/b,k=a(k,l),d.push(k);var q,r,t,s;for(g=0;g<c;g++)for(h=0;h<b;h++)a=g*n+h,d=g*n+h+1,l=(g+1)*n+h+1,k=(g+1)*n+h,q=new THREE.Vector2(h/b,g/c),r=new THREE.Vector2((h+1)/b,g/c),t=new THREE.Vector2((h+1)/b,(g+1)/c),s=new THREE.Vector2(h/b,(g+1)/c),e.push(new THREE.Face3(a,d,k)),f.push([q,r,s]),e.push(new THREE.Face3(d,l,k)),
f.push([r.clone(),t,s.clone()]);this.computeFaceNormals();this.computeVertexNormals()};THREE.ParametricGeometry.prototype=Object.create(THREE.Geometry.prototype);
THREE.AxisHelper=function(a){a=a||1;var b=new Float32Array([0,0,0,a,0,0,0,0,0,0,a,0,0,0,0,0,0,a]),c=new Float32Array([1,0,0,1,0.6,0,0,1,0,0.6,1,0,0,0,1,0,0.6,1]);a=new THREE.BufferGeometry;a.addAttribute("position",new THREE.BufferAttribute(b,3));a.addAttribute("color",new THREE.BufferAttribute(c,3));b=new THREE.LineBasicMaterial({vertexColors:THREE.VertexColors});THREE.Line.call(this,a,b,THREE.LinePieces)};THREE.AxisHelper.prototype=Object.create(THREE.Line.prototype);
THREE.ArrowHelper=function(){var a=new THREE.Geometry;a.vertices.push(new THREE.Vector3(0,0,0),new THREE.Vector3(0,1,0));var b=new THREE.CylinderGeometry(0,0.5,1,5,1);b.applyMatrix((new THREE.Matrix4).makeTranslation(0,-0.5,0));return function(c,d,e,f,g,h){THREE.Object3D.call(this);void 0===f&&(f=16776960);void 0===e&&(e=1);void 0===g&&(g=0.2*e);void 0===h&&(h=0.2*g);this.position.copy(d);this.line=new THREE.Line(a,new THREE.LineBasicMaterial({color:f}));this.line.matrixAutoUpdate=!1;this.add(this.line);
this.cone=new THREE.Mesh(b,new THREE.MeshBasicMaterial({color:f}));this.cone.matrixAutoUpdate=!1;this.add(this.cone);this.setDirection(c);this.setLength(e,g,h)}}();THREE.ArrowHelper.prototype=Object.create(THREE.Object3D.prototype);THREE.ArrowHelper.prototype.setDirection=function(){var a=new THREE.Vector3,b;return function(c){0.99999<c.y?this.quaternion.set(0,0,0,1):-0.99999>c.y?this.quaternion.set(1,0,0,0):(a.set(c.z,0,-c.x).normalize(),b=Math.acos(c.y),this.quaternion.setFromAxisAngle(a,b))}}();
THREE.ArrowHelper.prototype.setLength=function(a,b,c){void 0===b&&(b=0.2*a);void 0===c&&(c=0.2*b);this.line.scale.set(1,a,1);this.line.updateMatrix();this.cone.scale.set(c,b,c);this.cone.position.y=a;this.cone.updateMatrix()};THREE.ArrowHelper.prototype.setColor=function(a){this.line.material.color.set(a);this.cone.material.color.set(a)};
THREE.BoxHelper=function(a){var b=new THREE.BufferGeometry;b.addAttribute("position",new THREE.BufferAttribute(new Float32Array(72),3));THREE.Line.call(this,b,new THREE.LineBasicMaterial({color:16776960}),THREE.LinePieces);void 0!==a&&this.update(a)};THREE.BoxHelper.prototype=Object.create(THREE.Line.prototype);
THREE.BoxHelper.prototype.update=function(a){var b=a.geometry;null===b.boundingBox&&b.computeBoundingBox();var c=b.boundingBox.min,b=b.boundingBox.max,d=this.geometry.attributes.position.array;d[0]=b.x;d[1]=b.y;d[2]=b.z;d[3]=c.x;d[4]=b.y;d[5]=b.z;d[6]=c.x;d[7]=b.y;d[8]=b.z;d[9]=c.x;d[10]=c.y;d[11]=b.z;d[12]=c.x;d[13]=c.y;d[14]=b.z;d[15]=b.x;d[16]=c.y;d[17]=b.z;d[18]=b.x;d[19]=c.y;d[20]=b.z;d[21]=b.x;d[22]=b.y;d[23]=b.z;d[24]=b.x;d[25]=b.y;d[26]=c.z;d[27]=c.x;d[28]=b.y;d[29]=c.z;d[30]=c.x;d[31]=b.y;
d[32]=c.z;d[33]=c.x;d[34]=c.y;d[35]=c.z;d[36]=c.x;d[37]=c.y;d[38]=c.z;d[39]=b.x;d[40]=c.y;d[41]=c.z;d[42]=b.x;d[43]=c.y;d[44]=c.z;d[45]=b.x;d[46]=b.y;d[47]=c.z;d[48]=b.x;d[49]=b.y;d[50]=b.z;d[51]=b.x;d[52]=b.y;d[53]=c.z;d[54]=c.x;d[55]=b.y;d[56]=b.z;d[57]=c.x;d[58]=b.y;d[59]=c.z;d[60]=c.x;d[61]=c.y;d[62]=b.z;d[63]=c.x;d[64]=c.y;d[65]=c.z;d[66]=b.x;d[67]=c.y;d[68]=b.z;d[69]=b.x;d[70]=c.y;d[71]=c.z;this.geometry.attributes.position.needsUpdate=!0;this.geometry.computeBoundingSphere();this.matrixAutoUpdate=
!1;this.matrixWorld=a.matrixWorld};THREE.BoundingBoxHelper=function(a,b){var c=void 0!==b?b:8947848;this.object=a;this.box=new THREE.Box3;THREE.Mesh.call(this,new THREE.BoxGeometry(1,1,1),new THREE.MeshBasicMaterial({color:c,wireframe:!0}))};THREE.BoundingBoxHelper.prototype=Object.create(THREE.Mesh.prototype);THREE.BoundingBoxHelper.prototype.update=function(){this.box.setFromObject(this.object);this.box.size(this.scale);this.box.center(this.position)};
THREE.CameraHelper=function(a){function b(a,b,d){c(a,d);c(b,d)}function c(a,b){d.vertices.push(new THREE.Vector3);d.colors.push(new THREE.Color(b));void 0===f[a]&&(f[a]=[]);f[a].push(d.vertices.length-1)}var d=new THREE.Geometry,e=new THREE.LineBasicMaterial({color:16777215,vertexColors:THREE.FaceColors}),f={};b("n1","n2",16755200);b("n2","n4",16755200);b("n4","n3",16755200);b("n3","n1",16755200);b("f1","f2",16755200);b("f2","f4",16755200);b("f4","f3",16755200);b("f3","f1",16755200);b("n1","f1",16755200);
b("n2","f2",16755200);b("n3","f3",16755200);b("n4","f4",16755200);b("p","n1",16711680);b("p","n2",16711680);b("p","n3",16711680);b("p","n4",16711680);b("u1","u2",43775);b("u2","u3",43775);b("u3","u1",43775);b("c","t",16777215);b("p","c",3355443);b("cn1","cn2",3355443);b("cn3","cn4",3355443);b("cf1","cf2",3355443);b("cf3","cf4",3355443);THREE.Line.call(this,d,e,THREE.LinePieces);this.camera=a;this.matrixWorld=a.matrixWorld;this.matrixAutoUpdate=!1;this.pointMap=f;this.update()};
THREE.CameraHelper.prototype=Object.create(THREE.Line.prototype);
THREE.CameraHelper.prototype.update=function(){var a=new THREE.Vector3,b=new THREE.Camera,c=new THREE.Projector;return function(){function d(d,g,h,k){a.set(g,h,k);c.unprojectVector(a,b);d=e.pointMap[d];if(void 0!==d)for(g=0,h=d.length;g<h;g++)e.geometry.vertices[d[g]].copy(a)}var e=this;b.projectionMatrix.copy(this.camera.projectionMatrix);d("c",0,0,-1);d("t",0,0,1);d("n1",-1,-1,-1);d("n2",1,-1,-1);d("n3",-1,1,-1);d("n4",1,1,-1);d("f1",-1,-1,1);d("f2",1,-1,1);d("f3",-1,1,1);d("f4",1,1,1);d("u1",0.7,
1.1,-1);d("u2",-0.7,1.1,-1);d("u3",0,2,-1);d("cf1",-1,0,1);d("cf2",1,0,1);d("cf3",0,-1,1);d("cf4",0,1,1);d("cn1",-1,0,-1);d("cn2",1,0,-1);d("cn3",0,-1,-1);d("cn4",0,1,-1);this.geometry.verticesNeedUpdate=!0}}();
THREE.DirectionalLightHelper=function(a,b){THREE.Object3D.call(this);this.light=a;this.light.updateMatrixWorld();this.matrixWorld=a.matrixWorld;this.matrixAutoUpdate=!1;b=b||1;var c=new THREE.Geometry;c.vertices.push(new THREE.Vector3(-b,b,0),new THREE.Vector3(b,b,0),new THREE.Vector3(b,-b,0),new THREE.Vector3(-b,-b,0),new THREE.Vector3(-b,b,0));var d=new THREE.LineBasicMaterial({fog:!1});d.color.copy(this.light.color).multiplyScalar(this.light.intensity);this.lightPlane=new THREE.Line(c,d);this.add(this.lightPlane);
c=new THREE.Geometry;c.vertices.push(new THREE.Vector3,new THREE.Vector3);d=new THREE.LineBasicMaterial({fog:!1});d.color.copy(this.light.color).multiplyScalar(this.light.intensity);this.targetLine=new THREE.Line(c,d);this.add(this.targetLine);this.update()};THREE.DirectionalLightHelper.prototype=Object.create(THREE.Object3D.prototype);
THREE.DirectionalLightHelper.prototype.dispose=function(){this.lightPlane.geometry.dispose();this.lightPlane.material.dispose();this.targetLine.geometry.dispose();this.targetLine.material.dispose()};
THREE.DirectionalLightHelper.prototype.update=function(){var a=new THREE.Vector3,b=new THREE.Vector3,c=new THREE.Vector3;return function(){a.setFromMatrixPosition(this.light.matrixWorld);b.setFromMatrixPosition(this.light.target.matrixWorld);c.subVectors(b,a);this.lightPlane.lookAt(c);this.lightPlane.material.color.copy(this.light.color).multiplyScalar(this.light.intensity);this.targetLine.geometry.vertices[1].copy(c);this.targetLine.geometry.verticesNeedUpdate=!0;this.targetLine.material.color.copy(this.lightPlane.material.color)}}();
THREE.EdgesHelper=function(a,b){var c=void 0!==b?b:16777215,d=[0,0],e={},f=function(a,b){return a-b},g=["a","b","c"],h=new THREE.BufferGeometry,k=a.geometry.clone();k.mergeVertices();k.computeFaceNormals();for(var l=k.vertices,k=k.faces,n=0,q=0,r=k.length;q<r;q++)for(var t=k[q],s=0;3>s;s++){d[0]=t[g[s]];d[1]=t[g[(s+1)%3]];d.sort(f);var p=d.toString();void 0===e[p]?(e[p]={vert1:d[0],vert2:d[1],face1:q,face2:void 0},n++):e[p].face2=q}h.addAttribute("position",new THREE.Float32Attribute(6*n,3));d=h.attributes.position.array;
f=0;for(p in e)if(g=e[p],void 0===g.face2||0.9999>k[g.face1].normal.dot(k[g.face2].normal))n=l[g.vert1],d[f++]=n.x,d[f++]=n.y,d[f++]=n.z,n=l[g.vert2],d[f++]=n.x,d[f++]=n.y,d[f++]=n.z;THREE.Line.call(this,h,new THREE.LineBasicMaterial({color:c}),THREE.LinePieces);this.matrixAutoUpdate=!1;this.matrixWorld=a.matrixWorld};THREE.EdgesHelper.prototype=Object.create(THREE.Line.prototype);
THREE.FaceNormalsHelper=function(a,b,c,d){this.object=a;this.size=void 0!==b?b:1;a=void 0!==c?c:16776960;d=void 0!==d?d:1;b=new THREE.Geometry;c=0;for(var e=this.object.geometry.faces.length;c<e;c++)b.vertices.push(new THREE.Vector3,new THREE.Vector3);THREE.Line.call(this,b,new THREE.LineBasicMaterial({color:a,linewidth:d}),THREE.LinePieces);this.matrixAutoUpdate=!1;this.normalMatrix=new THREE.Matrix3;this.update()};THREE.FaceNormalsHelper.prototype=Object.create(THREE.Line.prototype);
THREE.FaceNormalsHelper.prototype.update=function(){var a=this.geometry.vertices,b=this.object,c=b.geometry.vertices,d=b.geometry.faces,e=b.matrixWorld;b.updateMatrixWorld(!0);this.normalMatrix.getNormalMatrix(e);for(var f=b=0,g=d.length;b<g;b++,f+=2){var h=d[b];a[f].copy(c[h.a]).add(c[h.b]).add(c[h.c]).divideScalar(3).applyMatrix4(e);a[f+1].copy(h.normal).applyMatrix3(this.normalMatrix).normalize().multiplyScalar(this.size).add(a[f])}this.geometry.verticesNeedUpdate=!0;return this};
THREE.GridHelper=function(a,b){var c=new THREE.Geometry,d=new THREE.LineBasicMaterial({vertexColors:THREE.VertexColors});this.color1=new THREE.Color(4473924);this.color2=new THREE.Color(8947848);for(var e=-a;e<=a;e+=b){c.vertices.push(new THREE.Vector3(-a,0,e),new THREE.Vector3(a,0,e),new THREE.Vector3(e,0,-a),new THREE.Vector3(e,0,a));var f=0===e?this.color1:this.color2;c.colors.push(f,f,f,f)}THREE.Line.call(this,c,d,THREE.LinePieces)};THREE.GridHelper.prototype=Object.create(THREE.Line.prototype);
THREE.GridHelper.prototype.setColors=function(a,b){this.color1.set(a);this.color2.set(b);this.geometry.colorsNeedUpdate=!0};
THREE.HemisphereLightHelper=function(a,b,c,d){THREE.Object3D.call(this);this.light=a;this.light.updateMatrixWorld();this.matrixWorld=a.matrixWorld;this.matrixAutoUpdate=!1;this.colors=[new THREE.Color,new THREE.Color];a=new THREE.SphereGeometry(b,4,2);a.applyMatrix((new THREE.Matrix4).makeRotationX(-Math.PI/2));for(b=0;8>b;b++)a.faces[b].color=this.colors[4>b?0:1];b=new THREE.MeshBasicMaterial({vertexColors:THREE.FaceColors,wireframe:!0});this.lightSphere=new THREE.Mesh(a,b);this.add(this.lightSphere);
this.update()};THREE.HemisphereLightHelper.prototype=Object.create(THREE.Object3D.prototype);THREE.HemisphereLightHelper.prototype.dispose=function(){this.lightSphere.geometry.dispose();this.lightSphere.material.dispose()};
THREE.HemisphereLightHelper.prototype.update=function(){var a=new THREE.Vector3;return function(){this.colors[0].copy(this.light.color).multiplyScalar(this.light.intensity);this.colors[1].copy(this.light.groundColor).multiplyScalar(this.light.intensity);this.lightSphere.lookAt(a.setFromMatrixPosition(this.light.matrixWorld).negate());this.lightSphere.geometry.colorsNeedUpdate=!0}}();
THREE.PointLightHelper=function(a,b){this.light=a;this.light.updateMatrixWorld();var c=new THREE.SphereGeometry(b,4,2),d=new THREE.MeshBasicMaterial({wireframe:!0,fog:!1});d.color.copy(this.light.color).multiplyScalar(this.light.intensity);THREE.Mesh.call(this,c,d);this.matrixWorld=this.light.matrixWorld;this.matrixAutoUpdate=!1};THREE.PointLightHelper.prototype=Object.create(THREE.Mesh.prototype);THREE.PointLightHelper.prototype.dispose=function(){this.geometry.dispose();this.material.dispose()};
THREE.PointLightHelper.prototype.update=function(){this.material.color.copy(this.light.color).multiplyScalar(this.light.intensity)};
THREE.SkeletonHelper=function(a){this.bones=this.getBoneList(a);for(var b=new THREE.Geometry,c=0;c<this.bones.length;c++)this.bones[c].parent instanceof THREE.Bone&&(b.vertices.push(new THREE.Vector3),b.vertices.push(new THREE.Vector3),b.colors.push(new THREE.Color(0,0,1)),b.colors.push(new THREE.Color(0,1,0)));c=new THREE.LineBasicMaterial({vertexColors:THREE.VertexColors,depthTest:!1,depthWrite:!1,transparent:!0});THREE.Line.call(this,b,c,THREE.LinePieces);this.root=a;this.matrixWorld=a.matrixWorld;
this.matrixAutoUpdate=!1;this.update()};THREE.SkeletonHelper.prototype=Object.create(THREE.Line.prototype);THREE.SkeletonHelper.prototype.getBoneList=function(a){var b=[];a instanceof THREE.Bone&&b.push(a);for(var c=0;c<a.children.length;c++)b.push.apply(b,this.getBoneList(a.children[c]));return b};
THREE.SkeletonHelper.prototype.update=function(){for(var a=this.geometry,b=(new THREE.Matrix4).getInverse(this.root.matrixWorld),c=new THREE.Matrix4,d=0,e=0;e<this.bones.length;e++){var f=this.bones[e];f.parent instanceof THREE.Bone&&(c.multiplyMatrices(b,f.matrixWorld),a.vertices[d].setFromMatrixPosition(c),c.multiplyMatrices(b,f.parent.matrixWorld),a.vertices[d+1].setFromMatrixPosition(c),d+=2)}a.verticesNeedUpdate=!0;a.computeBoundingSphere()};
THREE.SpotLightHelper=function(a){THREE.Object3D.call(this);this.light=a;this.light.updateMatrixWorld();this.matrixWorld=a.matrixWorld;this.matrixAutoUpdate=!1;a=new THREE.CylinderGeometry(0,1,1,8,1,!0);a.applyMatrix((new THREE.Matrix4).makeTranslation(0,-0.5,0));a.applyMatrix((new THREE.Matrix4).makeRotationX(-Math.PI/2));var b=new THREE.MeshBasicMaterial({wireframe:!0,fog:!1});this.cone=new THREE.Mesh(a,b);this.add(this.cone);this.update()};THREE.SpotLightHelper.prototype=Object.create(THREE.Object3D.prototype);
THREE.SpotLightHelper.prototype.dispose=function(){this.cone.geometry.dispose();this.cone.material.dispose()};THREE.SpotLightHelper.prototype.update=function(){var a=new THREE.Vector3,b=new THREE.Vector3;return function(){var c=this.light.distance?this.light.distance:1E4,d=c*Math.tan(this.light.angle);this.cone.scale.set(d,d,c);a.setFromMatrixPosition(this.light.matrixWorld);b.setFromMatrixPosition(this.light.target.matrixWorld);this.cone.lookAt(b.sub(a));this.cone.material.color.copy(this.light.color).multiplyScalar(this.light.intensity)}}();
THREE.VertexNormalsHelper=function(a,b,c,d){this.object=a;this.size=void 0!==b?b:1;b=void 0!==c?c:16711680;d=void 0!==d?d:1;c=new THREE.Geometry;a=a.geometry.faces;for(var e=0,f=a.length;e<f;e++)for(var g=0,h=a[e].vertexNormals.length;g<h;g++)c.vertices.push(new THREE.Vector3,new THREE.Vector3);THREE.Line.call(this,c,new THREE.LineBasicMaterial({color:b,linewidth:d}),THREE.LinePieces);this.matrixAutoUpdate=!1;this.normalMatrix=new THREE.Matrix3;this.update()};THREE.VertexNormalsHelper.prototype=Object.create(THREE.Line.prototype);
THREE.VertexNormalsHelper.prototype.update=function(a){var b=new THREE.Vector3;return function(a){a=["a","b","c","d"];this.object.updateMatrixWorld(!0);this.normalMatrix.getNormalMatrix(this.object.matrixWorld);for(var d=this.geometry.vertices,e=this.object.geometry.vertices,f=this.object.geometry.faces,g=this.object.matrixWorld,h=0,k=0,l=f.length;k<l;k++)for(var n=f[k],q=0,r=n.vertexNormals.length;q<r;q++){var t=n.vertexNormals[q];d[h].copy(e[n[a[q]]]).applyMatrix4(g);b.copy(t).applyMatrix3(this.normalMatrix).normalize().multiplyScalar(this.size);
b.add(d[h]);h+=1;d[h].copy(b);h+=1}this.geometry.verticesNeedUpdate=!0;return this}}();
THREE.VertexTangentsHelper=function(a,b,c,d){this.object=a;this.size=void 0!==b?b:1;b=void 0!==c?c:255;d=void 0!==d?d:1;c=new THREE.Geometry;a=a.geometry.faces;for(var e=0,f=a.length;e<f;e++)for(var g=0,h=a[e].vertexTangents.length;g<h;g++)c.vertices.push(new THREE.Vector3),c.vertices.push(new THREE.Vector3);THREE.Line.call(this,c,new THREE.LineBasicMaterial({color:b,linewidth:d}),THREE.LinePieces);this.matrixAutoUpdate=!1;this.update()};THREE.VertexTangentsHelper.prototype=Object.create(THREE.Line.prototype);
THREE.VertexTangentsHelper.prototype.update=function(a){var b=new THREE.Vector3;return function(a){a=["a","b","c","d"];this.object.updateMatrixWorld(!0);for(var d=this.geometry.vertices,e=this.object.geometry.vertices,f=this.object.geometry.faces,g=this.object.matrixWorld,h=0,k=0,l=f.length;k<l;k++)for(var n=f[k],q=0,r=n.vertexTangents.length;q<r;q++){var t=n.vertexTangents[q];d[h].copy(e[n[a[q]]]).applyMatrix4(g);b.copy(t).transformDirection(g).multiplyScalar(this.size);b.add(d[h]);h+=1;d[h].copy(b);
h+=1}this.geometry.verticesNeedUpdate=!0;return this}}();
THREE.WireframeHelper=function(a,b){var c=void 0!==b?b:16777215,d=[0,0],e={},f=function(a,b){return a-b},g=["a","b","c"],h=new THREE.BufferGeometry;if(a.geometry instanceof THREE.Geometry){for(var k=a.geometry.vertices,l=a.geometry.faces,n=0,q=new Uint32Array(6*l.length),r=0,t=l.length;r<t;r++)for(var s=l[r],p=0;3>p;p++){d[0]=s[g[p]];d[1]=s[g[(p+1)%3]];d.sort(f);var v=d.toString();void 0===e[v]&&(q[2*n]=d[0],q[2*n+1]=d[1],e[v]=!0,n++)}d=new Float32Array(6*n);r=0;for(t=n;r<t;r++)for(p=0;2>p;p++)n=
k[q[2*r+p]],g=6*r+3*p,d[g+0]=n.x,d[g+1]=n.y,d[g+2]=n.z;h.addAttribute("position",new THREE.BufferAttribute(d,3))}else if(a.geometry instanceof THREE.BufferGeometry){if(void 0!==a.geometry.attributes.index){for(var k=a.geometry.attributes.position.array,t=a.geometry.attributes.index.array,l=a.geometry.offsets,n=0,q=new Uint32Array(2*t.length),s=0,w=l.length;s<w;++s)for(var p=l[s].start,v=l[s].count,g=l[s].index,r=p,u=p+v;r<u;r+=3)for(p=0;3>p;p++)d[0]=g+t[r+p],d[1]=g+t[r+(p+1)%3],d.sort(f),v=d.toString(),
void 0===e[v]&&(q[2*n]=d[0],q[2*n+1]=d[1],e[v]=!0,n++);d=new Float32Array(6*n);r=0;for(t=n;r<t;r++)for(p=0;2>p;p++)g=6*r+3*p,n=3*q[2*r+p],d[g+0]=k[n],d[g+1]=k[n+1],d[g+2]=k[n+2]}else for(k=a.geometry.attributes.position.array,n=k.length/3,q=n/3,d=new Float32Array(6*n),r=0,t=q;r<t;r++)for(p=0;3>p;p++)g=18*r+6*p,q=9*r+3*p,d[g+0]=k[q],d[g+1]=k[q+1],d[g+2]=k[q+2],n=9*r+(p+1)%3*3,d[g+3]=k[n],d[g+4]=k[n+1],d[g+5]=k[n+2];h.addAttribute("position",new THREE.BufferAttribute(d,3))}THREE.Line.call(this,h,new THREE.LineBasicMaterial({color:c}),
THREE.LinePieces);this.matrixAutoUpdate=!1;this.matrixWorld=a.matrixWorld};THREE.WireframeHelper.prototype=Object.create(THREE.Line.prototype);THREE.ImmediateRenderObject=function(){THREE.Object3D.call(this);this.render=function(a){}};THREE.ImmediateRenderObject.prototype=Object.create(THREE.Object3D.prototype);THREE.LensFlare=function(a,b,c,d,e){THREE.Object3D.call(this);this.lensFlares=[];this.positionScreen=new THREE.Vector3;this.customUpdateCallback=void 0;void 0!==a&&this.add(a,b,c,d,e)};
THREE.LensFlare.prototype=Object.create(THREE.Object3D.prototype);THREE.LensFlare.prototype.add=function(a,b,c,d,e,f){void 0===b&&(b=-1);void 0===c&&(c=0);void 0===f&&(f=1);void 0===e&&(e=new THREE.Color(16777215));void 0===d&&(d=THREE.NormalBlending);c=Math.min(c,Math.max(0,c));this.lensFlares.push({texture:a,size:b,distance:c,x:0,y:0,z:0,scale:1,rotation:1,opacity:f,color:e,blending:d})};
THREE.LensFlare.prototype.updateLensFlares=function(){var a,b=this.lensFlares.length,c,d=2*-this.positionScreen.x,e=2*-this.positionScreen.y;for(a=0;a<b;a++)c=this.lensFlares[a],c.x=this.positionScreen.x+d*c.distance,c.y=this.positionScreen.y+e*c.distance,c.wantedRotation=c.x*Math.PI*0.25,c.rotation+=0.25*(c.wantedRotation-c.rotation)};
THREE.MorphBlendMesh=function(a,b){THREE.Mesh.call(this,a,b);this.animationsMap={};this.animationsList=[];var c=this.geometry.morphTargets.length;this.createAnimation("__default",0,c-1,c/1);this.setAnimationWeight("__default",1)};THREE.MorphBlendMesh.prototype=Object.create(THREE.Mesh.prototype);
THREE.MorphBlendMesh.prototype.createAnimation=function(a,b,c,d){b={startFrame:b,endFrame:c,length:c-b+1,fps:d,duration:(c-b)/d,lastFrame:0,currentFrame:0,active:!1,time:0,direction:1,weight:1,directionBackwards:!1,mirroredLoop:!1};this.animationsMap[a]=b;this.animationsList.push(b)};
THREE.MorphBlendMesh.prototype.autoCreateAnimations=function(a){for(var b=/([a-z]+)_?(\d+)/,c,d={},e=this.geometry,f=0,g=e.morphTargets.length;f<g;f++){var h=e.morphTargets[f].name.match(b);if(h&&1<h.length){var k=h[1];d[k]||(d[k]={start:Infinity,end:-Infinity});h=d[k];f<h.start&&(h.start=f);f>h.end&&(h.end=f);c||(c=k)}}for(k in d)h=d[k],this.createAnimation(k,h.start,h.end,a);this.firstAnimation=c};
THREE.MorphBlendMesh.prototype.setAnimationDirectionForward=function(a){if(a=this.animationsMap[a])a.direction=1,a.directionBackwards=!1};THREE.MorphBlendMesh.prototype.setAnimationDirectionBackward=function(a){if(a=this.animationsMap[a])a.direction=-1,a.directionBackwards=!0};THREE.MorphBlendMesh.prototype.setAnimationFPS=function(a,b){var c=this.animationsMap[a];c&&(c.fps=b,c.duration=(c.end-c.start)/c.fps)};
THREE.MorphBlendMesh.prototype.setAnimationDuration=function(a,b){var c=this.animationsMap[a];c&&(c.duration=b,c.fps=(c.end-c.start)/c.duration)};THREE.MorphBlendMesh.prototype.setAnimationWeight=function(a,b){var c=this.animationsMap[a];c&&(c.weight=b)};THREE.MorphBlendMesh.prototype.setAnimationTime=function(a,b){var c=this.animationsMap[a];c&&(c.time=b)};THREE.MorphBlendMesh.prototype.getAnimationTime=function(a){var b=0;if(a=this.animationsMap[a])b=a.time;return b};
THREE.MorphBlendMesh.prototype.getAnimationDuration=function(a){var b=-1;if(a=this.animationsMap[a])b=a.duration;return b};THREE.MorphBlendMesh.prototype.playAnimation=function(a){var b=this.animationsMap[a];b?(b.time=0,b.active=!0):console.warn("animation["+a+"] undefined")};THREE.MorphBlendMesh.prototype.stopAnimation=function(a){if(a=this.animationsMap[a])a.active=!1};
THREE.MorphBlendMesh.prototype.update=function(a){for(var b=0,c=this.animationsList.length;b<c;b++){var d=this.animationsList[b];if(d.active){var e=d.duration/d.length;d.time+=d.direction*a;if(d.mirroredLoop){if(d.time>d.duration||0>d.time)d.direction*=-1,d.time>d.duration&&(d.time=d.duration,d.directionBackwards=!0),0>d.time&&(d.time=0,d.directionBackwards=!1)}else d.time%=d.duration,0>d.time&&(d.time+=d.duration);var f=d.startFrame+THREE.Math.clamp(Math.floor(d.time/e),0,d.length-1),g=d.weight;
f!==d.currentFrame&&(this.morphTargetInfluences[d.lastFrame]=0,this.morphTargetInfluences[d.currentFrame]=1*g,this.morphTargetInfluences[f]=0,d.lastFrame=d.currentFrame,d.currentFrame=f);e=d.time%e/e;d.directionBackwards&&(e=1-e);this.morphTargetInfluences[d.currentFrame]=e*g;this.morphTargetInfluences[d.lastFrame]=(1-e)*g}}};
THREE.LensFlarePlugin=function(){function a(a,b){var d=c.createProgram(),e=c.createShader(c.FRAGMENT_SHADER),f=c.createShader(c.VERTEX_SHADER),g="precision "+b+" float;\n";c.shaderSource(e,g+a.fragmentShader);c.shaderSource(f,g+a.vertexShader);c.compileShader(e);c.compileShader(f);c.attachShader(d,e);c.attachShader(d,f);c.linkProgram(d);return d}var b=[],c,d,e,f,g,h,k,l,n,q,r,t,s;this.init=function(b){c=b.context;d=b;e=b.getPrecision();f=new Float32Array(16);g=new Uint16Array(6);b=0;f[b++]=-1;f[b++]=
-1;f[b++]=0;f[b++]=0;f[b++]=1;f[b++]=-1;f[b++]=1;f[b++]=0;f[b++]=1;f[b++]=1;f[b++]=1;f[b++]=1;f[b++]=-1;f[b++]=1;f[b++]=0;f[b++]=1;b=0;g[b++]=0;g[b++]=1;g[b++]=2;g[b++]=0;g[b++]=2;g[b++]=3;h=c.createBuffer();k=c.createBuffer();c.bindBuffer(c.ARRAY_BUFFER,h);c.bufferData(c.ARRAY_BUFFER,f,c.STATIC_DRAW);c.bindBuffer(c.ELEMENT_ARRAY_BUFFER,k);c.bufferData(c.ELEMENT_ARRAY_BUFFER,g,c.STATIC_DRAW);l=c.createTexture();n=c.createTexture();c.bindTexture(c.TEXTURE_2D,l);c.texImage2D(c.TEXTURE_2D,0,c.RGB,16,
16,0,c.RGB,c.UNSIGNED_BYTE,null);c.texParameteri(c.TEXTURE_2D,c.TEXTURE_WRAP_S,c.CLAMP_TO_EDGE);c.texParameteri(c.TEXTURE_2D,c.TEXTURE_WRAP_T,c.CLAMP_TO_EDGE);c.texParameteri(c.TEXTURE_2D,c.TEXTURE_MAG_FILTER,c.NEAREST);c.texParameteri(c.TEXTURE_2D,c.TEXTURE_MIN_FILTER,c.NEAREST);c.bindTexture(c.TEXTURE_2D,n);c.texImage2D(c.TEXTURE_2D,0,c.RGBA,16,16,0,c.RGBA,c.UNSIGNED_BYTE,null);c.texParameteri(c.TEXTURE_2D,c.TEXTURE_WRAP_S,c.CLAMP_TO_EDGE);c.texParameteri(c.TEXTURE_2D,c.TEXTURE_WRAP_T,c.CLAMP_TO_EDGE);
c.texParameteri(c.TEXTURE_2D,c.TEXTURE_MAG_FILTER,c.NEAREST);c.texParameteri(c.TEXTURE_2D,c.TEXTURE_MIN_FILTER,c.NEAREST);0>=c.getParameter(c.MAX_VERTEX_TEXTURE_IMAGE_UNITS)?(q=!1,r=a(THREE.ShaderFlares.lensFlare,e)):(q=!0,r=a(THREE.ShaderFlares.lensFlareVertexTexture,e));t={};s={};t.vertex=c.getAttribLocation(r,"position");t.uv=c.getAttribLocation(r,"uv");s.renderType=c.getUniformLocation(r,"renderType");s.map=c.getUniformLocation(r,"map");s.occlusionMap=c.getUniformLocation(r,"occlusionMap");s.opacity=
c.getUniformLocation(r,"opacity");s.color=c.getUniformLocation(r,"color");s.scale=c.getUniformLocation(r,"scale");s.rotation=c.getUniformLocation(r,"rotation");s.screenPosition=c.getUniformLocation(r,"screenPosition")};this.render=function(a,e,f,g){b.length=0;a.traverseVisible(function(a){a instanceof THREE.LensFlare&&b.push(a)});if(0!==b.length){a=new THREE.Vector3;var D=g/f,A=0.5*f,x=0.5*g,C=16/g,I=new THREE.Vector2(C*D,C),z=new THREE.Vector3(1,1,0),y=new THREE.Vector2(1,1),K=s,C=t;c.useProgram(r);
c.enableVertexAttribArray(t.vertex);c.enableVertexAttribArray(t.uv);c.uniform1i(K.occlusionMap,0);c.uniform1i(K.map,1);c.bindBuffer(c.ARRAY_BUFFER,h);c.vertexAttribPointer(C.vertex,2,c.FLOAT,!1,16,0);c.vertexAttribPointer(C.uv,2,c.FLOAT,!1,16,8);c.bindBuffer(c.ELEMENT_ARRAY_BUFFER,k);c.disable(c.CULL_FACE);c.depthMask(!1);for(var N=0,ba=b.length;N<ba;N++){C=16/g;I.set(C*D,C);var P=b[N];a.set(P.matrixWorld.elements[12],P.matrixWorld.elements[13],P.matrixWorld.elements[14]);a.applyMatrix4(e.matrixWorldInverse);
a.applyProjection(e.projectionMatrix);z.copy(a);y.x=z.x*A+A;y.y=z.y*x+x;if(q||0<y.x&&y.x<f&&0<y.y&&y.y<g){c.activeTexture(c.TEXTURE1);c.bindTexture(c.TEXTURE_2D,l);c.copyTexImage2D(c.TEXTURE_2D,0,c.RGB,y.x-8,y.y-8,16,16,0);c.uniform1i(K.renderType,0);c.uniform2f(K.scale,I.x,I.y);c.uniform3f(K.screenPosition,z.x,z.y,z.z);c.disable(c.BLEND);c.enable(c.DEPTH_TEST);c.drawElements(c.TRIANGLES,6,c.UNSIGNED_SHORT,0);c.activeTexture(c.TEXTURE0);c.bindTexture(c.TEXTURE_2D,n);c.copyTexImage2D(c.TEXTURE_2D,
0,c.RGBA,y.x-8,y.y-8,16,16,0);c.uniform1i(K.renderType,1);c.disable(c.DEPTH_TEST);c.activeTexture(c.TEXTURE1);c.bindTexture(c.TEXTURE_2D,l);c.drawElements(c.TRIANGLES,6,c.UNSIGNED_SHORT,0);P.positionScreen.copy(z);P.customUpdateCallback?P.customUpdateCallback(P):P.updateLensFlares();c.uniform1i(K.renderType,2);c.enable(c.BLEND);for(var O=0,J=P.lensFlares.length;O<J;O++){var E=P.lensFlares[O];0.001<E.opacity&&0.001<E.scale&&(z.x=E.x,z.y=E.y,z.z=E.z,C=E.size*E.scale/g,I.x=C*D,I.y=C,c.uniform3f(K.screenPosition,
z.x,z.y,z.z),c.uniform2f(K.scale,I.x,I.y),c.uniform1f(K.rotation,E.rotation),c.uniform1f(K.opacity,E.opacity),c.uniform3f(K.color,E.color.r,E.color.g,E.color.b),d.setBlending(E.blending,E.blendEquation,E.blendSrc,E.blendDst),d.setTexture(E.texture,1),c.drawElements(c.TRIANGLES,6,c.UNSIGNED_SHORT,0))}}}c.enable(c.CULL_FACE);c.enable(c.DEPTH_TEST);c.depthMask(!0)}}};
THREE.ShadowMapPlugin=function(){function a(b,c,d){if(c.visible){var e=b.__webglObjects[c.id];if(e&&c.castShadow&&(!1===c.frustumCulled||!0===h.intersectsObject(c)))for(var f=0,g=e.length;f<g;f++){var k=e[f];c._modelViewMatrix.multiplyMatrices(d.matrixWorldInverse,c.matrixWorld);r.push(k)}f=0;for(g=c.children.length;f<g;f++)a(b,c.children[f],d)}}var b,c,d,e,f,g,h=new THREE.Frustum,k=new THREE.Matrix4,l=new THREE.Vector3,n=new THREE.Vector3,q=new THREE.Vector3,r=[];this.init=function(a){b=a.context;
c=a;a=THREE.ShaderLib.depthRGBA;var h=THREE.UniformsUtils.clone(a.uniforms);d=new THREE.ShaderMaterial({fragmentShader:a.fragmentShader,vertexShader:a.vertexShader,uniforms:h});e=new THREE.ShaderMaterial({fragmentShader:a.fragmentShader,vertexShader:a.vertexShader,uniforms:h,morphTargets:!0});f=new THREE.ShaderMaterial({fragmentShader:a.fragmentShader,vertexShader:a.vertexShader,uniforms:h,skinning:!0});g=new THREE.ShaderMaterial({fragmentShader:a.fragmentShader,vertexShader:a.vertexShader,uniforms:h,
morphTargets:!0,skinning:!0});d._shadowPass=!0;e._shadowPass=!0;f._shadowPass=!0;g._shadowPass=!0};this.render=function(a,b){c.shadowMapEnabled&&c.shadowMapAutoUpdate&&this.update(a,b)};this.update=function(t,s){var p,v,w,u,D,A,x,C,I=[];u=0;b.clearColor(1,1,1,1);b.disable(b.BLEND);b.enable(b.CULL_FACE);b.frontFace(b.CCW);c.shadowMapCullFace===THREE.CullFaceFront?b.cullFace(b.FRONT):b.cullFace(b.BACK);c.setDepthTest(!0);p=0;for(v=t.__lights.length;p<v;p++)if(w=t.__lights[p],w.castShadow)if(w instanceof
THREE.DirectionalLight&&w.shadowCascade)for(D=0;D<w.shadowCascadeCount;D++){var z;if(w.shadowCascadeArray[D])z=w.shadowCascadeArray[D];else{x=w;var y=D;z=new THREE.DirectionalLight;z.isVirtual=!0;z.onlyShadow=!0;z.castShadow=!0;z.shadowCameraNear=x.shadowCameraNear;z.shadowCameraFar=x.shadowCameraFar;z.shadowCameraLeft=x.shadowCameraLeft;z.shadowCameraRight=x.shadowCameraRight;z.shadowCameraBottom=x.shadowCameraBottom;z.shadowCameraTop=x.shadowCameraTop;z.shadowCameraVisible=x.shadowCameraVisible;
z.shadowDarkness=x.shadowDarkness;z.shadowBias=x.shadowCascadeBias[y];z.shadowMapWidth=x.shadowCascadeWidth[y];z.shadowMapHeight=x.shadowCascadeHeight[y];z.pointsWorld=[];z.pointsFrustum=[];C=z.pointsWorld;A=z.pointsFrustum;for(var K=0;8>K;K++)C[K]=new THREE.Vector3,A[K]=new THREE.Vector3;C=x.shadowCascadeNearZ[y];x=x.shadowCascadeFarZ[y];A[0].set(-1,-1,C);A[1].set(1,-1,C);A[2].set(-1,1,C);A[3].set(1,1,C);A[4].set(-1,-1,x);A[5].set(1,-1,x);A[6].set(-1,1,x);A[7].set(1,1,x);z.originalCamera=s;A=new THREE.Gyroscope;
A.position.copy(w.shadowCascadeOffset);A.add(z);A.add(z.target);s.add(A);w.shadowCascadeArray[D]=z;console.log("Created virtualLight",z)}y=w;C=D;x=y.shadowCascadeArray[C];x.position.copy(y.position);x.target.position.copy(y.target.position);x.lookAt(x.target);x.shadowCameraVisible=y.shadowCameraVisible;x.shadowDarkness=y.shadowDarkness;x.shadowBias=y.shadowCascadeBias[C];A=y.shadowCascadeNearZ[C];y=y.shadowCascadeFarZ[C];x=x.pointsFrustum;x[0].z=A;x[1].z=A;x[2].z=A;x[3].z=A;x[4].z=y;x[5].z=y;x[6].z=
y;x[7].z=y;I[u]=z;u++}else I[u]=w,u++;p=0;for(v=I.length;p<v;p++){w=I[p];w.shadowMap||(D=THREE.LinearFilter,c.shadowMapType===THREE.PCFSoftShadowMap&&(D=THREE.NearestFilter),w.shadowMap=new THREE.WebGLRenderTarget(w.shadowMapWidth,w.shadowMapHeight,{minFilter:D,magFilter:D,format:THREE.RGBAFormat}),w.shadowMapSize=new THREE.Vector2(w.shadowMapWidth,w.shadowMapHeight),w.shadowMatrix=new THREE.Matrix4);if(!w.shadowCamera){if(w instanceof THREE.SpotLight)w.shadowCamera=new THREE.PerspectiveCamera(w.shadowCameraFov,
w.shadowMapWidth/w.shadowMapHeight,w.shadowCameraNear,w.shadowCameraFar);else if(w instanceof THREE.DirectionalLight)w.shadowCamera=new THREE.OrthographicCamera(w.shadowCameraLeft,w.shadowCameraRight,w.shadowCameraTop,w.shadowCameraBottom,w.shadowCameraNear,w.shadowCameraFar);else{console.error("Unsupported light type for shadow");continue}t.add(w.shadowCamera);!0===t.autoUpdate&&t.updateMatrixWorld()}w.shadowCameraVisible&&!w.cameraHelper&&(w.cameraHelper=new THREE.CameraHelper(w.shadowCamera),w.shadowCamera.add(w.cameraHelper));
if(w.isVirtual&&z.originalCamera==s){D=s;u=w.shadowCamera;A=w.pointsFrustum;x=w.pointsWorld;l.set(Infinity,Infinity,Infinity);n.set(-Infinity,-Infinity,-Infinity);for(y=0;8>y;y++)C=x[y],C.copy(A[y]),THREE.ShadowMapPlugin.__projector.unprojectVector(C,D),C.applyMatrix4(u.matrixWorldInverse),C.x<l.x&&(l.x=C.x),C.x>n.x&&(n.x=C.x),C.y<l.y&&(l.y=C.y),C.y>n.y&&(n.y=C.y),C.z<l.z&&(l.z=C.z),C.z>n.z&&(n.z=C.z);u.left=l.x;u.right=n.x;u.top=n.y;u.bottom=l.y;u.updateProjectionMatrix()}u=w.shadowMap;A=w.shadowMatrix;
D=w.shadowCamera;D.position.setFromMatrixPosition(w.matrixWorld);q.setFromMatrixPosition(w.target.matrixWorld);D.lookAt(q);D.updateMatrixWorld();D.matrixWorldInverse.getInverse(D.matrixWorld);w.cameraHelper&&(w.cameraHelper.visible=w.shadowCameraVisible);w.shadowCameraVisible&&w.cameraHelper.update();A.set(0.5,0,0,0.5,0,0.5,0,0.5,0,0,0.5,0.5,0,0,0,1);A.multiply(D.projectionMatrix);A.multiply(D.matrixWorldInverse);k.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse);h.setFromMatrix(k);c.setRenderTarget(u);
c.clear();r.length=0;a(t,t,D);w=0;for(u=r.length;w<u;w++)x=r[w],A=x.object,x=x.buffer,y=A.material instanceof THREE.MeshFaceMaterial?A.material.materials[0]:A.material,C=void 0!==A.geometry.morphTargets&&0<A.geometry.morphTargets.length&&y.morphTargets,K=A instanceof THREE.SkinnedMesh&&y.skinning,C=A.customDepthMaterial?A.customDepthMaterial:K?C?g:f:C?e:d,c.setMaterialFaces(y),x instanceof THREE.BufferGeometry?c.renderBufferDirect(D,t.__lights,null,C,x,A):c.renderBuffer(D,t.__lights,null,C,x,A);y=
t.__webglObjectsImmediate;w=0;for(u=y.length;w<u;w++)x=y[w],A=x.object,A.visible&&A.castShadow&&(A._modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,A.matrixWorld),c.renderImmediateObject(D,t.__lights,null,d,A))}p=c.getClearColor();v=c.getClearAlpha();b.clearColor(p.r,p.g,p.b,v);b.enable(b.BLEND);c.shadowMapCullFace===THREE.CullFaceFront&&b.cullFace(b.BACK)}};THREE.ShadowMapPlugin.__projector=new THREE.Projector;
THREE.SpritePlugin=function(){var a,b,c,d,e,f,g,h,k,l,n,q,r,t,s,p,v;function w(a,b){return a.z!==b.z?b.z-a.z:b.id-a.id}var u,D,A,x=[],C,I,z,y,K;this.init=function(w){u=w.context;D=w;C=new Float32Array([-0.5,-0.5,0,0,0.5,-0.5,1,0,0.5,0.5,1,1,-0.5,0.5,0,1]);I=new Uint16Array([0,1,2,0,2,3]);z=u.createBuffer();y=u.createBuffer();u.bindBuffer(u.ARRAY_BUFFER,z);u.bufferData(u.ARRAY_BUFFER,C,u.STATIC_DRAW);u.bindBuffer(u.ELEMENT_ARRAY_BUFFER,y);u.bufferData(u.ELEMENT_ARRAY_BUFFER,I,u.STATIC_DRAW);w=u.createProgram();
var x=u.createShader(u.VERTEX_SHADER),P=u.createShader(u.FRAGMENT_SHADER);u.shaderSource(x,["precision "+D.getPrecision()+" float;","uniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform float rotation;\nuniform vec2 scale;\nuniform vec2 uvOffset;\nuniform vec2 uvScale;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvoid main() {\nvUV = uvOffset + uv * uvScale;\nvec2 alignedPosition = position * scale;\nvec2 rotatedPosition;\nrotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\nrotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\nvec4 finalPosition;\nfinalPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\nfinalPosition.xy += rotatedPosition;\nfinalPosition = projectionMatrix * finalPosition;\ngl_Position = finalPosition;\n}"].join("\n"));
u.shaderSource(P,["precision "+D.getPrecision()+" float;","uniform vec3 color;\nuniform sampler2D map;\nuniform float opacity;\nuniform int fogType;\nuniform vec3 fogColor;\nuniform float fogDensity;\nuniform float fogNear;\nuniform float fogFar;\nuniform float alphaTest;\nvarying vec2 vUV;\nvoid main() {\nvec4 texture = texture2D( map, vUV );\nif ( texture.a < alphaTest ) discard;\ngl_FragColor = vec4( color * texture.xyz, texture.a * opacity );\nif ( fogType > 0 ) {\nfloat depth = gl_FragCoord.z / gl_FragCoord.w;\nfloat fogFactor = 0.0;\nif ( fogType == 1 ) {\nfogFactor = smoothstep( fogNear, fogFar, depth );\n} else {\nconst float LOG2 = 1.442695;\nfloat fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );\nfogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );\n}\ngl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\n}\n}"].join("\n"));
u.compileShader(x);u.compileShader(P);u.attachShader(w,x);u.attachShader(w,P);u.linkProgram(w);K=w;p=u.getAttribLocation(K,"position");v=u.getAttribLocation(K,"uv");a=u.getUniformLocation(K,"uvOffset");b=u.getUniformLocation(K,"uvScale");c=u.getUniformLocation(K,"rotation");d=u.getUniformLocation(K,"scale");e=u.getUniformLocation(K,"color");f=u.getUniformLocation(K,"map");g=u.getUniformLocation(K,"opacity");h=u.getUniformLocation(K,"modelViewMatrix");k=u.getUniformLocation(K,"projectionMatrix");l=
u.getUniformLocation(K,"fogType");n=u.getUniformLocation(K,"fogDensity");q=u.getUniformLocation(K,"fogNear");r=u.getUniformLocation(K,"fogFar");t=u.getUniformLocation(K,"fogColor");s=u.getUniformLocation(K,"alphaTest");w=document.createElement("canvas");w.width=8;w.height=8;x=w.getContext("2d");x.fillStyle="white";x.fillRect(0,0,8,8);A=new THREE.Texture(w);A.needsUpdate=!0};this.render=function(C,I,P,O){x.length=0;C.traverseVisible(function(a){a instanceof THREE.Sprite&&x.push(a)});if(0!==x.length){u.useProgram(K);
u.enableVertexAttribArray(p);u.enableVertexAttribArray(v);u.disable(u.CULL_FACE);u.enable(u.BLEND);u.bindBuffer(u.ARRAY_BUFFER,z);u.vertexAttribPointer(p,2,u.FLOAT,!1,16,0);u.vertexAttribPointer(v,2,u.FLOAT,!1,16,8);u.bindBuffer(u.ELEMENT_ARRAY_BUFFER,y);u.uniformMatrix4fv(k,!1,I.projectionMatrix.elements);u.activeTexture(u.TEXTURE0);u.uniform1i(f,0);O=P=0;var J=C.fog;J?(u.uniform3f(t,J.color.r,J.color.g,J.color.b),J instanceof THREE.Fog?(u.uniform1f(q,J.near),u.uniform1f(r,J.far),u.uniform1i(l,1),
O=P=1):J instanceof THREE.FogExp2&&(u.uniform1f(n,J.density),u.uniform1i(l,2),O=P=2)):(u.uniform1i(l,0),O=P=0);for(var J=0,E=x.length;J<E;J++){var Q=x[J],L=Q.material;Q._modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,Q.matrixWorld);Q.z=-Q._modelViewMatrix.elements[14]}x.sort(w);I=[];J=0;for(E=x.length;J<E;J++)Q=x[J],L=Q.material,u.uniform1f(s,L.alphaTest),u.uniformMatrix4fv(h,!1,Q._modelViewMatrix.elements),I[0]=Q.scale.x,I[1]=Q.scale.y,Q=0,C.fog&&L.fog&&(Q=O),P!==Q&&(u.uniform1i(l,Q),P=Q),
null!==L.map?(u.uniform2f(a,L.map.offset.x,L.map.offset.y),u.uniform2f(b,L.map.repeat.x,L.map.repeat.y)):(u.uniform2f(a,0,0),u.uniform2f(b,1,1)),u.uniform1f(g,L.opacity),u.uniform3f(e,L.color.r,L.color.g,L.color.b),u.uniform1f(c,L.rotation),u.uniform2fv(d,I),D.setBlending(L.blending,L.blendEquation,L.blendSrc,L.blendDst),D.setDepthTest(L.depthTest),D.setDepthWrite(L.depthWrite),L.map&&L.map.image&&L.map.image.width?D.setTexture(L.map,0):D.setTexture(A,0),u.drawElements(u.TRIANGLES,6,u.UNSIGNED_SHORT,
0);u.enable(u.CULL_FACE)}}};
THREE.DepthPassPlugin=function(){function a(b,c,d){if(c.visible){var e=b.__webglObjects[c.id];if(e&&(!1===c.frustumCulled||!0===h.intersectsObject(c)))for(var f=0,g=e.length;f<g;f++){var k=e[f];c._modelViewMatrix.multiplyMatrices(d.matrixWorldInverse,c.matrixWorld);l.push(k)}f=0;for(g=c.children.length;f<g;f++)a(b,c.children[f],d)}}this.enabled=!1;this.renderTarget=null;var b,c,d,e,f,g,h=new THREE.Frustum,k=new THREE.Matrix4,l=[];this.init=function(a){b=a.context;c=a;a=THREE.ShaderLib.depthRGBA;var h=
THREE.UniformsUtils.clone(a.uniforms);d=new THREE.ShaderMaterial({fragmentShader:a.fragmentShader,vertexShader:a.vertexShader,uniforms:h});e=new THREE.ShaderMaterial({fragmentShader:a.fragmentShader,vertexShader:a.vertexShader,uniforms:h,morphTargets:!0});f=new THREE.ShaderMaterial({fragmentShader:a.fragmentShader,vertexShader:a.vertexShader,uniforms:h,skinning:!0});g=new THREE.ShaderMaterial({fragmentShader:a.fragmentShader,vertexShader:a.vertexShader,uniforms:h,morphTargets:!0,skinning:!0});d._shadowPass=
!0;e._shadowPass=!0;f._shadowPass=!0;g._shadowPass=!0};this.render=function(a,b){this.enabled&&this.update(a,b)};this.update=function(n,q){var r,t,s,p,v;b.clearColor(1,1,1,1);b.disable(b.BLEND);c.setDepthTest(!0);!0===n.autoUpdate&&n.updateMatrixWorld();q.matrixWorldInverse.getInverse(q.matrixWorld);k.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse);h.setFromMatrix(k);c.setRenderTarget(this.renderTarget);c.clear();l.length=0;a(n,n,q);var w;r=0;for(t=l.length;r<t;r++)s=l[r],v=s.object,s=s.buffer,
v instanceof THREE.PointCloud&&!v.customDepthMaterial||((w=v.material instanceof THREE.MeshFaceMaterial?v.material.materials[0]:v.material)&&c.setMaterialFaces(v.material),p=void 0!==v.geometry.morphTargets&&0<v.geometry.morphTargets.length&&w.morphTargets,w=v instanceof THREE.SkinnedMesh&&w.skinning,p=v.customDepthMaterial?v.customDepthMaterial:w?p?g:f:p?e:d,s instanceof THREE.BufferGeometry?c.renderBufferDirect(q,n.__lights,null,p,s,v):c.renderBuffer(q,n.__lights,null,p,s,v));p=n.__webglObjectsImmediate;
r=0;for(t=p.length;r<t;r++)s=p[r],v=s.object,v.visible&&(v._modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,v.matrixWorld),c.renderImmediateObject(q,n.__lights,null,d,v));r=c.getClearColor();t=c.getClearAlpha();b.clearColor(r.r,r.g,r.b,t);b.enable(b.BLEND)}};
THREE.ShaderFlares={lensFlareVertexTexture:{vertexShader:"uniform lowp int renderType;\nuniform vec3 screenPosition;\nuniform vec2 scale;\nuniform float rotation;\nuniform sampler2D occlusionMap;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvarying float vVisibility;\nvoid main() {\nvUV = uv;\nvec2 pos = position;\nif( renderType == 2 ) {\nvec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.1, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.5 ) );\nvVisibility =        visibility.r / 9.0;\nvVisibility *= 1.0 - visibility.g / 9.0;\nvVisibility *=       visibility.b / 9.0;\nvVisibility *= 1.0 - visibility.a / 9.0;\npos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;\npos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;\n}\ngl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );\n}",fragmentShader:"uniform lowp int renderType;\nuniform sampler2D map;\nuniform float opacity;\nuniform vec3 color;\nvarying vec2 vUV;\nvarying float vVisibility;\nvoid main() {\nif( renderType == 0 ) {\ngl_FragColor = vec4( 1.0, 0.0, 1.0, 0.0 );\n} else if( renderType == 1 ) {\ngl_FragColor = texture2D( map, vUV );\n} else {\nvec4 texture = texture2D( map, vUV );\ntexture.a *= opacity * vVisibility;\ngl_FragColor = texture;\ngl_FragColor.rgb *= color;\n}\n}"},
lensFlare:{vertexShader:"uniform lowp int renderType;\nuniform vec3 screenPosition;\nuniform vec2 scale;\nuniform float rotation;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvoid main() {\nvUV = uv;\nvec2 pos = position;\nif( renderType == 2 ) {\npos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;\npos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;\n}\ngl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );\n}",
fragmentShader:"precision mediump float;\nuniform lowp int renderType;\nuniform sampler2D map;\nuniform sampler2D occlusionMap;\nuniform float opacity;\nuniform vec3 color;\nvarying vec2 vUV;\nvoid main() {\nif( renderType == 0 ) {\ngl_FragColor = vec4( texture2D( map, vUV ).rgb, 0.0 );\n} else if( renderType == 1 ) {\ngl_FragColor = texture2D( map, vUV );\n} else {\nfloat visibility = texture2D( occlusionMap, vec2( 0.5, 0.1 ) ).a;\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) ).a;\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) ).a;\nvisibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) ).a;\nvisibility = ( 1.0 - visibility / 4.0 );\nvec4 texture = texture2D( map, vUV );\ntexture.a *= opacity * visibility;\ngl_FragColor = texture;\ngl_FragColor.rgb *= color;\n}\n}"}};

;/*

oneBook3d
v 2.31;
www.onebook3d.riadesign.ru
swipe up,down,right,left

(13.03.2015)
automatic removal of
old book in the target element;

(29.10.2015)
new options "startWithFullScreen";

(07.03.2017)
fix chrome on macos without webgl;

*/

window['ONEBOOK3DTHEBEST'] = true;

var ONEBOOK3D_ADDITIONAL_LANGUAGES = [{
		lng:'it',
		save:'Salva',
		light:'Luminoso',
		dark:'Scuro',
		next:'Prossimo',
		prev:'Precedente',
		zoom:'Zoom',
		slope:'Inclina',
		fromfullscreen:'Rimpicciolisci',
		tofullscreen:'Ingrandisci',
		close:'Chiudi',
		left:'Sinistra',
		right:'Destra',
		toStart:'Alla Partenza',
		toEnd:'Alla Fine',
		goToHomelink:'Aprire home page',
		clickToOpen:'Clicca per aprire',
		useMousewheel:'Usa la rotellina del mouse',
		forEasyViewing:'Per visualizzare',
		askSaveImage:'Selezionare la pagina da salvare, per favore',
		or:'o'
	}];

(function($){

$.onebook = function (arrSrc,options,target) {

var 
	G_DATA = 'ONEBOOK3DGLOBALDATASTORAGE',
	target = target&&target!==$&&target.size?target:false;
	
	if(!window[G_DATA]){
		window[G_DATA]={
			FLIPS:{},
			NUMBER:0,
			BOOKS:[],
			CURRENT:false,
			SUPERBOOK:false,
			SKIN:{},
			queueBooksBuilding:[],
			buildNextBook:function(){
				window[G_DATA].buildingNowFlag = true;
				var book = window[G_DATA].queueBooksBuilding.shift();
				if(book){

					if(book.target){
						var oldbookName = $(book.target).attr('onebook3d');
						if(oldbookName && window[G_DATA].BOOKS[oldbookName]){
							var oldbook = window[G_DATA].BOOKS[oldbookName];
							oldbook.exit();
						}
					};

					var BOOK_CONSTRUCTOR = $.extend( true, {}, OneBook3D );
					BOOK_CONSTRUCTOR.init(book.arrSrc,book.options,book.target);
				}else{
					window[G_DATA].buildingNowFlag = false;
				}
			},
			GLOSSY:function(){
				var
				gl, cnv = document.createElement('canvas'),
				names = ["webgl", "experimental-webgl", "webkit-3d", "moz-webgl"];
				
				for (var i=0;i<names.length;++i){
					try{ gl = cnv.getContext(names[i]); }catch(e){};
		          	if(gl){break;} 
		        };
								
		       if(gl == null){
		       		console.log('NO GL',gl)
		       		return false;
		        }else{
		        	console.log('YES GL',gl)
		        	return true;
		        }
			}()
		};		
	};

var OneBook3D = {

	init:function(images_src,options,target){
		var _this=this;
		this.IMAGES_SRC = images_src
		this.$TARGET = target;
		this.startIndex = 1000+20*window[G_DATA].NUMBER;		
		this.options = this.set_options_default(options);		
		OneBookEditor.init($.extend(this.options,{
			onReady:function(FRDATA){			
				_this.initWithData(FRDATA);
			}
		}));		
	},
	
	set_options_default:function(options){		
		return $.extend({
			language:'en',
			skin:'dark',
			bgDark:'',
			bgLight:'',
			pageColor:'white',
			border:30,
			typeAnimation:'',
			startPage:1,
			slope:0,
			flip:'basic',			
			cesh:true,
			autoPlay:0,
			startWithFullScreen:false
		},options||{});
	},	

	initWithData:function(FRDATA){
		
		var
			_this = this,
			z = this.startIndex;

		var fn = {
			defineSkin:function(skin){
				var skinMode = {'dark':'dark','light':'light'};	
				return skinMode[skin&&skin.toLowerCase()]||'dark';
			},
			defineSkinArray:function(skinArr){
				if(typeof(skinArr)==='object'){
					var skin0 =  fn.defineSkin(skinArr[0]);
					var skin1 =  fn.defineSkin(skinArr[1]);
					return [skin0,skin1];	
				}else{
					return [fn.defineSkin(skinArr)];	
				}
			},				 	
			defineLanguage:function(lng){
			var lgs = ONEBOOK3D_ADDITIONAL_LANGUAGES;
			var language = {'en':0,'ru':1};
			if(lgs && lgs.length>0){
				for (var i=0;i<lgs.length;i++){
					language[lgs[i].lng]=i+2;
				}
			}
			return language[lng.toLowerCase()]||0;
			},
			defineBorder:function(number){
			var number = parseInt(number,10);
			return number<101?number:30;
			},
			defineSlope:function(number){
			var number = parseInt(number,10);
			return number<3?number:0;
			}			
		};

		this.CFG = {
			HOME_LINK:'http://www.onebook3d.riadesign.ru',
			DIVIDE_IMAGES:false,
			PAGE_DEFAULT_COLOR:this.options.pageColor,
			BORDER:fn.defineBorder(this.options.border),
			ARR_SLOPE_ANGLES:[0,20,40],			
			START_SLOPE_MODE:fn.defineSlope(this.options.slope), 
			ROTATE_CENTER_OFFSET:1.7,
			ROTATE_CENTER_OFFSET_GL:0.3,
			SHEETS_SENSIVITY:8,
			PASPARTU_BEHAVIORS_PARAM:{width:0,height:80},
			SPACE_AROUND_STAGE:{horizontal:20,vertical:20},
			DRAG_PARAM:{px_per_persent:3},
			NUMBEROF_PRELOAD_SHEETS:3,
			MAX_SCREEN_SIZE:{width:2000,height:1200},
			AUTOPLAY:this.options.autoPlay,

			ICONS_PANEL:{
				tiny:{height:101,width:265,noTitle:20,betweenIcons:2,pageNumbers:{width:83,fontSize:16}},
				small:{height:101,width:410,noTitle:20,betweenIcons:8,pageNumbers:{width:102,fontSize:18}},
				middle:{height:101,width:470,noTitle:20,betweenIcons:6,pageNumbers:{width:92,fontSize:16}},
				large:{height:140,width:700,noTitle:30,betweenIcons:10,pageNumbers:{width:105,fontSize:16}},
				titleSection:65,
				overlay_pr:0.8
			},

			ICONS_SIZE:{big:50,small:36},
			MAX_FRAME_DRAGGABLE:60,
			MAX_MOUSE_SPEED_X:90,
			ZOOM_WAITER_SIZE:60,
			LANGUAGE:fn.defineLanguage(this.options.language),
			ZINDEX:{bookBackground:z,bookStage:z+5,bookIconsPanel:z+10,bookSaveMenu:z+20,zoomLayer:z+2000},
			GL_DEPTH_STEP:3,
			FV:window[this.getString([79,78,69,66,79,79,75,51,68,84,72,69,66,69,83,84])] 		
		};

		this.GIF = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
		this.AJAX_LOADER = "data:image/gif;base64,R0lGODlhHwAfAPUAAP///wAAAOjo6NLS0ry8vK6urqKiotzc3Li4uJqamuTk5NjY2KqqqqCgoLCwsMzMzPb29qioqNTU1Obm5jY2NiYmJlBQUMTExHBwcJKSklZWVvr6+mhoaEZGRsbGxvj4+EhISDIyMgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH+GkNyZWF0ZWQgd2l0aCBhamF4bG9hZC5pbmZvACH5BAAKAAAAIf8LTkVUU0NBUEUyLjADAQAAACwAAAAAHwAfAAAG/0CAcEgUDAgFA4BiwSQexKh0eEAkrldAZbvlOD5TqYKALWu5XIwnPFwwymY0GsRgAxrwuJwbCi8aAHlYZ3sVdwtRCm8JgVgODwoQAAIXGRpojQwKRGSDCRESYRsGHYZlBFR5AJt2a3kHQlZlERN2QxMRcAiTeaG2QxJ5RnAOv1EOcEdwUMZDD3BIcKzNq3BJcJLUABBwStrNBtjf3GUGBdLfCtadWMzUz6cDxN/IZQMCvdTBcAIAsli0jOHSJeSAqmlhNr0awo7RJ19TJORqdAXVEEVZyjyKtE3Bg3oZE2iK8oeiKkFZGiCaggelSTiA2LhxiZLBSjZjBL2siNBOFQ84LxHA+mYEiRJzBO7ZCQIAIfkEAAoAAQAsAAAAAB8AHwAABv9AgHBIFAwIBQPAUCAMBMSodHhAJK5XAPaKOEynCsIWqx0nCIrvcMEwZ90JxkINaMATZXfju9jf82YAIQxRCm14Ww4PChAAEAoPDlsAFRUgHkRiZAkREmoSEXiVlRgfQgeBaXRpo6MOQlZbERN0Qx4drRUcAAJmnrVDBrkVDwNjr8BDGxq5Z2MPyUQZuRgFY6rRABe5FgZjjdm8uRTh2d5b4NkQY0zX5QpjTc/lD2NOx+WSW0++2RJmUGJhmZVsQqgtCE6lqpXGjBchmt50+hQKEAEiht5gUcTIESR9GhlgE9IH0BiTkxrMmWIHDkose9SwcQlHDsOIk9ygiVbl5JgMLuV4HUmypMkTOkEAACH5BAAKAAIALAAAAAAfAB8AAAb/QIBwSBQMCAUDwFAgDATEqHR4QCSuVwD2ijhMpwrCFqsdJwiK73DBMGfdCcZCDWjAE2V347vY3/NmdXNECm14Ww4PChAAEAoPDltlDGlDYmQJERJqEhGHWARUgZVqaWZeAFZbERN0QxOeWwgAAmabrkMSZkZjDrhRkVtHYw+/RA9jSGOkxgpjSWOMxkIQY0rT0wbR2LQV3t4UBcvcF9/eFpdYxdgZ5hUYA73YGxruCbVjt78G7hXFqlhY/fLQwR0HIQdGuUrTz5eQdIc0cfIEwByGD0MKvcGSaFGjR8GyeAPhIUofQGNQSgrB4IsdOCqx7FHDBiYcOQshYjKDxliVDpRjunCjdSTJkiZP6AQBACH5BAAKAAMALAAAAAAfAB8AAAb/QIBwSBQMCAUDwFAgDATEqHR4QCSuVwD2ijhMpwrCFqsdJwiK73DBMGfdCcZCDWjAE2V347vY3/NmdXNECm14Ww4PChAAEAoPDltlDGlDYmQJERJqEhGHWARUgZVqaWZeAFZbERN0QxOeWwgAAmabrkMSZkZjDrhRkVtHYw+/RA9jSGOkxgpjSWOMxkIQY0rT0wbR2I3WBcvczltNxNzIW0693MFYT7bTumNQqlisv7BjswAHo64egFdQAbj0RtOXDQY6VAAUakihN1gSLaJ1IYOGChgXXqEUpQ9ASRlDYhT0xQ4cACJDhqDD5mRKjCAYuArjBmVKDP9+VRljMyMHDwcfuBlBooSCBQwJiqkJAgAh+QQACgAEACwAAAAAHwAfAAAG/0CAcEgUDAgFA8BQIAwExKh0eEAkrlcA9oo4TKcKwharHScIiu9wwTBn3QnGQg1owBNld+O72N/zZnVzRApteFsODwoQABAKDw5bZQxpQ2JkCRESahIRh1gEVIGVamlmXgBWWxETdEMTnlsIAAJmm65DEmZGYw64UZFbR2MPv0QPY0hjpMYKY0ljjMZCEGNK09MG0diN1gXL3M5bTcTcyFtOvdzBWE+207pjUKpYrL+wY7MAB4EerqZjUAG4lKVCBwMbvnT6dCXUkEIFK0jUkOECFEeQJF2hFKUPAIkgQwIaI+hLiJAoR27Zo4YBCJQgVW4cpMYDBpgVZKL59cEBhw+U+QROQ4bBAoUlTZ7QCQIAIfkEAAoABQAsAAAAAB8AHwAABv9AgHBIFAwIBQPAUCAMBMSodHhAJK5XAPaKOEynCsIWqx0nCIrvcMEwZ90JxkINaMATZXfju9jf82Z1c0QKbXhbDg8KEAAQCg8OW2UMaUNiZAkREmoSEYdYBFSBlWppZl4AVlsRE3RDE55bCAACZpuuQxJmRmMOuFGRW0djD79ED2NIY6TGCmNJY4zGQhBjStPTFBXb21DY1VsGFtzbF9gAzlsFGOQVGefIW2LtGhvYwVgDD+0V17+6Y6BwaNfBwy9YY2YBcMAPnStTY1B9YMdNiyZOngCFGuIBxDZAiRY1eoTvE6UoDEIAGrNSUoNBUuzAaYlljxo2M+HIeXiJpRsRNMaq+JSFCpsRJEqYOPH2JQgAIfkEAAoABgAsAAAAAB8AHwAABv9AgHBIFAwIBQPAUCAMBMSodHhAJK5XAPaKOEynCsIWqx0nCIrvcMEwZ90JxkINaMATZXfjywjlzX9jdXNEHiAVFX8ODwoQABAKDw5bZQxpQh8YiIhaERJqEhF4WwRDDpubAJdqaWZeAByoFR0edEMTolsIAA+yFUq2QxJmAgmyGhvBRJNbA5qoGcpED2MEFrIX0kMKYwUUslDaj2PA4soGY47iEOQFY6vS3FtNYw/m1KQDYw7mzFhPZj5JGzYGipUtESYowzVmF4ADgOCBCZTgFQAxZBJ4AiXqT6ltbUZhWdToUSR/Ii1FWbDnDkUyDQhJsQPn5ZU9atjUhCPHVhgTNy/RSKsiqKFFbUaQKGHiJNyXIAAh+QQACgAHACwAAAAAHwAfAAAG/0CAcEh8JDAWCsBQIAwExKhU+HFwKlgsIMHlIg7TqQeTLW+7XYIiPGSAymY0mrFgA0LwuLzbCC/6eVlnewkADXVECgxcAGUaGRdQEAoPDmhnDGtDBJcVHQYbYRIRhWgEQwd7AB52AGt7YAAIchETrUITpGgIAAJ7ErdDEnsCA3IOwUSWaAOcaA/JQ0amBXKa0QpyBQZyENFCEHIG39HcaN7f4WhM1uTZaE1y0N/TacZoyN/LXU+/0cNyoMxCUytYLjm8AKSS46rVKzmxADhjlCACMFGkBiU4NUQRxS4OHijwNqnSJS6ZovzRyJAQo0NhGrgs5bIPmwWLCLHsQsfhxBWTe9QkOzCwC8sv5Ho127akyRM7QQAAOwAAAAAAAAAAAA==";
		this.SRC_ICONS_BIG = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAAyCAYAAACqECmXAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAThElEQVR4nO2dCfRvUxXHt0i0pGcoqegZe5miSKnkifKSpZ5kRQ8lZWiUqFWIailTyVApecQiZUil1UgSrUUahBCeEhmeSnMZOh/nnvXu+707nHvvmX6/3/mutdf/vd/v/s7Z+9x7z/ecffbZRyQjIyMjIyMjIyMjIyMjIyM+lo6tQEbGFGMVJTOUrK3kCUqWV/LPqBpNN56mZCUla4m+H09U8u+oGvVDtiMtTIodGRnRsaqSS5VsE1kPyPtNSk5Tco2Sh5Q8ViF8/nMl85XMU7J6BF0NthHddqtG1MEXGETtq+RsJb9S8g+pvh8PKrlayfFKdlSybAxlG5DtSAtR7VjKRSEZXrGckvVjK9GAWyTd0SZE9CMlT1XyEiV3B66f0fjOSt6iZE7x2XVKrhTdbguULFTyX9EvNKP4maLv95aFLKPkMiVnKPmqkodDKa/wTNGdzl+VbKvkgYB1+8AKSvYWPVB6kZK/i7aPART34y4lfxZ9P3jvGIQxq9pQydZKNhI94DpXyWeV3BhU+0UYtQOvzk9l/O2YlPsRzY4qQp8UApkUO7jZ13vWZQg2VvKb2EpUoEzmL1fy+8D176rko0pmKfmuknOUfEP0y24LnmFG73so2UnJH5UcreSLSh51qGsT1lTyExlvUqcdD1Xy7uLfXxN9PxgodRkg4S3By8IMjL7lAiUfUHKnS2UbsFxR33vFvR20zx0ulW1AtmNxeLUDAqlyEaQiG02pHXOVbJKQzO1oR0hA5r8W3dGuGbju9UQPJB4R7XbbwFG5jOhPVPI/Jb9Qsrmjcm1AG9KWtOm4ud8ZCC1Q8jclhytZ2UGZeF4YsN0k2qV6SPGZTzCwWyB+7LhByb9k/O3gfkyKHb2eq6oZupkR7qLkdwMVdIl1RY9cbGeEk2ZHajPhVPWKOTPfS8mpol1m71LyMw91MEA4WclLlXxIyQke6qjCuM3UWcI4VvSsnFkTM6l7PNRBp3uYkh8qebPotVHXdYSw42AlR0i2w6aOsbLDzAhTm3l11Svb4Rcp6hVrZs4omuCWR4q/vgN1qA8i+Y+SswLUZzAuM3XWNH8geva0R4D6WDf9g+iBnMvnLtvRD9mOElLsqMG0EuGk2OEbMckcUoVcd3NY7lMsrnm16M7lW5JJ3WBF0R4jZk0bBqz36UW9tM2zHZRXtmNjB+XZwqcdk3I/xsqO1Dpqg2klwkmxwydirpl/XjSZ7+C4XIj6YiVrtFz34uLa88T/uqFBqqROYBLR3sxqQj8HgLb4TSEzBpST7XCDbIek1VGXMa1EOCl2+EJMMmedHDf76z2UPVt07Adr1m3uPba+MKg43IMedUiR1L8kentQyBnUKJhFsRvh4gFlZDvcYertSKWjHsW0EuGk2OEDMcn8BaJJ9CMe62Bm8GnR7fw5aXarHyh6cDHboz6jSInU2fZDO+0UWQ/AAIt7sW+P32Y73GOq7Uiho67CtBLhpNjhGjHJnGQvRPhfLmHc3HgAcKuTtW2FhusuUnKr6IFAKKRA6rgh7xW9wyAVkC+AWd3TO/wm2+EPvu3gPZjTelU95ohdP9bZjtgddR2mlQhd28Esr21d1gYx2zcmmQNmw+x3XTdgnew7v1/0Wt6Ta67BLQfx+/QaVCE2qZNdi453yDqpazDwwkXahdSyHf7g0w6e/ztEe+x27qHbTsVvbfqzznZkIvSL2Ha8TdxkIIrVvrHJnNkvka6fiFA3a3iQOutodZ4B1tFJJ9s0k/eBWKTOTIXB1YEB67TFO0Tr9gyLa9vseFJPHSh3Vs/fGri0wxazpNtsuoy6tvJhhyFzAtZOke6kbsj8FFkUzd7Wr3WxIxNhBeg83yBu3KuxCZ2ECPc6KCfGcxKbzMH+orM4xXIvbyX6ZT665nsyVjFLf38wjRYhBqmTfIPnOeQygy26DP6a7MDz8i/pvm3J3I8zO/5uFMaOumeuDFf343Tp9543tZVrO8pkbp538lDYkroh8+OL/5to9ja7O00qMqEviVlFWUNHuiATej+kQOaAAxfOiFg/YIROcMxLar5nK90N4dRZDKFJnQ71uJrvSFFMco7tlbxC9LNqs7+/CeTdZr2TgzjI5nVQ8W+CEZ9Vcf0xYpfrvcmOPu9a+T64SEvqwo4uwMN0rXR/39vayqUdPAdmdl2GDamPkrmBmeXv2FK3rR2Z0BMrKxN6OmRuBnZbR9TB4DuiSbvKawSJxXyHQ5E6Ow3q7Nxc6s9R4NQ99u3vI/rkqzZA1gyS7iqVgZfmT4WUj8LdbuS35j1pyr3fZEe5DNv7WTVzHAoXdnRFn/e+ra1c21FHzE2k3uc3o7CxY7ELM6GnUda0E3oqZA7eIzrCNFQClyYQkMdBLftUfId+rKPHcLsbhCB17KvLo31cUT8z6tUK4SQrZj6kzWXHAJ0n7tkvy5LeN9qQY285KIPnHM8M8QmQe9UggPI5NOf0iu/ukeZ70WQH6PKu0dbo7JLMDYba0QfGDc0A5ZkW19u0lWs7uhC0CzI3aLPjcWRCT6usaSb0lMgccPzpN2MrUQIJL26q+Y4DgL4dUJcq+CZ1cyxtFaj3mJbfk86TPb14OhgcnVR8Nrv0GW28iaU+dK4MpJYZ+fycQtc6NNkBbN+1ckYxH+091I6+6GKXTVv5sMOGqF2SuUi7HY8jE3paZYUi9K6zTt/PSWpkDm6TsNnY2gDR1C0BsHXttrDqVMInqTNrO7Tic+NutyVinv29RO8geEB0fMIlStbpqM+aUu12bzvbus4OA5t3rTyTdZG7vApD7RgCos5vlnZSt2krX3a0EbZLMgdWZ6ZnQk+rrL51mz3JoxmOqgidwJ6qmYUPvWyQIpkTWUpHPze2IiMgwc1nKj5/nWh9U4j+9kHq2MXz97qK73C339qjTHTjoJ1dB+h1jSwZNImO6Fp1L5rsMGh710K9L0PtGArzHDWRuk2/5NOOJlJ3SeZgCTu6dOB1YHQ7a0BZD4s+Hi7DLQjg+ZqSr4vecmdcxVfI4vs7IXMeLM71fTikgjWIeZ55E3DF8qw/EFuRERAcRya59458zvnJ6Ive/w6t1Ai4h9xLzlPn3ro4T33F4m/VOdEQ8tk9ykSnPXtrpEGwHV4cdiL8t/jM6Fh1L5rssAHR4MQDhHhffNphg9HnCM/UX3qU49MO+ln6268X/3//yF8D+tx3Knmj6KW8PljCDheEzijhgoFlMEK5xIEuGYvjbcXfMqn/shBQJnMXW02Ggm0/vKiMOFMic2CyRfnssPqAGeV6FZ8bPdH7vnDq1KLcGZPtDlL/44Dy6u4H7nZmcucOKHsIGETzLuF2v7T4rOleDHmuyBjIzHx50QF8M8Rvdjaz/a3JDq6xXeroi7crma/kOiWbit5l0AW+7odBHakbuCBzsIQdLgidrFUbDigrz9DdgWCey0r/f1SqSR20kfloWSGwn2hy4oVNicxTBu5HH6e9+QD39GNKThN9rw/zUMebldwiul1iABvZP727LCJ0X2BZjcHL0qI9NSngooB10b+RLa0roYdAlJ0wLgidRs2EHB8sezC7fZ6S35Y+ryJ1SLOJzOvK8g06eGYdJFcgQGnI6NU1jGvPRZKOEDB69nFJ+gKeOO4tJ8gNJfOq+0EnupvoyPSYwN1/lOhzE3C7N92LIc8VAxe8Hj8Qva3ufaIj831hM9Ez4yY79ha9fc8Xnii679pC9BbEW3qU4et+GPCcn6/kZKneVmY+45ohs3SrdzwHxaVVlu31bdfR2bHf9n/FdQcPrNPnczI0WMQHUg2Kq0NKQXGAe1kVLNQXVcFL2xWfvdBRHX3BrJG2N7r5DoojHTABsCxbNh2xOxSxg+Lowy4UbetWNdfEDoqre87HJiguYzxQnqnjUUlhzbwOrkawLkHQyQLRHcWFcVWxAnoukPgBcaBtxtIH5n48t/SZGaReJXp99Yri38j9juqtAiRKdrGXFQLZQD4fFL0k+VypvxdVdnQF9r1a9J5kYipw9z86oLw6+LajCbTnfNFpfEm5etWAsnzZUfecQ9wErZqg49FAub793BJ2ZEKfLvCSvzW2EpZIkdRZl90ithKWwD0acrmkDj7I3AB3qwnAosN/vpITRJM5udtfI5rk+Y62uFrJj4u/fVy1BiuJJm3I+6WinwlmSQwarlTySdGzdCLdly10bKqvbEdfQHAQHWvp80W7vl2Tegg7qmDInOUUCP3KgeX5sIPtalXP+bGiyXxv0a7xuuj3Pv1cmx2PI7vc0yrLlcu9C2K73MtIyf1uUr+mPhCmA4RcYqZ+Ba7d7KMop+iEXHke1x+5BvJlrZUTti4XneqV64gKxtMC4ZP7vslVvZboA1gI5rteFuVtJ5sc6/V7VdRr3O6vlbCpX1l2oM3ni/vArBipXw2Z2xxYAlJK/fop0c/APItrc+pXx9enWta0EzpIhdRTOpylCbEPZwG+yRyYjHDYyczoeovfQNy0D0QOod9XlAHRXy6a+FmaoqNk1nR38T22MDOkk6ZTfppFXWzR+760H6JRtqMKXd+1HQt9iZlxRepGh5CHswAGUbZkLtLeVjZ2tN2PMuoImt0ckPleHX6TD2dxeH0TxuH41EkmdJAKqadwfGobOBmsLsd7CIQgc4M7i3qYrdD5b9JD6GBJlcuWq9tFP9cEXrEGT0T+3qID7bqWi15EudtswcSOuriWPu+aIfWTOvymCehmc1xnkx1dYd750WyXTWhrK5d2mONTvzDyOYf/1JG5wdDjU23tyIReAUa5bxA3o13fhE4UdlMns0UhTdfMtagzxnOSAqnvL/rozGdE1KEJbGWBjGK520OSOThSdNrixxKW8y3tICVzVeR13wmFIY2hWwTRiQHTkRbXNtnRBR8WTYpdcyw0tVVXO+6RZjvIA8AWPZa3TNQ9nh/0fotFHaOkXs7H35TCt4sdmdA9wzehu5TUCB3EJnXzMn225nuimqtyq4cCM00IboUIdYcmc8DAiijfj0u/2blP+Xih26aWduD2P7DiuyETCmaRu/f4XRkMYtHNZhDbZEcXoHOfhElNbdXHjv1bruM9I9CN5578A/SJB9kqK4tInZm5DZmLdLNj6ogwNHzZAdHYdDI2M3QjTaPTmO0bm9TprHih1q34bhfR7TKv4jvf4Lzov4om9dCIQeYGrJ8zK1yx7cKAQBd0OrnDb1K1gxS9k2AHA3EfdjB4ILaiK5kbGFK3IfPOdkwbEYbGtNrhGjFJnSj3X4kOoqqaCbBVBbe8i5iLLuBMBU4ZC51MJiaZA5YZ8ErUeU1iAF3QqUvGsWyHP4SwY7OuSpWAJ8XmpLzOdsTuqOswrUQ4KXb4QExSf0FRd9X56BA++4JD5rVmzzNrd68KWCeITeYGBCBh/w6R9QDo0BYUVYd5Mhl2TMr9GHs7UuioqzCtRDgpdvhCTFJnLasucIec9KsH0oOAHNrAKkjGIVIhcwOypBGgtHZEHdYudDhrQBn8dqHEtWOmuLFjUu5HbDtmSk87UumoRzGtRDgpdvhETFI/Sbrtk3UN3HxEtROYE/KEp9TIHBCgdK3otchVI9RPnbcVOgwJSjR23CnZjiHIdkhaHXUZ00qEk2KHb8QidUiUUTOH3rjaf2uLV4om82+J30M5RpEimRuYrT90vmsFrJe62MN+o7jp9GPZwTputmNJjK0dqXXUBtNKhJNiRwjEIHXWy0nkQt5s2oNEJL7JlUEE0bTYel6A+spImcwN6PiuEe2inBOgvu2Luq4RtzO4bEc/TK0dTTmpyU0c5ZD2GlRtEbLBpNiR0Y7QB7rMEO3q3lLJrqLXzdlOQj7t/ZT81EOdnGXPntXZSo4QfRCIj5O1quDzoBWXeEB0+zDQwntxquhEJQ85roctRJ9QcoCSc0Xf8787LD+UHbhxSVX6bhlvOyblfji1w0eCklDJTibZjrYMcKHFJptcLISYqXN0ISd4/UF0xLvBOkq+J7ptmD1v4qg+AuxOFG0XW+Ze5KhcW4zDzLwKRAQTYMbeXQjLxZY+yjigKHOh9Iue7gpjB/uiXdtxl2Q7uiJJO5aqKXT05KCUwHFxNmc8T4odEKbNoROxsLHotaXUAPG8U/zM1Fm7Zmb+O9FJIf5UcQ2R70eJvn8/VHKO6Cxyf+5QD650zrneQ3TCGtxvZB8jZ/nDDb9zjXGZmdeBPbvsAODQFdqfe/EVJb/uWA6DM7aVcT84xY2T1vCSPOhM02asXNT3dtEJhLABW37ZsRzswAZsyXb0R5UdUZ+rKkLPSAuTMjCJAR+kvq9oYqO8PaXd9jnFb4iCZ4mLl51DP24WHY29sCiD71YRnR+a+002P87ahtRx3Z8uutMLSeRg3Mm8DLwcdL7k2X6O6Bn25aIHpNwPOtCFxbXcCzpsPDEbKNm2+D1BUWeKdru6PirUFl3tYGkIOxhclu3geTpZxsuO58lk3I8U7cjISB7G/f7igeUQh4HLm33nVclk2sC6GLNstrldreQvUr0UQ0pZXOpEzuNyW2Og3kNAm42jm90GLFlwKtalsuiEtSq5vbjmEAm/zGEDjs8s28Hzme2Ih1E7xvW5yshIFoyeZw74PWTMujhku4sLhQrgXltNtMttjeLfKWGm6LabBuAJo/3XL2Q1CZ9C1wWyHWlhUuzIyJgYzBftBts8sh4ZGRkZGRkZA8Aa14zYSmRkZGQ04f/qBTXII12kOAAAAABJRU5ErkJggg==";
		this.SRC_ICONS_MINI = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAbAAAAAkCAYAAADozm/LAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAQe0lEQVR4nO2dCbBdNRnHP6DDiCgCihRR2QqiQMECTkUGHggqKjqKiMNiK+iwiAtQFhkVN2QpoNBhFWsBRXYVHWdALdWKBVFRQFH2EVwBQZFFoWh+JJl33nlnSXKSe3Pb85/55i33nuR/kpzzz5fli0iPHj169Ogxglhp2AR6LPd4vrKXKNtQ2YrKnlX29FAZ5YPnKVtLdNlMMf/77/Do9HDAC0XX2Qai2/Mzxno+efLpsYzhlcqWKBtLlP6LlR2k7AplDyj7X4Xdp+wyZR8y34+NnZUtVvbSBGl3ASK1u7Lzlf1B2VKZXDZ/VfZ9ZXOUrTccmj0KoA6oC+qEuinXF3VIXVKn1O2U6mR6PiF8Vij9TY9vk258vXGHsqdqPuv5NPOJDcTrx8oeV7aDsn9ETHtzZccq21O0F/EjZT8V3Xj/ZP63srJXKHuVyX9H0Q36m8pOVPb7SFzWVPYT8zti9vdI6YaC+0bUj1G2tugOBPXwK2X3i65/ymFdZRsrmymaN+L+A2UniS5PX+TWnnPj04Q3Kjta2a7KHla2UNkNyu4U3Z7xKrgf2vMM0W359cr+JrotnyNxvemej+iXTFWPOKVt3vMJ5hMTiNe9ym4TPaQXCy9QNk90T+tWZfuIHjZ0vRYv7LeihxXnim70McA93mZsmJ4YYoQwP6nsdHH3qhC03ZRdK7qdXK3sZZ5559aec+NTBcr4anMtZU8duHoN1C11TF1T5zM9817e+GzXdkHZA6Myecnsoewux0xDMU3Zlcq2EP0SqULPp5lPLBQ9rzFlD0VKdzNl3xLtKXxc2TdEz3H5grFyhIye2V+UvUu059YViNgi8/swPLFDlH1JtPd0oGhvKwT0cnnw11H2PmXXOF6XW3vOjU8Zb1Z2ieg2+DHR3m8I8DrOFe2lHKbsrMB0cuRzsWgvaih8bA9oEL1+l7x6PunzSuV5ba/sn6LnmqZ6XkuPbcWK/9NDu1HZg+LQO3PEsDyxo0TXL8OqVffqC7zar4v2VPdzvCa39pwbnyJmiS5byth1BKEJ1PmxhsNRAdfnxme/HPjk1oB6PmnzSiVeWyt7TPRQwsoB139R2T2iPYsyeDi+J3pcfbNQgiUMWsQOEF23BydIm2FWhmvf6fDdLm0MD2a6g9kh31F+vihLynRuAh4HGx4HeFyTG5/dc+GTWwPq+aTLK5V4sUCCoTCGD0LECyAirFLk/k+tSIe/GXZjQnj1wDzKGJSIUZ+M8R+fMI/zRHu/0xy4hLSxTcR/jmlUny/KkLI8JyEX2sKTDlxy5nNeDnxya0A9nzR5pRIvwBg4ArZmhLRY8MG83A9FL+goApFh7H9BhHwsUosYwyI3iV59GWPYsA4I/M0yvtKyDik9sHfLsiFglCFlGdoZcwFtgTZxk7S3i9z4LGrgwzN7oEe++8rk59yLT24NaFnhw5zOEeK3xyHVvacUL+a94PzWiGluKXrO63qZvALxHSa/WPNhIKWI7S16nuA1kdOtwjaih3Xe0/CdlM9XOe1RfN4pO8pwxgD40CZoG3uPIJ9tKj5DiFgYRhmf5JCfnRNeLNUi5sInuwYUyufVmfEJuS5FXaQUL0CDXZwgXea6mPO6rOKzxSbfmEglYreLXok5KFwuegtCHWK2MSIrbN2Q9igKGGV3eel/vFwvlOqXbBF0qm4RvyFu2sbtnnyaQN6/lvYOXt09hfLBG2Oemo7ncaJFrknEjjLf+ZS5pk7ELmrhk10DCuEzzVzTNv4/KD6h18Wui9TitalovjsnSFtMujTy8mTuW0y+sTfAxhYxeqnwLPee6VmyXJgFKzuJe7tlyTzbCXj45xpjqwIT6naYpS5Pi1htjA4GL56vNaQ9agI2w3xe9i5cOCIYdhGTz1BxXZ5tn9VhRcPhMWkWsbp7CuWzh/nsM+ZvVkzWiZgVr1nm70+ba6uGHlvLIKcGFMonpciMqoClFi9Aw2PuK+XcDgs68MSKvVryYy7s2AT5xRSxU2Ty3jX7QJbtIWVnymThYQiVB/sm8z0efBay/MbYn83/dyhcc7eyk2s4xWhjVrzKveZRFzDK7O6A614rWjDwQELmqWgjp3jwaYP1huC0dc13mu4plE9ZmKpEzOU7rnyeQ04NKJRPL2ATwYvXvoRTiRfgBbYgYfpgNdEC9snS/y+UNEOXIJaIITpnlv7Hyi2GRNYwf7Phm2gIhJRieIb6J5rBRqIfbgSK1VgLlL1NqvfbMKH+1cLfZ5u8q9C1jdWJV1XaoyZglNnZntexKZryCBUvcKZU11cdHxcUh/S2qPi86Z6a+Jzbkm+TQIWIVxOf55BTAwrlk4OAMZy1acN1W0l72J8YdTEo8QL08PZPnAeggRNLrejpfdDknwoxRIzVlLMLfyM+LD/+SMM1Y6I9q6XGeHjXacnnMJOufYHONnlXoUsbaxKvqrRHTcDK9dV2nS0Ptnd0WSE4W6rrq46PK+DE1hY4lvdPNpVFVz51QhUiXpP4hAz3uG5gnC7+81DLCniR00uw485PFX7ScyaaxJ6JOfCiXWh+H5N44aGqwAuel1jq8D+AiWXEf6vC/+4y+acSacpuzPy+MCAfvo9g3VP4Hyu4GBK8tOG6RaKHfVjB+gZlHxY9XNoEAh9TFm83f98j40fWxMJmhhvx6oh19++IaYciZiDgqvpqQrE82GTcJShuVX358qkCnJgzheMicQ8C0JUPQ42fUDZftFBdIPr9uL/5fZb5jGHBo335+IbSp4H4xqDbSLoV/CiC+SB6M8SkIz7Yz0QLOlHWrxL9kpmXMH/KnL1TsWMb1sHu+YoZvb4OrOxCsF4uOlo7sPe3uqS7Vytii5T9QvSCi3sdr60qH2I7flfa4y8StfvLriRFH1mxSPSL4apCnnCIUTau4vWoaO6PdsxvVan3IC0Q7GvMzy075gd82jMdKbxQ2uSRos9u6wIrFMX6WrPw2fSO6cORoUgiwzNXenPL96vaj+/zbudg55ufF5ifvuI1iY+vgHH0AMc5uMa6ekKWH/Hi4TlD2UdFP9Rs5OQFYkVsDRkXL3ofz1ZcEwusAlpftJCmFq9hYOMh5UtZ4jF9TrQHXbc4og10BNkzt1skXmXwgviKxItSUgQb1V08rwdM/m3i0wQ6KXQSNjDpVcGKF2U61iGvUGxoOCBkSxLndWXk9BghaxOwWEhxrl/QYWaDGCYaRayv7APKThM9V4LLXhQxxqCL4lV1TSycbPJgafXjJv2UKPaKhgHba+3a22/D4aLFi15s7UqoCpTL51DRQ4HXxqM2Ad8WHWqIyPS/K3HoCoT7j+J2hlYX8QII4BTzs0rAyuLVtOfNBz7tmeebCBJsIbhC9IkJXcCQ8XyZWF/2d94dv+yYPm13L9HbUVz2lFV5W77PO3NbHGpZHDYUGffErGfm4oVN4JP6NM7lHUURo/deFK/UsC/YU83PlCLGvdEbp0fXFr4oBaaZ/FN6m4gXZekrXgBejEbQW2c4meFD5mzuE11eDOcQKofh0dDjZhha2r5gq4ieOzve5B2rbO6IlE5XpBIvUKwvl/bMvOy/RAsYHZMjOuQ9QybXl+XDQotbOqRN+32v6E7Idxyv2bCBj0v5sGK4LF7zC5/7itgEPr2ApYcVMeYDBiVeFoMUMXb8M6Y+v+2LCbCDyT8VuoiXBZ7QtqIfPLxxeu0MjSE2X1D2ItGrB62YLTH2REVaDOFzei0LO7YzP3mhP6Ls56LPT6KtIV47ybgXtqwgpXhZ2Ppa4Ph95jPfL3qIlbI/MjDfbaW6vnz5lGE3usPRVby68mEF4mdlXLwYbTpf9GkTrBouz4m5iNgEPr2ADQYxj+r2xaBEjCW6eBZ4A4MUavIjikWqRTExxAtcJ3oVGJvKGS6+1ZiN1oAXyfAR+3RYbfh50UuLmW9isQpDdquY7/DiXkl0b5/PmEdlaIn5Zlv2PNuE5mHV6zA6FakwCPECtr58wPwonZMFouvBdWFCEW8SfQhsDD4WDOHRjmeLfyizUD6I1wkyLl4Mm3PoKisSi3PHviJWx+c55LQPI5TPsEJJxd6zFrsu5pj0Do+UXhmpQ0nVIVUoKXC4SXtOhLRsWKdnpDr6RkqrC72T+/NedQ1zTVV7mWLzqQvD5XIfdl9TecN9G5pCJbWFBavDMTJxz1UV6u4plM++5jPbaW56jvpQUhUYRjBf+xnDheX9cNsaaztywpePL1KLWFUwX1Zn4SGkCjFFftclSDemeFkQdQPvwXUfZVdjkQjhfurKPvfnveoaPND1BsSnKlgt+yvvl/YN7QyXET3dZ2HTpdLsUYYE833acGlC3T2F8mF+l/nA/4g+obntObIidpw0b45v45N9g86Zj/0sxAYlYCCliFUdp4JnRvgjl132vkhxnApIIV6Azcu8UAbRnqebvIZ1nEpIXi4CNkg+tr5C916t6smnrb5C+PhwCOGztIYPnSaGEF2fo7bjVFz4ZN+gc+ZDr6OuJ1zngZWPXfflE4qUInaJTD7Qkh4gDX0sYj5TJf6BliCVeAEeaqKwMF+Vcv55ZZPHjdLs+eb+fDWNanSN+OPCp1hfKQ+QnCJu9TWKfHw2ltcdaAmfGxz4ZN+gez7xkErEEC5iFbKoo9ioWVCwS6Q8SJeeGpHYY27WTSleFnik7I9KGYllnslj05bv5dae6wTMxXznQF3vPaf6Wl75nO7KJ/cG3fOJi1QixjwFy2TZUFvlXXYBS8htZG2XB8wVgxAvCzaSLk2Ul51P2Mvhu7m15/J3mkY1BuGBWaSsrzniXl+580lxpJEXn9wbdM8nPlKJmN20TeSWqZHSZPKeIMmIV8x5r0GKl8Uhoh9MepcxhhPxSueZNA9xvCa39pwbnyKK9RVj+G6KScunvnLmc5C5dt4g+dQ9OLjjKQ8mBD69pp5POpxifsbcJ0YsRhofY9Zri97vhEiwByU00gQPCJPChDFCvO6MwFMk3j4vX7DZmLPN2PfC/RDaJzTKAis9iX3I6c57S3OE+yrk1p5z4wPK9cWex9DN83iN1BfiGVJfKfhwhlxo+wGELnvE8JkZgc+55qcXny4r6WKuwOv5uPGJiViemN13wmGNdJCYlD3L/I/J3n3EPRg0B1jyILB0lhVIrGSMOSQ5DM+rDLZ8EHGD+yOKg8+R8XyXRTNLTRq+20dya8+58alCsb4oe9/6uthcG1Jfo8Rn6SD4rFD6O+aZOq4gtlpdYNCeTzOf2OBFTsgZYrn5emIMGxAmBoHiUMUzSp/Tm2KMHO+M++HgP+ICcjwPiz6IVkL5riu64RIeakfRPfGLRItXLK8LDMvzqgL3SHw6Nr7yQqXO2cNlj4552HyPiN54DnhcLIihLRLVg1BU7Mfx9W5za8+58alDVX1xfBEeR1V90faJING1vkaVDxyureFDbMOtEvPpsRzBemI+KwaJBn+96Fh+u7Z8lyHFQ0Uv8HhAqnvF94nuibH8fjUPHq7YRYbvedXhdaLFmuFXVl6Vy+Zx89kJ5rs9hgvqgLrIpb5y47ONIx/a/EzfxMseWI8egLOeaFQuR3Cwe5+FFbj9xN3zPfCU4UTOSqM3xuIMxtFTe5wILislr0mcTwysJbp8AGXz4BC59GhHbvXV8+nRowGIwWkS98j6Hj169GjF/wHe8SyV9ZM6QwAAAABJRU5ErkJggg==";		
		this.SRC_HOME_LINK = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAeCAYAAABE4bxTAAAACXBIWXMAAA7DAAAOwwHHb6hkAAACG0lEQVR4nO2WTyhlcRTHD1n4lzIlTQ2lsJCReMkMCtGUjYXsZjGbKavJYhaKrGhqLG1kKaVRSqKsZKOIhfHv6SVmUrOippmUxYjv1zkvr+ve7nW9pOae+nTfve/ec77n/O7t9xWJ4nGR9dzyxsEoeJkmITEwDg68bsgMkOQHWAbToDGEiCLQD76DYbACrkPkuY1dO1L4O7AANkCv+DdTJ9oEc3wGxS5570WG43xH7tTniS7VDEiILt86yAeDoB6MgDlHjhLwBZSKLjdzNoAKUA4qwRvLWQh+gxovQVT+OuWca/0RVFuiZhO0Zv81WVLecwK6wZjoJAus8B9rJGEcgyXLea+m39t+ZcXXUq7lWqFW8Er0HdkEP206f63Rb+ATuHTJG/gdcq6t51qnBCf03op0SbAPZdfjd1oEJeMhX46noCDdPGlEgvwiEuQXkSC/iAT5hZ8g7lt9IDtN9egeBkQ36FCC3opumNtgCLwIISLppebBouhmGwv6sNfexY7o+mg5JkGZyz3OvYxT5W6/J2rUGoLUdNqPM1GrmWMFaJ7iJmQfdIpObdYSfQWHjhzM2WdipkCbNVQramHpgzj15LR/pT7sNGjOoLWosiQ80lPzvaKNpe9pB6uiDpLn9EkTYEvUjMWMI2t0xxo5BeduBf0EuQWXgk6xBXSILh+vsWNOmA6RU10xsRTxL0Sd0EGr+gFcgB7RCUbx/8QNBj9rFr9f954AAAAASUVORK5CYII=';
		this.SRC_HELP_ARROW = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAAaCAYAAAAT6cSuAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAByklEQVR4nO2XOUtDQRSFryKiQUURSVxQERcQ10qwEhEULKwsUoudP8FGLS0tBAs7xUJE0NrCykIRcSmMjVjEfQVRweUc7oQEMQmEN04IOfDx3iTzZs7cmbnznkhWaacC1wZsaQjcgFrXRmyIs3YIdkG+Yy9W1AiewKJrI7Y0DD7BuGsjtjQD3kGPayM2lAs2QRgEHHuxohIQAjuSoQmmGbyABddGbGlE4iQYrt1R0PbfjjzWpPyRYErBJfgG12AVTIj7wTLorSAIZsEWuAXzCeofgDkW8syPj6AKdIB+0AemQRl4BSfmoSPRt4Mz0Qz14cEA6KFS9HWKe4cHdAtoMvc+0w897IM1sBGnrW7TxhILOUk67QKdojPYLjr4ipg6d6KDvBCNKHVlrl/gAZSbMk0Wm3aZtv2GyP8UA8nAhQynEg1qskBycvZM3UH2n2hw8URDdaBaNOKRa0CiK8H/65k30dcliqvkXjQIJBzDeQp+qCKwDQpF99tziu2knbjP1kW/FOrdWvFeTDTMkL2ujXitMdEMH3RtxGsxq3PGplwb8VoNopl6RXTPZYyYGY9Fv8R9jr14rmXRzFjj2ojX4jnKQ3rAtZGsbOoHTqZUb7lFI8sAAAAASUVORK5CYII=';
		
		this.GLOSSY = window[G_DATA].GLOSSY;

		this.options.startWithFullScreen && this.fsapi.goFullScreen();

		this.BOOK_INTERNAL = this.$TARGET?true:false;		
		this.PRE_NAME = 'OneBook3d_'+Math.floor(Math.random()*1000000)+'_';
		window[G_DATA].BOOKS[this.PRE_NAME]=this;
		window[G_DATA].CURRENT = this.PRE_NAME;
		if(!this.BOOK_INTERNAL){ window[G_DATA].SUPERBOOK = this.PRE_NAME;}	
		
		this.SKIN_ARRAY = fn.defineSkinArray(this.options.skin);
		var targetSkin = !this.BOOK_INTERNAL&&this.SKIN_ARRAY.length>1?1:0;
		this.DARK_MODE = this.SKIN_ARRAY[targetSkin]==='light'?false:true;

		this.addStyle();
				
		this.$gStage = this.getStage();		
		this.$gContainter = $('#'+this.divNames.book_container);
		this.$gBookLoader = $('#'+this.divNames.book_loader);
		this.$gGlossyContainter = $('#'+this.divNames.glossy_container);

		this.LNG = {
			save:['Save','Сохранить'],
			light:['Light','Светлый'],
			dark:['Dark','Темный'],
			prev:['Prev','Назад'],
			next:['Next','Далее'],
			zoom:['Zoom','Масштаб'],
			zoomclose:['Zoom','Масштаб'],
			slope:['Slope','Наклон'],
			fromfullscreen:['Smaller','Уменьшить'],
			tofullscreen:['Larger','Увеличить'],			
			close:['Close','Закрыть'],
			left:['Left','Слева'],
			right:['Right','Справа'],
			toStart:['To start','В начало'],
			toEnd:['To end','В конец'],

			hlpGoToHomelink:['Open homepage','Открыть домашнюю страницу'],
			hlpClickToOpen:['Click to open','Открой меня'],
			hlpUseMousewheel:['Use mouse wheel<br>for easy viewing','Используйте колесо мыши<br>для листания'],
			hlpUseMousewheelGL:[['Use mouse wheel','for easy viewing'],['Используйте колесо','мыши для листания']],
			askSaveImage:['Select the page to save, please','Какое изображение сохранить?'],
			askSaveLinks:['<a href="#">Left</a> or <a href="#">Right</a>','<a href="#">Левое</a> или <a href="#">Правое</a>']
		};

		var lngs = ONEBOOK3D_ADDITIONAL_LANGUAGES;
		if(lngs && lngs.length>0){
			for (var i=0;i<lngs.length;i++){
				this.LNG.save.push(lngs[i].save);
				this.LNG.light.push(lngs[i].light);
				this.LNG.dark.push(lngs[i].dark);
				this.LNG.prev.push(lngs[i].prev);
				this.LNG.next.push(lngs[i].next);
				this.LNG.zoom.push(lngs[i].zoom);
				this.LNG.zoomclose.push(lngs[i].zoom);
				this.LNG.slope.push(lngs[i].slope);
				this.LNG.fromfullscreen.push(lngs[i].fromfullscreen);
				this.LNG.tofullscreen.push(lngs[i].tofullscreen);
				this.LNG.close.push(lngs[i].close);
				this.LNG.left.push(lngs[i].left);
				this.LNG.right.push(lngs[i].right);
				this.LNG.toStart.push(lngs[i].toStart);
				this.LNG.toEnd.push(lngs[i].toEnd);
				this.LNG.hlpGoToHomelink.push(lngs[i].goToHomelink);
				this.LNG.hlpClickToOpen.push(lngs[i].clickToOpen);
				this.LNG.hlpUseMousewheel.push(lngs[i].useMousewheel+'<br>'+lngs[i].forEasyViewing);
				this.LNG.hlpUseMousewheelGL.push([lngs[i].useMousewheel,lngs[i].forEasyViewing]);
				this.LNG.askSaveImage.push(lngs[i].askSaveImage);
				this.LNG.askSaveLinks.push('<a href="#">'+lngs[i].left+'</a> '+lngs[i].or+' <a href="#">'+lngs[i].right+'</a>');
			}
		};

		this.BTNS_OFFSET = {
			save:[['-100px']],
			skin:[['-50px','0px'],['dark','light'],'DARK_MODE'],
			prev:[['-150px']],
			zoom:[['-200px']],
			next:[['-250px']],
			slope:[['-300px']],
			togglebook:[['-350px','-400px'],['toStart','toEnd'],'START_FROM_END'],			
			close:[['-450px']],
			zoomclose:[['-450px']]
		};
		this.BTNS_MINI_OFFSET = {
			save:[['-72px']],
			skin:[['-36px','0px'],['dark','light'],'DARK_MODE'],
			prev:[['-108px']],
			zoom:[['-144px']],
			next:[['-180px']],
			slope:[['-216px']],
			tofullscreen:[['-252px']],
			fromfullscreen:[['-288px']],						
			togglebook:[['-324px','-360px'],['toStart','toEnd'],'START_FROM_END'],
			close:[['-396px']],
			zoomclose:[['-396px']]
		};	

		this.PANEL_TYPE = '';
		this.LARGE_ICONS = false;
		this.FRDATA = FRDATA;
		this.FIRST_FRAME = 0;	

		this.ARR_PAGES_SRC  = [];
		this.ARR_PAGES_TITLE = [];				
		this.getSrcAndTitles(this.IMAGES_SRC);		
		if(!this.CFG.DIVIDE_IMAGES && this.ARR_PAGES_SRC.length%2>0){
			this.ARR_PAGES_SRC.push(this.CFG.PAGE_DEFAULT_COLOR);
		};				

		this.START_FROM_END = 0;
		this.START_PAGE = this.options.startPage;
		this.GSCALE = 1;
		this.ALL_PAGES_MAP = [];
		this.ALLSHEETS = [];
		this.$ARR_SHEETS = [];
		this.GL_ARR_SHEETS = [];
		this.FIRST_IMAGE_SIZE = {w:0,h:0};		
		this.SHEETS_WAS_BUILT = [];
		this.SHEET_DISPLAYED = null;
		this.QUEUE_IMAGES_LOADED = [];
		this.IMG_NOW_LOADING = [];
		this.NOW_LOADING_COUNTER = 0;
		this.IMG_NOW_LOADING_FOR_ZOOM=[];
		
		if(!this.options.cesh){
			this.addCeshNames(Math.floor(Math.random()*10000));
		};	
		
		this.ANIMATION_SLOPE = false; 
		this.ZOOM_MODE = 0;
		this.STAGE = {width:0,height:0};
		this.STAGE_CENTER = {top:0,left:0};
		this.STAGE_BOUNDING_BOX = {width:0,height:0,top:0,left:0};
		this.MAX_BOUNDS = {width:0,height:0,top:0,left:0};
		
		this.ENVIRON = this.getEnviron();		

		var fn2 = {
			prepareAndStart:function(){
				!_this.BOOK_INTERNAL && _this.build_background();

				_this.prepareBookSize();
				_this.prepareIconsPanelSize();

				_this.prepareSkinImages(function(){
					_this.findBookSizeByFirstImage(function(){
						_this.fit3dDataToBookSize();
					});
				});				
			}
		};
		
		var pause = this.options.startWithFullScreen ? 1000:100;
		setTimeout(function(){	fn2.prepareAndStart(); },pause);

	 	 if(_this.CFG.AUTOPLAY && _this.BOOK_INTERNAL){
	 	 	var counter = 0;
	 	 	var direction = -1;
	 	 	
		 	var t = setInterval(function (){		 		
		 		counter++;
		 		if(counter==2){
		 			counter = 0;
		 			direction*=-1;
		 		};
		 		if(direction>0){		 			
		 			_this.gotoPrev();	
		 		}else{
		 			_this.gotoNext();	
		 		}		 				 				 		
		 	},_this.CFG.AUTOPLAY);
	 	 }

	},	
	prepareBookSize:function(){
		this.WINSIZE = {width:$(window).width(),height:$(window).height()};	
		this.TARGETSIZE = this.$TARGET?{left:this.$TARGET.offset().left,top:0,width:this.$TARGET.width(),height:100}:false;
		this.ZOOMSIZE = {height:this.WINSIZE.height,width:this.WINSIZE.width,top:0,left:0};
	},
	getString:function(arr){
		var str='';
		for(var i=0;i<arr.length;i++){ str+=arr[i]?String.fromCharCode(arr[i]):' ';};
		return str;
	},
	prepareIconsPanelSize:function(){
		
		var 
			p = this.CFG.ICONS_PANEL,
			spaceSize = this.$TARGET?this.TARGETSIZE:this.WINSIZE;

		if(this.BOOK_INTERNAL){
			if(spaceSize.width < p.tiny.width){
				
				return false;
			}else if(spaceSize.width < p.small.width){
				this.LARGE_ICONS = false;
				this.PANEL_TYPE = 'tiny';
			}else{
				this.LARGE_ICONS = false;
				this.PANEL_TYPE = 'small';
			}			
		}else{
			if(this.fsapi.isFullScreen()){
				if(spaceSize.width < p.large.width){
					
					return false;					
				}else{
					this.LARGE_ICONS = true;
					this.PANEL_TYPE = 'large';
				}					
			}else{
				if(spaceSize.width < p.middle.width){
					
					return false;					
				}else{					
					this.LARGE_ICONS = false;
					this.PANEL_TYPE = 'middle';
				}				
			}
		}
	},
	
	getTotalSheets:function(){
		return this.ALLSHEETS.length;
	},
	
	getEnviron:function(){		
		var x = navigator.userAgent,
			xChrome = x.indexOf('Chrome') != -1,
			xSafari = x.indexOf('Safari') != -1,
			xOpera = x.indexOf('OPR') != -1,
			xWebkit = x.indexOf('WebKit') != -1;		
		var env =  {
			ios: (navigator.userAgent.indexOf('iP') != -1),
			android: (navigator.userAgent.indexOf('Android') != -1),
			firefox: (navigator.userAgent.indexOf('Firefox') != -1),
			windows: (navigator.userAgent.indexOf('Windows') != -1),
			mac: (navigator.userAgent.indexOf('Macintosh') != -1),	
			webkit: xWebkit,			
			safari: xSafari && !xChrome,
			chrome: xSafari && xChrome && !xOpera,
			opera: xOpera,
			ipad:  (navigator.userAgent.indexOf('iPad') != -1),
			iphone:  (navigator.userAgent.indexOf('iPhone') != -1)
		};
		env.touch = (env.ios || env.android);		
		return env;
	},

	getSrcAndTitles:function(arr){
		var arr = arr.slice()||[];
		var counter=0;
		this.NO_ONE_TITLES = true;
		if(!arr.length){return;};
		for(var i=0,length=arr.length;i<length;i++){		
			if(typeof(arr[i])=='string'){
				this.ARR_PAGES_SRC.push(arr[i]);
				this.ARR_PAGES_TITLE.push('');
			}else if(typeof(arr[i])=='object' && arr[i].length == 2){
			counter++;
				this.ARR_PAGES_SRC.push(arr[i][0]);
				this.ARR_PAGES_TITLE.push(arr[i][1]);
			};
		};
		this.NO_ONE_TITLES = counter?false:true;
	},
	
	addStyle:function(){
		
		var 
			_this=this,
			n = this.PRE_NAME;
	
		this.divNames ={			
			background: n + 'background',			
			book_stage: n + 'stage',
			book_help_layer: n + 'help_layer',
			book_container: n + 'stage_container',
			glossy_container: n + 'glossy_container',
			book_loader: n + 'book_loader',			
			book_icons_panel: n + 'icons_panel',
			book_spread_title: n + 'spread_title',
			book_page_numbers: n + 'page_numbers',
			icons_container: n + 'icons_container',			
			zoom_layer: n + 'zoom_layer',
			zoom_content: n + 'zoom_content',
			zoom_title_spread: n + 'zoom_title_spread',
			zoom_behavior_section: n + 'zoom_behavior_section',
			zoom_buttons: n + 'zoom_buttons',
			zoom_waiter: n + 'zoom_waiter_layer',
			save_menu:n + 'save_menu'			
		};		
	
		var appendStyle = function(styles) {
			var css = document.createElement('style');
			css.type = 'text/css';
			if(css.styleSheet){
				css.styleSheet.cssText = styles;
			}else{
				css.appendChild(document.createTextNode(styles));
			};
			_this.CSS = document.getElementsByTagName("head")[0].appendChild(css);
		};
		
		var 
			bookBackground = '#'+this.divNames.background,
			bookStage = '#' + this.divNames.book_stage,
			bookContainerName = '#'+this.divNames.book_container,
			glossyContainer = '#'+this.divNames.glossy_container,
			bookHelpLayer = '#'+this.divNames.book_help_layer,			
			bookLoaderName = '#'+this.divNames.book_loader,
			bookSpreadTitle = '.'+ this.divNames.book_spread_title,
			bookPageNumbers = '#'+ this.divNames.book_page_numbers,
			bookIconsPanel = '#'+this.divNames.book_icons_panel,
			zoomLayer = '#' + this.divNames.zoom_layer,
			zoomContent = '.' + this.divNames.zoom_content,
			zoomTitleSpread = '.' + this.divNames.zoom_title_spread,
			zoomWaiter = '#' + this.divNames.zoom_waiter;
			saveMenu = '.' + this.divNames.save_menu;
			
		var zIndex = this.CFG.ZINDEX;

		var styles = "";

		styles += zoomLayer+'{position:relative;}\n';
		styles += zoomLayer+' .btn_title{font:12px arial;color:black;padding:5px;white-space:nowrap;}\n';		
		styles += zoomContent+'{overflow:hidden;text-align:center;background:#e5e5e5;}\n';
		styles += zoomContent+' .zoom_pages{border-collapse:collapse;border:0px;background:white;}\n';
		styles += zoomContent+' .zoom_pages td{padding:0px;}\n';		
		styles += zoomTitleSpread+'{border-top:1px solid white;}\n';		
		styles += zoomTitleSpread+' p{font:14px arial;color:black;line-height:140%;margin:0px;}\n';
		styles += zoomTitleSpread+' p span{font:bold 14px arial;color:gray;margin-right:8px;}\n';								
		
		styles += saveMenu+' h1{font:16px arial;color:white;}\n';
		styles += saveMenu+' p{font:16px arial;color:white;}\n';
		styles += saveMenu+' a{font:16px arial;color:white;}\n';

		styles += bookPageNumbers+'{color:#b2b2b2;}\n';
		styles += bookPageNumbers+'.light{color:#555555;}\n';

		styles += [
			bookStage+'{',			
			'position:absolute;left:0px;top:0px;',
			'overflow:hidden;',			
			'-webkit-perspective:1000px;',
			'-moz-perspective:1000px;',
			'-ms-perspective:1000px;',
			'perspective:1000px;',			
			'z-index:'+zIndex.bookStage+';}\n'
		].join('');
		
		styles += [
			bookStage+'.pointer:hover{',			
			'cursor:pointer;}\n'
		].join('');
		

		styles += [
			bookBackground+'{',
			'position:fixed;left:0px;top:0px;right:0px;bottom:0px;',
			this.options.bgDark?'background:'+this.options.bgDark+';':'background:#282828;',
			'z-index:'+zIndex.bookBackground+';}\n'
		].join('');
		
		styles += [
			bookBackground+'.light{',
			this.options.bgLight?'background:'+this.options.bgLight+';':'background:#d0d0d0;',
			';}\n'
		].join('');
		
		styles += [
			bookContainerName+'{',
			'width:100%; height:100%;',
			'top:0px;left:0px;position:absolute;',
			'-webkit-transform-style: preserve-3d;',
			'-moz-transform-style: preserve-3d;',
			'-ms-transform-style: preserve-3d;',
			'transform-style: preserve-3d;',			
			'z-index:20;}\n'
		].join('');
		
		styles += [
			glossyContainer+'{',
			'width:100%; height:100%;',
			'top:0px;left:0px;position:absolute;',
			'z-index:25;}\n'
		].join('');		
		
		styles += [
			bookContainerName+' div{',
			'height:300px;',
			'-webkit-transform-origin:left center;',
			'-moz-transform-origin:left center;',	
			'-ms-transform-origin:left center;',	
			'transform-origin:left center;',						
			'-webkit-transform-style: preserve-3d;',
			'-ms-transform-style: preserve-3d;',			
			'-moz-transform-style: preserve-3d;',
			'transform-style: preserve-3d;}\n'
		].join('');	
		
		styles += [
			bookContainerName+' .all_edges{',
			'perspective:5000px;transform-origin:left center;transform-style: preserve-3d;',
			'-moz-perspective:5000px;-moz-transform-origin:left center;-moz-transform-style: preserve-3d;',
			'-ms-perspective:5000px;-ms-transform-origin:left center;-ms-transform-style: preserve-3d;',
			'}\n'
		].join('');

		styles += [
			bookContainerName+' .wholeimage{',
			'-webkit-transform-origin:left center;transform-origin:left center;-moz-transform-origin:left center;-ms-transform-origin:left center;',
			'-webkit-transform-style:preserve-3d;transform-style:preserve-3d;-moz-transform-style: preserve-3d;-ms-transform-style: preserve-3d;',
			'font:bold 20px arial;color:white;}\n'	
		].join('');

		styles += [
			bookContainerName+' .wholeimage,',
			bookContainerName+' .wholeimage span,',
			bookContainerName+' .wholeimage div{',
			'}\n'	
		].join('');


		styles += [
			bookContainerName+' div .back, \n',
			bookContainerName+' div .front, \n',
			bookContainerName+' .front_image, \n',
			bookContainerName+' .front_image>div, \n',
			bookContainerName+' .back_image, \n',
			bookContainerName+' .back_image>div {',
			'-moz-transform-style: preserve-3d;',
			'-ms-transform-style: preserve-3d;',
			'display:block;width:100%;height:100%;',
			'top:0px;left:0px;position:absolute;',			
			'-webkit-backface-visibility: hidden;',
			'-ms-backface-visibility: hidden;',
			'-moz-backface-visibility: hidden;',			
			'backface-visibility: hidden;}\n'
		].join('');	
		
		styles += [
			bookHelpLayer+'{',
			'position:absolute;',
			'outline: 1px solid transparent;',
			'-webkit-transform:translate3d(0px,0px,-1px);',
			'-moz-transform:translate3d(0px,0px,-1px);',
			'-ms-transform:translate3d(0px,0px,-1px);',
			'transform:translate3d(0px,0px,-1px);',			
			'z-index:0;}\n'
		].join('');

		styles += bookHelpLayer + ' a {text-decoration:none;}';
		styles += bookHelpLayer + ' a:hover {text-decoration:underline;}';
		styles += bookHelpLayer + ' p {padding:20px 20px 20px 0px;margin:0px;}';
		styles += bookHelpLayer + ' p span{display:block;margin-top:10px;}';
		
		styles += bookHelpLayer + ' .hlpLeftSide {border:1px solid #cccccc;border-right:none;}\n';
		styles += bookHelpLayer + ' .hlpRightSide {border:1px solid #cccccc;border-left:none;}\n'; 
		
		styles += bookHelpLayer + ' .hlpLeftSide p span[name=home_link]{width:36px;height:30px;margin:10px 0px 0px auto;opacity:0.8;}';
		styles += bookHelpLayer + ' .hlpLeftSide p span[name=click_to_open] a{font:21px arial;color:white;}';
		styles += bookHelpLayer + ' .hlpLeftSide p span[name=use_mousewheel]{font:12px arial;color:#d4d4d4;}';
		styles += bookHelpLayer + ' .hlpLeftSide p span[name=help_arrow]{width:55px;height:26px;margin:10px 0px 0px auto;opacity:0.8;}';		
		styles += bookHelpLayer + ' .hlpRightSide p span[name=goto_start] a{font:18px arial;color:white;}';		

		styles += bookHelpLayer + ' p.middleSize {padding:10px 10px 10px 0px;}';
		styles += bookHelpLayer + ' p.middleSize span{margin-top:5px;}';		
		styles += bookHelpLayer + ' .hlpLeftSide p.middleSize span[name=click_to_open] a{font:16px arial;}';
		styles += bookHelpLayer + ' .hlpRightSide p.middleSize span[name=goto_start] a{font:14px arial;}';		

		styles += bookHelpLayer + '.light .hlpLeftSide {border:1px solid #bfbfbf;border-right:none;}\n';
		styles += bookHelpLayer + '.light .hlpRightSide {border:1px solid #bfbfbf;border-left:none;}\n'; 
		
		styles += bookHelpLayer + '.light .hlpLeftSide p span[name=home_link]{opacity:0.4;}';
		styles += bookHelpLayer + '.light .hlpLeftSide p span[name=click_to_open] a{color:#656565;}';
		styles += bookHelpLayer + '.light .hlpLeftSide p span[name=use_mousewheel]{color:#656565;}';
		styles += bookHelpLayer + '.light .hlpLeftSide p span[name=help_arrow]{opacity:0.4;}';	
		styles += bookHelpLayer + '.light .hlpRightSide p span[name=goto_start] a{color:#656565;}';


		styles += [
			bookLoaderName+'{',
			'background:white url("'+this.AJAX_LOADER+'") center no-repeat;',
			'position:absolute;top:0px;left:0px;width:90px;height:90px;',
			'-moz-border-radius:15px;',
			'border-radius:15px;',
			'opacity:0.5;display:none;',
			'z-index:100;}\n'
		].join('');		
		
		styles += [
			zoomWaiter+'{',
			'position:absolute;',
			'width:100px;height:100px;',
			'left:0px;top:0px;',
			'z-index:300;}\n'
		].join('');		
		
		styles += [
			bookIconsPanel+'{',
			'position:absolute;',
			'top:0px;left:0px;text-align:center;',
			'z-index:'+zIndex.bookIconsPanel+';}\n'
		].join('');		
		
		styles += bookIconsPanel+' '+bookSpreadTitle+' p{font:14px arial;color:#aaaaaa;line-height:140%;margin:0px;}\n';
		styles += bookIconsPanel+' '+bookSpreadTitle+' span{font:bold 14px arial;color:#ffffff;margin-right:8px;}\n';
		styles += bookIconsPanel+'.light '+bookSpreadTitle+' p{color:#000000;}\n';
		styles += bookIconsPanel+'.light '+bookSpreadTitle+' span{color:#888888;}\n';
		styles += bookIconsPanel+' .btn_title{font:12px arial;color:#ffffff;padding:5px;white-space:nowrap;}\n';
		styles += bookIconsPanel+'.light .btn_title{color:black;}\n';				
					
		styles += [
			'.unselectable{',
			'-webkit-user-select:none;',
			'-khtml-user-select:none;',
			'-moz-user-select:none;',
			'user-select: none;}\n'
		].join('');

		styles += [
			'.noPointerEvents{',
			'pointer-events:none;}\n'
		].join('');

		appendStyle(styles);
	},

	getStage:function(){

	var 
		bookStageName = this.divNames.book_stage,
		bookContainerName = this.divNames.book_container,
		glossyContainer = this.divNames.glossy_container,
		bookLoaderName = this.divNames.book_loader,	
		zoomWaiterName = this.divNames.zoom_waiter;
		
		var $gStage = $('#'+bookStageName);
		$gStage.size() && $gStage.remove();
		
		var glossy = this.GLOSSY?'<div id="'+glossyContainer+'" style="pointer-events:none;"></div>':'';

		var tmpStage = [
				'<div id="'+bookStageName+'">',
				'<div id="'+bookContainerName+'"></div>', glossy,
				'<div id="'+bookLoaderName+'" style="display:none;"></div>',
				'<div id="'+zoomWaiterName+'" style="display:none;"></div>',
				"</div>"
		].join('');
		$('body').append(tmpStage);
		return $('#'+bookStageName);
	},

	getGlStage:function(){

		var gl = {}, 
			width = this.$gStage.width(), 
			height = this.$gStage.height();
		
		this.$gGlossyContainter.css({width:width,height:height});

		gl.container =document.getElementById(this.divNames.glossy_container);

    	gl.renderer = new THREE.WebGLRenderer({ alpha: true , antialias: true});
    	gl.renderer.setSize(width, height);
    	gl.container.appendChild(gl.renderer.domElement);			
		
		gl.scene = new THREE.Scene();

		var wh_ratio = width / height;

		gl.bookBase =  new THREE.Object3D();
		gl.bookBase.position.y = - (this.CFG.BOOK_GL_SIZE.height*this.CFG.ROTATE_CENTER_OFFSET_GL);
		gl.scene.add(gl.bookBase);

		gl.camera = new THREE.PerspectiveCamera( 33*2.25 / wh_ratio, wh_ratio, 0.1, 3000 );
		gl.camera.position.z = 1200;
		gl.camera.position.y = 0;	
		gl.scene.add(gl.camera);


		return gl;				
		
	},	

	bookHide:function(){
		this.$gStage.hide();
		this.$gIconsPanel && this.$gIconsPanel.hide();
	},
	bookShow:function(){
		this.$gStage.show();
		this.$gIconsPanel && this.$gIconsPanel.show();
	},	
	bgLoaderShow:function(show){
		var $loader = this.$gBookBackground && this.$gBookBackground.find('div');
		if(show){
			if($loader && $loader.is(':hidden')){
				$loader.show();
			}
		}else{
			if($loader && $loader.is(':visible')){
				$loader.hide();
			}						
		}
	},
	bookLoaderShow:function(show){
		if(show){			
			if(this.$gBookLoader.is(':hidden')){				
				this.$gBookLoader.show();
			}
		}else{
			if(this.$gBookLoader.is(':visible')){
				this.$gBookLoader.fadeOut();
			}
		}
	},

	exit:function(){

		if(this.TMR_RESIZE){clearTimeout(this.TMR_RESIZE);this.TMR_RESIZE=null};
		window[G_DATA].NUMBER-=1;
		window[G_DATA].SUPERBOOK=false;
		delete window[G_DATA].BOOKS[this.PRE_NAME];
		this.zoomOut();
		this.$gStage && this.$gStage.remove();
		this.$gSaveMenu && this.$gSaveMenu.remove();
		this.$gIconsPanel && this.$gIconsPanel.remove();		
		this.$gBookBackground && this.$gBookBackground.fadeOut('normal',function(){this.remove();});
		this.CSS.remove();
		$(window).unbind('.'+this.PRE_NAME);
		$(document).unbind('keyup.'+this.PRE_NAME);

		var parentBookName = this.options.parentBook;
		var currentSpread = this.CURRENT.spread;
		var currentSlopeMode = this.CURRENT.slope_mode;

		var updateOtherBooks  = function(){
			var books = window[G_DATA].BOOKS;
			for(var name in books){
				if (books.hasOwnProperty(name)){
					var parent = name === parentBookName;
					var BOOK = books[name];
					var update = BOOK.isNeedResizeReposInternal();					
					if(parentBookName && parent){
						var startPage = currentSpread?currentSpread*2:1;
						BOOK.START_PAGE = startPage;
						BOOK.slopeToggle(currentSlopeMode);
						window[G_DATA].CURRENT = BOOK.PRE_NAME;
						var gotoOtherSpread = BOOK.CURRENT.spread!==currentSpread;
						if(update==='resize'){
							BOOK.restart();
						}else{
							update==='reposition' && BOOK.restart(update);
							gotoOtherSpread && BOOK.gotoSpread(currentSpread);
						}
					}else{
						if(update){
							BOOK.restart(update);
						}
					}
				}
			}
		};

		updateOtherBooks();	
		
	},

	restart:function(mode){
		
		if(mode==='reposition'){
			
			var targetSize  =  this.TARGETSIZE;
			var stageSize = this.STAGE;
			var left = Math.round ((targetSize.width-stageSize.width)/2 + targetSize.left);
			var ipWidth = this.getIconsPanelWidth();
			var ipLeft = Math.round ((targetSize.width-ipWidth)/2 + targetSize.left);
			var menuLeft = Math.round ((targetSize.width-this.$gSaveMenu.width())/2 + targetSize.left);
			this.$gStage.css({left:left});
			this.$gIconsPanel.css({left:ipLeft});
			this.$gSaveMenu.css({left:menuLeft});
			this.prepareBookSize();
			this.calculateBounds();
		}else{
			
			this.zoomOut();
			this.GSCALE = 1;
			this.SHEETS_WAS_BUILT = [];
			this.QUEUE_IMAGES_LOADED = [];
			this.IMG_NOW_LOADING = [];
			this.NOW_LOADING_COUNTER = 0;	
			this.prepareBookSize();			
			this.prepareIconsPanelSize();

			this.deleteAllGLSheets();
			
			this.fit3dDataToBookSize();				

		}
	},	

	deleteAllGLSheets:function(){
		if(this.GLOSSY){
			var sheetnums = [];
			for(var i in this.GL_ARR_SHEETS){
				sheetnums.push(this.GL_ARR_SHEETS[i].num);
			};
			for(var i=0;i<sheetnums.length;i++){
				var n = sheetnums[i];
				var sheet = this.getSheetByIndex(n);
				if(sheet){ 
					this.gGL.bookBase.remove(sheet.mesh);
					delete this.GL_ARR_SHEETS[n];
				}										
			}				
		}		
	},

	gotoSpread:function(spreadNumber){
		
		var _this=this;
		var totalSheets = this.getTotalSheets();

		if(this.GLOSSY){
			_this.GL_LINK_TO_START = false;
			_this.$gStage.removeClass('pointer');
		};
	
		if(!this.ZOOM_MODE && !this.ANIMATION_FLAG){

			if(spreadNumber===0){
				this.START_FROM_END = true;
				this.toggleBook();
			}else if(spreadNumber===totalSheets){
				this.START_FROM_END = false;
				this.toggleBook();
			}else{
				this.CURRENT.spread	= spreadNumber;
				if(!this.GLOSSY){
					this.$gHelpLayer.find('.hlpLeftSide').css({opacity:0});
					this.$gHelpLayer.find('.hlpRightSide').css({opacity:0});
				};
			};
			 
			var arr = this.SHEETS_WAS_BUILT;
			for(var i in arr){
				if (arr.hasOwnProperty(i)){
					this.deleteSheet(i);
				}
			};
			
			this.buildAndPreloadSheets();
			this.changeSpreadTitle();
			this.pageNumbersChange();
			var btnToggleBook = this.$G_ARR_BUTTONS['togglebook'];
			btnToggleBook && btnToggleBook.update();

		}
	},

	prepareSkinImages:function(nextfn){
	
		var 
			_this=this,
			SKIN = window[G_DATA].SKIN;
		
		var fn = {
			invertCanvas:function(canvas){
				var ctx = canvas.getContext('2d');
				var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
				var data = imageData.data;
				for(var i = 0; i < data.length; i += 4){
					data[i] = 255 - data[i];
					data[i + 1] = 255 - data[i + 1];
					data[i + 2] = 255 - data[i + 2];
				};
				ctx.putImageData(imageData, 0, 0);
				return canvas;			
			},
			cloneCanvas:function(oldCanvas){
				var newCanvas = document.createElement('canvas');
				var context = newCanvas.getContext('2d');
				newCanvas.width = oldCanvas.width;
				newCanvas.height = oldCanvas.height;
				context.drawImage(oldCanvas, 0, 0);
				return newCanvas;			
			},
			drawHomeLink:function(){
				if(!SKIN.HOME_LINK){
					var img = new Image();				
					img.onload = function(){
						var canvas = document.createElement('canvas');
						canvas.width = this.width; canvas.height = this.height;
						var ctx = canvas.getContext('2d'); ctx.drawImage(this,0,0,this.width,this.height);
						SKIN.HOME_LINK = {light:canvas,dark:fn.invertCanvas(fn.cloneCanvas(canvas))};
						fn.drawHelpArrow();					
					};
					img.src = _this.SRC_HOME_LINK;	
				}else{
					fn.drawHelpArrow();
				}
			},
			drawHelpArrow:function(){
				if(!SKIN.HELP_ARROW){
					var img = new Image();				
					img.onload = function(){
						var canvas = document.createElement('canvas');
						canvas.width = this.width; canvas.height = this.height;
						var ctx = canvas.getContext('2d'); ctx.drawImage(this,0,0,this.width,this.height);
						SKIN.HELP_ARROW = {light:canvas,dark:fn.invertCanvas(fn.cloneCanvas(canvas))};
						fn.drawIconsBig();
					};
					img.src = _this.SRC_HELP_ARROW;	
				}else{
					fn.drawIconsBig();
				}
			},						
			drawIconsBig:function(){
				if(!SKIN.ICONS){
					var img = new Image();				
					img.onload = function(){
						var canvas = document.createElement('canvas');
						canvas.width = this.width; canvas.height = this.height;
						var ctx = canvas.getContext('2d'); ctx.drawImage(this,0,0,this.width,this.height);
						SKIN.ICONS = {light:canvas,dark:fn.invertCanvas(fn.cloneCanvas(canvas))};
						fn.drawIconsMini();
					};
					img.src = _this.SRC_ICONS_BIG;
				}else{
					fn.drawIconsMini();
				}	
			},
			drawIconsMini:function(){
				if(!SKIN.ICONS_MINI){
					var img = new Image();
					img.onload = function(){
						var canvas = document.createElement('canvas');
						canvas.width = this.width;
						canvas.height = this.height;
						var ctx = canvas.getContext('2d');
						ctx.drawImage(this,0,0,this.width,this.height);
						SKIN.ICONS_MINI = {light:canvas,dark:fn.invertCanvas(fn.cloneCanvas(canvas))};
						nextfn&&nextfn();
					};
					img.src = _this.SRC_ICONS_MINI;					
				}else{
					nextfn&&nextfn();
				}
			}
		};

		fn.drawHomeLink();		
		
	},


	getIconsPanelWidth:function(){
		return this.CFG.ICONS_PANEL[this.PANEL_TYPE].width;
	},
	getIconsPanelHeight:function(){			
		var 
			p = this.CFG.ICONS_PANEL,
			height = p[this.PANEL_TYPE].height,
			noTitle = p[this.PANEL_TYPE].noTitle,
			title = p.titleSection;			
		return this.NO_ONE_TITLES?(height-title+noTitle):height;			
	},
	fsapi:{
		goFullScreen:function(id){
			var el = id?document.getElementById(id):document.documentElement,
			 rfs = el.requestFullScreen
				|| el.webkitRequestFullScreen
				|| el.mozRequestFullScreen
				|| el.msRequestFullscreen;
			rfs.call(el);
		},
		exitFullScreen:function(){
			var el = document,
			rfs = el.exitFullscreen
				|| el.webkitCancelFullScreen
				|| el.webkitExitFullScreen
				|| el.webkitExitFullscreen
				|| el.mozCancelFullScreen
				|| el.msExitFullscreen;
			rfs.call(el);
		},	
		isFullScreen:function(){
			return document.fullscreenElement
			|| document.webkitFullscreenElement
			|| document.webkitCurrentFullScreenElement
			|| document.mozFullScreenElement
			|| document.msFullscreenElement;					
		}
	},	

	buildIconsPanel:function(){
		
		var 
			_this=this,
			iconsPanel = this.CFG.ICONS_PANEL,
			stageSize = this.STAGE,
			bookSize = this.CFG.BOOK_SIZE,
			bookIconsPanel = this.divNames.book_icons_panel,
			bookIconsContainer = this.divNames.icons_container,
			bookSpreadTitle = this.divNames.book_spread_title,
			classLight = !this.DARK_MODE?' light':'';

		var container = {
			build:function(){								
				if(_this.NO_ONE_TITLES){
					var noTitle = iconsPanel[sizeMode].noTitle;
					return $container = $([
						'<table cellpadding="0" cellspacing="0" width="100%" align="center" border=0>',
						'<tr><td height="'+noTitle+'px" style="font-size:0;line-height:0;"><img width="1px" height="1px" src="'+_this.GIF+'"></td></tr>',
						'<tr><td><div class="'+bookIconsContainer+'" style="position:relative;"></div></td></tr>',
						'</table>'
					].join(''));							
				}else{
					var heightTitleSection = _this.CFG.ICONS_PANEL.titleSection;
					return $container = $([
						'<table cellpadding="0" cellspacing="0" width="100%" align="center" border=0>',
						'<tr><td height="'+heightTitleSection+'px" class="'+bookSpreadTitle+'">&nbsp;</td></tr>',
						'<tr><td><div class="'+bookIconsContainer+'" style="position:relative;"></div></td></tr>',
						'</table>'
						].join(''));		
				};
			}
		};
			
		var sizeMode = this.PANEL_TYPE;
		var iconsPanelWidth = this.getIconsPanelWidth();
		var iconsPanelHeight = this.getIconsPanelHeight();
		
		if(!sizeMode){
			
			return; 
		};
			
		var $container = container.build();			
		var $panel = $('#'+bookIconsPanel);
		$panel.size() && $panel.remove();
		
		var $panel = $('<div id="'+bookIconsPanel+'" class="unselectable'+classLight+'" style="visibility:hidden;"></div>')
		.append($container).css({width:iconsPanelWidth,height:iconsPanelHeight});
		$('body').append($panel);
		this.$gIconsPanel = $panel;
		
		!this.BOOK_INTERNAL && this.$gIconsPanel.mousewheel && this.$gIconsPanel.mousewheel(function(){return false;});
		
		var $tmpl_br = $('<div style="width:1px;display:table-cell;"><img width="'+iconsPanel[sizeMode].betweenIcons+'px" src="'+this.GIF+'"></div>');
		var $book3d_icons = $panel.find('.'+bookIconsContainer);
		this.$gSpreadTitle = $panel.find('.'+bookSpreadTitle);
	
		var fn = {
			skin:function(btnTitle){
				_this.$gSaveMenu.hide();
				if(!_this.ZOOM_MODE){
					_this.toggleSkin();				
				}
			},
			save:function(btnTitle){
				if(!_this.ZOOM_MODE){
					_this.saveImagesAs();
				}
			},
			next:function(btnTitle){
				_this.gotoNext();
			},
			prev:function(btnTitle){
				_this.gotoPrev();
			},
			zoom:function(btnTitle){
				_this.$gSaveMenu.hide();
				if(!_this.ZOOM_MODE){
					_this.zoomIn();
				}
			},	
					
			close:function(btnTitle){
				_this.$gSaveMenu.hide();
				if(!_this.ZOOM_MODE){					
					if(_this.fsapi.isFullScreen()){
						_this.fsapi.exitFullScreen();
						setTimeout(function(){
							_this.exit();	
						},700);	
					}else{
						_this.exit();
					}
				}	
			},
			fullScreen:function(btnTitle){
				_this.$gSaveMenu.hide();
				if(!_this.ZOOM_MODE){
					if(_this.BOOK_INTERNAL){

						var options = $.extend(_this.options,{
							startPage:_this.START_PAGE,
							parentBook:_this.PRE_NAME,
							slope:_this.CURRENT.slope_mode
						});	
						$.onebook(_this.IMAGES_SRC,options);

					}else{

						if(_this.fsapi.isFullScreen()){
							_this.fsapi.exitFullScreen();
						}else{
							_this.bookHide();
							_this.bgLoaderShow(true);
							_this.fsapi.goFullScreen();
						};
					}					
				}	
			},
			slope:function(btnTitle){
				_this.$gSaveMenu.hide();
				if(!_this.ZOOM_MODE){			
					_this.slopeAnimate();
				}	
			},
			toggleBook:function(btnTitle){
				_this.$gSaveMenu.hide();
				_this.toggleBook();
			}			
		};

		var fullscreenBtnTitle = _this.fsapi.isFullScreen()?'fromfullScreen':'tofullScreen';
	
		if(sizeMode === 'tiny'){		
			
			var $centerIconSet = this.cloneIconsSet();
			$centerIconSet.find('>div').append(this.buttonCreate('Prev',fn.prev)).append($tmpl_br.clone());
			$centerIconSet.find('>div').append(this.buttonCreate('Save',fn.save)).append($tmpl_br.clone());
			$centerIconSet.find('>div').append(this.pageNumbersCreate(sizeMode)).append($tmpl_br.clone());
			$centerIconSet.find('>div').append(this.buttonCreate('Slope',fn.slope)).append($tmpl_br.clone());		
			$centerIconSet.find('>div').append(this.buttonCreate(fullscreenBtnTitle,fn.fullScreen)).append($tmpl_br.clone());
			$centerIconSet.find('>div').append(this.buttonCreate('Next',fn.next));
			$book3d_icons.append($centerIconSet);
			$container.css({position:'absolute',zIndex:10,top:0,left:iconsPanelWidth/2-$centerIconSet.width()/2});
			this.$gButtonsTitle = $panel.find('.btn_title');

		}else if(sizeMode === 'small'){
		
			var $leftIconSet = this.cloneIconsSet();
			$leftIconSet.find('>div').append(this.buttonCreate('Save',fn.save)).append($tmpl_br.clone());
			$leftIconSet.find('>div').append(this.pageNumbersCreate(sizeMode)).append($tmpl_br.clone());
			$book3d_icons.append($leftIconSet.css({float:'left'}));

			var $centerIconSet = this.cloneIconsSet();
			$centerIconSet.find('>div').append(this.buttonCreate('Prev',fn.prev)).append($tmpl_br.clone());
			$centerIconSet.find('>div').append(this.buttonCreate('Zoom',fn.zoom)).append($tmpl_br.clone());
			$centerIconSet.find('>div').append(this.buttonCreate('Next',fn.next));
			$book3d_icons.append($centerIconSet);
			$centerIconSet.css({position:'absolute',zIndex:10,top:0,left:iconsPanelWidth/2-$centerIconSet.width()/2});

			var $rightIconSet = this.cloneIconsSet();
			$rightIconSet.find('>div').append(this.buttonCreate('togglebook',fn.toggleBook)).append($tmpl_br.clone());
			$rightIconSet.find('>div').append(this.buttonCreate('Slope',fn.slope)).append($tmpl_br.clone());			
			$rightIconSet.find('>div').append(this.buttonCreate(fullscreenBtnTitle,fn.fullScreen));
			$book3d_icons.append($rightIconSet.css({float:'right'}));
			this.$gButtonsTitle = $panel.find('.btn_title');

		}else if(sizeMode === 'middle'){
			
			var $leftIconSet = this.cloneIconsSet();
			$leftIconSet.find('>div').append(this.buttonCreate('Save',fn.save)).append($tmpl_br.clone());
			$leftIconSet.find('>div').append(this.buttonCreate('Skin',fn.skin)).append($tmpl_br.clone());			
			$leftIconSet.find('>div').append(this.pageNumbersCreate(sizeMode)).append($tmpl_br.clone());
			$book3d_icons.append($leftIconSet.css({float:'left'}));

			var $centerIconSet = this.cloneIconsSet();
			$centerIconSet.find('>div').append(this.buttonCreate('Prev',fn.prev)).append($tmpl_br.clone());
			$centerIconSet.find('>div').append(this.buttonCreate('Zoom',fn.zoom)).append($tmpl_br.clone());
			$centerIconSet.find('>div').append(this.buttonCreate('Next',fn.next));
			$book3d_icons.append($centerIconSet);
			$centerIconSet.css({position:'absolute',zIndex:10,top:0,left:iconsPanelWidth/2-$centerIconSet.width()/2});

			var $rightIconSet = this.cloneIconsSet();
			$rightIconSet.find('>div').append(this.buttonCreate('togglebook',fn.toggleBook)).append($tmpl_br.clone());
			$rightIconSet.find('>div').append(this.buttonCreate('Slope',fn.slope)).append($tmpl_br.clone());			
			$rightIconSet.find('>div').append(this.buttonCreate(fullscreenBtnTitle,fn.fullScreen));
			$rightIconSet.find('>div').append($tmpl_br.clone()).append(this.buttonCreate('Close',fn.close));
			$book3d_icons.append($rightIconSet.css({float:'right'}));
			this.$gButtonsTitle = $panel.find('.btn_title');

		}else if(sizeMode === 'large'){

			var $leftIconSet = this.cloneIconsSet();
			$leftIconSet.find('>div').append(this.buttonCreate('Save',fn.save)).append($tmpl_br.clone());
			$leftIconSet.find('>div').append(this.buttonCreate('Skin',fn.skin)).append($tmpl_br.clone());
			$book3d_icons.append($leftIconSet.css({float:'left'}));
			
			var $centerIconSet = this.cloneIconsSet();
			$centerIconSet.find('>div').append(this.buttonCreate('Prev',fn.prev)).append($tmpl_br.clone());
			$centerIconSet.find('>div').append(this.buttonCreate('Zoom',fn.zoom)).append($tmpl_br.clone());
			$centerIconSet.find('>div').append(this.buttonCreate('Next',fn.next));
			$book3d_icons.append($centerIconSet);
			$centerIconSet.css({position:'absolute',zIndex:10,top:0,left:iconsPanelWidth/2-$centerIconSet.width()/2});
			
			var $rightIconSet = this.cloneIconsSet();
			$rightIconSet.find('>div').append(this.buttonCreate('togglebook',fn.toggleBook)).append($tmpl_br.clone());			
			$rightIconSet.find('>div').append(this.buttonCreate('Slope',fn.slope));
			if(!_this.$TARGET){ 
				$rightIconSet.find('>div')
				.append($tmpl_br.clone())
				.append(this.buttonCreate('Close',fn.close));
			};
			$book3d_icons.append($rightIconSet.css({float:'right'}));
			this.$gButtonsTitle = $panel.find('.btn_title');

		};
		this.changeSpreadTitle();
		this.pageNumbersChange();
	},
	getHlpLayerGL:function(){
		var skinMode = this.DARK_MODE?'dark':'light';
		return {
			left:this.gGL&&this.gGL.helpLayers?this.gGL.helpLayers[skinMode].left:'',
			right:this.gGL&&this.gGL.helpLayers?this.gGL.helpLayers[skinMode].right:''
		}
	},
	toggleSkinHlpLayerGLTo:function(skinMode){
		if(this.gGL&&this.gGL.helpLayers){
			if(skinMode==='dark'){
				this.gGL.helpLayers['dark'].left.material.opacity = 0;	
				this.gGL.helpLayers['dark'].right.material.opacity = 0;	
				this.gGL.helpLayers['light'].left.material.opacity = 1;	
				this.gGL.helpLayers['light'].right.material.opacity = 1;					
			}else{
				this.gGL.helpLayers['dark'].left.material.opacity = 1;	
				this.gGL.helpLayers['dark'].right.material.opacity = 1;	
				this.gGL.helpLayers['light'].left.material.opacity = 0;	
				this.gGL.helpLayers['light'].right.material.opacity = 0;	
			}
		};
		this.startRender();
	},
	toggleBook:function(){

		if(!this.ZOOM_MODE && !this.ANIMATION_FLAG){
			
			if(this.GLOSSY){
				var glHlp = this.getHlpLayerGL(); 	
			};
			

			if(this.START_FROM_END){
				this.START_FROM_END = false;
				this.CURRENT.spread = 0;
				if(this.GLOSSY){
					if(glHlp.left&&glHlp.right){
						glHlp.left.material.opacity = 1;
						glHlp.right.material.opacity = 0;
					}
				}else{
					this.$gHelpLayer.find('.hlpLeftSide').css({opacity:1});
					this.$gHelpLayer.find('.hlpRightSide').css({opacity:0});
				}
			}else{
				this.START_FROM_END = true;
				this.CURRENT.spread = this.getTotalSheets();
				if(this.GLOSSY){
					if(glHlp.left&&glHlp.right){
						glHlp.left.material.opacity = 0;
						glHlp.right.material.opacity = 1;
					}
				}else{
					this.$gHelpLayer.find('.hlpLeftSide').css({opacity:0});
					this.$gHelpLayer.find('.hlpRightSide').css({opacity:1});	
				}			
			};
			 
			var arr = this.SHEETS_WAS_BUILT;	
			for(var i in arr){
				if (arr.hasOwnProperty(i)){
					this.deleteSheet(i);
				}
			};

			this.START_PAGE = this.CURRENT.spread*2?this.CURRENT.spread*2:1;
			this.buildAndPreloadSheets();
			this.changeSpreadTitle();
			this.pageNumbersChange();
			this.$G_ARR_BUTTONS['togglebook'] && this.$G_ARR_BUTTONS['togglebook'].update();
		}
	},

	toggleSkin:function(){
		var 
			_this=this,
			$pageNumbers = $('#'+this.divNames.book_page_numbers),
			invertMode = this.DARK_MODE?'light':'dark',
			SKIN = window[G_DATA].SKIN;

		var fn = {
				btn_update:function(){
					for(var i in _this.$G_ARR_BUTTONS){
						_this.$G_ARR_BUTTONS[i].update();
					};
				},
				hlp_update_images:function(){
					if(!_this.GLOSSY){
						_this.$gHelpLayer.find('span[name=home_link]').css({background:'url('+SKIN.HOME_LINK[invertMode].toDataURL()+') no-repeat center'});
						_this.$gHelpLayer.find('span[name=help_arrow]').css({background:'url('+SKIN.HELP_ARROW[invertMode].toDataURL()+') no-repeat center'});
					}
				}
			};

		if(this.GLOSSY){ var glHlp = this.getHlpLayerGL(); };

		if(this.DARK_MODE){

			this.DARK_MODE = false;
			var bgImage  = this.getHlpLayerBgImage();
			this.$gBookBackground.addClass('light');
			$pageNumbers.addClass('light');
			this.$gIconsPanel.addClass('light');

			if(this.GLOSSY){

			this.toggleSkinHlpLayerGLTo('dark');

			}else{
				this.$gHelpLayer.addClass('light');
				this.$gHelpLayer.find('.hlpLeftSide').css({background:'url('+bgImage.toDataURL()+')'});
				this.$gHelpLayer.find('.hlpRightSide').css({background:'url('+bgImagetoDataURL()+')'});
			};

			fn.hlp_update_images();
			fn.btn_update();

		}else{
			this.DARK_MODE = true;
			var bgImage  = this.getHlpLayerBgImage();
			this.$gBookBackground.removeClass('light');
			$pageNumbers.removeClass('light');
			this.$gIconsPanel.removeClass('light');

			if(this.GLOSSY){

			this.toggleSkinHlpLayerGLTo('light');	

			}else{
				this.$gHelpLayer.removeClass('light');
				this.$gHelpLayer.find('.hlpLeftSide').css({background:'url('+bgImage.toDataURL()+')'});
				this.$gHelpLayer.find('.hlpRightSide').css({background:'url('+bgImage.toDataURL()+')'});	
			};

			fn.hlp_update_images();
			fn.btn_update();
		};
	},

	cloneIconsSet:function(){
		var $tmpl_icon_set = $('<div style="display:table;"><div style="display:table-row"></div></div>');		
		return $tmpl_icon_set.clone();
	},
	pageNumbersCreate:function(sizeMode){		
		var 
			id = this.divNames.book_page_numbers,
			p = this.CFG.ICONS_PANEL[sizeMode],
			width = p.pageNumbers.width,
			fontSize = p.pageNumbers.fontSize,
			light = !this.DARK_MODE?'class="light" ':'',
			$pn = $([
				'<div id="' + id + '" ' + light,
				'style="display:table-cell;vertical-align:middle;width:'+width+'px;font:'+fontSize+'px arial;">',
				'<span style=""></span></div>'
				].join(''));
		return $pn;
	},
	pageNumbersChange:function(){	
		var 	
			id = this.divNames.book_page_numbers,
			from = this.CURRENT.spread,
			total_spreads = this.getTotalSheets(),
			currfrom = from+'&nbsp;/&nbsp;'+total_spreads;
		
		$('#'+id).find('span').html(currfrom);

	},	
	buttonCreate:function(title,fn,skinMode){
	
		this.$G_ARR_BUTTONS = this.$G_ARR_BUTTONS?this.$G_ARR_BUTTONS:[];

		var 
			_this=this,
			title = title.toLowerCase(),
			skin = skinMode?skinMode.mode:(this.DARK_MODE?'dark':'light');

		if(this.LARGE_ICONS){
			var
				ICONS = window[G_DATA].SKIN.ICONS,
				B_OFFSET = this.BTNS_OFFSET,
				ic = this.CFG.ICONS_SIZE.big,
				book_btn = [
					'<table width="100%" cellpadding="0" cellspacing="0">',
					'<tr><td height="'+ic+'px" align="center">',
						'<div class="btn_image" style="width:'+ic+'px;height:'+ic+'px;" ><img src="'+this.GIF+'"></div>',
					'</td></tr>',
					'<tr><td align="center" class="btn_title">-</td></tr></table>'
				].join('');		
		}else{
			var 
				ICONS = window[G_DATA].SKIN.ICONS_MINI,
				B_OFFSET = this.BTNS_MINI_OFFSET,
				ic = this.CFG.ICONS_SIZE.small,
				book_btn = [
					'<div class="btn_image" style="width:'+ic+'px;height:'+ic+'px;">',
					'<img src="'+this.GIF+'"></div>',
					'</div>'
				].join('');	
		};

		var getBtnParam = function(){

			var 
				param = B_OFFSET[title][0],
				multiple = param.length>1;

			if(multiple){
				var 
					conditionName = B_OFFSET[title][2],
					mode = _this[conditionName]?0:1,
					offset = B_OFFSET[title][0][mode],
					btnsTitle = B_OFFSET[title][1][mode];
			}else{
				var 
					offset = param,
					btnsTitle = title;
			};
			return {
				offset:offset,
				lngTitle:_this.getLNG(btnsTitle)
			}
		};

		var btnOpacity = function(mode){
		   var opacityMode = _this.DARK_MODE?{start:0.7,end:1}:{start:0.8,end:0.5};
		  return opacityMode[mode];
		};
		
		
		var	
			param = getBtnParam(),
			iconBackground = 'url('+ICONS[skin].toDataURL()+') no-repeat '+param.offset+' 0px',
			$tmpl_btn = $('<div class="book_btn" style="width:'+ic+'px;display:table-cell;cursor:pointer;">'+book_btn+'</div>'),
			$btn = $tmpl_btn.clone(),
			$div = $btn.find('.btn_image').css({background:iconBackground,opacity:btnOpacity('end')}).attr({title:param.lngTitle}),
			$title = $btn.find('.btn_title').html(param.lngTitle);
		

		$btn.hover(function(){$div.css({opacity:btnOpacity('start')})},function(){$div.css({opacity:btnOpacity('end')})})
		.mousedown(function(){$div.css({backgroundPosition:param.offset+' 1px'});})
		.mouseup(function(){
			$div.css({backgroundPosition:param.offset+' 0px'});				
			fn&&fn(title);
		});
		$btn.update = function(){
		    var 
				param = getBtnParam(),
		 		skin = _this.DARK_MODE?'dark':'light',
				iconBackground = 'url('+ICONS[skin].toDataURL()+') no-repeat '+param.offset+' 0px',
				$div = this.find('.btn_image').css({background:iconBackground,opacity:btnOpacity('end')}).attr({title:param.lngTitle});
				$div = this.find('.btn_title').html(param.lngTitle);				
		};
		this.$G_ARR_BUTTONS[title] = $btn;		
		return $btn;	
	},

	gotoNext:function(){
		this.$gSaveMenu.hide();
		if(!this.ZOOM_MODE){				
			if(!this.ANIMATION_FLAG && !this.startDrag){
				if(this.isDirectionCorrect('next')){
					this.animateSheet('next');
				}
			}else{
				this.ORDER_TO_ANIMATE = 'next';
			}
		}
	},	
	gotoPrev:function(){
		this.$gSaveMenu.hide();
		if(!this.ZOOM_MODE){
			if(!this.ANIMATION_FLAG  && !this.startDrag){
				if(this.isDirectionCorrect('prev')){
					this.animateSheet('prev');
				}		
			}else{
				this.ORDER_TO_ANIMATE = 'prev';
			}
		}
	},	

	zoomIn:function(coord){

		var _this=this;		
		if(this.ZOOM_MODE || this.ANIMATE_ZOOM){return false;};		
		this.ANIMATE_ZOOM = true;
		this.ZOOM_MODE = 1;		
		
		var nm = this.divNames.zoom_layer;
		var $zoomLayer = $('#'+nm);
			$zoomLayer.size() && $zoomLayer.remove();
		
		this.ZOOMSIZE = {height:$(window).height(),width:$(window).width(),top:0,left:0};		
		var s = this.ZOOMSIZE;
		s.top = $(document).scrollTop();
		
		var zoomk = 0.8;
		var pre = {width:s.width*zoomk,height:s.height*zoomk};
			pre.top = Math.floor(s.top+((s.height-pre.height)/2));
			pre.left = Math.floor(s.left+((s.width-pre.width)/2));
		
		var fn = {
			buildZoomLayer:function(){
				var $zoomLayer = $('<div id="'+nm+'"></div>')
				.css({
					border:'1px solid white',position:'absolute',
					top:pre.top,left:pre.left,width:pre.width,height:pre.height,
					cursor:'pointer',opacity:0.5,zIndex:_this.CFG.ZINDEX.zoomLayer
				}).click(function(){
					if(!_this.ANIMATE_ZOOM){
						_this.zoomOut();
					}				
				});		
				$('body').append($zoomLayer);
				_this.$gZoomLayer = $('#'+nm);					
				fn.animateZoomLayerAppear();
			},
			animateZoomLayerAppear:function(){
				var w = s.width;
				var h = s.height;
				_this.$gZoomLayer.animate({
						top:s.top,left:s.left,
						width:w,height:h,opacity:1
					},200,function(){
					$(this).css({opacity:0,border:'0px none',background:'#e5e5e5'})
					.animate({opacity:1},300,function(){
						_this.ANIMATE_ZOOM = false;
						_this.showZoomContent(coord);
					});
				});		
			}
		};
		fn.buildZoomLayer();
	},	
	
	showZoomContent:function(firstCoord){
		
		var 
			_this = this,
			firstCoord = firstCoord,
			total_spreads = this.getTotalSheets(),
			cs = this.CURRENT.spread,
			isFirstPage = cs == 0,
			isLastPage = cs == total_spreads,
			zSize = this.ZOOMSIZE,
			borderSpace = 250,
			titleHeight = 85,
			cSize = {width:zSize.width,height:zSize.height-titleHeight,left:zSize.left,top:zSize.top},
			pagesAmount = !isFirstPage && !isLastPage ?2:1;
		
		var bookSize = {
			height:this.CFG.BOOK_UNSCALED.height,
			width:this.CFG.BOOK_UNSCALED.width*pagesAmount
			};	
		
		var bookSmallerThanContent = bookSize.width<cSize.width && bookSize.height<cSize.height;
		
		var percentSize = {
			vertical:(bookSize.height+borderSpace*2-cSize.height)/100,
			horizontal:(bookSize.width+borderSpace*2-cSize.width)/100
			};		
		
		var 
			$zoomPages = '',	
			zoomContentClassName = this.divNames.zoom_content,
			zoomBehaviorSection = this.divNames.zoom_behavior_section,
			zoomTitleSpread = this.divNames.zoom_title_spread,
			zoomButtonsClassName = this.divNames.zoom_buttons;
		
		var style='position:absolute;width:100%;height:'+titleHeight+'px;top:'+cSize.height+'px;left:0px;';
		
		var tplContent = [			
			'<div class="'+zoomContentClassName+'" style="width:100%;height:100%;"></div>',
			'<div style="'+style+'z-index:10;background:white;opacity:0.8">&nbsp;</div>',
			'<div style="'+style+'z-index:30;" class="'+zoomButtonsClassName+'">&nbsp;</div>',
			'<div style="position:absolute;width:100%;height:100%;top:0px;left:0px;z-index:20;">',
				'<table width="100%" height="100%" cellspacing="0" cellpadding="0" border="0">',
					'<tr><td colspan=3 align="center" class="'+zoomBehaviorSection+'"></td></tr>',
					'<tr><td align="center" class="'+zoomTitleSpread+'">'+this.CURRENT.spreadTitle+'</td></tr>',
				'</table>',
			'</div>'
		].join('');
		
		this.$gZoomLayer.html(tplContent);

		var $zoomContent = this.$gZoomLayer.find('.'+zoomContentClassName);
		var $zoomBehavior = this.$gZoomLayer.find('.'+zoomBehaviorSection).css({height:cSize.height});
		var $zoomTitle = this.$gZoomLayer.find('.'+zoomTitleSpread).css({height:titleHeight});
		var $zoomButtons = this.$gZoomLayer.find('.'+zoomButtonsClassName);
								
		var fn = {
			buttonsInsert:function(){
				var $rightIconSet = _this.cloneIconsSet();
				$rightIconSet.append(_this.buttonCreate('zoomClose',function(){},{mode:'light'}));
				$zoomButtons.append($rightIconSet.css({float:'right',margin:'8px 8px 0px 0px'}));
			},
			calculateCoord:function(mouseCoord){
				var coord = {x:mouseCoord.x-cSize.left,y:mouseCoord.y-cSize.top};	
				var percents = {vertical:100/(cSize.height/coord.y),horizontal:100/(cSize.width/coord.x)};			
				var top = percentSize.vertical*(percents.vertical)*-1+borderSpace;
				var left = percentSize.horizontal*(percents.horizontal)*-1+borderSpace;								
				return {top:top,left:left};
			},
			moveContent:function(targetCoord){									
				$zoomPages.css({marginTop:targetCoord.top+'px',marginLeft:targetCoord.left+'px'});
			},
			contentToCenter:function(){
				var frames = 20;			
				var startX = parseFloat($zoomPages.css('marginLeft'))||0;
				var startY = parseFloat($zoomPages.css('marginTop'))||0;
				if(firstCoord && !bookSmallerThanContent){
					var endCoord = this.calculateCoord(firstCoord);
					var endX = endCoord.left;
					var endY = endCoord.top;
				}else{
					var endX = (bookSize.width-cSize.width)/2*-1;
					var endY = bookSize.height<cSize.height?(bookSize.height-cSize.height)/2*-1:0;
				};
				fn.recurseAnimation(frames,0,[startX,startY],[endX,endY]);
			},
			behaviors:function(){
				var that = this;
				$zoomBehavior.mousemove(function(e){			
					if(!bookSmallerThanContent){						
						fn.moveContent(that.calculateCoord({x:e.pageX,y:e.pageY}));									
					}
				}).hover(function(){
					if(!bookSmallerThanContent){
						if(_this.TMR_ZOOMPAGES_ANI){
							clearTimeout(_this.TMR_ZOOMPAGES_ANI)
							_this.TMR_ZOOMPAGES_ANI = null;
						};
						if(firstCoord){
							firstCoord = false;
						}else{
							$zoomPages.hide().fadeIn('normal');
						}					
					}
				},function(){
					if(firstCoord){
						firstCoord = false;
					};
					fn.contentToCenter();
				});
			},
			recurseAnimation:function(frames,count,startCoord,endCoord){						
				_this.TMR_ZOOMPAGES_ANI = setTimeout(function(){
					count++;
					var n = count/frames;
					var a = 1-(1 - Math.sin(Math.acos(1-n)));
					var persent = a*100;				
					var newY = startCoord[1] - (startCoord[1]-endCoord[1])/100*persent;
					var newX = startCoord[0] - (startCoord[0]-endCoord[0])/100*persent;								
					$zoomPages.css({margin:newY+'px 0px 0px '+newX+'px'});
					if(count<frames){fn.recurseAnimation(frames,count,startCoord,endCoord);}	
				},5);		
			},
			showEmptyPages:function(){
				var h = bookSize.height;
				var w = bookSize.width;
				var pages = '';
				if(!isFirstPage && !isLastPage){					
					pages+='<td class="page_back" width="50%"></td><td class="page_front" width="50%"></td>';
				}else{
					pages+=isFirstPage?'<td class="page_front"></td>':'<td class="page_back"></td>';
				};
				var html = [
					'<table class="zoom_pages" width="'+w+'px" height="'+h+'px" style="display:none;"><tr>',
					pages,
					'</tr></table>'
				].join('');
				$zoomContent.html(html);						
				$zoomPages = $zoomContent.find('.zoom_pages');
				fn.behaviors();
				fn.insertSelfShadow();
				fn.choosePageForLoading();
			},
			insertSelfShadow:function(){
				var shadow = _this.SELFSHADOW_UNSCALED;	
				var height=$zoomPages.height();
				$zoomPages.find('.page_back').html('<div style="width:100%;height:'+height+'px;background:url('+shadow['back'].toDataURL()+') no-repeat;">&nbsp;</div>');
				$zoomPages.find('.page_front').html('<div style="width:100%;height:'+height+'px;background:url('+shadow['front'].toDataURL()+') no-repeat;">&nbsp;</div>');
				$zoomPages.fadeIn('normal');
				fn.contentToCenter();
			},
			insertImageToZoomPage:function(image){
				var page_class = image.side=='left'?'.page_back':'.page_front';
				var sheet = image.side=='left'?cs-1:cs;
				var imgBackground = _this.buildResizedImage(_this.CFG.BOOK_UNSCALED,1,{
					img:image.img,
					page:image.side=='left'?0:1,
					sheet:sheet
				},false);		
				if(_this.CFG.DIVIDE_IMAGES){
					var leftMargin = image.side=='left'?0:_this.CFG.BOOK_UNSCALED.width*-1;
					$zoomPages.find(page_class).css({background:'url("'+imgBackground.toDataURL()+'") '+leftMargin+'px 0px no-repeat'});
				}else{
					$zoomPages.find(page_class).css({background:'url("'+imgBackground.toDataURL()+'") no-repeat'});
				}
			},
			loadImageForZoomPage:function(src,side){

				if(!_this.TMR_ZOOM){_this.TMR_ZOOM={};};								
				if(src.indexOf('.png')>-1 || src.indexOf('.jpg')>-1 || src.indexOf('.gif')>-1){
				var img = new Image();
				img.onload = function(){				
					var image = {img:this,src:src,side:side};
					setTimeout(function(){
						fn.insertImageToZoomPage(image)
					},10);
				};
				_this.IMG_NOW_LOADING_FOR_ZOOM.push(img); 
				img.src = src;
				}			
			},
			choosePageForLoading:function(){
				if(!cs){			
					var pageNumber = 0;
					var src = _this.ARR_PAGES_SRC[pageNumber];			
					fn.loadImageForZoomPage(src,'right');
				}else if(cs == total_spreads){
					var pageNumber = total_spreads*2-1;
					var src = _this.ARR_PAGES_SRC[pageNumber];
					fn.loadImageForZoomPage(src,'left');
				}else{
					var pageNumber = cs*2-1;
					var src = _this.ARR_PAGES_SRC[pageNumber];
					fn.loadImageForZoomPage(src,'left');
					var pageNumber = cs*2;
					var src = _this.ARR_PAGES_SRC[pageNumber];		
					fn.loadImageForZoomPage(src,'right');
				}
			}
		};		
		
		fn.buttonsInsert();
		fn.showEmptyPages();
	},	
	
	zoomOut:function(){
		if(!this.ZOOM_MODE){return false;};
		this.ZOOM_MODE = 0;
		this.$gZoomLayer && this.$gZoomLayer.remove();
	},

	rotate_x_to:function(degree){
		if(this.GLOSSY){
			 if(this.gGL ){
			 	this.gGL.bookBase.rotation.x =  degree*Math.PI/180 * (-1);
			 	this.startRender();
			 }
		};
		var transform = 'translate3d(' + this.OFFSET.left + 'px,' + this.OFFSET.top + 'px,0px) rotateX('+degree+'deg)';
		this.$gContainter.css({'transform':transform,'-webkit-transform':transform,'-moz-transform':transform,'-ms-transform':transform});
	},

	slopeAnimate:function(){
		var _this=this;
		if(this.ANIMATION_SLOPE){return false;};
		this.ANIMATION_SLOPE = true;
		var total = this.CFG.ARR_SLOPE_ANGLES.length;
		var curr = _this.CURRENT.slope_mode;
		var from = this.CFG.ARR_SLOPE_ANGLES[curr];
		this.CURRENT.slope_mode = curr+1<total?curr+1:0;
		this.CFG.START_SLOPE_MODE = this.CURRENT.slope_mode;		
		var to = this.CFG.ARR_SLOPE_ANGLES[this.CURRENT.slope_mode];
		var k = to>from?1:-1;
		var rotateRecursive = function(){
			from+=k;
			setTimeout(function(){
			    if(from!=to){
					_this.rotate_x_to(from);
					rotateRecursive();
				}else{
					_this.rotate_x_to(from);
					_this.ANIMATION_SLOPE = false;
				}
			},10);
		};
		rotateRecursive();
	},

	slopeAnimateTo:function(direction){
		var _this=this;
		if(this.ANIMATION_SLOPE){return false;};
		this.ANIMATION_SLOPE = true;
		var total = this.CFG.ARR_SLOPE_ANGLES.length;
		var curr = _this.CURRENT.slope_mode;
		var from = this.CFG.ARR_SLOPE_ANGLES[curr];
		if(direction==='up'){
		    if(curr+1<total){
			    this.CURRENT.slope_mode = curr+1;
			}else{
                _this.ANIMATION_SLOPE = false;			
			    return false;
			};
		}else{
		    if(curr>0){
			   this.CURRENT.slope_mode = curr-1;
			}else{
                _this.ANIMATION_SLOPE = false;			
			    return false;			
			}		    
		};		
		this.CFG.START_SLOPE_MODE = this.CURRENT.slope_mode;		
		var to = this.CFG.ARR_SLOPE_ANGLES[this.CURRENT.slope_mode];
		var k = to>from?1:-1;
		var rotateRecursive = function(){
			from+=k;
			setTimeout(function(){
			    if(from!=to){
					_this.rotate_x_to(from);
					rotateRecursive();
				}else{
					_this.rotate_x_to(from);
					_this.ANIMATION_SLOPE = false;
				}
			},10);
		};
		rotateRecursive();
	},	

	slopeToggle:function(num){
		var 
			_this=this,
			num = parseInt(num,10),
			angles = this.CFG.ARR_SLOPE_ANGLES;
		if(num<angles.length){
			var gr = angles[num]; 
			this.CURRENT.slope_mode = num;
			this.CFG.START_SLOPE_MODE = this.CURRENT.slope_mode;
			this.rotate_x_to(gr);
		}
	},
	
	fit3dDataToBookSize:function(){
		var _this=this;
		
		this.FRAMES = this.getClonedData();
		this.FRAMES_GL_SCALED = this.getClonedData();

		var space = !this.$TARGET?this.CFG.SPACE_AROUND_STAGE:{horizontal:0,vertical:0};
				
		var bookSize = {
			width:(this.FIRST_IMAGE_SIZE.w + 2*_this.CFG.BORDER) || 100,
			height:(this.FIRST_IMAGE_SIZE.h + 2*_this.CFG.BORDER) || 100
		};
				
		if(this.CFG.DIVIDE_IMAGES){
			bookSize.width = bookSize.width%2>0?(bookSize.width-1)/2:bookSize.width/2;
		};

		var spaceSize = !this.$TARGET?this.WINSIZE:this.TARGETSIZE;
		if(this.BOOK_INTERNAL){ spaceSize.height = this.CFG.MAX_SCREEN_SIZE.height;};
		var iconsPanelHeight = this.getIconsPanelHeight();
		var screenSize = {
			w:Math.min(this.CFG.MAX_SCREEN_SIZE.width,spaceSize.width)-space.horizontal,
			h:Math.min(this.CFG.MAX_SCREEN_SIZE.height,spaceSize.height)-iconsPanelHeight - space.vertical
			};

		var boundingBox = {
			w:2*bookSize.width + 2*this.CFG.PASPARTU_BEHAVIORS_PARAM.width,
			h:bookSize.height + 2*this.CFG.PASPARTU_BEHAVIORS_PARAM.height
			};				
			
		if(boundingBox.w>screenSize.w || boundingBox.h > screenSize.h){
			var x_ratio = screenSize.w / boundingBox.w;
			var y_ratio = screenSize.h / boundingBox.h;
			var ratio = Math.min(x_ratio, y_ratio);
		}else{ var ratio = 1; };


		this.GSCALE = ratio;

		bookUnscaled = {width:bookSize.width,height:bookSize.height};
		bookSize.width = Math.round(bookSize.width*this.GSCALE);
		bookSize.height = Math.round(bookSize.height*this.GSCALE);

		var bookGLSize = {width:800,height:Math.round(bookSize.height*800/bookSize.width)};

		var bezieArrayLength = this.FRAMES[0][0].bezie.length;
		var dataWidth = Math.abs(this.FRAMES[0][0].bezie[bezieArrayLength-1].x);
		var kscaled = bookSize.width/dataWidth;
		var kGLscaled = bookGLSize.width/dataWidth;

		var calculate = function(frames,k){
			for(var i=0;i<frames.length;i++){
				var edges3d = frames[i].edges3d;
				for(var n=0;n<edges3d.length;n++){
					edges3d[n].width*=k;
					edges3d[n].x*=k;
					edges3d[n].z*=k;
				}
			}
		};
		
		calculate(this.FRAMES[0],kscaled);
		calculate(this.FRAMES[1],kscaled);
		calculate(this.FRAMES_GL_SCALED[0],kGLscaled);
		calculate(this.FRAMES_GL_SCALED[1],kGLscaled);

		if(bookSize.width && bookSize.height){
		
			this.initWithSize(bookSize,bookUnscaled,bookGLSize);	
		
		}

		
	},

	initWithSize:function(bookSize, bookUnscaled, bookGLSize){			
		
		var _this=this;
		
		this.CFG.BOOK_GL_SIZE = bookGLSize;
		this.CFG.BOOK_SIZE = bookSize;
		this.CFG.BOOK_UNSCALED = bookUnscaled;

		this.MOUSE = {		
			startDragCoord:{x:0,y:0},				
			oldCoord:{x:0,y:0},		
			lastCoord:{x:0,y:0},	
			isOverStage:false 		
		};

		this.ANIMATION = {SPEED:15};
		
		this.STAGE = {
			width:Math.round(this.CFG.BOOK_SIZE.width + this.CFG.PASPARTU_BEHAVIORS_PARAM.width*this.GSCALE)*2,
			height:Math.round(this.CFG.BOOK_SIZE.height + this.CFG.PASPARTU_BEHAVIORS_PARAM.height*2*this.GSCALE)
		};
		
		this.STAGE_HALF = {
			width:this.STAGE.width/2,
			height:Math.round(this.STAGE.height/2)
		};
		this.STAGE_CENTER = {top:0,left:0};
		this.OFFSET = {
			top:Math.round((this.STAGE.height-this.CFG.BOOK_SIZE.height)*0.5),
			left:this.STAGE.width*0.5
		};

		this.CURRENT = {
			frame:0,
			sheet:-1,
			dragged_sheet:-1,
			spread:0,
			hoverframe:0,
			hoverside:'front',
			dir_ani:1,
			slope_mode:this.CFG.START_SLOPE_MODE,
			spreadTitle:''
		};

		this.LAST = {
			mousemoved:false,
			sheet:-1,
			forward:1,
			moved:{sheet:-1,$edges:false,forward:0},
		};

		this.$gStage.css({width:this.STAGE.width,height:this.STAGE.height,border:'0px solid red'});
		
		this.$gContainter.css({
				width:this.CFG.BOOK_SIZE.width,
				height:this.CFG.BOOK_SIZE.height*this.CFG.ROTATE_CENTER_OFFSET,border:'0px solid gold'
				});
		
		this.calculateSheets();
		this.correctStartPage();

		this.SELFSHADOW = {
			front:this.createSelfShadow('front',this.CFG.BOOK_SIZE),
			back:this.createSelfShadow('back',this.CFG.BOOK_SIZE)
		};
		this.SELFSHADOW_UNSCALED = {
			front:this.createSelfShadow('front',this.CFG.BOOK_UNSCALED),
			back:this.createSelfShadow('back',this.CFG.BOOK_UNSCALED)
		};


		this.buildIconsPanel();		
		this.buildSaveMenuLayer();
		!_this.GLOSSY && this.buildHelpLayer();
		this.stageToCenter();
		this.behavior();
		
		if(this.GLOSSY){ 
			if(!this.gGL){
				this.gGL = this.getGlStage();
				this.createGlHlpLayer();
				this.renderGL();
			}else{
				this.updateGlStage();
				this.updateGlHlpLayer();
			};
			this.startRender();
		};			
		
		this.rotate_x_to(this.CFG.ARR_SLOPE_ANGLES[this.CURRENT.slope_mode]);

		this.buildAndPreloadSheets();

		
	},
	updateGlStage:function(){
		var gl = this.gGL, 
			width = this.$gStage.width(), 
			height = this.$gStage.height();
		this.$gGlossyContainter.css({width:width,height:height});
		gl.renderer.setSize(width, height);
	},	
	updateGlHlpLayer:function(){
		var glhlp = this.gGL.helpLayers;
		this.gGL.bookBase.remove(glhlp['dark'].left);
		this.gGL.bookBase.remove(glhlp['dark'].right);
		this.gGL.bookBase.remove(glhlp['light'].left);
		this.gGL.bookBase.remove(glhlp['light'].right);
		this.createGlHlpLayer();
	},
	createGlHlpLayer:function(){
		var 
			_this=this,
			bookSize = this.CFG.BOOK_SIZE,
			size = this.CFG.BOOK_GL_SIZE,
			bgImages  = {dark:this.getHlpLayerBgImage('dark'),light:this.getHlpLayerBgImage('light')},
			hlpImageSize = {width:300,height:200},
			skinMode = this.DARK_MODE?'dark':'light',
			SKIN = window[G_DATA].SKIN;

		var fn = {
			PlainTextured:function(options){
			    var white = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==";		    
				var transparent = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
			    var src = options.src || white;
				var side = THREE.FrontSide;
				var skin = options.skin;
		        var plainMesh = new THREE.Mesh(
					   new THREE.PlaneGeometry( size.width, size.height ),
					   new THREE.MeshBasicMaterial({map:THREE.ImageUtils.loadTexture( transparent ), transparent:true, side:side })
					);
			    THREE.ImageUtils.loadTexture(src,undefined,function(texture){
	               plainMesh.material.map = texture;
	               if(skin!==skinMode){plainMesh.material.opacity = 0;};
				    options.onReady && options.onReady(plainMesh);
				});
	            return plainMesh;			
			},
			backgroundImage:function(side, skin){

				var cnv = document.createElement('canvas');
					cnv.width = size.width; cnv.height = size.height;
				var ctx = cnv.getContext("2d");
					ctx.drawImage(bgImages[skin],0,0,cnv.width,cnv.height);		

					ctx.lineWidth = 4;
					ctx.strokeStyle = skin==='dark'?'#888888':'#bcbcbc';	

					var k = 470/bookSize.width;
					k = k>2.2?2.2:k;
					k = k<0.8?0.8:k;

					if(side==='left'){
						
						ctx.beginPath();						
						ctx.moveTo(size.width,0);
						ctx.lineTo(0,0);
						ctx.lineTo(0,size.height);
						ctx.lineTo(size.width,size.height);
						ctx.stroke();

						var hlpLeftImage = fn.hlpLeftImage(skin);
						ctx.drawImage(hlpLeftImage,size.width-hlpImageSize.width*k-20,size.height-hlpImageSize.height*k-20,hlpImageSize.width*k,hlpImageSize.height*k);

					}else{

						ctx.beginPath();
								
						ctx.moveTo(0,0);
						ctx.lineTo(size.width,0);
						ctx.lineTo(size.width,size.height);
						ctx.lineTo(0,size.height);	
						ctx.stroke();

						var hlpRightImage = fn.hlpRightImage(skin);
						ctx.drawImage(hlpRightImage,size.width-hlpImageSize.width*k-20,size.height-hlpImageSize.height*k-20,hlpImageSize.width*k,hlpImageSize.height*k);						

					};
					
				return cnv.toDataURL();
			},
			hlpLeftImage:function(skin){
				var
					lngHlpClickToOpen = _this.getLNG('hlpClickToOpen'),
					lngHlpUseMousewheel = _this.getLNG('hlpUseMousewheelGL');
				var cnv = document.createElement('canvas');
					cnv.width = hlpImageSize.width; cnv.height = hlpImageSize.height;
				var ctx = cnv.getContext("2d");
					ctx.fillStyle = skin==='dark'?'rgba(255,255,255,1)':'rgba(0,0,0,1)';
					ctx.font = "bold 20pt Arial";
					ctx.textAlign = 'right';
					ctx.fillText(lngHlpClickToOpen, hlpImageSize.width-10, hlpImageSize.height-155);
					ctx.fillStyle = skin==='dark'?'rgba(255,255,255,0.5)':'rgba(0,0,0,.5)';
					ctx.font = "18pt Arial";
					ctx.fillText(lngHlpUseMousewheel[0], hlpImageSize.width-10, hlpImageSize.height-110);
					ctx.fillText(lngHlpUseMousewheel[1], hlpImageSize.width-10, hlpImageSize.height-80);
				var arrowImage = SKIN.HELP_ARROW[skin],
					k=1.5;
					ctx.drawImage(arrowImage,cnv.width-arrowImage.width*k-10,cnv.height-arrowImage.height*k-20,arrowImage.width*k,arrowImage.height*k);
					return cnv;						
			},
			hlpRightImage:function(skin){
				var lngHlpToStart = _this.getLNG('toStart');
				var cnv = document.createElement('canvas');
					cnv.width = hlpImageSize.width; cnv.height = hlpImageSize.height;
				var ctx = cnv.getContext("2d");	
					ctx.fillStyle = skin==='dark'?'rgba(255,255,255,1)':'rgba(0,0,0,1)';
					ctx.font = "20pt Arial";
					ctx.textAlign = 'right';
					ctx.fillText(lngHlpToStart, hlpImageSize.width-10, hlpImageSize.height-10);	
					return cnv;											  
			}
		};

		var layerLeftLight = fn.PlainTextured({
			src:fn.backgroundImage('left','light'),
			side:'left', skin:'light',
			onReady:function(plainMesh){
				plainMesh.position.y = size.height*_this.CFG.ROTATE_CENTER_OFFSET_GL;
				plainMesh.position.z = -5;
				plainMesh.position.x = - size.width*0.5;
				_this.gGL.bookBase.add(plainMesh);			
			}
		});

		var layerRightLight = fn.PlainTextured({
			src:fn.backgroundImage('right','light'),
			side:'right', skin:'light',			
			onReady:function(plainMesh){
				plainMesh.position.y = size.height*_this.CFG.ROTATE_CENTER_OFFSET_GL;
				plainMesh.position.z = -5;
				plainMesh.position.x = size.width*0.5;
				_this.gGL.bookBase.add(plainMesh);			
			}
		});		

		var layerLeftDark = fn.PlainTextured({
			src:fn.backgroundImage('left','dark'),
			side:'left', skin:'dark',
			onReady:function(plainMesh){
				plainMesh.position.y = size.height*_this.CFG.ROTATE_CENTER_OFFSET_GL;
				plainMesh.position.z = -5;
				plainMesh.position.x = - size.width*0.5;
				_this.gGL.bookBase.add(plainMesh);			
			}
		});

		var layerRightDark = fn.PlainTextured({
			src:fn.backgroundImage('right','dark'),
			side:'right', skin:'dark',			
			onReady:function(plainMesh){
				plainMesh.position.y = size.height*_this.CFG.ROTATE_CENTER_OFFSET_GL;
				plainMesh.position.z = -5;
				plainMesh.position.x = size.width*0.5;
				_this.gGL.bookBase.add(plainMesh);			
			}
		});	
		this.gGL.helpLayers = {light:{left:layerLeftLight,right:layerRightLight},dark:{left:layerLeftDark,right:layerRightDark}};

	},
	correctStartPage:function(){
		var verify_range = function(num,min,max){
			if(num<min){num=min};
			if(num>max){num=max};
			return num;
		};
		this.START_PAGE = verify_range(this.START_PAGE,1,this.getTotalSheets()*2);
		this.CURRENT.spread = (this.START_PAGE - this.START_PAGE%2)/2;
		this.START_FROM_END = this.CURRENT.spread===this.getTotalSheets();
	},

	calculateSheets:function(){
		if(!this.ALLSHEETS || !this.ALLSHEETS.length){
			this.ALL_PAGES_MAP = [];
			var Sheets = [];
			if(!this.CFG.DIVIDE_IMAGES){
				var totalPages = this.ARR_PAGES_SRC.length;
			}else{
				if(this.ARR_PAGES_SRC.length<2){this.ARR_PAGES_SRC.push(this.CFG.PAGE_DEFAULT_COLOR);};
				var totalPages = this.ARR_PAGES_SRC.length*2;
				var arr = [];
				arr.push(this.ARR_PAGES_SRC[0]); 
				for(var i=1;i<this.ARR_PAGES_SRC.length;i++){
						arr.push(this.ARR_PAGES_SRC[i]);
						arr.push(this.ARR_PAGES_SRC[i]);
					};
				arr.push(this.ARR_PAGES_SRC[0]); 
				this.ARR_PAGES_SRC = arr;			
			};
			for(var i=0;i<totalPages;i++){
				var isImage = this.ARR_PAGES_SRC[i].indexOf('.jpg')>-1||this.ARR_PAGES_SRC[i].indexOf('.png')>-1 ||this.ARR_PAGES_SRC[i].indexOf('.gif')>-1;
				this.ALL_PAGES_MAP[i] = isImage?'image':'color';
			};
			var amountOfSheets = totalPages%2>0? (totalPages+1)/2 : totalPages/2;
			if(totalPages<amountOfSheets*2){this.ARR_PAGES_SRC.push(this.CFG.PAGE_DEFAULT_COLOR)};
			for(var i=0;i<this.ARR_PAGES_SRC.length;i+=2){
				Sheets.push({
				front:this.ARR_PAGES_SRC[i],
				back:this.ARR_PAGES_SRC[i+1],
				opened:0
				});
			};
			this.ALLSHEETS = Sheets;
		}	
	},
	createSelfShadow:function(side,size){
		var _this = this;		
		var canvas = document.createElement('canvas');
		canvas.width = size.width; 
		canvas.height = size.height;
		var ctx = canvas.getContext('2d');
		var lingrad = ctx.createLinearGradient(0,0,canvas.width,0);
			if(side=='front'){
			lingrad.addColorStop(0, 'rgba(0,0,0,0.15)');
			lingrad.addColorStop(0.30, 'rgba(0,0,0,0)');
		}else{
			lingrad.addColorStop(0.70, 'rgba(255,255,255,0)');
			lingrad.addColorStop(1, 'rgba(255,255,255,0.15)');
		};
		ctx.fillStyle = lingrad;
		ctx.fillRect(0,0,canvas.width, canvas.height);
		return canvas;
	},

	addCeshNames :function(rnd){
		for(var i=0;i<this.ARR_PAGES_SRC.length;i++){
			var imgSrc = this.ARR_PAGES_SRC[i];
			if(imgSrc.indexOf('.png')>-1 || imgSrc.indexOf('.jpg')>-1 || imgSrc.indexOf('.gif')>-1){
				this.ARR_PAGES_SRC[i] += ('?cash='+rnd);
			}
		};
	},

	getClonedData:function(){
		return $.extend(true,{},{arr:this.FRDATA}).arr;
	},

	getLNG:function(str){
		var s = this.LNG[str]||this.LNG[str.toLowerCase()];
		return s?s[this.CFG.LANGUAGE]:'unknown';	
	},

	findBookSizeByFirstImage:function(nextFoo){
		var _this=this;
		var firstImageSrc = '';
		for(var i=0;i<this.ARR_PAGES_SRC.length && firstImageSrc=='';i++){
			var imgSrc = this.ARR_PAGES_SRC[i];
			if(imgSrc.indexOf('.png')>-1 || imgSrc.indexOf('.jpg')>-1 || imgSrc.indexOf('.gif')>-1){
				firstImageSrc = imgSrc;
			}
		};
		if(firstImageSrc!=''){
			var image = new Image();
			image.onload = function(){
				_this.FIRST_IMAGE_SIZE = {w:this.width,h:this.height};
				nextFoo&&nextFoo();
			};
			image.src = firstImageSrc;
		}else{
			
		}
	},

	isNeedResizeReposInternal:function(){
		if(this.BOOK_INTERNAL){
			var $t = this.$TARGET;
			var newsize = {top:0,left:$t.offset().left,width:$t.width(),height:100};
			var oldsize = this.TARGETSIZE;
			this.TARGETSIZE = newsize;
			if(newsize.width!==oldsize.width){
				return 'resize';
			}else if(newsize.left!==oldsize.left){
				return 'reposition';
			}else{
				return false;
			}
		}else{
			return false;
		}
	},

	behavior:function(){

		var _this=this;
		this.startDrag = false;

		if(!this.HAS_BEHAVIORS){

		$(window).bind('resize.'+this.PRE_NAME,function(){
			
			_this.zoomOut();

			if(_this.TMR_RESIZE){clearTimeout(_this.TMR_RESIZE);_this.TMR_RESIZE=null};
			_this.TMR_RESIZE = setTimeout(function(){

				if(_this.BOOK_INTERNAL){
					if(!window[G_DATA].SUPERBOOK){
						var update = _this.isNeedResizeReposInternal();
						
						update && _this.restart(update);
					}
				}else{
					
					_this.restart();
				}

			},300);
		});

		$(document).bind('keyup.'+this.PRE_NAME,function(event){
			if(window[G_DATA].CURRENT === _this.PRE_NAME){
				if(event.keyCode===39){
					_this.gotoNext();
				}else if(event.keyCode===37){
					_this.gotoPrev();
				}
			}
		});

		this.HAS_BEHAVIORS=true;
		};	
		
		var zoomWaiterCanvas = {
			id:this.PRE_NAME+'canvasZoomWaiter',
			size:this.CFG.ZOOM_WAITER_SIZE,
			create:function(){
				_this.$gZoomWaiter = $('#'+_this.divNames.zoom_waiter).css({width:this.size,height:this.size});
				_this.$gZoomWaiter.html('<canvas id="'+this.id+'" width="'+this.size+'" height="'+this.size+'"></canvas>');				
				_this.gZoomWaiterContext = document.getElementById(this.id) && document.getElementById(this.id).getContext('2d');
			}
		};
		zoomWaiterCanvas.create();		
				
		var waiter = {
			size:this.CFG.ZOOM_WAITER_SIZE,
			radius:25,
			draw:function(gr){		
				var s = this.size;
				var r = this.radius;
				var drawCircle = function(ctx){
					ctx.clearRect(0,0,s,s);
					ctx.beginPath();
					ctx.lineWidth = 2;
					ctx.strokeStyle = '#c7c7c7';
					var center = s/2;
					var ang = (gr-90)*Math.PI/180;
					var ang1= -1.5707963267948966;
					ctx.arc(center,center,r,ang1,ang);
					ctx.stroke();					
				};
				_this.gZoomWaiterContext && drawCircle(_this.gZoomWaiterContext);
			},
			show:function(){
				var stageSize = _this.STAGE_BOUNDING_BOX;
				var m = _this.MOUSE.startDragCoord;
				_this.$gZoomWaiter.css({top:m.y-30-stageSize.top,left:m.x-30-stageSize.left}).show();
			},
			hide:function(){
				_this.$gZoomWaiter.hide();
			}
		};

		var waiting_zoom = function(stop){
			var i=0,tmr,p={time:20,start:5,pause:40},k=360/(p.time-p.start),started=false;
			(waiting_zoom = function(stop){		
			
			var fn = {
				stop_waiting:function(){
					if(started){
						started = false;
						waiter.hide();
						if(i){
							i=0; 
							tmr && clearTimeout(tmr);
							tmr = null;
						}
					}
				},
				verify:function(){
					if(stop){		
						this.stop_waiting();						
					}else if(i>p.time-1){
						this.stop_waiting();
						if(!_this.GLOSSY){
							_this.getSheetByIndex(_this.CURRENT.dragged_sheet).find('.wholeimage').show();
						};
						_this.ORDER_TO_ANIMATE = false;
						_this.stop_drag();
						_this.zoomIn(_this.MOUSE.startDragCoord);
					}else{
						started = true;
						i++;
						if(i===(p.start+1)){waiter.show()};
						if(i>p.start){waiter.draw(k*(i-p.start))};						
						tmr = setTimeout(function(){waiting_zoom();},p.pause);
					}
				}
			};
			fn.verify();
			})(stop);
		};
		
		var $bookStage = $('#'+_this.divNames.book_stage);		
		
		$bookStage.unbind();		
		
		$bookStage.swipeMePls({
			preventDefault: true,
			enableMouse: false,
			distance: 100,		
		    onSwipe:function(opt){              
			  if(opt.direction==='right' || opt.direction==='left'){
				var go = opt.direction==='right'?'gotoPrev':'gotoNext';
		        _this.clickSpeedIsOk()&&_this[go]();
			  }else if(opt.direction==='up' || opt.direction==='down'){
				 _this.slopeAnimateTo(opt.direction);
			  }
			}
		});
		
		$bookStage
		.hover(function(){
			_this.MOUSE.isOverStage = true;
		},function(){
			_this.MOUSE.isOverStage = false;
			if(!_this.ANIMATION_FLAG){
				if(_this.startDrag){
					_this.stop_drag_and_animate();
				}
			};
		});
		
		$bookStage
		.mousedown(function(e){	
			_this.LAST.mousemoved = false;
			if(!_this.ZOOM_MODE){
				if(_this.ANIMATION_FLAG || !_this.isMouseOverPage()){
					return false;
				}else{			
					waiting_zoom();
					_this.start_drag(e);
					return false;
				}
			}else{
				return false;	
			}
		});
		
		$bookStage
		.mouseup(function(){
			if(!_this.ZOOM_MODE){
				waiting_zoom('stop');
				var direction = _this.CURRENT.hoverside==='front'?'next':'back';
				if(_this.ANIMATION_FLAG){
					if(!_this.LAST.mousemoved){
						_this.ORDER_TO_ANIMATE = direction;			
					};
					return false;
				}else{				
					
					if(_this.startDrag){
						_this.stop_drag_and_animate();
					};
					
					if(_this.GLOSSY && _this.GL_LINK_TO_START){
						_this.gotoSpread(0);
					};
				}
			}else{
				return false;
			}			
		});

		$bookStage
		.mousemove(function(e){

			_this.MOUSE.oldCoord = _this.MOUSE.lastCoord;
			_this.MOUSE.lastCoord = {x:e.pageX,y:e.pageY};
			_this.calculateSideAndFrame(_this.MOUSE.lastCoord);
			_this.LAST.mousemoved = true;

			!_this.ZOOM_MODE && waiting_zoom('stop');
			if(_this.ANIMATION_FLAG){ return false;};
				
			if(_this.startDrag){

				var mouseSpeedX = Math.abs(_this.MOUSE.oldCoord.x-_this.MOUSE.lastCoord.x);
				if(mouseSpeedX > _this.CFG.MAX_MOUSE_SPEED_X){
					_this.stop_drag_and_animate();
					return;
				};

				var deltaX = Math.abs(_this.MOUSE.startDragCoord.x - _this.MOUSE.lastCoord.x);
				var drag_persent = Math.round(deltaX/_this.CFG.DRAG_PARAM.px_per_persent);
				var goto_frame = drag_persent + _this.START_DRAG_FRAME || 0;
				if(goto_frame > _this.CFG.MAX_FRAME_DRAGGABLE){
					_this.stop_drag_and_animate();
					return;
				};

				_this.drag_sheet(goto_frame);				
			
			}

		});
		
		$bookStage.mousewheel &&
		$bookStage.mousewheel(function(e,d){
			if(_this.ANIMATION_FLAG || _this.startDrag){
				return false;
			}else{
				var go = d>0?'gotoPrev':'gotoNext';					
				if(_this.clickSpeedIsOk()){ _this[go](); };
				return false;
			}						
		});
	
	},
	clickSpeedIsOk:function(){
		var newTime = new Date().getTime();	
		if(!this.G_TMR_SPEED_CLICK){
			this.G_TMR_SPEED_CLICK = newTime;
			return true;
		}else{
			var oldtime = this.G_TMR_SPEED_CLICK;
			var delta = newTime-oldtime;			
			if(delta>1100){ 
				this.G_TMR_SPEED_CLICK = newTime;
				return true;					
			}else{
				return false;
			}
		}
	},

	start_drag:function(e){
		this.MOUSE.startDragCoord = {x:e.pageX,y:e.pageY};
		this.START_DRAG_FRAME = this.CURRENT.frame;
		this.startDrag = this.CURRENT.hoverside;
		var s = this.CURRENT.spread;
		this.CURRENT.dragged_sheet = this.startDrag=='front'?s:s-1;
	},

	stop_drag_and_animate:function(){
		var go = this.startDrag=='front'?'gotoNext':'gotoPrev';
		this.CURRENT.dragged_sheet = -1;
		this.startDrag = false;
		this[go]();			
	},

	stop_drag:function(){
		this.CURRENT.dragged_sheet = -1;
		this.startDrag = false;
	},

	changeSpreadTitle:function(){

		var cs = this.CURRENT.spread;
		var total = this.ARR_PAGES_TITLE.length;
		var titles = {left:"",right:""};
		var spreadTitle = '';
		
		if(cs===0){
			var first_page = true;
			titles.right = this.ARR_PAGES_TITLE[0]||'';
		}else if(cs*2-1 == total){
			var last_page = true;		
			titles.left = this.ARR_PAGES_TITLE[cs*2-1]||'';
		}else{
			titles.left = this.ARR_PAGES_TITLE[cs*2-1]||'';
			titles.right = this.ARR_PAGES_TITLE[cs*2]||'';		
		};
			
        if(first_page){
			spreadTitle = '<p>'+titles.right+'</p>';
		}else if(last_page){
			spreadTitle = '<p>'+titles.left+'</p>';
		}else{
				var strLeft = this.getLNG('left');
				var strRight = this.getLNG('right');
				if(titles.left && titles.right){
					spreadTitle = [
						'<p><span>'+strLeft+':</span> '+titles.left+'<br>',
						'<span>'+strRight+':</span> '+titles.right+'</p>'
						].join('');
				}else if(titles.left){		
					spreadTitle = '<p><span>'+strLeft+':</span> '+titles.left+'</p>';
				}else if(titles.right){		
					spreadTitle = '<p><span>'+strRight+':</span> '+titles.right+'</p>';
				};		
		};
			
		this.CURRENT.spreadTitle = spreadTitle;
		this.$gSpreadTitle.html(spreadTitle);
		
	},	

	calculateBounds:function(){
		
		var 
			_this=this,
			p = _this.CFG.ICONS_PANEL,
			iconsPanelHeight = _this.getIconsPanelHeight(),
			s = _this.STAGE,
			d = !_this.$TARGET?_this.WINSIZE:_this.TARGETSIZE,
			targetPos = !_this.$TARGET?{top:0,left:0}:{top:_this.$TARGET.offset().top,left:_this.$TARGET.offset().left},
			pasp_height = _this.CFG.PASPARTU_BEHAVIORS_PARAM.height * _this.GSCALE,
			icons_panel_offset = pasp_height*p.overlay_pr,
			top = Math.round((d.height - ( s.height + iconsPanelHeight - icons_panel_offset ))*0.5);	

		top = !_this.BOOK_INTERNAL?top+$(document).scrollTop():0;

		this.STAGE_OFFSET = offset = {
			left:Math.round(d.width*0.5-s.width*0.5)+targetPos.left,
			top:top+targetPos.top
		};

		this.STAGE_CENTER = {
			top:Math.round(offset.top + s.height*0.5),
			left:Math.round( offset.left + s.width*0.5 )
		};
		
		this.STAGE_BOUNDING_BOX = {
			width:s.width,height:s.height,
			top:offset.top,left:offset.left
		};			
		
		var iconsPanelRealWidth = this.$gIconsPanel.width();

		this.ICONS_PANEL_BOUNDS = ipb = {
			width:iconsPanelRealWidth,
			height:this.$gIconsPanel.height(),
			left:d.width*0.5-iconsPanelRealWidth*0.5 + targetPos.left,
			top:offset.top + _this.STAGE.height - icons_panel_offset
		};
		
		this.MAX_BOUNDS = {
			width:Math.max(_this.STAGE_BOUNDING_BOX.width,ipb.width),
			height:Math.round(ipb.top + ipb.height -_this.STAGE_BOUNDING_BOX.top),
			top:_this.STAGE_BOUNDING_BOX.top,
			left:Math.min(_this.STAGE_BOUNDING_BOX.left,ipb.left)
		};	

	},

	stageToCenter:function(){

		var _this=this;
		if(!this.STAGE){return;}
		if(this.tmrToCenter){clearTimeout(this.tmrToCenter);}
		this.$gStage.hide();

		this.tmrToCenter = setTimeout(function(){
			_this.calculateBounds();
			_this.$gStage.css({top:_this.STAGE_OFFSET.top,left:_this.STAGE_OFFSET.left}).show();
			_this.bgLoaderShow(false);

			var 
				ipb = _this.ICONS_PANEL_BOUNDS,
				loader = {width:_this.$gBookLoader.width(),height:_this.$gBookLoader.height()},
				saveMenu = {width:_this.$gSaveMenu.width(),height:_this.$gSaveMenu.height()},
				stage = _this.STAGE;

			_this.$gIconsPanel.css({top:ipb.top,left:ipb.left,visibility:'visible'});
			_this.$gBookLoader.css({top:stage.height*0.5-loader.height*0.5,left:stage.width*0.5-loader.width*0.5});
			_this.$gSaveMenu.css({top:stage.height*0.5-saveMenu.height*0.5+_this.STAGE_OFFSET.top,left:stage.width*0.5-saveMenu.width*0.5+_this.STAGE_OFFSET.left});
			_this.correctTargetHeight();

		},100);

	},

	correctTargetHeight:function(){
		if(this.BOOK_INTERNAL){
			this.$TARGET.css({height:this.MAX_BOUNDS.height});
			this.$TARGET.attr('onebook3d',this.PRE_NAME);
		};
		window[G_DATA].buildNextBook();
	},

	drag_sheet:function(frame){

		var		frame = frame<100?frame:100,
				sheet = this.CURRENT.dragged_sheet;

		if(this.GLOSSY){
			var 
				gl_sheet = this.getSheetByIndex(sheet),
				gl_edges = this.getEdgesFormSheet(sheet),
				forward = this.startDrag=='front'?1:0,
				SHEET_PARAM = {gl_sheet:gl_sheet,gl_edges:gl_edges,forward:forward};			
		}else{
			var 
				$sheet = this.getSheetByIndex(sheet),
				$edges = this.getEdgesFormSheet(sheet),
				forward = this.startDrag=='front'?1:0,
				SHEET_PARAM = {sheet:sheet,$edges:$edges,forward:forward};
			
			if(this.SHEET_DISPLAYED===null){
				this.SHEET_DISPLAYED = sheet;
				$sheet.find('.all_edges').show();
				$sheet.find('.wholeimage').hide();
			}
		};

		this.moveSheetTo(frame,SHEET_PARAM);

	},
	
	moveSheetTo:function(frame,param,DBG_NAME){
		var _this = this,
			frame = frame||0,
			sheet = param.sheet,
			forward = param.forward,
			edgeOffset = 2, 
			edges3d = _this.GLOSSY?this.FRAMES_GL_SCALED[forward][frame].edges3d:this.FRAMES[forward][frame].edges3d;

		if(!this.GLOSSY){
			var 
				$hlpLeft = this.$gHelpLayer.find('.hlpLeftSide'),
				$hlpRight = this.$gHelpLayer.find('.hlpRightSide'),
				totalSheets = this.getTotalSheets();

			if(_this.startDrag && !sheet && forward){
				$hlpLeft.css({opacity:(100-frame)/100});
			}else if(_this.startDrag && sheet===totalSheets-1 && !forward){				
				$hlpRight.css({opacity:(100-frame)/100});	
			};
		}else{
			var glHlp = this.getHlpLayerGL(); 		
			var totalSheets = this.getTotalSheets();
			if(glHlp.left&&glHlp.right){
				if(_this.startDrag && !sheet && forward){
					glHlp.left.material.opacity = (100-frame)/100;
				}else if(_this.startDrag && sheet===totalSheets-1 && !forward){	
					glHlp.right.material.opacity = (100-frame)/100;
				};					
			}		
		};	

		if(this.GLOSSY){

			var gl_edges = param.gl_edges;
			
			this.CURRENT.frame = frame;
			for(var m=0;m<edges3d.length;m++){
				var width = edges3d[m].width+edgeOffset;
				gl_edges[m].width = width;
				gl_edges[m].position.x = edges3d[m].x;
				gl_edges[m].position.z = -edges3d[m].z;
				gl_edges[m].rotation.y = Math.PI*edges3d[m].angle/180;
			};

			this.LAST.moved = {sheet:sheet,gl_edges:gl_edges,forward:forward};
			this.startRender();

		}else{
			
			var $edges = param.$edges;
			if($edges && $edges.size()){
				
				this.CURRENT.frame = frame;
				for(var m=0;m<edges3d.length;m++){
					var width = edges3d[m].width+edgeOffset;
					$edges.eq(m).css({
						width:width+'px',
						'-webkit-transform':'translate3d('+edges3d[m].x+'px,0px,'+(-edges3d[m].z)+'px) rotateY('+edges3d[m].angle+'deg)',
						'-moz-transform':'translate3d('+edges3d[m].x+'px,0px,'+(-edges3d[m].z)+'px) rotateY('+edges3d[m].angle+'deg)',
						'-ms-transform':'translate3d('+edges3d[m].x+'px,0px,'+(-edges3d[m].z)+'px) rotateY('+edges3d[m].angle+'deg)',
						'transform':'translate3d('+edges3d[m].x+'px,0px,'+(-edges3d[m].z)+'px) rotateY('+edges3d[m].angle+'deg)'
					});
				};
				this.LAST.moved = {sheet:sheet,$edges:$edges,forward:forward};
			}
		}
	},
	calculateSideAndFrame:function(mouse_coord){	
		var _this=this;	
		try{
		var deltaY = mouse_coord.y - this.STAGE_CENTER.top;
		var deltaYabs = Math.abs(deltaY);
		var deltaX = mouse_coord.x - this.STAGE_CENTER.left;		
		var paspartuWidth = this.STAGE_HALF.width - this.CFG.BOOK_SIZE.width;
		var widthSensitive = this.CFG.BOOK_SIZE.width + Math.floor(paspartuWidth*0.8);
		var widthUnsensitive = this.STAGE_HALF.width - widthSensitive;
		var kWidth = widthUnsensitive/100;
		var absDeltaX = Math.abs(deltaX);
		var mouse_over = {
				x:Math.round(absDeltaX/this.CFG.BOOK_SIZE.width*100),
				y:Math.round(100 - deltaYabs/this.STAGE_HALF.height*100)
			};
		if(deltaY<0){ mouse_over.y = mouse_over.y > 50?100:mouse_over.y*2; };
		if(absDeltaX>widthSensitive){mouse_over.x = Math.floor((this.STAGE_HALF.width-(absDeltaX-1))/kWidth);};
		if(mouse_over.x > 100){mouse_over.x = 100};
		var strong = Math.round((mouse_over.x*0.8+20)/100*mouse_over.y);		
		this.CURRENT.hoverside = deltaX<0?'back':'front';
		this.CURRENT.hoverframe = Math.round(this.CFG.SHEETS_SENSIVITY/100*strong);		
		this.LAST.sheet = this.CURRENT.sheet;
		this.CURRENT.sheet = this.CURRENT.hoverside === 'front'?this.CURRENT.spread:this.CURRENT.spread-1;

			if(this.GLOSSY){
				if(this.CURRENT.sheet == this.ALLSHEETS.length){
					if(deltaX > this.CFG.BOOK_SIZE.width*0.75 && deltaY > this.STAGE_HALF.height*0.5){
						_this.$gStage.addClass('pointer');
						_this.GL_LINK_TO_START = true;
					}else{
						_this.GL_LINK_TO_START = false;
						_this.$gStage.removeClass('pointer');
					}
				} 
			}
		
		}catch(e){
			
		}
	},
	getEdgesFormSheet:function(sheetIndex){
		if(this.GLOSSY){
			var gl_sheet = this.GL_ARR_SHEETS[sheetIndex];
			if(gl_sheet && gl_sheet.mesh){
				gl_sheet.mesh.position.z = 1*this.CFG.GL_DEPTH_STEP;
				return gl_sheet.mesh.children;
			}else{
				return false;
			}
		}else{
			var $sheet = this.$ARR_SHEETS[sheetIndex];
			if($sheet && $sheet.size()){
				$sheet.css({zIndex:20000});	
				return $sheet.find('div');
			}else{
				return false;
			}
		}
	},	
	getSheetByIndex:function(sheetIndex){
		return this.GLOSSY? this.GL_ARR_SHEETS[sheetIndex] : this.$ARR_SHEETS[sheetIndex];
	},	
	isMouseOverPage:function(){
		if(!this.MOUSE.isOverStage){
			return false;
		};		
		var isFirstPage = this.CURRENT.spread == 0;
		var isLastPage = this.CURRENT.spread == this.getTotalSheets();
		if(!isFirstPage && !isLastPage){
			return true;
		}else if(isFirstPage && this.CURRENT.hoverside=='front'){
			return true;
		}else if(isLastPage && this.CURRENT.hoverside=='back'){
			return true;
		}else{
			return false;
		}
	},
	isDirectionCorrect:function(direction){
		var dirNext = direction==='next'?1:0,
		maxspreads = this.ALLSHEETS.length;
		if(this.CURRENT.spread===0 && !dirNext){
			return false;
		}else if(this.CURRENT.spread===maxspreads && dirNext){
			return false;
		}else{
			return true;
		}
	},
	startOffsetDepth:function(forward,sheet){
		var _this = this;
		if(this.GLOSSY){
			var gl_sheet = this.getSheetByIndex(sheet),
				gl_sorted = this.getSheetsSortedBySide();
			if(forward){
				gl_sorted.sidesRight[0].mesh.position.z = 1*_this.CFG.GL_DEPTH_STEP;
				$.each(gl_sorted.sidesRight,function(i){
					if(i){
						this.mesh.position.z = ((i-1)*-1*_this.CFG.GL_DEPTH_STEP);
					}
				});	
			}else{
				 var 
				 	size = gl_sorted.sidesLeft.length,			
				 	count = 1;		
				 if(size){
				 	for(var i=size;i>0;i--){
				 		gl_sorted.sidesLeft[i-1].mesh.position.z = count*_this.CFG.GL_DEPTH_STEP;	
				 		count-=1;
				 	}
				 }
			}							
		}else{
			var $sheet = this.getSheetByIndex(sheet),
				$sidesLeft = this.$gContainter.find('.side-left'),
				$sidesRight = this.$gContainter.find('.side-right');
			if(forward){
				$sidesRight.eq(0).css({
					'-webkit-transform':'translate3d(0px,0px,1px)',
					'-moz-transform':'translate3d(0px,0px,1px)',
					'-ms-transform':'translate3d(0px,0px,1px)',					
					'transform':'translate3d(0px,0px,1px)'
				});			
				$sidesRight.each(function(i){
					if(i){
						$(this).css({							
							'-webkit-transform':'translate3d(0px,0px,'+((i-1)*-1)+'px)',
							'-moz-transform':'translate3d(0px,0px,'+((i-1)*-1)+'px)',
							'-ms-transform':'translate3d(0px,0px,'+((i-1)*-1)+'px)',
							'transform':'translate3d(0px,0px,'+((i-1)*-1)+'px)'
						});
					};
				});			
			}else{
				var 
					size = $sidesLeft.size(),			
					count = 1;		
				if(size){
					for(var i=size;i>0;i--){
						$sidesLeft.eq(i-1).css({
							'-webkit-transform':'translate3d(0px,0px,'+count+'px)',
							'-moz-transform':'translate3d(0px,0px,'+count+'px)',
							'-ms-transform':'translate3d(0px,0px,'+count+'px)',							
							'transform':'translate3d(0px,0px,'+count+'px)'	
						});					
						count-=1;
					}
				}
			}				
		};

	},
	startRender:function(){
		if(this.GLOSSY){
			this.renderStartedAt = new Date();  	
		}
	},
	renderGL:function(){
		var _this=this;
		 requestAnimationFrame( function(){
				var 
					now = new Date(),
					time  = now.getTime() - (_this.renderStartedAt.getTime()||0);
				if(time<3000){
					_this.gGL.renderer.render(_this.gGL.scene,_this.gGL.camera);
				}
		 	_this.renderGL();	
		 } );
	},
	getSheetsSortedBySide:function(){
		if(this.GLOSSY){
		var 
			arr = this.GL_ARR_SHEETS,
			sidesLeft = [],
			sidesRight = [];
			for (var i in arr){
				if(arr.hasOwnProperty(i)){
					if(arr[i].sideClass === 'sideLeft'){
						sidesLeft.push(arr[i]);	
					}else{
						sidesRight.push(arr[i]);	
					}						
				}
			};
			return {sidesLeft:sidesLeft,sidesRight:sidesRight};
		}
	},
	endOffsetDepth:function(forward,sheet){
		var _this = this;

		if(this.GLOSSY){

			var gl_sheet = this.getSheetByIndex(sheet),
				gl_sorted = this.getSheetsSortedBySide();

			if(this.GL_ARR_SHEETS.length){
				if(forward){
					var size = gl_sorted.sidesLeft.length;
					if(size){
						for(var i=size;i>0;i--){
							gl_sorted.sidesLeft[size-i].mesh.position.z = i*-1*_this.CFG.GL_DEPTH_STEP; 
						};					
					};
					gl_sorted.sidesRight[0].mesh.position.z = 0; 	
				}else{
					var
						size = gl_sorted.sidesRight.length,
						count = size*-1;
					if(size){
						for(var i=size;i>0;i--){
							gl_sorted.sidesRight[i-1].mesh.position.z = count * _this.CFG.GL_DEPTH_STEP;
							count+=1;
						}
					};
					
					gl_sorted.sidesLeft[gl_sorted.sidesLeft.length-1].mesh.position.z = 0;

				}
			}

		}else{
		
		var
			$sheet = this.getSheetByIndex(sheet),
			$sidesLeft = this.$gContainter.find('.side-left'),
			$sidesRight = this.$gContainter.find('.side-right');

			if(forward){
				var size = $sidesLeft.size();
				if(size){
					for(var i=size;i>0;i--){					
						$sidesLeft.eq(size-i).css({
							'-webkit-transform':'translate3d(0px,0px,'+(i*-1)+'px)',	
							'-moz-transform':'translate3d(0px,0px,'+(i*-1)+'px)',	
							'-ms-transform':'translate3d(0px,0px,'+(i*-1)+'px)',								
							'transform':'translate3d(0px,0px,'+(i*-1)+'px)'	
						});
					};
				};
				$sidesRight.eq(0).css({
					'-webkit-transform':'translate3d(0px,0px,0px)',
					'-moz-transform':'translate3d(0px,0px,0px)',
					'-ms-transform':'translate3d(0px,0px,0px)',					
					'transform':'translate3d(0px,0px,0px)'
				});
			}else{
				var
					size = $sidesRight.size(),
					count = size*-1;			
				if(size){
					for(var i=size;i>0;i--){
						$sidesRight.eq(i-1).css({
							'-webkit-transform':'translate3d(0px,0px,'+count+'px)',
							'-moz-transform':'translate3d(0px,0px,'+count+'px)',	
							'-ms-transform':'translate3d(0px,0px,'+count+'px)',							
							'transform':'translate3d(0px,0px,'+count+'px)'	
						});
						count+=1;
					}
				};			
				$sidesLeft.last().css({
					'-webkit-transform':'translate3d(0px,0px,0px)',
					'-moz-transform':'translate3d(0px,0px,0px)',
					'-ms-transform':'translate3d(0px,0px,0px)',					
					'transform':'translate3d(0px,0px,0px)'	
				});
			}			
		}	

	},

	animateSheet:function(direction){

		if(!this.isDirectionCorrect(direction)){return;};

		var 
			_this=this,
			actualSheet = direction==='next'?this.CURRENT.spread:this.CURRENT.spread-1,
			forward = direction==='next'?1:0;

		var calculate = function(){			
			var frame = currenframe+1;
			var restframes = 100-frame;
			var r = restframes%step;
			restframes = r?restframes-r:restframes;
			var startframe = 100 - restframes;			
			return startframe;
		};

		if(_this.GLOSSY){
			var gl_sheet = this.getSheetByIndex(actualSheet);	
		}else{
			var $sheet = this.getSheetByIndex(actualSheet);	
		};

		this.SHEET_DISPLAYED = actualSheet;
		this.ANIMATION_FLAG = true;
		
		var step = 4,
			currenframe = this.CURRENT.frame, 
			sheet = forward?this.CURRENT.spread:this.CURRENT.spread-1,			
			speed = this.ANIMATION.SPEED,
			totalSheets = this.getTotalSheets();

		this.startOffsetDepth(forward,sheet);
		
		var frame = calculate();

		if(_this.GLOSSY){
			var gl_edges = _this.getEdgesFormSheet(sheet);
			var SHEET_PARAM = {sheet:sheet,gl_edges:gl_edges,forward:forward};
		}else{
			var $edges = _this.getEdgesFormSheet(sheet);
			var SHEET_PARAM = {sheet:sheet,$edges:$edges,forward:forward};
		};
		
		var 
			fadeOutHelpLeft = this.CURRENT.spread===0 & forward,
			fadeInHelpLeft = this.CURRENT.spread===1 & !forward,
			fadeOutHelpRight = this.CURRENT.spread===totalSheets & !forward,
			fadeInHelpRight = this.CURRENT.spread===(totalSheets-1) & forward;

		if(!_this.GLOSSY){
			var $hlpLeft = this.$gHelpLayer.find('.hlpLeftSide');
			var $hlpRight = this.$gHelpLayer.find('.hlpRightSide');
		}else{
			var glHlp = this.getHlpLayerGL(); 
		};

		var animate = function(){
			if(frame<101){	
				
				_this.moveSheetTo(frame,SHEET_PARAM);

				if(!_this.GLOSSY){
					if(fadeOutHelpLeft){$hlpLeft.css({opacity:(100-frame)/100})};
					if(fadeInHelpLeft){$hlpLeft.css({opacity:frame/100})};	
					if(fadeOutHelpRight){$hlpRight.css({opacity:(100-frame)/100})};
					if(fadeInHelpRight){$hlpRight.css({opacity:frame/100})};						
				}else{

					if(glHlp.left&&glHlp.right){

						if(fadeOutHelpLeft){ glHlp.left.material.opacity = (100-frame)/100 ; };
						if(fadeInHelpLeft){ glHlp.left.material.opacity = frame/100; };	
						if(fadeOutHelpRight){ glHlp.right.material.opacity = (100-frame)/100;};
						if(fadeInHelpRight){ glHlp.right.material.opacity = frame/100; };
					} 

				};

				setTimeout(function(){
					frame+=step;
					animate();
					},speed);
			}else{
				_this.endOffsetDepth(forward,sheet);	
				_this.switchCurrents(SHEET_PARAM);
			}
		};

		if(this.GLOSSY){
			animate();
		}else{
			$sheet.find('.all_edges').fadeIn('fast',function(){
				$sheet.find('.wholeimage').hide();	
				animate();
			});
		}

	},
	switchCurrents:function(SHEET_PARAM){
		 
		var 
			_this = this,
			sheet = SHEET_PARAM.sheet,
			forward = SHEET_PARAM.forward,			
			zIndex = forward?(sheet+1)*10:((this.ALLSHEETS.length-sheet))*10,
			prevSpread = this.CURRENT.spread;
			
		this.LAST.forward = forward;
		this.LAST.moved.forward = forward?0:1;
		
		if(_this.GLOSSY){
			var 
				gr = !forward?0:180,
				gl_sheet = this.getSheetByIndex(sheet);

			gl_sheet.sideClass = gl_sheet.sideClass==='sideLeft'?'sideRight':'sideLeft';

		}else{
			var 
				gr = !forward?0:180,
				$sheet = this.getSheetByIndex(sheet),
				$wholeimage = $sheet.find('.wholeimage'),
				$all_edges = $sheet.find('.all_edges');
		
			$sheet.css({zIndex:zIndex}).toggleClass('side-right').toggleClass('side-left');		
			$wholeimage.css({'transform':'rotateY('+gr+'deg)','-webkit-transform':'rotateY('+gr+'deg)','-moz-transform':'rotateY('+gr+'deg)','-ms-transform':'rotateY('+gr+'deg)'});
		};
						
		this.CURRENT.spread += forward?1:-1;
		this.CURRENT.frame = 0;
		this.START_PAGE = _this.CURRENT.spread*2?_this.CURRENT.spread*2:1;
				
		this.buildAndPreloadSheets();
		this.changeSpreadTitle();
		this.pageNumbersChange();

		this.bookLoaderShow(!this.didSpreadLoaded(this.CURRENT.spread));		

		var cs = this.CURRENT.spread;
		var total = this.ARR_PAGES_SRC.length;
		if(cs===0){
			var first_page = true;
		}else if(cs*2 === total){
			var last_page = true;		
		};
		
		// if(this.GLOSSY){
		// 	if(last_page || first_page){
		// 		this.$gHelpLayer.removeClass('noPointerEvents');
		// 	}else{
		// 		this.$gHelpLayer.addClass('noPointerEvents');
		// 	};
		// };

		var orderDirection = this.ORDER_TO_ANIMATE;		
		
		if(orderDirection && this.isDirectionCorrect(orderDirection)){	
		
			if(_this.GLOSSY){
				_this.ORDER_TO_ANIMATE = false;
				_this.animateSheet(orderDirection);	
			}else{
				$wholeimage.fadeIn('fast',function(){
					_this.SHEET_DISPLAYED = null;
					$all_edges.hide();
					_this.ORDER_TO_ANIMATE = false;
					_this.animateSheet(orderDirection);	
				});
			}				


		}else{

			if(_this.GLOSSY){

					_this.ORDER_TO_ANIMATE = false;
					_this.ANIMATION_FLAG = false;
					var isLastSpread = _this.CURRENT.spread===_this.getTotalSheets();
					var btnToggleBook = _this.$G_ARR_BUTTONS['togglebook'];	
					if(isLastSpread){
						_this.START_FROM_END = true;
						btnToggleBook && btnToggleBook.update();
					}else if(_this.CURRENT.spread===0){
						_this.START_FROM_END = false;
						btnToggleBook && btnToggleBook.update();
					}								
			}else{
				$wholeimage.fadeIn('fast',function(){
					_this.SHEET_DISPLAYED = null;
					$all_edges.hide();			
					_this.ORDER_TO_ANIMATE = false;
					_this.ANIMATION_FLAG = false;
					var isLastSpread = _this.CURRENT.spread===_this.getTotalSheets();
					var btnToggleBook = _this.$G_ARR_BUTTONS['togglebook'];
					if(isLastSpread){
						_this.START_FROM_END = true;
						btnToggleBook && btnToggleBook.update();
					}else if(_this.CURRENT.spread===0){
						_this.START_FROM_END = false;
						btnToggleBook && btnToggleBook.update();
					}
				});	
			}

		};


	},

	didSpreadLoaded:function(spread){
		if(this.GLOSSY){
			var gl_pageLeft = spread>0?this.GL_ARR_SHEETS[spread-1]:false; 
			var gl_pageRight = spread<this.ALLSHEETS.length?this.GL_ARR_SHEETS[spread]:false; 	
			if(gl_pageLeft){
				var pageLeftWasLoaded = gl_pageLeft['backFilled'];
				if(!pageLeftWasLoaded){return false;}
			};
			if(gl_pageRight){
				var pageRightWasLoaded = gl_pageRight['frontFilled'];
				if(!pageRightWasLoaded){return false;}
			};
			return true;
		}else{
			
			var $pageLeft = spread>0?this.$gContainter.find('.sheet'+(spread-1)):false; 
			var $pageRight = spread<this.ALLSHEETS.length?this.$gContainter.find('.sheet'+spread):false; 
			if($pageLeft){
				var pageLeftWasLoaded = $pageLeft.hasClass('back-filled')?true:false;
				if(!pageLeftWasLoaded){return false;}
			};
			if($pageRight){
				var pageRightWasLoaded = $pageRight.hasClass('front-filled')?true:false;
				if(!pageRightWasLoaded){return false;}
			};
			return true;
		}
	},



	build_background:function(){
		var bookBgName = this.divNames.background;
		var $bg = $('#'+bookBgName);
		$bg.size() && $bg.remove();
		var light = !this.DARK_MODE?'class="light"':'';		
		var tmpStage = [
			'<div style="opacity:1" id="'+bookBgName+'" '+light+' >',
			'<div style="text-align:center;color:gray;width:100%;height:100%;display:table;">',
			'<span style="vertical-align:middle;display:table-cell;">',
			'<div style="margin:auto;width:90px;height:90px;-moz-border-radius:15px;border-radius:15px;opacity:0.5;',
			'background:white url('+this.AJAX_LOADER+') center no-repeat;"></div>',
			'</span></div></div>'			
		].join('');
		$('body').append(tmpStage);	
		this.$gBookBackground = $('#'+bookBgName);			
		this.$gBookBackground.mousewheel && this.$gBookBackground.mousewheel(function(){return false;});
		this.bgLoaderShow(true);
	},

	buildSaveMenuLayer:function(){
		
		this.$gSaveMenu&&this.$gSaveMenu.remove();

		var 
			_this=this,
			className = this.divNames.save_menu,
			widthMin = 230,
			width = this.STAGE.width*0.5,
			width = width<widthMin?widthMin:width,
			sizeClass = width<300?'class="middleSize"':'',
			zIndex = this.CFG.ZINDEX.bookSaveMenu;
		
		var backgroundImage = function(){
			var cnv = document.createElement('canvas');
				cnv.width = 2; cnv.height = 2;
			var ctx = cnv.getContext("2d");
				ctx.fillStyle = 'rgba(80,80,80,.8)';
				ctx.fillRect(0,0,2,2);
			return cnv.toDataURL();
		};


		var menuHtml = [
			'<div class="'+className+'" ',
			'style="display:none;position:absolute;top:0px;left:0px;width:'+width+'px;z-index:'+zIndex+';',
			'text-align:center;background:url('+backgroundImage()+');-moz-border-radius:7px;border-radius:7px;">',
			'<h1 style="margin:20px 20px 10px 20px;">'+_this.getLNG('askSaveImage')+'</h1>',
			'<p style="margin:0px 20px 20px 20px;">'+_this.getLNG('askSaveLinks')+'</p>',			
			'</div>'
		].join('');

		this.$gSaveMenu = $(menuHtml);
		$('body').append(this.$gSaveMenu);

	},

	buildHelpLayer:function(){
		var 
			_this=this,
			book = this.CFG.BOOK_SIZE,
			lngHlpGoToHomelink = this.getLNG('hlpGoToHomelink'),
			lngHlpClickToOpen = this.getLNG('hlpClickToOpen'),
			lngHlpUseMousewheel = this.getLNG('hlpUseMousewheel'),
			lngHlpToStart = this.getLNG('toStart'),
			sizeClass = book.width<150?'class="middleSize"':'',		 
			sizeMini = book.height<130,
			skinMode = this.DARK_MODE?'dark':'light',
			SKIN = window[G_DATA].SKIN;

		var hlpStart = [];
		hlpStart.push('<p '+sizeClass+'>');
		if(!sizeMini && !this.CFG.FV){
			hlpStart.push('<a style="display:table;margin:0px 0px 0px auto;" href="'+this.CFG.HOME_LINK+'" target="_blank" title="'+lngHlpGoToHomelink+'"><span name="home_link" style="background:url('+SKIN.HOME_LINK[skinMode].toDataURL()+') no-repeat center;"></span></a>')
		};
		hlpStart.push('<span name="click_to_open"><a href="#">'+lngHlpClickToOpen+'</a></span>');
		hlpStart.push('<span name="use_mousewheel">'+lngHlpUseMousewheel+'</span>');
		if(!sizeMini){hlpStart.push('<span name="help_arrow" style="background:url('+SKIN.HELP_ARROW[skinMode].toDataURL()+') no-repeat center;"></span>')};
		hlpStart.push('</p>');
		hlpStart = hlpStart.join('');

		var hlpEnd = [];
		hlpEnd.push('<p '+sizeClass+'>');
		hlpEnd.push('<span name="goto_start"><a href="#">'+lngHlpToStart+'</a></span>');
		hlpEnd.push('</p>');
		hlpEnd = hlpEnd.join('');		
		
		var leftOpacity = this.START_PAGE<2?1:0;
		var rightOpacity = this.START_FROM_END?1:0;

		var bgImage  = this.getHlpLayerBgImage();

		var helpHTML = [
			'<div style="margin-top:1px;display:table;width:100%;height:100%;">',
			'<div class="hlpLeftSide" style="opacity:'+leftOpacity+';',
				'background:url(' + bgImage.toDataURL() + ');',
				'display:table-cell;height:100%;width:50%;text-align:right;vertical-align:bottom;">'+hlpStart+'</div>',
			'<div class="hlpRightSide" style="opacity:'+rightOpacity+';',
				'background:url(' + bgImage.toDataURL() + ');',
				'display:table-cell;height:100%;width:50%;text-align:right;vertical-align:bottom;">'+hlpEnd+'</div>',
			'</div>'
		].join('');

		var light = this.DARK_MODE?'':'class="light"';

		this.$gHelpLayer = $('<div '+ light +' id="'+this.divNames.book_help_layer+'"></div>')
		.css({
			top:0,left:(book.width*-1)+'px',
			width:(book.width*2-2)+'px',
			height:(book.height-1)+'px'
		}).html(helpHTML)
		.find('span[name=click_to_open]').click(function(){_this.gotoNext();return false;}).end()
		.find('span[name=goto_start]').click(function(){_this.gotoSpread(0);return false;}).end();		
		this.$gContainter.html(this.$gHelpLayer);

	},
	getHlpLayerBgImage:function(skinMode){
		var canvas = document.createElement('canvas');
		canvas.width = 100; canvas.height = 100;
		var ctx = canvas.getContext('2d');
		if(skinMode){
			ctx.fillStyle = skinMode==='dark'?'rgba(0,0,0,0.2)':'rgba(255,255,255,0.2)';
		}else{
			ctx.fillStyle = this.DARK_MODE?'rgba(0,0,0,0.2)':'rgba(255,255,255,0.2)';
		};
		ctx.fillRect(0,0,canvas.width, canvas.height);
		return canvas;
	},
	buildAndPreloadSheets:function(){
	//xxx	
		var _this=this;
				
		var fn = {
			buildColorSheet:function($sheet,colors,num_sheet){
				var 
					frame = 0,
					fw = num_sheet===currentSpread || num_sheet>currentSpread ?1:0,
					edges3d = _this.FRAMES[fw][frame].edges3d,
					$tplsheet = $('<span class="all_edges" style="display:none;position:absolute;top:0;left:0;width:100%;height:100%;z-index:10;"></span>');
					
				for(var m=0;m<edges3d.length;m++){
					var width = edges3d[m].width+offset;
					var transform = 'translate3d(' + edges3d[m].x + 'px, 0px, ' + (-edges3d[m].z) + 'px) rotateY(' + edges3d[m].angle + 'deg)';
					var transformBackface = 'transform:rotateY(-180deg);-webkit-transform:rotateY(-180deg);-moz-transform:rotateY(-180deg);-ms-transform:rotateY(-180deg);';
					var backEdge = '<span class="back" style="background:' + colors.back + ';' + transformBackface + '"></span>';
					var frontEdge = '<span class="front" style="background:' + colors.front + ';"></span>';
					var $div = $('<div style="border:0px solid red;" class="unselectable frame'+frame+'-'+m+'">' + backEdge + frontEdge+'</div>')
					.css({
						position:'absolute',top:'0px',left:'0px',width:width+'px',height:_this.CFG.BOOK_SIZE.height+'px',
						'transform':transform,'-webkit-transform':transform,'-moz-transform':transform,'-ms-transform':transform
					});
					$tplsheet.append($div);					
				};
				
				$sheet.html($tplsheet);
				
				var wholeimage = [					
					'<span class="back_image" style="border:0px solid blue;z-index:2; transform:rotateY(-180deg);-webkit-transform:rotateY(-180deg);-moz-transform:rotateY(-180deg);-ms-transform:rotateY(-180deg);"><div style=""></div></span>',
					'<span class="front_image" style="border:0px solid green;z-index:2;"><div style=""></div></span>'
				].join('');
				var gr = fw?0:180;

				var size = _this.CFG.BOOK_SIZE;
				$sheet.append([
					'<span class="wholeimage" style="display:block;position:absolute;top:0;left:0;z-index:20;width:'+size.width+'px;height:'+size.height+'px;',
					'transform:translate3d(0px,0px,0px) rotateY('+gr+'deg);-webkit-transform:translate3d(0px,0px,0px) rotateY('+gr+'deg);-moz-transform:translate3d(0px,0px,0px) rotateY('+gr+'deg);-ms-transform:translate3d(0px,0px,0px) rotateY('+gr+'deg);">'+wholeimage+'</span>'
				].join(''));				
			},

			fillSheetWithDefaultImages:function(i){
				var isImages = [_this.ALLSHEETS[i].front,_this.ALLSHEETS[i].back];
				for(var n=0;n<isImages.length;n++){
					var imgSrc = isImages[n];
					if(imgSrc.indexOf('.png')>-1 || imgSrc.indexOf('.jpg')>-1 || imgSrc.indexOf('.gif')>-1){
						_this.createImageFromColor(_this.CFG.PAGE_DEFAULT_COLOR,i,n);
					}else{
						_this.createImageFromColor(imgSrc,i,n);
					}
				}
			},
			startLoadImagesForSheet:function(i){
				var isImages = [_this.ALLSHEETS[i].front,_this.ALLSHEETS[i].back];
				for(var n=0;n<isImages.length;n++){
					var imgSrc = isImages[n];
					if(imgSrc.indexOf('.png')>-1 || imgSrc.indexOf('.jpg')>-1 || imgSrc.indexOf('.gif')>-1){
						_this.loadImageForPage(imgSrc,i,n);
					}
				}
			}
		};
		
		var fnGL = {
			PlainTextured:function(options){
			    var white = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==";		    
				var transparent = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
			    var src = options.imageSrc || white;
			    var color = options.color?options.color:0xffffff;
				var side = options.backSide ? THREE.BackSide:THREE.FrontSide;
		        var plainMesh = new THREE.Mesh(
					   new THREE.PlaneGeometry( options.size[0], options.size[1] ),
					   new THREE.MeshBasicMaterial({map:THREE.ImageUtils.loadTexture( white ), side:side })
					);
			    THREE.ImageUtils.loadTexture(src,undefined,function(texture){
	               plainMesh.material.map = texture;
				    options.onReady && options.onReady(plainMesh);
				});
	            return plainMesh;			
			},
			buildColorSheet:function(sheet,colors){

				var 
					frame = 0,
				 	fw = sheet.num===currentSpread || sheet.num>currentSpread ?1:0,
				 	edges3d = _this.FRAMES_GL_SCALED[fw][frame].edges3d,
				 	
				 	height = _this.CFG.BOOK_GL_SIZE.height,

				 	zindex3d = sheet.zindex3d,
				 	total_edges = edges3d.length*2;
				
				if(!_this.READY_GL_EDGES){_this.READY_GL_EDGES=[]};
				_this.READY_GL_EDGES[sheet.num]=[];
				
				var fillsheet = function(numSheet){
					_this.READY_GL_EDGES[numSheet].push(1);
					if(total_edges === _this.READY_GL_EDGES[numSheet].length){	
						fn.fillSheetWithDefaultImages(sheet.num);
						fn.startLoadImagesForSheet(sheet.num);

					}
				};				
					
				for(var m=0;m<edges3d.length;m++){

					 	var width = edges3d[m].width; // +offset;
						var links_to_all_edges = 
						(function(gl,width,x,z,angle,sheet){

							var 
								numSheet = sheet.num,
								all_edges = sheet.mesh;

						    var edge = new THREE.Object3D();
							edge.position.x = x;
							edge.position.z = -z;
							edge.rotation.y = Math.PI*angle/180;	

							all_edges.add(edge);
							all_edges.position.z = zindex3d;
							all_edges.position.y = height*_this.CFG.ROTATE_CENTER_OFFSET_GL;
							all_edges.name = 'sheet';

							gl.bookBase.add(all_edges);												    
							
					        var front  = new fnGL.PlainTextured({
							   	size:[width,height],
							   	color:colors.front,	 
							   	onReady:function(mesh){	
 								   	mesh.position.x+=width/2;
 								   	mesh.name = 'front';
							      	edge.add(mesh);
							      	fillsheet(numSheet);
							   }
							});			
					        var back  = new fnGL.PlainTextured({
								size:[width,height],
								color:colors.back,
								backSide:true,
								onReady:function(mesh){
									mesh.position.x+=width/2;
									mesh.name = 'back';
								   	edge.add(mesh);	 
								    fillsheet(numSheet);
							   }
							});							

						})(_this.gGL, edges3d[m].width, edges3d[m].x, edges3d[m].z, edges3d[m].angle, sheet);	

				};
				
			}
		};


		var buildGlossySheets = function(n){
		    
			if(!_this.SHEETS_WAS_BUILT[n]){
			_this.SHEETS_WAS_BUILT[n] = true;

			var
				fw = n===currentSpread || n>currentSpread,
				sideClass = fw?'sideRight':'sideLeft',
				sideName = fw?'right':'left',
				zindex3d = amountSheet[sideName]*-1*_this.CFG.GL_DEPTH_STEP;				

			var sheet = { 
					num:n,
					sideClass:sideClass,
					zindex3d:zindex3d,
					mesh:new THREE.Object3D(), 
				};

			var colors = _this.getColorsBySheet(n);
			_this.GL_ARR_SHEETS[n] = sheet;
			amountSheet[sideName]+=1;
			
			fnGL.buildColorSheet(sheet,colors);
			
			};

		};
		
		var buildSheets = function(n){	
			if(!_this.SHEETS_WAS_BUILT[n]){
			_this.SHEETS_WAS_BUILT[n] = true;
			var
				fw = n===currentSpread || n>currentSpread,
				zIndex = fw?(_this.ALLSHEETS.length-n)*10:(n+1)*10,
				sideClass = fw?'side-right':'side-left',
				sideName = fw?'right':'left',
				zindex3d = amountSheet[sideName]*-1;

			var $sheet = $([
				'<div  num="'+n+'" class="sheet'+n+' '+sideClass+'" ', 
				'style="transform:translate3d(0px,0px,'+zindex3d+'px);-webkit-transform:translate3d(0px,0px,'+zindex3d+'px);-moz-transform:translate3d(0px,0px,'+zindex3d+'px);-ms-transform:translate3d(0px,0px,'+zindex3d+'px);',
				'position:absolute;top:0;left:0;z-index:'+ zIndex +'"></div>'
				].join(''));

			if(fw){
				_this.$gContainter.append($sheet);
			}else{
				_this.$gHelpLayer.after($sheet);
			};

			amountSheet[sideName]+=1;
			_this.$ARR_SHEETS[n] = $sheet; 
			var colors = _this.getColorsBySheet(n);
			fn.buildColorSheet($sheet,colors,n);
			fn.fillSheetWithDefaultImages(n);
			fn.startLoadImagesForSheet(n);			

			}			
		};

		var offset = 1.2,		
			forward = this.LAST.forward,
			gif = this.GIF,
			numPreload = this.CFG.NUMBEROF_PRELOAD_SHEETS,
			totalSheets = this.ALLSHEETS.length,
			currentSpread = this.CURRENT.spread, 			
			isLastSpread = currentSpread == totalSheets,
			minSheet = currentSpread - numPreload,
			maxSheet = currentSpread + numPreload;

		if(this.GLOSSY){
			var getCount = function(side){
				var 
					counter = 0,	
					arr = _this.GL_ARR_SHEETS;			
				for(var i in arr){
					if (arr.hasOwnProperty(i)){
						if(arr[i].sideClass===side){counter++;}
					}
				};
				return counter;
			};	
			var	amountSheet = {
				left:getCount('sideLeft'),
				right:getCount('sideRight')
			}
		}else{
			var	amountSheet = {
				left:this.$gContainter.find('.side-left').size(),
				right:this.$gContainter.find('.side-right').size()
			}
		};	
			
		if(isLastSpread){minSheet--};		
		minSheet = minSheet<0?0:minSheet;
		maxSheet = maxSheet<totalSheets?maxSheet:totalSheets-1;


		var getArraySheetNumbers = function(){
			var arrPageleft = [], arrPageRight = [];
			for(var i=minSheet;i<maxSheet+1;i++){
				if(i===currentSpread || i>currentSpread){
					arrPageRight.push(i);
				}else{
					arrPageleft.push(i);
				}
			};			
			return arrPageleft.reverse().concat(arrPageRight);
		};

		
		
		var arr = getArraySheetNumbers();
	 	for(var i=0;i<arr.length;i++){
		    if(this.GLOSSY){
			    buildGlossySheets(arr[i]);
			}else{
			    buildSheets(arr[i]);
			}
	 	};	

		this.deleteSheet(forward?minSheet-1:maxSheet+1);

	},

	deleteSheet:function(num){

		if(num<0 || num>this.ALLSHEETS.length-1 || !this.SHEETS_WAS_BUILT[num]){return false};
		this.SHEETS_WAS_BUILT[num] = false;
		if(this.IMG_NOW_LOADING[num*2]){
			this.IMG_NOW_LOADING[num*2].src = this.GIF;
			this.IMG_NOW_LOADING[num*2].onload = false;
		};
		if(this.IMG_NOW_LOADING[num*2+1]){
			this.IMG_NOW_LOADING[num*2+1].src = this.GIF;
			this.IMG_NOW_LOADING[num*2+1].onload = false;
		};

		if(this.GLOSSY){
			var sheet = this.getSheetByIndex(num);
			if(sheet){ 
				this.gGL.bookBase.remove(sheet.mesh);
				delete this.GL_ARR_SHEETS[num];
			}
		}else{
			this.$gContainter.find('div.sheet'+num).remove();	
		}
	
	},

	getColorsBySheet:function(index){
		var defaultColor = this.CFG.PAGE_DEFAULT_COLOR;
		var front = this.ALLSHEETS[index].front;
			front = front.indexOf('.')>-1 ? defaultColor:front;
		var back = this.ALLSHEETS[index].back;
			back = back.indexOf('.')>-1 ? defaultColor:back;
		var colors = {front:front,back:back};
		return colors;
	},
	createImageFromColor:function(src,sheet,page){
		var _this = this;
		var colorImage = function(){
			var canvas = document.createElement('canvas');
			var w = _this.CFG.BOOK_SIZE.width, h = _this.CFG.BOOK_SIZE.height;
			canvas.width = !_this.CFG.DIVIDE_IMAGES?w:w*2;
			canvas.height = h;
			var ctx = canvas.getContext('2d');
			ctx.fillStyle = 'rgba(0,0,0,0)';
			ctx.fillRect(0,0,canvas.width, canvas.height);
			return canvas;
		};		
		this.shredAndFill({img:colorImage(),src:src,sheet:sheet,page:page});
	},
	loadImageForPage:function(src,sheet,page){

		var _this = this;
		var pageNumber = sheet*2+page;
		this.NOW_LOADING_COUNTER++;

		this.IMG_NOW_LOADING[pageNumber] = new Image();
		this.IMG_NOW_LOADING[pageNumber].onload = function(){
			_this.NOW_LOADING_COUNTER--;
			_this.update_queue_loaded_images({img:this,src:src,sheet:sheet,page:page});
		};
		setTimeout(function(){
			if(_this.IMG_NOW_LOADING && _this.IMG_NOW_LOADING[pageNumber]){
				_this.IMG_NOW_LOADING[pageNumber].src = src;
			}
		},500);
	},
	update_queue_loaded_images:function(imgWithParam){
		var _this=this;
		var shift_queue = function(){
			if(!_this.ANIMATION_FLAG){
				var currentImgWithParam = _this.QUEUE_IMAGES_LOADED.shift()
				if(currentImgWithParam){_this.shredAndFill(currentImgWithParam);}
			};
			if(_this.QUEUE_IMAGES_LOADED.length){
				_this.TMR_QUEUE = setTimeout(function(){shift_queue();},10);
			}
		};
		if(this.TMR_QUEUE){clearTimeout(this.TMR_QUEUE)};
		this.QUEUE_IMAGES_LOADED.push(imgWithParam);
		shift_queue();
	},		
	buildResizedImage:function(bookSize,scale,imgWithParam,isSelfShadow){
	
		var str = this.getString([76,73,77,73,84,69,68,0,76,73,71,72,84,0,86,69,82,83,73,79,78]);
		var img = imgWithParam.img;
		var side = imgWithParam.page>0?'back':'front';
		var colors = this.getColorsBySheet(imgWithParam.sheet);
		var sh = imgWithParam.sheet;
		var bgImage = document.createElement('canvas');
		var w = bookSize.width;
		var h = bookSize.height;
			w = !this.CFG.DIVIDE_IMAGES?w:w*2;
		bgImage.width = w;
		bgImage.height = h;					
		
		var ctx = bgImage.getContext('2d');
		ctx.fillStyle = colors[side];
		ctx.fillRect(0,0,w,h);
		var border = this.CFG.BORDER*scale;
		var insideWidth	= bgImage.width - 2*border;
		var insideHeight = bgImage.height - 2*border;

		if(img.width>insideWidth || img.height > insideHeight){
			var x_ratio = insideWidth / img.width;
			var y_ratio = insideHeight / img.height;
			var ratio = Math.min(x_ratio, y_ratio);
			var use_x_ratio = (x_ratio == ratio);
			var new_width = use_x_ratio ? insideWidth  : Math.floor(img.width*ratio);
			var new_height  = !use_x_ratio ? insideHeight : Math.floor(img.height*ratio);
		}else{
			var new_width = img.width, new_height = img.height;
		};

		ctx.drawImage(img,border,border,new_width,new_height);
					
		var 
			total_spreads = this.getTotalSheets(),
			isFirstPage = imgWithParam.sheet===0 && imgWithParam.page===0,
			isLastPage = imgWithParam.sheet === total_spreads-1 && imgWithParam.page===1;

		if(isSelfShadow){
			var imgShadow = this.SELFSHADOW[side];
			if(!this.CFG.DIVIDE_IMAGES){
				if(!isFirstPage && !isLastPage){
					ctx.drawImage(imgShadow,0,0);					
				}
			}else{
				ctx.drawImage(imgShadow,imgWithParam.page>0?0:this.CFG.BOOK_SIZE.width,0);
			}	
		};

		if(this.GLOSSY){
			var fv = this.CFG.FV;
			if(!fv && sh>parseInt(String.fromCharCode(50),10)){
				var k=.7, w2 = 300, h2 = 82, vline = 20, hline = 30;
				var cnv2 = document.createElement('canvas');
					cnv2.width = w2; cnv2.height = h2;
				var ctx2 = cnv2.getContext("2d");	
					ctx2.fillStyle = 'rgba(200,200,200,.4)';
					ctx2.fillRect(10,10,cnv2.width-20, cnv2.height-20);
					ctx2.lineWidth = 10;
					ctx2.strokeStyle = 'rgba(200,200,200,.4)';
					ctx2.beginPath();
					ctx2.moveTo(hline,0);ctx2.lineTo(0,0);ctx2.lineTo(0,vline);
					ctx2.moveTo(w2-hline,0);ctx2.lineTo(w2,0);ctx2.lineTo(w2,vline);
					ctx2.moveTo(w2,h2-vline);ctx2.lineTo(w2,h2);ctx2.lineTo(w2-hline,h2);
					ctx2.moveTo(0,h2-vline);ctx2.lineTo(0,h2);ctx2.lineTo(hline,h2);
					ctx2.stroke();
					ctx2.fillStyle = '#ffffff';
					ctx2.font = "16pt Arial";
					ctx2.textAlign = 'center';
					ctx2.fillText(str, cnv2.width/2, 50);
					ctx.drawImage(cnv2,(bgImage.width)/2-cnv2.width*k/2,(bgImage.height)/2-cnv2.height*k/2,cnv2.width*k,cnv2.height*k);	
			}; 						
		};
		return bgImage;

	},

	shredAndFill:function(imgWithParam){
		
		var _this=this;
		
		if(!this.CFG.BOOK_SIZE.width || !this.CFG.BOOK_SIZE.height){
			return false;
		};

		var fn = {
			switchSheetLoadingStatus:function(){
				var pageNumber = sheet*2+page;			
				var noNeedImage = _this.ALL_PAGES_MAP[pageNumber]==='color';
				if(_this.GLOSSY){
					if(gl_sheet){
						if(gl_sheet[side+'Loading']){
							delete gl_sheet[side+'Loading']; 
							gl_sheet[side+'Filled'] = true;
						}else{
							if(noNeedImage){
								gl_sheet[side+'Filled'] = true;
							}else{
								gl_sheet[side+'Loading'] = true;
							}						
						}
					}
				}else{
					if($sheet.hasClass(side+'-loading')){
						$sheet.removeClass(side+'-loading').addClass(side+'-filled');
					}else{
						if(noNeedImage){
							$sheet.addClass(side+'-filled');
						}else{
							$sheet.addClass(side+'-loading');
						}
					}
				}
			},

			cutImagesAndInsertIntoEdges:function(img){

				var 
					sum = 0,
					imgHeight = img.height,
					imgWidth = img.width,
					left,width,cropWidth;
				
				for(var i=0;i<edges3d.length;i++){
					width = Math.round(edges3d[i].width);
					if(!_this.CFG.DIVIDE_IMAGES){
						if(side==='front'){					
							left = sum;
							sum += width;						
							cropWidth = left+width > imgWidth ? imgWidth-left : width;
						}else{
							sum += width;
							left = imgWidth-sum;
							cropWidth = width;
							if(left<0){
								cropWidth = width+left;
								left = 0;
							}
						}
					}else{						
	
					};

					var canvas = document.createElement('canvas');
					canvas.width=cropWidth;
					canvas.height=imgHeight;
					var ctx = canvas.getContext('2d');
					
					if(_this.GLOSSY && side==='back'){ 
						ctx.translate(cropWidth, 0)
						ctx.scale(-1,1);
					 };

					ctx.drawImage(img,left,0,cropWidth,imgHeight,0,0,cropWidth,imgHeight);

					var src = canvas.toDataURL();
					var newimage = document.createElement('img');
					newimage.src = src;
					sheetImages.push(newimage);

				};
				
				if(_this.GLOSSY){
					if(gl_sheet && gl_sheet.mesh){
						var gl_edges = gl_sheet.mesh.children;
						$.each(gl_edges,function(i){
							var edge = this.getObjectByName( side );
							THREE.ImageUtils.loadTexture(sheetImages[i].src,undefined,function(texture){
								if(edge){ edge.material.map = texture; } 
							});
						});
					}
				}else{
					var 
						$wholeimage = $sheet.find('.wholeimage .'+side+'_image'),
						$wholeimage_inside = $wholeimage.find('div'),
						$edges = $sheet.find('.'+side),
						x_bg = side==='back'?-1:1;
					
					$wholeimage_inside.css({background:'url('+img.toDataURL()+') '+x_bg+'px 0px no-repeat'});
					$wholeimage.css({background:'url('+img.toDataURL()+') 0px 0px no-repeat'});
							
					$edges.each(function(i){
						$(this).css({background:'url('+sheetImages[i].src+') no-repeat',backgroundSize:'100% 100%'});
					});	
				};	
			}
			
		};		
		
		var edges3d = _this.FRAMES[0][this.FIRST_FRAME].edges3d;		
		var sheetImages = [];				
		var img = imgWithParam.img
		var page = imgWithParam.page;
		var sheet =  imgWithParam.sheet;
		var side = page>0?'back':'front';
		
		if(this.GLOSSY){
			var	gl_sheet = _this.GL_ARR_SHEETS[sheet];
		}else{
			var $sheet = this.$ARR_SHEETS[sheet];	
		};

		this.startRender();

		fn.switchSheetLoadingStatus();
		var resizedImage = this.buildResizedImage(this.CFG.BOOK_SIZE,this.GSCALE,imgWithParam,'selfShadow');
		fn.cutImagesAndInsertIntoEdges(resizedImage);

		this.bookLoaderShow(!this.didSpreadLoaded(this.CURRENT.spread));

	},
	saveImagesAs:function(){
				
		var _this=this;
  		
  		var canvas2Blob = function(canvas){
			var 
				parts = canvas.toDataURL().match(/data:([^;]*)(;base64)?,([0-9A-Za-z+/]+)/),
				binStr = atob(parts[3]),
				buf = new ArrayBuffer(binStr.length),
				view = new Uint8Array(buf);
			for (var i = 0; i < view.length; i++){view[i] = binStr.charCodeAt(i);};
  			return new Blob([view], {'type': parts[1]});
  		};

		var fn = {
			loadImage:function(src){
				var img = new Image();				
				img.onload = function(){
					var canvas = document.createElement('canvas');
					canvas.width = this.width; canvas.height = this.height;
					var ctx = canvas.getContext('2d'); ctx.drawImage(this,0,0,this.width,this.height);
					fn.saveImage(canvas);
				};
				img.src = src;
			},
			saveImage:function(canvas){
	    		var URL = window.URL || webkitURL;
				var a = document.createElement('a');
				var blob = canvas2Blob(canvas);
				a.download = "photo.png";
				a.href = URL.createObjectURL(blob);
				document.body.appendChild(a);
				a.click();
				document.body.removeChild(a);				
				setTimeout(function(){
					URL.revokeObjectURL(blob);
				},100);
			},
			showMenu:function(){
				_this.$gSaveMenu.toggle();
			}
		};

		var
			isFirstPage = this.CURRENT.spread == 0,	
			isLastPage = this.CURRENT.spread == this.getTotalSheets(),
			arrSrc = this.ARR_PAGES_SRC;

		if(isFirstPage){
			fn.loadImage(arrSrc[0]);
		}else if(isLastPage){
			fn.loadImage(arrSrc[arrSrc.length-1]);
		}else{
			_this.$gSaveMenu.find('a').unbind().each(function(i){
				$(this).click(function(){
					var index = i?_this.CURRENT.spread*2:_this.CURRENT.spread*2-1;
					arrSrc[index] && fn.loadImage(arrSrc[index]);					
					fn.showMenu();
					return false;
				})	
			});			
			fn.showMenu();
		}

	}

};



var OneBookEditor = {

	init:function(options){
		
		this.MATH = OneBookEditorMath.init();
		this.onReady = options.onReady;
		this.ARR_ANIMATIONS = [];
		this.CURRENT_FLIP_NAME = options.flip||'';
		
		this.FLIP_NAMES = [];
		this.CURRENT_KEYFRAME = 1;
		this.CURRENT_LINE = 0;
		this.CFG = {
			SPEED_ANIMATION:15,
			BOOK_HEIGHT:300,
			YSCALETOP:0.3,
			YSCALE:0.08,
			BEZIE_ROUGH:window[G_DATA].GLOSSY?10:4,
			BOOK_ROTATE_X:0,
			ARR_BOOK_WIDTH:[]
		};


		this.ARR_ANI = [
			'<div id="animations" style="display:none;">',
			'<div class="book" name="basic">',
				'<div class="points" xy="-40,0 -60,0 -80,0 -80,0 -120,0"></div>',
				'<div class="frame" fr="0" ang="0 0 0 0 0"></div>',
				'<div class="frame" fr="30" ang="100 15 5 5 -30"></div>',
				'<div class="frame" fr="60" ang="140 120 40 40 -30"></div>',
				'<div class="frame" fr="80" ang="130 145 195 195 190"></div>',
				'<div class="frame" fr="100" ang="180 180 180 180 180"></div>',
			'</div>',			
			'<div class="book" name="soft">',
				'<div class="points" xy="-40,0 -60,0 -80,0 -80,0 -120,0"></div>',
				'<div class="frame" fr="0" ang="0 0 0 0 0"></div>',
				'<div class="frame" fr="30" ang="95 60 10 10 -50"></div>',
				'<div class="frame" fr="60" ang="150 145 60 60 -30"></div>',
				'<div class="frame" fr="80" ang="175 170 105 105 60"></div>',
				'<div class="frame" fr="100" ang="180 180 180 180 180"></div>',
			'</div>'
			].join('');		
		this.load_animations_from_html();
	},	
	load_animations_from_html:function(){
		var _this=this;
		var calculate_book_width = function(POINTS){
			var width = 0;
			for(var n=0;n<POINTS.length;n++){
				width+=	POINTS[n][0];
			};
			width = width<0?width*-1:width;
			return width;
		};
		$(this.ARR_ANI).find('.book').each(function(){
			var KEY_FRAMES = [];
			var name =  $(this).attr('name');
			var POINTS = $(this).find('.points').attr('xy').split(' ')
			.map(function(allpoints){
					return allpoints.split(',')
					.map( function(point){ return parseInt(point); } );
			});
			$(this).find('.frame').each(function(i){
				var fr = parseInt($(this).attr('fr'),10);
				var arrang = $(this).attr('ang').split(' ').map(function(ang){return parseInt(ang);});
				var KF = {frame:fr,line:[]};
				for(var n=0;n<POINTS.length;n++){
					KF.line[n] = {xy:POINTS[n],ang:arrang[n],center:[0,0]};
				};
				KEY_FRAMES.push(KF);
			});
			_this.CFG.ARR_BOOK_WIDTH.push(calculate_book_width(POINTS));
			_this.FLIP_NAMES.push(name);
			_this.ARR_ANIMATIONS[name] = KEY_FRAMES;
		});
		
		
		this.CURRENT_FLIP_NAME = $.inArray(this.CURRENT_FLIP_NAME,this.FLIP_NAMES)!==-1?this.CURRENT_FLIP_NAME:this.FLIP_NAMES[0];
		
		var data  = window[G_DATA].FLIPS[this.CURRENT_FLIP_NAME];
		data?this.onReady(data):this.rebuild();
			
	},
	rebuild:function(){
		

		
		var KEY_FRAMES = this.ARR_ANIMATIONS[this.CURRENT_FLIP_NAME];
		this.FIRST_KEYFRAME = KEY_FRAMES[0].frame;

		var ALL_FRAMES = this.buildAllFramesFrom(KEY_FRAMES);
		this.ALL_FRAMES = this.calculateCenters(ALL_FRAMES);

		this.calculateBezie();
		this.calculateEdgeSkewY();
		
		this.CFG.AMOUNT_ADGES_3D = this.ALL_FRAMES[0].edges3d.length;

		var ALL_FRAMES2 = [];
		for(var i=0;i<this.ALL_FRAMES.length;i++){
			var fr = this.ALL_FRAMES[i];
			var edges3d = [];
			for(var n=0;n<fr.edges3d.length;n++){
				edges3d[n] = {
					angle:180-fr.edges3d[n].angle,
					width:fr.edges3d[n].width,
					x:fr.edges3d[n].x*-1,
					z:fr.edges3d[n].z
				};
			};
			ALL_FRAMES2.push({
				bezie:fr.bezie,
				edges3d:edges3d,
				frame:fr.frame,
				keyframe:fr.keyframe,
				line:fr.line,
				skewYbottom:fr.skewYbottom,
				skewYtop:fr.skewYtop
			});
		};
		
		var data = [this.ALL_FRAMES,ALL_FRAMES2];
		window[G_DATA].FLIPS[this.CURRENT_FLIP_NAME] = data;
		this.onReady(data);
	},

	buildAllFramesFrom:function(KF){
		var KF = KF;
		var AF = [];
		if(KF.length<1)return [];
		for(var i=0;i<KF.length;i++){
			AF[KF[i].frame] = $.extend(true,{},KF[i]);
			AF[KF[i].frame].keyframe = true;
		};
		for(var i=1;i<KF.length;i++){
			var from = KF[i-1];
			var to = KF[i];
			var amount = to.frame-from.frame;
			for(var frame=1;frame<amount;frame++){
				var number_of_frame = from.frame+frame;
				var newline = [];
				for(var p=0;p < to.line.length;p++){
					var ang = Math.floor( (to.line[p].ang-from.line[p].ang) / amount * frame + from.line[p].ang );
					var xy = [to.line[p].xy[0],to.line[p].xy[1]];
					newline.push({xy:xy,ang:ang,center:[0,0]});
				};
				AF[number_of_frame] = {frame:number_of_frame,line:newline};
			}
		};
		return AF;
	},

	calculateCenters:function(AF){
		var _this=this;
		var AF = AF;
		$.each(AF,function(i){
			if(i<_this.FIRST_KEYFRAME){return;}
			var line = this.line;
			for (var i=0;i<line.length;i++){
				var ang = line[i].ang;
				var sign = ang>0?1:-1; 
				var angle = ang*sign; 
				var center = line[i].center;
				var matrix = [_this.MATH.COS[angle],sign*-_this.MATH.SIN[angle],center[0],
							 sign*_this.MATH.SIN[angle],_this.MATH.COS[angle],center[1]];
				var xy = line[i].xy ;
				var new_xy = _this.MATH.xy_matrix2d(xy,matrix);
				line[i].xy = new_xy;
				if(line[i+1]){line[i+1].center = new_xy};
			};
		});
		return AF;
	},

	calculateBezie:function(){

		var _this=this;
		var AF = this.ALL_FRAMES;
		var rough = this.CFG.BEZIE_ROUGH;
		$.each(AF,function(i){
		var lns = this.line;
		if(lns.length<3){return;};
		var bezie_points=[{x:0,y:0}], t=0, newX=0, newY=0, P0=[0,0], P1=lns[0].xy, P2=lns[1].xy, P3=lns[2].xy;
			for(var n=1;n<rough;n++){
				t = 1/rough*n;
				newX = (1-t)*(1-t)*(1-t)*P0[0]  +  3*t*(1-t)*(1-t)*P1[0]  +  3*t*t*(1-t)*P2[0]  +  t*t*t*P3[0];
				newY = (1-t)*(1-t)*(1-t)*P0[1]  +  3*t*(1-t)*(1-t)*P1[1]  +  3*t*t*(1-t)*P2[1]  +  t*t*t*P3[1];
				bezie_points.push({x:newX,y:newY});
			};
			bezie_points.push({x:P3[0],y:P3[1]});
		if(lns.length===5 || lns.length>5){
		var t=0, newX=0, newY=0, P0=lns[2].xy, P1=lns[3].xy, P2=lns[4].xy;
			for(var n=1;n<rough;n++){
				t = 1/rough*n;
				newX = (1-t)*(1-t)*P0[0]  +  2*t*(1-t)*P1[0]  +  t*t*P2[0];
				newY = (1-t)*(1-t)*P0[1]  +  2*t*(1-t)*P1[1]  +  t*t*P2[1];
				bezie_points.push({x:newX,y:newY});
			};
			bezie_points.push({x:P2[0],y:P2[1]});
		};
		this.bezie = bezie_points;
		});
		this.ALL_FRAMES = AF;
	},

	calculateEdgeSkewY:function(){
		var _this=this;
		var BOOK_HEIGHT = this.CFG.BOOK_HEIGHT;
		var YSCALE = this.CFG.YSCALE;
		var YSCALETOP = this.CFG.YSCALETOP;
		var AF = this.ALL_FRAMES;

		$.each(AF,function(i){
			var edge = this.bezie;
			var skewYtop = [];
			var skewYbottom = [];
			var edges3d = [];

			for(var n=0;n<edge.length-1;n++){
				var p1,p2,y1top,y2top;
				
				p1=edge[n];
				p2=edge[n+1];
				
				var width = Math.sqrt((p2.y-p1.y)*(p2.y-p1.y)+(p2.x-p1.x)*(p2.x-p1.x));
				var angle = ((Math.atan2(p2.y-p1.y,p2.x-p1.x))*180/Math.PI).toFixed(15);
				edges3d.push({x:p1.x,z:p1.y,width:width,angle:angle});
				
				y1top = p1.y*YSCALETOP-BOOK_HEIGHT;
				y2top = p2.y*YSCALETOP-BOOK_HEIGHT;
				skewYtop.push( ((Math.atan2(y2top-y1top,p2.x-p1.x))*180/Math.PI).toFixed(15));

				y1bottom = p1.y*YSCALE-BOOK_HEIGHT;
				y2bottom = p2.y*YSCALE-BOOK_HEIGHT;
				skewYbottom.push( ((Math.atan2(y2bottom-y1bottom,p2.x-p1.x))*180/Math.PI).toFixed(15));
			};
			this.edges3d = edges3d;
			this.skewYtop = skewYtop;
			this.skewYbottom = skewYbottom;
		});
		this.ALL_FRAMES = AF;
	},

	get_total_keyframes:function(){
		var keyframes = this.ARR_ANIMATIONS[this.CURRENT_ANIMATION];
		return keyframes.length;
	},
	get_total_lines:function(){
		var totalLines = this.ALL_FRAMES[this.FIRST_KEYFRAME].line;
		return totalLines.length;
	}
};
	

var OneBookEditorMath = {
	init:function(){
		this.SIN = [];
		this.COS = [];
		this._calculate();
		return this;
	},	
	_calculate:function(){
		for(var i=0;i<360;i++){this.SIN[i] = Math.sin(i*Math.PI/180).toFixed(15)};
		for(var i=0;i<360;i++){this.COS[i] = Math.cos(i*Math.PI/180).toFixed(15)};		
		(function(fn){
			if(!fn.map){fn.map= function(f){ var len=this.length;var res = new Array(len);for(var i=0;i<len;i++){if(i in this){res[i]=f.call(false,this[i],i,this)}};return res;}}
		})(Array.prototype);
	},
	xy_matrix2d:function(xy,matrix){
		var v = xy; v.push(1);
		var m = matrix;	
		return [
			m[0]*v[0]+m[1]*v[1]+m[2]*v[2],
			m[3]*v[0]+m[4]*v[1]+m[5]*v[2]
		]
	}	
};	

	var wholeBooks = window[G_DATA].NUMBER;
	window[G_DATA].NUMBER +=1;
	window[G_DATA].queueBooksBuilding.push({arrSrc:arrSrc,options:options,target:target});
	if(!wholeBooks || !window[G_DATA].buildingNowFlag){
		window[G_DATA].buildNextBook();
	};

	return this;

};

$.fn.onebook = function (arrSrc,options) {
	$.onebook(arrSrc,options,this);
	return this;
};


})(jQuery);

 
 /**
 * riadesign
 * jquery plugin 'swipeMePls';
 */
 
(function(e){e.fn.swipeMePls=function(t){var n=e.extend({preventDefault:true,enableMouse:true,distance:100,onTouch:function(e){},onMove:function(e){},onSwipe:function(e){},onEnd:function(){}},t||{});var r;var i;return this.each(function(){var t=e(this);var s,o;var u,a;var f=false;var l={touchStart:function(e){if(e.targetTouches.length>1){return}var t=e.targetTouches[0];u=t.pageX;a=t.pageY;s=t.pageX;o=t.pageY;r=new Date;n.onTouch({clientX:t.clientX,clientY:t.clientY,pageX:t.pageX,pageY:t.pageY,screenX:t.screenX,screenY:t.screenY})},mouseDown:function(e){f=true;u=e.pageX;a=e.pageY;s=e.pageX;o=e.pageY;r=new Date;n.onTouch({clientX:e.clientX,clientY:e.clientY,pageX:e.pageX,pageY:e.pageY,screenX:e.screenX,screenY:e.screenY});n.preventDefault&&e.preventDefault()},mouseMove:function(e){if(f){n.onMove({deltaX:e.pageX-s,deltaY:e.pageY-o,clientX:e.clientX,clientY:e.clientY,pageX:e.pageX,pageY:e.pageY,screenX:e.screenX,screenY:e.screenY});s=e.pageX;o=e.pageY}n.preventDefault&&e.preventDefault()},moveEnd:function(e){if(f){f=false;l.testSwipe()}n.preventDefault&&e.preventDefault();n.onEnd()},touchEnd:function(e){f=false;l.testSwipe();n.onEnd()},touchMove:function(e){if(e.targetTouches.length>1){return}var t=e.targetTouches[0];n.onMove({deltaX:t.pageX-s,deltaY:t.pageY-o,clientX:t.clientX,clientY:t.clientY,pageX:t.pageX,pageY:t.pageY,screenX:t.screenX,screenY:t.screenY,evt:e});s=t.pageX;o=t.pageY;n.preventDefault&&e.preventDefault()},testSwipe:function(){var e=s-u;var t=o-a;i=Math.abs(new Date-r)/1e3;if(Math.abs(e)>=Math.abs(t)){if(Math.abs(e)>=n.distance){var f=e>=0?"right":"left";n.onSwipe({direction:f,distance:Math.abs(e),speed:Math.abs(e)/i,time:i})}}else{if(Math.abs(t)>=n.distance){var f=t>=0?"down":"up";n.onSwipe({direction:f,distance:Math.abs(t),speed:Math.abs(t)/i,time:i})}}},touchCancel:function(e){}};if(n.enableMouse){t.mousedown(function(e){var e=e||window.event;var t=e.keyCode||e.which;if(t==1){l.mouseDown(e)}});t.mouseup(l.moveEnd);e("body").mouseup(l.moveEnd);t.mousemove(l.mouseMove)}this.addEventListener("touchstart",l.touchStart);this.addEventListener("touchmove",l.touchMove);this.addEventListener("touchend",l.touchEnd);this.addEventListener("touchcancel",l.touchCancel)})}})(jQuery);




;
//# sourceMappingURL=scripts.js.map