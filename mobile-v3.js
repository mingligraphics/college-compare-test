/* Mobile navigation state and local preview behavior. */
const stateFields=['search','region','tuition','size','international','programCategory','program','sort'];
const homeTitle='明希教育｜美国大学选校指南';
let routeBusy=false, listScroll=0, searchTimer, stateReady=false;
let initialSavedState;try{initialSavedState=JSON.parse(sessionStorage.getItem('cc-mobile-v3')||'null')}catch{}
function saveState(){
 if(!stateReady)return;
 const state={values:Object.fromEntries(stateFields.map(id=>[id,$(id).value])),page,selected:[...selected],scroll:listScroll};
 try{sessionStorage.setItem('cc-mobile-v3',JSON.stringify(state))}catch{}
 const u=new URL(location.href);for(const id of stateFields){if($(id).value)u.searchParams.set(id,$(id).value);else u.searchParams.delete(id)}
 history.replaceState({...history.state,mobileV3:true},'',u);
}
function restoreInitial(){
 if(!schools.length){stateReady=true;return;}
 const params=new URLSearchParams(location.search);const saved=initialSavedState;
 if(saved){if(!stateFields.some(id=>params.has(id)))for(const id of stateFields)$(id).value=saved.values?.[id]|| (id==='sort'?'rank':'');
 apply();page=Math.max(1,Number(saved.page)||1);if(!params.has('school'))selected=(saved.selected||[]).filter(id=>schools.some(s=>s.school_id===id)).slice(0,2);render();tray();listScroll=Number(saved.scroll)||0;if(!params.has('view'))requestAnimationFrame(()=>scrollTo(0,listScroll));}
 const requested=params.getAll('school'),view=params.get('view');
 if((view==='detail'&&(requested.length!==1||!schools.some(s=>s.school_id===requested[0])))||(view==='compare'&&(requested.length!==2||new Set(requested).size!==2||requested.some(id=>!schools.some(s=>s.school_id===id))))){modal('<h2>分享链接已失效或学校不存在</h2><p>请返回列表重新选择学校。</p><button id="close">返回列表</button>')}
 stateReady=true;updateChips();
}
function updateChips(){
 $('activeFilters').replaceChildren();for(const id of stateFields.filter(id=>!['sort','program'].includes(id))){if(!$(id).value)continue;const b=document.createElement('button');b.textContent=(id==='search'?$('search').value:$(id).selectedOptions[0]?.textContent||$(id).value)+' ×';b.onclick=()=>{$(id).value='';if(id==='programCategory')$('program').value='';apply();saveState();updateChips();countEvent(id==='search'?'search':'filter')};$('activeFilters').append(b)}
 if($('activeFilters').children.length){const b=document.createElement('button');b.textContent='全部清除';b.onclick=()=>$('reset').click();$('activeFilters').append(b)}
}
function setRoute(view,ids=[]){
 if(routeBusy)return;listScroll=scrollY;saveState();const u=new URL(location.href);u.searchParams.delete('school');u.searchParams.delete('view');if(view)u.searchParams.set('view',view);ids.forEach(id=>u.searchParams.append('school',id));
 if(u.href!==location.href)history.pushState({mobileV3:true,overlay:true},'',u);updateTitle(view,ids);
}
const shareDescription='301所美国大学最新官方数据，找到最适合你的大学';
function shareTitle(rows){return rows.length?rows.map(s=>s.school_name_cn||s.school_name).join('、')+(rows.length===2?'对比':''):homeTitle}
function updateTitle(view,ids){
 const rows=ids.map(id=>schools.find(s=>s.school_id===id)).filter(Boolean);
 document.title=shareTitle(rows);
 const metadata={'meta[name="description"]':shareDescription,'meta[property="og:title"]':document.title,'meta[property="og:description"]':shareDescription,'meta[property="og:url"]':rows.length?CollegeShare.link(rows):new URL('./',location.href).href,'meta[name="twitter:title"]':document.title,'meta[name="twitter:description"]':shareDescription};
 for(const [selector,value] of Object.entries(metadata)){const tag=document.querySelector(selector);if(tag)tag.content=value}
}

const originalDetail=detail,originalCompare=compare,originalAbout=showAbout;
detail=async function(id){if(!schools.some(s=>s.school_id===id))return;setRoute('detail',[id]);countEvent('detail');const work=originalDetail(id);addLinkActions([schools.find(s=>s.school_id===id)]);await work};
compare=async function(){if(selected.length!==2){notify('请先加入两所大学再比较');return}setRoute('compare',selected);countEvent('compare');await originalCompare()};
showAbout=function(){setRoute('about');originalAbout();wireConsultation($('dialogContent'))};
const originalComparison=showComparison;showComparison=function(rows){originalComparison(rows);addLinkActions(rows);wireConsultation($('dialogContent'))};
function wireConsultation(host){host.querySelectorAll('.contact-qr').forEach(a=>{const section=a.parentElement;section.querySelector('h3')?.remove();section.querySelector('small')?.remove();a.hidden=true;const b=document.createElement('button');b.textContent='预约明希团队一对一诊断';b.onclick=()=>{a.hidden=false;countEvent('consultation')};a.before(b)})}
async function shareLink(rows=[]){
 const url=rows.length?CollegeShare.link(rows):(()=>{const u=new URL(location.href);u.searchParams.delete('view');u.searchParams.delete('school');return u.href})(),title=shareTitle(rows);
 updateTitle(rows.length===2?'compare':rows.length?'detail':null,rows.map(s=>s.school_id));
 if(/MicroMessenger/i.test(navigator.userAgent)){await copyLink(url);notify('链接已准备，请点击微信右上角「···」转发给朋友');return}
 if(navigator.share){try{await navigator.share({title,text:shareDescription,url});return}catch(e){if(e.name==='AbortError')return}}
 await copyLink(url);
}
async function copyLink(url){try{await navigator.clipboard.writeText(url);notify('链接已复制')}catch{prompt('请复制以下链接',url)}}
function addLinkActions(rows){const box=document.createElement('div');box.className='share-link-actions';const share=document.createElement('button');share.textContent='分享给家人一起看';share.onclick=()=>shareLink(rows);box.append(share);($('dialogContent').querySelector('.next-step .share-link-actions')||$('dialogContent')).append(box)}
$('homeShare').onclick=()=>shareLink();
$('homeConsult').onclick=()=>{$('homeQR').hidden=false;countEvent('consultation')};
for(const id of stateFields)$(id).addEventListener(id==='search'?'input':'change',()=>{listScroll=0;scrollTo(0,0);saveState();updateChips();if(id==='search'){clearTimeout(searchTimer);searchTimer=setTimeout(()=>countEvent('search'),500)}else if(id!=='sort')countEvent('filter')});
$('reset').addEventListener('click',()=>{listScroll=0;saveState();updateChips()});
const originalAdd=add;add=function(id){originalAdd(id);saveState()};
addEventListener('scroll',()=>{if(!$('dialog').open){listScroll=scrollY;saveState()}},{passive:true});
$('dialog').addEventListener('close',()=>{detailRequest++;comparisonRequest++;if(routeBusy)return;if(history.state?.overlay){history.back()}else{const u=new URL(location.href);u.searchParams.delete('view');u.searchParams.delete('school');history.replaceState({mobileV3:true},'',u);updateTitle(null,[]);requestAnimationFrame(()=>scrollTo(0,listScroll))}});
addEventListener('popstate',()=>{routeBusy=true;const p=new URLSearchParams(location.search),ids=p.getAll('school');if($('dialog').open)$('dialog').close();if(p.get('view')==='detail'&&ids.length===1&&schools.some(s=>s.school_id===ids[0]))detail(ids[0]);else if(p.get('view')==='compare'&&ids.length===2){selected=ids.filter(id=>schools.some(s=>s.school_id===id));compare()}else if(p.get('view')==='about')showAbout();else{updateTitle(null,[]);render();tray();requestAnimationFrame(()=>scrollTo(0,listScroll))}updateTitle(p.get('view'),ids);setTimeout(()=>routeBusy=false,0)});


$("compare").onclick=compare;$("compareNav").onclick=compare;$("aboutNav").onclick=showAbout;
Promise.all([ProgramFilters.load(),loadDirectory()]).then(restoreInitial);

new MutationObserver(()=>tray()).observe($('dialog'),{attributes:true,attributeFilter:['open']});
