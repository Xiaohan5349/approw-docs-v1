# 认证核心模块

<LastUpdated/>

> 此模块包含注册登录、重置手机号邮箱、修改账号信息等方法，是以你的终端用户（End User）的身份进行请求，适合在需要验证用户身份的情况下使用。

使用方法：

```javascript
import { AuthenticationClient } from 'authing-js-sdk'
const authenticationClient = new AuthenticationClient({
  appId: 'YOUR_APP_ID',
})
authenticationClient.registerByEmail // 使用邮箱注册
authenticationClient.loginByEmail // 使用邮箱登录
```

## 使用邮箱注册

AuthenticationClient().registerByEmail(email, password, profile, options)

> 使用邮箱注册，此接口不要求用户对邮箱进行验证，用户注册之后 emailVerified 字段会为 false 。如果你希望邮箱未验证的用户不能进行登录，可以使用 pipeline 对此类请求进行拦截。

#### 参数

- `email` \<string\> 邮箱
- `password` \<string\> 密码
- `profile` \<RegisterProfile\> 用户资料
- `options` \<Object\>
- `options.forceLogin` \<boolean\> 是否走一遍完整的登录的，会触发登录前后的 pipeline 函数以及登录事件 webhook ，同时该用户的累计登录次数会加 1 。默认为 false 。
- `options.generateToken` \<boolean\> 是否为该用户生成 token，不会触发登录后的完整流程，用户的累计登录次数不会加 1。默认为 false 。
- `options.clientIp` \<string\> 客户端真实 IP，如果你在服务器端调用此接口，请务必将此参数设置为终端用户的真实 IP。

#### 示例

```javascript
authenticationClient.registerByEmail(
  'test@example.com',
  'passw0rd',
  {
    nickname: 'Nick',
  },
  {
    generateToken: true,
  }
)
```

```javascript
authenticationClient.registerByEmail('test@example.com', 'passw0rd')
```

#### 返回值

- `Promise<User>`

## 使用用户名注册

AuthenticationClient().registerByUsername(username, password, profile, options)

> 使用用户名注册

#### 参数

- `username` \<string\> 用户名
- `password` \<string\> 密码
- `profile` \<RegisterProfile\> 用户资料
- `options` \<Object\>
- `options.forceLogin` \<boolean\> 是否走一遍完整的登录的，会触发登录前后的 pipeline 函数以及登录事件 webhook ，同时该用户的累计登录次数会加 1 。默认为 false 。
- `options.generateToken` \<boolean\> 是否为该用户生成 token，不会触发登录后的完整流程，用户的累计登录次数不会加 1。默认为 false 。
- `options.clientIp` \<string\> 客户端真实 IP，如果你在服务器端调用此接口，请务必将此参数设置为终端用户的真实 IP。

#### 示例

```javascript
authenticationClient.registerByUsername(
  'bob',
  'passw0rd',
  {
    nickname: 'Nick',
  },
  {
    generateToken: true,
  }
)
```

```javascript
authenticationClient.registerByUsername('bob', 'passw0rd')
```

#### 返回值

- `Promise<User>`

## 使用手机号注册

AuthenticationClient().registerByPhoneCode(phone, code, password, profile, options)

> 使用手机号注册，你可以同时设置该账号的初始密码。发送短信的接口请见 sendSmsCode

#### 参数

- `phone` \<string\> 手机号
- `code` \<string\> 短信验证码
- `password` \<string\> 初始密码
- `profile` \<RegisterProfile\> 用户资料
- `options` \<Object\>
- `options.forceLogin` \<boolean\> 是否走一遍完整的登录的，会触发登录前后的 pipeline 函数以及登录事件 webhook ，同时该用户的累计登录次数会加 1 。默认为 false 。
- `options.generateToken` \<boolean\> 是否为该用户生成 token，不会触发登录后的完整流程，用户的累计登录次数不会加 1。默认为 false 。
- `options.clientIp` \<string\> 客户端真实 IP，如果你在服务器端调用此接口，请务必将此参数设置为终端用户的真实 IP。

#### 示例

```javascript
authenticationClient.registerByPhoneCode(
  '176xxxx6754',
  '1234',
  'passw0rd',
  {
    nickname: 'Nick',
  },
  {
    generateToken: true,
  }
)
```

```javascript
authenticationClient.registerByPhoneCode('176xxxx6754', '1234')
```

#### 返回值

- `Promise<User>`

## 检查密码强度

AuthenticationClient().checkPasswordStrength(password)

> 检查密码强度，[点此查看详情](/guides/security/config-password.md)。

#### 参数

- `password` \<string\>

#### 示例

```javascript
authenticationClient.checkPasswordStrength('weak')
```

```javascript
authenticationClient.checkPasswordStrength('strongPassw0rd!')
```

#### 返回值

- `Promise<CheckPasswordStrengthResult>`

## 发送短信验证码

AuthenticationClient().sendSmsCode(phone)

> 发送短信验证码, 短信验证码的有效时间为 60 s。

#### 参数

- `phone` \<string\>

#### 示例

```javascript
authenticationClient.sendSmsCode('176xxxx6754')
```

#### 返回值

- `Promise<CommonMessage>`

## 使用邮箱登录

AuthenticationClient().loginByEmail(email, password, options)

> 使用邮箱登录，该接口默认不会限制未验证的邮箱进行登录，如果你希望邮箱未验证的用户不能进行登录，可以使用 pipeline 对此类请求进行拦截。

如果你的用户池配置了登录失败检测，当同一 IP 下登录多次失败的时候会要求用户输入图形验证码（code 为 2000)。

#### 参数

- `email` \<string\> 邮箱
- `password` \<string\> 密码
- `options` \<Object\>
- `options.autoRegister` \<boolean\> 是否自动注册。如果检测到用户不存在，会根据登录账密自动创建一个账号。
- `options.captchaCode` \<string\> 图形验证码
- `options.clientIp` \<string\> 客户端真实 IP，如果你在服务器端调用此接口，请务必将此参数设置为终端用户的真实 IP。

#### 示例

```javascript
authenticationClient.loginByEmail(
 'test@example.com',
 'passw0rd',
 {
   autoRegister: true，
   captchaCode: 'xj72'
 }
)
```

```javascript
authenticationClient.loginByEmail('test@example.com', 'passw0rd')
```

#### 返回值

- `Promise<User>`

## 使用用户名登录

AuthenticationClient().loginByUsername(username, password, options)

> 使用用户名登录。

如果你的用户池配置了登录失败检测，当同一 IP 下登录多次失败的时候会要求用户输入图形验证码（code 为 2000)。

#### 参数

- `username` \<string\> 用户名
- `password` \<string\> 密码
- `options` \<Object\>
- `options.autoRegister` \<boolean\> 是否自动注册。如果检测到用户不存在，会根据登录账密自动创建一个账号。
- `options.captchaCode` \<string\> 图形验证码
- `options.clientIp` \<string\> 客户端真实 IP，如果你在服务器端调用此接口，请务必将此参数设置为终端用户的真实 IP。

#### 示例

```javascript
authenticationClient.loginByEmail(
 'test@example.com',
 'passw0rd',
 {
   autoRegister: true，
   captchaCode: 'xj72'
 }
)
```

```javascript
authenticationClient.loginByEmail('test@example.com', 'passw0rd')
```

#### 返回值

- `Promise<User>`

## 使用手机号验证码登录

AuthenticationClient().loginByPhoneCode(phone, code)

> 使用手机号验证码登录。

#### 参数

- `phone` \<string\> 手机号
- `code` \<string\> 短信验证码
- `options.clientIp` \<string\> 客户端真实 IP，如果你在服务器端调用此接口，请务必将此参数设置为终端用户的真实 IP。

#### 示例

```javascript
authenticationClient.loginByPhoneCode('176xxxx6754', '1234')
```

#### 返回值

- `Promise<User>`

## 使用手机号密码登录

AuthenticationClient().loginByPhonePassword(phone, password, options)

> 使用手机号密码登录。

#### 参数

- `phone` \<string\> 手机号
- `password` \<string\> 密码
- `options` \<Object\>
- `options.captchaCode` \<string\> 图形验证码
- `options.clientIp` \<string\> 客户端真实 IP，如果你在服务器端调用此接口，请务必将此参数设置为终端用户的真实 IP。

#### 示例

```javascript
authenticationClient.loginByPhonePassword('176xxxx6754', 'passw0rd', {
  captchaCode: 'xj72',
})
```

```javascript
authenticationClient.loginByPhonePassword('176xxxx6754', 'passw0rd')
```

#### 返回值

- `Promise<User>`

## 获取自定义数据

AuthenticationClient().getUdfValue()

> 获取用户的所有自定义数据。你需要先在用户池[定义用户自定义数据元信息](/guides/users/user-defined-field/)。

#### 示例

```javascript
const authenticationClient = new AuthenticationClient({
  appId: '应用 ID',
  token: 'USER_TOKEN', // 使用用户的 token 初始化 SDK
})

const data = await authenticationClient.getUdfValue()
```

#### 示例数据

```json
{
  "school": "华中科技大学",
  "age": 20
}
```

## 设置自定义数据

AuthenticationClient().setUdfValue(data)

> 设置用户的自定义字段。你需要先在用户池[定义用户自定义数据元信息](/guides/users/user-defined-field/)，且传入值的类型必须和定义的类型匹配。如果设置失败，会抛出异常，你需要对异常进行捕捉。

#### 参数

- `data` \<string\> 输入数据，类型为一个对象，详情请见示例。

#### 示例

```javascript
const authenticationClient = new AuthenticationClient({
  appId: '应用 ID',
  token: 'USER_TOKEN', // 使用用户的 token 初始化 SDK
})

await authenticationClient.setUdfValue({
  school: '华中科技大学',
  age: 20,
})
```

## 删除自定义数据

AuthenticationClient().removeUdfValue(key)

> 删除自定义数据。你需要先在用户池[定义用户自定义数据元信息](/guides/users/user-defined-field/)，且传入值的类型必须和定义的类型匹配。

#### 参数

- `key` \<string\> 自定义字段的 key 。

#### 示例

```javascript
const authenticationClient = new AuthenticationClient({
  appId: '应用 ID',
  token: 'USER_TOKEN', // 使用用户的 token 初始化 SDK
})

await authenticationClient.removeUdfValue('school')
```

## 检测 Token 登录状态

AuthenticationClient().checkLoginStatus(token)

> 检测 Token 登录状态

#### 参数

- `token` \<string\> 用户的登录凭证 token

#### 示例

```javascript
authenticationClient.checkLoginStatus('TOKEN')
```

#### 返回值

- `Promise<JwtTokenStatus>`

## 上传头像

AuthenticationClient().updateAvatar()

该方法会自动打开浏览器文件上传框（支持上传的文件格式为 `image/*`），并自动完成图片文件上传 CDN、修改用户头像操作。

#### 示例

```javascript
// 请确保已登录
const user = await authing.updateAvatar()
```

#### 返回值

- `Promise<User>`

## 发送邮件

AuthenticationClient().sendEmail(email, scene)

> 发送邮件

#### 参数

- `email` \<string\> 邮箱
- `scene` \<EmailScene\> 发送场景，可选值为 RESET_PASSWORD（发送重置密码邮件，邮件中包含验证码）、VerifyEmail（发送验证邮箱的邮件）、ChangeEmail（发送修改邮箱邮件，邮件中包含验证码）

#### 示例

```javascript
import { EmailScene } from 'authing-js-sdk'
authenticationClient.sendEmail('test@example.com', EmailScene.RESET_PASSWORD)
```

#### 返回值

- `Promise<CommonMessage>`

## 通过短信验证码重置密码

AuthenticationClient().resetPasswordByPhoneCode(phone, code, newPassword)

> 通过短信验证码重置密码，你需要先调用 sendSmsCode 接口发送重置密码邮件。

#### 参数

- `phone` \<string\> 手机号
- `code` \<string\> 验证码
- `newPassword` \<string\> 新的密码

#### 示例

```javascript
authenticationClient.resetPasswordByPhoneCode('176xxxx6754', '1234', 'passw0rd')
```

#### 返回值

- `Promise<CommonMessage>`

## 通过邮件验证码重置密码

AuthenticationClient().resetPasswordByEmailCode(phone, code, newPassword)

> 通过邮件验证码重置密码，你需要先调用 sendEmail 接口发送重置密码邮件。

#### 参数

- `phone` \<string\> 手机号
- `code` \<string\> 验证码
- `newPassword` \<string\> 新的密码

#### 示例

```javascript
authenticationClient.resetPasswordByEmailCode(
  'test@example.com',
  '1234',
  'passw0rd'
)
```

#### 返回值

- `Promise<CommonMessage>`

## 修改用户资料

AuthenticationClient().updateProfile(updates)

> 修改用户资料，此接口不能用于修改手机号、邮箱、密码，如果需要请调用 updatePhone、updateEmail、updatePassword 接口。

#### 参数

- `updates` \<UpdateUserInput\> 修改的用户资料
- `updates.username` \<string\> 用户名
- `updates.nickname` \<string\> 昵称
- `updates.photo` \<string\> 头像
- `updates.company` \<string\> 公司
- `updates.browser` \<string\> 浏览器
- `updates.device` \<string\> 设备
- `updates.lastIP` \<string\> 最近登录的 IP
- `updates.name` \<string\> Name
- `updates.givenName` \<string\> Given Name
- `updates.familyName` \<string\> Family Name
- `updates.middleName` \<string\> Middle Name
- `updates.profile` \<string\> Profile Url
- `updates.preferredUsername` \<string\> Preferred Name
- `updates.website` \<string\> 个人网站
- `updates.gender` \<string\> 性别, F 表示男性、W 表示女性、未知表示 U
- `updates.birthdate` \<string\> 生日
- `updates.zoneinfo` \<string\> 时区
- `updates.locale` \<string\> 语言
- `updates.address` \<string\> 地址
- `updates.streetAddress` \<string\> 街道地址
- `updates.locality` \<string\>
- `updates.region` \<string\> 地域
- `updates.postalCode` \<string\> 邮编
- `updates.city` \<string\> 城市
- `updates.province` \<string\> 省份
- `updates.country` \<string\> 国家

#### 示例

```javascript
authenticationClient.updateProfile({
  nickname: 'Nick',
  lastIp: '111.111.111.111',
})
```

#### 返回值

- `Promise<User>`

## 更新用户密码

AuthenticationClient().updatePassword(newPassword, oldPassword)

> 更新用户密码

#### 参数

- `newPassword` \<string\> 新密码
- `oldPassword` \<string\> 旧密码，如果用户没有设置密码，可以不填。

#### 示例

```javascript
authenticationClient.updatePassword('passw0rd') // 由手机号、社会化登录等其他方式注册的，首次没有设置密码，oldPassword 留空。
```

```javascript
authenticationClient.updatePassword('passw0rd', 'oldPassw0rd') // 用户之前设置了密码
```

#### 返回值

- `Promise<User>`

## 更新用户手机号

AuthenticationClient().updatePhone(phone, phoneCode, oldPhone, oldPhoneCode)

> 更新用户手机号。和修改邮箱一样，默认情况下，如果用户当前已经绑定了手机号，需要同时验证原有手机号（目前账号绑定的手机号）和当前邮箱（将要绑定的手机号）。
> 也就是说，用户 A 当前绑定的手机号为 15888888888，想修改为 15899999999，那么就需要同时验证这两个手机号。
> 开发者也可以选择不开启 “验证原有手机号“ ，可以在 {{$localeConfig.brandName}} 控制台 的 设置目录下的安全信息模块进行关闭。
> 用户首次绑定手机号请使用 bindPhone 接口。

#### 参数

- `phone` \<string\> 新手机号
- `phoneCode` \<string\> 新手机号的验证码
- `oldPhone` \<string\> 旧手机号
- `oldPhoneCode` \<string\> 旧手机号的验证码

#### 示例

```javascript
authenticationClient.updatePhone('176xxxx6754', '1234') // 关闭了“验证原有手机号“选项
```

```javascript
authenticationClient.updatePhone('176xxxx6754', '1234', '156xxxx9876', '1234') // 开启了“验证原有手机号“选项
```

#### 返回值

- `Promise<User>`

## 更新用户邮箱

AuthenticationClient().updateEmail(email, emailCode, oldEmail, oldEmailCode)

> 如果用户已经绑定了邮箱，默认情况下，需要同时验证原有邮箱（目前账号绑定的邮箱）和当前邮箱（将要绑定的邮箱）。也就是说，用户 A 当前绑定的邮箱为 123456@qq.com，想修改为 1234567@qq.com，那么就需要同时验证这两个邮箱。
> 开发者也可以选择不开启 “验证原有邮箱“ ，可以在 {{$localeConfig.brandName}} 控制台 的 设置目录下的安全信息模块进行关闭。
> 用户首次绑定手机号请使用 bindEmail 接口。

#### 参数

- `email` \<string\> 新邮箱
- `emailCode` \<string\> 新邮箱的验证码
- `oldEmail` \<string\> 旧邮箱
- `oldEmailCode` \<string\> 旧邮箱的验证码

#### 示例

```javascript
authenticationClient.updateEmail('test@example.com', '1234') // 关闭了“验证原有邮箱“选项
```

```javascript
authenticationClient.updateEmail(
  'test@example.com',
  '1234',
  'test2@example.com',
  '1234'
) // 开启了“验证原有邮箱“选项
```

#### 返回值

- `Promise<User>`

## 绑定社交账号

AuthenticationClient().linkAccount(options)

> 将一个社交账号绑定到一个主账号（手机号、邮箱账号）。

#### 参数

- `options.primaryUserToken` \<string\> 主账号 Token
- `options.secondaryUserToken` \<string\> 社交账号 Token

#### 示例

```javascript
authenticationClient.linkAccount({
  primaryUserToken: primaryUser.token,
  secondaryUserToken: secondaryUser.token,
})
```

#### 返回值

```json
{
  "code": 200,
  "message": "绑定成功"
}
```

## 刷新当前用户的 token

AuthenticationClient().refreshToken()

> 刷新当前用户的 token，调用此接口要求先登录。

#### 参数

#### 示例

```javascript
authenticationClient.updateEmail()
```

#### 返回值

- `Promise<RefreshToken>`

## 绑定手机号

AuthenticationClient().bindPhone(phone, phoneCode)

> 用户初次绑定手机号，如果需要修改手机号请使用 updatePhone 接口。

#### 参数

- `phone` \<string\>
- `phoneCode` \<string\>

#### 示例

```javascript
authenticationClient.bindPhone('176xxxx6754', '1234')
```

#### 返回值

- `Promise<User>`

## 解绑手机号

AuthenticationClient().unbindPhone()

> 用户解绑手机号

#### 参数

#### 示例

```javascript
authenticationClient.unbindPhone()
```

#### 返回值

- `Promise<User>`

## 获取当前登录的用户信息

AuthenticationClient().getCurrentUser()

> 获取当前登录的用户信息

#### 参数

#### 示例

```javascript
authenticationClient.getCurrentUser()
```

#### 返回值

- `Promise<User>`

## 退出登录

AuthenticationClient().logout()

> 退出登录，清空 localStorage 里的 user 和 token

#### 参数

#### 示例

```javascript
authenticationClient.logout()
```

#### 返回值

- `null`

## 获取用户所在组织机构

AuthenticationClient().listOrg()

> 获取用户所在的组织机构立碑，以及他所属的节点在此组织机构内的完整路径。

#### 参数

#### 示例

```javascript
const data = await authenticationClient.listOrgs()
```

#### 返回值

- `Promise<UserOrgList>`

## 使用 LDAP 用户名登录

AuthenticationClient().loginByLdap(username, password, options)

> 使用 LDAP 用户名登录。

如果你的用户池配置了登录失败检测，当同一 IP 下登录多次失败的时候会要求用户输入图形验证码（code 为 2000)。

#### 参数

- `username` \<string\> 用户名
- `password` \<string\> 密码
- `options` \<Object\>
- `options.autoRegister` \<boolean\> 是否自动注册。如果检测到用户不存在，会根据登录账密自动创建一个账号。
- `options.captchaCode` \<string\> 图形验证码
- `options.clientIp` \<string\> 客户端真实 IP，如果你在服务器端调用此接口，请务必将此参数设置为终端用户的真实 IP。

#### 示例

```javascript
const authenticationClient = new AuthenticationClient({
  appId: '应用 ID',
})

authenticationClient.loginByLdap('admin', 'admin')
```

#### 返回值

- `Promise<User>`

## 使用 AD 用户名登录

AuthenticationClient().loginByAd(username, password)

> 使用 AD 用户名登录。

#### 参数

- `username` \<string\> 用户名
- `password` \<string\> 密码

#### 示例

```javascript
const authenticationClient = new AuthenticationClient({
  appId: '应用 ID',
})

authenticationClient.loginByAd('admin', 'admin')
```

#### 返回值

- `Promise<User>`

## 计算密码安全等级

AuthenticationClient().computedPasswordSecurityLevel()

> 计算密码安全等级

#### 参数

`password`: 需要计算的密码，必须为 `string` 类型

#### 示例

```javascript
const authenticationClient = new AuthenticationClient({
  appId: '应用 ID',
  token: 'USER_TOKEN', // 使用用户的 token 初始化 SDK
})

const securityLevel = authenticationClient.computedPasswordSecurityLevel(
  'xxxxxxxx'
)
```

#### 示例数据

- `1`: 等级低
- `2`: 等级中
- `3`: 等级高

## 获取用户账号安全等级

AuthenticationClient().getSecurityLevel()

> 获取用户账号安全等级

#### 参数

无

#### 示例

```javascript
const authenticationClient = new AuthenticationClient({
  appId: '应用 ID',
  token: 'USER_TOKEN', // 使用用户的 token 初始化 SDK
})

const securityLevel = await authenticationClient.getSecurityLevel()
```

#### 示例数据

- `email`: \<boolean\>，是否绑定了邮箱
- `mfa`: \<boolean\>，是否绑定了个人 MFA
- `password`: \<boolean\>，是否设置了密码
- `phone`: \<boolean\>，是否绑定了手机号
- `passwordSecurityLevel`: \<number | null\>，密码安全登录，`null` 表示还没检测过密码安全等级
  - `1`: 低,
  - `2`: 中,
  - `3`: 高,
- `score`: \<number\>，账户安全等级总体评分，最高 100 分

## 获取用户被授权的所有资源列表

AuthenticationClient.listAuthorizedResources(namespace)

> 获取一个用户被授权的所有资源，用户被授权的所有资源里面包括从角色、分组、组织机构继承的资源。

#### 参数

- `namespace` \<string\> 权限分组的 code，详情请见[使用权限分组管理权限资源](/guides/access-control/resource-group.md)。

#### 示例

```javascript
authenticationClient.users.listAuthorizedResources('namespace_code')
```

#### 示例数据

- `type` 为资源类型，一共有以下几种资源类型
  - `DATA`: 数据类型；
  - `API`: API 类型数据；
  - `MENU`: 菜单类型数据；
  - `BUTTON`: 按钮类型数据；
- `code`: 资源描述符，如果是 `DATA` 类型资源，格式为 `resourceType:resourceId`，如 `books:*` 表示所有书籍，`books:1` 表示 ID 为 1 的书籍。
- `actions`: 用户被授权对该资源的操作。

```json
{
  "totalCount": 12,
  "list": [
    {
      "code": "menu_a",
      "type": "MENU"
    },
    {
      "code": "menu_b",
      "type": "MENU"
    },
    {
      "code": "books:1",
      "type": "DATA",
      "actions": ["books:delete", "books:update"]
    }
  ]
}
```

## Code 换 Token

AuthenticationClient.getAccessTokenByCode(code)

> 使用授权码 Code 获取用户的 Token 信息。

#### 参数

- `code` \<string\> 授权码 Code，用户在认证成功后，Authing 会将授权码 Code 发送到回调地址，详情请见[使用 OIDC 授权码模式](/federation/oidc/authorization-code)。

初始化 AuthenticationClient 时的参数：

- `appId` \<string\> 应用 ID，必填。
- `secret` \<string\> 应用密钥，必填。
- `domain` \<string\> 应用认证地址域名，不含 `https://`，必填。
- `redirectUri` \<string\> 业务回调 URL，必填。
- `protocol` \<string\> 协议类型，可选值为 `oidc`、`oauth`。
- `tokenEndPointAuthMethod` \<string\> 获取 token 端点验证方式，可选值为 `client_secret_post`、`client_secret_basic`、`none`，默认为 `client_secret_post`。
- `introspectionEndPointAuthMethod` \<string\> 检验 token 端点验证方式，可选值为 `client_secret_post`、`client_secret_basic`、`none`，默认为 `client_secret_post`。
- `revocationEndPointAuthMethod` \<string\> 撤回 token 端点验证方式，可选值为 `client_secret_post`、`client_secret_basic`、`none`，默认为 `client_secret_post`。

#### 示例

```javascript
const authenticationClient = new AuthenticationClient({
  appId: '应用 ID',
  secret: '应用密钥',
  redirectUri: '业务回调地址',
})
let res = await authenticationClient.getAccessTokenByCode('授权码 code')
```

#### 示例数据

```json
{
  "access_token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlRmTE90M0xibjhfYThwUk11ZXNzYW1xai1vM0RCQ3MxLW93SExRLVZNcVEifQ.eyJqdGkiOiJsdzg0NW5zdGcwS3EtMTlodVpQOHYiLCJzdWIiOiI1ZmY3MDFkODQ2YjkyMDNlMmY2YWM2ZjMiLCJpYXQiOjE2MTU4ODM1ODYsImV4cCI6MTYxNTg4NzE4Niwic2NvcGUiOiJlbWFpbCBvcGVuaWQgcHJvZmlsZSBwaG9uZSIsImlzcyI6Imh0dHBzOi8vb2lkYzEuYXV0aGluZy5jbi9vaWRjIiwiYXVkIjoiNWYxN2E1MjlmNjRmYjAwOWI3OTRhMmZmIn0.VvYKBcWcr8iIi1b37ugWQ9hsvog4_7EqDQyFqwhIuvM0NHlHH3Bhw83EQIKSNfbWV4nv3ihfeNGPLMzslbQr-wwjnWZTLMYl1bcn7IdVtD_kTN3Zz10MwF5td-VQ7UndU28wJ0HE1mo6E8QH93kYGckS5FSZXmCBa0M5H59Jec_a1MHI1MZrr_V9cZ9EfeF97V-PcqU8JVAwDZclCJ3mWY_Mb65RnMR9yEVqUZzJStmaXGMuRIzjkm2pklqt0CtQQJfzECXq_4USpwRXDiYLWILYPUCcO6hGxDjhMEd8IcxdG51TQP-w1UM6LyIRn61uSJvDsz8zg5dStDKyocypiA",
  "expires_in": 3600,
  "id_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3QzQDEyMy5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsInN1YiI6IjVmZjcwMWQ4NDZiOTIwM2UyZjZhYzZmMyIsImJpcnRoZGF0ZSI6bnVsbCwiZmFtaWx5X25hbWUiOm51bGwsImdlbmRlciI6IlUiLCJnaXZlbl9uYW1lIjpudWxsLCJsb2NhbGUiOm51bGwsIm1pZGRsZV9uYW1lIjpudWxsLCJuYW1lIjpudWxsLCJuaWNrbmFtZSI6bnVsbCwicGljdHVyZSI6Imh0dHBzOi8vZmlsZXMuYXV0aGluZy5jby9hdXRoaW5nLWNvbnNvbGUvZGVmYXVsdC11c2VyLWF2YXRhci5wbmciLCJwcmVmZXJyZWRfdXNlcm5hbWUiOm51bGwsInByb2ZpbGUiOm51bGwsInVwZGF0ZWRfYXQiOiIyMDIxLTAzLTE1VDA1OjU0OjU0LjY4NVoiLCJ3ZWJzaXRlIjpudWxsLCJ6b25laW5mbyI6bnVsbCwicGhvbmVfbnVtYmVyIjpudWxsLCJwaG9uZV9udW1iZXJfdmVyaWZpZWQiOmZhbHNlLCJub25jZSI6IjcwVEU3eW9NVFEiLCJhdF9oYXNoIjoiUFNnOGw5eDRldGxmLXA4UDdjYnVoQSIsImlzcyI6Imh0dHBzOi8vb2lkYzEuYXV0aGluZy5jbi9vaWRjIiwiaXNzMiI6Imh0dHBzOi8vYmFpZHUuY29tIiwiYXVkIjoiNWYxN2E1MjlmNjRmYjAwOWI3OTRhMmZmIiwiZXhwIjoxNjE1ODg3MTg3LCJpYXQiOjE2MTU4ODM1ODh9.OlX-FP7znIEqx0YpnOQ8kxadMe1toHDj1KPVm0dbEVc",
  "scope": "email openid profile phone",
  "token_type": "Bearer"
}
```

## Token 换用户信息

AuthenticationClient.getUserInfoByAccessToken('access_token')

> 使用 Access token 获取用户信息。

#### 参数

- `access_token` \<string\> Access token，使用授权码 Code 换取的 Access token 的内容。详情请见[使用 OIDC 授权码模式](/federation/oidc/authorization-code)。

初始化 AuthenticationClient 时的参数：

- `appId` \<string\> 应用 ID，必填。
- `secret` \<string\> 应用密钥，必填。
- `domain` \<string\> 应用认证地址域名，不含 `https://`，必填。
- `redirectUri` \<string\> 业务回调 URL，必填。
- `protocol` \<string\> 协议类型，可选值为 `oidc`、`oauth`。
- `tokenEndPointAuthMethod` \<string\> 获取 token 端点验证方式，可选值为 `client_secret_post`、`client_secret_basic`、`none`，默认为 `client_secret_post`。
- `introspectionEndPointAuthMethod` \<string\> 检验 token 端点验证方式，可选值为 `client_secret_post`、`client_secret_basic`、`none`，默认为 `client_secret_post`。
- `revocationEndPointAuthMethod` \<string\> 撤回 token 端点验证方式，可选值为 `client_secret_post`、`client_secret_basic`、`none`，默认为 `client_secret_post`。

#### 示例

```javascript
const authenticationClient = new AuthenticationClient({
  appId: '应用 ID',
  secret: '应用密钥',
  redirectUri: '业务回调地址',
})
let res = await authenticationClient.getUserInfoByAccessToken('Access token')
```

#### 示例数据

```json
{
  "address": {
    "country": null,
    "postal_code": null,
    "region": null,
    "formatted": null
  },
  "birthdate": null,
  "family_name": null,
  "gender": "U",
  "given_name": null,
  "locale": null,
  "middle_name": null,
  "name": null,
  "nickname": null,
  "picture": "https://files.authing.co/authing-console/default-user-avatar.png",
  "preferred_username": null,
  "profile": null,
  "updated_at": "2021-03-03T06:17:14.485Z",
  "website": null,
  "zoneinfo": null,
  "email": "test1@authing.cn",
  "email_verified": false,
  "sub": "603f184cec4505e2868431fc",
  "phone_number": null,
  "phone_number_verified": false
}
```

## Client Credentials 模式获取 Access Token

AuthenticationClient.getAccessTokenByClientCredentials(scope, options)

> 使用编程访问账号获取具备权限的 Access Token。

#### 参数

- `scope` \<string\> 权限项目，空格分隔的字符串，每一项代表一个权限。详情请见[机器间（M2M）授权](/guides/authorization/m2m-authz.html#获取具备权限的-accesstoken)。
- `options`，编程访问账号的 AK 与 SK 信息。
- `options.accessKey`，编程访问账号 AccessKey。
- `options.secretKey`，编程访问账号 SecretKey。

初始化 AuthenticationClient 时的参数：

- `appId` \<string\> 应用 ID，必填。
- `secret` \<string\> 应用密钥，必填。
- `domain` \<string\> 应用认证地址域名，不含 `https://`，必填。
- `redirectUri` \<string\> 业务回调 URL，必填。
- `protocol` \<string\> 协议类型，可选值为 `oidc`、`oauth`。
- `tokenEndPointAuthMethod` \<string\> 获取 token 端点验证方式，可选值为 `client_secret_post`、`client_secret_basic`、`none`，默认为 `client_secret_post`。
- `introspectionEndPointAuthMethod` \<string\> 检验 token 端点验证方式，可选值为 `client_secret_post`、`client_secret_basic`、`none`，默认为 `client_secret_post`。
- `revocationEndPointAuthMethod` \<string\> 撤回 token 端点验证方式，可选值为 `client_secret_post`、`client_secret_basic`、`none`，默认为 `client_secret_post`。

#### 示例

```javascript
const authenticationClient = new AuthenticationClient({
  appId: '应用 ID',
  secret: '应用密钥',
  redirectUri: '业务回调地址',
})
let res = await authenticationClient.getAccessTokenByClientCredentials('email openid profile phone', { accessKey: '编程访问账号 AK', secretKey: '编程访问账号 SK' })
```

#### 示例数据

```json
{
  "access_token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlRmTE90M0xibjhfYThwUk11ZXNzYW1xai1vM0RCQ3MxLW93SExRLVZNcVEifQ.eyJqdGkiOiJsdzg0NW5zdGcwS3EtMTlodVpQOHYiLCJzdWIiOiI1ZmY3MDFkODQ2YjkyMDNlMmY2YWM2ZjMiLCJpYXQiOjE2MTU4ODM1ODYsImV4cCI6MTYxNTg4NzE4Niwic2NvcGUiOiJlbWFpbCBvcGVuaWQgcHJvZmlsZSBwaG9uZSIsImlzcyI6Imh0dHBzOi8vb2lkYzEuYXV0aGluZy5jbi9vaWRjIiwiYXVkIjoiNWYxN2E1MjlmNjRmYjAwOWI3OTRhMmZmIn0.VvYKBcWcr8iIi1b37ugWQ9hsvog4_7EqDQyFqwhIuvM0NHlHH3Bhw83EQIKSNfbWV4nv3ihfeNGPLMzslbQr-wwjnWZTLMYl1bcn7IdVtD_kTN3Zz10MwF5td-VQ7UndU28wJ0HE1mo6E8QH93kYGckS5FSZXmCBa0M5H59Jec_a1MHI1MZrr_V9cZ9EfeF97V-PcqU8JVAwDZclCJ3mWY_Mb65RnMR9yEVqUZzJStmaXGMuRIzjkm2pklqt0CtQQJfzECXq_4USpwRXDiYLWILYPUCcO6hGxDjhMEd8IcxdG51TQP-w1UM6LyIRn61uSJvDsz8zg5dStDKyocypiA",
  "expires_in": 3600,
  "scope": "email openid profile phone",
  "token_type": "Bearer"
}
```

## 拼接 OIDC、OAuth 2.0、SAML、CAS 协议授权链接

AuthenticationClient.buildAuthorizeUrl(options)

> 生成 OIDC、OAuth 2.0、SAML、CAS 协议的用户登录链接

#### 参数

- `options` \<object\> 发起授权登录时需要填写的参数。详情请见[使用 OIDC 授权码模式](/federation/oidc/authorization-code/)、[使用 OAuth2.0 授权码模式](/federation/oauth2/authorization-code/)。
- `options.scope` \<string\> 请求的权限项目，选填，OIDC 协议默认为 `openid profile email phone address`，OAuth 2.0 协议默认为 `user`。
- `options.nonce` \<string\> 随机字符串，选填，默认自动生成。
- `options.state` \<string\> 随机字符串，选填，默认自动生成。
- `options.responseMode` \<string\> 响应类型，选填，可选值为 `query`、`fragment`、`form_post` 默认为 `query`，即通过浏览器重定向发送 code 到回调地址。
- `options.responseType` \<string\> 响应类型，选填，可选值为 `code`、`code id_token token`、`code id_token`、`code id_token`、`code token`、`id_token token`、`id_token`、`none` 默认为 `code`，授权码模式。
- `options.redirectUri` \<string\> 回调地址，选填，默认为 SDK 初始化时的 redirectUri 参数。
- `options.appId` \<string\> 应用 ID，选填，默认为 SDK 初始化时的 appId 参数。

初始化 AuthenticationClient 时的参数：

- `appId` \<string\> 应用 ID，必填。
- `secret` \<string\> 应用密钥，必填。
- `domain` \<string\> 应用认证地址域名，不含 `https://`，必填。
- `redirectUri` \<string\> 业务回调 URL，必填。
- `protocol` \<string\> 协议类型，可选值为 `oidc`、`oauth`、`saml`、`cas`。
- `tokenEndPointAuthMethod` \<string\> 获取 token 端点验证方式，可选值为 `client_secret_post`、`client_secret_basic`、`none`，默认为 `client_secret_post`。
- `introspectionEndPointAuthMethod` \<string\> 检验 token 端点验证方式，可选值为 `client_secret_post`、`client_secret_basic`、`none`，默认为 `client_secret_post`。
- `revocationEndPointAuthMethod` \<string\> 撤回 token 端点验证方式，可选值为 `client_secret_post`、`client_secret_basic`、`none`，默认为 `client_secret_post`。


#### 示例

```javascript
// 拼接 OIDC 授权链接
const authenticationClient = new AuthenticationClient({
  appId: '应用 ID',
  secret: '应用密钥',
  domain: '应用认证域名',
  redirectUri: '业务回调地址',
})
let url = client.buildAuthorizeUrl({ scope:'openid profile offline_access' })

// 拼接 OAuth2.0 授权链接
const authenticationClient2 = new AuthenticationClient({
  appId: '应用 ID',
  secret: '应用密钥',
  domain: '应用认证域名',
  redirectUri: '业务回调地址',
  protocol: 'oauth'
})
let url = client.buildAuthorizeUrl({ scope:'user' })

// 拼接 SAML 登录链接
const authenticationClient3 = new AuthenticationClient({
  appId: '应用 ID',
  secret: '应用密钥',
  domain: '应用认证域名',
  protocol: 'saml'
})
let url = client.buildAuthorizeUrl()

// 拼接 CAS 登录链接
const authenticationClient4 = new AuthenticationClient({
  appId: '应用 ID',
  secret: '应用密钥',
  domain: '应用认证域名',
  protocol: 'cas'
})
let url = client.buildAuthorizeUrl({ service: 'service 地址' })
```

#### 示例数据

```http
https://oidc1.authing.cn/oidc/auth?nonce=5485323897342262&state=7400704296715694&scope=openid+profile+offline_access&client_id=5f17a529f64fb009b794a2ff&response_mode=query&redirect_uri=https%3A%2F%2Fbaidu.com&response_type=code&prompt=consent
```

## 刷新 Access Token

AuthenticationClient.getNewAccessTokenByRefreshToken(refreshToken)

> 使用 Refresh token 获取新的 Access token。

#### 参数

- `refreshToken` \<string\> Refresh token，可以从 AuthenticationClient.getAccessTokenByCode 方法的返回值中的 refresh_token 获得。详情请见[刷新 Access token](/guides/federation/oidc.md#刷新-access-token)。

初始化 AuthenticationClient 时的参数：

- `appId` \<string\> 应用 ID，必填。
- `secret` \<string\> 应用密钥，必填。
- `domain` \<string\> 应用认证地址域名，不含 `https://`，必填。
- `redirectUri` \<string\> 业务回调 URL，必填。
- `protocol` \<string\> 协议类型，可选值为 `oidc`、`oauth`。
- `tokenEndPointAuthMethod` \<string\> 获取 token 端点验证方式，可选值为 `client_secret_post`、`client_secret_basic`、`none`，默认为 `client_secret_post`。
- `introspectionEndPointAuthMethod` \<string\> 检验 token 端点验证方式，可选值为 `client_secret_post`、`client_secret_basic`、`none`，默认为 `client_secret_post`。
- `revocationEndPointAuthMethod` \<string\> 撤回 token 端点验证方式，可选值为 `client_secret_post`、`client_secret_basic`、`none`，默认为 `client_secret_post`。

#### 示例

```javascript
const authenticationClient = new AuthenticationClient({
  appId: '应用 ID',
  secret: '应用密钥',
  domain: '应用认证域名',
  redirectUri: '业务回调地址',
})
let res = await authenticationClient.getNewAccessTokenByRefreshToken('Access token')
```

#### 示例数据

```json
{
  "access_token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlRmTE90M0xibjhfYThwUk11ZXNzYW1xai1vM0RCQ3MxLW93SExRLVZNcVEifQ.eyJqdGkiOiJZUHB4NUVEWGlQWVJvNUFQWXAzci0iLCJzdWIiOiI1ZmY3MDFkODQ2YjkyMDNlMmY2YWM2ZjMiLCJpYXQiOjE2MTQwOTE0OTksImV4cCI6MTYxNDA5NTA5OSwic2NvcGUiOiJvZmZsaW5lX2FjY2VzcyBwcm9maWxlIG9wZW5pZCIsImlzcyI6Imh0dHBzOi8vb2lkYzEuYXV0aGluZy5jbi9vaWRjIiwiYXVkIjoiNWYxN2E1MjlmNjRmYjAwOWI3OTRhMmZmIn0.ZN_SlfVg1oNMz7uAK-5K84dqqqmlZehmAPOLytOR9HnLHImKJ9VO5u1hRsAjGCob0kMUV5wVxQhX3EFks7FtMamiX2Jvn-NYh4V_5T6l3LFf4uoKF6AykAg483nG3EEENuGgQo15bBszsoCGqFnNmUd0T4Cgxx0zbxXPxMdp_dcE14KzmNz1w-Qg3yVeYmSTZFdcLtZA2BYnVEa7LYA2yA3DgawwAcRmrlyEfnvCO3uY2TcsTKEAfQ-QgVIGRWOfyUE5f-_X3TolliO1fXnwZBdxEKMXLGW5E2bPVcePyiV0upYbUnQ079UxBlEiWlgeW_rpkTPXDxHAgiE488gtlg",
  "expires_in": 3600,
  "id_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZmY3MDFkODQ2YjkyMDNlMmY2YWM2ZjMiLCJiaXJ0aGRhdGUiOm51bGwsImZhbWlseV9uYW1lIjpudWxsLCJnZW5kZXIiOiJVIiwiZ2l2ZW5fbmFtZSI6bnVsbCwibG9jYWxlIjpudWxsLCJtaWRkbGVfbmFtZSI6bnVsbCwibmFtZSI6bnVsbCwibmlja25hbWUiOm51bGwsInBpY3R1cmUiOiJodHRwczovL2ZpbGVzLmF1dGhpbmcuY28vYXV0aGluZy1jb25zb2xlL2RlZmF1bHQtdXNlci1hdmF0YXIucG5nIiwicHJlZmVycmVkX3VzZXJuYW1lIjpudWxsLCJwcm9maWxlIjpudWxsLCJ1cGRhdGVkX2F0IjoiMjAyMS0wMi0yM1QxNDo0NDoxOC4wODVaIiwid2Vic2l0ZSI6bnVsbCwiem9uZWluZm8iOm51bGwsImF0X2hhc2giOiIxaWRJSUxaWExpZkRscXJMY3ZNeV9BIiwiS0VZIjoiVkFMVUUiLCJhdWQiOiI1ZjE3YTUyOWY2NGZiMDA5Yjc5NGEyZmYiLCJleHAiOjE2MTQwOTUwOTgsImlhdCI6MTYxNDA5MTQ5OSwiaXNzIjoiaHR0cHM6Ly9vaWRjMS5hdXRoaW5nLmNuL29pZGMifQ._H59237sqpsY0OgyY_RM7CvuG6cFo1x03y-DBhd5hik",
  "refresh_token": "3T49f4Y48szoMmwBXragjqLwQZC4QhgnsM5Oy2WfmU-",
  "scope": "openid offline_access profile",
  "token_type": "Bearer"
}
```

## 检查 Access Token

AuthenticationClient.introspectToken(token)

> 检查 Access token 或 Refresh token 的状态。

#### 参数

- `token` \<string\> Access token 或 Refresh token，可以从 AuthenticationClient.getAccessTokenByCode 方法的返回值中的 access_token、refresh_token 获得。

初始化 AuthenticationClient 时的参数：

- `appId` \<string\> 应用 ID，必填。
- `secret` \<string\> 应用密钥，必填。
- `domain` \<string\> 应用认证地址域名，不含 `https://`，必填。
- `redirectUri` \<string\> 业务回调 URL，必填。
- `protocol` \<string\> 协议类型，可选值为 `oidc`、`oauth`。
- `tokenEndPointAuthMethod` \<string\> 获取 token 端点验证方式，可选值为 `client_secret_post`、`client_secret_basic`、`none`，默认为 `client_secret_post`。
- `introspectionEndPointAuthMethod` \<string\> 检验 token 端点验证方式，可选值为 `client_secret_post`、`client_secret_basic`、`none`，默认为 `client_secret_post`。
- `revocationEndPointAuthMethod` \<string\> 撤回 token 端点验证方式，可选值为 `client_secret_post`、`client_secret_basic`、`none`，默认为 `client_secret_post`。

#### 示例

```javascript
const authenticationClient = new AuthenticationClient({
  appId: '应用 ID',
  secret: '应用密钥',
  domain: '应用认证域名',
  redirectUri: '业务回调地址',
})
let res = await authenticationClient.introspectToken('Access token 或 Refresh token')
```

#### 示例数据

Token 合法时返回：

```json
{
  "active": true,
  "sub": "60097f4d5bc08f75da104d18",
  "client_id": "60097391b1358c17c5fb0f4e",
  "exp": 1612445888,
  "iat": 1611236288,
  "iss": "https://core.littleimp.cn/oidc",
  "jti": "TV4J0gAbe4KR4-8CtYcOa",
  "scope": "openid profile email phone offline_access",
  "token_type": "Bearer"
}
```

Token 不合法时返回：

```json
{
  "active": true
}
```

检验过程失败会抛出错误。

## 撤回 Access Token

AuthenticationClient.revokeToken(token)

> 撤回 Access token 或 Refresh token。

#### 参数

- `token` \<string\> Access token 或 Refresh token，可以从 AuthenticationClient.getAccessTokenByCode 方法的返回值中的 access_token、refresh_token 获得。

初始化 AuthenticationClient 时的参数：

- `appId` \<string\> 应用 ID，必填。
- `secret` \<string\> 应用密钥，必填。
- `domain` \<string\> 应用认证地址域名，不含 `https://`，必填。
- `redirectUri` \<string\> 业务回调 URL，必填。
- `protocol` \<string\> 协议类型，可选值为 `oidc`、`oauth`。
- `tokenEndPointAuthMethod` \<string\> 获取 token 端点验证方式，可选值为 `client_secret_post`、`client_secret_basic`、`none`，默认为 `client_secret_post`。
- `introspectionEndPointAuthMethod` \<string\> 检验 token 端点验证方式，可选值为 `client_secret_post`、`client_secret_basic`、`none`，默认为 `client_secret_post`。
- `revocationEndPointAuthMethod` \<string\> 撤回 token 端点验证方式，可选值为 `client_secret_post`、`client_secret_basic`、`none`，默认为 `client_secret_post`。

#### 示例

```javascript
const authenticationClient = new AuthenticationClient({
  appId: '应用 ID',
  secret: '应用密钥',
  domain: '应用认证域名',
  redirectUri: '业务回调地址',
})
let res = await authenticationClient.revokeToken('Access token 或 Refresh token')
```

#### 示例数据

撤回成功时返回 true。

撤回失败时抛出错误。

## 检验 CAS 1.0 Ticket 合法性

AuthenticationClient.validateTicketV1(ticket)

> 检验 CAS 1.0 Ticket 合法性。

#### 参数

- `ticket` \<string\> CAS 认证成功后，Authing 颁发的 ticket。

初始化 AuthenticationClient 时的参数：

- `appId` \<string\> 应用 ID，必填。
- `secret` \<string\> 应用密钥，必填。
- `domain` \<string\> 应用认证地址域名，不含 `https://`，必填。
- `redirectUri` \<string\> 业务回调 URL，必填。
- `protocol` \<string\> 协议类型，可选值为 `oidc`、`oauth`。
- `tokenEndPointAuthMethod` \<string\> 获取 token 端点验证方式，可选值为 `client_secret_post`、`client_secret_basic`、`none`，默认为 `client_secret_post`。
- `introspectionEndPointAuthMethod` \<string\> 检验 token 端点验证方式，可选值为 `client_secret_post`、`client_secret_basic`、`none`，默认为 `client_secret_post`。
- `revocationEndPointAuthMethod` \<string\> 撤回 token 端点验证方式，可选值为 `client_secret_post`、`client_secret_basic`、`none`，默认为 `client_secret_post`。

#### 示例

```javascript
const authenticationClient = new AuthenticationClient({
  appId: '应用 ID',
  secret: '应用密钥',
  domain: '应用认证域名',
  redirectUri: '业务回调地址',
})
let res = await authenticationClient.validateTicketV1('ticket 内容')
```

#### 示例数据

ticket 合法时返回：

```json
{
  "valid": true,
  "username": "user1"
}
```

ticket 不合法时返回：

```json
{
  "valid": false,
  "message": "ticket 不合法"
}
```

## 拼接登出 URL

AuthenticationClient.buildLogoutUrl(options)

> 拼接登出 URL。

#### 参数

- `options` \<string\> 登出配置项。
- `expert` \<boolean\> 是否开启专家模式，默认为 `false`。
- `redirectUri` \<string\> 登出后的重定向地址。
- `idToken` \<string\> 用户的 idToken。


初始化 AuthenticationClient 时的参数：

- `appId` \<string\> 应用 ID，必填。
- `secret` \<string\> 应用密钥，必填。
- `domain` \<string\> 应用认证地址域名，不含 `https://`，必填。
- `redirectUri` \<string\> 业务回调 URL，必填。
- `protocol` \<string\> 协议类型，可选值为 `oidc`、`oauth`。
- `tokenEndPointAuthMethod` \<string\> 获取 token 端点验证方式，可选值为 `client_secret_post`、`client_secret_basic`、`none`，默认为 `client_secret_post`。
- `introspectionEndPointAuthMethod` \<string\> 检验 token 端点验证方式，可选值为 `client_secret_post`、`client_secret_basic`、`none`，默认为 `client_secret_post`。
- `revocationEndPointAuthMethod` \<string\> 撤回 token 端点验证方式，可选值为 `client_secret_post`、`client_secret_basic`、`none`，默认为 `client_secret_post`。

#### 示例

```javascript
// 拼接前端万能登出链接
const authenticationClient = new AuthenticationClient({
  appId: '应用 ID',
  secret: '应用密钥',
  domain: '应用认证域名',
  redirectUri: '业务回调地址',
  protocol: 'oidc'
})
let res = authenticationClient.buildLogoutUrl({ redirectUri: 'https://authing.cn' })

// 拼接 cas 登出链接
const authenticationClient2 = new AuthenticationClient({
  appId: '应用 ID',
  secret: '应用密钥',
  domain: '应用认证域名',
  redirectUri: '业务回调地址',
  protocol: 'cas'
})
let res2 = authenticationClient.buildLogoutUrl({ redirectUri: 'https://authing.cn' })

// 拼接符合 OIDC 协议标准的登出链接
const authenticationClient = new AuthenticationClient({
  appId: '应用 ID',
  secret: '应用密钥',
  domain: '应用认证域名',
  redirectUri: '业务回调地址',
  protocol: 'oidc'
})
let res = authenticationClient.buildLogoutUrl({ expert: true, idToken: '待退出用户的 idToken', redirectUri: 'https://authing.cn' })

```

#### 示例数据

ticket 合法时返回：

```json
{
  "valid": true,
  "username": "user1"
}
```

ticket 不合法时返回：

```json
{
  "valid": false,
  "message": "ticket 不合法"
}
```
