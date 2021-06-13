import Tabs from "sanity-plugin-tabs"

export default {
    name: "landingpage",
    title: "Blog Post",
    type: "document",
    inputComponent: Tabs,
    fieldsets: [
        { name: "content", title: "Content", options: { sortOrder: 10 } },
        { name: "info", title: "Info", options: { sortOrder: 11 } },
        { name: "form", title: "Form", options: { sortOrder: 11 } },
        { name: "seo", title: "Seo", options: { sortOrder: 12 } },
        { name: "lang", title: "Language", options: {sortOrder: 13}}
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
            fieldset: "info"
        },
        {
            name: "parentSlug",
            title: "Parent Url Slug",
            type: "string",
            fieldset: "content"
        },
        {
            name: "author",
            title: "Author",
            type: "reference",
            to: [{type:"author"}],
            fieldset: "info"
        },
        {
            name: "categories",
            type: "array",
            of: [
                {
                    type: "reference",
                    to: [{type:"category"}]
                }
            ],
            fieldset: "info"
        },
        {
            name: "body",
            title: "Article Content",
            type: "contentBlock",
            fieldset: "content",
        },
        {
            name: "excerpt",
            title: "Article Excerpt",
            type: "text",
            fieldset: "content",
        },
        {
            name: "form",
            title: "Form",
            type: "reference",
            to: [{type: "form"}],
            fieldset: "form"
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