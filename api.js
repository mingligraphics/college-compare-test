const CollegeAPI = (() => {
 const programAdditions={"us_164580":[{"name_cn":"创业学（本科商科方向）","name_en":"Entrepreneurship Concentration","program_key":"us_164580_representative","selection_basis":"representative","evidence_category":"特色本科项目","reason":"代表专业：创业是学校本科培养的核心；该方向通过新企业创建等课程训练创业实践。","application_note":"代表专业：创业是学校本科培养的核心；该方向通过新企业创建等课程训练创业实践。 属于本科商科的可选 concentration，并非独立学士专业；不引用官网未注明年份的实力宣传。","sources":[{"url":"https://undergraduatecatalog.babson.edu/concentration/entrepreneurship-concentration-0","year":"现行本科目录；页面未标学年；2026-10-19核查"},{"url":"https://www.babson.edu/undergraduate/academics/concentrations/","year":"现行本科方向介绍；页面未标学年；2026-10-19核查"}]}],"us_115409":[{"name_cn":"工程学","name_en":"Engineering","program_key":"us_115409_representative","selection_basis":"representative","evidence_category":"特色本科项目","reason":"代表专业：强调跨领域工程分析与设计；Engineering Clinic 由高年级学生组队，与教师和外部工程师合作解决实际项目。","application_note":"代表专业：强调跨领域工程分析与设计；Engineering Clinic 由高年级学生组队，与教师和外部工程师合作解决实际项目。 本科工程项目；不等同于分别授予机械、电气等所有工程专业学位。","sources":[{"url":"https://www.hmc.edu/engineering/","year":"现行工程系介绍；页面未标学年；2026-10-19核查"},{"url":"https://www.hmc.edu/engineering/clinic/","year":"现行本科实践项目；页面未标学年；2026-10-19核查"}]}],"us_110714":[{"name_cn":"计算机科学：计算机游戏设计","name_en":"Computer Science: Computer Game Design","program_key":"us_110714_representative","selection_basis":"representative","evidence_category":"特色本科项目","reason":"代表专业：本科理学士项目结合游戏技术、叙事与艺术，包含高年级贯穿一学年的游戏制作项目。","application_note":"代表专业：本科理学士项目结合游戏技术、叙事与艺术，包含高年级贯穿一学年的游戏制作项目。 指该游戏设计BS项目，不外推为普通计算机科学整体实力；转学生另有专业筛选要求。","sources":[{"url":"https://admissions.ucsc.edu/programs/computer-science-computer-game-design","year":"现行本科招生专业页；页面未标学年；2026-10-19核查"}]}],"us_126614":[{"name_cn":"航空航天工程","name_en":"Aerospace Engineering","program_key":"us_126614_representative","selection_basis":"representative","evidence_category":"特色本科项目","reason":"代表专业：本科课程结合航空航天理论、实践与设计；官网提供2026年秋季入学培养方案。","application_note":"代表专业：本科课程结合航空航天理论、实践与设计；官网提供2026年秋季入学培养方案。 本科航空航天工程项目；培养方案随入学年份调整，不引用研究生排名。","sources":[{"url":"https://www.colorado.edu/academics/bs-aerospace-engineering","year":"现行本科专业页；页面未标学年；2026-10-19核查"},{"url":"https://www.colorado.edu/aerospace/academics/undergraduates/curriculum","year":"含Fall 2026入学培养方案；2026-10-19核查"}]}],"us_104151":[{"name_cn":"供应链管理","name_en":"Supply Chain Management","program_key":"us_104151_representative","selection_basis":"representative","evidence_category":"特色本科项目","reason":"代表专业：W. P. Carey商学院本科BS项目，以采购、物流和运营为核心，结合定量分析与实践案例。","application_note":"代表专业：W. P. Carey商学院本科BS项目，以采购、物流和运营为核心，结合定量分析与实践案例。 本条适用Tempe本科BS；官网同时列有在线等路径，校区和录取要求须分别确认。不依据笼统宣传声称具体排名。","sources":[{"url":"https://degrees.asu.edu/bachelors/major/ASU00/BASCMBS/supply-chain-management","year":"现行本科BS目录；页面未标学年；2026-10-19核查"}]}],"us_104179":[{"name_cn":"光学科学与工程","name_en":"Optical Sciences & Engineering","program_key":"us_104179_representative","selection_basis":"representative","evidence_category":"特色本科项目","reason":"代表专业：本科BS项目由工程学院授予、光学学院管理，结合光学原理、实验与工程设计，可选光电子或生物医学光学等技术方向。","application_note":"代表专业：本科BS项目由工程学院授予、光学学院管理，结合光学原理、实验与工程设计，可选光电子或生物医学光学等技术方向。 本科光学科学与工程学位及技术选修方向，不等同于各方向均为独立专业；不外推研究生学科排名。","sources":[{"url":"https://optics.arizona.edu/prospective-students/undergraduate/bs-optical-sciences-engineering","year":"现行本科BS项目页；页面未标学年；2026-10-19核查"}]}]};
 const base='https://hmnoqybdcfwqbjhorwzd.supabase.co/functions/v1/';
 const fields=['school_id','school_name','school_name_cn','short_name','city','city_cn','state','state_cn','region','school_type','undergrad_enrollment','undergrad_enrollment_year','acceptance_rate','admissions_year','coa','coa_year','tuition_fees','tuition_fees_year','international_pct','international_pct_year','international_pct_scope','institution_control','ranking_usnews','ranking_category'];
 let snapshotPromise;
 function reviewed(rows){return rows.map(row=>{
  const facts=typeof QualityData==='undefined'?null:QualityData.aid[row.school_id];
  const result={...row};
  if(!row.signature_programs?.length&&programAdditions[row.school_id])result.signature_programs=programAdditions[row.school_id];
  const cost=typeof CollegeReferenceBudgets==='undefined'?null:CollegeReferenceBudgets[row.school_id];
  if(Number.isFinite(cost?.tuition_fees_usd)&&cost.tuition_fees_year){
   result.tuition_fees=cost.tuition_fees_usd;result.tuition_fees_year=cost.tuition_fees_year;
  }
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
