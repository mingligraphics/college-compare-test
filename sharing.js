/* TEST project URLs always resolve to an existing Pages document. */
const CollegeShare=(()=>{
 const base=new URL('./',location.href);base.search='';base.hash='';
 // A compact independent backup survives dropped repeated school parameters.
 const query=new URLSearchParams(location.search),hash=new URLSearchParams(location.hash.slice(1));
 const backup=query.get('cc')||hash.get('cc');
 if(backup){try{const ids=JSON.parse(backup);if(Array.isArray(ids)&&ids.length>=1&&ids.length<=2&&ids.every(id=>typeof id==='string'&&id.length<150)){
 const u=new URL(location.href);u.searchParams.delete('school');ids.forEach(id=>u.searchParams.append('school',id));u.searchParams.set('view',ids.length===2?'compare':'detail');history.replaceState(history.state,'',u);
 }}catch{}}
 function link(rows){const u=new URL(base),ids=rows.map(s=>s.school_id);ids.forEach(id=>u.searchParams.append('school',id));u.searchParams.set('view',ids.length===2?'compare':'detail');u.searchParams.set('cc',JSON.stringify(ids));u.hash=new URLSearchParams({cc:JSON.stringify(ids)}).toString();return u.href}
 return {link};
})();
