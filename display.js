/* Shared test-site presentation. Consume only the existing public comparison API. */
const CollegeDisplay = (() => {
 const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const money = value => typeof value === 'number' && Number.isFinite(value) ? '$'+value.toLocaleString('en-US') : '暂无数据';
 const policy = value => ({required:'必须提交 SAT / ACT',test_optional:'可选择提交 SAT / ACT',test_free:'不考虑 SAT / ACT',test_flexible:'灵活考试政策：允许校方指定的替代考试；不等于可不提交考试，请核对专业及个人适用要求。'})[value] || '未核实';
 const aid = value => ({yes:'可申请',no:'无',limited:'有，但有限制'})[value] || '未核实';
 function safeURL(value){try{const url=new URL(value);return /^https?:$/.test(url.protocol)?esc(url.href):''}catch{return ''}}
 function sources(items){return (Array.isArray(items)?items:[]).map((s,i)=>{const url=safeURL(s.url);return url?`<a href="${url}" target="_blank" rel="noopener noreferrer">来源 ${i+1}</a>${s.year?` · ${esc(s.year)}`:''}`:''}).filter(Boolean).join('<br>')}
 function aidHTML(row,field){
  const status=row[field], note=CollegeAidNotes[row.school_id]?.[field];
  const matched=!!note&&note.expected_value===status;
  return `<strong>${esc(aid(status))}</strong>${matched?`<p>已核实项目：${esc(note.project_name)}（不代表该校全部资助项目）</p><p>${esc(note.restriction_cn)}</p><p>适用说明：${esc(note.period)}</p><p>资料核查：${esc(note.checked_date)}；申请前请复核校方最新要求。</p><p>${sources(note.official_urls.map(url=>({url})))}</p>`:status==='limited'?'<p>具体资格、适用人群及年度待核实；请勿据此假定所有国际本科新生均符合。</p>':''}`;
 }
 function programsHTML(row){
  const programs=(Array.isArray(row.signature_programs)?row.signature_programs:[]);
  return programs.length?`<ul class="program-list">${programs.map(p=>`<li><strong>${esc(p.name_cn||p.name_en||'未命名专业')}</strong>${p.name_en?`<p>${esc(p.name_en)}</p>`:''}<p>${esc(p.evidence_category||'依据类型未标明')}</p><p>${esc(p.reason||'具体依据待核实')}</p><p>${sources(p.sources)||'来源待核实'}</p></li>`).join('')}</ul>`:'<p>本科优势 / 代表专业：暂无已核实数据</p>';
 }
 function policyHTML(row){return `<strong>${esc(policy(row.test_policy))}</strong><p>申请周期：${esc(row.test_policy_cycle||'未核实')}</p>`}
 function cost(row){
  // Prefer a scoped official budget when present; keep the original API row unchanged.
  const complete=typeof row.coa==='number'&&Number.isFinite(row.coa)&&row.coa>0;
  const ref=CollegeReferenceBudgets[row.school_id];
  if(ref)return {amount:ref.amount_usd,year:ref.year,reference:ref.complete_coa===true?null:ref,verified:ref.complete_coa===true?ref:null};
  return {amount:complete?row.coa:null,year:row.coa_year,reference:null};
 }
 function costContext(row){const c=cost(row);if(c.reference)return c.reference;if(c.verified)return c.verified;const m=typeof CollegeCostProvenance==='undefined'?null:CollegeCostProvenance[row.school_id];return m&&m.amount_usd===row.coa&&m.year===row.coa_year?m:null}
 function costText(row){const c=cost(row);return `${money(c.amount)} · 学年：${c.year||'未核实'}`}
 function costHTML(row){const c=cost(row);return `<strong>${esc(money(c.amount))}</strong>${c.reference?`<small class="cost-note">${esc(c.reference.note_cn)}</small>`:''}<small class="cost-note">学年：${esc(c.year||'未核实')}${c.amount==null?'':` · 约${esc((c.amount*7/10000).toFixed(2))}万元人民币`}</small>${c.reference?`<small class="cost-note">${esc(c.reference.scope_cn)}；${esc(c.reference.basis_cn)}<br>${sources(c.reference.sources)}</small>`:''}`}
 function cardCostHTML(row){const amount=cost(row).amount;return `<strong>${typeof amount==='number'&&Number.isFinite(amount)&&amount>0?'¥'+Math.round(amount*7/10000).toLocaleString('en-US')+'万元':'暂无数据'}</strong>`}
 function costBand(row){const n=cost(row).amount;if(typeof n!=='number'||!Number.isFinite(n)||n<=0)return null;const cny=n*7;return cny<300000?'low':cny<500000?'mid':cny<650000?'high':'top'}

 return {sources,costContext,esc,money,policy,aid,aidHTML,programsHTML,policyHTML,costText,cost,costHTML,cardCostHTML,costBand};
})();
