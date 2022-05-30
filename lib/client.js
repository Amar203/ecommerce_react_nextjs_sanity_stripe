import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'fk0r095e',
  dataset: 'production',
  apiVersion: '2022-05-22',
  useCdn: true,
  token: process.env.SANITY_TOKEN_KANGAROO
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);