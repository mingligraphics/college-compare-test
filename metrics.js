/* Local-only aggregate prototype. No payloads, identifiers or network collection. */
const CollegeMetrics=(()=>{
 const events=['search','filter','detail','compare','load_more','consultation'];
 const totals=Object.create(null);
 function increment(event){if(!events.includes(event))return false;const day=new Date().toISOString().slice(0,10);totals[day]??=Object.fromEntries(events.map(e=>[e,0]));totals[day][event]++;return true}
 return {increment,snapshot:()=>JSON.parse(JSON.stringify(totals))};
})();
function countEvent(event){CollegeMetrics.increment(event)}
