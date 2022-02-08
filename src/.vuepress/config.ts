const { description } = require('../../package')

module.exports = {
    locales: {
        '/': {
            lang: 'en-US',
            title: 'RSS3',
            description: description,
        },
    },

    head: [
        ['meta', { name: 'theme-color', content: '#0072ff' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['link', { rel: 'icon', href: 'https://graphics.rss3.workers.dev/' }]
    ],

    themeConfig: {
        repo: 'NaturalSelectionLabs',
        docsRepo: 'NaturalSelectionLabs/RSS3-Wiki',
        sidebarDepth: 2,
        docsDir: 'src',
        logo: 'https://graphics.rss3.workers.dev/',
        locales: {
            '/': {
                lang: 'en-US',
                label: 'English',
                editLinkText: 'Edit this page on GitHub',
                navbar: [
                    {
                        text: 'Guide',
                        link: '/',
                    },
                    {
                        text: 'Whitepaper',
                        link: 'https://rss3.io/#/whitepaper'
                    },
                    {
                        text: 'Learn More',
                        children: [
                            {
                                text: 'Events',
                                link: '/events.md'
                            },
                            {
                                text: 'Blog',
                                link: 'https://rss3.notion.site/'
                            },
                            {
                                text: 'Brand Kit',
                                link: 'https://rss3.notion.site/RSS3-Brand-Kit-251e768345684ba9acd038d79c6899b8'
                            },
                            {
                                text: 'Join Us',
                                link: 'https://rss3.notion.site/Open-Source-Remote-RSS3-Offering-the-Dopest-Positions-Frontend-Full-stack-Decentralized-System--b6fdbffee017449797397f45340de9d4'
                            },
                            {
                                text: 'Support RSS3',
                                link: '/support.md'
                            },
                        ]
                    },
                ],
                sidebar: {
                    '/': [
                        {
                            text: 'Guide',
                            children: [
                                'README.md',
                            ],
                        },
                        {
                            text: 'Protocol',
                            children: [
                                'protocol.md',
                            ],
                        },
                        {
                            text: 'SDK',
                            children: [
                                'sdk-list.md',
                                'sdk-for-javascript.md',
                            ],
                        },
                        {
                            text: 'Network',
                            children: [
                                'network-roadmap.md',
                                'network-api.md',
                                'network-data.md',
                            ],
                        },
                    ],
                },
            },
        },
    },
}
