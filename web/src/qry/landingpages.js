module.exports = `query {
    allSanityLandingpage {
      nodes {
        _id
        slug {
          current
        }
        parentSlug
      }
    }
  }`
