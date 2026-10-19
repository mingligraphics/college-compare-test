/* Display-only index. Original program facts and provenance are in program-index.json?v=60131ec8333042be */
const ProgramFilters=(()=>{
 let data=null;
 const el=id=>document.getElementById(id);
 function entries(id){return (data?.schools[id]||[])}
 function searchText(id){return entries(id).map(p=>[p.name_cn,p.name_en].join(' ')).join(' ').toLowerCase()}
 function matches(id,category,program){return !category&&!program||entries(id).some(p=>(!category||data.mapping[p.name_cn]?.categories.includes(category))&&(!program||p.name_cn===program))}
 function options(){
  if(!data)return;
  const category=el('programCategory').value,old=el('program').value;
  const names=Object.values(data.mapping).filter(p=>!category||p.categories.includes(category)).map(p=>p.name).sort((a,b)=>a.localeCompare(b,'zh-CN'));
  el('program').replaceChildren(new Option('全部已录入专业／培养领域',''),...names.map(n=>new Option(n,n)));
  if(names.includes(old))el('program').value=old;
 }
 async function load(){try{
  const response=await fetch('program-index.json?v=60131ec8333042be');if(!response.ok)throw Error();data=await response.json();
  if(Object.keys(data.schools).length!==301||Object.values(data.schools).reduce((n,ps)=>n+ps.length,0)!==415)throw Error();
  el('programCategory').replaceChildren(new Option('全部专业大类',''),...data.categories.filter(c=>Object.keys(data.schools).some(id=>matches(id,c.id,''))).map(c=>new Option(c.name,c.id)));
  el('programCategory').disabled=false;el('program').disabled=false;
  const params=new URLSearchParams(location.search);el('programCategory').value=params.get('programCategory')||'';options();// Legacy specific-program links now select their first mapped category.
  if(!el('programCategory').value&&params.has('program'))el('programCategory').value=data.mapping[params.get('program')]?.categories[0]||'';el('program').value='';
  el('programCoverage').textContent='按已录入本科专业／培养领域筛选，不代表完整专业目录或优势排名。';
  if(el('coverageShort'))el('coverageShort').textContent=' 专业资料更新：2026-10-19；开设与优势分别核验；未录入不代表未开设。';
 }catch{data=null;el('programCategory').replaceChildren(new Option('暂不可用',''));el('programCategory').disabled=true;el('program').disabled=true;el('programCoverage').textContent='专业索引暂时无法载入，请刷新重试；其他筛选仍可使用。';if(el('coverageShort'))el('coverageShort').textContent=' 专业索引暂不可用。'} }
 function cardHTML(id,esc){if(!data)return '<p class="program-preview">暂无专业数据 · 专业索引暂不可用</p>';let ps=entries(id);const category=el('programCategory').value,program=el('program').value;
  if(category||program)ps=ps.filter(p=>(!category||data.mapping[p.name_cn]?.categories.includes(category))&&(!program||p.name_cn===program));
  return ps.length?`<p class="program-preview">代表专业：${ps.map(p=>esc(p.name_cn)).join(' · ')}</p>`:'<p class="program-preview"><span>暂无专业数据 · 未录入不代表未开设</span></p>';
 }
 return {load,options,matches,searchText,cardHTML};
})();
