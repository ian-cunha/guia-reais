import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Guia RE.AI.s',
  tagline: 'Seu guia completo para integrar e dominar nossa plataforma.',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://guiareais.netlify.app',
  baseUrl: '/',

  scripts: [
    {
      src: 'https://identity.netlify.com/v1/netlify-identity-widget.js',
      defer: true,
    },
  ],

  organizationName: 'ian-cunha',
  projectName: 'guia-reais',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'documentacao',
        path: 'docs/documentacao',
        routeBasePath: 'documentacao',
        sidebarPath: './sidebars.ts',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'api-referencias',
        path: 'docs/api-referencias',
        routeBasePath: 'api-referencias',
        sidebarPath: './sidebars.ts',
      },
    ],
  ],

  presets: [
    [
      'classic',
      {
        docs: false,
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/ian-cunha/guia-reais/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'RE.AI.s Docs',
      logo: {
        alt: 'RE.AI.s',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Documentação',
          docsPluginId: 'documentacao',
        },
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'API Referências',
          docsPluginId: 'api-referencias',
        },
        { to: '/blog', label: 'Blog', position: 'left' },
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
            {
              label: 'Documentação',
              to: '/documentacao/intro',
            },
            {
              label: 'API Referências',
              to: '/api-referencias/intro',
            },
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
          items: [
            { label: 'Blog', to: '/blog' },
            { label: 'Site', href: 'http://realestateaiplanner.com.br/' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Real Estate Ai Planner LTDA.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;