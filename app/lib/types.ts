export type SanityImage = {
  asset?: {
    _ref?: string;
    _id?: string;
    url?: string;
  };
  alt?: string;
};

export type ArticleCard = {
  _id: string;
  title: string;
  dek?: string;
  slug?: { current?: string };
  publishedAt?: string;
  readingTime?: string;
  premium?: boolean;
  mainImage?: SanityImage;
  category?: string;
  author?: string;
};

export type ArticleDetail = ArticleCard & {
  body?: Array<Record<string, unknown>>;
  keyPoints?: string[];
  author?: {
    name?: string;
    role?: string;
    image?: SanityImage;
    bio?: string;
  };
};
