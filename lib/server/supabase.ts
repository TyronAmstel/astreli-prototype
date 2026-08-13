import 'server-only';
const url=()=>process.env.NEXT_PUBLIC_SUPABASE_URL?.replace(/\/$/,'');const key=()=>process.env.SUPABASE_SERVICE_ROLE_KEY;
export const backendConfigured=()=>Boolean(url()&&key());
export async function db<T>(path:string,init:RequestInit={}){if(!backendConfigured())throw new Error('ASTRELI_BACKEND_NOT_CONFIGURED');const response=await fetch(`${url()}/rest/v1/${path}`,{...init,headers:{apikey:key()!,Authorization:`Bearer ${key()}`,'Content-Type':'application/json',Prefer:'return=representation',...init.headers},cache:'no-store'});if(!response.ok)throw new Error(`SUPABASE_${response.status}:${await response.text()}`);const text=await response.text();return(text?JSON.parse(text):null) as T}
export async function rpc<T>(name:string,payload:unknown){return db<T>(`rpc/${name}`,{method:'POST',body:JSON.stringify({payload})})}

