import React from "react"
import { graphql } from "gatsby"

import Head from "../head"

const QUERY = graphql`
  query Landingpage($id: String!) {
    page: sanityLandingpage(_id: { eq: $id }) {
      title
      slug {
        current
      }
      parentSlug
      seo {
        canonical
        disallowSearchEngines
        htmlTitle
        metaDescription
        ogDescription
        ogImage
        ogTitle
        ogType
        ogVideo
        twitterCardType
      }
      lang {
        code
        og
      }
    }
  }
`



const Template = props => {
  const page = props.data.page

  const meta = {
    seo: page.seo,
    lang: page.lang,
    slug: page.slug.current,
    parentSlug: page.parentSlug,
  }

  return (
    <React.StrictMode>
      <Head page={meta} />
      <h1>{page.title}</h1>
    </React.StrictMode>
  )
}

export default Template
export { QUERY }