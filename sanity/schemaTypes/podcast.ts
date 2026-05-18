import { defineField, defineType } from "sanity";

export const podcast = defineType({
  name: "podcast",
  title: "Podcast",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title", maxLength: 96 } }),
    defineField({ name: "guest", title: "Guest / Host", type: "string" }),
    defineField({ name: "episode", title: "Episode", type: "string" }),
    defineField({ name: "duration", title: "Duration", type: "string" }),
    defineField({ name: "publishedAt", title: "Published At", type: "datetime" }),
    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: { hotspot: true },
      fields: [defineField({ name: "alt", title: "Alt text", type: "string" })]
    }),
    defineField({ name: "description", title: "Description", type: "text", rows: 4 })
  ]
});
