import 'server-only';
export type DraftContext={customerName?:string;summary?:string;history:string[];product?:string;waitlistStatus?:string;preferences?:string};
export interface AIService{generateStylistReply(context:DraftContext):Promise<string>;generateAdminDraft(context:DraftContext):Promise<string>;summarizeConversation(history:string[]):Promise<string>}
class FallbackAI implements AIService{async generateStylistReply(c:DraftContext){return `Thanks${c.customerName?` ${c.customerName}`:''} — I’ve noted that. A human ASTRELI stylist can continue from here.`}async generateAdminDraft(c:DraftContext){return `Hi${c.customerName?` ${c.customerName}`:''} — good news. ${c.product||'The piece you joined the list for'} is moving toward its next batch. I have your preferences noted${c.preferences?` (${c.preferences})`:''}. Would you like me to keep one in mind for you when reservations open?`}async summarizeConversation(history:string[]){return history.slice(-8).join(' ').slice(0,500)}}
export const aiService:AIService=new FallbackAI();

