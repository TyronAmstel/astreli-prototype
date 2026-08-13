import type { Metadata } from 'next';
import './globals.css';
import './overrides.css';
import './social.css';
import './hybrid.css';
import './waitlist.css';
import './batches.css';
import './demand.css';
import './admin.css';
import StylistProvider from '@/components/StylistProvider';

export const metadata: Metadata = {
  title: 'ASTRELI — Find your piece. We’ll take it from there.',
  description: 'Your personal jewellery stylist with access to curated lab-grown diamond Drops.',
  openGraph: { title: 'ASTRELI', description: 'Find your piece. Join the list. We’ll take it from there.', type: 'website' }
};
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body><StylistProvider>{children}</StylistProvider></body></html>; }
