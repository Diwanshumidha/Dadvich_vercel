(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[99],{9101:function(e,t,r){"use strict";r.d(t,{ZP:function(){return s}});const n={_origin:"https://api.emailjs.com"},o=(e,t,r)=>{if(!e)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!r)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class a{constructor(e){this.status=e.status,this.text=e.responseText}}const i=(e,t,r={})=>new Promise(((o,i)=>{const s=new XMLHttpRequest;s.addEventListener("load",(({target:e})=>{const t=new a(e);200===t.status||"OK"===t.text?o(t):i(t)})),s.addEventListener("error",(({target:e})=>{i(new a(e))})),s.open("POST",n._origin+e,!0),Object.keys(r).forEach((e=>{s.setRequestHeader(e,r[e])})),s.send(t)}));var s={init:(e,t="https://api.emailjs.com")=>{n._userID=e,n._origin=t},send:(e,t,r,a)=>{const s=a||n._userID;o(s,e,t);const c={lib_version:"3.2.0",user_id:s,service_id:e,template_id:t,template_params:r};return i("/api/v1.0/email/send",JSON.stringify(c),{"Content-type":"application/json"})},sendForm:(e,t,r,a)=>{const s=a||n._userID,c=(e=>{let t;if(t="string"===typeof e?document.querySelector(e):e,!t||"FORM"!==t.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return t})(r);o(s,e,t);const u=new FormData(c);return u.append("lib_version","3.2.0"),u.append("service_id",e),u.append("template_id",t),u.append("user_id",s),i("/api/v1.0/email/send-form",u)}}},7942:function(e,t,r){"use strict";var n=r(5696);t.default=void 0;var o,a=(o=r(7294))&&o.__esModule?o:{default:o},i=r(4957),s=r(9898),c=r(639);var u={};function l(e,t,r,n){if(e&&i.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;u[t+"%"+r+(o?"%"+o:"")]=!0}}var f=function(e){var t,r=!1!==e.prefetch,o=s.useRouter(),f=a.default.useMemo((function(){var t=i.resolveHref(o,e.href,!0),r=n(t,2),a=r[0],s=r[1];return{href:a,as:e.as?i.resolveHref(o,e.as):s||a}}),[o,e.href,e.as]),p=f.href,d=f.as,m=e.children,h=e.replace,v=e.shallow,y=e.scroll,g=e.locale;"string"===typeof m&&(m=a.default.createElement("a",null,m));var _=(t=a.default.Children.only(m))&&"object"===typeof t&&t.ref,b=c.useIntersection({rootMargin:"200px"}),E=n(b,2),w=E[0],L=E[1],T=a.default.useCallback((function(e){w(e),_&&("function"===typeof _?_(e):"object"===typeof _&&(_.current=e))}),[_,w]);a.default.useEffect((function(){var e=L&&r&&i.isLocalURL(p),t="undefined"!==typeof g?g:o&&o.locale,n=u[p+"%"+d+(t?"%"+t:"")];e&&!n&&l(o,p,d,{locale:t})}),[d,p,L,g,r,o]);var I={ref:T,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,a,s,c){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(r))&&(e.preventDefault(),t[o?"replace":"push"](r,n,{shallow:a,locale:c,scroll:s}))}(e,o,p,d,h,v,y,g)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),i.isLocalURL(p)&&l(o,p,d,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var O="undefined"!==typeof g?g:o&&o.locale,k=o&&o.isLocaleDomain&&i.getDomainLocale(d,O,o&&o.locales,o&&o.domainLocales);I.href=k||i.addBasePath(i.addLocale(d,O,o&&o.defaultLocale))}return a.default.cloneElement(t,I)};t.default=f},639:function(e,t,r){"use strict";var n=r(5696);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,r=e.rootMargin,u=e.disabled||!i,l=o.useRef(),f=o.useState(!1),p=n(f,2),d=p[0],m=p[1],h=o.useState(t?t.current:null),v=n(h,2),y=v[0],g=v[1],_=o.useCallback((function(e){l.current&&(l.current(),l.current=void 0),u||d||e&&e.tagName&&(l.current=function(e,t,r){var n=function(e){var t,r={root:e.root||null,margin:e.rootMargin||""},n=c.find((function(e){return e.root===r.root&&e.margin===r.margin}));n?t=s.get(n):(t=s.get(r),c.push(r));if(t)return t;var o=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return s.set(r,t={id:r,observer:a,elements:o}),t}(r),o=n.id,a=n.observer,i=n.elements;return i.set(e,t),a.observe(e),function(){if(i.delete(e),a.unobserve(e),0===i.size){a.disconnect(),s.delete(o);var t=c.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&c.splice(t,1)}}}(e,(function(e){return e&&m(e)}),{root:y,rootMargin:r}))}),[u,y,r,d]);return o.useEffect((function(){if(!i&&!d){var e=a.requestIdleCallback((function(){return m(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[d]),o.useEffect((function(){t&&g(t.current)}),[t]),[_,d]};var o=r(7294),a=r(6286),i="undefined"!==typeof IntersectionObserver;var s=new Map,c=[]},1664:function(e,t,r){e.exports=r(7942)},2703:function(e,t,r){"use strict";var n=r(414);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,a,i){if(i!==n){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return r.PropTypes=r,r}},5697:function(e,t,r){e.exports=r(2703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);