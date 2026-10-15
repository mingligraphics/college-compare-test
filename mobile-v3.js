/* Mobile navigation state and local preview behavior. */
const stateFields=['search','region','tuition','size','international','programCategory','program','sort'];
const homeTitle='美国大学选校指南';
let routeBusy=false, listScroll=0, searchTimer, stateReady=false;
let initialSavedState;try{initialSavedState=JSON.parse(sessionStorage.getItem('cc-mobile-v3')||'null')}catch{}
function saveState(){
 if(!stateReady)return;
 const state={values:Object.fromEntries(stateFields.map(id=>[id,$(id).value])),page,selected:[...selected],scroll:listScroll};
 try{sessionStorage.setItem('cc-mobile-v3',JSON.stringify(state))}catch{}
 const u=new URL(location.href);u.searchParams.delete('state');for(const id of stateFields){if($(id).value)u.searchParams.set(id,$(id).value);else u.searchParams.delete(id)}
 history.replaceState({...history.state,mobileV3:true},'',u);
}
function viewIsList(params){return !['compare','detail'].includes(params.get('view'))}
function restoreInitial(){
 if(!schools.length){stateReady=true;return;}
 const params=new URLSearchParams(location.search);const saved=initialSavedState;
 if(saved){if(!stateFields.some(id=>params.has(id))){for(const id of stateFields)$(id).value=saved.values?.[id]|| (id==='sort'?'rank':'');}
 apply();page=Math.max(1,Number(saved.page)||1);if(viewIsList(params)||(params.get('view')==='detail'&&saved.selected?.includes(params.get('school'))))selected=(saved.selected||[]).filter(id=>schools.some(s=>s.school_id===id)).slice(0,2);render();tray();listScroll=Number(saved.scroll)||0;if(!params.has('view'))requestAnimationFrame(()=>scrollTo(0,listScroll));}
 const requested=params.getAll('school'),view=params.get('view');
 if((view==='detail'&&(requested.length!==1||!schools.some(s=>s.school_id===requested[0])))||(view==='compare'&&(requested.length!==2||new Set(requested).size!==2||requested.some(id=>!schools.some(s=>s.school_id===id))))){modal('<h2>分享链接已失效或学校不存在</h2><p>请返回列表重新选择学校。</p><button id="close">返回列表</button>')}
 stateReady=true;saveState();updateChips();
}
function updateChips(){
 $('activeFilters').replaceChildren();for(const id of stateFields.filter(id=>!['sort','program'].includes(id))){if(!$(id).value)continue;const b=document.createElement('button');b.textContent=(id==='search'?$('search').value:$(id).selectedOptions[0]?.textContent||$(id).value)+' ×';b.onclick=()=>{$(id).value='';if(id==='programCategory')$('program').value='';apply();saveState();updateChips();countEvent(id==='search'?'search':'filter')};$('activeFilters').append(b)}
 if($('activeFilters').children.length){const b=document.createElement('button');b.textContent='全部清除';b.onclick=()=>$('reset').click();$('activeFilters').append(b)}
}
function setRoute(view,ids=[]){
 if(routeBusy)return;if(!$('dialog').open){listScroll=scrollY;saveState();}const u=new URL(location.href);u.hash='';u.searchParams.delete('school');u.searchParams.delete('view');if(view)u.searchParams.set('view',view);ids.forEach(id=>u.searchParams.append('school',id));
 if(u.href!==location.href)history.pushState({mobileV3:true,overlay:true},'',u);updateTitle(view,ids);
}
const shareDescription='300所美国大学最新数据，比较费用、优势专业和申请要求';
function shareTitle(rows){return rows.length?rows.map(s=>s.school_name_cn||s.school_name).join('、')+(rows.length===2?'对比':''):homeTitle}
function updateTitle(view,ids){
 const rows=ids.map(id=>schools.find(s=>s.school_id===id)).filter(Boolean);
 document.title=view==='about'?'关于我们｜明希教育':shareTitle(rows);
 const metadata={'meta[name="description"]':shareDescription,'meta[property="og:title"]':document.title,'meta[property="og:description"]':shareDescription,'meta[property="og:url"]':view==='about'?new URL('?view=about',location.href).href:rows.length?CollegeShare.link(rows):new URL('./',location.href).href,'meta[name="twitter:title"]':document.title,'meta[name="twitter:description"]':shareDescription};
 for(const [selector,value] of Object.entries(metadata)){const tag=document.querySelector(selector);if(tag)tag.content=value}
}

const originalDetail=detail,originalCompare=compare,originalAbout=showAbout;
detail=async function(id){if(!schools.some(s=>s.school_id===id))return;setRoute('detail',[id]);countEvent('detail');const work=originalDetail(id);addLinkActions([schools.find(s=>s.school_id===id)]);await work};
compare=async function(){if(selected.length!==2){notify('请先加入两所大学再比较');return}setRoute('compare',selected);countEvent('compare');await originalCompare()};
showAbout=function(){const consultAnchor=location.hash==='#aboutConsult';setRoute('about');originalAbout();wireConsultation($('dialogContent'));$('dialog').setAttribute('aria-labelledby','aboutTitle');if(consultAnchor)requestAnimationFrame(()=>$('aboutConsult')?.scrollIntoView({block:'start'}))};
const originalComparison=showComparison;showComparison=function(rows){originalComparison(rows);addReplacementActions(rows);addLinkActions(rows);wireConsultation($('dialogContent'))};
function wireConsultation(host){host.querySelectorAll('.contact-qr').forEach(a=>{const section=a.parentElement;section.querySelector('h3')?.remove();section.querySelector('small')?.remove();a.hidden=true;const b=document.createElement('button');b.textContent='预约免费 20 分钟初谈';b.onclick=()=>{a.hidden=false;countEvent('consultation')};a.before(b)})}
async function shareLink(rows=[]){
 const url=rows.length?CollegeShare.link(rows):(()=>{const u=new URL(location.href);u.searchParams.delete('view');u.searchParams.delete('school');return u.href})(),title=shareTitle(rows);
 updateTitle(rows.length===2?'compare':rows.length?'detail':null,rows.map(s=>s.school_id));
 if(/MicroMessenger/i.test(navigator.userAgent)){await copyLink(url);notify('链接已准备，请点击微信右上角「···」转发给朋友');return}
 if(navigator.share){try{await navigator.share({title,text:shareDescription,url});return}catch(e){if(e.name==='AbortError')return}}
 await copyLink(url);
}
async function copyLink(url){try{await navigator.clipboard.writeText(url);notify('链接已复制')}catch{prompt('请复制以下链接',url)}}
function addLinkActions(rows){const box=document.createElement('div');box.className='share-link-actions';const share=document.createElement('button');share.textContent=$('dialog').classList.contains('school-detail')?'分享给家人':'分享给家人一起看';share.onclick=()=>shareLink(rows);box.append(share);($('dialogContent').querySelector('.share-link-actions')||$('dialogContent')).append(box)}
$('homeShare').onclick=()=>shareLink();
document.addEventListener('click',event=>{if(event.target.closest('.consult-qr'))countEvent('consultation')});
for(const id of stateFields)$(id).addEventListener(id==='search'?'input':'change',()=>{listScroll=0;scrollTo(0,0);saveState();updateChips();if(id==='search'){clearTimeout(searchTimer);searchTimer=setTimeout(()=>countEvent('search'),500)}else if(id!=='sort')countEvent('filter')});
$('reset').addEventListener('click',()=>{listScroll=0;saveState();updateChips()});
const originalAdd=add;add=function(id){originalAdd(id);saveState()};
addEventListener('scroll',()=>{if(!$('dialog').open){listScroll=scrollY;saveState()}},{passive:true});
$('dialog').addEventListener('close',()=>{$('dialog').removeAttribute('aria-labelledby');detailRequest++;comparisonRequest++;if(routeBusy)return;if(history.state?.overlay){history.back()}else{const u=new URL(location.href);u.searchParams.delete('view');u.searchParams.delete('school');history.replaceState({mobileV3:true},'',u);updateTitle(null,[]);requestAnimationFrame(()=>scrollTo(0,listScroll))}});
addEventListener('popstate',()=>{routeBusy=true;const p=new URLSearchParams(location.search),ids=p.getAll('school');for(const id of stateFields)$(id).value=p.get(id)||(id==='sort'?'rank':'');apply();updateChips();if($('dialog').open)$('dialog').close();if(p.get('view')==='detail'&&ids.length===1&&schools.some(s=>s.school_id===ids[0]))detail(ids[0]);else if(p.get('view')==='compare'&&ids.length===2&&new Set(ids).size===2&&ids.every(id=>schools.some(s=>s.school_id===id))){selected=[...ids];persistSelection();compare()}else if(p.get('view')==='about')showAbout();else{updateTitle(null,[]);render();tray();requestAnimationFrame(()=>scrollTo(0,listScroll))}updateTitle(p.get('view'),ids);setTimeout(()=>routeBusy=false,0)});


$("compare").onclick=compare;$("compareNav").onclick=compare;$("aboutNav").onclick=e=>{e.preventDefault();showAbout()};
if(new URLSearchParams(location.search).get('view')==='about')showAbout();
Promise.all([ProgramFilters.load(),loadDirectory()]).then(restoreInitial);

new MutationObserver(()=>tray()).observe($('dialog'),{attributes:true,attributeFilter:['open']});

// Replacement stays within this comparison history entry, so Back returns to the list.
function persistSelection(){
 try{localStorage.setItem('cc-discovery-prototype',JSON.stringify(selected))}catch{}
 saveState();render();tray();
}
$('clearComparison').onclick=()=>{selected=[];persistSelection();notify('已清空比较选择')};
function addReplacementActions(rows){
 const picker=document.createElement('section');picker.className='school-picker';picker.hidden=true;
 picker.innerHTML='<div class="dialogtop"><strong id="pickerTitle">更换学校</strong><button type="button" id="cancelReplacement">取消</button></div><input type="search" id="replacementSearch" aria-labelledby="pickerTitle" placeholder="搜索中文、英文名或简称"><p id="replacementCount" role="status"></p><div class="picker-results" id="replacementResults"></div>';
 $('dialogContent').querySelector('.compare-names').after(picker);
 let slot=0,trigger;
 const normalize=value=>String(value||'').normalize('NFKC').toLocaleLowerCase().replace(/[\s.·・()（）-]/g,'');
 function results(){
  const query=normalize($('replacementSearch').value),other=selected[1-slot];
  const matches=schools.filter(s=>s.school_id!==other&&[s.school_name,s.school_name_cn,s.short_name,s.school_id].some(v=>normalize(v).includes(query)));
  $('replacementCount').textContent=matches.length?'找到 '+matches.length+' 所大学':'没有找到匹配的大学，请尝试中文、英文名或简称';
  $('replacementResults').innerHTML=matches.map(s=>`<button type="button" data-replacement="${esc(s.school_id)}" ${s.school_id===selected[slot]?'disabled':''}>${esc(s.school_name_cn||s.school_name)}${s.school_id===selected[slot]?' · 当前学校':''}<small>${esc(s.school_name)} ${esc(s.short_name||'')}</small></button>`).join('');
  $('replacementResults').querySelectorAll('[data-replacement]').forEach(b=>b.onclick=()=>{
   const id=b.dataset.replacement;if(id===selected[1-slot]||!schools.some(s=>s.school_id===id)){notify('请选择另一所大学');return}
   selected[slot]=id;persistSelection();
   const u=new URL(location.href);u.hash='';u.searchParams.delete('school');selected.forEach(id=>u.searchParams.append('school',id));u.searchParams.set('view','compare');
   history.replaceState({...history.state},'',u);updateTitle('compare',selected);compare();
  });
 }
 rows.forEach((s,i)=>{const b=document.createElement('button');b.type='button';b.textContent='⇄';b.className='replace-school';b.title='更换学校';b.setAttribute('aria-label','更换'+(s.school_name_cn||s.school_name));b.onclick=()=>{slot=i;trigger=b;picker.hidden=false;$('pickerTitle').textContent='更换'+(s.school_name_cn||s.school_name);$('replacementSearch').value='';results();$('replacementSearch').focus()};$('compareSchool'+i).append(b)});
 $('replacementSearch').oninput=results;
 $('cancelReplacement').onclick=()=>{picker.hidden=true;trigger?.focus()};
 picker.addEventListener('keydown',e=>{if(e.key==='Escape'){e.preventDefault();e.stopPropagation();picker.hidden=true;trigger?.focus()}});
}

// Each mobile sheet uses the same underlying selects and saved URL/session state.
document.querySelectorAll('.filter-menu').forEach((menu,index)=>{
 const panel=menu.querySelector('.filter-panel'),summary=menu.querySelector('summary');
 panel.id='filterSheet'+index;panel.tabIndex=-1;panel.setAttribute('role','region');panel.setAttribute('aria-label',summary.firstChild.textContent.trim()+'筛选');summary.setAttribute('aria-controls',panel.id);summary.setAttribute('aria-expanded','false');
 const clear=document.createElement('button');clear.type='button';clear.className='filter-clear';clear.textContent='清除此项筛选';clear.onclick=()=>{const select=panel.querySelector('select');select.value='';select.dispatchEvent(new Event('change',{bubbles:true}));menu.open=false;summary.focus()};panel.append(clear);
 menu.addEventListener('toggle',()=>{summary.setAttribute('aria-expanded',String(menu.open));if(menu.open){document.querySelector('.tray').hidden=true;panel.focus()}else{tray()}});
});
const v5Tray=tray;tray=function(){v5Tray();if(document.querySelector('.filter-menu[open]'))document.querySelector('.tray').hidden=true};
document.addEventListener('click',event=>{if(event.target.closest('.filter-close,.filter-shade'))event.target.closest('.filter-menu').querySelector('summary').focus()});

// Keep anchored menus aligned when the page or visual viewport moves.
addEventListener("scroll",()=>document.querySelectorAll(".filter-menu[open]").forEach(positionFilterMenu),true);
visualViewport?.addEventListener("resize",()=>document.querySelectorAll(".filter-menu[open]").forEach(positionFilterMenu));
