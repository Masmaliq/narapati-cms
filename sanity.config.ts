import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schemaTypes } from "./sanity/schemaTypes";

export default defineConfig({
  basePath: "/studio",
  name: "narapati_news_network",
  title: "Narapati News Network",
  projectId,
  dataset,
  apiVersion,
  plugins: [structureTool()],
  schema: {
    types: schemaTypes
  }
});
