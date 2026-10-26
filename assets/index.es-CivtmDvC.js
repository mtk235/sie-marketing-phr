import{n as e,r as t,t as n}from"./index-555WgE9J.js";var r=t(e()),i=t(n()),a=function(e,t){return a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},a(e,t)};function o(e,t){if(typeof t!=`function`&&t!==null)throw TypeError(`Class extends value `+String(t)+` is not a constructor or null`);a(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}var s=function(){return s=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n],t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},s.apply(this,arguments)};function c(e,t){t===void 0&&(t={});var n=t.insertAt;if(e&&typeof document<`u`){var r=document.head||document.getElementsByTagName(`head`)[0],i=document.createElement(`style`);i.type=`text/css`,n===`top`&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}c(`/*
  code is extracted from Calendly's embed stylesheet: https://assets.calendly.com/assets/external/widget.css
*/

.calendly-inline-widget,
.calendly-inline-widget *,
.calendly-badge-widget,
.calendly-badge-widget *,
.calendly-overlay,
.calendly-overlay * {
  font-size: 16px;
  line-height: 1.2em;
}

.calendly-inline-widget {
  min-width: 320px;
  height: 630px;
}

.calendly-inline-widget iframe,
.calendly-badge-widget iframe,
.calendly-overlay iframe {
  display: inline;
  width: 100%;
  height: 100%;
}

.calendly-popup-content {
  position: relative;
}

.calendly-popup-content.calendly-mobile {
  -webkit-overflow-scrolling: touch;
  overflow-y: auto;
}

.calendly-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  z-index: 9999;
  background-color: #a5a5a5;
  background-color: rgba(31, 31, 31, 0.4);
}

.calendly-overlay .calendly-close-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.calendly-overlay .calendly-popup {
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translateY(-50%) translateX(-50%);
  transform: translateY(-50%) translateX(-50%);
  width: 80%;
  min-width: 900px;
  max-width: 1000px;
  height: 90%;
  max-height: 680px;
}

@media (max-width: 975px) {
  .calendly-overlay .calendly-popup {
    position: fixed;
    top: 50px;
    left: 0;
    right: 0;
    bottom: 0;
    -webkit-transform: none;
    transform: none;
    width: 100%;
    height: auto;
    min-width: 0;
    max-height: none;
  }
}

.calendly-overlay .calendly-popup .calendly-popup-content {
  height: 100%;
}

.calendly-overlay .calendly-popup-close {
  position: absolute;
  top: 25px;
  right: 25px;
  color: #fff;
  width: 19px;
  height: 19px;
  cursor: pointer;
  background: url(https://assets.calendly.com/assets/external/close-icon.svg)
    no-repeat;
  background-size: contain;
}

@media (max-width: 975px) {
  .calendly-overlay .calendly-popup-close {
    top: 15px;
    right: 15px;
  }
}

.calendly-badge-widget {
  position: fixed;
  right: 20px;
  bottom: 15px;
  z-index: 9998;
}

.calendly-badge-widget .calendly-badge-content {
  display: table-cell;
  width: auto;
  height: 45px;
  padding: 0 30px;
  border-radius: 25px;
  box-shadow: rgba(0, 0, 0, 0.25) 0 2px 5px;
  font-family: sans-serif;
  text-align: center;
  vertical-align: middle;
  font-weight: bold;
  font-size: 14px;
  color: #fff;
  cursor: pointer;
}

.calendly-badge-widget .calendly-badge-content.calendly-white {
  color: #666a73;
}

.calendly-badge-widget .calendly-badge-content span {
  display: block;
  font-size: 12px;
}

.calendly-spinner {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  text-align: center;
  z-index: -1;
}

.calendly-spinner > div {
  display: inline-block;
  width: 18px;
  height: 18px;
  background-color: #e1e1e1;
  border-radius: 50%;
  vertical-align: middle;
  -webkit-animation: calendly-bouncedelay 1.4s infinite ease-in-out;
  animation: calendly-bouncedelay 1.4s infinite ease-in-out;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

.calendly-spinner .calendly-bounce1 {
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}

.calendly-spinner .calendly-bounce2 {
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}

@-webkit-keyframes calendly-bouncedelay {
  0%,
  80%,
  100% {
    -webkit-transform: scale(0);
    transform: scale(0);
  }

  40% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

@keyframes calendly-bouncedelay {
  0%,
  80%,
  100% {
    -webkit-transform: scale(0);
    transform: scale(0);
  }

  40% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
`);function l(e){return e.charAt(0)===`#`?e.slice(1):e}function u(e){return e?.primaryColor&&(e.primaryColor=l(e.primaryColor)),e?.textColor&&(e.textColor=l(e.textColor)),e?.backgroundColor&&(e.backgroundColor=l(e.backgroundColor)),e}var d;(function(e){e.PROFILE_PAGE_VIEWED=`calendly.profile_page_viewed`,e.EVENT_TYPE_VIEWED=`calendly.event_type_viewed`,e.DATE_AND_TIME_SELECTED=`calendly.date_and_time_selected`,e.EVENT_SCHEDULED=`calendly.event_scheduled`,e.PAGE_HEIGHT=`calendly.page_height`})(d||={});var f=function(e){var t=e.url,n=e.prefill,r=n===void 0?{}:n,i=e.pageSettings,a=i===void 0?{}:i,o=e.utm,s=o===void 0?{}:o,c=e.embedType,l=u(a),d=l.backgroundColor,f=l.hideEventTypeDetails,m=l.hideLandingPageDetails,g=l.primaryColor,_=l.textColor,v=l.hideGdprBanner,y=r.customAnswers,b=r.date,x=r.email,S=r.firstName,C=r.guests,w=r.lastName,T=r.location,E=r.name,D=s.utmCampaign,O=s.utmContent,k=s.utmMedium,A=s.utmSource,j=s.utmTerm,M=s.salesforce_uuid,N=t.indexOf(`?`),P=N>-1,F=t.slice(N+1);return`${P?t.slice(0,N):t}?${[P?F:null,d?`background_color=${d}`:null,f?`hide_event_type_details=1`:null,m?`hide_landing_page_details=1`:null,g?`primary_color=${g}`:null,_?`text_color=${_}`:null,v?`hide_gdpr_banner=1`:null,E?`name=${encodeURIComponent(E)}`:null,T?`location=${encodeURIComponent(T)}`:null,S?`first_name=${encodeURIComponent(S)}`:null,w?`last_name=${encodeURIComponent(w)}`:null,C?`guests=${C.map(encodeURIComponent).join(`,`)}`:null,x?`email=${encodeURIComponent(x)}`:null,b&&b instanceof Date?`date=${p(b)}`:null,D?`utm_campaign=${encodeURIComponent(D)}`:null,O?`utm_content=${encodeURIComponent(O)}`:null,k?`utm_medium=${encodeURIComponent(k)}`:null,A?`utm_source=${encodeURIComponent(A)}`:null,j?`utm_term=${encodeURIComponent(j)}`:null,M?`salesforce_uuid=${encodeURIComponent(M)}`:null,c?`embed_type=${c}`:null,`embed_domain=1`].concat(y?h(y):[]).filter(function(e){return e!==null}).join(`&`)}`},p=function(e){var t=e.getMonth()+1,n=e.getDate();return[e.getFullYear(),t<10?`0${t}`:t,n<10?`0${n}`:n].join(`-`)},m=/^a\d{1,2}$/,h=function(e){var t=Object.keys(e).filter(function(e){return e.match(m)});return t.length?t.map(function(t){return`${t}=${encodeURIComponent(e[t])}`}):[]},g=function(e){o(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t.prototype.render=function(){return r.createElement(`div`,{className:`calendly-spinner`},r.createElement(`div`,{className:`calendly-bounce1`}),r.createElement(`div`,{className:`calendly-bounce2`}),r.createElement(`div`,{className:`calendly-bounce3`}))},t}(r.Component),_=`calendly-inline-widget`,v=function(e){o(t,e);function t(t){var n=e.call(this,t)||this;return n.state={isLoading:!0},n.onLoad=n.onLoad.bind(n),n}return t.prototype.onLoad=function(){this.setState({isLoading:!1})},t.prototype.render=function(){var e=f({url:this.props.url,pageSettings:this.props.pageSettings,prefill:this.props.prefill,utm:this.props.utm,embedType:`Inline`}),t=this.props.LoadingSpinner||g;return r.createElement(`div`,{className:this.props.className||_,style:this.props.styles||{}},this.state.isLoading&&r.createElement(t,null),r.createElement(`iframe`,{width:`100%`,height:`100%`,frameBorder:`0`,title:this.props.iframeTitle||`Calendly Scheduling Page`,onLoad:this.onLoad,src:e}))},t}(r.Component),y=function(e){o(t,e);function t(t){var n=e.call(this,t)||this;return n.state={isLoading:!0},n.onLoad=n.onLoad.bind(n),n}return t.prototype.onLoad=function(){this.setState({isLoading:!1})},t.prototype.render=function(){var e=f({url:this.props.url,pageSettings:this.props.pageSettings,prefill:this.props.prefill,utm:this.props.utm,embedType:`Inline`}),t=this.props.LoadingSpinner||g;return r.createElement(r.Fragment,null,this.state.isLoading&&r.createElement(t,null),r.createElement(`iframe`,{width:`100%`,height:`100%`,frameBorder:`0`,title:this.props.iframeTitle||`Calendly Scheduling Page`,onLoad:this.onLoad,src:e}))},t}(r.Component),b=(function(e){if(!e.open)return null;if(!e.rootElement)throw Error(`[react-calendly]: PopupModal rootElement property cannot be undefined`);return i.createPortal(r.createElement(`div`,{className:`calendly-overlay`},r.createElement(`div`,{onClick:e.onModalClose,className:`calendly-close-overlay`}),r.createElement(`div`,{className:`calendly-popup`},r.createElement(`div`,{className:`calendly-popup-content`},r.createElement(y,s({},e)))),r.createElement(`button`,{className:`calendly-popup-close`,onClick:e.onModalClose,"aria-label":`Close modal`,style:{display:`block`,border:`none`,padding:0}})),e.rootElement)});(function(e){o(t,e);function t(t){var n=e.call(this,t)||this;return n.state={isOpen:!1},n.onClick=n.onClick.bind(n),n.onClose=n.onClose.bind(n),n}return t.prototype.onClick=function(e){e.preventDefault(),this.setState({isOpen:!0})},t.prototype.onClose=function(e){e.stopPropagation(),this.setState({isOpen:!1})},t.prototype.render=function(){return r.createElement(r.Fragment,null,r.createElement(`button`,{onClick:this.onClick,style:this.props.styles||{},className:this.props.className||``},this.props.text),r.createElement(b,s({},this.props,{open:this.state.isOpen,onModalClose:this.onClose,rootElement:this.props.rootElement})))},t})(r.Component),function(e){o(t,e);function t(t){var n=e.call(this,t)||this;return n.state={isOpen:!1},n.onClick=n.onClick.bind(n),n.onClose=n.onClose.bind(n),n}return t.prototype.onClick=function(){this.setState({isOpen:!0})},t.prototype.onClose=function(e){e.stopPropagation(),this.setState({isOpen:!1})},t.prototype.render=function(){return r.createElement(`div`,{className:`calendly-badge-widget`,onClick:this.onClick},r.createElement(`div`,{className:`calendly-badge-content`,style:{background:this.props.color||`#00a2ff`,color:this.props.textColor||`#ffffff`}},this.props.text||`Schedule time with me`,this.props.branding&&r.createElement(`span`,null,`powered by Calendly`)),r.createElement(b,s({},this.props,{open:this.state.isOpen,onModalClose:this.onClose,rootElement:this.props.rootElement})))},t}(r.Component);export{v as InlineWidget};