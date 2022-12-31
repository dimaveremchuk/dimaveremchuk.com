module.exports = {
  siteMetadata: {
    title: `Dima Veremchuk`,
    siteUrl: `https://www.dimaveremchuk.com`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /svg/
        }
      }
    }
  ],
}
