/* Display-only index. Original program facts and provenance are in program-index.json. */
const ProgramFilters=(()=>{
 let data=null;
 const el=id=>document.getElementById(id);
 function entries(id){return data?.schools[id]||[]}
 function matches(id,category,program){return !category&&!program||entries(id).some(p=>(!category||data.mapping[p.name_cn]?.categories.includes(category))&&(!program||p.name_cn===program))}
 function options(){
  if(!data)return;
  const category=el('programCategory').value,old=el('program').value;
  const names=Object.values(data.mapping).filter(p=>!category||p.categories.includes(category)).map(p=>p.name).sort((a,b)=>a.localeCompare(b,'zh-CN'));
  el('program').replaceChildren(new Option('全部已录入优势专业',''),...names.map(n=>new Option(n,n)));
  if(names.includes(old))el('program').value=old;
 }
 async function load(){try{
  const response=await fetch('program-index.json?v=20261015-ui');if(!response.ok)throw Error();data=await response.json();
  if(Object.keys(data.schools).length!==108||Object.values(data.schools).reduce((n,ps)=>n+ps.length,0)!==222)throw Error();
  el('programCategory').replaceChildren(new Option('全部专业大类',''),...data.categories.map(c=>new Option(c.name,c.id)));
  el('programCategory').disabled=false;el('program').disabled=false;
  const params=new URLSearchParams(location.search);el('programCategory').value=params.get('programCategory')||'';options();if(params.has('program'))el('program').value=params.get('program');
  el('programCoverage').textContent='已录入 108 校 · 222 项本科优势 / 代表专业（2026-10-14快照）。选择后仅展示已有对应优势记录的学校，未录入不代表没有该专业。';
  el('coverageShort').textContent=' 当前覆盖 108 校、222 项（2026-10-14）。';
 }catch{data=null;el('programCategory').replaceChildren(new Option('暂不可用',''));el('programCategory').disabled=true;el('program').disabled=true;el('programCoverage').textContent='专业索引暂时无法载入，请刷新重试；其他筛选仍可使用。';el('coverageShort').textContent=' 专业索引暂不可用。'} }
 function cardHTML(id,esc){if(!data)return '';let ps=entries(id);const category=el('programCategory').value,program=el('program').value;
  if(category||program)ps=ps.filter(p=>(!category||data.mapping[p.name_cn]?.categories.includes(category))&&(!program||p.name_cn===program));
  return ps.length?`<p class="program-preview">优势 / 代表：${ps.slice(0,2).map(p=>esc(p.name_cn)).join(' · ')}${ps.length>2?' 等':''}<span> · 依据及年份见详情</span></p>`:'<p class="program-preview"><span>优势专业尚未录入 · 不代表未开设</span></p>';
 }
 return {load,options,matches,cardHTML};
})();
