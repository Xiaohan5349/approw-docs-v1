---
meta:
  - name: description
    content: 实现单点登录（SSO）
---

# 实现单点登录（SSO）

<LastUpdated/>

本文讲述如何使用 {{$localeConfig.brandName}} 实现应用账号打通和单点登录。

## 什么是单点登录

我们通过一个例子来说明，假设有一所大学，内部有两个系统，一个是邮箱系统，一个是课表查询系统。现在想实现这样的效果：在邮箱系统中登录一遍，然后此时进入课表系统的网站，无需再次登录，课表网站系统直接跳转到个人课表页面，反之亦然。比较专业的定义如下：

**单点登录**（Single Sign On），简称为 **SSO**，是目前比较流行的企业业务整合的解决方案之一。 SSO 的定义是在多个应用系统中，**用户只需要登录一次**就可以**访问所有**相互信任的应用系统。

## 开始之前

### 预备知识

1. 基本的 HTML 和 CSS 知识。
2. 中级 JavaScript 技能。

### 所需工具

1. 你喜欢的文本编辑器。
2. 可以在本地运行的 Web 服务器（比如：`npm install http-server -g`）。

## 创建一个授权应用

::: hint-info
若你是首次注册 {{$localeConfig.brandName}}，可略过此步骤，首次注册时已自动完成此步骤。
:::

进入**控制台** &gt; **应用** &gt; **应用列表**，点击「创建应用」按钮。

![](https://cdn.authing.cn/blog/20200927174331.png)

::: img-description
创建应用
:::

在弹出的对话框中，只需填写**应用名称**、**认证地址**和**回调地址**，这三个参数即可，其他参数保留默认，然后点击「创建」。

**参数解释**

**应用名称**，请为你的应用起一个名字。

**认证地址**，一个 authing.cn 的二级域名，用户将在此网址进行登录。

**回调 URL**，登录成功后，回调到开发者自己业务的地址。本教程为演示，填写的地址是 http://localhost:8080，实际场景下请填写自己的业务地址。

在应用列表中点击刚创建好的应用，记录下 AppID，二级域名，供以后使用。

## 快速集成单点登录

在 Web 应用启动时，如何判断当前已经为登录状态？关键在于，**Web 应用启动时，需要先询问一下 {{$localeConfig.brandName}}：当前有人登录了吗?**

假设我们的业务逻辑很简单：如果为**未登录状态**，需要**显示登录按钮**，并提示用户登录；如果已经为**登录状态**，就要**显示用户的个人信息和登出按钮**。下面让我们开始编码实现。

### 开发 Web 应用程序 <a id="add-empty-html"></a>

本教程只是为了演示，因此我们没选择高级框架，这可以让我们专注于 {{$localeConfig.brandName}} 本身。我们使用 [AuthingSSO SDK](https://github.com/authing/AuthingSSO) 快速为应用集成单点登录能力。

### 新建一个 HTML 文件

创建一个 HTML 文件，开始编码我们的第一个 Web 应用，首先引入 [AuthingSSO SDK](https://github.com/authing/AuthingSSO.git)，方便我们快速询问 {{$localeConfig.brandName}}: **当前有人登录了吗?**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>第一个应用</title>
  </head>
  <body>
    <script src="https://cdn.jsdelivr.net/npm/@authing/sso/dist/AuthingSSO.umd.min.js"></script>
  </body>
</html>
```

### 初始化 AuthingSSO SDK

按照以下方式进行初始化，填入前面记录的 OIDC 应用的 AppId 和认证地址，完成 SDK 的初始化。

```html
<body>
  <script src="https://cdn.jsdelivr.net/npm/@authing/sso/dist/AuthingSSO.umd.min.js"></script>
  <script>
    let auth = new AuthingSSO({
      // OIDC 应用 ID
      appId: '5e7343597f905c025e99e660',
      // OIDC 应用认证地址
      appDomain: 'first-oidc-app.authing.cn'
    });
  </script>
</body>
```

### 放置用于实现业务逻辑的基本 HTML 控件

当 Web 应用启动时，如果没有人登录，就显示登录按钮；如果已经是登录状态，就显示用户的个人信息。放置以下控件，以便用于完成我们的业务逻辑。

```html
<body>
  <h1 id="h1-login" style="display: none;">请登录</h1>
  <input type="button" value="登录" id="btn-login" style="display: none;" />
  <h1 id="h1-user-info" style="display: none;">用户信息</h1>
  <input type="button" value="登出" id="btn-logout" style="display: none;" />
  <pre id="user-info"></pre>
  <script src="https://cdn.jsdelivr.net/npm/@authing/sso/dist/AuthingSSO.umd.min.js"></script>
  <script>
    let auth = new AuthingSSO({
      // OIDC 应用 ID
      appId: '5e7343597f905c025e99e660',
      // OIDC 应用认证地址
      appDomain: 'first-oidc-app.authing.cn'
    });
  </script>
</body>
```

### 查询登录状态

为了每次启动 Web 应用时，先向 {{$localeConfig.brandName}} 询问登录状态，以便执行登录状态或未登录状态的业务逻辑，加入以下代码：

```html
<script>
  let auth = new AuthingSSO({
    appId: '5cded9bf4efab36f02fa666a',
    appDomain: 'first-oidc-app.authing.cn',
  });
  window.onload = async function () {
    let res = await auth.trackSession();
    if (res.session !== null) {
      document.getElementById('h1-user-info').style.display = 'block';
      document.getElementById('user-info').innerHTML = JSON.stringify(res.userInfo, null, 4);
      document.getElementById('btn-logout').style.display = 'inline';
    } else {
      document.getElementById('h1-login').style.display = 'block';
      document.getElementById('btn-login').style.display = 'inline';
    }
  };
  document.getElementById('btn-login').addEventListener('click', function () {
    auth.login();
  });
  document.getElementById('btn-logout').addEventListener('click', function () {
    auth.logout().then((res) => {
      alert(JSON.stringify(res));
      location.reload();
    });
  });
</script>
```

### 完整代码 <a id="full-code"></a>

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>第一个应用</title>
  </head>
  <body>
    <h1 id="h1-login" style="display: none;">请登录</h1>
    <input type="button" value="登录" id="btn-login" style="display: none;" />
    <h1 id="h1-user-info" style="display: none;">用户信息</h1>
    <input type="button" value="登出" id="btn-logout" style="display: none;" />
    <pre id="user-info"></pre>
    <script src="https://cdn.jsdelivr.net/npm/@authing/sso/dist/AuthingSSO.umd.min.js"></script>
    <script>
      let auth = new AuthingSSO({
        appId: '5cded9bf4efab36f02fa666a',
        appDomain: 'first-oidc-app.authing.cn',
      });
      window.onload = async function () {
        let res = await auth.trackSession();
        if (res.session !== null) {
          document.getElementById('h1-user-info').style.display = 'block';
          document.getElementById('user-info').innerHTML = JSON.stringify(res.userInfo, null, 4);
          document.getElementById('btn-logout').style.display = 'inline';
        } else {
          document.getElementById('h1-login').style.display = 'block';
          document.getElementById('btn-login').style.display = 'inline';
        }
      };
      document.getElementById('btn-login').addEventListener('click', function () {
        auth.login();
      });
      document.getElementById('btn-logout').addEventListener('click', function () {
        auth.logout().then((res) => {
          alert(JSON.stringify(res));
          location.reload();
        });
      });
    </script>
  </body>
</html>

```

示例代码可从 [Github](https://github.com/authing/authing-sso-demo) 上找到，建议将 Github 上的代码下载运行。

AuthingSSO 单点登录 SDK 完整参数列表[请见此](/reference/sdk-for-sso.md)。

### **运行方法** <a id="run-the-demo"></a>

在终端中运行以下命令

```bash
$ git clone https://github.com/authing/authing-sso-demo
$ cd authing-sso-demo
$ npm install -g http-server
$ http-server
```

之后在浏览器访问 [http://localhost:8080](http://localhost:8080)。

::: hint-warning
如果本地 8080 端口已被占用，应用可能会运行在 8081、8082 等后续端口。
:::

### 运行效果 <a id="demo-result"></a>

打开我们编写的 Web 应用，当前是未登录状态，页面提示用户登录，并显示登录按钮。我们点击「登录」。

![未登录](https://cdn.authing.cn/docs/20200405180101.png)
::: img-description
登录入口
:::

浏览器会跳转到 OIDC 应用的用户认证页面，输入用户名密码进行登录。

![](https://cdn.authing.cn/blog/20200927174427.png)

::: img-description
进行登录
:::

浏览器被重定向到我们之前设置的回调链接。本示例依然回调到 localhost:8080。

![已登录](https://cdn.authing.cn/docs/20200405180354.png)
::: img-description
用户信息
:::

登录之后我们通过 AuthingSSO SDK 的 `trackSession` 函数获取用户信息，并显示在页面上。`trackSession` 返回数据格式如下：

```json
{
    "session": {
        "_id": "mbC_oeqTz0WPaspPAxpXEGXSDqlCo5i4",
        "__v": 0,
        "appId": "5cded9bf4efab36f02fa666a",
        "cookie": {
            "originalMaxAge": 86400000,
            "expires": "2020-04-04T14:55:22.397Z",
            "secure": true,
            "httpOnly": true,
            "path": "/cas",
            "sameSite": "none"
        },
        "type": "oidc",
        "userId": "5e71a7ec3e494a56f5f4d03b"
    },
    "userInfo": {
        {
          "id": "5f702fcc913544c358cb2123",
          "arn": "arn:cn:authing:59f86b4832eb28071bdd9214:user:5f702fcc913544c358cb2123",
          "userPoolId": "59f86b4832eb28071bdd9214",
          "username": "xxx",
          "email": null,
          "emailVerified": false,
          "phone": null,
          "phoneVerified": false,
          "unionid": "35447896",
          "openid": "35447896",
          "identities": [
          ],
          "nickname": "xxxx",
          "registerSource": [
              "social:github"
          ],
          "photo": "https://avatars2.githubusercontent.com/u/35447896?v=4",
          "password": null,
          "oauth": "",
          "token": "",
          "tokenExpiredAt": "1602484037172",
          "loginsCount": 4,
          "lastLogin": "1601188037190",
          "lastIP": null,
          "signedUp": "2020-09-27T14:23:08+08:00",
          "blocked": false,
          "isDeleted": false,
          "device": null,
          "browser": null,
          "company": "{{$localeConfig.brandName}}",
          "name": null,
          "givenName": null,
          "familyName": null,
          "middleName": null,
          "profile": "",
          "preferredUsername": null,
          "website": null,
          "gender": "U",
          "birthdate": null,
          "zoneinfo": null,
          "locale": null,
          "address": null,
          "formatted": null,
          "streetAddress": null,
          "locality": null,
          "region": null,
          "postalCode": null,
          "country": null,
          "createdAt": "2020-09-27T14:23:08+08:00",
          "updatedAt": "2020-09-27T14:27:17+08:00",
          "customData": "",
    },
    "urlParams": {
        "code": "N_J4aPRa6vIJUQyeO8NNJlozO4E",
    }
}
```

你可以在这个页面多刷新几次，因为当前是已登录状态，浏览器会一直显示用户信息。接下来，我们点击「登出」按钮，进行单点登出。

![](https://cdn.authing.cn/docs/20200405180656.png)
::: img-description
登出按钮
:::

## 访问用户个人中心页面

在 SSO 应用中，有独立的用户中心页面，用户可以修改自己的资料。

你的终端用户可以访问以下链接，进入个人资料修改页面：

```
https://<appDomain>.authing.cn/u
```

其中 `<appDomain>` 是你的 SSO 应用的二级域名。

如果用户未登录，会先要求用户登录再进入个人中心；对于已登录的用户则会直接进入个人中心。

![](https://cdn.authing.cn/blog/20200927174731.png)

::: img-description
个人中心
:::

## 检验 token 合法性

成功登录之后，你获得的用户信息中包含一个 token 字段，值是一个 IdToken，这是用于的登录凭证，可以在后端用于判断用户身份。你可能需要了解如何验证 Token 的合法性，请[点此查看详情](../../basics/authenticate-first-user/how-to-validate-user-token.md)。

### 什么是 id_token？

**id_token** 相当于终端用户的身份证，用于认证用户身份，在 OIDC 授权后签发。当你需要向你**自己的服务器**请求资源时，应该携带 **id_token**，同时你的服务器应该[检验此 token 的合法性](../../basics/authenticate-first-user/how-to-validate-user-token.md)，然后再返回相应资源。id_token、access_token 的区别请看[这里](/concepts/oidc-common-questions#idtoken-与-accesstoken-的区别)。

## 接下来

后续你可以在客户端后续发送给后端服务器的请求中携带上此 `id_token`, 以 `axios` 为例：

```js
const axios = require('axios');
axios.get({
  url: 'https://yourdomain.com/api/v1/your/resources',
  headers: {
    'Authorization': 'Bearer YOUR_JWT_TOKN'
  }
}).then((res) => {
 // custom codes
})
```

在后端接口中需要检验此 `token` 的合法性，来验证用户的身份，验证方式详情请见[验证用户身份凭证（token）](/guides/faqs/how-to-validate-user-token)。识别用户身份之后，你可能还需要[对该用户进行权限管理](/guides/access-control/)，以判断用户是否对此 API 具备操作权限。
