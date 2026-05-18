import Link from "next/link";

const navItems = [
  { label: "Beranda", href: "/" },
  { label: "Nilai Hidup", href: "/#nilai-hidup" },
  { label: "Analisis", href: "/#analisis" },
  { label: "Dunia", href: "/#dunia" },
  { label: "Opini", href: "/#opini" },
  { label: "Podcast", href: "/#podcast" },
  { label: "Cerpen", href: "/#cerpen" }
];

export function Header() {
  return (
    <header className="site-header">
      <Link className="logo" href="/">
        <span>NNN</span>
        <strong>
          Narapati
          <br />
          News Network
        </strong>
      </Link>
      <nav className="desktop-nav" aria-label="Navigasi utama">
        {navItems.map((item, index) => (
          <Link className={index === 0 ? "active" : ""} href={item.href} key={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="header-actions">
        <button className="search-btn" type="button" aria-label="Cari" />
        <Link className="subscribe" href="/studio">
          Studio
        </Link>
      </div>
    </header>
  );
}
