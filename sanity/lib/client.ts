import { createClient } from "next-sanity";
import { apiVersion, configuredProjectId, dataset, projectId } from "../env";

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  perspective: "published"
});

export const hasSanityConfig = Boolean(configuredProjectId && dataset);
