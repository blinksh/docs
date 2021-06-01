/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Blink Shell',
  url: 'https://docs.blink.sh',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'blinksh',
  projectName: 'docs',
  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
      switchConfig: {
        darkIcon: '  ',
        darkIconStyle: {
          marginTop: '1px',
        },
        lightIcon: '  ',
        lightIconStyle: {
          marginTop: '1px',
        },
      },
    },
    navbar: {
      title: 'Blink Shell',
      logo: {
        alt: 'Blink Shell',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Documentation',
        },
        {
          type: 'doc',
          docId: 'basics/tips-and-tricks',
          position: 'left',
          label: 'Tips & Tricks',
        },
        {
          href: 'https://github.com/blinksh/blink',
          className: 'navbar-item-github',
          position: 'right',
        },
        {
          href: 'https://twitter.com/blinkshell',
          className: 'navbar-item-twitter',
          position: 'right',
        },
        {
          type: 'search',
          position: 'right',
        },
      ],
    },
    prism: {
      theme: require('./src/blink'),
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'About',
          items: [
            {
              label: 'Blink Shell',
                to: 'https://blink.sh',
            },
            {
              label: 'Community Edition',
                to: 'https://community.blink.sh',
            },
          ],
        },
        {
          title: 'Docs',
          items: [
            {
              label: 'Basics',
              to: 'basics/hosts',
            },
            {
              label: 'Advanced',
              to: 'advanced/advanced-mosh',
            },
            {
              label: 'Cloud Providers',
              to: 'cloud-providers/aws',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
                href: 'https://github.com/blinksh/blink',
            },
            {
              label: 'Discord',
                href: 'https://discord.gg/ZTtMfvK',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/blinkshell',
            },
            {
              label: 'Reddit',
              href: 'https://reddit.com/BlinkShell',
            },
            {
              label: 'Dev.to',
              href: 'https://dev.to/blinkshell',
            },
          ],
        },
      ],
        copyright: `Copyright © ${new Date().getFullYear()} Blink Shell is developed by The Blink Shell Project.`,
    },
  },
  plugins: [require.resolve('docusaurus-lunr-search')],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          editUrl:
            'https://github.com/blinksh/docs/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  scripts: [
    {
      src: 'js/freddyfeedback.js',
    },
  ],
};
