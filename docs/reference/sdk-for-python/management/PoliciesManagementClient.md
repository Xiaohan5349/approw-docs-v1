---
meta:
  - name: description
    content: 管理策略
---

# 管理策略

<LastUpdated/>

> {{$localeConfig.brandName}} 的访问控制与权限管理模型核心围绕着两个点来设计：**资源（Resource）**和**策略（Policy）**。策略定义了对某个（类）资源的某个（些）操作权限，将策略授权给用户（或角色），就能知道用户（或角色）是否具备对某个资源的某个操作具备操作权限。

## 添加策略

PoliciesManagementClient().create(code，策略语句)

> 添加策略

#### 参数

- `code` \<string\> 策略唯一标志
- `statements` \<PolicyStatement[]\>
- `description` \<string\> 描述

#### 示例

```python
code = 'PolicyCode'
statements = [
    {
        'resource': 'book:123',
        'actions': ['books:read'],
        'effect': 'ALLOW'
    }
]
policy = management_client.policies.create(
    code=code,
    statements=statements
)
```

## 删除策略

PoliciesManagementClient().delete(code)

> 删除策略，系统内置策略由 {{$localeConfig.brandName}} 官方维护，不能修改和删除。

#### 参数

- `code` \<string\> 策略唯一标志

#### 示例

```python
management_client.policies.delete('PolicyCode')
```

## 批量删除策略

PoliciesManagementClient().delete_many(codeList)

> 批量删除策略，系统内置策略由 {{$localeConfig.brandName}} 官方维护，不能修改和删除。

#### 参数

- `codeList` \<string\> 策略唯一标志列表

#### 示例

```python
management_client.policies.delete_many(['PolicyCode']])
```

## 修改策略

PoliciesManagementClient().update(code, updates)

> 修改策略，系统内置策略由 {{$localeConfig.brandName}} 官方维护，不能修改和删除。

#### 参数

- `code` \<string\> 策略唯一标志
- `updates` \<Object\>
- `updates.description` \<string\> 描述
- `updates.statements` \<PolicyStatement[]\>
- `updates.newCode` \<string\> 新的唯一标志，如果传入，需要保证其在用户池内是唯一的。

#### 示例

```python
newStatements = [
    {
        'resource': 'book:123',
        'actions': ['books:read', 'books:update'],
        'effect': 'ALLOW'
    }
]
policy = management_client.policies.update(
    code='PolicyCode',
    statements=newStatements
)
```

## 获取策略详情

PoliciesManagementClient().detail(code)

> 获取策略详情

#### 参数

- `code` \<string\> 策略唯一标志

const policy = await managementClient.policies.detail('CODE');

#### 示例

```python
code = 'PolicyCode'
policy = management_client.policies.detail(code)
```

## 获取策略列表

PoliciesManagementClient().list(options)

> 获取策略列表

#### 参数

- `options` \<Object\>
- `options.page` \<number\> 默认值为 : `1`。
- `options.limit` \<number\> 默认值为 : `10`。
- `options.excludeDefault` \<boolean\> 是否排除系统默认资源 默认值为 : `true`。

#### 示例

```python
data = management_client.policies.list()
totalCount, _list = data['totalCount'], data['list']
# totalCount 总数
# _list 当前页列表
```

## 获取策略授权记录

PoliciesManagementClient().list_assignments(code, page, limit)

> 获取策略授权记录

#### 参数

- `code` \<string\> 策略唯一标志
- `page` \<number\> 默认值为 : `1`。
- `limit` \<number\> 默认值为 : `10`。

#### 示例

```python
data = management_client.policies.list_assignments(
    code='PolicyCode'
)
totalCount, _list = data['totalCount'], data['list']
# totalCount 总数
# _list 当前页列表
```

## 添加策略授权

PoliciesManagementClient().add_assignments(policies, targetType, targetIdentifiers)

> 添加策略授权，可以将策略授权给用户和角色，授权给角色的策略会被该角色下的所有用户继承 。此接口可以进行批量操作。

#### 参数

- `policies` \<string[]\> 策略 code 列表
- `targetType` \<PolicyAssignmentTargetType\> 可选值为 USER (用户) 和 ROLE (角色)
- `targetIdentifiers` \<string[]\> 用户 id 列表和角色 code 列表

#### 示例

```python
management_client.policies.add_assignments(
    policies=['PolicyCode'],
    targetType='USER', # 授权给用户
    targetIdentifiers=['USERID'] # 用户的 ID
)

management_client.policies.add_assignments(
    policies=['PolicyCode'],
    targetType='ROLE', # 授权给角色
    targetIdentifiers=['PolicyCode'] # 角色的唯一标志
)
```

## 撤销策略授权

PoliciesManagementClient().remove_assignments(policies, targetType, targetIdentifiers)

> 撤销策略授权，此接口可以进行批量操作。

#### 参数

- `policies` \<string[]\> 策略 code 列表
- `targetType` \<PolicyAssignmentTargetType\> 可选值为 USER (用户) 和 ROLE (角色)
- `targetIdentifiers` \<string[]\> 用户 id 列表和角色 code 列表

#### 示例

```python
management_client.policies.remove_assignments(
    policies=['PolicyCode'],
    targetType='ROLE',
    targetIdentifiers=['RoleCode']
)
```
