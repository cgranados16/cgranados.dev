/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly NEXT_PUBLIC_APP_PORTFOLIO_URL: string;
  readonly NEXT_PUBLIC_APP_BLOG_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
