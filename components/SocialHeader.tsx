'use client';
import Link from 'next/link';
import {MessageCircle} from 'lucide-react';
import {useStylist} from './StylistProvider';

export default function SocialHeader(){const {openStylist}=useStylist();return <header className="social-header"><Link className="social-logo" href="/">ASTRELI<span>LABS IN SILVER</span></Link><nav><Link href="/#drop">CURRENT DROP</Link><Link href="/astreli-night">ASTRELI NIGHT</Link><Link href="/#worn">WORN BY ASTRELI</Link></nav><button onClick={()=>openStylist()}><MessageCircle/> FIND MY PIECE</button></header>}
