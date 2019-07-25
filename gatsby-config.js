const path = require(`path`);
require('dotenv').config({
  path: `.env`
});

module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Pooya Jaferian',
        short_name: 'Pooya',
        start_url: '/',
        background_color: '#6b37bf',
        theme_color: '#6b37bf',
        display: 'minimal-ui'
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: 'pooya',
        accessToken: process.env.API_KEY
      }
    }
  ]
};
