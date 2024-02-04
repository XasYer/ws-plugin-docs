import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ws-plugin",
  description: "A VitePress Site",
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    editLink: {
      pattern: 'https://github.com/XasYer/XasYer.github.io/tree/main/ws-plugin/:path',
      text: '编辑此页面'
    },
    nav: [
      { text: '主页', link: '/' },
      { text: '快速开始', link: '/start' },
      { text: '功能列表', link: '/feature' },
      { text: '配置选项', link: '/setting' },
      { text: '常见问题', link: '/FAQ' }
    ],
    search: {
      provider: 'local'
    },
    sidebar: [
      {
        text: '参考',
        items: [
          {
            text: '快速开始',
            link: '/start',
            collapsed: true,
            items: [
              {
                text: '安装插件',
                link: '/start#安装插件'
              }
            ]
          },
          { text: '功能列表', link: '/feature' },
          { text: '配置选项', link: '/setting' },
          { text: '常见问题', link: '/FAQ' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/XasYer/ws-plugin' }
    ]
  },
  base: '/ws-plugin-docs/'
})
