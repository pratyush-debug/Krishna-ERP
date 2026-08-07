export default async function handler(req,res){
  const base='https://raw.githubusercontent.com/pratyush-debug/Krishna-ERP/main/index.html';
  const r=await fetch(base,{headers:{'User-Agent':'Pratyush-KR-Inventory'}});
  if(!r.ok){res.status(502).send('Unable to load inventory app');return;}
  let html=await r.text();
  const tag='<script src="/supabase-sync.js"></script>';
  if(!html.includes(tag)) html=html.replace('</body>',tag+'</body>');
  res.setHeader('Content-Type','text/html; charset=utf-8');
  res.setHeader('Cache-Control','no-store, max-age=0');
  res.status(200).send(html);
}