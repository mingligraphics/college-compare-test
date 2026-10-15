/* Link sharing only; stable school IDs open the corresponding detail/comparison. */
const CollegeShare=(()=>{
 const base=new URL('./',location.href).href;
 function link(rows){const u=new URL(base);rows.forEach(s=>u.searchParams.append('school',s.school_id));u.searchParams.set('view',rows.length===2?'compare':'detail');return u.href}
 return {link};
})();
