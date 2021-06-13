export default {
    name: "cta",
    title: "Call To Action",
    type: "object",
    fields:[
        {
            name: "text",
            title: "Text Displayed",
            type: "string",
        },
        {
            name: "slug",
            title: "Target Url Slug",
            type: "slug",
            options: {
                source: "text"
            }
        },

    ]
}