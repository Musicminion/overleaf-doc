// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Overleaf搭建教程',
  tagline: '一个 Overleaf 的非官方中文百科',
  url: 'https://musicminion.github.io',
  baseUrl: '/overleaf-doc/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/musicminion/overleaf-doc/tree/main',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Overleaf Wiki',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'deployTutorial/intro',
            position: 'left',
            label: 'Overleaf部署教程',
          },
          {
            type: 'doc',
            to:'/latexTutorial',
            docId: 'latexTutorial/intro',
            position: 'left',
            label: 'Latex教程',
          },
          // {to: '/blog', label: '博客', position: 'left'},
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '站点地图',
            items: [
              {
                label: '部署教程',
                to: '/docs/deployTutorial/intro',
              },
              {
                label: 'Latex教程',
                to: '/docs/latexTutorial/intro',
              },
            ],
          },
          {
            title: '友情链接',
            items: [
              {
                label: 'Overleaf 官方',
                href: 'https://www.overleaf.com/',
              },
              {
                label: 'Overleaf 中国站',
                href: 'https://cn.overleaf.com/',
              },
              {
                label: 'Overleaf Github',
                href: 'https://github.com/overleaf/overleaf',
              },
            ],
          },
          {
            title: '个人站点',
            items: [
              {
                label: 'Github',
                href: 'https://github.com/musicminion',
              },
              {
                label: 'Bilibili',
                href: 'https://space.bilibili.com/629072462',
              },

            ],
          },
        ],
        copyright: `Wiki Copyright © ${new Date().getFullYear()} Musicminion, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
