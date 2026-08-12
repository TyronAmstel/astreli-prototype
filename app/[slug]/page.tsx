import type {Metadata} from 'next';
import Link from 'next/link';
import {ArrowLeft,Instagram} from 'lucide-react';
import {infoPageBySlug,infoPages} from '@/data/info-pages';
import {notFound} from 'next/navigation';

export function generateStaticParams(){return infoPages.map(({slug})=>({slug}));}

export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{
 const {slug}=await params;
 const page=infoPageBySlug.get(slug);
 return page?{title:`${page.title} — ASTRELI`,description:page.intro}:{};
}

export default async function InfoPage({params}:{params:Promise<{slug:string}>}){
 const {slug}=await params;
 const page=infoPageBySlug.get(slug);
 if(!page)notFound();
 return <>
  <div className="announcement">Complimentary delivery &amp; returns</div>
  <header className="info-header"><Link className="brand" href="/"><b>ASTRELI</b><span>LAB-GROWN DIAMONDS</span></Link><Link href="/drop">COLLECTIONS</Link></header>
  <main className="info-main">
   <Link className="info-back" href="/"><ArrowLeft/> BACK TO SHOP</Link>
   <header><small>{page.eyebrow}</small><h1>{page.title}</h1><p>{page.intro}</p></header>
   <div className="info-sections">{page.sections.map(section=><section key={section.heading}><h2>{section.heading}</h2>{section.body.map(paragraph=><p key={paragraph}>{paragraph}</p>)}{slug==='contact'&&section.heading==='Speak with us'&&<a className="info-email" href="mailto:hello@astreli.com">hello@astreli.com</a>}</section>)}</div>
  </main>
  <footer className="info-footer"><Link className="brand footer-brand" href="/"><b>ASTRELI</b><span>LAB-GROWN DIAMONDS</span></Link><div className="footer-links">{infoPages.map(item=><Link key={item.slug} href={`/${item.slug}`}>{item.title}</Link>)}</div><div className="footer-bottom"><span>© 2026 ASTRELI</span><a href="#" aria-label="Instagram"><Instagram/></a></div></footer>
 </>;
}
