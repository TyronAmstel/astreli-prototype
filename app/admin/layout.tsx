import {redirect} from 'next/navigation';import {isAdmin} from '@/lib/server/auth';import {backendConfigured} from '@/lib/server/supabase';import AdminShell from '@/components/AdminShell';
export default async function Layout({children}:{children:React.ReactNode}){if(!await isAdmin())redirect('/admin/login');return <AdminShell demo={!backendConfigured()}>{children}</AdminShell>}
