/* Local canvas and QR rendering: no remote images, fonts, or QR service. */
const CollegeShare=(()=>{
 const base='https://mingligraphics.github.io/college-compare-test/';
 function link(rows){const u=new URL(base);rows.forEach(s=>u.searchParams.append('school',s.school_id));u.searchParams.set('view',rows.length===2?'compare':'detail');return u.href}
 function qrCanvas(url){const qr=qrcode(0,'M');qr.addData(url);qr.make();const n=qr.getModuleCount(),scale=6,c=document.createElement('canvas');c.width=c.height=(n+8)*scale;const x=c.getContext('2d');x.fillStyle='#fff';x.fillRect(0,0,c.width,c.height);x.fillStyle='#18342f';for(let y=0;y<n;y++)for(let z=0;z<n;z++)if(qr.isDark(y,z))x.fillRect((z+4)*scale,(y+4)*scale,scale,scale);return c}
 function qrURL(url){return qrCanvas(url).toDataURL('image/png')}
 function fields(s){const c=CollegeDisplay.cost(s),ps=Array.isArray(s.signature_programs)?s.signature_programs:[];return [
 ['学校',s.school_name_cn||s.school_name],['英文名',s.school_name],['排名类别',ranking(s)],['地区 / 性质',[schoolLocation(s),control(s)].join(' · ')],
 ['年度总费用（美元）',CollegeDisplay.costText(s)],['费用口径',c.reference?[c.reference.note_cn,c.reference.scope_cn,c.reference.basis_cn].filter(Boolean).join('；'):'国际生额外费用未核验，实际支出可能更高。'],
 ['本科优势 / 代表专业',ps.length?ps.map(p=>p.name_cn||p.name_en).filter(Boolean).join('、'):'暂无已核实数据（未录入不代表没有该专业）']];}
 function poster(rows,url){const canvas=document.createElement('canvas');canvas.width=1200;canvas.height=3600;const ctx=canvas.getContext('2d');ctx.fillStyle='#f6f7f2';ctx.fillRect(0,0,1200,3600);let y=64;
 function textLines(text,x,top,width,size,color,bold){ctx.font=`${bold?'600 ':''}${size}px -apple-system,BlinkMacSystemFont,"PingFang SC","Microsoft YaHei",sans-serif`;ctx.fillStyle=color;let line='',yy=top;for(const ch of String(text||'暂无数据')){if(ch==='\n'||ctx.measureText(line+ch).width>width){ctx.fillText(line,x,yy);yy+=size*1.5;line=ch==='\n'?'':ch}else line+=ch}if(line)ctx.fillText(line,x,yy);return yy+size*1.5}
 y=textLines('明希教育 · College Compare',60,y,1080,30,'#245a49',true)+20;y=textLines(rows.length===2?'两校比较 · 分享给家人一起看':'大学资料 · 发现适合的选择',60,y,1080,44,'#18342f',true)+24;
 const fs=rows.map(fields),col=(1080-(rows.length-1)*32)/rows.length;
 for(let i=0;i<fs[0].length;i++){y=textLines(fs[0][i][0],60,y,1080,24,'#68766f',false)+8;let bottom=y;rows.forEach((s,j)=>{bottom=Math.max(bottom,textLines(fs[j][i][1],60+j*(col+32),y,col,i===0?36:28,'#18342f',i===0))});y=bottom+26;ctx.strokeStyle='#dde4dc';ctx.beginPath();ctx.moveTo(60,y-12);ctx.lineTo(1140,y-12);ctx.stroke()}
 y=textLines('学校公布的年度预算，非仅学费；部分未含保险、国际交通。学年与范围可能不同。优势专业依据及原年份请扫码查看；不同类别排名不宜直接比较。',60,y+10,1080,24,'#68766f',false)+20;
 const qr=qrCanvas(url);ctx.imageSmoothingEnabled=false;ctx.drawImage(qr,60,y,240,240);let yy=textLines('微信扫码查看完整'+(rows.length===2?'两校比较':'学校资料'),330,y+48,810,32,'#18342f',true);yy=textLines('长按保存图片，发送给家人或升学顾问',330,yy+16,810,25,'#68766f',false);textLines('数据生成日期：'+new Date().toLocaleDateString('zh-CN')+' · 测试站',330,yy+16,810,22,'#68766f',false);y+=280;
 const out=document.createElement('canvas');out.width=1200;out.height=Math.ceil(y);out.getContext('2d').drawImage(canvas,0,0,1200,y,0,0,1200,y);return out.toDataURL('image/png');}
 function open(rows,host){let section=host.querySelector('.share-output');if(!section){section=document.createElement('section');section.className='share-output';host.append(section)}section.replaceChildren();const url=link(rows),title=document.createElement('h3');title.textContent='分享图片';section.append(title);const note=document.createElement('p');note.textContent='微信内可长按图片保存后发送；也可下载 PNG 或复制链接。扫码打开此学校／比较的网页版。';section.append(note);
 const actions=document.createElement('div');actions.className='share-actions';section.append(actions);const copy=document.createElement('button');copy.textContent='复制链接';copy.onclick=async()=>{try{await navigator.clipboard.writeText(url);copy.textContent='已复制链接'}catch{prompt('复制以下链接',url)}};actions.append(copy);const anchor=document.createElement('a');anchor.href=url;anchor.textContent='打开分享链接';actions.append(anchor);
 try{const src=poster(rows,url),image=document.createElement('img');image.alt='明希教育学校分享图片，包含学校资料及网页版二维码';image.src=src;section.append(image);const download=document.createElement('a');download.href=src;download.download='mingxi-'+rows.map(s=>s.school_id).join('-')+'.png';download.textContent='下载 PNG';actions.prepend(download)}catch(e){const msg=document.createElement('p');msg.textContent='当前浏览器暂时无法生成图片，请复制链接分享。';section.append(msg)}section.scrollIntoView({block:'start',behavior:'smooth'});}
 return {open,qrURL,link};
})();
