const withNextra = require("nextra")({
  theme: "nextra-theme-blinkshell",
  themeConfig: "./src/theme.config.js",
  unstable_staticImage: true,
  unstable_flexsearch: {
    codeblock: false,
  },
});

module.exports = withNextra({
  reactStrictMode: true,
});
