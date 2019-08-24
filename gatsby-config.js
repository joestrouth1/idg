module.exports = {
  siteMetadata: {
    title: `Ideal Gatsby`,
    description: `Fast static sites with Gatsby, including tests with Jest and a component explorer powered by Storybook`,
    author: `@joestrouth1`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ideal-gatsby`,
        short_name: `Ideal`,
        start_url: `/`,
        background_color: `#fffafa`,
        theme_color: `#ae0011`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    // to completely remove a previous service worker from plugin-offline, use gatsby-plugin-remove-serviceworker in its place
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-purgecss',
      options: {
        tailwind: true
      }
    }
  ],
}
