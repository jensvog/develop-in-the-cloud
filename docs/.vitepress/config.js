export default {
  lastUpdated: true,
  themeConfig: {
    nav: [
      { text: 'Guide', link: '/guides' },
    ],
    sidebar: [
      { text: 'Getting Started', link: '/getting-started' },
      {
        text: 'Guides',
        collapsed: false,
        items: [
          { text: 'Weather App', link: '/guides/weather-app' },
        ]
      }
    ]
  }
}
