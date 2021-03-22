---
meta:
  - name: description
    content: 用户认证模块
---

# 用户认证模块

<LastUpdated/>


> 此模块包含注册登录、重置手机号邮箱、修改账号信息等方法，是以你的终端用户（End User）的身份进行请求，适合在需要验证用户身份的情况下使用。

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

```php
$email = "test@example.com";
$password = "123456";
$user = $authenticationClient->registerByEmail(new RegisterByEmailInput($email, $password));
```

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

```php
$username = "username";
$password = "123456";
$user = $authenticationClient->registerByUsername(new RegisterByUsernameInput($username, $password));
```

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

```php
$phone = "phone number";
$code = "1234";
$password = "123456";
$user = $authenticationClient->registerByPhoneCode((new RegisterByPhoneCodeInput($phone, $code))->withPassword($password));
```

## 检查密码强度

AuthenticationClient().checkPasswordStrength(password)

> 检查密码强度，[点此查看详情](/guides/security/config-password.md)。

#### 参数

- `password` \<string\>

#### 示例

```php
$strength = $authentication->checkPasswordStrength('asdasd');
```

```php
$strength = $authentication->checkPasswordStrength('php@-isok+_?');
```

## 发送短信验证码

AuthenticationClient().sendSmsCode(phone)

> 发送短信验证码, 短信验证码的有效时间为 60 s。

#### 参数

- `phone` \<string\>

#### 示例

```php
$phone = "phone number";
$message = $authenticationClient->sendSmsCode($phone);
```



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

```php
$email = "test@test.com";
$password = "123456";
$user = $authenticationClient->loginByEmail(new LoginByEmailInput($email, $password));
```

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

```php
$username = "username";
$password = "123456";
$user = $authenticationClient->loginByUsername(new LoginByUsernameInput($username, $password));
```

## 使用手机号验证码登录

AuthenticationClient().loginByPhoneCode(phone, code)

> 使用手机号验证码登录。

#### 参数

- `phone` \<string\> 手机号
- `code` \<string\> 短信验证码
- `options.clientIp` \<string\> 客户端真实 IP，如果你在服务器端调用此接口，请务必将此参数设置为终端用户的真实 IP。

#### 示例

```php
$phone = "phone number";
$code = "1234";
$user = $authenticationClient->loginByPhoneCode((new LoginByPhoneCodeInput($phone, $code)));
```

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

```php
$phone = "17611161550";
$password = "123456";
$user = $authenticationClient->loginByPhonePassword((new LoginByPhonePasswordInput($phone, $password)));
```

## 获取自定义数据

AuthenticationClient().listUdv()

> 获取用户的所有自定义数据。你需要先在用户池[定义用户自定义数据元信息](/guides/users/user-defined-field/)。

#### 示例

```php
$data = $authenticationClient.listUdv()
```

## 设置自定义数据

AuthenticationClient().setUdv($key, $value)

> 设置用户的自定义字段。你需要先在用户池[定义用户自定义数据元信息](/guides/users/user-defined-field/)，且传入值的类型必须和定义的类型匹配。如果设置失败，会抛出异常，你需要对异常进行捕捉。

#### 参数

- `key` \<string\> 控制台增加的自定义属性 key。
- `value` \<string\> key 对应的值。

#### 示例

```php
$data = $authentication->setUdv('好家伙', "ok");
```

## 删除自定义数据

AuthenticationClient().removeUdv(key)

> 删除自定义数据。你需要先在用户池[定义用户自定义数据元信息](/guides/users/user-defined-field/)，且传入值的类型必须和定义的类型匹配。

#### 参数

- `key` \<string\> 自定义字段的 key 。

#### 示例

```php
$data = $authentication->removeUdv('好家伙');
```

## 检测 Token 登录状态

AuthenticationClient().checkLoginStatus(token)

> 检测 Token 登录状态

#### 参数

- `token` \<string\> 用户的登录凭证 token

#### 示例

```php
$status = $authenticationClient->checkLoginStatus();
```

## 发送邮件

AuthenticationClient().sendEmail(email, scene)

> 发送邮件

#### 参数

- `email` \<string\> 邮箱
- `scene` \<EmailScene\> 发送场景，可选值为 RESET_PASSWORD（发送重置密码邮件，邮件中包含验证码）、VerifyEmail（发送验证邮箱的邮件）、ChangeEmail（发送修改邮箱邮件，邮件中包含验证码）

#### 示例

```php
$email = "test@example.com";
$authenticationClient->sendEmail($email, EmailScene::RESET_PASSWORD);
```

## 通过短信验证码重置密码

AuthenticationClient().resetPasswordByPhoneCode(phone, code, newPassword)

> 通过短信验证码重置密码，你需要先调用 sendSmsCode 接口发送重置密码邮件。

#### 参数

- `phone` \<string\> 手机号
- `code` \<string\> 验证码
- `newPassword` \<string\> 新的密码

#### 示例

```php
$phone = "phone number";
$code = "1234";
$newPassword = "123456";
$authenticationClient->resetPasswordByPhoneCode($phone, $code, $newPassword);
```

## 通过邮件验证码重置密码

AuthenticationClient().resetPasswordByEmailCode(phone, code, newPassword)

> 通过邮件验证码重置密码，你需要先调用 sendEmail 接口发送重置密码邮件。

#### 参数

- `phone` \<string\> 手机号
- `code` \<string\> 验证码
- `newPassword` \<string\> 新的密码

#### 示例

```php
$email = "test@example.com";
$code = "1234";
$newPassword = "123456";
$authenticationClient->resetPasswordByEmailCode($email, $code, $newPassword);
```

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
- `updates.gender` \<string\> 性别, M（Man） 表示男性、F（Female） 表示女性、未知表示 U（Unknown）
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

```php
$user = $authenticationClient->updateProfile((new UpdateUserInput())->withNickname("nickname"));
```

## 更新用户密码

AuthenticationClient().updatePassword(newPassword, oldPassword)

> 更新用户密码

#### 参数

- `newPassword` \<string\> 新密码
- `oldPassword` \<string\> 旧密码，如果用户没有设置密码，可以不填。

#### 示例

```php
$oldPassword = "111111";
$newPassword = "123456";
$user = $authenticationClient->updatePassword($newPassword, $oldPassword);
```

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

```php
$user = $authenticationClient->updatePhone("new phone number", "1234", "old phone number", "1234");
```

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

```php
$newEmail = "new@example.com";
$emailCode = "1234";
$user = $authenticationClient->updateEmail($newEmail, $emailCode);
```

## 绑定社交账号

AuthenticationClient().linkAccount($options)

> 将一个社交账号绑定到一个主账号（手机号、邮箱账号）。

#### 参数

- `options.primaryUserToken` \<string\> 主账号 Token
- `options.secondaryUserToken` \<string\> 社交账号 Token

#### 示例

```php
$_ = new stdClass;
$_->primaryUserToken = "";
$_->secondaryUserToken = "";

$data = $authentication->linkAccount($_);
```


## 刷新当前用户的 token

AuthenticationClient().refreshToken()

> 刷新当前用户的 token，调用此接口要求先登录。

#### 参数

#### 示例

```php
$token = $authenticationClient->refreshToken();
```

## 绑定手机号

AuthenticationClient().bindPhone(phone, phoneCode)

> 用户初次绑定手机号，如果需要修改手机号请使用 updatePhone 接口。

#### 参数

- `phone` \<string\>
- `phoneCode` \<string\>

#### 示例

```php
$user = $authenticationClient->bindPhone("phone number", "1234");
```

## 解绑手机号

AuthenticationClient().unbindPhone()

> 用户解绑手机号

#### 参数

#### 示例

```php
$user = $authenticationClient->unBindPhone();
```

## 获取当前登录的用户信息

AuthenticationClient().getCurrentUser()

> 获取当前登录的用户信息

#### 参数

#### 示例

## 退出登录

AuthenticationClient().logout()

> 退出登录，清空 localStorage 里的 user 和 token

#### 参数

#### 示例

```php
$authenticationClient->logout();
```

## 获取用户所在组织机构

AuthenticationClient().listOrg()

> 获取用户所在的组织机构立碑，以及他所属的节点在此组织机构内的完整路径。

#### 参数

#### 示例

```php
$data = $authentication->listOrg();
```

## 使用 LDAP 用户名登录

AuthenticationClient().loginByLdap($username, $password, $options)

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

```php
$data = $authentication->loginByLdap("test", "J@vascript1#!");
```

## 使用 AD 用户名登录

AuthenticationClient().loginByAd($username, $password)

> 使用 AD 用户名登录。

#### 参数

- `username` \<string\> 用户名
- `password` \<string\> 密码

#### 示例

```php
$data = $authentication->loginByAd("test", "J@vascript1#!");
```

## 计算密码安全等级

AuthenticationClient().computedPasswordSecurityLevel($password)

> 计算密码安全等级

#### 参数

`password`: 需要计算的密码，必须为 `string` 类型

#### 示例

```php
$data = $authentication->computedPasswordSecurityLevel('J@vascript1#!');
```

#### 返回数据

- `1`: 等级低
- `2`: 等级中
- `3`: 等级高

## 获取用户账号安全等级

AuthenticationClient().getSecurityLevel()

> 获取用户账号安全等级

#### 参数

无

#### 示例

```php
$authentication = new AuthenticationClient(function ($options) {
    $options->appId = "---";
    $options->secret = "---";
    $options->host = "---";
    $options->redirectUri = "---";
    $options->protocol = "---";
    ...
});
$user = $authentication->loginByUsername(new LoginByUsernameInput("shubuzuo", "123456"));

// 保证已经登录
$data = $authentication->getSecurityLevel();
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

AuthenticationClient.listAuthorizedResources($namespace)

> 获取一个用户被授权的所有资源，用户被授权的所有资源里面包括从角色、分组、组织机构继承的资源。

#### 参数

- `namespace` \<string\> 权限分组的 code，详情请见[使用权限分组管理权限资源](/guides/access-control/resource-group.md)。

#### 示例

```javascript
$data = $authentication->listAuthorizedResources('5f88506c705dc7fa80e5f39e');
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
