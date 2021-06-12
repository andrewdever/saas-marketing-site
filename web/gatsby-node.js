const path = require(`path`)

async function createCorePages(graphql, actions) {
  const { createPage } = actions

  let template = path.resolve("./src/components/templates/corepage.js")
  let query = require("./src/qry/corepages.js")
  let result = await graphql(query)
  result.data.allSanityCorepage.nodes.forEach(page => {
    let path = `/`
    if (page.slug !== null) {
      path = page.slug.current
    }

    if (page.parentSlug !== null) {
      path = page.parentSlug + `/` + page.slug.current
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

async function createLandingpages(graphql, actions) {
  const { createPage } = actions

  let template = path.resolve("./src/components/templates/landingpage.js")
  let query = require("./src/qry/landingpages.js")
  let result = await graphql(query)
  result.data.allSanityLandingpage.nodes.forEach(page => {
    let path = `/`
    if (page.slug !== null) {
      path = page.slug.current
    }

    if (page.parentSlug !== null) {
      path = page.parentSlug + `/` + page.slug.current
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

async function createBlogposts(graphql, actions) {
  const { createPage } = actions

  let template = path.resolve("./src/components/templates/blogpost.js")
  let query = require("./src/qry/blogposts.js")
  let result = await graphql(query)
  result.data.allSanityBlogpost.nodes.forEach(page => {
    let path = `/`
    if (page.slug !== null) {
      path = page.slug.current
    }

    if (page.parentSlug !== null) {
      path = `blog` + `/` + page.slug.current
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
  await createLandingpages(graphql, actions)
  await createBlogposts(graphql, actions)
}