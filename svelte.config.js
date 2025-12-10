import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://svelte.dev/docs/kit/integrations
  // for more information about preprocessors
  preprocess: vitePreprocess(),

  kit: {
    // adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
    // If your environment is not supported, or you settled on a specific environment, switch out the adapter.
    // See https://svelte.dev/docs/kit/adapters for more information about adapters.
    adapter: adapter({
      pages: "build", // output folder for pages
      assets: "build", // output folder for assets
      fallback: "index.html", // for SPA routing; can be null if you don't need it
    }),

    paths: {
      base: dev ? "" : "/conjunctor",
    },
  },
};

export default config;
