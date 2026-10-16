/* Display only. Never infer missing policy, budget scope, or program rankings. */
const V64=(()=>{
 const cycle=value=>{const s=String(value||'').trim();const y=s.match(/^Fall\s*(20\d{2})$/i)||s.match(/^20\d{2}[-–]\d{2}\s*application cycle\s*\(Fall\s*(20\d{2})\s*entry\)$/i)||s.match(/^(20\d{2})年秋季(?:入学申请季)?$/);return y?y[1]:null};
 const shortPolicy=v=>({required:'必须提交 SAT/ACT',test_optional:'可选交 SAT/ACT',test_free:'不考虑 SAT/ACT',test_flexible:'灵活考试政策'})[v];
 const finite=n=>typeof n==='number'&&Number.isFinite(n)&&n>0;
 function english(s){const policy=({required:'要求英语能力证明',conditional:'视条件要求，可申请豁免',not_required:'不强制提交英语能力证明'})[s.english_proficiency_policy]||'英语能力证明要求未核实';const tests=Array.isArray(s.english_tests_accepted)?s.english_tests_accepted.filter(x=>typeof x==='string'&&x.trim()):[];return policy+(tests.length?'；接受 '+tests.join(' / '):'；接受的考试尚未核实')}
 function programs(s){const ps=Array.isArray(s.signature_programs)?s.signature_programs:[];if(!ps.length)return '暂无已核实专业数据';return ps.map(p=>{const rank=p.evidence_category==='本科专业排名'?String(p.reason||'').match(/(?:并列)?第\s*\d+\s*(?:名)?/)?.[0]:null;return `<details><summary class="program-summary">${esc(p.name_cn||p.name_en||'未命名专业')} · ${esc(rank||'排名未核实')}</summary><p>${esc(p.name_en||'')}</p><p>${esc(p.evidence_category||'依据类型未标明')}：${esc(p.reason||'依据待核实')}</p>${CollegeDisplay.sources(p.sources)}</details>`}).join('')}
 function cost(s){
 const c=CollegeDisplay.cost(s),m=CollegeDisplay.costContext(s),content=document.createElement('div');
 // Reuse detail-page wording, while keeping scope and sources inside one disclosure.
 content.innerHTML=V65.cost(s);
 const detailNote=c.reference?content.querySelectorAll(':scope > small')[1]?.innerHTML:'';
 const note=detailNote?.replace('奖助学金前的参考费用，尚未包含全部开支',esc(m?.note_cn?.replace(/COA/g,'年度开支预算')||'参考预算；包含项目及缺项待核实'));
 return comparisonCostHTML(c.amount,c.year)+(note?'<small class="cost-note">'+note+'</small>':'')+'<details><summary>费用口径与学费</summary>'+costContextHTML(s)+'<p>学费（含杂费）：'+comparisonCostHTML(s.tuition_fees,s.tuition_fees_year)+'</p><p>人民币按1美元≈7元估算。</p></details>';
 }
 function differences(ss){const [a,b]=ss,ca=CollegeDisplay.cost(a),cb=CollegeDisplay.cost(b),ma=CollegeDisplay.costContext(a),mb=CollegeDisplay.costContext(b);const lines=[];
 const name=s=>s.short_name==='MIT'?'MIT':s.school_name_cn||s.school_name||s.short_name;
 // Reviewed against the existing scoped records; guard all fields so later data changes fail closed.
 // Both budgets cover tuition, fees, housing/food, books and personal expenses for a resident academic year,
 // before aid, excluding transport and applicable insurance. They remain partial budgets, not full COA.
 const reviewed={mit:{amount:92760,scope:'MIT全日制住校本科、一个学年',note:'MIT全日制住校本科、一个学年。含学费66720美元、杂费、食宿、书本和个人预算；国际交通及适用医疗保险另计。 奖助前参考预算，非完整COA。'},princeton:{amount:94624,scope:'Princeton住校本科、一个学年',note:'Princeton住校本科、一个学年。含学费68140美元、食宿、杂费、书本及个人预算；交通50–5000美元、适用保险另计。 奖助前参考预算，非完整COA。'}};
 const reviewedScope=(s,c,m)=>{const r=reviewed[s.school_id];return r&&c.year==='2026-27'&&c.amount===r.amount&&m?.scope_cn===r.scope&&m.note_cn===r.note&&m.currency==='USD'&&m.complete_coa===false};
 // Other comparisons require explicitly identical complete budget scopes.
 const scope=m=>m?.scope||m?.scope_cn;
 if(finite(ca.amount)&&finite(cb.amount)&&ca.amount!==cb.amount&&ca.year&&ca.year===cb.year&&((ma?.complete_coa===true&&mb?.complete_coa===true&&scope(ma)&&scope(ma)===scope(mb))||(reviewedScope(a,ca,ma)&&reviewedScope(b,cb,mb)))&&(ma.currency||'USD')===(mb.currency||'USD')&&(ma.currency||'USD')==='USD')lines.push('年度预算：'+name(ca.amount>cb.amount?a:b)+'约高'+(Math.abs(ca.amount-cb.amount)*7/10000).toFixed(1)+'万元（估算，'+ca.year+'学年）。');
 const aa=admissionValue(a),ab=admissionValue(b);
 if(aa&&ab&&finite(aa.value)&&finite(ab.value)&&aa.value!==ab.value&&aa.year&&aa.year===ab.year)lines.push('本科录取率：'+name(a)+' '+aa.value.toFixed(1)+'%，'+name(b)+' '+ab.value.toFixed(1)+'%（'+aa.year+'，总体本科新生）。');
 const policies=['required','test_optional','test_free','test_flexible'];
 if(cycle(a.test_policy_cycle)&&cycle(a.test_policy_cycle)===cycle(b.test_policy_cycle)&&policies.includes(a.test_policy)&&policies.includes(b.test_policy)&&a.test_policy!==b.test_policy)lines.push('标化要求：'+name(a)+shortPolicy(a.test_policy)+'；'+name(b)+shortPolicy(b.test_policy)+'（'+cycle(a.test_policy_cycle)+'年秋季入学）。');
 return lines.length?'<section class="key-differences" aria-label="关键差异"><h3>关键差异</h3>'+lines.map(t=>'<p>'+esc(t)+'</p>').join('')+'</section>':'';
 }
 function aidRows(ss){return [['国际本科生助学金','international_need_aid'],['国际本科生奖学金','international_merit_aid']].map(([label,field])=>{const values=ss.map(s=>CollegeDisplay.aidHTML(s,field));return '<div class="aid-label">'+label+'</div>'+(values[0]===values[1]?'<div class="compare-value aid-shared"><small>两校均为</small>'+values[0]+'</div>':values.map((v,i)=>'<div class="compare-value" role="group" aria-label="'+esc((ss[i].school_name_cn||ss[i].school_name)+' '+label)+'">'+v+'</div>').join(''))}).join('')+'<p class="aid-explanation">助学金通常按家庭经济状况评估，奖学金通常按成绩评定；资格和具体政策以各校制度为准。</p>'}
 function tests(s){return '<div class="comparison-policy">'+V65.policy(s)+'</div><p class="test-scores"><strong>SAT：'+esc(range(s,'sat'))+'</strong><strong>ACT：'+esc(range(s,'act'))+'</strong></p>'}
 function programRows(ss){const lists=ss.map(s=>Array.isArray(s.signature_programs)?s.signature_programs:[]);return Array.from({length:Math.max(1,...lists.map(x=>x.length))},(_,i)=>ss.map((s,j)=>'<div class="compare-value">'+(lists[j][i]?programs({signature_programs:[lists[j][i]]}):i===0?'暂无已核实专业数据':'—')+'</div>').join('')).join('')}
 return {english,programs,cost,differences,programRows,aidRows,tests};
})();
