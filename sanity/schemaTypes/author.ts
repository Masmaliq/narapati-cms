import { defineField, defineType } from "sanity";

export const author = defineType({
  name: "author",
  title: "Author",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "name", maxLength: 96 } }),
    defineField({ name: "role", title: "Role", type: "string" }),
    defineField({
      name: "image",
      title: "Author Photo",
      type: "image",
      options: { hotspot: true },
      fields: [defineField({ name: "alt", title: "Alt text", type: "string" })]
    }),
    defineField({ name: "bio", title: "Bio", type: "text", rows: 4 })
  ]
});
