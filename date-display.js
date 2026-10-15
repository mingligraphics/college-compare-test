/* Translate rendered text only; leave raw data, URLs and attributes intact. */
(() => {
 const pattern = /\bFall\s*(20\d{2})\b/gi;
 function translate(node) {
  if (node.nodeType === Node.TEXT_NODE) {
   if (!node.parentElement?.closest('script,style,textarea,code,pre')) {
    const text = node.nodeValue.replace(/(20\d{2})[-–](\d{2})\s*application cycle\s*[（(]\s*(?:Fall\s*)?(20\d{2})(?:年秋季)?\s*entry\s*[)）]/gi, '$1–$2申请季（$3年秋季入学）').replace(pattern, '$1年秋季').replace(/(20\d{2})-(\d{2})(?=学年)/g, '$1–$2');
    if (text !== node.nodeValue) node.nodeValue = text;
   }
  } else if (node.nodeType === Node.ELEMENT_NODE) {
   if (node.matches('script,style,textarea,code,pre')) return;
   for (const child of node.childNodes) translate(child);
  }
 }
 translate(document.body);
 new MutationObserver(records => {
  for (const record of records) {
   if (record.type === 'characterData') translate(record.target);
   else for (const node of record.addedNodes) translate(node);
  }
 }).observe(document.body, {subtree:true, childList:true, characterData:true});
})();
