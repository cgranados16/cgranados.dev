import { siteConfig } from '@cgranados.dev/shared/ui/lib/site';

export const metadata = {
  title: 'cgranados.dev',
  links: [
    {
      href: process.env.NX_PUBLIC_PORTFOLIO_URL,
      label: 'Home',
    },
    {
      href: process.env.NX_PUBLIC_BLOG_URL,
      label: 'Blog',
    },
  ],
  icons: [
    {
      name: 'github',
      href: siteConfig.links.github,
    },
  ],
};
