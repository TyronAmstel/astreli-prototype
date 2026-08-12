import type { Metadata } from 'next';
import './globals.css';
import './overrides.css';
import './social.css';
import './hybrid.css';
import StylistProvider from '@/components/StylistProvider';

export const metadata: Metadata = {
  title: 'ASTRELI — Discover the piece. Then talk.',
  description: 'Curated lab-grown diamond jewellery in silver. Browse collections, talk to ASTRELI and reserve personally.',
  openGraph: { title: 'ASTRELI', description: 'Curated collections. Conversation only.', type: 'website' }
};
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body><StylistProvider>{children}</StylistProvider></body></html>; }
