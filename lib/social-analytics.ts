export type SocialEvent='hero_cta_click'|'drop_viewed'|'product_viewed'|'stylist_opened'|'recommendation_shown'|'conversation_started'|'lead_captured'|'join_list_clicked'|'waitlist_explanation_viewed'|'waitlist_conversation_started'|'waitlist_question'|'waitlist_joined'|'waitlist_product'|'product_joined'|'waitlist_preference'|'reservation_notification_requested'|'reservation_invited'|'reservation_opened'|'reservation_started'|'reservation_completed'|'reservation_intent'|'night_interest'|'human_handoff'|'friend_invite'|'repeat_waitlist_joined';
export function track(event:SocialEvent,properties:Record<string,unknown>={}){
 if(typeof window==='undefined')return;
 window.dispatchEvent(new CustomEvent('astreli:analytics',{detail:{event,properties,timestamp:new Date().toISOString()}}));
 if(process.env.NODE_ENV==='development')console.info('[ASTRELI metric]',event,properties);
}
