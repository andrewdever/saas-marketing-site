module.exports = `query {
    allSanityBlogpost {
      nodes {
        _id
        slug {
          current
        }
      }
    }
  }`
