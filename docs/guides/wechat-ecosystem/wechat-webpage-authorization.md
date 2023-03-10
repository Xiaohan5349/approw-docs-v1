# 微信内网页使用微信授权登录

<LastUpdated/>

{{$localeConfig.brandName}}  通过 SDK 为开发者提供了一种快速在微信网页中获取用户信息并完成登录的方法。如果用户在微信客户端中访问第三方网页、公众号可以通过微信网页授权机制，来获取用户基本信息，进而实现业务逻辑。

- 应用场景：微信网页、公众号；
- 概述：在微信 APP 内的网页内弹出微信授权框，用户授权之后可以获取当前用户的信息；
- 查看[微信官方文档](https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/Wechat_webpage_authorization.html)。

<img src="./images/wechat-web-authorize.png" height="400px" style="display:block;margin: 0 auto;"/>

## 示例代码

你可以在此获取示例代码：[https://github.com/authing/wechat-eco-solution](https://github.com/authing/wechat-eco-solution)，访问[线上示例应用](https://authing.cn/sample-wx.html)。

## 第一步：在微信公众平台创建一个微信服务号

请前往 [微信公众平台](https://mp.weixin.qq.com/cgi-bin/readtemplate?t=register/step1_tmpl&lang=zh_CN&token=)指引创建一个微信服务号。

你需要记录下该应用的**开发者 ID（App ID）**和**开发者密钥（App Secret）**，后面需要用到。在微信公众平台后台的 **设置** -> **公众号设置** -> **功能设置**页面设置**网页授权范围名** 为 `core.authing.cn`。在此过程中你需要检验域名的合法性，详情请见下一步。

## 第二步：在 {{$localeConfig.brandName}} 控制台配置微信网页授权应用

在控制台的社会化登录配置页面，找到 **微信网页授权登录** 应用，填入以下配置：

- App ID: 开发者 ID；
- App Secret: 开发者密钥；
- Callback URL：这是你的业务回调域名，和社会化登录应用配置的回调链接不一样。比如你的网站域名是 https://example.com ， 处理 {{$localeConfig.brandName}} 回调请求的 url 为 /auth/callback ， 那么你应该填写为 https://example.com/auth/callback。如果你需要在应用中单独配置回调链接，此处地址可填入： #。
- Txt Filename: 用于验证域名的 txt 文件名。
- Txt Content: 用于验证域名的 txt 文件内容。

配置完成后请点击「确定」保存信息。

## 第三步：开始开发接入

首先使用 CDN 引入 `authing-wxmp-sdk`：

```html
<script src="https://cdn.jsdelivr.net/npm/@authing/wxmp/dist/authing-wxmp-sdk.min.js"></script>
```

> `authing-wxmp-sdk` 的详细文档请见：[微信网页授权登录 SDK](/reference/sdk-for-wxmp.md)。

### 初始化 SDK

使用用户池 ID 初始化 SDK：

```javascript
const authingWx = new AuthingWxmp({
  userPoolId: "YOUR_USERPOOLID"
})
```

### 发起微信授权

调用 `getAuthorizationUrl` 方法获取微信授权登录链接，修改 `window.location` 跳转到微信登录授权页面：

```javascript
// 跳转到微信授权页面
window.location = authingWx.getAuthorizationUrl()
```

### 获取用户信息

跳回业务回调链接之后通过 `getUserInfo` 方法获取用户信息：

```javascript
// 若在回调页面 authingWx 未初始化，需要先初始化，具体初始化方式参考上文

const { ok, userinfo, message } = authingWx.getUserInfo()
if (ok) {
    // do with userinfo
    console.log(userinfo)
} else if (message) {
    // message 中包含了错误提示
    alert(message)
}
```

## 接下来

!!!include(common/what-to-do-when-you-get-userinfo.md)!!!
