---
meta:
  - name: description
    content: 管理注册白名单
---

# 管理注册白名单

<LastUpdated/>


> 为你的用户池配置一个注册白名单，类似于邀请注册规则，开启后，只有白名单里的用户才能进行注册。 {{$localeConfig.brandName}} 目前支持的白名单方式有手机号、邮箱、用户名。

## 获取白名单记录

WhitelistManagementClient().list(type)

> 获取白名单记录

#### 参数

- `type` \<WhitelistType\> 白名单类型，USERNAME 为用户名、Email 为邮箱、Phone 为手机号。

#### 示例

```csharp
var list = await managementClient.Whitelist.List(WhitelistType.USERNAME);
```

## 添加白名单

WhitelistManagementClient().add(type, list)

> 添加白名单

#### 参数

- `type` \<WhitelistType\> 白名单类型，USERNAME 为用户名、Email 为邮箱、Phone 为手机号。
- `list` \<string[]\> 白名单列表，请注意邮箱不区分大小写。

#### 示例

```csharp
var list = await managementClient.Whitelist.Add(WhitelistType.EMAIL, new string[] { "test@test.com" });
```

## 移除白名单

WhitelistManagementClient().remove(type, list)

> 移除白名单

#### 参数

- `type` \<WhitelistType\> 白名单类型，USERNAME 为用户名、Email 为邮箱、Phone 为手机号。
- `list` \<string[]\> 白名单列表，请注意邮箱不区分大小写。

#### 示例

```csharp
var list = await managementClient.Whitelist.Remove(WhitelistType.EMAIL, new string[] { "test@test.com" });
```

## 开启白名单

WhitelistManagementClient().enable(type)

> 开启白名单

#### 参数

- `type` \<WhitelistType\> 白名单类型，USERNAME 为用户名、Email 为邮箱、Phone 为手机号。

#### 示例

```csharp
await managementClient.Whitelist.Enable(WhitelistType.EMAIL);
```

## 关闭白名单

WhitelistManagementClient().disable(type)

> 关闭白名单

#### 参数

- `type` \<WhitelistType\> 白名单类型，USERNAME 为用户名、Email 为邮箱、Phone 为手机号。

#### 示例

```csharp
await managementClient.Whitelist.Disable(WhitelistType.EMAIL);
```
