import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Guia RE.AI.s',
  tagline: 'Seu guia completo para integrar e dominar nossa plataforma.',
  favicon: 'img/favicon.ico',

  future: { v4: true },
  url: 'https://guiareais.netlify.app',
  baseUrl: '/',
  trailingSlash: true,

  scripts: [
    { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js', defer: true },
  ],

  organizationName: 'ian-cunha',
  projectName: 'guia-reais',

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'ignore',

  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'tutoriais',
        path: 'docs/tutoriais',
        routeBasePath: 'tutoriais',
        sidebarPath: require.resolve('./sidebars.ts'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'api-referencias',
        path: 'docs/api-referencias',
        routeBasePath: 'api-referencias',
        sidebarPath: require.resolve('./sidebars.ts'),
      },
    ],
  ],

  presets: [
    [
      'classic',
      {
        docs: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Guia RE.AI.s',
      logo: { alt: 'RE.AI.s', src: 'img/logo.svg' },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Tutoriais',
          docsPluginId: 'tutoriais',
        },
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'API Referências',
          docsPluginId: 'api-referencias',
        },
        {
          href: 'https://www.reaisystems.com.br/',
          label: 'RE.AI.s',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Seções',
          items: [
            { label: 'Tutoriais', to: '/tutoriais/intro' },
            { label: 'API Referências', to: '/api-referencias/intro' },
          ],
        },
        {
          title: 'Redes Sociais',
          items: [
            { label: 'Instagram', href: 'https://www.instagram.com/realestateaiplanner/' },
            { label: 'Linkedin', href: 'https://www.linkedin.com/company/real-estate-ai-planner' },
          ],
        },
        {
          title: 'Mais',
          items: [{ label: 'Site', href: 'http://realestateaiplanner.com.br/' }],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Real Estate AI Planner LTDA.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
