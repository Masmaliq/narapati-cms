import Link from "next/link";

const pages = ["Nilai Hidup", "Analisis", "Dunia", "Opini", "Podcast", "Cerpen"];

export function Footer() {
  return (
    <>
      <footer className="site-footer">
        <div>
          <Link className="logo" href="/">
            <span>NNN</span>
            <strong>
              Narapati
              <br />
              News Network
            </strong>
          </Link>
          <p>Suara Pemimpin, Perspektif Nusantara.</p>
        </div>
        <div>
          <h3>Menu</h3>
          {pages.map((page) => (
            <Link href={`/#${page.toLowerCase().replaceAll(" ", "-")}`} key={page}>
              {page}
            </Link>
          ))}
        </div>
        <div>
          <h3>Kategori</h3>
          {pages.map((page) => (
            <Link href={`/#${page.toLowerCase().replaceAll(" ", "-")}`} key={page}>
              {page}
            </Link>
          ))}
        </div>
        <div>
          <h3>Perusahaan</h3>
          <Link href="/studio">Sanity Studio</Link>
          <Link href="mailto:halo@narapatinews.com">Kontak</Link>
        </div>
      </footer>
      <nav className="bottom-nav" aria-label="Navigasi bawah">
        <Link href="/#nilai-hidup">Nilai</Link>
        <Link href="/#analisis">Analisis</Link>
        <Link href="/#dunia">Dunia</Link>
        <Link className="active" href="/#opini">
          Opini
        </Link>
        <Link href="/#podcast">Podcast</Link>
        <Link href="/#cerpen">Cerpen</Link>
      </nav>
    </>
  );
}
