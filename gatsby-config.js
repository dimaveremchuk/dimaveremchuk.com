module.exports = {
  siteMetadata: {
    title: `Dima Veremchuk`,
    description: `Dima Veremchuk—product designer. Personal website.`,
    siteUrl: `https://dimaveremchuk.com`,
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
    },
    // {
    //   resolve: 'gatsby-plugin-manifest',
    //   options: {
    //     name: "Dima Veremchuk",
    //     short_name: "Dima Veremchuk",
    //     start_url: "/",
    //     background_color: "#ffffff",
    //     theme_color: "#fff",
    //     display: "standalone",
    //     icon: "src/images/icon.png",
    //     crossOrigin: `use-credentials`,
    //   },
    // },
  ],
}
