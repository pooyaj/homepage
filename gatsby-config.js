const path = require(`path`);
require("dotenv").config({
  path: `.env`
});

module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Pooya Jaferian",
        short_name: "Pooya",
        start_url: "/",
        background_color: "#6b37bf",
        theme_color: "#6b37bf",
        display: "minimal-ui"
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
    {
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: "pooya",
        accessToken: process.env.API_KEY
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-34710465-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
        // Setting this parameter is optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
        // Set Variation ID. 0 for original 1,2,3....
        variationId: "0",
        // Any additional optional fields
        sampleRate: 5,
        siteSpeedSampleRate: 10
      }
    }
  ]
};
