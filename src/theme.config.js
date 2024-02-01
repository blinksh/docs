import * as React from "react";
import Script from "next/script";

const BlinkLogo = () => (
  <svg
    viewBox="0 0 1024 1024"
    xmlns="http://www.w3.org/2000/svg"
    width="2em"
    style={{
      fillRule: "evenodd",
      clipRule: "evenodd",
      strokeLinejoin: "round",
      strokeMiterlimit: 2,
    }}
  >
    <rect width={1024} height={1024} rx={180} fill="#060D0E" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M512.727 93.38c111.979 0 217.255 43.544 296.438 122.611 79.179 79.067 122.787 184.191 122.787 296.01 0 111.817-43.608 216.941-122.787 296.008-79.183 79.067-184.459 122.611-296.438 122.611-111.98 0-217.257-43.544-296.438-122.611-79.181-79.067-122.788-184.191-122.788-296.008 0-111.819 43.607-216.943 122.788-296.01C295.47 136.924 400.747 93.38 512.727 93.38ZM148.16 512.001c0 200.731 163.544 364.038 364.567 364.038s364.565-163.307 364.565-364.038c0-200.733-163.542-364.04-364.565-364.04S148.16 311.268 148.16 512.001Z"
      fill="#0AE0F0"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M363.584 725.579h72.778l226.914-425.113h-73.384L363.584 725.579Z"
      fill="#fff"
    />
  </svg>
);
/**
 * @type {import('nextra-theme-blinkshell').DocsThemeConfig}
 */
export default {
  projectLink: "https://github.com/blinksh/docs",
  docsRepositoryBase: "https://github.com/blinksh/docs/blob/master/src/pages",
  projectChatLink: "https://discord.gg/ZTtMfvK",
  titleSuffix: " – Blink Shell",
  logo: (
    <>
      <BlinkLogo />
      <span className="mr-2 ml-2 font-extrabold hidden md:inline">
        Blink Shell
      </span>
      <span className="text-gray-600 font-normal hidden md:inline">
        Top mobile terminal for Apple devices.
      </span>
    </>
  ),
  head: () => (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta
        name="description"
        content="Blink Shell: The top mobile terminal for Apple devices. Blazing fast, full-featured, and loved by developers around the world. It's giving you the freedom to develop anywhere, anytime."
      />
      <meta
        name="og:description"
        content="Blink Shell: The top mobile terminal for Apple devices. Blazing fast, full-featured, and loved by developers around the world. It's giving you the freedom to develop anywhere, anytime."
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:handle" content="blinkshell" />
      <meta name="twitter:image" content="https://blink.sh/og.png" />
      <meta name="twitter:site:domain" content="blink.sh" />
      <meta name="twitter:url" content="https://blink.sh" />
      <meta
        name="og:title"
        content="Blink Shell: Blink Shell: The top mobile terminal for Apple devices."
      />
      <meta name="og:image" content="https://docs.blink.sh/og.png" />
      <meta name="apple-mobile-web-app-title" content="Blink Shell" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
      <meta name="apple-itunes-app" content="app-id=1594898306" />
      <script
	  src="https://www.googletagmanager.com/gtag/js?id=UA-84834352-1"
	  strategy="afterInteractive"
      />
      <script id="google-analytics" strategy="afterInteractive">
	  {`
	  window.dataLayer = window.dataLayer || [];
	  function gtag(){window.dataLayer.push(arguments);}
	  gtag('js', new Date());

	  gtag('config', 'UA-84834352-1');
	`}
      </script>
 
    </>
  ),
  search: true,
  unstable_faviconGlyph: "✦",
  defaultMenuCollapsed: true,
  prevLinks: true,
  nextLinks: true,
  floatTOC: true,
  footer: true,
  footerEditLink: "Edit this page on GitHub",
  footerText: (
    <>
      © {new Date().getFullYear()} Blink Shell is developed by Blink Shell Inc.
    </>
  ),
  darkMode: true,
};
