// Derive the public static snapshot from reviewed public facts. No remote services.
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import {createHash} from 'node:crypto';
const root=path.resolve(import.meta.dirname,'..');
function readGlobal(file,name){return vm.runInNewContext(fs.readFileSync(path.join(root,file),'utf8')+';'+name)}
const facts=readGlobal('quality-data.js','QualityData').aid;
const config=readGlobal('snapshot-config.js','CollegeSnapshot');
const snapshot=JSON.parse(fs.readFileSync(path.join(root,config.url),'utf8'));
if(snapshot.count!==301||snapshot.details.length!==301||new Set(snapshot.details.map(s=>s.school_id)).size!==301)throw Error('Invalid directory');
let count=0;
for(const row of snapshot.details){
 for(const [key,field] of [['need','international_need_aid'],['merit','international_merit_aid']]){
  const fact=facts[row.school_id]?.[key];
  if(!fact||!Object.prototype.hasOwnProperty.call(fact,'expected_value'))continue;
  if(![null,'yes','no','limited'].includes(fact.expected_value)||!fact.sources?.length)throw Error('Invalid reviewed aid');
  if(row[field]!==fact.expected_value){row[field]=fact.expected_value;count++}
 }
}
const raw=JSON.stringify(snapshot),hash=createHash('sha256').update(raw).digest('hex');
const url='data/schools-'+hash.slice(0,16)+'.json';
fs.writeFileSync(path.join(root,url),raw);
fs.writeFileSync(path.join(root,'snapshot-config.js'),'const CollegeSnapshot = Object.freeze('+JSON.stringify({...config,url,sha256:hash})+');\n');
console.log(JSON.stringify({aidFieldsChanged:count,snapshot:url,sha256:hash}));
