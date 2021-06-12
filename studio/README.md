# CMS + Content Database powered by Sanity.io

## 🚀 Local Setup

Clone monorepo, cd into studio, and install packages
```shell
git clone https://github.com/andrewdever/saas-marketing-site
cd studio
npm install
```

## Start Developing

Run ```bash npm run dev``` or ```sanity start```

CMS GUI live at [http://localhost:3333](http://localhost:3333)

## 🧐 What's inside?

**`/schemas`**
    - Most of the work happens by adding/editing json schemas in this directory that define documents and content for the content graph.
    - You can add new json files for new documents or edit existing documents, adding or changing the fields available to edit.
    - [Documentation for schema/data types in Sanity](https://www.sanity.io/docs/schema-types)

**`/schemas/schema.js`**
    - This file exports all the schemas, making them available in the content graph and CMS GUI application.
    - If you add new schemas or rename schemas make sure you update this file.

**`src/deskStructure.js`**
    - Where you can add elements to the CMS GUI for content creators to navigate to and edit documents and content.
    - You should only need to edit this if you're adding new document types.

**`sanity.json`**
    - Configuration for Sanity.
    - [Documentation](https://www.sanity.io/docs/sanity-json)

## 🧐 Sanity CLI & NPM Commands

#### Start development server
Run ```bash sanity start``` or ```npm run dev```

CMS GUI live at [http://localhost:3333](http://localhost:3333)

#### Deploy the content Graph
Run ```sanity graphql deploy```

If successful this will deploy the graphql to sanity, making it available to the front-end website (everything in the `web` directory).

#### Build CMS GUI
Run ```sanity build``` or ```npm run build```

Build will be in `/dist` directory.

#### Clear build files
Run ```npm run clean```

#### More commands
See `package.json`
Run ```sanity --help``` for a list of commands.
[List of Sanity CLI Commands](https://www.sanity.io/docs/cli)

## Deploying the Site

This project is powered by Netlify, which hosts both the CMS and Site.

1. cd into the root project directory i.e. `/saas-marketing-site`
2. Run ```bash git push origin master```
3. Check the Netlify Deploy logs via Netlify CLI or GUI.

Voila!