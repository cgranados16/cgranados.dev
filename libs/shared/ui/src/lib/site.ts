const links = {
  github: 'https://github.com/cgranados16',
  github_source_code: `https://github.com/cgranados16/cgranados.dev`,
  instagram: 'https://instagram.com/cgranados.dev',
};

export const siteConfig = {
  name: 'cgranados.dev',
  url: 'https://cgranados.dev',
  links: links,
  icons: [
    {
      label: 'GitHub',
      link: links.github,
    },
    {
      label: 'Instagram',
      link: links.instagram,
    },
  ],
};

export type SiteConfig = typeof siteConfig;
