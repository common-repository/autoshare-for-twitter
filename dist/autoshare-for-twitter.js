(()=>{"use strict";var e={n:t=>{var r=t&&t.__esModule?()=>t.default:()=>t;return e.d(r,{a:r}),r},d:(t,r)=>{for(var a in r)e.o(r,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:r[a]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{setAllowTweetImage:()=>P,setAutoshareEnabled:()=>S,setErrorMessage:()=>A,setLoaded:()=>y,setOverriding:()=>x,setSaving:()=>L,setTweetAccounts:()=>C,setTweetText:()=>k});var r={};e.r(r),e.d(r,{getAllowTweetImage:()=>F,getAutoshareEnabled:()=>N,getErrorMessage:()=>I,getOverriding:()=>M,getSaving:()=>D,getTweetAccounts:()=>j,getTweetText:()=>O});const a=window.React,n=window.wp.element,o=window.wp.plugins,s=window.wp.editPost,i=window.wp.data,l=window.wp.components,c=window.wp.i18n,u="SET_AUTOSHARE_FOR_TWITTER_ENABLED",d="SET_ERROR_MESSAGE",m="SET_LOADED",h="SET_OVERRIDING",w="SET_SAVING",g="SET_TWEET_TEXT",p="SET_ALLOW_TWEET_IMAGE",E="SET_TWEET_ACCOUNTS",{enabled:f,allowTweetImage:T,tweetAccounts:b,customTweetBody:_}=adminAutoshareForTwitter,v={autoshareEnabled:!!f&&"0"!==f,errorMessage:"",loaded:!1,overriding:!!_,overrideLength:0,tweetText:_||"",allowTweetImage:!!T,tweetAccounts:b||[]};const S=e=>({type:u,autoshareEnabled:e}),A=e=>({type:d,errorMessage:e}),y=()=>({type:m}),x=e=>({type:h,overriding:e}),L=e=>({type:w,saving:e}),k=e=>({type:g,tweetText:e}),P=e=>({type:p,allowTweetImage:e}),C=e=>({type:E,tweetAccounts:e}),N=e=>e.autoshareEnabled,I=e=>e.errorMessage,M=e=>e.overriding,D=e=>e.saving,O=e=>e.tweetText,F=e=>e.allowTweetImage,j=e=>e.tweetAccounts||[],R="10up/autoshare",X=window.wp.primitives,z=e=>(0,a.createElement)(X.SVG,{version:"1.1",xmlSpace:"preserve",width:256,height:256,viewBox:"0 0 256 256"},(0,a.createElement)("g",{style:{stroke:"none",strokeWidth:0,strokeDasharray:"none",strokeLinecap:"butt",strokeLinejoin:"miter",strokeMiterlimit:10,fill:"none",fillRule:"nonzero",opacity:1}},(0,a.createElement)("path",{d:"M45 90C20.147 90 0 69.853 0 45S20.147 0 45 0s45 20.147 45 45-20.147 45-45 45z",style:{stroke:"none",strokeWidth:1,strokeDasharray:"none",strokeLinecap:"butt",strokeLinejoin:"miter",strokeMiterlimit:10,fill:e,fillRule:"nonzero",opacity:1},transform:"matrix(2.33 0 0 2.33 22.612 22.612)"}),(0,a.createElement)("path",{d:"M17.884 19.496 38.925 47.63 17.751 70.504h4.765l18.538-20.027 14.978 20.027h16.217L50.024 40.788l19.708-21.291h-4.765L47.895 37.94 34.101 19.496H17.884zm7.008 3.51h7.45L65.24 66.993h-7.45L24.892 23.006z",style:{stroke:"none",strokeWidth:1,strokeDasharray:"none",strokeLinecap:"butt",strokeLinejoin:"miter",strokeMiterlimit:10,fill:"#fff",fillRule:"nonzero",opacity:1},transform:"matrix(2.33 0 0 2.33 22.612 22.612)"}))),B=z("#1B1C20"),W=z("#1DA1F2"),U=z("#787E88"),G=z("#D0494A"),$=z("#7FD051"),K=e=>{let t=B;return e&&(t="published"===e?$:"error"===e?G:B),(0,a.createElement)(l.Icon,{className:"autoshare-for-twitter-icon",icon:t,size:48})},H=window.wp.apiFetch;var V=e.n(H);const q=window.lodash,{enableAutoshareKey:Y,errorText:J,restUrl:Q,tweetBodyKey:Z,allowTweetImageKey:ee,tweetAccountsKey:te}=adminAutoshareForTwitter;function re(){const{tweetText:e}=(0,i.useSelect)((e=>({tweetText:e(R).getTweetText()}))),{setTweetText:t}=(0,i.useDispatch)(R);return[e,t]}function ae(){const{autoshareEnabled:e}=(0,i.useSelect)((e=>({autoshareEnabled:e(R).getAutoshareEnabled()}))),{setAutoshareEnabled:t}=(0,i.useDispatch)(R);return[e,t]}function ne(){const{allowTweetImage:e}=(0,i.useSelect)((e=>({allowTweetImage:e(R).getAllowTweetImage()}))),{setAllowTweetImage:t}=(0,i.useDispatch)(R);return[e,t]}function oe(){const{tweetAccounts:e}=(0,i.useSelect)((e=>({tweetAccounts:e(R).getTweetAccounts()}))),{setTweetAccounts:t}=(0,i.useDispatch)(R);return[e,t]}function se(){const{errorMessage:e}=(0,i.useSelect)((e=>({errorMessage:e(R).getErrorMessage()}))),{setErrorMessage:t}=(0,i.useDispatch)(R);return[e,t]}function ie(){const{imageId:e}=(0,i.useSelect)((e=>({imageId:e("core/editor").getEditedPostAttribute("featured_media")})));return e>0}function le(){const[e]=ae(),[t]=ne(),[r]=oe(),[a]=re(),[,o]=se(),[,s]=function(){const{saving:e}=(0,i.useSelect)((e=>({saving:e(R).getSaving()})));return[e,function(e){(0,i.dispatch)(R).setSaving(e),e?(0,i.dispatch)("core/editor").lockPostSaving():(0,i.dispatch)("core/editor").unlockPostSaving()}]}(),{hasFeaturedImage:l}=(0,i.useSelect)((e=>({hasFeaturedImage:e("core/editor").getEditedPostAttribute("featured_media")>0}))),u=(0,n.useCallback)((0,q.debounce)((async function(e,t,r,a){const n={};n[Y]=e,n[Z]=t,n[ee]=r,n[te]=a||[];try{s(!0);const e=await V()({url:Q,data:n,method:"POST",parse:!1});if(!e.ok)throw e;await e.json(),o(""),s(!1)}catch(e){o(e.statusText?`${J} ${e.status}: ${e.statusText}`:(0,c.__)("An error occurred.","autoshare-for-twitter")),s(!1)}}),250),[]);(0,n.useEffect)((()=>{u(e,a,t,r)}),[e,a,l,t,r,u])}const{siteUrl:ce,isLocalSite:ue,twitterURLLength:de}=adminAutoshareForTwitter;function me(){const e=e=>{if(!ue&&!isNaN(de))return Number(de);const t=e("core/editor").getPermalink();if(t)return t.length;const r=e("core/editor").getEditedPostAttribute("title");return r&&"rendered"in r?(ce+r.rendered).length:ce.length},{permalinkLength:t,maxLength:r}=(0,i.useSelect)((t=>({permalinkLength:e(t),maxLength:275-e(t)}))),[o,s]=re(),{tweetLength:u,overrideLengthClass:d}=(()=>{const e=t+o.length+5;return 280<=e?{tweetLength:(0,c.sprintf)(/* translators: %d is tweet message character count */ /* translators: %d is tweet message character count */
(0,c.__)("%d - Too Long!","autoshare-for-twitter"),e),overrideLengthClass:"over-limit"}:240<=e?{tweetLength:(0,c.sprintf)(/* translators: %d is tweet message character count */ /* translators: %d is tweet message character count */
(0,c.__)("%d - Getting Long!","autoshare-for-twitter"),e),overrideLengthClass:"near-limit"}:{tweetLength:`${e}`,overrideLengthClass:""}})(),m=(0,i.useSelect)((e=>e("core/editor").getEditedPostAttribute("status"))),[h,w]=(0,n.useState)("publish"===m);return(0,n.useEffect)((()=>{"publish"!==m||h||(s(""),w(!0))}),[m,h]),(0,a.createElement)(l.TextareaControl,{value:o,onChange:e=>{s(e)},className:"autoshare-for-twitter-tweet-text",maxLength:r,label:(0,a.createElement)("span",{style:{marginTop:"0.5rem",display:"block"},className:"autoshare-for-twitter-prepublish__message-label"},(0,a.createElement)("span",null,(0,c.__)("Custom message:","autoshare-for-twitter")," "),(0,a.createElement)("span",{id:"autoshare-for-twitter-counter-wrap",className:`alignright ${d}`},(0,a.createElement)((()=>(0,a.createElement)(l.Tooltip,{text:(0,c.__)("Count is inclusive of the post permalink which will be included in the final tweet.","autoshare-for-twitter")},(0,a.createElement)("div",null,u))),null)))})}const{connectedAccounts:he,connectAccountUrl:we}=adminAutoshareForTwitter;function ge(){const e=he?Object.values(he):[];return(0,a.createElement)("div",{className:"autoshare-for-twitter-accounts-wrapper"},e.map((e=>(0,a.createElement)(pe,{key:e.id,...e}))),(0,a.createElement)("span",{className:"connect-account-link"},(0,a.createElement)(l.ExternalLink,{href:we},(0,c.__)("Connect an account","autoshare-for-twitter"))))}function pe(e){const[t,r]=oe(),{id:n,name:o,username:s,profile_image_url:i}=e;return(0,a.createElement)("div",{className:"twitter-account-wrapper"},(0,a.createElement)("img",{src:i,alt:o,className:"twitter-account-profile-image"}),(0,a.createElement)("span",{className:"account-details"},(0,a.createElement)("strong",null,"@",s),(0,a.createElement)("br",null),o),(0,a.createElement)(l.ToggleControl,{checked:t&&t.includes(n),onChange:e=>{r(e?[...t,n]:t.filter((e=>e!==n)))},className:"autoshare-for-twitter-account-toggle"}))}const Ee=({errorMessage:e})=>(0,a.createElement)("span",null,e," ",e?.includes("When authenticating requests to the Twitter API v2 endpoints, you must use keys and tokens from a Twitter developer App that is attached to a Project. You can create a project via the developer portal.")&&(0,a.createElement)(l.ExternalLink,{href:"https://developer.twitter.com/en/docs/twitter-api/migrate/ready-to-migrate"},(0,c.__)("Learn more here.","autoshare-for-twitter")));function fe({messages:e}){return e&&e.message.length?(0,a.createElement)("div",{className:"autoshare-for-twitter-post-status"},e.message.map(((e,t)=>{const r=K(e.status);return(0,a.createElement)("div",{className:"autoshare-for-twitter-log",key:t},r,(0,a.createElement)("span",null,e.url?(0,a.createElement)(l.ExternalLink,{href:e.url},e.message):(0,a.createElement)(Ee,{errorMessage:e.message}),!!e.handle&&(0,a.createElement)("strong",null," - @"+e.handle)))})),(0,a.createElement)(l.CardDivider,null)):null}function Te(){const[e,t]=ae(),[r,n]=function(){const{overriding:e}=(0,i.useSelect)((e=>({overriding:e(R).getOverriding()}))),{setOverriding:t}=(0,i.useDispatch)(R);return[e,t]}(),[o,s]=ne(),[u]=se(),d=ie(),m=(0,i.select)("core/editor").getCurrentPostAttribute("autoshare_for_twitter_status");return le(),(0,a.createElement)(a.Fragment,null,(0,a.createElement)(fe,{messages:m}),(0,a.createElement)(l.ToggleControl,{label:e?(0,c.__)("Post to X/Twitter when published","autoshare-for-twitter"):(0,c.__)("Don't post to X/Twitter","autoshare-for-twitter"),checked:e,onChange:e=>{t(e)},className:"autoshare-for-twitter-toggle-control"}),e&&d&&(0,a.createElement)(l.ToggleControl,{label:(0,c.__)("Use featured image in Post to X/Twitter","autoshare-for-twitter"),checked:o,onChange:()=>{s(!o)},className:"autoshare-for-twitter-toggle-control"}),e&&(0,a.createElement)(ge,null),e&&(0,a.createElement)("div",{className:"autoshare-for-twitter-prepublish__override-row"},r&&(0,a.createElement)(me,null),(0,a.createElement)(l.Button,{isLink:!0,onClick:()=>{n(!r)}},r?(0,c.__)("Hide","autoshare-for-twitter"):(0,c.__)("Edit","autoshare-for-twitter"))),(0,a.createElement)("div",null,u))}const be=(0,window.wp.compose.compose)((0,i.withSelect)((e=>({statusMessage:e("core/editor").getCurrentPostAttribute("autoshare_for_twitter_status")}))))((function(){const e=ie(),[t,r]=ne(),[,o]=re(),[s,u]=(0,n.useState)(!1),[d,m]=(0,n.useState)(!1),{messages:h}=(0,i.useSelect)((e=>({messages:e("core/editor").getCurrentPostAttribute("autoshare_for_twitter_status")}))),[w,g]=(0,n.useState)(h);if(le(),w&&!w.message.length)return null;const p=(0,a.createElement)(l.Icon,{icon:(0,a.createElement)("svg",{viewBox:"0 0 28 28",xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28","aria-hidden":"true",focusable:"false"},(0,a.createElement)("path",{d:"M6.5 12.4L12 8l5.5 4.4-.9 1.2L12 10l-4.5 3.6-1-1.2z"}))}),E=(0,a.createElement)(l.Icon,{icon:(0,a.createElement)("svg",{viewBox:"0 0 28 28",xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28","aria-hidden":"true",focusable:"false"},(0,a.createElement)("path",{d:"M17.5 11.6L12 16l-5.5-4.4.9-1.2L12 14l4.5-3.6 1 1.2z"}))});return(0,a.createElement)(a.Fragment,null,(0,a.createElement)(fe,{messages:w}),(0,a.createElement)(l.Button,{className:"autoshare-for-twitter-tweet-now",variant:"link",text:(0,c.__)("Post to X/Twitter now","autoshare-for-twitter"),onClick:()=>m(!d),iconPosition:"right",icon:d?p:E}),d&&(0,a.createElement)(a.Fragment,null,e&&(0,a.createElement)(l.ToggleControl,{label:(0,c.__)("Use featured image in Post to X/Twitter","autoshare-for-twitter"),checked:t,onChange:()=>{r(!t)},className:"autoshare-for-twitter-toggle-control"}),(0,a.createElement)(ge,null),(0,a.createElement)(me,null),(0,a.createElement)(l.Button,{variant:"primary",className:"autoshare-for-twitter-re-tweet",text:s?(0,c.__)("Posting to X/Twitter…","autoshare-for-twitter"):(0,c.__)("Post to X/Twitter","autoshare-for-twitter"),onClick:()=>{(async()=>{u(!0);const e=await(0,i.select)("core/editor").getCurrentPostId(),t=new FormData;t.append("action",adminAutoshareForTwitter.retweetAction),t.append("nonce",adminAutoshareForTwitter.nonce),t.append("post_id",e);const r=await fetch(ajaxurl,{method:"POST",body:t}),{data:a}=await r.json();a.is_retweeted&&o(""),g(a),u(!1)})()}})))}));(0,i.registerStore)(R,{reducer:function(e=v,t){switch(t.type){case u:return{...e,autoshareEnabled:t.autoshareEnabled};case d:return{...e,errorMessage:t.errorMessage};case m:return{...e,loaded:!0};case h:return{...e,overriding:t.overriding};case w:return{...e,saving:t.saving};case g:return{...e,tweetText:t.tweetText};case p:return{...e,allowTweetImage:t.allowTweetImage};case E:return{...e,tweetAccounts:t.tweetAccounts}}},actions:t,selectors:r});class _e extends n.Component{constructor(e){super(e),this.state={enabledText:""},this.maybeSetEnabledText=this.maybeSetEnabledText.bind(this)}componentDidMount(){(0,i.dispatch)(R).setLoaded(),(0,i.subscribe)(this.maybeSetEnabledText)}maybeSetEnabledText(){try{const e=(0,i.select)(R).getAutoshareEnabled(),t=e?(0,c.__)("This post will be posted to X/Twitter","autoshare-for-twitter"):(0,c.__)("This post will not be posted to X/Twitter","autoshare-for-twitter");t!==this.state.enabledText&&this.setState({enabled:e,enabledText:t})}catch(e){}}render(){const{enabled:e,enabledText:t}=this.state,r=e?W:U,n=(0,a.createElement)(l.Icon,{className:"autoshare-for-twitter-icon components-panel__icon",icon:r,size:24});return(0,a.createElement)(s.PluginPrePublishPanel,{title:t,icon:n,className:"autoshare-for-twitter-pre-publish-panel"},(0,a.createElement)(Te,null))}}class ve extends n.Component{constructor(e){super(e),this.state={enabledText:""},this.maybeSetEnabledText=this.maybeSetEnabledText.bind(this)}componentDidMount(){(0,i.dispatch)(R).setLoaded(),(0,i.subscribe)(this.maybeSetEnabledText)}maybeSetEnabledText(){try{const e=(0,i.select)(R).getAutoshareEnabled(),t=e?(0,c.__)("Autopost to X/Twitter enabled","autoshare-for-twitter"):(0,c.__)("Autopost to X/Twitter disabled","autoshare-for-twitter");t!==this.state.enabledText&&this.setState({enabledText:t,enabled:e})}catch(e){}}render(){if("publish"===(0,i.select)("core/editor").getCurrentPostAttribute("status")){const e=(0,i.select)("core/editor").getCurrentPostAttribute("autoshare_for_twitter_status");let t="";return e&&e.message&&e.message.length&&(t=e.message[e.message.length-1].status||""),(0,a.createElement)(s.PluginDocumentSettingPanel,{title:(0,c.__)("Autopost to X/Twitter","autoshare-for-twitter"),icon:K(t),className:"autoshare-for-twitter-editor-panel"},(0,a.createElement)(be,null))}const{enabled:e,enabledText:t}=this.state,r=e?W:U,n=(0,a.createElement)(l.Icon,{className:"autoshare-for-twitter-icon components-panel__icon",icon:r,size:24});return(0,a.createElement)(s.PluginDocumentSettingPanel,{title:t,icon:n,className:"autoshare-for-twitter-editor-panel"},(0,a.createElement)(Te,null))}}(0,o.registerPlugin)("autoshare-for-twitter-editor-panel",{render:ve}),(0,o.registerPlugin)("autoshare-for-twitter-pre-publish-panel",{render:_e}),(0,o.registerPlugin)("autoshare-for-twitter-post-publish-panel",{render:()=>(0,a.createElement)(s.PluginPostPublishPanel,{className:"my-plugin-post-status-info"},(0,a.createElement)(be,null))})})();