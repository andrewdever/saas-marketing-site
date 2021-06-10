import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import site from './site/settings'

import corepage from './page/corepage'
import blogpost from './page/blogpost'
import landingpage from './page/landingpage'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    site,
    corepage,
    blogpost,
    landingpage,
  ]),
})