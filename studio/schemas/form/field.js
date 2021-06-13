export default {
    name: "field",
    title: "Form Field",
    type: "object",
    fields: [
        {
            name: "name",
            title: "Field Name",
            type: "string"
        },
        {
            name: "id",
            title: "Field Slug",
            type: "string",
        },
        {
            name: "required",
            title: "Required?",
            type: "boolean",
            initialValue: false,
        },
        {
            name: "label",
            title: "Label",
            type: "string"
        },
        {
            name: "description",
            title: "Description",
            type: "string"
        },
        {
            name: "placeholder",
            title: "Placeholder",
            type: "string"
        },
        {
            name: "type",
            title: "Field Type",
            type: "string",
            options: {
                list:[
                    {title: "text", value: "text"},
                    {title: "email", value: "email"},
                    {title: "tel", value: "tel"},
                    {title: "password", value: "password"},
                    {title: "textarea", value: "textarea"},
                    {title: "url", value: "url"},
                    {title: "number", value: "number"},
                    {title: "checkbox", value: "checkbox"},
                    {title: "radio", value: "radio"},
                    {title: "search", value: "search"},
                    {title: "hidden", value: "hidden"},
                    {title: "file", value: "file"},
                    {title: "image", value: "image"},
                    {title: "submit", value: "submit"},
                    {title: "range", value: "range"},
                    {title: "reset", value: "reset"},
                    {title: "week", value: "week"},
                    {title: "month", value: "month"},
                    {title: "time", value: "time"},
                    {title: "date", value: "date"},
                    {title: "datetime-local", value: "datetime-local"},
                ]
            }
        }
    ]
}