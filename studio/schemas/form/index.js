import Tabs from "sanity-plugin-tabs"

export default {
    name: "form",
    title: "Form",
    type: "document",
    inputComponent: Tabs,
    fieldsets: [
        { name: "form", title: "Form", options: { sortOrder: 10 } },
        { name: "fieldsTab", title: "Fields", options: { sortOrder: 20 } },
    ],  
    fields: [
        {
            name: "title",
            title: "Form Name within CMS",
            type: "string",
            fieldset: "form",
        },
        {
            name: "name",
            title: "Form Id",
            type: "slug",
            options: {
                source: "title"
            },
            fieldset: "form",
        },
        {
            name: "fields",
            title: "Fields",
            type: "array",
            of: [
                {
                    type: "field",

                }
            ],
            fieldset: "fieldsTab",
        },
        {
            name: "cta",
            title: "Call To Action",
            type: "string",
            fieldset: "form",
        },
        {
            name: "alternateActions",
            title: "Alternate Actions",
            description: "Alternative actions shown under form.",
            type: "textAndLinksOnly",
            fieldset: "form",
        },
        {
            name: "terms",
            title: "Form Terms",
            description: "Terms shown under the form.",
            type: "textAndLinksOnly",
            fieldset: "form",
        },
    ]
}