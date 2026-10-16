/* V7.0: aggregate, memory-only diagnostics. No storage, network, payload or user IDs. */
const CollegeMetrics=(()=>{
 const names=['school_search','school_detail_view','school_compare','consultation_click','qr_display'];
 const totals=Object.fromEntries(names.map(n=>[n,0]));
 let intent='';
 function increment(name){if(!names.includes(name))return false;totals[name]++;return true}
 return Object.freeze({increment,intent(name){intent=name},consume(name){if(intent!==name)return false;intent='';return increment(name)},snapshot:()=>({...totals}),mode:'local-memory-only'});
})();
function countEvent(){/* Legacy automatic/filter/load events intentionally disabled. */}
