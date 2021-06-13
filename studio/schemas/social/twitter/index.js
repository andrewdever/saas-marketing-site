export default {
    name: "twitter",
    title: "Twitter",
    type: "object",
    fields: [
        {
            name: "username",
            title: "Username",
            type: "string",
        },
        {
            name: "url",
            title: "Url",
            type: "url",
        },
        {
            name: "defaultCardtype",
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
    ]
}