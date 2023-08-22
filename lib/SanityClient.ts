import { createClient } from "next-sanity";

export const client = createClient({
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: "2023-08-19",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: true,
});
