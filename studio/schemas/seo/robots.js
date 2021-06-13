export default {
    name: "robots",
    title: "Robots",
    type: "object",
    options: {
        collapsible: true,
        collapsed: true,
    },
    fields: [
        {
            name: "disallowedPages",
            description: "List of Pages To Disallow. This will disallow pages in robots.txt plus remove them from sitemap",
            type: "array",
            options: {
                collapsible: true,
                collapsed: true,
            },
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
        },
        {
            name: "userAgents",
            title: "User Agents",
            description: "A list of user agents we care about.",
            type: "array",
            of: [ {type: "string"} ]
        }
    ]
}