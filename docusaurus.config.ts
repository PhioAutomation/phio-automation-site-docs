import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Phio Automation',
  tagline: 'An IEC 61131-3 compliant structured text interpreter in the browser.',

  url: 'https://docs.phioautomation.com',
  baseUrl: '/',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  headTags:[
    // Preconnect to the main site
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://phioautomation.com',
      },
    }
  ],

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/'
        },
        blog: {
          showReadingTime: true,
          authorsMapPath: './authors.yml'
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'community',
        path: 'community',
        routeBasePath: 'community',
        sidebarPath: './sidebars.ts',       
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    // image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Phio Automation',
      style: 'primary',
      // logo: {
      //   alt: 'Logo',
      //   src: 'img/logo.svg',
      // },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          to: '/community/intro',    // ./docs-api/Intro.md
          label: 'Community',
          position: 'left',
          activeBaseRegex: `/community/`,
        },
        {
          to: '/blog', 
          label: 'Blog', 
          position: 'left'
        },
        {
          label: 'Editor',
          href: 'https://phioautomation.com',
          position: 'left',
        },
      ],
    },
    metadata: [
      {name: 'keywords', content: 'PLC, structured text, ST, automation, programming'}
    ],
    colorMode: {
      respectPrefersColorScheme: true
    },
    footer: {
      style: 'light',
      copyright: `Copyright © ${new Date().getFullYear()} Phio Automation, Inc.`,
    },
    prism: {
      theme: prismThemes.vsLight,
      darkTheme: prismThemes.vsDark,
      additionalLanguages: ['iecst'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
