'use client';
import {useEffect,useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {ArrowLeft,Check,Diamond,Instagram,Minus,PackageCheck,Plus,ShieldCheck,Sparkles} from 'lucide-react';
import {infoPages} from '@/data/info-pages';
import {Product} from '@/data/catalog';

const money=(n:number)=>`€${n.toLocaleString('en')}`;

function ProductImage({product}:{product:Product}){
 const position=`${(product.sprite%4)*33.333}% ${product.sheet==='electric'?Math.floor(product.sprite/4)*100:Math.floor(product.sprite/4)*50}%`;
 return <div className={`product-art ${product.sheet==='electric'?'electric-art':''}`} role="img" aria-label={`Studio photograph of the ${product.name}`} style={product.image?{backgroundImage:`url(${product.image})`,backgroundPosition:'center',backgroundSize:'cover'}:{backgroundPosition:position}}/>;
}

export default function ProductDetail({product}:{product:Product}){
 const [qty,setQty]=useState(1),[size,setSize]=useState('52'),[added,setAdded]=useState(false),[bagCount,setBagCount]=useState(0);
 useEffect(()=>{try{const cart=JSON.parse(localStorage.getItem('astreli-cart')||'[]');setBagCount(cart.reduce((sum:number,item:{qty:number})=>sum+item.qty,0))}catch{}},[]);
 const add=()=>{try{const cart=JSON.parse(localStorage.getItem('astreli-cart')||'[]');const chosenSize=product.kind==='Ring'?size:undefined;const index=cart.findIndex((item:{product:Product;size?:string})=>item.product.id===product.id&&item.size===chosenSize);if(index<0)cart.push({product,qty,size:chosenSize});else cart[index].qty+=qty;localStorage.setItem('astreli-cart',JSON.stringify(cart));setBagCount(cart.reduce((sum:number,item:{qty:number})=>sum+item.qty,0));setAdded(true)}catch{setAdded(false)}};
 return <div className="product-page">
  <div className="announcement">Complimentary delivery &amp; returns</div>
  <header className="product-header"><Link className="brand" href="/"><b>ASTRELI</b><span>LAB-GROWN DIAMONDS</span></Link><Link href="/#collections">COLLECTIONS</Link><Link href="/#collections">BAG ({bagCount})</Link></header>
  <main className="standalone-product">
   <div className="quick-gallery standalone-gallery"><div className="gallery-product"><ProductImage product={product}/><span>THE PIECE</span></div><div className={`gallery-model ${product.kind.toLowerCase()}`}><Image src={`/images/models/${product.id}.jpg`} fill priority sizes="(max-width: 600px) 88vw, 28vw" alt={`Model wearing the ${product.name}`}/><span>WORN BY ASTRELI</span></div><div className="gallery-detail"><Image src="/images/astreli-materials-detail.jpg" fill sizes="(max-width: 600px) 88vw, 28vw" alt="Lab-grown diamonds beside genuine 925 sterling silver and jewellery-setting tools"/><span>LAB DIAMONDS · 925 SILVER</span></div></div>
   <section className="quick-copy standalone-copy"><Link className="back" href="/#collections"><ArrowLeft/> BACK TO COLLECTIONS</Link><div className="pdp-kicker"><small>{product.badge||'ASTRELI COLLECTION'}</small><span><i/> IN STOCK</span></div><h1>{product.name}</h1><strong>{money(product.price)}</strong><p className="meta">{product.carat} lab-grown diamond · {product.metal}</p><div className="pdp-story"><h3>WHY YOU’LL LOVE IT</h3><p>{product.description}</p><ul><li><Diamond/>Genuine lab-grown diamond brilliance</li><li><Sparkles/>Designed to wear alone or layer</li><li><ShieldCheck/>Two-year manufacturing warranty</li></ul></div>{product.kind==='Ring'&&<fieldset><legend>SELECT RING SIZE <Link href="/contact">SIZE HELP</Link></legend><div>{['48','50','52','54','56'].map(value=><button className={value===size?'on':''} key={value} onClick={()=>setSize(value)}>{value}</button>)}</div></fieldset>}<div className="buy-row"><div className="qty"><button aria-label="Decrease quantity" onClick={()=>setQty(Math.max(1,qty-1))}><Minus/></button><span>{qty}</span><button aria-label="Increase quantity" onClick={()=>setQty(value=>value+1)}><Plus/></button></div><button className="add" onClick={add}>{added?'ADDED TO BAG':`ADD TO BAG — ${money(product.price*qty)}`}</button></div><div className="pdp-assurance"><p><PackageCheck/> Complimentary insured delivery &amp; 30-day returns</p><p><Check/> Presented in signature ASTRELI packaging</p></div><nav className="product-care" aria-label="Product care information"><Link href="/delivery-returns">Delivery &amp; returns</Link><Link href="/warranty">Warranty</Link><Link href="/materials">Materials &amp; care</Link></nav>
   </section>
  </main>
  <footer className="info-footer"><Link className="brand footer-brand" href="/"><b>ASTRELI</b><span>LAB-GROWN DIAMONDS</span></Link><div className="footer-links">{infoPages.map(item=><Link key={item.slug} href={`/${item.slug}`}>{item.title}</Link>)}</div><div className="footer-bottom"><span>© 2026 ASTRELI</span><a href="#" aria-label="Instagram"><Instagram/></a></div></footer>
 </div>;
}
