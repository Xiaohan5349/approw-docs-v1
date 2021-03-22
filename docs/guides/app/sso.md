# 实现应用间单点登录

<LastUpdated/>

开启应用之间的单点登录后，同一个用户池下的不同应用之间的登录状态将会打通，终端用户只需登录一次即可在不同的应用之间畅行。

## 创建两个应用

首先你可以按照[指引](./create-app.md)创建两个应用。

## 打开应用单点登录

在控制台的**应用**列表页面，打开应用单点登录开关。

![](https://cdn.authing.cn/docs/20201216143359.png)

## 体验应用单点登录

在应用列表，点击一个应用的体验按钮：

![](https://cdn.authing.cn/docs/20201216143536.png)

在登录页面完成登录：
![](https://cdn.authing.cn/docs/20201216143744.png)

成功后会跳转到应用回调地址：
![](https://cdn.authing.cn/docs/20201216143917.png)

接下来我们点击另一个应用的体验按钮：
![](https://cdn.authing.cn/docs/20201216144049.png)

用户无需再次输入密码，直接进入了该用用的回调地址：
![](https://cdn.authing.cn/docs/20201216144215.png)

## 使用 SDK 接入单点登录

详细的接入流程请见 [实现单点登录（SSO）](/guides/authentication/sso/)，以及[单点登录 SDK](/reference/sdk-for-sso.md)文档。