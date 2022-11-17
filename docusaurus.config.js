// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Quick Starts",
  tagline: "A guide for all devs out there",
  url: "https://quickstarts.dev",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png",
  organizationName: "quickstartsdev",
  projectName: "quickstarts.dev",
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/quickstartsdev/quickstarts.dev/tree/main/",
        },
        blog: {
          showReadingTime: true,
          editUrl:
            "https://github.com/quickstartsdev/quickstarts.dev/tree/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Quick Starts",
        hideOnScroll: true,
        logo: {
          alt: "Quick Starts Logo",
          src: "img/favicon.png",
        },
        items: [
          {
            type: "search",
            position: "right",
          },
          {
            type: "doc",
            docId: "index",
            position: "right",
            label: "Tutorials",
          },
          { to: "/blog", label: "Articles", position: "right" },
        ],
      },
      footer: {
        style: "dark",
        logo: {
          alt: "Quick Starts Logo",
          src: "img/favicon.png",
          href: "https://quickstarts.dev",
          width: 60,
          height: 60,
        },
        copyright: `<p>Copyright © ${new Date().getFullYear()} | Quick Starts</p>
        <div>
        <a href='https://stackoverflow.com/questions/tagged/quickstartsdev' target='_blank'><img src='/img/stack-overflow.png' height='24' width='24' /></a>
        <a href='https://www.youtube.com/@quickstartsdev' target='_blank'><img src='/img/youtube.png' height='24' width='24' /></a>
        <a href='https://www.instagram.com/quickstartsdev' target='_blank'><img src='/img/instagram.png' height='24' width='24' /></a>
        <a href='https://twitter.com/quickstartsdev' target='_blank'><img src='/img/twitter.png' height='24' width='24' /></a>
        <a href='https://www.linkedin.com/company/quickstartsdev' target='_blank'><img src='/img/linkedin.png' height='24' width='24' /></a>
        <a href='https://www.facebook.com/quickstartsdev' target='_blank'><img src='/img/facebook.png' height='24' width='24' /></a>
        </div>
        `,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: "dark",
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
    }),
};

module.exports = config;
