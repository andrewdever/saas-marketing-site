export default {
    name: "author",
    title: "Author",
    type: "document",
    fields: [
        {
            name: "displayName",
            title: "Display Name",
            description: "The Author's name that will be displayed to viewers",
            type: "string"
        },
        {
            name: "pic",
            title: "Pic",
            description: "Picture of author",
            type: "image"
        },
        {
            name: "shortBio",
            title: "Short Bio",
            description: "Bio to be displayed where short bio is applicable",
            type: "text"
        },
        {
            name: "longBio",
            title: "Long Bio",
            description: "Bio to be displayed on Author's page",
            type: "text"
        }
    ]
}