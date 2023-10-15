import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import getConfig from "next/config";
const { publicRuntimeConfig: env } = getConfig();

export const client = sanityClient({
  projectId: env.reactAppSanityProjectId,
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  token: env.reactAppSanityToken,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
