const ourStoreSidebar = [
    { text: 'Our Story', link: '/about/our-story' },
]

module.exports = {
    logo: '/logo.svg',
    title: 'VitePress',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'About', link: '/about/' },
            { text: 'Contact', link: '/contact' },
        ],
        sidebar: {
            '/about/': ourStoreSidebar,
            '/contact': ourStoreSidebar,
        },
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2019-present Evan You'
        },
        search: {
            provider: 'local'
        }
    }
}
