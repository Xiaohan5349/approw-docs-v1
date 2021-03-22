---
meta:
  - name: description
    content: 使用管理模块
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

```java
Role role = managementClient.roles().create(new CreateRoleParam("code")).execute();
```

## 删除角色

RolesManagementClient().delete(code)

> 删除角色

#### 参数

- `code` \<string\> 角色唯一标志符

#### 示例

```java
CommonMessage message = managementClient.roles().delete("code").execute();
```

## 批量删除角色

RolesManagementClient().deleteMany(codeList)

> 批量删除角色

#### 参数

- `codeList` \<string[]\> 角色唯一标志符列表

#### 示例

```java
ArrayList<String> list = new ArrayList<String>();
list.add("code");
CommonMessage result = managementClient.roles().deleteMany(list).execute();
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

```java
Role role = rolesManagementClient.roles().update(new UpdateRoleParam("code").withDescription("desc")).execute();
```

## 获取角色详情

RolesManagementClient().detail(code)

> 获取角色详情

#### 参数

- `code` \<string\> 角色唯一标志符

#### 示例

```java
Role role = managementClient.roles().detail("code").execute();
```

## 获取角色列表

RolesManagementClient().list(page, limit)

> 获取角色列表

#### 参数

- `page` \<number\> 页码数 默认值为 : `1`。
- `limit` \<number\> 每页个数 默认值为 : `10`。

#### 示例

```java
PaginatedRoles roles = managementClient.roles().list().execute();
```

## 获取角色用户列表

RolesManagementClient().listUsers(code)

> 获取角色用户列表

#### 参数

- `code` \<string\> 角色唯一标志符

#### 示例

```java
PaginatedUsers users = managementClient.roles().listUsers("code").execute();
```

## 添加用户

RolesManagementClient().addUsers(code, userIds)

> 添加用户

#### 参数

- `code` \<string\> 角色唯一标志符
- `userIds` \<string[]\> 用户 ID 列表

#### 示例

```java
ArrayList<String> userIds = new ArrayList<>();
userIds.add("userId");
CommonMessage message = managementClient.roles().addUsers("code", userIds).execute();
```

## 移除用户

RolesManagementClient().removeUsers(code, userIds)

> 移除用户

#### 参数

- `code` \<string\> 角色唯一标志符
- `userIds` \<string[]\> 用户 ID 列表

#### 示例

```java
ArrayList<String> userIds = new ArrayList<>();
userIds.add("userId");
CommonMessage message = managementClient.roles().removeUsers("code", userIds).execute();
```

## 获取角色策略列表

RolesManagementClient().listPolicies(code, page, limit)

> 获取角色策略列表

#### 参数

- `code` \<string\> 角色唯一标志符
- `page` \<number\> 页码数 默认值为 : `1`。
- `limit` \<number\> 页码个数 默认值为 : `10`。

#### 示例

```java
PaginatedPolicyAssignments result = managementClient.roles().listPolicies("code").execute();
```

## 授权策略

RolesManagementClient().addPolicies(code, policies)

> 给角色授权策略策略

#### 参数

- `code` \<string\> 角色唯一标志符
- `policies` \<string[]\> 策略列表

#### 示例

```java
ArrayList<String> policies = new ArrayList<>();
policies.add("policy id");
CommonMessage message = managementClient.roles().addPolicies("code", policies).execute();
```

## 角色移除策略

RolesManagementClient().removePolicies(code, policies)

> 角色移除策略

#### 参数

- `code` \<string\> 角色唯一标志符
- `policies` \<string[]\> 策略列表

#### 示例

```java
ArrayList<String> policies = new ArrayList<>();
policies.add("policy id");
CommonMessage message = managementClient.roles().removePolicies("code", policies).execute();
```
