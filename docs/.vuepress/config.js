module.exports = {
  title: "Stanley Ang",
  description: "I'm a Computer Science student at BINUS University currently studying Mobile Application and Technology. I love everything tech-related, from designing UI/UX to creating real world problem-solving apps.",
  head: [["link", { rel: "icon", href: `/logo.png` }]],
  base: "/",
  dest: "./dist",

  themeConfig: {
    search: false,
    nav: [
      { text: "Home", link: "/" },
      { text: "About", link: "/about/" },
      { text: "Projects", link: "/projects/" }
    ],
    sidebar: {
      '/guide/': genSidebarConfig('Guide')
    },
    lastUpdated: 'Last Updated'
  },

  markdown: {
    // options for markdown-it-anchor
    anchor: { permalink: false },
    extendMarkdown: md => {
      md.use(require("markdown-it-katex"));
    }
  },

  plugins: [
    [
      '@vuepress/google-analytics',
      {
        'ga': process.env.GA_TRACKING_ID || 'GA_TRACKING_ID' // UA-00000000-0
      }
    ]
  ]
};

function genSidebarConfig (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        '',
        'getting-started',
        'customize',
        'advanced',
      ]
    }
  ]
}

