module.exports = {
  title: "刘璐",
  description: "理解了目标，方向自然就出现了",
  dest: "public",
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
    ],
  ],
  theme: "reco",
  themeConfig: {
    // mode: "dark",
    // modePicker: true,
    noFoundPageByTencent: false,
    nav: [
      { text: "Home", link: "/", icon: "reco-home" },
      { text: "TimeLine", link: "/timeline/", icon: "reco-date" },
      { text: "AboutMe", link: "/docs/Aboutme/", icon: "reco-account" },
      { text: "GitHub", link: "https://github.com/liulu01", icon: "reco-github",
      },

    ],
    sidebar: {
      "/docs/theme-reco/": ["", "theme", "plugin", "api", "ceshi"],
      // '/blogs/times/': [
      //   '',
      // ],
      // '/blogs/js/': [
      //   '',
      // ],
      // '/blogs/vueoptimization/': [
      //   '',
      // ],
    },
    type: "blog",
    // 博客设置
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: "Category", // 默认 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: "Tag", // 默认 “标签”
      },
    },
    sidebarDepth: 2,
    logo: "/avatar.png",
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    // sidebar: 'auto',
    // 最后更新时间
    lastUpdated: "Last Updated",
    // 作者
    author: "刘璐",
    // 作者头像
    authorAvatar: "/avatar.png",
    // 备案号
    record: "浙ICP备18041744号",
    // 项目开始时间
    startYear: "2022",
    /**
     * valine 设置 (if you need valine comment )
     */
    valineConfig: {
      appId: "E6lEVw47DgzIW3ynNU65xDrN-gzGzoHsz", // your appId
      appKey: "XqCXbyVzLOtSJ9CvDzbYghIF", // your appKey
    },
  },
  markdown: {
    lineNumbers: true,
  },
};
