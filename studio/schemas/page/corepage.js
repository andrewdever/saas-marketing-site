import Tabs from "sanity-plugin-tabs"

export default {
    name: "corepage",
    title: "Core Page",
    type: "document",
    inputComponent: Tabs,
    fieldsets: [
        { name: "content", title: "Content", options: { sortOrder: 10 } },
        { name: "seo", title: "Seo", options: { sortOrder: 11 } },
        { name: "lang", title: "Language", options: {sortOrder: 12}}
    ],
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
            fieldset: "content"
        },
        {
            name: "slug",
            title: "Url Slug",
            type: "slug",
            options: {
                source: "title"
            },
            fieldset: "content"
        },
        {
            name: "parentSlug",
            title: "Parent Url Slug",
            description: "Use if page should have a parent directory e.g. 'product' for /product/the-page",
            type: "string",
            fieldset: "content"
        },
        {
            name: "sections",
            title: "Sections",
            description: "Add copy sections or forms to the page",
            type: "array",
            of: [
                {
                    name: "section",
                    type: "section"
                },
                {
                    name: "form",
                    title: "Form",
                    type: "reference",
                    to: [{type: "form"}],
                },
            ],
            fieldset: "content"
        },
        {
            name: "seo",
            title: "Page SEO",
            type: "seo",
            fieldset: "seo",
        },
        {
            name: "lang",
            title: "Language",
            type: "reference",
            to:[{type:"language"}],
            fieldset: "lang"
        },

    ]
}