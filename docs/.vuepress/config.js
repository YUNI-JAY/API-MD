module.exports = {
  // markdown: {
  //   extractHeaders: ['h2', 'h3', 'h4']
  // },
  title: 'API网关', // 显示在左上角的网页名称以及首页在浏览器标签显示的title名称
  description: 'API网关', // meta 中的描述文字，用于SEO
  head: [
    ['link',
      { rel: 'icon', href: '/logo.png' }
    ],
  ],
  base:'/API-MD/',
  themeConfig: {
    logo: '/logo.png',  //网页顶端导航栏左上角的图标

    //顶部导航栏
    nav: [
      //格式一：直接跳转，'/'为不添加路由，跳转至首页
      { text: '首页', link: '/' },
      //格式二：添加下拉菜单，link指向的文件路径
      {
        text: '分类',  //默认显示        
        ariaLabel: '分类',   //用于识别的label
        items: [
          { text: '指南', link: '/pages/introduce.md' },
          { text: '深入', link: '/pages/run.md' },
          //点击标签会跳转至link的markdown文件生成的页面
          { text: '开发', link: '/pages/create.md' },
        ]
      },
      //格式三：跳转至外部网页，需http/https前缀
      { text: '项目地址', link: 'http://10.187.101.130:8211' },
    ],

    //侧边导航栏：会根据当前的文件路径是否匹配侧边栏数据，自动显示/隐藏
    sidebar: {
      '/pages/': [
        {
          title: '指南',   // 一级菜单名称
          collapsable: false, // false为默认展开菜单, 默认值true是折叠,
          sidebarDepth: 1,    //  设置侧边导航自动提取markdown文件标题的层级，默认1为h2层级
          children: [
            ['introduce.md', '介绍']
          ]
        },
        {
          title: '深入',   // 一级菜单名称
          collapsable: false, // false为默认展开菜单, 默认值true是折叠,
          sidebarDepth: 1,    //  设置侧边导航自动提取markdown文件标题的层级，默认1为h2层级
          children: [
            ['run.md', '快速上手'],
            ['dir.md', '目录'],
            ['src.md', 'src详解'],
            ['views.md', 'views详解'],
          ]
        },
        {
          title: '开发',
          collapsable: false,
          children: [
            ['create.md', '页面及操作'],
            ['permission.md', '权限控制']
          ]
        }
      ],

      //...可添加多个不同的侧边栏，不同页面会根据路径显示不同的侧边栏
    }
  }
}
