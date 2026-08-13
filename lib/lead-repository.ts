import type {LeadRecord} from '@/data/social-commerce';

export interface LeadRepository{save(lead:LeadRecord):Promise<void>}
class BrowserLeadRepository implements LeadRepository{
 async save(lead:LeadRecord){
  if(typeof window==='undefined')return;
  const leads:LeadRecord[]=JSON.parse(localStorage.getItem('astreli-social-leads')||'[]');
  const index=leads.findIndex(item=>item.sessionId===lead.sessionId);
  if(index>=0)leads[index]=lead;else leads.push(lead);
  localStorage.setItem('astreli-social-leads',JSON.stringify(leads));
  const messages=lead.transcript.map((line,index)=>{const split=line.indexOf(': ');return{from:line.slice(0,split),text:line.slice(split+2),index}});
  const response=await fetch('/api/conversations/ingest',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({...lead,messages})}).catch(error=>{console.error('ASTRELI persistence unavailable',error);return null});
  if(response&&!response.ok)console.error('ASTRELI persistence rejected',await response.text());
 }
}
export const leadRepository:LeadRepository=new BrowserLeadRepository();
