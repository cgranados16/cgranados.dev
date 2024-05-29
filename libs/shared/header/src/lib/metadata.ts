import { siteConfig } from '@config';

export const metadata = {
  title: 'cgranados.dev',
  links: [
    {
      href: process.env.NEXT_PUBLIC_APP_PORTFOLIO_URL,
      label: 'Home',
    },
    {
      href: process.env.NEXT_PUBLIC_APP_BLOG_URL,
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
