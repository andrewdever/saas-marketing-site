export default {
    name: "corepage",
    title: "Core Page",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string"
        },
        {
            name: "slug",
            title: "Url Slug",
            type: "slug",
            options: {
                source: "title"
            }
        },
        {
            name: "parentSlug",
            title: "Parent Url Slug",
            type: "string"
        }

    ]
}