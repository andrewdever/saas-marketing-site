export default {
    name: "blogpost",
    title: "Blog Post",
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
            name: "author",
            title: "Author",
            type: "reference",
            to: [{type:"author"}]
        },
    ]
}