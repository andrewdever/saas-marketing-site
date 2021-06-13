export default {
    name: "textAndLinksOnly",
    title: "Alternate Actions",
    type: 'array',
    of: [
        {
            type: 'block',
            marks: {
                decorators:[
                    { title: 'Strong', value: 'strong' },
                    { title: 'Emphasis', value: 'em' },
                ]
            },
            styles: [
                { title: 'Normal', value: 'normal' },
            ],
            lists: [],
            // of: [
            //     {type: 'link'},
            //   ]
        }
    ]
}