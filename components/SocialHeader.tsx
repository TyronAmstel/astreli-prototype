'use client';
import Link from 'next/link';
import {MessageCircle} from 'lucide-react';
import {useStylist} from './StylistProvider';

export default function SocialHeader(){const {openChat}=useStylist();return <header className="social-header"><Link className="social-logo" href="/">ASTRELI<span>LABS IN SILVER</span></Link><nav><Link href="/#drop">CURRENT DROP</Link><Link href="/astreli-night">ASTRELI NIGHT</Link><Link href="/#worn">WORN BY ASTRELI</Link><Link href="/#about">ABOUT</Link></nav><button onClick={()=>openChat()}><MessageCircle/> TALK TO ASTRELI</button></header>}
