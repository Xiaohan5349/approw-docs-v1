const BRAND_NAME_ZH_CN = 'Approw'
const BRAND_NAME_ZH_CN_LOWER_CASE = 'approw'
const BRAND_NAME_EN_US = 'Approw'
const BRAND_NAME_EN_US_LOWER_CASE = 'approw'

const DATABASE_CONNECTION_MENU = {
  title: '自定义数据库',
  path: '/guides/database-connection/overview',
  children: [
    {
      title: '配置数据库连接和编写脚本',
      path: '/guides/database-connection/configuration/',
    },
    {
      title: `惰性迁移用户到 ${BRAND_NAME_ZH_CN}`,
      path: '/guides/database-connection/lazy-migration',
    },
    {
      title: '完全使用自定义数据库保存用户数据',
      path: '/guides/database-connection/custom-user-store.md',
    },
    {
      title: '最佳实践',
      path: '/guides/database-connection/best-practices.md',
    },
  ],
}

/**
 * 所有的左侧菜单在这配置，英文版不用单独配置（好吧，title 必须要写，可能还是要写两遍）
 */
const zhCnNavBar = {
  "/guides/": [
    {
      title: "快速开始",
      children: [
        {
          title: "认证你的第一个用户",
          path: "/guides/basics/authenticate-first-user/",
          children: [
            {
              title: `使用托管登录页完成认证`,
              path:
                "/guides/basics/authenticate-first-user/use-hosted-login-page",
            },
            {
              title: "使用内嵌登录组件完成认证",
              path:
                "/guides/basics/authenticate-first-user/use-embeded-login-component/",
            },
            {
              title: "使用 API & SDK 完成认证",
              path: "/guides/basics/authenticate-first-user/use-api-sdk/",
            },
            {
              title: "验证用户身份凭证（token）",
              path:
                "/guides/basics/authenticate-first-user/how-to-validate-user-token",
            },
            {
              title: `对用户进行权限管理`,
              path:
                "/guides/basics/authenticate-first-user/how-to-implement-access-control",
            },
            {
              title: "实现退出登录",
              path: "/guides/basics/authenticate-first-user/how-to-logout-user",
            },
            {
              title: "接下来你可能需要",
              path: "/guides/basics/authenticate-first-user/what-to-do-next",
            },
          ],
        },
        {
          title: "不同类型应用的接入方式",
          children: [
            {
              title: `在传统  Web App 中集成 ${BRAND_NAME_ZH_CN}`,
              path:
                "/guides/basics/platform-guide/integrate-with-regular-web-app",
            },
            {
              title: `在单页应用（SPA）中集成 ${BRAND_NAME_ZH_CN}`,
              path: "/guides/basics/platform-guide/integrate-with-spa",
            },
            {
              title: `在移动端（iOS、Andriod）中集成 ${BRAND_NAME_ZH_CN}`,
              path: "/guides/basics/platform-guide/integrate-with-mobile-app",
            },
            // {
            //   title: `在后端 API 服务中接入 ${BRAND_NAME_ZH_CN}`,
            //   path:
            //     "/guides/basics/platform-guide/integrate-with-backend-app",
            // },
          ],
        },
        {
          title: "控制台概览",
          path: "/guides/basics/console/",
        },
      ],
    },
    {
      title: "对用户进行认证",
      path: "/guides/authentication/",
      children: [
        {
          title: "使用账号密码认证",
          path: "/guides/authentication/basic/password/",
        },
        {
          title: "使用短信验证码认证",
          path: "/guides/authentication/basic/sms/",
        },
        {
          title: "使用社会化登录认证",
          path: "/guides/authentication/social/",
        },
        // {
        //   title: "在移动端使用社会化登录认证",
        //   path: "/guides/authentication/social/mobile/",
        // },
        {
          title: "使用扫码登录认证",
          children: [
            {
              title: "使用自建 App 扫码登录网站",
              path: "/guides/authentication/qrcode/use-self-build-app/",
              children: [
                {
                  title: "完整接口列表",
                  path:
                    "/guides/authentication/qrcode/use-self-build-app/full-api-list",
                },
                {
                  title: "自定义配置项",
                  path:
                    "/guides/authentication/qrcode/use-self-build-app/customize-settings",
                },
              ],
            },
            {
              title: "使用小程序扫码登录网站",
              path: "/guides/authentication/qrcode/use-wechat-miniprogram/",
            },
          ],
        },
        {
          title: "在小程序中进行认证",
          path: "/guides/authentication/wechat-mini-program/",
        },
        {
          title: "实现单点登录（SSO）",
          path: "/guides/authentication/sso/",
        },
        {
          title: "在移动端实现单点登录",
          path: "/guides/authentication/mobile-sso/",
        },
        {
          title: "多因素认证（MFA）",
          path: "/guides/authentication/mfa/",
          children: [
            {
              title: "基于时间戳算法的一次性密码（TOTP）的 MFA",
              path: "/guides/authentication/mfa/totp",
            },
            {
              title: "基于短信验证码的 MFA",
              path: "/guides/authentication/mfa/sms",
            },
            {
              title: "基于邮件验证码的 MFA",
              path: "/guides/authentication/mfa/email-code",
            },
            {
              title: "通过 SDK 接入 MFA",
              path: "/guides/authentication/mfa/mfa-sdk",
            },
          ],
        },
        {
          title: "对认证流程进行扩展",
          children: [
            {
              title: "添加用户自定义字段",
              path: "/guides/authentication/extensibility/user-defined-field",
            },
            {
              title: "IdToken 添加自定义字段",
              path: "/guides/authentication/extensibility/customize-id-token",
            },
            {
              title: "使用自定义数据库对用户进行认证",
              path: "/guides/authentication/extensibility/database-connection",
            },
            {
              title: "使用 Pipeline 对认证流程进行扩展",
              path: "/guides/authentication/extensibility/pipeline",
            },
            {
              title: "使用 Webhook 监听认证事件",
              path: "/guides/authentication/extensibility/webhook",
            },
          ],
        },
      ],
    },
    {
      title: "对用户进行权限管理",
      path: "/guides/access-control/",
      children: [
        {
          title: "选择合适的权限模型",
          path: "/guides/access-control/choose-the-right-access-control-model",
        },
        {
          title: `集成 RBAC 权限模型到你的应用系统`,
          path: "/guides/access-control/rbac",
        },
        {
          title: `集成 ABAC 权限模型到你的应用系统`,
          path: "/guides/access-control/abac",
        },
        {
          title: `使用权限分组管理权限资源`,
          path: "/guides/access-control/resource-group",
        },
        {
          title: `管理资源权限`,
          path: "/guides/access-control/resource-acl",
        },
      ],
    },
    {
      title: "授权",
      path: "/guides/authorization/",
      children: [
        {
          title: "用户许可的应用间授权",
          path: "/guides/authorization/user-consent-authz",
        },
        {
          title: "机器间（M2M）授权",
          path: "/guides/authorization/m2m-authz",
        },
      ],
    },
    {
      title: "管理用户账号",
      path: "/guides/user/",
      children: [
        {
          title: "用户字段释义",
          path: "/guides/user/user-profile",
        },
        {
          title: "管理员创建账号",
          path: "/guides/user/create-user/",
        },
        // {
        //   title: "账号生命周期管理",
        //   path: "/guides/user/life-cycle-management",
        // },
        {
          title: "管理用户账号",
          path: "/guides/user/manage-profile",
        },
        // {
        //   title: '给用户添加角色、分配权限',
        //   path: '/guides/user/role-and-permission'
        // },
        {
          title: "绑定账号",
          path: "/guides/user/bind-social-account",
        },
        {
          title: "管理用户的自定义数据",
          path: "/guides/user/user-defined-field/",
        },
        {
          title: "查看用户的登录历史记录",
          path: "/guides/user/login-history",
        },
        {
          title: "查看用户的地理位置",
          path: "/guides/user/geo",
        },
        {
          title: "增强账号的安全性",
          path: "/guides/user/security",
        },
        {
          title: "管理用户的登录态",
          path: "/guides/user/login-state",
        },
        {
          title: "控制用户能访问哪些应用",
          path: "/guides/user/application-access",
        },
      ],
    },
    {
      title: "管理用户目录",
      path: "/guides/users/",
      children: [
        {
          title: "用户目录配置项",
          path: "/guides/users/settings",
        },
        {
          title: "添加自定义用户字段",
          path: "/guides/users/user-defined-field/",
        },
        {
          title: "搜索用户",
          path: "/guides/users/search",
        },
        {
          title: "使用 LDAP 用户目录",
          path: "/guides/users/ldap-user-directory",
        },
      ],
    },
    {
      title: "管理应用",
      path: "/guides/app/",
      children: [
        {
          title: "创建应用",
          path: "/guides/app/create-app",
        },
        {
          title: "配置登录注册方式",
          path: "/guides/app/config-login-methods",
        },
        {
          title: "添加注册协议",
          path: "/guides/app/agreements",
        },
        {
          title: "自定义登录框样式",
          path: "/guides/app/custom-styles",
        },
        {
          title: "成为联邦认证身份源",
          path: "/guides/app/identity-provider",
        },
        {
          title: "开启多因素认证",
          path: "/guides/app/mfa",
        },
        {
          title: "实现应用间单点登录",
          path: "/guides/app/sso",
        },
        {
          title: "管理用户登录状态",
          path: "/guides/app/session-management",
        },
        // {
        //   title: '开启子账号登录',
        //   path: '/guides/app/sub-account'
        // },
        // {
        //   title: '授权管理',
        //   path: '/guides/app/authorization'
        // }
      ],
    },
    {
      title: "成为联邦认证身份源",
      path: "/guides/federation/",
      children: [
        {
          title: "成为 OpenID Connect 身份源",
          path: "/guides/federation/oidc.md",
        },
        {
          title: "成为 OAuth2.0 身份源",
          path: "/guides/federation/oauth.md",
        },
        {
          title: "成为 SAML2 身份源",
          path: "/guides/federation/saml.md",
        },
        {
          title: "成为 CAS 身份源",
          path: "/guides/federation/cas.md",
        },
      ],
    },
    {
      title: "连接外部身份源（IdP）",
      path: "/guides/connections/",
      children: [
        {
          title: "社会化登录",
          path: "/guides/connections/social",
        },
        {
          title: "企业身份源",
          path: "/guides/connections/enterprise",
        },
        DATABASE_CONNECTION_MENU,
      ],
    },
    {
      title: "打通微信生态",
      path: "/guides/wechat-ecosystem/",
      children: [
        {
          title: "PC 网站使用微信扫码登录",
          path: "/guides/wechat-ecosystem/wechat-pc/",
        },
        {
          title: "PC 网站使用小程序扫码登录",
          path: "/guides/wechat-ecosystem/wechat-miniprogram-qrcode/",
        },
        {
          title: "微信内网页使用微信授权登录",
          path: "/guides/wechat-ecosystem/wechat-webpage-authorization",
        },
        {
          title: "小程序内使用微信登录",
          path: "/guides/wechat-ecosystem/wechat-miniprogram",
        },
        {
          title: "移动 APP 使用微信登录",
          path: "/guides/wechat-ecosystem/wechat-mobile",
        },
        {
          title: "移动 APP 使用小程序登录",
          path: "/guides/wechat-ecosystem/wechat-miniprogram-applaunch",
        },
      ],
    },
    {
      title: `迁移用户到 ${BRAND_NAME_ZH_CN}`,
      path: "/guides/migrations/",
      children: [
        {
          title: "使用 SDK 导入用户",
          path: "/guides/migrations/use-api",
        },
        {
          title: "配置自定义密码函数",
          path: "/guides/migrations/custom-password-script/",
        },
        {
          title: "从企业微信、钉钉等第三方身份源导入用户",
          path: "/guides/migrations/import-from-third-party-identity-provider/",
        },
      ],
    },
    {
      title: "管理组织机构",
      path: "/guides/org/",
      children: [
        {
          title: "创建或导入组织机构",
          path: "/guides/org/create-or-import-org/",
        },
        {
          title: "管理组织机构",
          path: "/guides/org/manage-org/",
        },
        {
          title: "管理成员生命周期",
          path: "/guides/org/staff-life-cycle-management/",
        },
        {
          title: "使用 LDAP 协议对外开放组织机构数据",
          path: "/guides/org/ldap-user-directory/",
        },
      ],
    },
    {
      title: "扩展能力",
      path: "/guides/extensibility/",
      children: [
        {
          title: "使用 Webhook 监听用户事件",
          path: "/guides/webhook/",
        },
        {
          title: "自定义认证流程（Pipeline）",
          path: "/guides/pipeline/",
          children: [
            {
              title: "创建你的第一个 Pipeline 函数",
              path: "/guides/pipeline/write-your-first-pipeline-function",
            },
            {
              title: "Pipeline API Reference",
              path: "/guides/pipeline/pipeline-function-api-doc",
            },
            {
              title: "Pipeline 的应用场景",
              path: "/guides/pipeline/usage",
            },
            {
              title: "Pipeline User 对象",
              path: "/guides/pipeline/user-object",
            },
            {
              title: "Pipeline Context 对象",
              path: "/guides/pipeline/context-object",
            },
            {
              title: "在 Pipeline 中使用环境变量",
              path: "/guides/pipeline/env",
            },
            {
              title: "可用的 Node Modules",
              path: "/guides/pipeline/available-node-modules",
            },
            {
              title: "如何调试",
              path: "/guides/pipeline/how-to-debug",
            },
            {
              title: "常见问题",
              path: "/guides/pipeline/faq",
            },
            {
              title: "私有化部署",
              path: "/guides/pipeline/private-cloud",
            },
          ],
        },
        DATABASE_CONNECTION_MENU,
        {
          title: "配置自定义密码函数",
          path: "/guides/migrations/custom-password-script/",
        },
      ],
    },

    {
      title: "审计日志",
      path: "/guides/audit/",
      children: [
        {
          title: "用户行为的审计",
          path: "/guides/audit/user-action",
        },
        {
          title: "管理员行为的审计",
          path: "/guides/audit/administrator-action",
        },
      ],
    },
    {
      title: "配置安全信息",
      children: [
        {
          title: "配置 Web 安全域",
          path: "/guides/security/config-domain",
        },
        {
          title: "配置密码强度",
          path: "/guides/security/config-password",
        },
        {
          title: "配置注册频率限制",
          path: "/guides/security/config-register-limit",
        },
        {
          title: "配置登录失败次数限制",
          path: "/guides/security/config-login-fail-limit",
        },
      ],
    },
    {
      title: "配置用户池信息",
      children: [
        {
          title: "修改用户池基础信息",
          path: "/guides/userpool-config/basic-config",
        },
        {
          title: "配置邮件服务和模版",
          path: "/guides/userpool-config/email/",
        },
        {
          title: "配置短信服务和模版",
          path: "/guides/userpool-config/sms/",
        },
        {
          title: "添加用户池协作管理员",
          path: "/guides/userpool-config/collaboration-adminstrator",
        },
        {
          title: "开发者配置",
          path: "/guides/userpool-config/developer-config",
        },
      ],
    },
    {
      title: "部署方案",
      path: "/guides/deployment/",
      children: [
        {
          title: "基础部署模式",
          path: "/guides/deployment/bare-metal",
        },
        {
          title: "Docker 部署模式",
          path: "/guides/deployment/docker-compose",
        },
        {
          title: "Kubernetes 部署模式",
          path: "/guides/deployment/kubernetes",
        },
        {
          title: "自定义域名配置方案",
          path: "/guides/deployment/custom-domain",
        },
      ],
    },
    {
      title: "常见问题 FAQs",
      children: [
        {
          title: "如何获取用户池 ID",
          path: "/guides/faqs/get-userpool-id-and-secret.md",
        },
        {
          title: "如何获取应用 ID",
          path: "/guides/faqs/get-app-id-and-secret.md",
        },
        {
          title: "如何部署中转代理服务器",
          path: "/guides/faqs/how-to-build-a-proxy",
        },
        {
          title: "如何验证用户身份凭证（token）",
          path: "/guides/faqs/how-to-validate-user-token",
        },
        {
          title: `在本地联表 ${BRAND_NAME_ZH_CN} 用户与你的业务数据`,
          path: "/guides/faqs/how-to-join-authing-user-with-your-business-data",
        },
        {
          title: `禁用第三方 Cookie 对 Authing 的影响`,
          path: "/guides/faqs/block-third-party-cookie-impact",
        },
      ],
    },
  ],
  "/reference/": [
    {
      title: "登录组件",
      path: "/reference/ui-components/",
      children: [
        {
          title: "React",
          path: "/reference/ui-components/react",
        },
        {
          title: "Vue",
          path: "/reference/ui-components/vue",
        },
        {
          title: "Angular",
          path: "/reference/ui-components/angular",
        },
        {
          title: "原生 JavaScript",
          path: "/reference/ui-components/native-javascript",
        },
        {
          title: "完整参数列表",
          path: "/reference/ui-components/parameters",
        },
      ],
    },
    {
      title: "单点登录（SSO）",
      path: "/reference/sdk-for-sso",
    },
    {
      title: "JavaScript/Node.js",
      path: "/reference/sdk-for-node/",
      children: [
        {
          title: "用户认证模块",
          path: "/reference/sdk-for-node/authentication",
          children: [
            "/reference/sdk-for-node/authentication/AuthenticationClient",
            "/reference/sdk-for-node/authentication/QrCodeAuthenticationClient",
            "/reference/sdk-for-node/authentication/MfaAuthenticationClient",
            "/reference/sdk-for-node/authentication/SocialAuthenticationClient",
            "/reference/sdk-for-node/authentication/EnterpriseAuthenticationClient",
          ],
        },
        {
          title: "管理模块",
          path: "/reference/sdk-for-node/management",
          children: [
            "/reference/sdk-for-node/management/UsersManagementClient",
            "/reference/sdk-for-node/management/RolesManagementClient",
            "/reference/sdk-for-node/management/PoliciesManagementClient",
            "/reference/sdk-for-node/management/AclManagementClient",
            "/reference/sdk-for-node/management/GroupsManagementClient",
            "/reference/sdk-for-node/management/OrgManagementClient",
            "/reference/sdk-for-node/management/UdfManagementClient",
            "/reference/sdk-for-node/management/WhitelistManagementClient",
            "/reference/sdk-for-node/management/UserpoolManagementClient",
          ],
        },
      ],
    },
    {
      title: "Java / Kotlin",
      path: "/reference/sdk-for-java/",
      children: [
        {
          title: "用户认证模块",
          path: "/reference/sdk-for-java/authentication/",
        },
        {
          title: "管理模块",
          path: "/reference/sdk-for-java/management",
          children: [
            "/reference/sdk-for-java/management/UsersManagementClient",
            "/reference/sdk-for-java/management/RolesManagementClient",
            "/reference/sdk-for-java/management/AclManagementClient",
            "/reference/sdk-for-java/management/PoliciesManagementClient",
            "/reference/sdk-for-java/management/UdfManagementClient",
            "/reference/sdk-for-java/management/GroupsManagementClient",
            "/reference/sdk-for-java/management/OrgManagementClient",
            "/reference/sdk-for-java/management/UserpoolManagementClient",
            "/reference/sdk-for-java/management/WhitelistManagementClient",
            "/reference/sdk-for-java/management/ApplicationManagementClient",
          ],
        },
      ],
    },
    {
      title: "Python",
      path: "/reference/sdk-for-python/",
      children: [
        {
          title: "用户认证模块",
          path: "/reference/sdk-for-python/authentication/",
        },
        {
          title: "管理模块",
          path: "/reference/sdk-for-python/management",
          children: [
            "/reference/sdk-for-python/management/UsersManagementClient",
            "/reference/sdk-for-python/management/RolesManagementClient",
            "/reference/sdk-for-python/management/PoliciesManagementClient",
            "/reference/sdk-for-python/management/AclManagementClient",
            "/reference/sdk-for-python/management/UdfManagementClient",
          ],
        },
      ],
    },
    {
      title: "C#",
      path: "/reference/sdk-for-csharp/",
      children: [
        {
          title: "用户认证模块",
          path: "/reference/sdk-for-csharp/authentication/",
        },
        {
          title: "管理模块",
          path: "/reference/sdk-for-csharp/management",
          children: [
            "/reference/sdk-for-csharp/management/UsersManagementClient",
            "/reference/sdk-for-csharp/management/RolesManagementClient",
            "/reference/sdk-for-csharp/management/AclManagementClient",
            "/reference/sdk-for-csharp/management/PoliciesManagementClient",
            "/reference/sdk-for-csharp/management/GroupsManagementClient",
            "/reference/sdk-for-csharp/management/UserpoolManagementClient",
            "/reference/sdk-for-csharp/management/WhitelistManagementClient",
            "/reference/sdk-for-csharp/management/UdfManagementClient",
          ],
        },
      ],
    },
    {
      title: "PHP",
      path: "/reference/sdk-for-php/",
      children: [
        {
          title: "用户认证模块",
          path: "/reference/sdk-for-php/authentication/",
        },
        {
          title: "管理模块",
          path: "/reference/sdk-for-php/management/",
          children: [
            "/reference/sdk-for-php/management/UsersManagementClient",
            "/reference/sdk-for-php/management/RolesManagementClient",
            "/reference/sdk-for-php/management/PoliciesManagementClient",
            "/reference/sdk-for-php/management/AclManagementClient",
            "/reference/sdk-for-php/management/GroupsManagementClient",
            "/reference/sdk-for-php/management/UdfManagementClient",
            "/reference/sdk-for-php/management/WhitelistManagementClient",
            "/reference/sdk-for-php/management/UserpoolManagementClient"
          ],
        },
      ],
    },
    {
      title: "Go",
      path: "/reference/sdk-for-go",
    },
    {
      title: "Ruby",
      path: "/reference/sdk-for-ruby",
    },
    {
      title: "Swift",
      path: "/reference/sdk-for-swift",
    },
    {
      title: "Android",
      path: "/reference/sdk-for-android",
    },
    {
      title: "React Native",
      path: "/reference/sdk-for-react-native",
    },
    {
      title: "微信小程序",
      path: "/reference/sdk-for-wxapp",
    },
    {
      title: "微信网页授权",
      path: "/reference/sdk-for-wxmp",
    },
    {
      title: "框架集成",
      path: "/reference/frameworks",
    },
    {
      title: "错误代码",
      path: "/reference/error-code",
    },
  ],
  "/concepts/": [
    {
      title: `什么是 ${BRAND_NAME_ZH_CN}`,
      path: "/concepts/",
    },
    {
      title: "什么是用户池",
      path: "/concepts/user-pool",
    },
    {
      title: "什么是应用",
      path: "/concepts/application",
    },
    {
      title: "什么是认证",
      path: "/concepts/authentication",
    },
    {
      title: "什么是联邦认证",
      path: "/concepts/federation",
    },
    {
      title: "什么是授权",
      path: "/concepts/authorization",
    },
    {
      title: "认证 vs 授权",
      path: "/concepts/authentication-vs-authorization",
    },
    {
      title: "什么是 JWT Token",
      path: "/concepts/jwt-token",
    },
    {
      title: "什么是 ID Token",
      path: "/concepts/id-token",
    },
    {
      title: "什么是 Access Token",
      path: "/concepts/access-token",
    },
    {
      title: "什么是 Refresh Token",
      path: "/concepts/refresh-token",
    },
    {
      title: "Access Token vs Id Token",
      path: "/concepts/access-token-vs-id-token",
    },
    {
      title: "OIDC 常见问题",
      path: "/concepts/oidc-common-questions",
    },
    {
      title: "理解 SAML2 协议",
      children: [
        {
          title: "SAML2 综述",
          path: "/concepts/saml/saml-overview",
        },
        {
          title: "SAML2 流程",
          path: "/concepts/saml/saml-flow",
        },
        // {
        //   title: 'SAML2 常见问题',
        //   path: '/concepts/saml/faq'
        // },
      ],
    },
    {
      title: "理解 OIDC 与 OAuth2.0 协议",
      children: [
        {
          title: "OIDC 与 OAuth2.0 综述",
          path: "/concepts/oidc/oidc-overview",
        },
        {
          title: "选择 OIDC 授权模式",
          path: "/concepts/oidc/choose-flow",
        },
      ],
    },
    {
      title: "什么是多因素认证",
      path: "/concepts/mfa",
    },
    {
      title: "账号生命周期管理",
      path: "/concepts/account-life-cycle-management",
    },
    {
      title: "托管登录页 vs 可嵌入登录组件",
      path: "/concepts/embeded-vs-hosted",
    },
    {
      title: "CIAM 与 EIAM",
      path: "/concepts/ciam-and-eiam",
    },
    {
      title: "什么是 LDAP",
      path: "/concepts/ldap",
    },
    {
      title: "扫码登录的原理",
      path: "/concepts/how-qrcode-works",
    },
  ],
  "/integration/": [],
};

const addPrefixToLink = (navbar, prefix) => {
  if (!navbar) {
    return
  }
  return navbar.map((item) => ({
    ...item,
    path: item.path && `${prefix}${item.path}`,
    children:
      item.children &&
      item.children.map((link) => {
        if (typeof link === 'string') {
          return `${prefix}${link}`
        }
        return {
          ...link,
          path: `${prefix}${link.path}`,
          children: addPrefixToLink(link.children, prefix),
        }
      }),
  }))
}

const getEnUsNavBar = () => {
  const enUsNavBar = {}

  for (let attr in zhCnNavBar) {
    enUsNavBar[`/en${attr}`] = addPrefixToLink(zhCnNavBar[attr], '/en')
  }

  console.log(enUsNavBar)

  return enUsNavBar
}

module.exports = {
  zhCnNavBar,
  enUsNavBar: getEnUsNavBar(),
  BRAND_NAME_ZH_CN,
  BRAND_NAME_EN_US,
}
