import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: "https://cataclysm.systems",
  compressHTML: false,
  output: "static",
  trailingSlash: "never",
  build: {
    format: "file",
    assets: "assets/_astro",
    inlineStylesheets: "never"
  }
});
