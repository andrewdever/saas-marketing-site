export default {
    name: "footer",
    title: "Footer",
    type: "document",
    options: {
        collapsible: true,
        collapsed: true,
    },
    fields: [
        {
            name:"copyright",
            title: "Copyright",
            type: "copyright"
        },
        {
            name: "links",
            title: "Links",
            type: "array",
            of: [
                {
                    type: "reference",
                    to: [
                        {type: "corepage"},
                        {type: "blogpost"},
                        {type: "landingpage"},
                    ]
                }
            ]
        }
    ]
}