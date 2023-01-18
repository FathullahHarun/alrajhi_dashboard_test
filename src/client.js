import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  //   projectId: process.env.SANITY_PROJECT_ID,
  //   dataset: process.env.SANITY_DATASET,
  //   token: process.env.SANITY_TOKEN,

  projectId: "n7z15l2z",
  dataset: "production",
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
