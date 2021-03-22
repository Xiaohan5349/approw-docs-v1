# 管理分组

<LastUpdated/>

> 此模块用于管理 {{$localeConfig.brandName}} 分组，可以进行分组的增删改查、分组添加/删除用户、分组添加/删除策略 等操作。

请使用以下方式使用该模块，而不要直接初始化该模块：

```javascript
import { ManagementClient } from 'authing-js-sdk'
const managementClient = new ManagementClient({
  userPoolId: 'YOUR_USERPOOL_ID',
  secret: 'YOUR_USERPOOL_SECRET',
})
managementClient.groups.list // 获取分组列表
managementClient.groups.create // 创建分组
managementClient.groups.listUsers // 获取分组用户列表
```

## 创建分组

GroupsManagementClient().create(code, name, description)

> 创建分组

#### 参数

- `code` \<string\> 分组唯一标志符
- `name` \<string\> 分组名称
- `description` \<string\> 描述

#### 示例

```javascript
managementClient.groups.create('group', '分组 xxx')
```

#### 返回值

- `Promise<DeepPartial<Group>>`

## 删除分组

GroupsManagementClient().delete(code)

> 删除分组

#### 参数

- `code` \<string\> 分组唯一标志符

#### 示例

```javascript
managementClient.groups.delete('rolea')
```

#### 返回值

- `Promise<CommonMessage>`

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

```javascript
managementClient.groups.update('group', { newCode: 'newcode' })
```

#### 返回值

- `Promise<DeepPartial<Group>>`

## 获取分组详情

GroupsManagementClient().detail(code)

> 获取分组详情

#### 参数

- `code` \<string\> 分组唯一标志符

#### 示例

```javascript
managementClient.groups.detail('manager')
```

#### 返回值

- `Promise<DeepPartial<Group>>` 分组详情

## 获取分组列表

GroupsManagementClient().list(page, limit)

> 获取分组列表

#### 参数

- `page` \<number\> 页码数 默认值为 : `1`。
- `limit` \<number\> 每页个数 默认值为 : `10`。

#### 示例

```javascript
managementClient.groups.list(1, 10)
```

#### 返回值

- `Promise<DeepPartial<PaginatedGroups>>`

## 批量删除分组

GroupsManagementClient().deleteMany(codeList)

> 批量删除分组

#### 参数

- `codeList` \<string[]\> 分组唯一标志符列表

#### 示例

```javascript
managementClient.groups.deleteMany(['groupa', 'groupb'])
```

#### 返回值

- `Promise<CommonMessage>`

## 获取分组用户列表

GroupsManagementClient().listUsers(code, page, limit)

> 获取分组用户列表

#### 参数

- `code` \<string\> 分组唯一标志符
- `page` \<number\> 页码数 默认值为 : `1`。
- `limit` \<number\> 每页个数 默认值为 : `10`。

#### 示例

```javascript
managementClient.groups.listUsers(code)
```

#### 返回值

- `Promise<DeepPartial<PaginatedUsers>>`

## 添加用户

GroupsManagementClient().addUsers(code, userIds)

> 添加用户

#### 参数

- `code` \<string\> 分组唯一标志符
- `userIds` \<string[]\> 用户 ID 列表

#### 示例

```javascript
managementClient.groups.addUsers(code, ['USERID1', 'USERID2'])
```

#### 返回值

- `Promise<CommonMessage>`

## 移除用户

GroupsManagementClient().removeUsers(code, userIds)

> 移除用户

#### 参数

- `code` \<string\> 分组唯一标志符
- `userIds` \<string[]\> 用户 ID 列表

#### 示例

```javascript
managementClient.groups.removeUsers(code, ['USERID1', 'USERID2'])
```

#### 返回值

- `Promise<CommonMessage>`

## 获取分组被授权的所有资源列表

GroupsManagementClient.listAuthorizedResources(groupCode, namespace, {
resourceType: ResourceType.MENU,
})

> 获取一个分组被授权的所有资源。

#### 参数

- `groupCode` \<string\> 分组 code；
- `namespace` \<string\> 权限分组的 code，详情请见[使用权限分组管理权限资源](/guides/access-control/resource-group.md)；
- `resourceType` \<string\> 可选，资源类型，默认会返回所有有权限的资源，现有资源类型如下：
  - `DATA`: 数据类型；
  - `API`: API 类型数据；
  - `MENU`: 菜单类型数据；
  - `BUTTON`: 按钮类型数据。

#### 示例

```javascript
managementClient.groups.listAuthorizedResources('GROUP_CODE', 'code')
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
