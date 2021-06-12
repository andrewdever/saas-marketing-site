# SaaS Marketing Site

Static website generated with Gatsbyjs, Preact, and Sass. Powered by Sanity.io CMS & Netlify.

## 🚀 Local Setup
Install the monorepo, cd into web and install packages.

```shell
git clone https://github.com/andrewdever/saas-marketing-site
cd web
npm install
```

## Start Developing

```shell
gatsby develop
```

Site live at [http://localhost:8000](http://localhost:8000)
GraphQL playground live at [http://localhost:8000/___graphql](http://localhost:8000/___graphql)

## 🧐 What's inside?

**`.env`**
  - Where you setup your Sanity credentials.
  - Only public in this repo for demo purposes; make sure you don't expose these publicly.

**`src/pages`**
  - Static (non CMS) site pages go here.
  - Gatsby will automatically build these and serve them at the path of the file.

**`src/components`**
  - Your typical React components folder.
  - This is where UX/UI is built and styled.

**`gatsby-config.js`**
  - Main configuration file for a Gatsby site.
  - Setup Gatsby plugins here.
  - Optionally specify site info (metadata).
  - [Documentation](https://www.gatsbyjs.com/docs/gatsby-config/)

**`gatsby-node.js`**
  - Generate pages, GraphQL data, etc. during Gatsby build.
  - E.g. generate blog posts from your CMS.
  - [Documentation](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/)

**`gatsby-ssr.js`**
  - Not included but can optionally add.
  - For Server-side rendering (dynamic/hybrid apps)
  - [Documentation](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/)

**`gatsby-browser.js`**
  - Not included but can optionally add.
  - Client-side rendering.
  - [Documentation](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/)

**`/public`**
  - Where the build of your site will be.
  - Run ```gatsby clean``` to remove.

**`.cache`**
  - Development and build cache.
  - Run ```gatsby clean``` to remove.


## 🧐 Gatsby CLI & NPM Commands

#### Start development server
Run ```bash gatsby develop```
Site live at [http://localhost:8000](http://localhost:8000)
GraphQL playground live at [http://localhost:8000/___graphql](http://localhost:8000/___graphql)

#### Build Site
Run ```bash gatsby build```
Latest build will be in `/public` directory.

#### Clear build and cache files
```bash gatsby clean```
This will remove `.cache` and `/public` directories.

#### Adding Gatsby Plugins
1. Run ```bash npm install <gatsby-plugin-name>```

2. Add plugin to `gatsby-config.js`
  - For some plugins the order matters; I.e., if a plugin is dependant on another plugin that needs to be loaded first.
  - Customize plugin options as necessary.

See [Gatsby's Plugin Library](https://www.gatsbyjs.com/plugins). You can also roll your own [local plugins](https://www.gatsbyjs.com/docs/creating-a-local-plugin/).

#### More commands
See `package.json` and [Gatsby CLI Documentation](https://www.gatsbyjs.com/docs/reference/gatsby-cli/) for more.

## Deploying the Site

This project is powered by Netlify, which hosts both the Site and CMS.

1. cd into the root project directory i.e. `/saas-marketing-site`
2. Run ```bash git push origin master```
3. Check the Netlify Deploy logs via Netlify CLI or GUI.

Voila!
