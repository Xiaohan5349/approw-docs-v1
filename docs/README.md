---
home: true
noSidebar: true
mainTitle: Document
subTitle: Here, start an exciting first step! Learn how to use {{$localeConfig.brandName}} and the API provided by {{$localeConfig.brandName}}.
searchPlaceholder: Please enter keywords to search product documents
hotSearchText: Popular Searches
exploreUse: Explore the use of {{$localeConfig.brandName}}
hotSearch:
  - text: How to authenticate users
    link: /guides/authentication/
  - text: How to authorize users
    link: /guides/authorization/
  - text: Quickly implement single sign-on
    link: /guides/authentication/sso/
  - text: Add social login
    link: /guides/authentication/social/
  - text: How to verify token
    link: /guides/faqs/how-to-validate-user-token.html
sdkConfig:
  ios:
    name: IOS Swift
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
  reactNative:
    name: React Native
    link: /reference/sdk-for-react-native/
    img: react-native.svg
    img2x: react-native.svg
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
  - title: Mobile / Client Application
    description: Quick access to authentication services in mobile/client applications
    color: '#396AFF'
    sdks:
      - ios
      - android
      - reactNative
      - cSharp
  - title: Single Page Application
    description: Quickly access the authentication service and realize single sign-on in the web application running in the browser
    color: '#75A3FF'
    sdks:
      - javascript
      - react
      - angular
      - vue
  - title: Standard Web Application
    description: Traditional Web applications running on the server to achieve unified authentication and authorization
    color: '#28B1B0'
    sdks:
      - javascript
      - python
      - cSharp
      - nodeJs
      - ruby
      - java
      - golang
  - title: Backend / API service
    description: Call {{$localeConfig.brandName}} on the backend and protect the API interface
    color: '#F8BC00'
    sdks:
      - javascript
      - python
      - cSharp
      - nodeJs
      - ruby
      - java
      - golang
sections:
  - title: Concept
    description: Understand the basics of {{$localeConfig.brandName}} architecture
    links:
      - text: What is User Pool
        link: /concepts/user-pool
      - text: What is Certification
        link: /concepts/authentication.html
      - text: What is Authorization
        link: /concepts/authorization.html
    knowMore:
      link: /concepts/
  - title: Quick Start
    description: Learn how to build a solution following our step-by-step instructions.
    links:
      - text: Use hosted login page
        link: /guides/basics/authenticate-first-user/use-hosted-login-page
      - text: Use the login form component
        link: /guides/basics/authenticate-first-user/use-embeded-login-component/
      - text: Use API & SDK
        link: /guides/basics/authenticate-first-user/use-api-sdk/
    knowMore:
      link: /guides/basics/authenticate-first-user/
  - title: Application Integration
    description: Integrate existing or local applications into {{$localeConfig.brandName}}.
    links:
      - text: Log in to Alibaba Cloud through {{$localeConfig.brandName}}
        link: /integration/ali-cloud/
      - text: Log in to Tencent Cloud through {{$localeConfig.brandName}}
        link: /integration/tencent-cloud/
      - text: Log in to HUAWEI CLOUD via {{$localeConfig.brandName}}
        link: /integration/huawei-cloud/
    knowMore:
      link: /integration/
explores:
  - title: Authenticate Users
    links:
      - icon: authing-login-password
        link: /guides/authentication/basic/password/
        text: Use account password authentication
      - icon: authing-xingzhuangjiehe1
        link: /guides/authentication/basic/sms/
        text: Use SMS verification code to authenticate
      - icon: authing-wechat-webpage-authorization
        link: /guides/authentication/social/
        text: Use social login authentication
    knowMore:
      link: /guides/authentication/
  - title: Manage User Privilege
    links:
      - icon: authing-certification
        link: /guides/access-control/choose-the-right-access-control-model.html
        text: Choose the right permission model
      - icon: authing-genggaimima
        link: /guides/access-control/rbac.html
        text: Integrate the RBAC permission model into your application system
      - icon: authing-Token-2
        link: /guides/access-control/abac.html
        text: Integrate ABAC permission model into your application system
    knowMore:
      link: /guides/access-control/
  - title: Manage User Directories
    links:
      - icon: authing-sousuo
        link: /guides/users/search.html
        text: Search users
      - icon: authing-zidingyiziduan-3
        link: /guides/users/user-defined-field/
        text: Add custom user fields
      - icon: authing-bianzu3
        link: /guides/users/ldap-user-directory.html
        text: Use {{$localeConfig.brandName}} LDAP user directory
    knowMore:
      link: /guides/users/
  - title: Manage user accounts
    links:
      - icon: authing-login
        link: /guides/user/create-user/
        text: Create user account
      - icon: authing-xiangqing
        link: /guides/user/user-profile
        text: View user details
      - icon: authing-port-kz
        link: /guides/users/user-defined-field/
        text: Extended user attributes
    knowMore:
      link: /guides/user/
  - title: Connect to an external identity source (IdP)
    links:
      - icon: authing-wechat-webpage-authorization
        link: /guides/connections/social.html
        text: Social login configuration document
      - icon: authing-oidc_logo
        link: /guides/connections/enterprise.html
        text: Enterprise Identity Source Configuration Document
      - icon: authing-database
        link: /guides/database-connection/overview.html
        text: Use a custom database
    knowMore:
      link: /guides/connections/
  - title: FAQ
    links:
      - icon: authing-ID1
        link: /guides/faqs/get-userpool-id-and-secret.html
        text: How to get the user pool ID
      - icon: authing-anquanyuguanlibeifen
        link: /guides/security/config-domain.html
        text: How to configure a web security domain
      - icon: authing-token-3
        link: /guides/faqs/how-to-validate-user-token.html
        text: Verify user credentials (token)
    knowMore:
      link: /guides/faqs/get-userpool-id-and-secret.html
---
