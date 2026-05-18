import Link from "next/link";
import { CityHero } from "./components/CityHero";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { demoArticles } from "./lib/demoData";
import type { ArticleCard } from "./lib/types";
import { hasSanityConfig, sanityClient } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { articlesQuery } from "@/sanity/lib/queries";

export const revalidate = 60;

async function getArticles(): Promise<ArticleCard[]> {
  if (!hasSanityConfig) return demoArticles;

  try {
    const articles = await sanityClient.fetch<ArticleCard[]>(articlesQuery);
    return articles.length ? articles : demoArticles;
  } catch {
    return demoArticles;
  }
}

function imageStyle(article: ArticleCard, index: number) {
  if (article.mainImage) {
    return { backgroundImage: `url(${urlFor(article.mainImage).width(900).height(560).fit("crop").url()})` };
  }

  const classes = ["port", "world", "value", "podcast", "opinion", "story", "market", "policy", "culture", "fiction"];
  return { className: classes[index % classes.length] };
}

export default async function HomePage() {
  const articles = await getArticles();
  const [lead, ...rest] = articles;
  const allArticles = lead ? [lead, ...rest] : demoArticles;

  return (
    <>
      <Header />
      <main id="beranda">
        <CityHero />

        <section className="trending">
          <strong>Trending Now</strong>
          <Link href="/#nilai-hidup">#NilaiHidup</Link>
          <Link href="/#analisis">#Analisis</Link>
          <Link href="/#dunia">#Dunia</Link>
          <Link href="/#opini">#Opini</Link>
          <Link href="/#cerpen">#Cerpen</Link>
        </section>

        <section className="section-head" id="opini">
          <div>
            <p>NNN Premium</p>
            <h2>Artikel Premium Pilihan</h2>
          </div>
          <Link href={`/articles/${allArticles[0]?.slug?.current || "transformasi-industri-nasional"}`}>Lihat detail artikel</Link>
        </section>

        <section className="premium-grid">
          {allArticles.slice(0, 10).map((article, index) => {
            const slug = article.slug?.current || "transformasi-industri-nasional";
            const styleInfo = imageStyle(article, index);
            const thumbClass = "className" in styleInfo ? `thumb ${styleInfo.className}` : "thumb";

            return (
              <article className={index === 0 ? "article-card lead" : "article-card"} key={article._id}>
                <Link className={thumbClass} href={`/articles/${slug}`} style={"backgroundImage" in styleInfo ? styleInfo : undefined} />
                <div>
                  <span>{article.premium ? "Premium • " : ""}{article.category || "Opini"}</span>
                  <h3>
                    <Link href={`/articles/${slug}`}>{article.title}</Link>
                  </h3>
                  {index === 0 && <p>{article.dek}</p>}
                  <small>{article.author || "Redaksi Narapati"} • {article.readingTime || "6 menit baca"}</small>
                </div>
              </article>
            );
          })}
        </section>

        <section className="page-grid">
          <aside className="category-card">
            <h2>Kategori</h2>
            <Link id="nilai-hidup" href="/#nilai-hidup">Nilai Hidup</Link>
            <Link id="analisis" href="/#analisis">Analisis</Link>
            <Link id="dunia" href="/#dunia">Dunia</Link>
            <Link href="/#opini">Opini</Link>
            <Link id="podcast" href="/#podcast">Podcast</Link>
            <Link id="cerpen" href="/#cerpen">Cerpen</Link>
          </aside>
          <section className="premium-panel" id="premium">
            <p>NNN Membership</p>
            <h2>Baca analisis premium, podcast eksklusif, dan cerita pilihan setiap pekan.</h2>
            <Link className="btn primary" href="/studio">Kelola Konten di Sanity</Link>
          </section>
        </section>
      </main>
      <Footer />
    </>
  );
}
