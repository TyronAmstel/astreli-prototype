import {products,Product} from './catalog';

export type LeadStatus='new'|'qualified'|'reservation_intent'|'human_requested'|'event_interested';
export type LeadRecord={timestamp:string;sessionId:string;source?:string;campaign?:string;utm:Record<string,string>;landingPage:string;productViewed?:string;conversationStarted:boolean;name?:string;email?:string;whatsapp?:string;productInterest?:string;stylePreference?:string;ringSize?:string;budget?:string;reservationIntent?:boolean;depositStatus:'not_started'|'link_requested'|'paid';astreliNightInterest?:boolean;eventAttended?:boolean;friendReferral?:string;repeatReservation?:boolean;repeatCustomer?:boolean;conversationStatus:LeadStatus;transcript:string[]};

export const currentDrop={number:'01',name:'COLOUR POP',line:'Eight pieces. Zero quiet entrances.',description:'Lab-grown colour, polished silver and shapes designed for plans after dark.',ids:[1,2,4,10,11,12,102,108],reveal:'DROP 02 · AFTER HOURS'};
export const featuredIds=[1,2,10,12];
export const socialPrice=(product:Product)=>({1:890,2:690,10:980,12:1190,4:490,11:720,102:790,108:820}[product.id]||Math.round(product.price*2.2/10)*10);
export const featuredProducts=featuredIds.map(id=>products.find(product=>product.id===id)!);
export const nextNight={city:'Kuala Lumpur',date:'26 September',venue:'Private location announced to guests',copy:'New jewellery. Drinks. Friends. Your ASTRELI piece waiting for you.'};
