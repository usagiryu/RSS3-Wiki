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
                                text: 'Discord',
                                link: 'https://discord.gg/rss3'
                            },
                            {
                                text: 'Telegram',
                                link: 'https://t.me/rss3_en'
                            },
                            {
                                text: 'Twitter',
                                link: 'https://twitter.com/rss3_'
                            },
                            {
                                text: 'Blog',
                                link: 'https://rss3.notion.site/'
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
                                'rss3-sdk-for-javascript.md',
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
                        {
                            text: 'Design',
                            children: [
                                'design.md',
                            ],
                        },
                        {
                            text: 'Events',
                            children: [
                                'events.md',
                            ],
                        },
                    ],
                },
            },
        },
    },
}
