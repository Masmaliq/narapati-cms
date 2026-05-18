import type { ArticleCard, ArticleDetail } from "./types";

export const demoArticles: ArticleCard[] = [
  {
    _id: "demo-1",
    title: "Transformasi Industri Nasional Kunci Pertumbuhan Ekonomi Berkelanjutan",
    dek: "Hilirisasi, produktivitas, dan kepastian kebijakan menjadi fondasi ekonomi bernilai tambah tinggi.",
    slug: { current: "transformasi-industri-nasional" },
    category: "Analisis",
    author: "Redaksi Narapati",
    readingTime: "8 menit baca",
    premium: true
  },
  { _id: "demo-2", title: "Peta Baru Geopolitik Asia dan Peluang Diplomasi Indonesia", slug: { current: "peta-baru-geopolitik-asia" }, category: "Dunia", readingTime: "6 menit baca", premium: true },
  { _id: "demo-3", title: "Disiplin Sunyi Para Pemimpin yang Bertahan Lama", slug: { current: "disiplin-sunyi-para-pemimpin" }, category: "Nilai Hidup", readingTime: "5 menit baca", premium: true },
  { _id: "demo-4", title: "Mindset Pemimpin di Era Ketidakpastian", slug: { current: "mindset-pemimpin" }, category: "Podcast", readingTime: "45:12", premium: true },
  { _id: "demo-5", title: "Mengapa Kelas Menengah Membutuhkan Narasi Baru", slug: { current: "kelas-menengah-narasi-baru" }, category: "Opini", readingTime: "7 menit baca", premium: true },
  { _id: "demo-6", title: "Di Bawah Lampu Kota yang Tidak Pernah Padam", slug: { current: "lampu-kota" }, category: "Cerpen", readingTime: "9 menit baca", premium: true },
  { _id: "demo-7", title: "Arah Modal Ventura Setelah Era Pertumbuhan Murah", slug: { current: "arah-modal-ventura" }, category: "Analisis", readingTime: "6 menit baca", premium: true },
  { _id: "demo-8", title: "Ketika Energi, Pangan, dan Teknologi Menjadi Satu Agenda", slug: { current: "energi-pangan-teknologi" }, category: "Dunia", readingTime: "8 menit baca", premium: true },
  { _id: "demo-9", title: "Etika Kerja Baru untuk Generasi yang Selalu Terhubung", slug: { current: "etika-kerja-baru" }, category: "Nilai Hidup", readingTime: "5 menit baca", premium: true },
  { _id: "demo-10", title: "Surat dari Ruang Tunggu Stasiun Terakhir", slug: { current: "surat-stasiun-terakhir" }, category: "Cerpen", readingTime: "10 menit baca", premium: true }
];

export const demoArticleDetail: ArticleDetail = {
  ...demoArticles[0],
  keyPoints: [
    "Indonesia perlu bergerak dari ekspor bahan mentah ke produk bernilai tambah.",
    "Kepastian regulasi menentukan kualitas investasi jangka panjang.",
    "Talenta, teknologi, dan tata kelola menjadi pembeda utama daya saing."
  ],
  author: {
    name: "Redaksi Narapati",
    role: "Editorial Desk"
  },
  body: [
    {
      _type: "block",
      style: "normal",
      children: [
        {
          _type: "span",
          text: "Indonesia sedang memasuki fase ketika pertumbuhan tidak lagi cukup ditopang oleh konsumsi dan komoditas. Mesin ekonomi berikutnya perlu dibangun dari industri yang mampu mengolah, menghubungkan, dan memasarkan nilai secara lebih cerdas."
        }
      ]
    },
    {
      _type: "block",
      style: "normal",
      children: [
        {
          _type: "span",
          text: "Dorongan hilirisasi membuka ruang bagi manufaktur, logistik, energi, dan teknologi. Namun agenda itu akan rapuh bila hanya berhenti pada pembangunan fasilitas produksi."
        }
      ]
    },
    {
      _type: "block",
      style: "blockquote",
      children: [
        {
          _type: "span",
          text: "Kemenangan industri bukan hanya soal membangun pabrik, tetapi membangun kemampuan nasional untuk belajar lebih cepat dari pasar."
        }
      ]
    },
    {
      _type: "block",
      style: "h2",
      children: [{ _type: "span", text: "Kepastian Menjadi Modal Utama" }]
    },
    {
      _type: "block",
      style: "normal",
      children: [
        {
          _type: "span",
          text: "Investor membaca arah kebijakan dengan detail. Ketika perizinan, insentif, dan aturan tenaga kerja berjalan konsisten, biaya ketidakpastian turun."
        }
      ]
    }
  ]
};
