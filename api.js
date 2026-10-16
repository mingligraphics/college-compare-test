const CollegeAPI = (() => {
 const base='https://hmnoqybdcfwqbjhorwzd.supabase.co/functions/v1/';
 const fields=['school_id','school_name','school_name_cn','short_name','city','city_cn','state','state_cn','region','school_type','undergrad_enrollment','undergrad_enrollment_year','acceptance_rate','admissions_year','coa','coa_year','tuition_fees','tuition_fees_year','international_pct','international_pct_year','international_pct_scope','institution_control','ranking_usnews','ranking_category'];
 let snapshotPromise;
 function reviewed(rows){return rows.map(row=>{
  const facts=typeof QualityData==='undefined'?null:QualityData.aid[row.school_id];
  const result={...row};
  for(const [key,field] of [['need','international_need_aid'],['merit','international_merit_aid']]){
   const fact=facts?.[key];
   if(fact&&Object.prototype.hasOwnProperty.call(fact,'expected_value')&&[null,'yes','no','limited'].includes(fact.expected_value))result[field]=fact.expected_value;
  }
  return result;
 })}
 async function fetchJSON(url, options={}, timeout=12000){
  const controller=new AbortController();
  const timer=setTimeout(()=>controller.abort(),timeout);
  try{const response=await fetch(url,{...options,signal:controller.signal});if(!response.ok)throw Error('Data unavailable');return await response.json()}finally{clearTimeout(timer)}
 }
 function validDirectory(rows){return Array.isArray(rows)&&rows.length===301&&new Set(rows.map(r=>r.school_id)).size===301&&rows.every(r=>fields.every(f=>Object.prototype.hasOwnProperty.call(r,f))&&typeof r.school_id==='string'&&typeof r.school_name==='string')}
 function snapshot(){
  if(!snapshotPromise)snapshotPromise=(async()=>{
   const data=await fetchJSON(CollegeSnapshot.url,{cache:'default'});
   if(data.schema!==CollegeSnapshot.schema||data.count!==CollegeSnapshot.count||!validDirectory(data.directory)||!Array.isArray(data.details)||data.details.length!==301)throw Error('Invalid snapshot');
   if(data.details.some(row=>CollegeSnapshot.detailFields.some(key=>!Object.prototype.hasOwnProperty.call(row,key))))throw Error('Incomplete detail');
   const details=new Map(data.details.map(r=>[r.school_id,r]));
   if(details.size!==301||data.directory.some(r=>!details.has(r.school_id)||fields.some(f=>JSON.stringify(details.get(r.school_id)[f])!==JSON.stringify(r[f]))))throw Error('Incomplete snapshot');
   return {directory:data.directory,details};
  })().catch(error=>{snapshotPromise=null;throw error});
  return snapshotPromise;
 }
 async function request(endpoint,body){return fetchJSON(base+endpoint,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(body),cache:'no-store'},8000)}
 return {fields,async directory(){
  try{return (await snapshot()).directory}catch{
   const rows=await request('discover-schools-test',{});if(!validDirectory(rows))throw Error('Invalid directory');return rows;
  }
 },async pair(a,b){
  if(a===b)throw Error('Two distinct schools required');
   try{const {details}=await snapshot();if(!details.has(a)||!details.has(b))throw Error('Unknown school');return reviewed([details.get(a),details.get(b)])}catch{
   const rows=await request('compare-schools-basic-v2',{schoolA:a,schoolB:b});
   if(!Array.isArray(rows)||rows.length!==2||rows[0]?.school_id!==a||rows[1]?.school_id!==b)throw Error('Invalid comparison');return reviewed(rows);
  }
 }};
})();
