import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>fflib | Apex Enterprise Framework</span>,
  project: {
    link: 'https://github.com/lukethacoder/fflib.dev',
  },
  docsRepositoryBase: 'https://github.com/lukethacoder/fflib.dev',
  footer: {
    text: 'fflib.dev',
  },
  head: (
    <>
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <link rel='icon' type='image/svg+xml' href='/favicon.svg' />
      <link rel='icon' type='image/x-icon' href='/favicon.ico' />
      <title>fflib | Apex Enterprise Framework</title>
      <meta property='og:title' content='fflib | Apex Enterprise Framework' />
      <meta
        name="description"
        content='Unofficial and semi-opinionated fflib documentation. Streamline and standardise your Salesforce development process with fflib'
      />
      <meta
        property='og:description'
        content='Unofficial and semi-opinionated fflib documentation. Streamline and standardise your Salesforce development process with fflib'
      />
      <meta
        name="twitter:description"
        content='Unofficial and semi-opinionated fflib documentation. Streamline and standardise your Salesforce development process with fflib'
      />
      <meta
        property="og:url"
        content="https://fflib.dev"
      />
      <meta name='twitter:card' content='summary_large_image' />
      <meta property='og:image' content='https://fflib.dev/thumbnail.jpg' />
      <meta name='twitter:image' content='https://fflib.dev/thumbnail.jpg' />
      <meta property='og:image:alt' content='Logo for LWC Dependency Viewer' />
      <meta property='og:image:width' content='1200' />
      <meta property='og:image:height' content='620' />
      <script
        data-goatcounter='https://fflib-dev.goatcounter.com/count'
        async
        src='//gc.zgo.at/count.js'
      ></script>
    </>
  ),
  useNextSeoProps() {
    return {
      titleTemplate: '%s - fflib | Apex Enterprise Framework',
    }
  },
}

export default config
