(()=>{var t={n:o=>{var r=o&&o.__esModule?()=>o.default:()=>o;return t.d(r,{a:r}),r},d:(o,r)=>{for(var e in r)t.o(r,e)&&!t.o(o,e)&&Object.defineProperty(o,e,{enumerable:!0,get:r[e]})},o:(t,o)=>Object.prototype.hasOwnProperty.call(t,o),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},o={};(()=>{"use strict";t.r(o);const r=flarum.core.compat["common/extend"],e=flarum.core.compat["forum/app"];var n=t.n(e);const s=flarum.core.compat["forum/components/IndexPage"];var a=t.n(s);const c=flarum.core.compat["forum/states/DiscussionListState"];var i=t.n(c);function u(t,o){return u=Object.setPrototypeOf||function(t,o){return t.__proto__=o,t},u(t,o)}const l=flarum.core.compat["common/Component"];var p=t.n(l);const f=flarum.core.compat["common/components/Button"];var d=t.n(f),g=function(t){var o,r;function e(){return t.apply(this,arguments)||this}r=t,(o=e).prototype=Object.create(r.prototype),o.prototype.constructor=o,u(o,r);var s=e.prototype;return s.view=function(){var t=n().__sortDirection;return["asc","desc"].includes(t)||(t="desc"),m(d(),{class:"Button Button--icon Blomstra-SortDirectionToggle",onclick:this.toggleSortDirection,"aria-label":n().translator.trans("blomstra-sort-order-toggle.forum.sort-toggle."+t+"-label"),icon:"desc"===t?"fas fa-sort-amount-down":"fas fa-sort-amount-up"})},s.toggleSortDirection=function(){n().__sortDirection="asc"===n().__sortDirection?"desc":"asc",n().discussions.refresh()},e}(p());n().initializers.add("blomstra/sort-order-toggle",(function(){(0,r.extend)(a().prototype,"viewItems",(function(t){"byobuPrivate"!==n().current.data.routeName&&t.has("sort")&&t.add("sortDirectionToggle",m(g,null),100)})),(0,r.extend)(i().prototype,"requestParams",(function(t){t.sort&&(t.sort.startsWith("-")&&"asc"===n().__sortDirection?t.sort=t.sort.substr(1):t.sort.startsWith("-")||(t.sort="-"+t.sort))}))}))})(),module.exports=o})();
//# sourceMappingURL=forum.js.map