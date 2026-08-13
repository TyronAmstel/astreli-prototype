import 'server-only';import {createHmac,timingSafeEqual} from 'crypto';import {cookies} from 'next/headers';
const COOKIE='astreli_admin';const secret=()=>process.env.ADMIN_SESSION_SECRET||'';
const sign=(value:string)=>createHmac('sha256',secret()).update(value).digest('hex');
export async function isAdmin(){const value=(await cookies()).get(COOKIE)?.value;if(!value||!secret())return false;const [email,expires,signature]=value.split('|');if(!email||!expires||!signature||Number(expires)<Date.now())return false;const expected=sign(`${email}|${expires}`);return signature.length===expected.length&&timingSafeEqual(Buffer.from(signature),Buffer.from(expected))&&email===process.env.ADMIN_EMAIL}
export async function createAdminSession(email:string){const expires=String(Date.now()+8*60*60*1000),value=`${email}|${expires}`;(await cookies()).set(COOKIE,`${value}|${sign(value)}`,{httpOnly:true,secure:process.env.NODE_ENV==='production',sameSite:'strict',path:'/',maxAge:8*60*60})}
export async function clearAdminSession(){(await cookies()).delete(COOKIE)}
export async function validCredentials(email:string,password:string){if(email!==process.env.ADMIN_EMAIL||!process.env.ADMIN_PASSWORD_HASH)return false;const {createHash}=await import('crypto');const digest=`sha256:${createHash('sha256').update(password).digest('hex')}`;const target=process.env.ADMIN_PASSWORD_HASH;return digest.length===target.length&&timingSafeEqual(Buffer.from(digest),Buffer.from(target))}

