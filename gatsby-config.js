const path = require(`path`);

module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-transformer-json`,
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
    `gatsby-plugin-offline`
  ]
};
