import { d as defineCollection } from './_astro_content_PXRkrkyJ.mjs';
import { d as docsSchema } from './StarlightPage_DT6R2JnO.mjs';
import * as z from 'zod';

const blog = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional()
  })
});
const collections = {
  docs: defineCollection({ schema: docsSchema() }),
  blog
};

export { collections };
