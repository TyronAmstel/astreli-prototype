import type { Metadata } from 'next';
import './globals.css';
import './overrides.css';

export const metadata: Metadata = {
  title: 'ASTRELI — Diamonds, made to collect',
  description: 'Small collections of colourful lab-grown diamond jewellery, designed for every day.',
  openGraph: { title: 'ASTRELI', description: 'Real diamonds. New possibilities. Made to collect.', type: 'website' }
};
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body>{children}</body></html>; }
