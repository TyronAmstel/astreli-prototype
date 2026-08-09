import type {Metadata} from 'next';
import {notFound} from 'next/navigation';
import ProductDetail from '@/components/ProductDetail';
import {productBySlug,products,productSlug} from '@/data/catalog';

export function generateStaticParams(){return products.map(product=>({slug:productSlug(product)}));}

export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{
 const {slug}=await params;
 const product=productBySlug.get(slug);
 return product?{title:`${product.name} — ASTRELI`,description:`${product.carat} lab-grown diamond in ${product.metal}. ${product.description}`}:{title:'Product — ASTRELI'};
}

export default async function ProductPage({params}:{params:Promise<{slug:string}>}){
 const {slug}=await params;
 const product=productBySlug.get(slug);
 if(!product)notFound();
 return <ProductDetail product={product}/>;
}
