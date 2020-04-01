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
        accessToken: process.env.API_KEY,
        schemas: { resume: require("./src/schemas/resume.json") }
      }
    },
    {
      resolve: `gatsby-plugin-segment-js`,
      options: {
        prodKey: process.env.SEGMENT_WRITE_KEY,

        // if you have a development env for your segment account, paste that key here
        // when process.env.NODE_ENV === 'development'
        // optional; non-empty string
        devKey: process.env.SEGMENT_WRITE_KEY,

        // boolean (defaults to false) on whether you want
        // to include analytics.page() automatically
        // if false, see below on how to track pageviews manually
        trackPage: true,

        delayLoad: false,

        // number (default to 1000); time to wait after scroll or route change
        // To be used when `delayLoad` is set to `true`
        delayLoadTime: 1000
      }
    }
  ]
};
