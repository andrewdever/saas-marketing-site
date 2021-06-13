export default {
    name: "github",
    title: "Github",
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
            initialValue: "https://github.com/",
        }
    ]
}