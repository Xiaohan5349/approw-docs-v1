---
home: true
noSidebar: true
mainTitle: "文档中心"
subTitle: "这里，开启激动人心的第一步！学习如何使用 Authing 及 Authing 提供的 API。"
searchPlaceholder: 请输入关键词搜索产品文档
hotSearchText: 热门搜索
hotSearch:
  - text: 如何对用户进行认证
    link: /guides/authentication/
  - text: 如何对用户进行授权
    link: /guides/authorization/
  - text: 快速实现单点登录
    link: /guides/authentication/sso/
  - text: 添加社会化登录
    link: /guides/authentication/social/
  - text: 如何验证 token
    link: /guides/faqs/how-to-validate-user-token.html
sdkConfig:
  ios:
    name: IOS
    link: /reference/sdk-for-swift.html
    img: ios.png
    img2x: ios@2x.png
  android:
    name: Android
    link: /reference/sdk-for-android.html
    img: android.png
    img2x: android@2x.png
  javascript:
    name: JavaScript
    link: /reference/sdk-for-node/
    img: javascript.png
    img2x: javascript@2x.png
  cSharp:
    name: C Sharp
    link: /reference/sdk-for-csharp/
    img: c-sharp.png
    img2x: c-sharp@2x.png
  react:
    name: React
    link: /reference/ui-components/react
    img: react.png
    img2x: react@2x.png
  angular:
    name: Angular
    link: /reference/ui-components/angular
    img: angular.png
    img2x: angular@2x.png
  vue:
    name: Vue
    link: /reference/ui-components/vue
    img: vue.png
    img2x: vue@2x.png
  python:
    name: Python
    link: /reference/sdk-for-python/
    img: python.png
    img2x: python@2x.png
  nodeJs:
    name: Node.js
    link: /reference/sdk-for-node/
    img: nodejs.png
    img2x: nodejs@2x.png
  ruby:
    name: Ruby
    link: /reference/sdk-for-ruby.html
    img: ruby.png
    img2x: ruby@2x.png
  java:
    name: Java
    link: /reference/sdk-for-java/
    img: java.png
    img2x: java@2x.png
  golang:
    name: Golang
    link: /reference/sdk-for-go.html
    img: golang.png
    img2x: golang@2x.png
applicationSdks:
  - title: 移动应用
    description: 在移动应用中快速接入认证服务
    color: "#396AFF"
    sdks:
      - ios
      - android
      - javascript
      - cSharp
  - title: 单页应用
    description: 在浏览器运行的 Web 应用中快速接入认证服务并实现单点登录
    color: "#75A3FF"
    sdks:
      - javascript
      - react
      - angular
      - vue
  - title: 标准 Web 应用
    description: 在服务器上运行的传统 Web 应用，实现统一认证和授权
    color: "#28B1B0"
    sdks:
      - javascript
      - python
      - cSharp
      - nodeJs
      - ruby
      - java
      - golang
  - title: API 服务
    description: 对 API 服务进行统一认证和授权
    color: "#F8BC00"
    sdks:
      - javascript
      - python
      - cSharp
      - nodeJs
      - ruby
      - java
      - golang
sections:
  - title: 概念
    description: 了解 Authing 体系结构基础
    links:
      - text: 什么是用户池
        link: /concepts/user-pool
      - text: 什么是认证
        link: /concepts/authentication.html
      - text: 什么是授权
        link: /concepts/authorization.html
    knowMore:
      link: /concepts/
  - title: 快速开始
    description: 了解如何按照我们的分步说明构建解决方案。
    links:
      - text: 使用托管登录页面
        link: /guides/basics/authenticate-first-user/use-hosted-login-page
      - text: 使用登录表单组件
        link: /guides/basics/authenticate-first-user/use-embeded-login-component/
      - text: 使用 API & SDK
        link: /guides/basics/authenticate-first-user/use-api-sdk/
    knowMore:
      link: /guides/basics/authenticate-first-user/
  - title: 应用集成
    description: 将现有或本地应用集成到 Authing。
    links:
      - text: 通过 Authing 登录阿里云
        link: /integration/ali-cloud/
      - text: 通过 Authing 登录腾讯云
        link: /integration/tencent-cloud/
      - text: 通过 Authing 登录华为云
        link: /integration/huawei-cloud/
    knowMore:
      link: /integration/
explores:
  - title: 对用户进行认证
    links:
      - icon: authing-login-password
        link: /guides/authentication/basic/password/
        text: 使用账号密码密码认证
      - icon: authing-xingzhuangjiehe1
        link: /guides/authentication/basic/sms/
        text: 使用短信验证码认证
      - icon: authing-wechat-webpage-authorization
        link: /guides/authentication/social/
        text: 使用社会化登录认证
    knowMore:
      link: /guides/authentication/
  - title: 对用户进行权限管理
    links:
      - icon: authing-certification
        link: /guides/access-control/choose-the-right-access-control-model.html
        text: 选择合适的权限模型
      - icon: authing-genggaimima
        link: /guides/access-control/rbac.html
        text: 集成 RBAC 权限模型到你的应用系统
      - icon: authing-Token-2
        link: /guides/access-control/abac.html
        text: 集成 ABAC 权限模型到你的应用系统
    knowMore:
      link: /guides/access-control/
  - title: 管理用户目录
    links:
      - icon: authing-sousuo
        link: /guides/users/search.html
        text: 搜索用户
      - icon: authing-zidingyiziduan-3
        link: /guides/users/user-defined-field/
        text: 添加自定义用户字段
      - icon: authing-bianzu3
        link: /guides/users/ldap-user-directory.html
        text: 使用 Authing 的 LDAP 用户目录
    knowMore:
      link: /guides/users/
  - title: 管理用户账号
    links:
      - icon: authing-login
        link: /guides/user/create-user/
        text: 创建用户账号
      - icon: authing-xiangqing
        link: /guides/user/user-profile
        text: 查看用户详细信息
      - icon: authing-port-kz
        link: /guides/users/user-defined-field/
        text: 扩展用户属性
    knowMore:
      link: /guides/user/
  - title: 连接外部身份源（IdP）
    links:
      - icon: authing-wechat-webpage-authorization
        link: /guides/connections/social.html
        text: 社会化登录配置文档
      - icon: authing-oidc_logo
        link: /guides/connections/enterprise.html
        text: 企业身份源配置文档
      - icon: authing-database
        link: /guides/database-connection/overview.html
        text: 使用自定义数据库
    knowMore:
      link: /guides/connections/
  - title: FAQ
    links:
      - icon: authing-ID1
        link: /guides/faqs/get-userpool-id-and-secret.html
        text: 如何获取用户池 ID
      - icon: authing-anquanyuguanlibeifen
        link: /guides/security/config-domain.html
        text: 如何配置 Web 安全域
      - icon: authing-token-3
        link: /guides/faqs/how-to-validate-user-token.html
        text: 验证用户身份凭证（token）
    knowMore:
      link: /guides/faqs/get-userpool-id-and-secret.html
---
