import type { Metadata } from 'next';
import './globals.css';
import './overrides.css';
import './social.css';
import StylistProvider from '@/components/StylistProvider';

export const metadata: Metadata = {
  title: 'ASTRELI — Jewellery should be more fun',
  description: 'Fashion jewellery, conversation and ASTRELI Night. Discover Drop 01 in Kuala Lumpur.',
  openGraph: { title: 'ASTRELI', description: 'Discover. Talk. Reserve. Meet.', type: 'website' }
};
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body><StylistProvider>{children}</StylistProvider></body></html>; }
