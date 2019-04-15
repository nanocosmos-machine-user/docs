/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

const siteConfig = {
  title: 'nanocosmos Documentation', // Title for your website.
  tagline: 'nanoStream Cloud & H5Live Player - Around The World in 1 Second',
  url: 'https://docs.nanocosmos.de', // Your website URL
  baseUrl: '/', // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',
  cname: 'docs.nanocosmos.de',
  
  // Used for publishing and more
  projectName: 'docs',
  organizationName: 'nanocosmos',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {doc: 'cloud/cloud_overview', label: 'nanoStream Cloud'},
    //{doc: 'cloud', label: 'Cloud'},
    {doc: 'nanoplayer/nanoplayer_introduction', label: 'H5Live Player'},
    {doc: 'webrtc/nanostream_webrtc_introduction', label: 'WebRTC.live'},
    //{doc: 'webrtc', label: 'WebRTC'},
    {doc: 'nanostream/nanostream', label: 'nanoStream Apps and SDKs'},
    {doc: 'samples/README', label: 'Samples'},
    {doc: 'faq/faq_streaming', label: 'FAQ'}
  ],

  gaTrackingId: 'UA-552140-1',

  /* path to images for header/footer */
  headerIcon: 'img/nanocosmos_header_logo.png',
  footerIcon: 'img/nanocosmos_header_logo.png',
  favicon: 'img/favicon_nano.png',

  /* Colors for website */
  colors: {
    primaryColor: '#ed7d0e',
    secondaryColor: '#205C3B',
  },

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */
  //docsSideNavCollapsible : true,

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} nanocosmos GmbH`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js', '/js/search.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/docusaurus.png',
  twitterImage: 'img/docusaurus.png',

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
     repoUrl: 'https://github.com/nanocosmos/docs',

     editUrl: 'https://github.com/nanocosmos/docs/tree/master/docs/'
};

module.exports = siteConfig;
