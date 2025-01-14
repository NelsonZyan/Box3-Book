import { defineConfig } from 'vitepress'
import nav from "./nav.mts"
import sidebar from "./sidebar.mts"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "神岛萌新手册",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav,

    sidebar,

    socialLinks: [
      { icon: 'gitee', link: 'https://github.com/NelsonZyan/Box3-Book' }
    ]
  }
})
