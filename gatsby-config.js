module.exports = {
  siteMetadata: {
    title: `Dima Veremchuk`,
    description: `Dima Veremchuk—product designer. Personal website.`,
    siteUrl: `https://www.dimaveremchuk.com`,
    image: `/icon.png`,
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
