// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Enable content collections for Markdown
  experimental: {
    contentCollections: true
  }
});
