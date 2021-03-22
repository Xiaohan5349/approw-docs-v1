---
meta:
  - name: description
    content: 管理分组
---

# 管理分组

<LastUpdated/>


> 此模块用于管理 {{$localeConfig.brandName}} 分组，可以进行分组的增删改查、分组添加/删除用户、分组添加/删除策略 等操作。

## 创建分组

GroupsManagementClient().create(code, name, description)

> 创建分组

#### 参数

- `code` \<string\> 分组唯一标志符
- `name` \<string\> 分组名称
- `description` \<string\> 描述

#### 示例

```csharp
var list = await managementClient.Groups.Create(code, "name");
```

## 删除分组

GroupsManagementClient().delete(code)

> 删除分组

#### 参数

- `code` \<string\> 分组唯一标志符

#### 示例

```csharp
var message = await managementClient.Groups.Delete(code);
```

## 修改分组

GroupsManagementClient().update(code, input)

> 修改分组

#### 参数

- `code` \<string\> 分组唯一标志符
- `input` \<Object\>
- `input.name` \<string\> 新的名称
- `input.description` \<string\> 新的描述信息
- `input.newCode` \<string\> 新的唯一标志符

#### 示例

```csharp
var group = await client.Groups.Update(code, description: "asd");
```

## 获取分组详情

GroupsManagementClient().detail(code)

> 获取分组详情

#### 参数

- `code` \<string\> 分组唯一标志符

#### 示例

```csharp
var policy = await managementClient.Groups.Update(code, description: "asd");
```

## 获取分组列表

GroupsManagementClient().list(page, limit)

> 获取分组列表

#### 参数

- `page` \<number\> 页码数 默认值为 : `1`。
- `limit` \<number\> 每页个数 默认值为 : `10`。

#### 示例

```csharp
var list = await managementClient.Groups.List();
```

## 批量删除分组

GroupsManagementClient().deleteMany(codeList)

> 批量删除分组

#### 参数

- `codeList` \<string[]\> 分组唯一标志符列表

#### 示例

```csharp
var message = await managementClient.Groups.DeleteMany(new string[] { code });
```

## 获取分组用户列表

GroupsManagementClient().listUsers(code, page, limit)

> 获取分组用户列表

#### 参数

- `code` \<string\> 分组唯一标志符
- `page` \<number\> 页码数 默认值为 : `1`。
- `limit` \<number\> 每页个数 默认值为 : `10`。

#### 示例

```csharp
var users = managementClient.Groups.ListUsers(code);
```

## 添加用户

GroupsManagementClient().addUsers(code, userIds)

> 添加用户

#### 参数

- `code` \<string\> 分组唯一标志符
- `userIds` \<string[]\> 用户 ID 列表

#### 示例

```csharp
await managementClient.Groups.AddUsers(code, new string[] { userId1, userId2 });
```

## 移除用户

GroupsManagementClient().removeUsers(code, userIds)

> 移除用户

#### 参数

- `code` \<string\> 分组唯一标志符
- `userIds` \<string[]\> 用户 ID 列表

#### 示例

```csharp
await managementClient.Groups.RemoveUsers(code, new string[] { userId1, userId2 });
```
