export default {
    name: "header",
    title: "Header",
    type: "document",
    fields: [
        {
            name: "cta",
            title: "Call To Action",
            type: "cta"
        },
        {
            name: "links",
            title: "Links",
            type: "array",
            of: [
                {
                    type: "reference",
                    to: [{type: "corepage"}]
                }
            ]
        }
    ]
}