export default {
    name: "site",
    title: "Site Settings",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Site Title",
            type: "string",
        },
        {
            name: "lang",
            title: "Language",
            type: "string",
        },
        {
            name: "disallowSearchEngines",
            title: "Hide site from Search Engines?",
            description: "If true robots will disallow all bots on the entire site.",
            type: "boolean",
            initialValue: true,
        },
    ]
}