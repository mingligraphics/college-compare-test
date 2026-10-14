/* Shared test-site presentation. Consume only the existing public comparison API. */
const CollegeDisplay = (() => {
 const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const money = value => typeof value === 'number' && Number.isFinite(value) ? '$'+value.toLocaleString('en-US') : '暂无数据';
 const policy = value => ({required:'必须提交 SAT / ACT',test_optional:'可选择提交 SAT / ACT',test_free:'不考虑 SAT / ACT',test_flexible:'灵活考试政策（Test Flexible）：允许校方指定的替代考试；不等于可不提交考试，请核对专业及个人适用要求。'})[value] || '未核实';
 const aid = value => ({yes:'有（Yes）：可申请不代表保证获奖',no:'无（No）',limited:'有，但有限制（Limited）'})[value] || '未核实（Unknown）';
 function safeURL(value){try{const url=new URL(value);return /^https?:$/.test(url.protocol)?esc(url.href):''}catch{return ''}}
 function sources(items){return (Array.isArray(items)?items:[]).map((s,i)=>{const url=safeURL(s.url);return url?`<a href="${url}" target="_blank" rel="noopener noreferrer">来源 ${i+1}</a>${s.year?` · ${esc(s.year)}`:''}`:''}).filter(Boolean).join('<br>')}
 function aidHTML(row,field){
  const status=row[field], note=CollegeAidNotes[row.school_id]?.[field];
  const matched=note?.expected_value===status;
  return `<strong>${esc(aid(status))}</strong>${matched?`<p>已核实项目：${esc(note.project_name)}（不代表该校全部资助项目）</p><p>${esc(note.restriction_cn)}</p><p>适用说明：${esc(note.period)}</p><p>资料核查：${esc(note.checked_date)}；申请前请复核校方最新要求。</p><p>${sources(note.official_urls.map(url=>({url})))}</p>`:status==='limited'?'<p>具体资格、适用人群及年度待核实；请勿据此假定所有国际本科新生均符合。</p>':''}`;
 }
 function programsHTML(row){
  const programs=Array.isArray(row.signature_programs)?row.signature_programs:[];
  return programs.length?`<p class="program-note">本科优势 / 代表专业：依据所列本科排名或项目特色，不是热门程度；保留来源原年份。</p><ul class="program-list">${programs.map(p=>`<li><strong>${esc(p.name_cn||p.name_en||'未命名专业')}</strong>${p.name_en?`<p>${esc(p.name_en)}</p>`:''}<p>${esc(p.evidence_category||'依据类型未标明')}</p><p>${esc(p.reason||'具体依据待核实')}</p><p>${sources(p.sources)||'来源待核实'}</p></li>`).join('')}</ul>`:'<p>本科优势 / 代表专业：暂无已核实数据</p>';
 }
 function policyHTML(row){return `<strong>${esc(policy(row.test_policy))}</strong><p>申请周期：${esc(row.test_policy_cycle||'未核实')}</p>`}
 function costText(row){return `${money(row.coa)} · 学年：${row.coa_year||'未核实'}`}
 return {esc,money,policy,aid,aidHTML,programsHTML,policyHTML,costText};
})();
