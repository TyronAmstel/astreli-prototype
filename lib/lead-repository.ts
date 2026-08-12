import type {LeadRecord} from '@/data/social-commerce';

export interface LeadRepository{save(lead:LeadRecord):Promise<void>}
class BrowserLeadRepository implements LeadRepository{
 async save(lead:LeadRecord){
  if(typeof window==='undefined')return;
  const leads:LeadRecord[]=JSON.parse(localStorage.getItem('astreli-social-leads')||'[]');
  const index=leads.findIndex(item=>item.sessionId===lead.sessionId);
  if(index>=0)leads[index]=lead;else leads.push(lead);
  localStorage.setItem('astreli-social-leads',JSON.stringify(leads));
 }
}
export const leadRepository:LeadRepository=new BrowserLeadRepository();
