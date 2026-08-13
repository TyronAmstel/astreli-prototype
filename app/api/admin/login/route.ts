import {NextResponse} from 'next/server';import {createAdminSession,validCredentials} from '@/lib/server/auth';
export async function POST(request:Request){const body=await request.json().catch(()=>null);if(!body||typeof body.email!=='string'||typeof body.password!=='string'||!await validCredentials(body.email,body.password))return NextResponse.json({error:'Invalid credentials'},{status:401});await createAdminSession(body.email);return NextResponse.json({ok:true})}

