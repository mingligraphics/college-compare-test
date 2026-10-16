/* Optional analytics must never be a dependency of the college UI. */
(()=>{'use strict';
 const live=location.hostname==='mingligraphics.github.io' && /^\/college-compare-test\/(?:index\.html)?$/.test(location.pathname);
 let timer,composing=false;
 const search=document.getElementById('search');
 function searched(){clearTimeout(timer);if(composing||!search.value.trim())return;timer=setTimeout(()=>{try{CollegeMetrics.increment('school_search')}catch{}},700)}
 search?.addEventListener('compositionstart',()=>{composing=true;clearTimeout(timer)});
 search?.addEventListener('compositionend',()=>{composing=false;searched()});
 search?.addEventListener('input',searched);
 document.addEventListener('click',e=>{try{
   const t=e.target.closest('button,a');if(!t)return;
   if(t.matches('[data-detail]'))CollegeMetrics.intent('school_detail_view');
   if(t.matches('#compare,#compareNav'))CollegeMetrics.intent('school_compare');
   if(t.matches('[data-consult],#trayConsult,.consult-qr,.qr-save'))CollegeMetrics.increment('consultation_click');
 }catch{}},true);
 // One impression per visible QR element; no counting hidden/covered background cards.
 if('IntersectionObserver' in window){
  const seen=new WeakSet();
  const io=new IntersectionObserver(entries=>{for(const x of entries){if(!x.isIntersecting||x.intersectionRatio<0.5||seen.has(x.target))continue;
   const dialog=document.querySelector('dialog[open]');if(dialog&&!dialog.contains(x.target))continue;
   if(!x.target.complete||!x.target.naturalWidth)continue;
   seen.add(x.target);try{CollegeMetrics.increment('qr_display')}catch{}
  }},{threshold:[0,0.5,1]});
  const watch=()=>document.querySelectorAll('.consult-qr img').forEach(img=>io.observe(img));
  new MutationObserver(watch).observe(document.getElementById('dialogContent'),{childList:true,subtree:true});watch();
 }
 function start(){try{
  const token=window.MingxiAnalyticsConfig?.cloudflareToken;
  if(!live||navigator.doNotTrack==='1'||! /^[a-f0-9]{32}$/i.test(token||''))return;
  const s=document.createElement('script');s.async=true;s.type='module';
  s.src='https://static.cloudflareinsights.com/beacon.min.js';
  s.dataset.cfBeacon=JSON.stringify({token,spa:false});s.onerror=()=>{};
  document.head.append(s);
 }catch{}}
 // Wait for UI load; idle injection is independent of every app/data promise.
 const later=()=>('requestIdleCallback' in window?requestIdleCallback(start,{timeout:3000}):setTimeout(start,1000));
 if(document.readyState==='complete')later();else window.addEventListener('load',later,{once:true});
})();
