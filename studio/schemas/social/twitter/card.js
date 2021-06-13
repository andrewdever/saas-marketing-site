export default {
    name: "twitterCard",
    title: "Twitter Card",
    type: "object",
    fields: [
        {
            name: "type",
            title: "Card Type",
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
        {
            name: "title",
            title: "Title",
            type: "string",

        },
        {
            name: "description",
            title: "Description",
            type: "text"
        }
    ]
}