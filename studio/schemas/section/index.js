export default {
    name: "section",
    title: "Section",
    type: "object",
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string"
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "name"
            }
        },
        {
            name: "title",
            title: "Display Title",
            type: "string"
        },
        {
            name: "tagline",
            title: "Display Tagline",
            type: "text"
        },
        {
            name: "body",
            title: "Display Body",
            type: "contentBlock"
        }
    ]
}