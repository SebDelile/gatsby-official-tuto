module.exports = {
  siteMetadata: {
    siteUrl: "https://sebdelile.github.io/",
    title: "Gatsby official tuto",
  },
  pathPrefix: "/gatsby-official-tuto",
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp"
  ],
};
