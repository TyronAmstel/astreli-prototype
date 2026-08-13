import 'server-only';import {backendConfigured,db} from './supabase';import {demoConversations,demoCustomers,demoDemand} from './demo-data';
export async function customers(){return backendConfigured()?db<Record<string,unknown>[]>('customers?select=*&order=updated_at.desc'):demoCustomers}
export async function demand(){return backendConfigured()?db<Record<string,unknown>[]>('product_demand?select=*&order=unique_customers.desc'):demoDemand}
export async function conversations(){return backendConfigured()?db<Record<string,unknown>[]>('conversations?select=*&order=last_message_at.desc'):demoConversations}
export async function conversation(id:string){const list=await conversations();return list.find(item=>item.id===id)||null}
export async function customer(id:string){const list=await customers();return list.find(item=>item.id===id)||null}
export async function interests(customerId?:string){if(!backendConfigured())return[];return db<Record<string,unknown>[]>(`product_interests?select=*,products(name,slug),drops(name)&order=created_at.desc${customerId?`&customer_id=eq.${encodeURIComponent(customerId)}`:''}`)}
export async function messages(conversationId?:string){if(!backendConfigured())return[];return db<Record<string,unknown>[]>(`messages?select=*&order=created_at.asc${conversationId?`&conversation_id=eq.${encodeURIComponent(conversationId)}`:''}`)}
