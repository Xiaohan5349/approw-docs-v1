---
home: true
noSidebar: true
mainTitle: "Document Center"
subTitle: "Here, start an exciting first step! Learn how to use Approw and the API provided by Approw."
searchPlaceholder: Please enter keywords to search product documents
hotSearchText: Hot Searches
hotSearch:
    - text: How to authenticate users
      link: /en/guides/authentication/
    - text: How to authorize users
      link: /en/guides/authorization/
    - text: Quickly implement single sign-on
      link: /en/guides/authentication/sso/
    - text: Use social login authentication
      link: /en/guides/authentication/social/
    - text: How to validate user token
      link: /en/guides/faqs/how-to-validate-user-token.html
sdkConfig:
    ios:
        name: IOS
        link: /en/reference/sdk-for-swift.html
        img: ios.png
        img2x: ios@2x.png
    android:
        name: Android
        link: /en/reference/sdk-for-android.html
        img: android.png
        img2x: android@2x.png
    javascript:
        name: JavaScript
        link: /en/reference/sdk-for-node/
        img: javascript.png
        img2x: javascript@2x.png
    cSharp:
        name: C Sharp
        link: /en/reference/sdk-for-csharp/
        img: c-sharp.png
        img2x: c-sharp@2x.png
    react:
        name: React
        link: /en/reference/ui-components/react
        img: react.png
        img2x: react@2x.png
    angular:
        name: Angular
        link: /en/reference/ui-components/angular
        img: angular.png
        img2x: angular@2x.png
    vue:
        name: Vue
        link: /en/reference/ui-components/vue
        img: vue.png
        img2x: vue@2x.png
    python:
        name: Python
        link: /en/reference/sdk-for-python/
        img: python.png
        img2x: python@2x.png
    nodeJs:
        name: Node.js
        link: /en/reference/sdk-for-node/
        img: nodejs.png
        img2x: nodejs@2x.png
    ruby:
        name: Ruby
        link: /en/reference/sdk-for-ruby.html
        img: ruby.png
        img2x: ruby@2x.png
    java:
        name: Java
        link: /en/reference/sdk-for-java/
        img: java.png
        img2x: java@2x.png
    golang:
        name: Golang
        link: /en/reference/sdk-for-go.html
        img: golang.png
        img2x: golang@2x.png
applicationSdks:
    - title: Mobile Applications
      description: Quick access to authentication services in mobile applications.
      color: "#396AFF"
      sdks:
          - ios
          - android
          - javascript
          - cSharp
    - title: Single Page Application
      description: Quickly access the authentication service and implement single sign-on in the web application.
      color: "#75A3FF"
      sdks:
          - javascript
          - react
          - angular
          - vue
    - title: Standard Web Application
      description: Traditional Web applications running on the server to achieve unified authentication and authorization.
      color: "#28B1B0"
      sdks:
          - javascript
          - python
          - cSharp
          - nodeJs
          - ruby
          - java
          - golang
    - title: API Services
      description: Unified authentication and authorization of API services.
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
    - title: Concepts
      description: Understand the basics of Approw architecture.
      links:
          - text: What is a user pool
            link: /en/concepts/user-pool
          - text: What is authentication
            link: /en/concepts/authentication.html
          - text: What is authorization
            link: /en/concepts/authorization.html
      knowMore:
          link: /en/concepts/
    - title: Quick Start
      description: Learn how to build a solution following our step-by-step instructions.
      links:
          - text: Use Hosted Login Page
            link: /en/guides/basics/authenticate-first-user/use-hosted-login-page
          - text: Use Embeded Login Component
            link: /en/guides/basics/authenticate-first-user/use-embeded-login-component/
          - text: Use API & SDK
            link: /en/guides/basics/authenticate-first-user/use-api-sdk/
      knowMore:
          link: /en/guides/basics/authenticate-first-user/
    - title: Application Integration
      description: Integrate existing or local applications into Approw
      links:
          - text: Log in to Alibaba Cloud with Approw
            link: /en/integration/ali-cloud/
          - text: Log in to Tencent Cloud with Approw
            link: /en/integration/tencent-cloud/
          - text: Log in to Huawei Cloud with Approw
            link: /en/integration/huawei-cloud/
      knowMore:
          link: /en/integration/
explores:
    - title: User Authentication
      links:
          - icon: authing-login-password
            link: /en/guides/authentication/basic/password/
            text: Account & Password Authentication
          - icon: authing-xingzhuangjiehe1
            link: /en/guides/authentication/basic/sms/
            text: SMS Authentication
          - icon: authing-wechat-webpage-authorization
            link: /en/guides/authentication/social/
            text: Social Authentication
      knowMore:
          link: /en/guides/authentication/
    - title: User Access Control
      links:
          - icon: authing-certification
            link: /en/guides/access-control/choose-the-right-access-control-model.html
            text: Choose the Right Access Control Model
          - icon: authing-genggaimima
            link: /en/guides/access-control/rbac.html
            text: Integrate the RBAC permission model into your application system
          - icon: authing-Token-2
            link: /en/guides/access-control/abac.html
            text: Integrate ABAC permission model into your application system
      knowMore:
          link: /en/guides/access-control/
    - title: Manage User Directories
      links:
          - icon: authing-sousuo
            link: /en/guides/users/search.html
            text: Search User
          - icon: authing-zidingyiziduan-3
            link: /en/guides/users/user-defined-field/
            text: Add User-defined fields
          - icon: authing-bianzu3
            link: /en/guides/users/ldap-user-directory.html
            text: LDAP User Directory by Approw
      knowMore:
          link: /en/guides/users/
    - title: Manage User Accounts
      links:
          - icon: authing-login
            link: /en/guides/user/create-user/
            text: Create User Accounts
          - icon: authing-xiangqing
            link: /en/guides/user/user-profile
            text: View User Profiles
          - icon: authing-port-kz
            link: /en/guides/users/user-defined-field/
            text: Extend User-defined fields
      knowMore:
          link: /en/guides/user/
    - title: Integreate Third-Party Identity Providers（IdP）
      links:
          - icon: authing-wechat-webpage-authorization
            link: /en/guides/connections/social.html
            text: Social Login Configuration Documents
          - icon: authing-oidc_logo
            link: /en/guides/connections/enterprise.html
            text: Enterprise Identity Source Configuration Documents
          - icon: authing-database
            link: /en/guides/database-connection/overview.html
            text: Use Custom Databases
      knowMore:
          link: /en/guides/connections/
    - title: FAQ
      links:
          - icon: authing-ID1
            link: /en/guides/faqs/get-userpool-id-and-secret.html
            text: How To Get Userpool ID
          - icon: authing-anquanyuguanlibeifen
            link: /en/guides/security/config-domain.html
            text: How To Configure A Web Security Domain
          - icon: authing-token-3
            link: /en/guides/faqs/how-to-validate-user-token.html
            text: How To Validate User Token?
      knowMore:
          link: /en/guides/faqs/get-userpool-id-and-secret.html
---
