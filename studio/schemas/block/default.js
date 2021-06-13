export default {
    name: "contentBlock",
    title: "Content Block",
    type: 'array',
    of: [
        {
            type: 'block',
            styles: [
                {title: 'Normal', value: 'normal'},
                {title: 'H3', value: 'h3'},
                {title: 'H4', value: 'h4'},
                {title: 'Quote', value: 'blockquote'},
            ],
        },
        {type: 'image'},
    ]
}