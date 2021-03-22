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

```python
code = 'code'
role = management_client.roles.create(code=code)
```

## 删除角色

RolesManagementClient().delete(code)

> 删除角色

#### 参数

- `code` \<string\> 角色唯一标志符

#### 示例

```python
data = management_client.roles.delete(code='code')
code = data['code'] # 200 表示成功
```

## 批量删除角色

RolesManagementClient().delete_many(codeList)

> 批量删除角色

#### 参数

- `codeList` \<string[]\> 角色唯一标志符列表

#### 示例

```python
data = management_client.roles.delete_many([
  'ROLE1',
  'ROLE2'
])
totalCount = data['totalCount']
_list = data['list']
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

```python

# 修改基本信息
code = 'code'
desc = '描述'
role = management_client.roles.update(code=code, description=desc)

# 修改新 code
role = management_client.roles.update(code='old', newCode="new")
```

## 获取角色详情

RolesManagementClient().detail(code)

> 获取角色详情

#### 参数

- `code` \<string\> 角色唯一标志符

#### 示例

```python
code = 'code'
management_client.roles.create(code=code)
```

## 获取角色列表

RolesManagementClient().list(page, limit)

> 获取角色列表

#### 参数

- `page` \<number\> 页码数 默认值为 : `1`。
- `limit` \<number\> 每页个数 默认值为 : `10`。

#### 示例

```python
data = management_client.roles.list()
totalCount = data['totalCount']
_list = data['list']
```

## 获取角色用户列表

RolesManagementClient().list_users(code)

> 获取角色用户列表

#### 参数

- `code` \<string\> 角色唯一标志符

#### 示例

```python
data = management_client.roles.list_users('ROLE')
totalCount = data['totalCount']
_list = data['list']
```

## 添加用户

RolesManagementClient().add_users(code, userIds)

> 添加用户

#### 参数

- `code` \<string\> 角色唯一标志符
- `userIds` \<string[]\> 用户 ID 列表

#### 示例

```python
data = management_client.roles.add_users('ROLE', [
  'USERID1',
  'USERID2'
])
totalCount = data['totalCount']
_list = data['list']
```

## 移除用户

RolesManagementClient().remove_users(code, userIds)

> 移除用户

#### 参数

- `code` \<string\> 角色唯一标志符
- `userIds` \<string[]\> 用户 ID 列表

#### 示例

```python
data = management_client.roles.remove_users('ROLE', [
  'USERID1',
  'USERID2'
])
totalCount = data['totalCount']
_list = data['list']
```

## 获取角色策略列表

RolesManagementClient().list_policies(code, page, limit)

> 获取角色策略列表

#### 参数

- `code` \<string\> 角色唯一标志符
- `page` \<number\> 页码数 默认值为 : `1`。
- `limit` \<number\> 页码个数 默认值为 : `10`。

#### 示例

```python
data = management_client.roles.list_policies('ROLE')
totalCount = data['totalCount']
_list = data['list']
```

## 授权策略

RolesManagementClient().add_policies(code, policies)

> 给角色授权策略策略

#### 参数

- `code` \<string\> 角色唯一标志符
- `policies` \<string[]\> 策略列表

#### 示例

```python
data = management_client.roles.add_policies('ROLE', [
  'Policy1',
  'Policy2'
])
totalCount = data['totalCount']
_list = data['list']
```

## 角色移除策略

RolesManagementClient().remove_policies(code, policies)

> 角色移除策略

#### 参数

- `code` \<string\> 角色唯一标志符
- `policies` \<string[]\> 策略列表

#### 示例

```python
data = management_client.roles.remove_policies('ROLE', [
  'Policy1',
  'Policy2'
])
totalCount = data['totalCount']
_list = data['list']
```
