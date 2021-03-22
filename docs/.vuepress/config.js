const sidebar = require('./sidebar')
const plugins = require('./plugins')
const env = require('./env')
const path = require('path')

module.exports = {
  base: env.basePath,
  title: '文档',
  description: 'Authing 文档',
  plugins,
  feedbackUrl: `https://open.feishu.cn/open-apis/bot/v2/hook/f5e7517d-07cb-4519-ab6c-577ad8653ca2`,
  markdown: {
    anchor: {
      permalinkSymbol: '¶',
    },
    toc: {
      includeLevel: [2, 3, 4, 5],
    },
    extractHeaders: ['h2', 'h3', 'h4', 'h5'],
    extendMarkdown: (md) => {
      // 使用更多的 markdown-it 插件!
      md.use(require('markdown-it-include'), 'docs')
    },
  },
  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    '/': {
      lang: 'zh-CN', // this will be set as the lang attribute on <html>
      title: 'Authing 文档',
      description: 'Authing 文档',
      navbarTitle: '文档',
      relatedDocText: '相关文档',
      brandName: sidebar.BRAND_NAME_ZH_CN,
      brandNameLowerCase: sidebar.BRAND_NAME_ZH_CN_LOWER_CASE,
    },
    '/en/': {
      lang: 'en-US',
      title: 'Authing Docs',
      description: 'Authing Docs',
      navbarTitle: 'Documents',
      relatedDocText: 'Related documents',
      brandName: sidebar.BRAND_NAME_EN_US,
      brandNameLowerCase: sidebar.BRAND_NAME_EN_US_LOWER_CASE,
    },
  },
  head: [
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: 'https://authing.cn/favicon.ico',
      },
    ],
  ],
  themeConfig: {
    logo: 'https://files.authing.co/authing-console/authing-logo-new.svg',
    officeSiteDomain: 'authing.cn',
    officeSiteUrl: 'https://authing.cn',
    consoleDomain: 'https://console.authing.cn',
    sampleAppDomain: 'sample-sso.authing.cn',
    apiDomain: 'https://core.authing.cn',
    oldDocUrl: 'https://docs.authing.cn',
    smoothScroll: true,
    activeHeaderLinks: false,
    lastUpdated: 'Last Updated',
    sidebarDepth: 0,
    locales: {
      '/': {
        selectText: '中文 / EN',
        label: '简体中文',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '更新时间',
        prevDoc: '上一篇',
        nextDoc: '下一篇',
        submitImmediate: '立即提交',
        nav: [
          { text: '概念', link: '/concepts/' },
          { text: '使用指南', link: '/guides/' },
          { text: '开发集成', link: '/reference/' },
          {
            text: '应用集成',
            link: '/integration/',
          },
        ],
        sidebar: sidebar.zhCnNavBar,
        feedback: {
          title: '本文是否有解决您的问题？',
          help: `如果遇到其他问题，你可以在 <a href="https://gitter.im/authing-chat/community" target="_blank">authing-chat/community</a> 联系我们。`,
          successTip: `提交成功！非常感谢您的反馈，我们会继续努力做到更好！`,
          uselessConfig: {
            title: '您是否遇到以下问题',
            reasons: [
              {
                value: '内容错误',
                label: '内容错误',
              },
              {
                value: '缺少代码/图片示例',
                label: '缺少代码/图片示例',
              },
              {
                value: '更新不及时',
                label: '更新不及时',
              },
              {
                value: '太简单/步骤待完善',
                label: '太简单/步骤待完善',
              },
              {
                value: '链接错误',
                label: '链接错误',
              },
              {
                value: '其他',
                label: '其他',
              },
            ],
            customReasonPlaceholder:
              '请详细描述在文档使用中遇到的问题或改进建议（选填）',
          },
        },
      },
      '/en/': {
        // text for the language dropdown
        selectText: '中文 / EN',
        // label for this locale in the language dropdown
        label: 'English',
        // Aria Label for locale in the dropdown
        ariaLabel: '中文 / EN',
        // text for the edit-on-github link
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Update Time',
        prevDoc: 'Prev',
        nextDoc: 'Next',
        submitImmediate: 'Submit',
        nav: [
          { text: '概念', link: '/en/concepts/' },
          { text: '使用指南', link: '/en/guides/' },
          { text: '开发集成', link: '/en/reference/' },
          {
            text: '应用集成',
            link: '/en/integration/',
          },
        ],
        sidebar: sidebar.enUsNavBar,
        feedback: {
          title: 'Does this article solve your problem?',
          help: `If you encounter other problems, you can contact us by consulting <a>online customer service</a>`,
        },
      },
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@imagesZhCn': path.resolve(__dirname, '../images'),
        '@imagesEnUs': path.resolve(__dirname, '../en-US/images'),
      },
    },
  },
  extraWatchFiles: [
    '.vuepress/enhanceApp.js',
    '.vuepress/env.js',
    '.vuepress/sidebar.js',
    'README.md',
  ],
}
