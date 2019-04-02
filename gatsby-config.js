require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});
module.exports = {
  siteMetadata: {
    defaultTitle: `Octatum desarrollo web`,
    description: `Agencia de desarrollo web empresarial`,
    author: `contacto@octatum.com`,
    siteUrl: 'https://octatum.com',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'n0npyriq',
        dataset: 'projects',
        token: process.env.GATSBY_SANITY_KEY,
        watchMode: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Octatum Desarrollo Web`,
        short_name: `Octatum`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: 'standalone',
        icon: `static/favicon.png`, // This path is relative to the root of the site.
        include_favicon: true, // Include favicon
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-113177710-1',
        // Puts tracking script in the head instead of the body
        head: false,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Playfair Display`,
            variants: ['400', '700', '700i', '900'],
          },
          {
            family: 'Raleway',
            variants: ['300', '300i', '500', '800'],
          },
        ],
      },
    },
    'gatsby-plugin-offline',
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-netlify`,
  ],
};
