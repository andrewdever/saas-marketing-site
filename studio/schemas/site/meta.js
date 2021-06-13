export default {
    name:"meta",
    title: "Meta",
    type: "object",
    options: {
        collapsible: true,
        collapsed: true
    },
    fields: [
        {
            name: "ogTitle",
            title: "OG Title",
            description: "Default Open Graph Title",
            type: "string",
        },
        {
            name: "description",
            title: "Meta Description",
            description: "Default Meta Description",
            type: "text"
        },
        {
            name: "ogDescription",
            title: "OG Description",
            description: "Default Open Graph Description",
            type: "text"
        }
    ]
}