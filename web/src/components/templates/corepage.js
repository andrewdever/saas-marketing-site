import React from "react"
import { graphql } from "gatsby"

const QUERY = graphql`
  query Corepage($id: String!) {
    page: sanityCorepage(_id: { eq: $id }) {
      title
    }
  }
`

const Template = props => {
  const page = props.data.page

  return (
    <React.StrictMode>
      <h1>{page.title}</h1>
    </React.StrictMode>
  )
}

export default Template
export { QUERY }
