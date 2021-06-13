export default {
    name: "socialProfiles",
    title: "Social Info",
    type: "object",
    options: {
        collapsible: true,
        collapsed: true
    },
    fields: [
        {
            name: "twitter",
            title: "Twitter",
            type: "twitter"
        },
        {
            name: "facebook",
            title: "Facebook",
            type: "facebook"
        },
        {
            name: "slack",
            title: "Slack",
            type: "slack",
        },
        {
            name: "github",
            title: "Github",
            type: "github"
        },
    ]
}