/* Shared rendering for all directory schools; no writes to any remote data service. */
const V67=(()=>{
 const labels={need:'国际生可否申请 need-based 助学金',review:'国际生录取时 need-blind 或 need-aware',merit:'是否提供 merit-based 奖学金'};
 const clean=v=>String(v||'').replace(/[^。；\n]*(?:待核实|未核实)[^。；\n]*[。；]?/g,'').trim();
 const links=items=>CollegeDisplay.sources((items||[]).filter(s=>{try{return /^https?:$/.test(new URL(s.url).protocol)}catch{return false}}));
 function aid(s,key){const f=QualityData.aid[s.school_id]?.[key];if(f&&links(f.sources))return '<strong>'+esc(f.text)+'</strong><p>'+links(f.sources)+'</p>';
  const field={need:'international_need_aid',merit:'international_merit_aid'}[key],n=CollegeAidNotes[s.school_id]?.[field];
  if(!n||n.expected_value!==s[field]||!n.official_urls?.length)return '';
  return '<strong>有条件可申请：'+esc(n.project_name)+'</strong><p>'+esc(clean(n.restriction_cn))+'</p>'+(clean(n.period)?'<p>'+esc(clean(n.period))+'</p>':'')+'<p>'+links(n.official_urls.map(url=>({url})))+'</p>';
 }
 function aidDetail(s){return Object.keys(labels).map(k=>{const v=aid(s,k);return v?detailField(labels[k],v):''}).join('')}
 function aidRows(ss){return Object.keys(labels).map(k=>{const vs=ss.map(s=>aid(s,k));if(!vs.some(Boolean))return '';return '<div class="aid-label">'+labels[k]+'</div>'+vs.map((v,i)=>'<div class="compare-value" aria-label="'+esc(ss[i].school_name_cn||ss[i].school_name)+'">'+v+'</div>').join('')}).join('')}
 function programs(s){const known=QualityData.rankings[s.school_id]||[];const ps=Array.isArray(s.signature_programs)?s.signature_programs:[];
 const ranked=known.map(p=>'<details><summary>'+esc(p.name_cn)+' · 第'+p.rank+'名<small>'+esc(p.system+' · '+p.year)+'</small></summary>'+ps.filter(x=>x.name_cn===p.name_cn||p.name_cn.includes(x.name_cn)||s.school_id==='penn'&&/商|business|finance/i.test(x.name_cn+' '+x.name_en)).map(x=>x.application_note?'<p>'+esc(clean(x.application_note))+'</p>':'').join('')+links(p.sources)+'</details>');
 for(const p of ps){if(known.some(k=>k.name_cn.includes(p.name_cn)||p.name_cn?.includes(k.name_cn)||s.school_id==='penn'&&/商|business|finance/i.test(p.name_cn+' '+p.name_en)))continue;
 const title=p.name_cn||p.name_en;if(!title)continue;
 const text=String(p.reason||''),rank=p.evidence_category==='本科专业排名'&&text.match(/(?:并列)?第\s*\d+\s*(?:名)?/),year=(text+' '+(p.sources||[]).map(s=>s.year).join(' ')).match(/U\.S\. News\s*(20\d{2})/i);
 if(rank&&year&&/本科/.test(text)&&links(p.sources))ranked.push('<details><summary>'+esc(title)+' · '+esc(rank[0])+'<small>U.S. News '+year[1]+' 本科专业排名</small></summary><p>'+esc(clean(text))+'</p>'+links(p.sources)+'</details>');
 else ranked.push(p.application_note?'<details><summary>'+esc(title)+'</summary><p>'+esc(clean(p.application_note))+'</p>'+links(p.sources)+'</details>':'<span class="program-tag">'+esc(title)+'</span>');
 }return '<div class="program-compact">'+ranked.join('')+'</div>';
 }
 function policy(s){const f=QualityData.tests[s.school_id];if(f)return '<strong>'+esc(CollegeDisplay.policy(f.policy))+'</strong><small>'+esc(CollegeDisplay.applicationCycle(f.cycle))+'</small>'+(f.note?'<p>'+esc(f.note)+'</p>':'')+links(f.sources);
 // Existing dated records are explicitly historical/current as recorded, never relabelled as 2027.
 const cy=String(s.test_policy_cycle||''),label=CollegeDisplay.applicationCycle(cy),entry=label.match(/(20\d{2})年秋季/);if(!cy||!['required','test_optional','test_free','test_flexible'].includes(s.test_policy))return '';
 return '<strong>'+esc(CollegeDisplay.policy(s.test_policy))+'</strong><small>'+esc(/through|ongoing|permanent|indefinite/i.test(cy)?'适用范围（原资料）：'+cy:!entry?'适用范围（原资料）：'+cy:/onward/i.test(cy)?cy.replace(/Fall (20\d{2}) entry onward/,'$1年秋季入学起持续适用'):label)+(entry&&!/onward|through|ongoing|permanent|indefinite/i.test(cy)&&entry[1]!=='2027'?' · 历史申请季政策':' · 现有资料记录')+'</small>';
 }
 function tests(s){const scoreFact=QualityData.scores?.[s.school_id];const sourceRow=s;if(scoreFact)s={...s,...scoreFact};const scores=['sat','act'].map(k=>{const val=range(s,k);return val==='暂无数据'?'<small class="missing-score">'+k.toUpperCase()+'：暂无分数区间</small>':'<strong>'+k.toUpperCase()+'：'+esc(val)+'</strong>'}).join('');return policy(sourceRow)+'<div class="test-scores">'+scores+'</div>'+(s.sat_25||s.act_25?'<small>已提交成绩学生的中间50%区间；'+esc(scoreFact?.year||s.test_scores_year||s.sat_act_year||'统计年份未提供')+'；不是录取最低分。</small>':'')+(scoreFact?'<p>'+esc(scoreFact.note)+'</p>'+links(scoreFact.sources):'')}
 function cost(s){const c=CollegeDisplay.cost(s),m=CollegeDisplay.costContext(s);const note=m?.complete_coa===true?'奖助学金前的年度预算':'奖助学金前的参考费用；预算范围见下方';return V65.money(c.amount,c.year)+'<small>'+note+'</small><details><summary>费用口径与学费</summary>'+(m?'<p>'+esc(clean((m.scope_cn||'')+'。'+(m.note_cn||'')))+'</p>'+links(m.sources||[{url:m.source,year:m.year}]):'<p>所列金额的包含项目未提供，请向学校确认个人预算。</p>')+'<p>学费（含杂费）：'+V65.money(s.tuition_fees,s.tuition_fees_year)+'</p><small>人民币按1美元≈7元估算。</small></details>'}
 const english=s=>{const policy=({required:'要求英语能力证明',conditional:'视条件要求，可申请豁免',not_required:'不强制提交英语能力证明'})[s.english_proficiency_policy];const tests=(s.english_tests_accepted||[]).filter(x=>typeof x==='string');return (policy?'<p>'+esc(policy)+'</p>':'')+(tests.length?'<p>接受 '+esc(tests.join(' / '))+'</p>':'')+(V65.englishURLs[s.school_id]?links([{url:V65.englishURLs[s.school_id]}]):'')};
 return {aid,aidRows,aidDetail,programs,policy,tests,cost,english,clean};
})();
CollegeDisplay.aidHTML=(s,f)=>V67.aid(s,f==='international_need_aid'?'need':'merit');
V64.aidRows=V67.aidRows;V64.programs=V67.programs;V65.programs=V67.programs;
V64.programRows=ss=>ss.map(s=>'<div class="compare-value">'+V67.programs(s)+'</div>').join('');
V65.policy=V67.policy;V64.tests=V67.tests;V65.cost=V67.cost;V64.cost=V67.cost;V65.english=V67.english;

const originalDifferencesV67=V64.differences;
V64.differences=ss=>originalDifferencesV67(ss.map(s=>{const t=QualityData.tests[s.school_id];return t?{...s,test_policy:t.policy,test_policy_cycle:t.cycle}:s}));
