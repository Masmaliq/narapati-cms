import Link from "next/link";

export function CityHero() {
  return (
    <section className="hero">
      <div className="city-art" aria-hidden="true">
        <span className="sun" />
        <span className="skyline" />
        <span className="leader" />
      </div>
      <div className="hero-copy">
        <p>Independen. Visioner. Untuk Indonesia.</p>
        <h1>Suara Pemimpin, Perspektif Nusantara</h1>
        <span>Media independen yang membahas bisnis, kepemimpinan, dan nilai-nilai hidup untuk membangun bangsa.</span>
        <div>
          <Link className="btn primary" href="/#podcast">
            Tonton Podcast
          </Link>
          <Link className="btn outline" href="/articles/transformasi-industri-nasional">
            Baca Opini
          </Link>
        </div>
      </div>
    </section>
  );
}
