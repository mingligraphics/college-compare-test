/* Display only. Never infer missing policy, budget scope, or program rankings. */
const V64=(()=>{
 const cycle=value=>{const s=String(value||'').trim();const y=s.match(/^Fall\s*(20\d{2})$/i)||s.match(/^20\d{2}[-–]\d{2}\s*application cycle\s*\(Fall\s*(20\d{2})\s*entry\)$/i)||s.match(/^(20\d{2})年秋季(?:入学申请季)?$/);return y?y[1]:null};
 const shortPolicy=v=>({required:'必须提交 SAT/ACT',test_optional:'可选交 SAT/ACT',test_free:'不考虑 SAT/ACT',test_flexible:'灵活考试政策'})[v];
 const finite=n=>typeof n==='number'&&Number.isFinite(n)&&n>0;
 function english(s){const policy=({required:'要求英语能力证明',conditional:'视条件要求，可申请豁免',not_required:'不强制提交英语能力证明'})[s.english_proficiency_policy]||'英语能力证明要求未核实';const tests=Array.isArray(s.english_tests_accepted)?s.english_tests_accepted.filter(x=>typeof x==='string'&&x.trim()):[];return policy+(tests.length?'；接受 '+tests.join(' / '):'；接受的考试尚未核实')+(s.english_policy_cycle?'（'+s.english_policy_cycle+'）':'')}
 function programs(s){const ps=Array.isArray(s.signature_programs)?s.signature_programs:[];if(!ps.length)return '暂无已核实专业数据';return ps.map(p=>{const rank=p.evidence_category==='本科专业排名'?String(p.reason||'').match(/(?:并列)?第\s*\d+\s*(?:名)?/)?.[0]:null;return `<details><summary class="program-summary">${esc(p.name_cn||p.name_en||'未命名专业')} · ${esc(rank||'排名未核实')}</summary><p>${esc(p.name_en||'')}</p><p>${esc(p.evidence_category||'依据类型未标明')}：${esc(p.reason||'依据待核实')}</p>${CollegeDisplay.sources(p.sources)}</details>`}).join('')}
 function cost(s){const c=CollegeDisplay.cost(s),m=CollegeDisplay.costContext(s);return comparisonCostHTML(c.amount,c.year)+(c.reference?'<small class="cost-note">参考费用，尚未包含全部开支</small>':'')+'<details><summary>费用口径与学费</summary>'+costContextHTML(s)+'<p>学费（含杂费）：'+comparisonCostHTML(s.tuition_fees,s.tuition_fees_year)+'</p><p>人民币按1美元≈7元估算；请核对预算范围。</p></details>'}
 function differences(ss){const [a,b]=ss,ca=CollegeDisplay.cost(a),cb=CollegeDisplay.cost(b),ma=CollegeDisplay.costContext(a),mb=CollegeDisplay.costContext(b);const lines=[];
 // Conservative comparability: explicit identical scope, complete budgets and year.
 const scope=m=>m?.scope||m?.scope_cn;
 if(finite(ca.amount)&&finite(cb.amount)){
 if(ca.year&&ca.year===cb.year&&ma?.complete_coa===true&&mb?.complete_coa===true&&scope(ma)&&scope(ma)===scope(mb))lines.push('费用：'+(ca.amount===cb.amount?'两校年度费用相同':(ca.amount>cb.amount?'左校':'右校')+'每年约高'+(Math.abs(ca.amount-cb.amount)*7/10000).toFixed(1)+'万元')+'（'+ca.year+'学年）。');
 else lines.push(ca.year&&cb.year&&ca.year!==cb.year?'费用：预算学年不同，请核对后比较。':'费用：预算范围未确认一致，暂不计算差额。');
 }else lines.push('费用：部分数据缺失，暂不能比较。');
 const aa=admissionValue(a),ab=admissionValue(b);
 if(aa&&ab&&finite(aa.value)&&finite(ab.value)&&aa.year&&aa.year===ab.year)lines.push('录取率：'+(Math.abs(aa.value-ab.value)<1?'两校接近，相差不足1个百分点':(aa.value>ab.value?'左校':'右校')+'高'+Math.abs(aa.value-ab.value).toFixed(1)+'个百分点')+'（'+aa.year+'总体新生）。');
 else lines.push('录取率：'+(aa&&ab?'统计年份不同或未核实，请分别查看。':'部分数据缺失，暂不能比较。'));
 const policies=['required','test_optional','test_free','test_flexible'];
 if(cycle(a.test_policy_cycle)&&cycle(a.test_policy_cycle)===cycle(b.test_policy_cycle)&&policies.includes(a.test_policy)&&policies.includes(b.test_policy)&&a.test_policy!==b.test_policy)lines.push('考试：左校'+shortPolicy(a.test_policy)+'；右校'+shortPolicy(b.test_policy)+'（'+cycle(a.test_policy_cycle)+'年秋季）。');
 else if(!cycle(a.test_policy_cycle)||!cycle(b.test_policy_cycle)||cycle(a.test_policy_cycle)!==cycle(b.test_policy_cycle))lines.push('考试：申请季不同或缺失，请分别核对政策。');
 return '<section class="key-differences" aria-label="关键差异"><h3>关键差异</h3>'+lines.slice(0,3).map(t=>'<p>'+esc(t)+'</p>').join('')+'</section>';
 }
 function programRows(ss){const lists=ss.map(s=>Array.isArray(s.signature_programs)?s.signature_programs:[]);return Array.from({length:Math.max(1,...lists.map(x=>x.length))},(_,i)=>ss.map((s,j)=>'<div class="compare-value">'+(lists[j][i]?programs({signature_programs:[lists[j][i]]}):i===0?'暂无已核实专业数据':'—')+'</div>').join('')).join('')}
 return {english,programs,cost,differences,programRows};
})();
