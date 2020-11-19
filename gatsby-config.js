var dotenv = require('dotenv');
dotenv.config();


module.exports = {
  
  plugins: ["gatsby-plugin-typescript"],
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.SPACE_ID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENT_ID,
      },
    },
    {
      resolve: "gatsby-plugin-firebase",
      
      options: {
        credentials: {
          apiKey:  process.env.apiKey,
          authDomain:  process.env.authDomain,
          databaseURL:  process.env.databaseURL,
          projectId:  process.env.projectId,
          storageBucket: process.env.storageBucket,
          messagingSenderId:  process.env.messagingSenderId,
          appId:  process.env.appId
        },
        
      },
      
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/images/favicon-32x32.png`,
      },
    }
    
    
  ],
  
};
