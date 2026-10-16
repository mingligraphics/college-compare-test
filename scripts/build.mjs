import fs from 'node:fs';
import path from 'node:path';
import {execFileSync} from 'node:child_process';
const root=path.resolve(import.meta.dirname,'..'),out=path.join(root,'dist');
const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
const markup=html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g,m=>m.slice(0,m.indexOf('>')+1));
const assets=[...markup.matchAll(/(?:src|href)="([^"?#]+)(?:\?[^"#]*)?"/g)].map(x=>x[1]).filter(x=>!x.includes(':')&&!x.startsWith('#')&&!x.startsWith('?'));
for(const name of assets)if(!fs.existsSync(path.join(root,name)))throw Error('Missing asset '+name);
for(const name of fs.readdirSync(root).filter(n=>n.endsWith('.js')))execFileSync(process.execPath,['--check',path.join(root,name)]);
let n=0;for(const m of html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/g)){if(!m[1].trim())continue;execFileSync(process.execPath,['--check','--input-type=commonjs'],{input:m[1]});n++;}
fs.mkdirSync(out,{recursive:true});
for(const name of fs.readdirSync(root)){if(/\.(html|js|css|json|png|jpeg|svg)$/.test(name)&&name!=='package.json')fs.copyFileSync(path.join(root,name),path.join(out,name));}
fs.cpSync(path.join(root,'vendor'),path.join(out,'vendor'),{recursive:true});fs.copyFileSync(path.join(root,'.nojekyll'),path.join(out,'.nojekyll'));
console.log('Static build succeeded; JS syntax, inline scripts ('+n+'), local assets validated. Output: '+out);
