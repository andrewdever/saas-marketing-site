import React from "react";

import { useStaticQuery, graphql } from "gatsby";

import { Title, Link, Meta } from "react-head";

const Head = (props) => {

    const data = useStaticQuery(graphql`
        query Head {
            site: sanitySite {
                title
                url
                lang {
                    code
                    og
                }
                meta {
                    description
                    ogDescription
                    ogTitle
                }
                robots {
                    userAgents
                    disallowedPages {
                        ... on SanityBlogpost {
                        slug {
                            current
                        }
                        }
                        ... on SanityCorepage {
                        slug {
                            current
                        }
                        parentSlug
                        }
                        ... on SanityLandingpage {
                        slug {
                            current
                        }
                        parentSlug
                        }
                    }
                }
                socialProfiles {
                    facebook {
                        appId
                        url
                        username
                    }
                    twitter {
                        defaultCardtype
                        url
                        username
                    }
                }
            }
        }
    `)
    const site = data.site
    const page = props.page

    


    // const url = site.url + page.slug

    // let lang = site.lang.code
    // if (typeof page.lang)


    // let htmlTitle = site.title
    // if (typeof props.seo.htmlTitle !== 'undefined' && props.seo.htmlTitle !== null) {
    //     htmlTitle = `${site.title} | ${props.seo.htmlTitle}`
    // } else if (typeof props.title !== 'undefined' && props.title !== null) {
    //     htmlTitle = `${site.title} | ${props.title}`
    // }


    // document.documentElement.lang = site.lang.code

    return (
        <Title>{site.title}</Title>
    )

}

export default Head

// title={title}
//       titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
//       meta={[
//         {
//           name: `description`,
//           content: metaDescription,
//         },
//         {
//           property: `og:title`,
//           content: title,
//         },
//         {
//           property: `og:description`,
//           content: metaDescription,
//         },
//         {
//           property: `og:type`,
//           content: `website`,
//         },
//         {
//           name: `twitter:card`,
//           content: `summary`,
//         },
//         {
//           name: `twitter:creator`,
//           content: site.siteMetadata?.author || ``,
//         },
//         {
//           name: `twitter:title`,
//           content: title,
//         },
//         {
//           name: `twitter:description`,
//           content: metaDescription,
//         },
//       ].concat(meta)}
//     />
//   )
// }

// Seo.defaultProps = {
//   lang: `en`,
//   meta: [],
//   description: ``,
// }