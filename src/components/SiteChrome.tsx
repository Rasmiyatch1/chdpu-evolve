import { Link } from '@tanstack/react-router';
import { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/chdpu-logo.png.asset.json';

const links = [{ to: '/', label: 'Bosh sahifa' }, { to: '/amaliyot', label: 'Amaliyot' }, { to: '/yoriqnoma', label: 'Yo‘riqnoma' }, { to: '/faq', label: 'FAQ' }] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return <header className="site-header"><div className="site-header-inner">
    <Link to="/" className="brand" onClick={() => setOpen(false)}><img src={logo.url} alt="CHDPU" /><span className="brand-divider"/><span className="brand-label">AMALIYOT<span>RAQAMLI PLATFORMA</span></span></Link>
    <nav className={open ? 'nav-links open' : 'nav-links'} aria-label="Asosiy navigatsiya">{links.map(item => <Link key={item.to} to={item.to} activeProps={{ className: 'active' }} onClick={() => setOpen(false)}>{item.label}</Link>)}</nav>
    <Button asChild className="header-login"><Link to="/login">Platformaga kirish <ArrowUpRight /></Link></Button>
    <Button variant="ghost" size="icon" className="menu-toggle" aria-label={open ? 'Menyuni yopish' : 'Menyuni ochish'} onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</Button>
  </div></header>;
}
export function SiteFooter() {
 return <footer className="site-footer"><div className="container footer-inner"><div><div className="footer-name">CHDPU<span> / </span>AMALIYOT</div><p>Chirchiq davlat pedagogika universiteti<br/>Raqamli amaliyot platformasi</p></div><div className="footer-links"><Link to="/">Bosh sahifa</Link><Link to="/yoriqnoma">Yo‘riqnoma</Link><Link to="/faq">FAQ</Link><a href="https://cspu.uz/" target="_blank" rel="noreferrer">Universitet <ArrowUpRight size={14}/></a></div></div><div className="container footer-bottom"><span>© 2026 CHDPU. Barcha huquqlar himoyalangan.</span><span>CHIRCHIQ · O‘ZBEKISTON</span></div></footer>;
}
export const pageHead = (title: string, description: string) => ({ meta: [
 { title }, { name: 'description', content: description }, { property: 'og:title', content: title }, { property: 'og:description', content: description }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' },
] });
