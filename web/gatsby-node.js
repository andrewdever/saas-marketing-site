const path = require(`path`)

async function createCorePages(graphql, actions) {
  const { createPage } = actions

  let template = path.resolve("./src/components/templates/corepage/index.js")
  let query = require("./src/qry/corepage.js")
  let result = await graphql(query)
  result.data.allSanityPageCore.nodes.forEach(page => {
    let path = `/`
    if (page.slug !== null) {
      path = page.slug.current
    }

    if (page.parentSlug !== null) {
      path = page.parentSlug.current + `/` + page.slug.current
    }

    createPage({
      path: path,
      component: template,
      context: {
        id: page._id,
      },
    })
  })
}

exports.createPages = async ({ graphql, actions }) => {
  await createCorePages(graphql, actions)
}
