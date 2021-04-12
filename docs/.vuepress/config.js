const sidebar = require('./sidebar')
const plugins = require('./plugins')
const env = require('./env')
const path = require('path')

module.exports = {
  base: env.basePath,
  title: 'Approw Docs',
  description: 'Approw Docs',
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
      title: 'Approw 文档',
      description: 'Approw 文档',
      navbarTitle: '文档',
      relatedDocText: '相关文档',
      brandName: sidebar.BRAND_NAME_ZH_CN,
      brandNameLowerCase: sidebar.BRAND_NAME_ZH_CN_LOWER_CASE,
    },
    '/en/': {
      lang: 'en-US',
      title: 'Approw Docs',
      description: 'Approw Docs',
      navbarTitle: 'Document',
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
    logo: 'https://www.approw.com/asset/approw_logo.svg',
    officeSiteDomain: 'approw.cn',
    officeSiteUrl: 'https://approw.cn',
    consoleDomain: 'https://console.approw.cn',
    sampleAppDomain: 'sample-sso.authing.cn',
    apiDomain: 'https://core.approw.cn',
    oldDocUrl: 'https://docs.approw.cn',
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
        knowMore: '了解更多',
        company: '公司',
        sdkAccess: 'SDK 接入',
        searchInDoc: '在文档中搜索',
        oldVersion: '旧版',
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
        footer: {
          sections: [
            {
              title: '用户身份管理',
              links: [
                {
                  text: '集成第三方登录',
                  link: '/guides/connections/',
                },
                {
                  text: '手机号闪验',
                  link: 'https://authing.cn/verify',
                },
                {
                  text: '通用登录表单组件',
                  link: '/reference/ui-components/',
                },
                {
                  text: '自定义认证流程',
                  link: '/guides/pipeline/',
                },
              ],
            },
            {
              title: '企业内部管理',
              links: [
                {
                  text: '单点登录',
                  link: '/guides/authentication/sso/',
                },
                {
                  text: '多因素认证',
                  link: '/guides/authentication/mfa/',
                },
                {
                  text: '权限管理',
                  link: '/guides/access-control/',
                },
              ],
            },
            {
              title: '开发者',
              links: [
                {
                  text: '开发文档',
                  link: '/reference/',
                },
                {
                  text: '框架集成',
                  link: '/reference/frameworks',
                },
                {
                  text: '博客',
                  link: 'https://authing.cn/blog',
                },
                {
                  text: 'Github',
                  link: 'https://github.com/authing',
                },
                {
                  text: '社区用户中心',
                  link: 'https://gitter.im/authing-chat/community',
                },
              ],
            },
          ],
          socials: [
            {
              icon: 'authing-github',
              link: 'https://github.com/Authing',
              title: 'Github',
            },
            {
              icon: 'authing-gitter',
              link: 'https://gitter.im/authing-chat/community',
              title: 'Gitter',
            },
            {
              icon: 'authing-zhihu',
              link: 'https://www.zhihu.com/org/authing',
              title: '知乎',
            },
          ],
          serviceStatus: '服务状态',
          contactPhone: '176-0250-2507',
          contactEmail: 'xuziqiang@authing.cn',
          contactAddress: '北京市海淀区中关村东路威盛大厦 6 层',
          icp: '京ICP备19051205号',
          companyName: '© 北京蒸汽记忆科技有限公司',
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
        knowMore: 'Know More',
        company: 'Company',
        sdkAccess: 'SDK Access',
        searchInDoc: 'Search in Docs',
        oldVersion: 'Old Version',
        nav: [
          { text: 'Concept', link: '/en/concepts/' },
          { text: 'Guides', link: '/en/guides/' },
          { text: 'Development Integration', link: '/en/reference/' },
          {
            text: 'Application integration',
            link: '/en/integration/',
          },
        ],
        sidebar: sidebar.enUsNavBar,
        feedback: {
          title: 'Does this article solve your problem?',
          help: `If you encounter other problems, you can contact us at <a href="https://gitter.im/authing-chat/community" target="_blank">authing-chat/community</a>.`,
          successTip: `Submitted successfully! Thank you very much for your feedback, we will continue to work hard to do better!`,
          uselessConfig: {
            title: 'Does this article solve your problem?',
            reasons: [
              {
                value: '内容错误',
                label: 'Content error',
              },
              {
                value: '缺少代码/图片示例',
                label: 'Missing code/image example',
              },
              {
                value: '更新不及时',
                label: 'Update is not timely',
              },
              {
                value: '太简单/步骤待完善',
                label: 'Too simple/steps to be perfected',
              },
              {
                value: '链接错误',
                label: 'Link error',
              },
              {
                value: '其他',
                label: 'Other',
              },
            ],
            customReasonPlaceholder:
              'Please describe in detail the problems encountered in the use of the document or suggestions for improvement (optional)',
          },
        },
        footer: {
          sections: [
            {
              title: 'User identity management',
              links: [
                {
                  text: 'Integrated third-party login',
                  link: '/guides/connections/',
                },
                {
                  text: 'Mobile phone number flash check',
                  link: 'https://authing.cn/verify',
                },
                {
                  text: 'Universal login form component',
                  link: '/reference/ui-components/',
                },
                {
                  text: 'Custom authentication process',
                  link: '/guides/pipeline/',
                },
              ],
            },
            {
              title: 'Enterprise internal management',
              links: [
                {
                  text: 'Single Sign On',
                  link: '/guides/authentication/sso/',
                },
                {
                  text: 'Multi-factor Authentication',
                  link: '/guides/authentication/mfa/',
                },
                {
                  text: 'Authority Management',
                  link: '/guides/access-control/',
                },
              ],
            },
            {
              title: 'Developers',
              links: [
                {
                  text: 'Development Document',
                  link: '/reference/',
                },
                {
                  text: 'Framework Integration',
                  link: '/reference/frameworks',
                },
                {
                  text: 'Blog',
                  link: 'https://authing.cn/blog',
                },
                {
                  text: 'Github',
                  link: 'https://github.com/authing',
                },
                {
                  text: 'Community User Center',
                  link: 'https://gitter.im/authing-chat/community',
                },
              ],
            },
          ],
          socials: [
            {
              icon: 'authing-github',
              link: 'https://github.com/Authing',
              title: 'Github',
            },
            {
              icon: 'authing-gitter',
              link: 'https://gitter.im/authing-chat/community',
              title: 'Gitter',
            },
            {
              icon: 'authing-zhihu',
              link: 'https://www.zhihu.com/org/authing',
              title: 'ZhiHu',
            },
          ],
          serviceStatus: 'Service Status',
          contactPhone: '176-0250-2507',
          contactEmail: 'xuziqiang@authing.cn',
          contactAddress:
            '6th Floor, Weisheng Building, Zhongguancun East Road, Haidian District, Beijing',
          icp: '京ICP备19051205号',
          companyName: '© 北京蒸汽记忆科技有限公司',
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
