import { notFound } from "next/navigation";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { demoArticleDetail } from "../../lib/demoData";
import type { ArticleDetail } from "../../lib/types";
import { hasSanityConfig, sanityClient } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { articleBySlugQuery } from "@/sanity/lib/queries";

type Props = {
  params: Promise<{ slug: string }>;
};

export const revalidate = 60;

async function getArticle(slug: string): Promise<ArticleDetail | null> {
  if (!hasSanityConfig) return demoArticleDetail;

  try {
    const article = await sanityClient.fetch<ArticleDetail | null>(articleBySlugQuery, { slug });
    return article || (slug === "transformasi-industri-nasional" ? demoArticleDetail : null);
  } catch {
    return slug === "transformasi-industri-nasional" ? demoArticleDetail : null;
  }
}

function blockText(block: Record<string, unknown>) {
  const children = Array.isArray(block.children) ? block.children : [];
  return children
    .map((child) => (typeof child === "object" && child && "text" in child ? String(child.text) : ""))
    .join("");
}

function renderBlock(block: Record<string, unknown>, index: number) {
  const text = blockText(block);
  const style = block.style;

  if (style === "h2") return <h2 key={index}>{text}</h2>;
  if (style === "blockquote") return <aside className="pullquote" key={index}>{text}</aside>;
  return <p className={index === 0 ? "dropcap" : undefined} key={index}>{text}</p>;
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const article = await getArticle(slug);

  return {
    title: article ? `${article.title} | NNN Premium` : "Article | NNN",
    description: article?.dek || "Narapati News Network premium article"
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = await getArticle(slug);

  if (!article) notFound();

  const coverStyle = article.mainImage
    ? { backgroundImage: `url(${urlFor(article.mainImage).width(1200).height(720).fit("crop").url()})` }
    : undefined;

  return (
    <>
      <Header />
      <main className="article-shell">
        <nav className="breadcrumb">
          <a href="/">Beranda</a>
          <span>/</span>
          <a href="/#opini">Opini</a>
          <span>/</span>
          <strong>Premium</strong>
        </nav>
        <section className="article-hero">
          <div>
            <span className="premium-tag">Premium</span>
            <span className="premium-tag light">{article.category || "Analisis"}</span>
          </div>
          <h1>{article.title}</h1>
          <p>{article.dek}</p>
          <div className="byline">
           <strong>
  {String(article.author || "Narapati")}
</strong>
            <span>{article.publishedAt ? new Date(article.publishedAt).toLocaleDateString("id-ID", { dateStyle: "full" }) : "Senin, 20 Mei 2024"} • {article.readingTime || "8 menit baca"}</span>
          </div>
        </section>

        <section className="article-layout">
          <article className="article-body">
            <figure className="article-cover port" style={coverStyle}>
              <figcaption>Visual artikel diambil dari Sanity CMS bila tersedia.</figcaption>
            </figure>

            <div className="summary-box">
              <h2>Inti Artikel</h2>
              <ul>
                {(article.keyPoints?.length ? article.keyPoints : demoArticleDetail.keyPoints || []).map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>

            {(article.body?.length ? article.body : demoArticleDetail.body || []).map(renderBlock)}

            <section className="paywall" id="paywall">
              <span>NNN Premium</span>
              <h2>Lanjutkan membaca analisis lengkap</h2>
              <p>Dapatkan akses ke laporan mendalam, briefing pemimpin, dan arsip opini premium Narapati News Network.</p>
              <a className="btn primary" href="mailto:premium@narapatinews.com">Berlangganan Premium</a>
            </section>
          </article>

          <aside className="detail-sidebar">
            <section className="market-card">
              <h2>Market Pulse</h2>
              <p><span>IDX Composite</span><strong>7.318,42</strong><em>+0,42%</em></p>
              <p><span>USD/IDR</span><strong>15.980</strong><em className="down">-0,18%</em></p>
              <p><span>Brent Oil</span><strong>84,20</strong><em>+1,10%</em></p>
            </section>
            <section className="side-box">
              <h2>Editor&apos;s Note</h2>
              <p>Artikel ini bagian dari seri Narapati tentang arah Indonesia, daya saing, dan strategi pemimpin menghadapi dekade produktivitas.</p>
            </section>
            <section className="side-box related">
              <h2>Artikel Terkait</h2>
              <a href="/articles/peta-baru-geopolitik-asia">Peta Baru Geopolitik Asia dan Peluang Indonesia</a>
              <a href="/articles/disiplin-sunyi-para-pemimpin">Disiplin Sunyi Para Pemimpin yang Bertahan Lama</a>
              <a href="/articles/arah-modal-ventura">Arah Modal Ventura Setelah Era Pertumbuhan Murah</a>
            </section>
          </aside>
        </section>
      </main>
      <Footer />
    </>
  );
}
