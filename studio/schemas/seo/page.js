export default {
    name: "seo",
    title: "Page SEO",
    type: "object",
    options: {
        collapsible: true,
        collapsed: true,
    },
    fields: [
        {
            name: "disallowSearchEngines",
            title: "Hide from Search Engines?",
            description: "If set to true a meta tag will be set on the page to disallow robots, and the page will not be added to sitemaps.",
            type: "boolean",
            initialValue: false,
        },
        {
            name: "htmlTitle",
            title: "HTML Title",
            description: "<title>. (If empty will default to page title.)",
            type: "string",
        },
        {
            name: "ogTitle",
            title: "Open Graph Title",
            type: "string",
        },
        {
            name: "canonical",
            title: "Canonical Parent",
            description: "If the page has a canonical parent add the url to it.",
            type: "url"
        },
        {
            name: "metaDescription",
            title: "Meta Description",
            type: "text",
        },
        {
            name: "ogDescription",
            title: "Page Open Graph Description",
            type: "text",
        },
        {
            name: "ogImage",
            title: "Page Open Graph Image",
            type: "url",
        },
        {
            name: "ogType",
            title: "Page Open Graph Type",
            description: "Defaults to website for core and landing pages; article for blog articles; profile for people pages. You should only set this for a video or unique type.",
            type: "string",
        },
        {
            name: "ogVideo",
            title: "Page Open Graph Video",
            type: "url",
        },
        {
            name: "twitterCardType",
            title: "Twitter Card Type",
            description: "Customize Card type shown on twitter. Defaults to summary if empty.",
            type: "string",
            options:{
                list:[
                    {title: "Summary Card", value: "summary"},
                    {title: "Summary Card with large image", value: "summary_large_image"},
                    {title: "Player Card", value:"player"},
                    {title: "App Card", value:"app"}
                ]
            }
        },
    ]
}