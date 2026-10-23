/* Official catalogue is display-only; never add these entries to ProgramFilters. */
const ProgramCatalogue=(()=>{
 let state='loading',pending,programs=new Map(),metadata=new Map();
 const fields='school_id,official_name_en,program_type,source_url,catalog_year,verified_on,source_locator,scope_note';
 async function read(table,select){
  const rows=[],order=table==='school_programs'?'school_id,official_name_en,program_type':'school_id';
  for(let offset=0;;offset+=500){
   const controller=new AbortController(),timer=setTimeout(()=>controller.abort(),8000);
   let response;
   try{response=await fetch(`${CatalogueConfig.url}/rest/v1/${table}?select=${select}&order=${order}&offset=${offset}&limit=500`,{headers:{apikey:CatalogueConfig.publicKey},signal:controller.signal,cache:'no-store'});if(!response.ok)throw Error('Catalogue unavailable');const page=await response.json();if(!Array.isArray(page))throw Error('Invalid catalogue');rows.push(...page);if(page.length<500)return rows;}finally{clearTimeout(timer)}
  }
 }
 function load(){if(!pending)pending=(async()=>{try{
  const [ps,ms]=await Promise.all([read('school_programs',fields),read('school_program_catalogues','school_id,catalog_year,coverage_status,current_validity,source_url,verified_on,scope_note')]);
  if(ps.some(p=>!p.school_id||!p.official_name_en||!['major','minor'].includes(p.program_type)||!p.source_url||!p.verified_on)||ms.some(m=>!['partial','metadata_only'].includes(m.coverage_status)))throw Error('Invalid catalogue');
  const next=new Map();for(const p of ps){if(!next.has(p.school_id))next.set(p.school_id,[]);next.get(p.school_id).push(p)}
  programs=next;metadata=new Map(ms.map(m=>[m.school_id,m]));state='ready';
 }catch{state='error'}return state})();return pending;}
 const entries=(id,type)=>(programs.get(id)||[]).filter(p=>!type||p.program_type===type).sort((a,b)=>a.official_name_en.localeCompare(b.official_name_en));
 function message(id){if(state==='loading')return '正在获取本科专业目录…';if(state==='error')return '目录暂不可用，请刷新重试。';const m=metadata.get(id);return m?.coverage_status==='partial'?'部分专业已收录，未列出不代表未开设。':m?'仅核实目录版本，专业条目尚未收录。':'专业目录尚未收录，不代表学校没有专业。';}
 function fallback(id,compact=false){const majors=entries(id,'major');return majors.length?`<div class="catalogue-fallback"><strong>本科开设专业</strong><p>${majors.slice(0,compact?3:majors.length).map(p=>esc(p.official_name_en)).join(' · ')}${compact&&majors.length>3?'…':''}</p><small>部分专业已收录，未列出不代表未开设。</small></div>`:`<p>${state==='ready'?'专业信息尚未收录':esc(message(id))}</p>`;}
 function source(row){let u;try{u=new URL(row.source_url)}catch{return ''}return u.protocol==='https:'?`<a href="${esc(u.href)}" target="_blank" rel="noopener noreferrer">学校官网</a> · ${esc(row.catalog_year||'学年未注明')} · ${esc(row.verified_on||'')}核查`:'';}
 function directory(id){const m=metadata.get(id);return `<details class="undergraduate-catalogue"><summary>本科专业目录（Major / Minor）</summary><p>${esc(message(id))}</p>${m?`<p>${source(m)}</p>`:''}${['major','minor'].map(type=>{const ps=entries(id,type);return ps.length?`<h4>${type==='major'?'主修 Major':'辅修 Minor'}（已收录 ${ps.length} 项）</h4><ul>${ps.map(p=>`<li><span>${esc(p.official_name_en)}</span><details><summary>来源与适用说明</summary><p>${source(p)}</p><p>${esc(p.source_locator||'')}</p>${p.scope_note?`<p>${esc(p.scope_note)}</p>`:''}</details></li>`).join('')}</ul>`:''}).join('')}</details>`;}
 return {load,entries,message,fallback,directory};
})();
const originalCardPrograms=ProgramFilters.cardHTML;
ProgramFilters.cardHTML=(id,escape)=>ProgramFilters.hasEntries(id)?originalCardPrograms(id,escape):ProgramCatalogue.fallback(id,true);
const originalAcademicPrograms=V65.programs;
const catalogueAcademicRow=row=>row.signature_programs?.length?row:{...row,signature_programs:ProgramFilters.entries(row.school_id)};
const catalogueHasOriginal=row=>catalogueAcademicRow(row).signature_programs?.length||QualityData.rankings[row.school_id]?.length;
V65.programs=row=>(catalogueHasOriginal(row)?'<h3>优势／代表专业</h3>'+originalAcademicPrograms(catalogueAcademicRow(row)):ProgramCatalogue.fallback(row.school_id))+ProgramCatalogue.directory(row.school_id);
const originalComparisonPrograms=V64.programRows;
V64.programRows=ss=>ss.every(catalogueHasOriginal)?originalComparisonPrograms(ss.map(catalogueAcademicRow))+ss.map(s=>'<div class="compare-value program-cell">'+ProgramCatalogue.directory(s.school_id)+'</div>').join(''):ss.map(s=>'<div class="compare-value program-cell">'+V65.programs(s)+'</div>').join('');
