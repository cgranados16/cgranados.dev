import { siteConfig } from '@cgranados.dev/shared/ui/lib/site';

export const metadata = {
  title: 'cgranados.dev',
  links: [
    {
      href: 'https://www.cgranados.dev/',
      label: 'Home',
    },
    {
      href: 'https://cgranados-blog.vercel.app/blog',
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
