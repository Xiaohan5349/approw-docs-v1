---
meta:
  - name: description
    content: 使用 Webhook 监听用户事件
---

# 使用 Webhook 监听用户事件

<LastUpdated/>

Webhook 允许你对用户注册、登录等行为进行监听，从而对其做一些自定义处理。

使用 Webhook 的方法是在 Authing 平台中配置 HTTP URL，当你的用户登录、注册、修改密码后，都会给远程 HTTP URL 发送一个 POST 请求。

## 配置 Webhook

在 **扩展能力** - **Webhook** 页面，可以管理你定义的 webhook：

![](https://cdn.authing.cn/blog/20200927201310.png)

::: img-description
Webhook 列表
:::

点击右上角创建按钮可以创建新的 Webhook 订阅特定事件：

![](https://cdn.authing.cn/blog/20200927201428.png)

::: img-description
配置 Webhook
:::

### 参数解释

| 参数名称     | 参数解释                                                                                                                                 |
| :----------- | :--------------------------------------------------------------------------------------------------------------------------------------- |
| 回调链接     | 远程接收 webhook 事件的 HTTP URL 地址                                                                                                    |
| 请求密钥     | 设置好密钥（值由开发者自定）后，Authing 将在每个请求中（HTTP Header：X-Authing-Token）附带此密钥，你可以通过验证此密钥来避免一些非法操作 |
| 请求数据格式 | 指定发起 Webhook 请求时 Request body 的数据格式，可选值有 `application/json` 和 `application/x-www-form-urlencoded`                      |
| 触发事件     | [请查看支持的事件](use-webhook.md#支持的事件)                                                                                            |
| 激活         | 是否启用此 Hook                                                                                                                          |

## 调试 Webhook

刚创建好的 Hook 请求事件都为空，这时你可以点击「测试」触发一个「测试事件」：

![](https://cdn.authing.cn/blog/20200927201623.png)

::: img-description
Webhook 测试
:::

请求数据为：

```js
{
    "description": "A test from Authing Webhook"
}
```

测试成功后你将看到详细的请求信息和返回信息。

![](https://cdn.authing.cn/blog/20200927201638.png)

## 支持的事件

### 事件列表

| 事件名                | 事件描述                                                                                           |
| :-------------------- | :------------------------------------------------------------------------------------------------- |
| login                 | 登录事件，当用户进行登录时会触发此事件，无论是否登录成功都会触发。                                 |
| register              | 注册事件，当用户注册或管理员手动创建用户时会触发此事件，无论是否成功都会触发                       |
| mfaVerify             | MFA 验证事件，当用户登录并触发了 MFA，并输入了 MFA 验证码二次登录后触发，无论成功与否都会触发      |
| user:updated          | 修改密码事件，当用户修改密码或管理员手动修改密码时会触发此事件，无论成功与否都会触发               |
| user:password-changed | 修改用户信息时间，当用户修改自己的信息或管理员手动修改用户信息时会触发词时间，无论成功与否都会触发 |
| user:email-verified   | 用户邮箱被验证事件                                                                                 |
| permission:add        | 添加授权事件，授权对象可以是用户、角色、组织结构                                                   |
| permission:revoke     | 取消授权事件，取消授权对象可以是用户、角色、组织机构                                               |

### 请求类型

指定发起 Webhook 请求时 Request body 的数据格式，可选值有 `application/json` 和 `application/x-www-form-urlencoded`

## 附带的数据

每一个事件都会携带一些特定的请求参数。

### Request headers

我们会在 HTTP POST 头中携带一些自定义头信息，如下表所示：

| Header                     | 描述                                                                                        |
| :------------------------- | :------------------------------------------------------------------------------------------ |
| `user-agent`               | 值为 `'authing-webhook@2.0'`，表示此次请求来自 Authing                                      |
| `x-authing-webhook-secret` | 请求秘钥，值为你在 Webhook 配置中设置的秘钥，对此秘钥进行验证，可以用来防止第三方的恶意请求 |
| `x-authing-userpool-id`    | Authing 用户池 ID                                                                           |

### Request body

请求体中也会携带一些特定参数

| 参数名      | 描述                                                                                                    |
| :---------- | :------------------------------------------------------------------------------------------------------ |
| `eventName` | 事件名称，可能的值为 `login`, `register`, `user:updated`,`user:password-changed`, `user:email-verified` |
| `data`      | 该事件的对应的详细信息                                                                                  |

#### Request 示例

- 登录事件

  ```json
  {
    "eventName": "login",
    "data": {
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
      "identities": [],
      "nickname": "xxxx",
      "registerSource": ["social:github"],
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
      "company": "Authing",
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
      "customData": ""
    }
  }
  ```

- 注册事件

  ```json
  {
    "eventName": "register",
    "data": {
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
      "identities": [],
      "nickname": "xxxx",
      "registerSource": ["social:github"],
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
      "company": "Authing",
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
      "customData": ""
    }
  }
  ```

- 修改密码事件

  ```json
  {
    "eventName": "user:password-changed",
    "data": {
      "userId": "5f702fcc913544c358cb2123"
    }
  }
  ```

- 修改用户信息事件

  ```json
  {
    "eventName": "user:updated",
    "data": {
      "user": {
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
        "identities": [],
        "nickname": "xxxx",
        "registerSource": ["social:github"],
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
        "company": "Authing",
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
        "customData": ""
      },
      "updates": {
        "nickname": "xxxx"
      }
    }
  }
  ```

- 用户邮箱被验证事件

```json
{
  "eventName": "user:email-verified",
  "data": {
    "userId": "xxxxx",
    "email": "xxxx"
  }
}
```

- MFA 验证事件

```json
{
  "eventName": "mfaVerify",
  "data": {
    "userId": "xxxxx",
    "isValid": true // 是否验证通过
  }
}
```

- 添加授权事件

```json
{
  "eventName": "permission:add",
  "data": {
    "userPoolId": "xxxxx",
    "policies": ["xxxx"], // 授权的策略 ID 列表
    "targetType": "USER", // 授权对象类型，USER | ROLE | GROUP | ORG
    "targetIdentifiers": ["xxxx"], // 授权对象 ID 列表，如 用户 ID
    "namespace": "xxxx" // 授权的策略所属的权限组
  }
}
```

- 取消授权事件

```json
{
  "eventName": "permission:revoke",
  "data": {
    "userPoolId": "xxxxx",
    "policies": ["xxxx"], // 授权的策略 ID 列表
    "targetType": "USER", // 授权对象类型，USER | ROLE | GROUP | ORG
    "targetIdentifiers": ["xxxx"], // 授权对象 ID 列表，如 用户 ID
    "namespace": "xxxx" // 授权的策略所属的权限组
  }
}
```
