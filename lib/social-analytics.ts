export type SocialEvent='conversation_started'|'lead_captured'|'reservation_intent'|'night_interest'|'human_handoff'|'friend_invite'|'product_viewed';
export function track(event:SocialEvent,properties:Record<string,unknown>={}){
 if(typeof window==='undefined')return;
 window.dispatchEvent(new CustomEvent('astreli:analytics',{detail:{event,properties,timestamp:new Date().toISOString()}}));
 if(process.env.NODE_ENV==='development')console.info('[ASTRELI metric]',event,properties);
}
