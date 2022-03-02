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

    markdown: {
        extractHeaders: {
            level: [1, 2, 3],
        },
    },

    plugins: [
        '@vuepress/plugin-shiki',
    ],

    themeConfig: {
        repo: 'NaturalSelectionLabs',
        docsRepo: 'NaturalSelectionLabs/RSS3-Wiki',
        sidebarDepth: 3,
        docsDir: 'src',
        logo: 'https://graphics.rss3.workers.dev/',
        themePlugins: {
            activeHeaderLinks: false,
        },
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
                        text: 'Tech Weekly',
                        link: '/tech-weekly/',
                    },
                    {
                        text: 'Whitepaper',
                        link: 'https://rss3.io/RSS3-Whitepaper.pdf'
                    },
                    {
                        text: 'Blog',
                        link: 'https://rss3.notion.site/'
                    },
                    {
                        text: '💌 Join Us',
                        link: 'https://rss3.notion.site/Open-Source-Remote-RSS3-Offering-the-Dopest-Positions-b6fdbffee017449797397f45340de9d4'
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
                                text: 'Support RSS3',
                                link: '/support.md'
                            },
                        ]
                    },
                ],
                sidebar: {
                    '/tech-weekly/': [
                        {
                            text: 'Tech Weekly',
                            children: [
                                '/tech-weekly/README.md',
                            ],
                        },
                    ],
                    '/': [
                        {
                            text: 'Guide',
                            collapsible: true,
                            children: [
                                '/README.md',
                                '/products.md',
                                '/faq.md',
                            ],
                        },
                        {
                            text: 'Protocol',
                            collapsible: true,
                            sidebarDepth: 5,
                            children: [
                                '/protocol/README.md',
                                '/protocol/v0.4.0-rc.md',
                                {
                                    text: 'RSS3 Improvement Proposals',
                                    children: [
                                        '/protocol/RIPs/RIP-1.md',
                                        '/protocol/RIPs/RIP-2.md',
                                        '/protocol/RIPs/RIP-3.md',
                                        '/protocol/RIPs/RIP-4.md',
                                        '/protocol/RIPs/RIP-5.md',
                                    ],
                                },
                            ],
                        },
                        {
                            text: 'SDK',
                            collapsible: true,
                            children: [
                                '/sdk-list.md',
                                '/rss3-sdk-for-javascript.md',
                            ],
                        },
                        {
                            text: 'Network',
                            collapsible: true,
                            children: [
                                '/network-roadmap.md',
                                '/network-api.md',
                                '/network-data.md',
                            ],
                        },
                        {
                            text: 'Design',
                            collapsible: true,
                            children: [
                                '/design.md',
                            ],
                        },
                        {
                            text: 'Events',
                            collapsible: true,
                            children: [
                                '/events.md',
                            ],
                        },
                    ],
                },
            },
        },
    },
}
