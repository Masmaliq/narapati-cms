export const articlesQuery = `*[_type == "article"] | order(publishedAt desc)[0...12] {
  _id,
  title,
  dek,
  slug,
  publishedAt,
  readingTime,
  premium,
  mainImage,
  "category": category->title,
  "author": author->name
}`;

export const articleBySlugQuery = `*[_type == "article" && slug.current == $slug][0] {
  _id,
  title,
  dek,
  slug,
  publishedAt,
  readingTime,
  premium,
  mainImage,
  body,
  keyPoints,
  "category": category->title,
  "author": author->{name, role, image, bio}
}`;

export const podcastsQuery = `*[_type == "podcast"] | order(publishedAt desc)[0...4] {
  _id,
  title,
  guest,
  slug,
  duration,
  episode,
  coverImage,
  publishedAt
}`;
