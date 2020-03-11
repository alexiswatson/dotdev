require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Alexis Watson - Web Designer, Engineer, and Accessibility Professional`,
    description: `Alexis Watson is an award-winning full-stack lead web
      engineer, published user experience designer, and Certified Professional
      in Web Accessibility, who has been building websites for the past 14 years.`,
    author: 'Alexis Watson',
    twitterUsername: `@alexiswatsondev`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-prismic-graphql`,
      options: {
        repositoryName: 'alexiswatsondev',
        accessToken: `${process.env.PRISMIC_API_KEY}`,
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-transformer-remark',
    'gatsby-plugin-remove-serviceworker',
  ],
}
