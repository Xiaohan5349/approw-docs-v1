# 微信网页授权登录 SDK

> {{$localeConfig.brandName}} 微信网页授权 SDK，五分钟接入微信网页授权登录。

## 开发准备

- 微信公众号：前往[微信公众平台](https://mp.weixin.qq.com/) 注册
- 必须为服务号
- 必须通过微信认证

在微信公众平台后台的 开发 -> 基本配置 页面获取开发者 ID (AppID) 和开发者密码(AppSecret)。

在微信公众平台后台的 设置 -> 公众号设置 -> 功能设置 页面设置 **网页授权域名**。

域名填写：`core.authing.cn`。

![](~@imagesZhCn/reference/sdk-for-wxapp/mpverify.jpg)

出于安全验证考虑，微信服务器需要和 {{$localeConfig.brandName}} 服务器做一次请求验证，开发者需要下载 txt 文件，并记录 **文件名** 和 **文本内容**。

最后在 {{$localeConfig.brandName}} 控制台 **连接身份源** -> **社会化登录** 开启**微信网页授权登录**：

<img src="~@imagesZhCn/reference/Xnip2021-02-27_14-03-15.png" alt="drawing"/>

填写弹出的表单：

<img src="~@imagesZhCn/reference/Xnip2021-02-27_14-04-15.png" alt="drawing"/>

- AppID：微信开发者 ID
- AppSecret：微信开发者密码
- Redirect：你的业务回调链接
- Txt Filename：前面记录的 txt 文件名
- Txt Content：前面记录的 txt 文本内容

## 安装

使用 CDN：

```javascript
<script src="https://cdn.jsdelivr.net/npm/@authing/wxmp/dist/authing-wxmp-sdk.min.js"></script>
```

接着就可以在浏览器环境下引用 `AuthingWxmp` 了。

使用 npm / yarn：

```
npm install --save @authing/wxmp
```

或者

```
yarn add @authing/wxmp
```

然后通过以下方式引入：

```javascript
import AuthingWxmp from "@authing/wxmp";
```

## 发起微信授权

> 先从 [{{$localeConfig.brandName}} 控制台](https://console.authing.cn) 中[获取用户池 ID](/guides/faqs/get-userpool-id-and-secret.md)。

```javascript
const authingWx = new AuthingWxmp({
  userPoolId: "YOUR_USERPOOLID",
});

// 跳转到微信授权页面
window.location = authingWx.getAuthorizationUrl();
```

## 获取用户信息

```javascript
// 跳回业务回调链接之后获取用户信息
// 若在回调页面 authingWx 未初始化，需要先初始化，具体初始化方式参考上文

const { ok, userinfo, message } = authingWx.getUserInfo();
if (ok) {
  // do with userinfo
  console.log(userinfo);
} else if (message) {
  // message 中包含了错误提示
  alert(message);
}
```

## 完整 API 列表

- checkWechatUA
- getAuthorizationUrl
- getUserInfo

### 构造函数

参数：

- options
  - userPoolId: 用户池 ID，必填。
  - host: 指定 oauth 服务器地址，选填，默认为
    `javascript { oauth: "https://oauth.authing.cn/" }`
    示例：

```javascript
const authingWx = new AuthingWxmp({
  userPoolId: "YOUR_USERPOOLID",
});
```

### checkWechatUA

> 判断当前环境是否为微信客户端。

示例：

```javascript
if (!authingWx.checkWechatUA()) {
  alert("请在微信客户端中打开！");
}
```

### getAuthorizationUrl

> 获取微信授权链接

示例：

```javascript
// 点击登录按钮之后跳转到微信网页授权页面
loginBtn.onclick = function() {
  window.location = authingWx.getAuthorizationUrl();
};
```

### getUserInfo

> 从当前页面 url 的 search 部分获取用户信息

参数：

- search：浏览器页面链接的 search 部分，可选，默认为 `window.location.search`。

示例：

```javascript
const { ok, userinfo, message } = authingWx.getUserInfo();
if (ok) {
  // do with userinfo
  console.log(userinfo);
} else if (message) {
  // message 中包含了错误提示
  alert(message);
}
```

## 授权流程

1. 开发者引导用户跳转到 {{$localeConfig.brandName}} 设置的授权链接：`https://oauth.authing.cn/oauth/wechatmp/url:userPoolId`，常见的方式有：

- 当用户通过微信客户端网页打开时，让浏览器自动跳转。
- 当用户通过微信客户端网页打开时，点击登录按钮之后跳转

2. {{$localeConfig.brandName}} 和微信服务器完成 OAuth 认证授权

- {{$localeConfig.brandName}} 为开发者省去了其中复杂的获取 authorization_code、获取 access_token、换取用户信息的流程，真正的零行代码接入。
- 详细的过程请看[微信的官方文档](https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/Wechat_webpage_authorization.html)。

3. {{$localeConfig.brandName}} 携带用户信息跳转回开发者在 **{{$localeConfig.brandName}} 后台** 设置的**业务跳转链接**，携带的数据有 `code`、`message`、`data`：

- `code`
  - 200：获取用户信息成功
  - 其他：获取用户信息失败
- `message`: 错误提示信息（获取用户信息失败时候有）
- `data`: 用户信息（获取用户信息成功时候有）

`data` 示例：

```
{
    "_id": "5dc10bcb6f94c178c6ffffb9",
    "email": null,
    "emailVerified": false,
    "unionid": "oiPbDuG4S7msrKHPKDc8MECSe8jM",
    "openid": "oiPbDuG4S7msrKHPKDc8MECSe8jM",
    "oauth": "{\"openid\":\"oiPbDuG4S7msrKHPKDc8MECSe8jM\",\"nickname\":\"廖长江\",\"sex\":1,\"language\":\"zh_CN\",\"city\":\"海淀\",\"province\":\"北京\",\"country\":\"中国\",\"headimgurl\":\"http://thirdwx.qlogo.cn/mmopen/vi_32/GkxYERPDdTMk7bOk3BgBmEEYul8oMcOoLgNHLoibZn5ibe4EulWBp1xo6uN4az59eoSBYBW0QmXB9TrsJEM0EoPw/132\",\"privilege\":[]}",
    "registerMethod": "oauth:wxmp",
    "username": "廖长江",
    "nickname": "廖长江",
    "company": "",
    "photo": "https://usercontents.authing.cn/avatar-5dc10bcb6f94c178c6ffffb9-1572932555337",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVuaW9uaWQiOiJvaVBiRHVHNFM3bXNyS0hQS0RjOE1FQ1NlOGpNIiwiaWQiOiI1ZGMxMGJjYjZmOTRjMTc4YzZmZmZmYjkiLCJjbGllbnRJZCI6IjVkYTdlZGFiNTAzOTZjMWFkOTYyMzc4YSJ9LCJpYXQiOjE1NzI5NTY0MjUsImV4cCI6MTU3NDI1MjQyNX0.OTgl72WZS8So3R5DbWCJ7I_Bd0LaZa4S0TAVMg9qaYQ",
    "tokenExpiredAt": "11/20/2019, 8:20:25 PM",
    "loginsCount": 43,
    "lastLogin": "11/5/2019, 8:20:25 PM",
    "lastIP": "127.0.0.1",
    "signedUp": "11/5/2019, 1:42:35 PM",
    "blocked": false,
    "isDeleted": false
}
```

4. 开发者使用 token 维持登录状态

用户信息中返回的 `token` 是登录凭证，开发者应当妥善保存，并且**后续的请求需要携带上此 token**：

设置 Authorization 请求头为 "Bearer " + token, 例如：

```
Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVuaW9uaWQiOiJvaVBiRHVHNFM3bXNyS0hQS0RjOE1FQ1NlOGpNIiwiaWQiOiI1ZGMxMGJjYjZmOTRjMTc4YzZmZmZmYjkiLCJjbGllbnRJZCI6IjVkYTdlZGFiNTAzOTZjMWFkOTYyMzc4YSJ9LCJpYXQiOjE1NzI5NTY0MjUsImV4cCI6MTU3NDI1MjQyNX0.OTgl72WZS8So3R5DbWCJ7I_Bd0LaZa4S0TAVMg9qaYQ"
```

如果你使用的是 NodeJS 的 [axios](https://github.com/axios/axios)，可以这样写：

```javascript
axios.get(SOME_SERVICE_URL, {
  headers: {
    Authorization: `Bearer ${userinfo.token}`,
  },
});
```

当终端用户携带此 Toekn 访问开发者的接口时，**开发者需要判断这个 Token 是否合法且处于登录状态**，Authing 为此提供了几个方法：[验证用户 Token](/guides/faqs/how-to-validate-user-token.md)。Authing 返回的数据中包含了用户是否登录、登录情况下的用户 ID 等信息，之后开发者可以根据具体业务的需要对请求进行处理。

1. 总结一下以上流程

- 开发者引导用户跳转到微信授权页面：https://oauth.authing.cn/oauth/wechatmp/url:userPoolId。
- 终端用户同意授权。
- {{$localeConfig.brandName}} 和微信根据 OAuth 协议完成用户信息交互。
- {{$localeConfig.brandName}} 将用户信息（包含 token）发送到开发者自定义的业务回调链接
- 终端用户后续的请求将 token 携带上。
- 开发者在后端调用 [{{$localeConfig.brandName}} 提供的方法](/guides/faqs/how-to-validate-user-token.md) 检验 token 的合法性以及登录状态。
- 根据 {{$localeConfig.brandName}} 返回的登录状态和开发者自己的业务逻辑，对请求进行相应处理。
