/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `my-files`,
        path: `${__dirname}/src/images`,
      },
    },
    { resolve: `gatsby-plugin-sharp`, },
  ],
}
