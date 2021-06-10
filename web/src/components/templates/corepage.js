import React from "react"
import { graphql } from "gatsby"

// import "../../../styles/base.sass"

// import Head from "../../_head"
// import Layout from "../../_layouts/website"
// import Section from "../../sections/_wrap"

const QUERY = graphql`
  query Page($id: String!) {
    page: sanityCorepage(_id: { eq: $id }) {
      title
      
      # seo {
      #     htmlTitle
      #     metaDescription
      #     ogTitle
      #     ogDescription
      #     ogImage
      #     ogType
      #     ogVideo
      #     disallowSearchEngines
      #     canonical
      # }
      # twitterCard {
      #     type
      #     title
      #     description
      # }
    }
  }
`

const Template = props => {
  const page = props.data.page

  return (
    <React.StrictMode>
      {/* <Head
                title={page.pageTitle}
                seo={page.seo}
                twitterCard={page.twitterCard}
                slug={props.location.pathname}
            />
            <Layout>
                <h1>{page.pageTitle}</h1>
                <div>{JSON.stringify(page, null, 2)}</div>
                <Section>
                    Blah
                </Section>
            </Layout> */}
      <h1>{page.title}</h1>
    </React.StrictMode>
  )
}

export default Template
export { QUERY }
