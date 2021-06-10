module.exports = `query {
    allSanityCorepage {
      nodes {
        _id
        slug {
          current
        }
        parentSlug
      }
    }
  }`
