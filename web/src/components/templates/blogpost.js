import React from "react"
import { graphql } from "gatsby"

import Head from '../head'

const QUERY = graphql`
  query Blogpost($id: String!) {
    page: sanityBlogpost(_id: { eq: $id }) {
      title
    }
  }
`

const Template = props => {
  const page = props.data.page

  return (
    <React.StrictMode>
      <Head />
      <h1>{page.title}</h1>
    </React.StrictMode>
  )
}

export default Template
export { QUERY }
