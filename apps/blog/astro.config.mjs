import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';
import rehypeExternalLinks from 'rehype-external-links';

// https://astro.build/config
export default defineConfig({
  outDir: '../../dist/apps/blog',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    react({ experimentalReactChildren: true }),
  ],
  vite: {
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
