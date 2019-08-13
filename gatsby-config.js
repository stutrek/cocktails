console.log(process.env);
module.exports = {
  siteMetadata: {
    title: `Cocktails`,
    description: `A list of cocktails grouped by style.`,
    author: `@gatsbyjs`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-google-spreadsheet`,
      options: {
        spreadsheetId: `1ehg3RRAsvjTHLtkIRF9eHRZSyxHL-8EKhhfA2kUKscc`,
        credentials: JSON.parse(process.env.SHEETS_CREDS),    
        typePrefix: `Cocktails`,
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
