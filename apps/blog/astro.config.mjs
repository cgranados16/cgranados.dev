import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import rehypeExternalLinks from 'rehype-external-links';

// https://astro.build/config
export default defineConfig({
  outDir: '../../dist/apps/blog',
  integrations: [
    react({ experimentalReactChildren: true }),
  ],
  vite: {
    plugins: [tailwindcss()],
    ssr: {
      noExternal: ['react-use'],
    },
    optimizeDeps: {
      include: ['react-use'],
    },
    envDir: '../../',
    server: {
      fs: {
        allow: ['../../'],
      },
    },
  },
  redirects: {
    '/': '/blog',
  },
  markdown: {
    rehypePlugins: [rehypeExternalLinks],
  },
});
