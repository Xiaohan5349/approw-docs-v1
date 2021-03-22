---
meta:
  - name: description
    content: user 对象
---

# user 对象

<LastUpdated/>


user 对象中保存了当前用户的各种数据，以及用于添加自定义字段、自定义 token 字段的方法。

::: hint-warning
Pre-Register（注册前） Pipeline 中没有 user 对象。
:::

## 属性

| 属性名         | 值类型  | 说明                                          |
| -------------- | ------- | --------------------------------------------- |
| id             | string  | 用户 ID                                       |
| username       | string  | 用户名                                        |
| email          | string  | 邮箱                                          |
| emailVerified  | boolean | 邮箱是否已验证                                |
| phone          | string  | 手机号                                        |
| phoneVerified  | boolean | 手机号是否已验证                              |
| photo          | string  | 头像链接                                      |
| nickname       | string  | 昵称                                          |
| gender         | string  | 性别                                          |
| signedUp       | string  | 注册时间，格式为 2020-02-07T04:29:40.877Z     |
| lastLogin      | string  | 上次登录时间，格式为 2020-02-07T04:29:40.877Z |
| oauth          | string  | 社会化登录信息                                |
| registerMethod | string  | 注册方式                                      |
| blocked        | boolean | 是否被 block                                  |
| company        | string  | 公司名                                        |
| browser        | string  | 访问浏览器                                    |
| device         | string  | 访问设备                                      |
| country        | string  | 国家                                          |
| region         | string  | 地区                                          |
| address        | string  | 地址                                          |

## 方法

| 方法名        | 说明                                                                                                                                                                                                                                                                                                                                                                                | 示例代码                           |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- |
| addCustomData | 添加用户自定义字段。你需要先在用户池级别定义好预设的用户自定义字段，才能在 Pipeline 中为用户设置。                                                                                                                                                                                                                                                                                  | user.addCustomData("KEY", "VALUE") |
| addToken      | **不推荐使用**，该方法目前仅限于兼容老版本 {{$localeConfig.brandName}} 用户，请使用下面的 `addIdToken` 方法。调用该方法可以在给用户签发 Token 时向 Token 中加入自定义字段。新增字段会出现在 token.payload.data 对象下面。VALUE 长度不能超过 100 字符，否则会导致 Token 过长。了解如何检验、解密 Token，请见[验证 Token](/user/token.md)。**此接口仅在 POST_AUTHENTICATION（登录后） Pipeline 中可用。** | user.addToken('KEY', 'VALUE')      |
| addIdToken    | 设置 idToken 自定义字段，也可以用于替换原有 idToken 内容。**此接口仅在 Pre-OIDCTokenIssued Pipeline 中可用。**                                                                                                                                                                                                                                                                      | user.addIdToken("KEY","VALUE")     |
