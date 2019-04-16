require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});
module.exports = {
  siteMetadata: {
    defaultTitle: `Octatum Gatsby Starter`,
    description: `Simple starter for gatsby`,
    author: `contacto@octatum.com`,
    siteUrl: 'https://octatum.com',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Octatum Desarrollo Web`,
        short_name: `Octatum`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: 'standalone',
        icon: `src/assets/favicon.png`, // This path is relative to the root of the site.
        include_favicon: true,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-XX-1',
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
