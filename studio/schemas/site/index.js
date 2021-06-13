import Tabs from "sanity-plugin-tabs"

export default {
    name: "site",
    title: "Site Settings",
    type: "document",
    inputComponent: Tabs,
    fieldsets: [
        { name: "info", title: "Info", options: { sortOrder: 10 } },
        { name: "header", title: "Header", options: { sortOrder: 11 } },
        { name: "footer", title: "Footer", options: { sortOrder: 12 } },
        { name: "robots", title: "Robots", options: {sortOrder: 20 }},
        { name: "images", title: "Images", options: { sortOrder: 30} },
        { name: "social", title: "Social Profiles", options: { sortOrder: 40 }}
    ],
    fields: [
        {
            name: "title",
            title: "Site Title",
            type: "string",
            fieldset: "info"
        },
        {
            name: "url",
            title: "Site Url",
            type: "string",
            fieldset: "info"
        },
        {
            name: "lang",
            title: "Language",
            description: "Default language for site",
            type: "language",
            fieldset: "info"
        },
        {
            name: "meta",
            title: "Meta",
            type: "meta",
            fieldset: "info"
        },
        {
            name: "header",
            title: "Header",
            type: "header",
            fieldset: "header"
        },
        {
            name: "footer",
            title: "Footer",
            type: "footer",
            fieldset: "footer"
        },
        {
            name: "robots",
            title: "Robots",
            type: "robots",
            fieldset: "robots"
        },
        {
            name: "images",
            title: "Images",
            type: "siteImages",
            fieldset: "images"
        },
        {
            name: "socialProfiles",
            title: "Social Profiles",
            type: "socialProfiles",
            fieldset: "social"
        },
    ]
}