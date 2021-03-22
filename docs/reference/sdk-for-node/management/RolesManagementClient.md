# 管理角色

<LastUpdated/>

> 此模块用于管理 {{$localeConfig.brandName}} 角色，可以进行角色的增删改查、角色添加/删除用户、角色添加/删除策略 等操作。

请使用以下方式使用该模块，而不要直接初始化该模块：

```javascript
import { ManagementClient } from 'authing-js-sdk'
const managementClient = new ManagementClient({
  userPoolId: 'YOUR_USERPOOL_ID',
  secret: 'YOUR_USERPOOL_SECRET',
})
managementClient.roles.list // 获取角色列表
managementClient.roles.create // 创建角色
managementClient.roles.listUsers // 获取角色用户列表
```

## 创建角色

RolesManagementClient().create(code, description)

> 创建角色

#### 参数

- `code` \<string\> 角色唯一标志符
- `description` \<string\> 描述

#### 示例

```javascript
managementClient.roles.create('rolea', 'RoleA')
```

#### 返回值

- `Promise<DeepPartial<Role>>`

## 删除角色

RolesManagementClient().delete(code)

> 删除角色

#### 参数

- `code` \<string\> 角色唯一标志符

#### 示例

```javascript
managementClient.roles.delete('rolea')
```

#### 返回值

- `Promise<CommonMessage>`

## 批量删除角色

RolesManagementClient().deleteMany(codeList)

> 批量删除角色

#### 参数

- `codeList` \<string[]\> 角色唯一标志符列表

#### 示例

```javascript
managementClient.roles.delete(['rolea'])
```

#### 返回值

- `Promise<CommonMessage>`

## 修改角色

RolesManagementClient().update(code, input)

> 修改角色

#### 参数

- `code` \<string\> 角色唯一标志符
- `input` \<Object\>
- `input.description` \<string\> 描述信息
- `input.newCode` \<string\> 新的唯一标志符

#### 示例

```javascript
managementClient.roles.update('rolea', { newCode: 'newcode' })
```

#### 返回值

- `Promise<DeepPartial<Role>>`

## 获取角色详情

RolesManagementClient().detail(code)

> 获取角色详情

#### 参数

- `code` \<string\> 角色唯一标志符

#### 示例

```javascript
managementClient.roles.detail('manager')
```

#### 返回值

- `Promise<DeepPartial<Role>>` 角色详情

## 获取角色列表

RolesManagementClient().list(page, limit)

> 获取角色列表

#### 参数

- `page` \<number\> 页码数 默认值为 : `1`。
- `limit` \<number\> 每页个数 默认值为 : `10`。

#### 示例

```javascript
managementClient.roles.list(2, 10)
```

#### 返回值

- `Promise<DeepPartial<PaginatedRoles>>`

## 获取角色用户列表

RolesManagementClient().listUsers(code)

> 获取角色用户列表

#### 参数

- `code` \<string\> 角色唯一标志符

#### 示例

```javascript
managementClient.roles.listUsers(code)
```

#### 返回值

- `Promise<DeepPartial<PaginatedUsers>>`

## 添加用户

RolesManagementClient().addUsers(code, userIds)

> 添加用户

#### 参数

- `code` \<string\> 角色唯一标志符
- `userIds` \<string[]\> 用户 ID 列表

#### 示例

```javascript
managementClient.roles.addUsers(code, ['USERID1', 'USERID2'])
```

#### 返回值

- `Promise<CommonMessage>`

## 移除用户

RolesManagementClient().removeUsers(code, userIds)

> 移除用户

#### 参数

- `code` \<string\> 角色唯一标志符
- `userIds` \<string[]\> 用户 ID 列表

#### 示例

```javascript
managementClient.roles.removeUsers(code, ['USERID1', 'USERID2'])
```

#### 返回值

- `Promise<CommonMessage>`

## 获取角色被授权的所有资源列表

RolesManagementClient.listAuthorizedResources(roleCode, namespace, {
resourceType: ResourceType.MENU,
})

> 获取一个角色被授权的所有资源。

#### 参数

- `roleCode` \<string\> 角色 code；
- `namespace` \<string\> 权限分组的 code，详情请见[使用权限分组管理权限资源](/guides/access-control/resource-group.md)；
- `resourceType` \<string\> 可选，资源类型，默认会返回所有有权限的资源，现有资源类型如下：
  - `DATA`: 数据类型；
  - `API`: API 类型数据；
  - `MENU`: 菜单类型数据；
  - `BUTTON`: 按钮类型数据。

#### 示例

```javascript
import { ResourceType } from 'authing-js-sdk'

managementClient.roles.listAuthorizedResources('ROLE_CODE', 'code', {
  resourceType: ResourceType.MENU,
})
```

#### 示例数据

- `type` 为资源类型；
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

## 获取角色策略列表

RolesManagementClient().listPolicies(code, page, limit)

> 获取角色策略列表

#### 参数

- `code` \<string\> 角色唯一标志符
- `page` \<number\> 页码数 默认值为 : `1`。
- `limit` \<number\> 页码个数 默认值为 : `10`。

#### 示例

```javascript
managementClient.roles.listPolicies('codea', 1, 10)
```

#### 返回值

- `Promise<PaginatedPolicyAssignments>`

## 授权策略

RolesManagementClient().addPolicies(code, policies)

> 给角色授权策略策略

#### 参数

- `code` \<string\> 角色唯一标志符
- `policies` \<string[]\> 策略列表

#### 示例

```javascript
managementClient.roles.addPolicies('rolea', ['PolicyA', 'PolicyB'])
```

#### 返回值

- `Promise<CommonMessage>`

## 角色移除策略

RolesManagementClient().removePolicies(code, policies)

> 角色移除策略

#### 参数

- `code` \<string\> 角色唯一标志符
- `policies` \<string[]\> 策略列表

#### 示例

```javascript
managementClient.roles.removePolicies('rolea', ['PolicyA', 'PolicyB'])
```

#### 返回值

- `Promise<CommonMessage>`
