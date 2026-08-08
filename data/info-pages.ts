export type InfoSection={heading:string;body:string[]};
export type InfoPage={slug:string;eyebrow:string;title:string;intro:string;sections:InfoSection[]};

export const infoPages:InfoPage[]=[
 {slug:'delivery-returns',eyebrow:'CLIENT CARE',title:'Delivery & Returns',intro:'Complimentary, considered service from our studio to your door.',sections:[
  {heading:'Complimentary delivery',body:['Every ASTRELI order includes complimentary tracked delivery. Pieces are carefully inspected, presented in our signature packaging and dispatched once they are ready.','You will receive tracking details by email as soon as your order leaves our studio. Delivery timing is confirmed at checkout and may vary by destination.']},
  {heading:'Returns',body:['We accept unworn pieces returned in their original condition and packaging within 30 days of delivery. Personalised, engraved or resized pieces cannot be returned unless faulty.','To begin a return, contact our client-care team with your order number. We will share the return instructions and keep you updated until your refund is complete.']}
 ]},
 {slug:'warranty',eyebrow:'THE ASTRELI PROMISE',title:'Warranty',intro:'Made for everyday wear, supported with thoughtful aftercare.',sections:[
  {heading:'Two-year warranty',body:['ASTRELI jewellery is covered for two years from delivery against manufacturing defects in materials and workmanship. If a piece is found to be defective, we will assess it and repair or replace it where appropriate.']},
  {heading:'What is not covered',body:['Natural wear, accidental damage, loss, misuse, unauthorised repairs and changes to plating are not manufacturing defects. Gold plating is a surface finish and will evolve with wear.','We are still happy to assess pieces outside warranty and recommend the best repair or refresh option.']}
 ]},
 {slug:'materials',eyebrow:'MATERIALS & CARE',title:'Our Materials',intro:'Real lab-grown diamonds set in sterling silver, with gold plating where the design calls for warmth.',sections:[
  {heading:'Lab-grown diamonds',body:['Lab-grown diamonds have the same optical, physical and chemical properties as mined diamonds. We select them for brightness, colour and character, then set them into small, considered collections.']},
  {heading:'Sterling silver',body:['Our core metal is sterling silver, including recycled sterling silver in selected sculptural pieces. Silver may naturally soften in tone over time; a gentle polishing cloth restores its brightness.']},
  {heading:'18k gold-plated sterling silver',body:['Selected pieces receive an 18k gold finish over sterling silver. Keep plated jewellery away from perfume, lotions, chlorine and salt water, and store pieces separately to preserve the finish.']}
 ]},
 {slug:'contact',eyebrow:'CLIENT CARE',title:'Contact ASTRELI',intro:'Questions about a piece, sizing or an order? We would love to help.',sections:[
  {heading:'Speak with us',body:['Email hello@astreli.com and include your order number when contacting us about an existing purchase. We aim to reply within two business days.']},
  {heading:'Studio hours',body:['Monday to Friday, 09:00–17:00 CET. Messages received outside studio hours are answered on the next business day.']}
 ]},
 {slug:'privacy',eyebrow:'LEGAL',title:'Privacy',intro:'A clear overview of how ASTRELI handles information shared through this prototype.',sections:[
  {heading:'Information we collect',body:['We may receive information you choose to provide, such as an email address, contact request or order details. Basic technical information may also be processed to operate, secure and improve the website.']},
  {heading:'How we use it',body:['Information is used to provide requested services, communicate with you, improve the experience and meet legal obligations. We do not sell personal information.']},
  {heading:'Your choices',body:['You may ask to access, correct or delete your personal information, or unsubscribe from marketing at any time by contacting hello@astreli.com. This prototype does not process real payments.']}
 ]},
 {slug:'terms',eyebrow:'LEGAL',title:'Terms',intro:'The essential terms for browsing and using the ASTRELI prototype.',sections:[
  {heading:'Prototype status',body:['This website is a front-end prototype created to demonstrate the ASTRELI shopping experience. Product availability, specifications and commercial terms are illustrative until a full store is launched. The prototype checkout does not take payment.']},
  {heading:'Website use',body:['Content, branding, imagery and designs may not be copied or used commercially without permission. Please do not attempt to disrupt, reverse engineer or misuse the website.']},
  {heading:'Product information',body:['We aim to present colour, scale, materials and pricing clearly. Screen settings and handcrafted details can create small visual differences. Final product and service terms will be confirmed before any real purchase.']}
 ]}
];

export const infoPageBySlug=new Map(infoPages.map(page=>[page.slug,page]));
