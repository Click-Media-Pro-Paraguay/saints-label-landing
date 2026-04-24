import { useEffect } from "react";

// ============================================================
// Voluum landing-page tracker (promopage.net / dtpCallback).
//
// The IIFE string is the exact snippet Voluum provides for its
// landing-page template. CRITICAL: the regex fragments inside it
// (e.g. `\\s+`) must remain double-backslash in this TypeScript
// source. TS template literals double every backslash, so `\\s` in
// this file is what the browser sees as `\s`. If you ever paste
// this string into raw HTML, halve the backslashes.
// See .claude/learnings.md → "Pasting Voluum's minified IIFE".
//
// The useVoluumLandingPixel(landingId) hook injects the script
// once per document, guarded by a DOM-id lookup so React Strict
// Mode's double-mount doesn't double-inject. Each landing route
// MUST pass a unique `landingId` so client-side navigation
// between two landings in one session doesn't reuse the guard.
// ============================================================

export const VOLUUM_DELEGATE_CH =
  "sec-ch-ua https://promopage.net; sec-ch-ua-mobile https://promopage.net; sec-ch-ua-arch https://promopage.net; sec-ch-ua-model https://promopage.net; sec-ch-ua-platform https://promopage.net; sec-ch-ua-platform-version https://promopage.net; sec-ch-ua-bitness https://promopage.net; sec-ch-ua-full-version-list https://promopage.net; sec-ch-ua-full-version https://promopage.net";

export const VOLUUM_LANDING_IIFE = `(function(e,d,k,n,u,v,g,w,C,f,p,x,D,c,q,r,h,t,y,G,z){function A(){for(var a=d.querySelectorAll(".dtpcnt"),b=0,l=a.length;b<l;b++)a[b][w]=a[b][w].replace(/(^|\\s+)dtpcnt($|\\s+)/g,"")}function E(a,b,l,F){var m=new Date;m.setTime(m.getTime()+(F||864E5));d.cookie=a+"="+b+"; "+l+"samesite=Strict; expires="+m.toGMTString()+"; path=/";k.setItem(a,b);k.setItem(a+"-expires",m.getTime())}function B(a){var b=d.cookie.match(new RegExp("(^| )"+a+"=([^;]+)"));return b?b.pop():k.getItem(a+"-expires")&&+k.getItem(a+"-expires")>(new Date).getTime()?k.getItem(a):null}z="https:"===e.location.protocol?"secure; ":"";e[f]||(e[f]=function(){(e[f].q=e[f].q||[]).push(arguments)},r=d[u],d[u]=function(){r&&r.apply(this,arguments);if(e[f]&&!e[f].hasOwnProperty("params")&&/loaded|interactive|complete/.test(d.readyState))for(;c=d[v][p++];)/\\/?click\\/?($|(\\/[0-9]+)?$)/.test(c.pathname)&&(c[g]="javascrip"+e.postMessage.toString().slice(4,5)+":"+f+'.l="'+c[g]+'",void 0')},setTimeout(function(){(t=RegExp("[?&]cpid(=([^&#]*)|&|#|$)").exec(e.location.href))&&t[2]&&(h=t[2],y=B("vl-"+h));var a=B("vl-cep"),b=location[g];if("savedCep"===D&&a&&(!h||"undefined"===typeof h)&&0>b.indexOf("cep=")){var l=-1<b.indexOf("?")?"&":"?";b+=l+a}c=d.createElement("script");q=d.scripts[0];c.defer=1;c.src=x+(-1===x.indexOf("?")?"?":"&")+"lpref="+n(d.referrer)+"&lpurl="+n(b)+"&lpt="+n(d.title)+"&vtm="+(new Date).getTime()+(y?"&uw=no":"");c[C]=function(){for(p=0;c=d[v][p++];)/dtpCallback\\.l/.test(c[g])&&(c[g]=decodeURIComponent(c[g]).match(/dtpCallback\\.l="([^"]+)/)[1]);A()};q.parentNode.insertBefore(c,q);h&&E("vl-"+h,"1",z)},0),setTimeout(A,7E3))})(window,document,localStorage,encodeURIComponent,"onreadystatechange","links","href","className","onerror","dtpCallback",0,"https://promopage.net/d/.js","savedCep")`;

export function useVoluumLandingPixel(landingId: string) {
  useEffect(() => {
    const scriptId = `${landingId}-script`;
    if (document.getElementById(scriptId)) return;

    const ch = document.createElement("meta");
    ch.id = `${landingId}-delegate-ch`;
    ch.httpEquiv = "delegate-ch";
    ch.content = VOLUUM_DELEGATE_CH;
    document.head.appendChild(ch);

    const hideCls = document.createElement("style");
    hideCls.id = `${landingId}-dtpcnt`;
    hideCls.textContent = ".dtpcnt{opacity: 0;}";
    document.head.appendChild(hideCls);

    const boot = document.createElement("script");
    boot.id = scriptId;
    boot.textContent = VOLUUM_LANDING_IIFE;
    document.body.appendChild(boot);

    const noJs = document.createElement("noscript");
    noJs.id = `${landingId}-noscript`;
    const fallback = document.createElement("link");
    fallback.href = "https://promopage.net/d/.js?noscript=true&lpurl=";
    fallback.rel = "stylesheet";
    noJs.appendChild(fallback);
    document.body.appendChild(noJs);
  }, [landingId]);
}
