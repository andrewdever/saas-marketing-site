import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import site from './site/'
import meta from './site/meta'

import siteImages from './site/siteImages'

import robots from './seo/robots'
import seo from './seo/page'

import language from './language/'

import header from './header'
import cta from './cta'
import footer from './footer'
import copyright from './copyright'

import socialProfiles from "./social"
import slack from "./social/slack/"
import github from "./social/github/"
import twitter from "./social/twitter/"
import facebook from "./social/facebook/"

import corepage from './page/corepage'
import blogpost from './page/blogpost'
import landingpage from './page/landingpage'

import author from './author'

import contentBlock from './block/default'
import textAndLinksOnly from "./block/textAndLinksOnly"

import category from './category/'

import section from './section/'

import form from "./form/"
import field from "./form/field"

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    site,
    meta,
    siteImages,

    robots,
    seo,

    language,

    header,
    cta,
    footer,
    copyright,

    socialProfiles,
    slack,
    github,
    twitter,
    facebook,

    corepage,
    blogpost,
    landingpage,

    author,

    contentBlock,
    textAndLinksOnly,

    category,
    section,

    form,
    field,

  ]),
})