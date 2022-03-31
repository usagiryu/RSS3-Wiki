const { description } = require('../../package')

// https://github.com/vuepress/vuepress-next/blob/98b7a57856c7b81a82291642e3cf7218699f3523/packages/%40vuepress/markdown/src/utils/slugify.ts
const rControl = /[\u0000-\u001f]/g
const rSpecial = /[\s~`!@#$%^&*()\-_+=[\]{}|\\;:"'“”‘’<>,.?/]+/g
const rCombining = /[\u0300-\u036F]/g

module.exports = {
    title: 'RSS4',
    description: description,

    head: [
        ['meta', { name: 'theme-color', content: '#fff' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['link', { rel: 'icon', href: 'https://graphics.rss3.workers.dev/' }],
        ['script', {}, 'console.log("Happy Aprils Fool!")'],
        ['script', {}, '(function(){var x = document.body.getElementsByTagName("*"); for (i = 0; i < x.length; i++) {var y = Math.floor((Math.random()*10)+1); x[i].style.transform="rotate("+y+"deg)"}}());']
    ],

    markdown: {
        extractHeaders: {
            level: [1, 2, 3, 4, 5],
        },
        anchor: {
            slugify: (str) => str
                .normalize('NFKD')
                // Remove accents
                .replace(rCombining, '')
                // Remove control characters
                .replace(rControl, '')
                // Replace special characters
                .replace(rSpecial, '-')
                // Remove continuos separators
                .replace(/-{2,}/g, '-')
                // Remove prefixing and trailing separators
                .replace(/^-+|-+$/g, '')
                // ensure it doesn't start with a number (#121)
                // .replace(/^(\d)/, '_$1')
                // lowercase
                .toLowerCase()
        }
    },

    plugins: [
        '@vuepress/plugin-shiki',
        ['@vuepress/plugin-docsearch', {
            apiKey: 'a9bd399b495e1f6a542c545d43329f6d',
            indexName: 'rss3',
            appId: '6EJE6R29QB',
        }],
        ['@vuepress/plugin-google-analytics', {
            id: 'G-8BSS4K59LF',
        }],
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
                    text: '👋 Guide',
                    collapsible: true,
                    link: '/README.md',
                    children: [
                        '/README.md',
                        '/products.md',
                        '/faq.md',
                        '/thanks.md',
                    ],
                },
                {
                    text: '🕊 Protocols',
                    collapsible: true,
                    sidebarDepth: 5,
                    link: '/protocol/README.md',
                    children: [
                        '/protocol/README.md',
                        '/protocol/v0.4.0-rc.2.md',
                        {
                            text: 'RSS3 Improvement Proposals',
                            children: [
                                '/protocol/RIPs/RIP-1.md',
                                '/protocol/RIPs/RIP-2.md',
                                '/protocol/RIPs/RIP-3.md',
                                '/protocol/RIPs/RIP-4.md',
                                '/protocol/RIPs/RIP-5.md',
                                '/protocol/RIPs/RIP-6.md',
                                '/protocol/RIPs/RIP-7.md',
                                '/protocol/RIPs/RIP-8.md',
                            ],
                        },
                    ],
                },
                {
                    text: '🐿 SDKs',
                    collapsible: true,
                    link: '/sdk/list.md',
                    children: [
                        '/sdk/list.md',
                        '/sdk/rss3-sdk-for-javascript.md',
                    ],
                },
                {
                    text: '🦈 Network',
                    collapsible: true,
                    link: '/network/roadmap.md',
                    children: [
                        '/network/roadmap.md',
                        '/network/api.md',
                        '/network/data.md',
                    ],
                },
                '/design.md',
                '/events.md',
                '/token.md',
            ],
        },
    },
}
