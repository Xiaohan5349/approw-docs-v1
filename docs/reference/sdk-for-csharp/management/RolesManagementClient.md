---
meta:
  - name: description
    content: 管理角色
---

# 管理角色

<LastUpdated/>


> 此模块用于管理 {{$localeConfig.brandName}} 角色，可以进行角色的增删改查、角色添加/删除用户、角色添加/删除策略 等操作。

## 创建角色

RolesManagementClient().create(code, description)

> 创建角色

#### 参数

- `code` \<string\> 角色唯一标志符
- `description` \<string\> 描述

#### 示例

```csharp
var code = "code";
var role = await managementClient.Roles.Create(code, "test role");
```

## 删除角色

RolesManagementClient().delete(code)

> 删除角色

#### 参数

- `code` \<string\> 角色唯一标志符

#### 示例

```csharp
var code = "code";
var message = await managementClient.Roles.Delete(code);
```

## 批量删除角色

RolesManagementClient().deleteMany(codeList)

> 批量删除角色

#### 参数

- `codeList` \<string[]\> 角色唯一标志符列表

#### 示例

```csharp
var code = "code";
var message = await managementClient.Roles.DeleteMany(new string[] { code });
```

## 修改角色

RolesManagementClient().update(code, input)

> 修改角色

#### 参数

- `code` \<string\> 角色唯一标志符
- `input` \<Object\>
- `input.description` \<string\> 描述信息
- `input.newCode` \<string\> 新的唯一标志符

#### 示例

```csharp
var code = "code";
var desc = "update desc";
var role = await managementClient.Roles.Update(code, desc);
```

## 获取角色详情

RolesManagementClient().detail(code)

> 获取角色详情

#### 参数

- `code` \<string\> 角色唯一标志符

#### 示例

```csharp
var code = "code";
var role = await managementClient.Roles.Detail(code);
```

## 获取角色列表

RolesManagementClient().list(page, limit)

> 获取角色列表

#### 参数

- `page` \<number\> 页码数 默认值为 : `1`。
- `limit` \<number\> 每页个数 默认值为 : `10`。

#### 示例

```csharp
var roles = await managementClient.Roles.List();
```

## 获取角色用户列表

RolesManagementClient().listUsers(code)

> 获取角色用户列表

#### 参数

- `code` \<string\> 角色唯一标志符

#### 示例

```csharp
var code = "code";
var users = await managementClient.Roles.ListUsers(code);
```

## 添加用户

RolesManagementClient().addUsers(code, userIds)

> 添加用户

#### 参数

- `code` \<string\> 角色唯一标志符
- `userIds` \<string[]\> 用户 ID 列表

#### 示例

```csharp
var code = "code";
var users = new string[] { "userId" };
var message = await managementClient.Roles.AddUsers(code, users);
```

## 移除用户

RolesManagementClient().removeUsers(code, userIds)

> 移除用户

#### 参数

- `code` \<string\> 角色唯一标志符
- `userIds` \<string[]\> 用户 ID 列表

#### 示例

```csharp
var code = "code";
var users = new string[] { "userId" };
var message = await managementClient.Roles.RemoveUsers(code, users);
```

## 获取角色策略列表

RolesManagementClient().listPolicies(code, page, limit)

> 获取角色策略列表

#### 参数

- `code` \<string\> 角色唯一标志符
- `page` \<number\> 页码数 默认值为 : `1`。
- `limit` \<number\> 页码个数 默认值为 : `10`。

#### 示例

```csharp
var code = "code";
var policies = await managementClient.Roles.ListPolicies(code);
```

## 授权策略

RolesManagementClient().addPolicies(code, policies)

> 给角色授权策略策略

#### 参数

- `code` \<string\> 角色唯一标志符
- `policies` \<string[]\> 策略列表

#### 示例

```csharp
var code = "code";
var policies = new string[] { "policyId" };
var message = await managementClient.Roles.AddPolicies(code, policies);
```

## 角色移除策略

RolesManagementClient().removePolicies(code, policies)

> 角色移除策略

#### 参数

- `code` \<string\> 角色唯一标志符
- `policies` \<string[]\> 策略列表

#### 示例

```csharp
var code = "code";
var policies = new string[] { "policyId" };
var message = await managementClient.Roles.RemovePolicies(code, policies);
```
