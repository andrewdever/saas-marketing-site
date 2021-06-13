export default {
    name: "siteImages",
    title: "Site Images",
    type: "object",
    options: {
        collapsible: true,
        collapsed: true
    },
    fields: [
        {
            name: "favicon",
            title: "Favicon",
            description: "Will only accept .ico or .svg file types",
            type: "image",
            options: {
                accept: [".ico", ".svg"]
            }
        },
        {
            name: "logo",
            title: "Logo",
            description: "Master logo image",
            type: "image",
        },
        {
            name: "ogImage",
            title: "Open Graph Image",
            description: "Default image for og:image",
            type: "image",
        },
        {
            name: "manifestIcon",
            title: "Manifest Icon",
            type: "image",
        }
    ]
}