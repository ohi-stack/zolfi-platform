import Head from 'next/head';
import Link from 'next/link';
import type { ReactNode } from 'react';

const navItems = [
  ['Home', '/'],
  ['About', '/about'],
  ['Services', '/services'],
  ['Quantum', '/quantum'],
  ['Cases', '/cases'],
  ['Research', '/research'],
  ['Developers', '/developers'],
  ['Blog', '/blog'],
  ['Contact', '/contact'],
];

export default function Layout({ title, description, children }: { title: string; description: string; children: ReactNode }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="site-shell">
        <header className="header">
          <Link href="/" className="brand">Zolfi™</Link>
          <nav className="top-nav" aria-label="Primary navigation">
            {navItems.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
          </nav>
          <Link href="/contact" className="nav-cta">Request Demo</Link>
        </header>
        {children}
        <footer className="footer">
          <div><strong>Zolfi™</strong><p>Blockchain development and security intelligence for the next era of digital trust.</p></div>
          <div className="footer-links"><Link href="/legal">Legal</Link><Link href="/developers">Developers</Link><Link href="/contact">Contact</Link></div>
        </footer>
      </div>
    </>
  );
}
