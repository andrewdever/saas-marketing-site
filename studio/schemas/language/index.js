export default {
    name: "language",
    title: "Language",
    type: "document",
    fields: [
        {
            name: "code",
            title: "Language Code",
            description: 'E.g. "en" or "en_GB',
            type: "string",
            validation: Rule => Rule.required(),
        },
    ]
}