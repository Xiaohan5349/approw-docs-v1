# 管理用户

<LastUpdated/>

> {{$localeConfig.brandName}} 用户管理模块。

此模块可以进行用户目录增删改查、搜索用户、刷新用户 token、管理用户分组、管理用户角色、管理用户策略授权等操作。

请使用以下方式使用该模块：

```javascript
import { ManagementClient } from 'authing-js-sdk'
const managementClient = new ManagementClient({
  userPoolId: 'YOUR_USERPOOL_ID',
  secret: 'YOUR_USERPOOL_SECRET',
})

managementClient.users.list // 获取用户列表
managementClient.users.create // 创建用户
managementClient.users.listRoles // 获取用户角色列表
managementClient.users.search // 搜索用户
```

## 创建用户

UsersManagementClient().create(userInfo)

> 此接口将以管理员身份创建用户，不需要进行手机号验证码检验等安全检测。

#### 参数

- `userInfo` \<CreateUserInput\> 用户资料
- `userInfo.email` \<string\> 邮箱，用户池内唯一
- `userInfo.emailVerified` \<boolean\> 邮箱是否已验证
- `userInfo.phone` \<string\> 手机号
- `userInfo.phoneVerified` \<boolean\> 手机号是否验证
- `userInfo.unionid` \<string\> 以社会化登录的用户该字段为用户在第三方社会化登录服务商中的唯一 ID
- `userInfo.openid` \<string\> 微信登录返回的 openid
- `userInfo.password` \<string\> 密码
- `userInfo.registerSource` \<string\> 注册来源，可以多选
- `userInfo.username` \<string\> 用户名
- `userInfo.nickname` \<string\> 昵称
- `userInfo.photo` \<string\> 头像
- `userInfo.company` \<string\> 公司
- `userInfo.browser` \<string\> 浏览器
- `userInfo.loginsCount` \<number\> 登录次数，当你从原有用户系统迁移到 {{$localeConfig.brandName}} 时可以设置该字段。
- `userInfo.lastLogin` \<string\> 上次登录时间, 符合 ISO8601 格式的时间字符串。(如 "2017-06-07T14:34:08.700Z", "2017-06-07T14:34:08.700 or "2017-06-07T14:34:08+04:00")
- `userInfo.lastIP` \<string\> 用户最近一次登录（或其他活动）的 IP
- `userInfo.signedUp` \<string\> 注册时间，符合 ISO8601 格式的时间字符串。(如 "2017-06-07T14:34:08.700Z", "2017-06-07T14:34:08.700 or "2017-06-07T14:34:08+04:00")
- `userInfo.blocked` \<boolean\> 账号是否被禁用
- `userInfo.isDeleted` \<boolean\> 标记账号是否被删除
- `userInfo.device` \<string\> 设备
- `userInfo.lastIP` \<string\> 最近登录的 IP
- `userInfo.name` \<string\> Name
- `userInfo.givenName` \<string\> Given Name
- `userInfo.familyName` \<string\> Family Name
- `userInfo.middleName` \<string\> Middle Name
- `userInfo.profile` \<string\> Profile Url
- `userInfo.preferredUsername` \<string\> Preferred Name
- `userInfo.website` \<string\> 个人网站
- `userInfo.gender` \<string\> 性别, F 表示男性、W 表示女性、未知表示 U
- `userInfo.birthdate` \<string\> 生日
- `userInfo.zoneinfo` \<string\> 时区
- `userInfo.locale` \<string\> 语言
- `userInfo.address` \<string\> 地址
- `userInfo.streetAddress` \<string\> 街道地址
- `userInfo.locality` \<string\>
- `userInfo.region` \<string\> 地域
- `userInfo.postalCode` \<string\> 邮编
- `userInfo.city` \<string\> 城市
- `userInfo.province` \<string\> 省份
- `userInfo.country` \<string\> 国家

#### 示例

```javascript
const user = await managementClient.users.create({
  username: 'bob',
  password: 'passw0rd',
})
```

```javascript
const user = await managementClient.users.create({
   nickname: 'Nick',
   phone: '176xxxx6754', // 由于是管理员操作，所以检验手机号验证码, 如果你需要检验，请使用  AuthenticationClient
   loginsCount: 2 // 原有用户系统记录的用户登录次数
   signedUp: '2020-10-15T17:55:37+08:00' // 原有用户系统记录的用户注册时间
})
```

#### 返回值

- `Promise<User>`

#### 示例数据

```json
{
  "id": "604a12a261a85949c8ad0259",
  "arn": "arn:cn:authing:604a12a22d45ab775db56160:user:604a12a261a85949c8ad0259",
  "userPoolId": "604a12a22d45ab775db56160",
  "status": "Activated",
  "username": "test",
  "email": null,
  "emailVerified": false,
  "phone": null,
  "phoneVerified": false,
  "unionid": null,
  "openid": null,
  "nickname": null,
  "registerSource": ["unknown"],
  "photo": "https://files.authing.co/authing-console/default-user-avatar.png",
  "password": null,
  "oauth": null,
  "token": null,
  "tokenExpiredAt": null,
  "loginsCount": 0,
  "lastLogin": null,
  "lastIP": null,
  "signedUp": "2021-03-11T20:52:50+08:00",
  "blocked": false,
  "isDeleted": false,
  "device": null,
  "browser": null,
  "company": null,
  "name": null,
  "givenName": null,
  "familyName": null,
  "middleName": null,
  "profile": null,
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
  "city": null,
  "province": null,
  "country": null,
  "createdAt": "2021-03-11T20:52:50+08:00",
  "updatedAt": "2021-03-11T20:52:50+08:00",
  "externalId": null
}
```

## 修改用户资料

UsersManagementClient \*().update(id, updates)

> 修改用户资料

#### 参数

- `id` \<string\> 用户 ID
- `updates` \<UpdateUserInput\> 修改的用户资料
- `updates.email` \<string\> 邮箱
- `updates.emailVerified` \<boolean\> 邮箱是否已验证
- `updates.phone` \<string\> 手机号
- `updates.phoneVerified` \<boolean\> 手机号是否验证
- `updates.unionid` \<string\> 以社会化登录的用户该字段为用户在第三方社会化登录服务商中的唯一 ID
- `updates.openid` \<string\> 微信登录返回的 openid
- `updates.password` \<string\> 密码
- `updates.registerSource` \<string\> 注册来源，可以多选
- `updates.tokenExpiredAt` \<string\> token 过期时间，符合 ISO8601 格式的时间字符串。(如 "2017-06-07T14:34:08.700Z", "2017-06-07T14:34:08.700 or "2017-06-07T14:34:08+04:00")。
  将该字段设置为小于当前时间可以让用户的 token 失效。
- `updates.username` \<string\> 用户名
- `updates.nickname` \<string\> 昵称
- `updates.photo` \<string\> 头像
- `updates.company` \<string\> 公司
- `updates.browser` \<string\> 浏览器
- `updates.loginsCount` \<number\> 登录次数，当你从原有用户系统迁移到 {{$localeConfig.brandName}} 时可以设置该字段。
- `updates.lastLogin` \<string\> 上次登录时间, 符合 ISO8601 格式的时间字符串。(如 "2017-06-07T14:34:08.700Z", "2017-06-07T14:34:08.700 or "2017-06-07T14:34:08+04:00")
- `updates.lastIP` \<string\> 用户最近一次登录（或其他活动）的 IP
- `updates.signedUp` \<string\> 注册时间，符合 ISO8601 格式的时间字符串。(如 "2017-06-07T14:34:08.700Z", "2017-06-07T14:34:08.700 or "2017-06-07T14:34:08+04:00")
- `updates.blocked` \<boolean\> 账号是否被禁用
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
const user = await managementClient.users.update('USERID', {
  nickname: 'Nick',
})
```

```javascript
const user = await managementClient.users.update('USERID', {
  nickname: 'Nick',
  phone: '176xxxx6754', // 由于是管理员操作，所以检验手机号验证码, 如果你需要检验，请使用  AuthenticationClient
  tokenExpiredAt: '2020-10-15T17:55:37+08:00',
})
```

#### 返回值

- `Promise<User>`

#### 示例数据

```json
{
  "id": "604a12a261a85949c8ad0259",
  "arn": "arn:cn:authing:604a12a22d45ab775db56160:user:604a12a261a85949c8ad0259",
  "userPoolId": "604a12a22d45ab775db56160",
  "status": "Activated",
  "username": "test",
  "email": null,
  "emailVerified": false,
  "phone": null,
  "phoneVerified": false,
  "unionid": null,
  "openid": null,
  "nickname": null,
  "registerSource": ["unknown"],
  "photo": "https://files.authing.co/authing-console/default-user-avatar.png",
  "password": null,
  "oauth": null,
  "token": null,
  "tokenExpiredAt": null,
  "loginsCount": 0,
  "lastLogin": null,
  "lastIP": null,
  "signedUp": "2021-03-11T20:52:50+08:00",
  "blocked": false,
  "isDeleted": false,
  "device": null,
  "browser": null,
  "company": null,
  "name": null,
  "givenName": null,
  "familyName": null,
  "middleName": null,
  "profile": null,
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
  "city": null,
  "province": null,
  "country": null,
  "createdAt": "2021-03-11T20:52:50+08:00",
  "updatedAt": "2021-03-11T20:52:50+08:00",
  "externalId": null
}
```

## 获取用户详情

UsersManagementClient().detail(userId)

> 通过用户 ID 获取用户详情，如果你想通过 token 获取用户详情，请使用 AuthenticationClient SDK 。

#### 参数

- `userId` \<string\> 用户 ID

#### 示例

```javascript
const user = await managementClient.users.detail('USERID')
```

#### 返回值

- `Promise<User>`

#### 示例数据

```json
{
  "id": "604a12a261a85949c8ad0259",
  "arn": "arn:cn:authing:604a12a22d45ab775db56160:user:604a12a261a85949c8ad0259",
  "userPoolId": "604a12a22d45ab775db56160",
  "status": "Activated",
  "username": "test",
  "email": null,
  "emailVerified": false,
  "phone": null,
  "phoneVerified": false,
  "identities": [],
  "unionid": null,
  "openid": null,
  "nickname": null,
  "registerSource": ["unknown"],
  "photo": "https://files.authing.co/authing-console/default-user-avatar.png",
  "password": null,
  "oauth": null,
  "token": null,
  "tokenExpiredAt": null,
  "loginsCount": 0,
  "lastLogin": null,
  "lastIP": null,
  "signedUp": "2021-03-11T20:52:50+08:00",
  "blocked": false,
  "isDeleted": false,
  "device": null,
  "browser": null,
  "company": null,
  "name": null,
  "givenName": null,
  "familyName": null,
  "middleName": null,
  "profile": null,
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
  "city": null,
  "province": null,
  "country": null,
  "createdAt": "2021-03-11T20:52:50+08:00",
  "updatedAt": "2021-03-11T20:52:50+08:00",
  "externalId": null
}
```

## 获取自定义数据

UsersManagementClient().getUdfValue(userId)

> 获取用户的自定义数据。你需要先在用户池[定义用户自定义数据元信息](/guides/users/user-defined-field/)。

#### 参数

- `userId` \<string\> 用户 ID

#### 示例

```javascript
const data = await managementClient.users.getUdfValue('USER_ID')
```

#### 示例数据

```json
{
  "school": "华中科技大学",
  "age": 20
}
```

## 批量获取自定义数据

UsersManagementClient().getUdfValueBatch(userIds)

> 批量获取多个用户的自定义数据。你需要先在用户池[定义用户自定义数据元信息](/guides/users/user-defined-field/)。

#### 参数

- `userIds` \<string\> 用户 ID 列表

#### 示例

```javascript
const data = await managementClient.users.getUdfValueBatch([
  'USER_ID1',
  'USER_ID2',
])
```

#### 示例数据

```json
{
  "USER_ID1": {
    "school": "华中科技大学",
    "age": 20
  },
  "USER_ID2": {
    "school": "北京大学",
    "age": 21
  }
}
```

## 设置自定义数据

UsersManagementClient().setUdfValue(userId, data)

> 设置用户的自定义数据。你需要先在用户池[定义用户自定义数据元信息](/guides/users/user-defined-field/)，且传入值的类型必须和定义的类型匹配。如果设置失败，会抛出异常，你需要对异常进行捕捉。

#### 参数

- `userId` \<string\> 用户 ID
- `data` \<KeyValuePair>\ 自定义字段数据，类型为一个对象。

#### 示例

```javascript
await managementClient.users.setUdfValue(userId, {
  school: '华中科技大学',
  age: 20,
})
```

## 批量设置自定义数据

UsersManagementClient().setUdfValueBatch(input)

> 批量设置多个用户的自定义数据。你需要先在用户池[定义用户自定义数据元信息](/guides/users/user-defined-field/)，且传入值的类型必须和定义的类型匹配。如果设置失败，会抛出异常，你需要对异常进行捕捉。

#### 参数

- `input` \<string\> 输入数据，结构请见示例。

#### 示例

```javascript
await managementClient.users.setUdfValueBatch([
  {
    userId: 'USER_ID1',
    data: {
      school: '华中科技大学',
    },
  },
  {
    userId: 'USER_ID2',
    data: {
      school: '清华大学',
      age: 100,
    },
  },
])
```

## 删除自定义数据

UsersManagementClient().removeUdfValue(userId, key)

> 删除自定义数据。你需要先在用户池[定义用户自定义数据元信息](/guides/users/user-defined-field/)，且传入值的类型必须和定义的类型匹配。

#### 参数

- `userId` \<string\> 用户 ID
- `key` \<string\> 自定义字段的 key 。

#### 示例

```javascript
await authenticationClient.removeUdfValue('USER_ID', 'school')
```

## 删除用户

UsersManagementClient().delete(userId)

> 删除用户

#### 参数

- `userId` \<string\> 用户 ID

#### 示例

```javascript
const user = await managementClient.users.delete('USERID')
```

#### 返回值

- `Promise<CommonMessage>`

## 批量删除用户

UsersManagementClient().deleteMany(userIds)

> 批量删除用户

#### 参数

- `userIds` \<string[]\> 用户 ID 列表

#### 示例

```javascript
const user = await managementClient.users.deleteMany(['USERID'])
```

#### 返回值

- `Promise<CommonMessage>`

## 批量获取用户

UsersManagementClient().batch(userIds)

> 通过 ID 批量获取用户详情

#### 参数

- `userIds` \<string[]\> 用户 ID 列表

#### 示例

```javascript
const users = await managementClient.users.batch(['USERID'])
```

#### 示例数据

```json
{
  "id": "604a12a261a85949c8ad0259",
  "arn": "arn:cn:authing:604a12a22d45ab775db56160:user:604a12a261a85949c8ad0259",
  "userPoolId": "604a12a22d45ab775db56160",
  "status": "Activated",
  "username": "test",
  "email": null,
  "emailVerified": false,
  "phone": null,
  "phoneVerified": false,
  "identities": [],
  "unionid": null,
  "openid": null,
  "nickname": null,
  "registerSource": ["unknown"],
  "photo": "https://files.authing.co/authing-console/default-user-avatar.png",
  "password": null,
  "oauth": null,
  "token": null,
  "tokenExpiredAt": null,
  "loginsCount": 0,
  "lastLogin": null,
  "lastIP": null,
  "signedUp": "2021-03-11T20:52:50+08:00",
  "blocked": false,
  "isDeleted": false,
  "device": null,
  "browser": null,
  "company": null,
  "name": null,
  "givenName": null,
  "familyName": null,
  "middleName": null,
  "profile": null,
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
  "city": null,
  "province": null,
  "country": null,
  "createdAt": "2021-03-11T20:52:50+08:00",
  "updatedAt": "2021-03-11T20:52:50+08:00",
  "externalId": null
}
```

#### 返回值

- `Promise<CommonMessage>`

## 获取用户列表

UsersManagementClient().list(page, limit)

> 获取用户池用户列表

#### 参数

- `page` \<number\> 页码数, 从 1 开始 默认值为 : `1`。
- `limit` \<number\> 每页包含的用户数 默认值为 : `10`。

#### 示例

```javascript
const user = await managementClient.users.list()
```

#### 返回值

- `Promise<PaginatedUsers>`

#### 示例数据

```json
{
  "totalCount": 1,
  "list": [
    {
      "id": "604a12a261a85949c8ad0259",
      "arn": "arn:cn:authing:604a12a22d45ab775db56160:user:604a12a261a85949c8ad0259",
      "userPoolId": "604a12a22d45ab775db56160",
      "status": "Activated",
      "username": "test",
      "email": null,
      "emailVerified": false,
      "phone": null,
      "phoneVerified": false,
      "unionid": null,
      "openid": null,
      "nickname": null,
      "registerSource": ["unknown"],
      "photo": "https://files.authing.co/authing-console/default-user-avatar.png",
      "password": null,
      "oauth": null,
      "token": null,
      "tokenExpiredAt": null,
      "loginsCount": 0,
      "lastLogin": null,
      "lastIP": null,
      "signedUp": "2021-03-11T20:52:50+08:00",
      "blocked": false,
      "isDeleted": false,
      "device": null,
      "browser": null,
      "company": null,
      "name": null,
      "givenName": null,
      "familyName": null,
      "middleName": null,
      "profile": null,
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
      "city": null,
      "province": null,
      "country": null,
      "createdAt": "2021-03-11T20:52:50+08:00",
      "updatedAt": "2021-03-11T20:52:50+08:00",
      "externalId": null
    }
  ]
}
```

## 检查用户是否存在

UsersManagementClient().exists(options)

> 检查用户是否存在，目前可检测的字段有用户名、邮箱、手机号。

#### 参数

- `options` \<Object\>
- `options.username` \<string\> 用户名，区分大小写。
- `options.email` \<string\> 邮箱，邮箱不区分大小写。
- `options.phone` \<string\> 手机号

#### 示例

```javascript
const exists = await managementClient.users.exists({
  username: 'bob',
})
```

#### 返回值

- `Promise<boolean>`

## 查找用户

UsersManagementClient().find(options)

> 通过用户名、邮箱、手机号查找用户

#### 参数

- `options` \<Object\>
- `options.username` \<string\> 用户名，区分大小写。
- `options.email` \<string\> 邮箱，邮箱不区分大小写。
- `options.phone` \<string\> 手机号

#### 示例

```javascript
const users = await managementClient.users.find({
  username: 'test',
})
```

#### 示例数据

```json
{
  "totalCount": 1,
  "list": [
    {
      "id": "604a12a261a85949c8ad0259",
      "arn": "arn:cn:authing:604a12a22d45ab775db56160:user:604a12a261a85949c8ad0259",
      "userPoolId": "604a12a22d45ab775db56160",
      "status": "Activated",
      "username": "test",
      "email": null,
      "emailVerified": false,
      "phone": null,
      "phoneVerified": false,
      "unionid": null,
      "openid": null,
      "nickname": null,
      "registerSource": ["unknown"],
      "photo": "https://files.authing.co/authing-console/default-user-avatar.png",
      "password": null,
      "oauth": null,
      "token": null,
      "tokenExpiredAt": null,
      "loginsCount": 0,
      "lastLogin": null,
      "lastIP": null,
      "signedUp": "2021-03-11T20:52:50+08:00",
      "blocked": false,
      "isDeleted": false,
      "device": null,
      "browser": null,
      "company": null,
      "name": null,
      "givenName": null,
      "familyName": null,
      "middleName": null,
      "profile": null,
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
      "city": null,
      "province": null,
      "country": null,
      "createdAt": "2021-03-11T20:52:50+08:00",
      "updatedAt": "2021-03-11T20:52:50+08:00",
      "externalId": null
    }
  ]
}
```

## 搜索用户

UsersManagementClient().search(query, options, page, limit)

> 根据关键字搜索用户

#### 参数

- `query` \<string\> 搜索内容
- `options` \<string[]\> 选项
- `options.fields` \<string[]\> 搜索用户字段，如果不指定，默认会从 `username`、`nickname`、`email`、`phone`、`company`、`name`、`givenName`、`familyName`、`middleName`、`profile`、`preferredUsername` 这些字段进行模糊搜索。
  如果你需要精确查找，请使用 find 方法。
- `page` \<number\> 默认值为 : `1`。
- `limit` \<number\> 默认值为 : `10`。

#### 示例

```javascript
const { totalCount, list } = await managementClient.users.search('Bob')
```

#### 返回值

- `Promise<PaginatedUsers>`

#### 示例数据

```json
{
  "totalCount": 1,
  "list": [
    {
      "id": "604a12a261a85949c8ad0259",
      "arn": "arn:cn:authing:604a12a22d45ab775db56160:user:604a12a261a85949c8ad0259",
      "userPoolId": "604a12a22d45ab775db56160",
      "status": "Activated",
      "username": "test",
      "email": null,
      "emailVerified": false,
      "phone": null,
      "phoneVerified": false,
      "unionid": null,
      "openid": null,
      "nickname": null,
      "registerSource": ["unknown"],
      "photo": "https://files.authing.co/authing-console/default-user-avatar.png",
      "password": null,
      "oauth": null,
      "token": null,
      "tokenExpiredAt": null,
      "loginsCount": 0,
      "lastLogin": null,
      "lastIP": null,
      "signedUp": "2021-03-11T20:52:50+08:00",
      "blocked": false,
      "isDeleted": false,
      "device": null,
      "browser": null,
      "company": null,
      "name": null,
      "givenName": null,
      "familyName": null,
      "middleName": null,
      "profile": null,
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
      "city": null,
      "province": null,
      "country": null,
      "createdAt": "2021-03-11T20:52:50+08:00",
      "updatedAt": "2021-03-11T20:52:50+08:00",
      "externalId": null
    }
  ]
}
```

## 刷新用户 token

UsersManagementClient().refreshToken(id)

> 刷新用户 token

#### 参数

- `id` \<string\> 用户 ID

#### 示例

```javascript
const { token } = await managementClient.users.refreshToken('USERID')

// 检测 token 的最新状态，能够获取到该用户对应的 token

const data = await managementClient.checkLoginStatus(token, {
  fetchUserDetail: true,
})
```

#### 返回值

- `Promise<RefreshToken>`

## 检测密码是否合法

ManagementClient().isPasswordValid(password)

> 检测密码是否合法

#### 参数

- `isPasswordValid` \<string\> 要检测的密码

#### 示例

```javascript
// 检测 token 的最新状态，能够获取到该用户对应的 token

const data = await managementClient.isPasswordValid(password)
```

#### 返回值

-

```js

Promise<{
  valid: boolean
  message: string
}>

```

## 获取用户分组列表

UsersManagementClient().listGroups(userId)

> 获取用户的分组列表

#### 参数

- `userId` \<string\> 用户 ID

#### 示例

```javascript
const { list, totalCount } = await managementClient.users.listGroups('USERID')
```

#### 返回值

- `Promise<DeepPartial<PaginatedGroups>>`

#### 示例数据

```json
{
  "totalCount": 1,
  "list": [
    {
      "code": "test_group",
      "name": "testGroup",
      "description": null,
      "createdAt": "2021-03-15T18:56:56+08:00",
      "updatedAt": "2021-03-15T18:56:56+08:00"
    }
  ]
}
```

## 加入分组

UsersManagementClient().addGroup(userId, group)

> 将用户加入分组

#### 参数

- `userId` \<string\> 用户 ID
- `group` \<string\> 分组 code

#### 示例

```javascript
const { code, message } = await managementClient.users.addGroup(
  'USERID',
  'GROUP_CODE'
)
```

#### 返回值

- `Promise<CommonMessage>`

## 退出分组

UsersManagementClient().removeGroup(userId, group)

> 退出分组

#### 参数

- `userId` \<string\> 用户 ID
- `group` \<string\> 分组 code

#### 示例

```javascript
const { code, message } = await managementClient.users.removeGroup(
  'USERID',
  'GROUP_CODE'
)
```

#### 返回值

- `Promise<CommonMessage>`

## 获取用户角色列表

UsersManagementClient().listRoles(userId)

> 获取用户的角色列表

#### 参数

- `userId` \<string\> 用户 ID

#### 示例

```javascript
const { list, totalCount } = await managementClient.users.listRoles('USERID')
```

#### 返回值

- `Promise<DeepPartial<PaginatedRoles>>`

#### 示例数据

```js

{
  totalCount: 20,
  list: [
    {
      /** 权限组 code */
      namespace: 'default',
      /** 唯一标志 code */
      code: 'example_code',
      /** 资源描述符 arn */
      arn: 'arn:xxxxxxx:xxxxxxx',
      /** 角色描述 */
      description?: '角色 1',
      /** 是否为系统内建，系统内建的角色不能删除 */
      isSystem?: false,
      /** 创建时间 */
      createdAt?: '2020-10-20T13:48:11.288Z',
      /** 修改时间 */
      updatedAt?: '2020-10-20T13:48:11.288Z',
      /** 被授予此角色的用户列表 */
      users: PaginatedUsers,
      /** 父角色 */
      parent?: null,
    }
  ]
};

```

## 添加角色

UsersManagementClient().addRoles(userId, roles)

> 将用户加入角色

#### 参数

- `userId` \<string\> 用户 ID
- `roles` \<string\> 角色 code 列表

#### 示例

```javascript
const { code, message } = await managementClient.users.addRoles('USERID', [
  'ROLEA',
])
```

#### 返回值

- `Promise<CommonMessage>`

## 移除角色

UsersManagementClient().removeRoles(userId, roles)

> 将用户从角色中移除

#### 参数

- `userId` \<string\> 用户 ID
- `roles` \<string\> 角色 code 列表

#### 示例

```javascript
const { code, message } = await managementClient.users.removeRoles('USERID', [
  'ROLEA',
])
```

#### 返回值

- `Promise<CommonMessage>`

## 获取用户所在组织机构

UsersManagementClient().listOrg(userId)

> 获取用户所在组织机构，以及他在该组织机构内的的节点路径。

#### 参数

- `userId` \<string\> 用户 ID

#### 示例

```javascript
const data = await managementClient.users.listOrgs('USERID')
```

#### 返回值

- `Promise<UserOrgList>`

#### 示例数据

```json
[
  [
    {
      "type": "org",
      "id": "604f396a98219415a099dce9",
      "createdAt": "2021-03-15T10:39:38.146Z",
      "updatedAt": "2021-03-15T10:39:38.215Z",
      "userPoolId": "604a12a22d45ab775db56160",
      "rootNodeId": "604f396aeb491afde5083f02",
      "logo": null
    },
    {
      "type": "node",
      "id": "604f396aeb491afde5083f02",
      "createdAt": "2021-03-15T10:39:38.179Z",
      "updatedAt": "2021-03-15T10:39:38.179Z",
      "userPoolId": "604a12a22d45ab775db56160",
      "orgId": "604f396a98219415a099dce9",
      "name": "test",
      "nameI18n": null,
      "description": null,
      "descriptionI18n": null,
      "order": null,
      "code": null
    }
  ]
]
```

## 获取用户被授权的所有资源列表

UsersManagementClient.listAuthorizedResources(userId, namespace)

> 获取一个用户被授权的所有资源，用户被授权的所有资源里面包括从角色、分组、组织机构继承的资源。

#### 参数

- `userId` \<string\> 用户 ID；
- `namespace` \<string\> 权限分组的 code，详情请见[使用权限分组管理权限资源](/guides/access-control/resource-group.md)。

#### 示例

```javascript
managementClient.users.listAuthorizedResources('USERID', 'code')
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
