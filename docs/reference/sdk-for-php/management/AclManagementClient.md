---
meta:
  - name: description
    content: 管理权限、访问控制
---

# 管理权限、访问控制

<LastUpdated/>


> {{$localeConfig.brandName}} 基于 PBAC（Policy Based Access Control，基于策略的访问控制）构建权限模型，
> 可以和 RBAC （Role Based Access Control，基于角色的访问控制）结合，实现非常灵活、精细化的权限控制。
> 此模块将此模型抽象成了两个方法: allow, isAllowed。

## 允许某个用户对某个资源进行某个操作

AclManagementClient().allow(userId, action, resource)

> 允许某个用户对某个资源进行某个操作

#### 参数

- `userId` \<string\> 用户 ID
- `action` \<string\> 操作名称，推荐使用 \<resourceType\>:\<actionName\> 的格式，如 `books:edit`, `books:list`
- `resource` \<string\> 资源名称, 必须为 \<resourceType\>:\<resourceId\> 格式或者为 _, 如 `_`,`books:123`,`books:\*`

#### 示例

```php
$managementClient->acl()->allow("resource", "action", "user id");
```

## 判断某个用户是否对某个资源有某个操作权限

AclManagementClient().isAllowed(userId, action, resource)

> 判断某个用户是否对某个资源有某个操作权限

#### 参数

- `userId` \<string\> 用户 ID
- `action` \<string\> 操作名称，推荐使用 \<resourceType\>:\<actionName\> 的格式，如 `books:edit`, `books:list`
- `resource` \<string\> 资源名称, 必须为 \<resourceType\>:\<resourceId\> 格式或者为 _, 如 `_`,`books:123`,`books:\*`

#### 示例

```php
$managementClient->acl()->isAllowed("user id", "action", "resource");
```

## 获取某个对象被授权的所有资源列表

AclManagementClient.listAuthorizedResources(targetType, targetIdentifier, namespace, opts = [])

> 获取某个对象（用户、角色、分组）被授权的所有资源。

#### 参数

- `targetType` \<string\> 目标对象类型，如 USER， ROLE；
- `targetIdentifier` \<string\> 目标对象唯一标识符；
- `namespace` \<string\> 权限分组的 code，详情请见[使用权限分组管理权限资源](/guides/access-control/resource-group.md)；
- `resourceType` \<string\> 可选，资源类型，默认会返回所有有权限的资源，现有资源类型如下：
  - `DATA`: 数据类型；
  - `API`: API 类型数据；
  - `MENU`: 菜单类型数据；
  - `BUTTON`: 按钮类型数据。

#### 示例

```php
use Authing\Mgmt\RolesManagementClient;
use Authing\Mgmt\AclManagementClient;
use Authing\Types\PolicyAssignmentTargetType;

$managementClient = new ManagementClient('USERPOOL_ID', 'SECRET');
$managementClient->requestToken();

$aclManagementClient = new AclManagementClient($managementClient);

$data = $aclManagementClient->listAuthorizedResources(
  PolicyAssignmentTargetType::USER, 
  'user_id', 
  'default'
);
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

## 获取用户被授权的所有资源列表

UsersManagementClient.listAuthorizedResources(userId, namespace, opts = [])

> 获取一个用户被授权的所有资源，用户被授权的所有资源里面包括从角色、分组、组织机构继承的资源。

#### 参数

- `userId` \<string\> 用户 ID；
- `namespace` \<string\> 权限分组的 code，详情请见[使用权限分组管理权限资源](/guides/access-control/resource-group.md)；
- `resourceType` \<string\> 可选，资源类型，默认会返回所有有权限的资源，现有资源类型如下：
  - `DATA`: 数据类型；
  - `API`: API 类型数据；
  - `MENU`: 菜单类型数据；
  - `BUTTON`: 按钮类型数据。

#### 示例

```php
use Authing\Mgmt\RolesManagementClient;
use Authing\Mgmt\UsersManagementClient;

$managementClient = new ManagementClient('USERPOOL_ID', 'SECRET');
$managementClient->requestToken();

$userManagementClient = new UsersManagementClient($managementClient);

$data = $userManagementClient->listAuthorizedResources('userId', "default");
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



## 获取角色被授权的所有资源列表

RolesManagementClient.listAuthorizedResources(roleCode, namespace, opts = [])

> 获取某个角色被授权的所有资源。

#### 参数

- `roleCode` \<string\> 角色 code；
- `namespace` \<string\> 权限分组的 code，详情请见[使用权限分组管理权限资源](/guides/access-control/resource-group.md)；
- `resourceType` \<string\> 可选，资源类型，默认会返回所有有权限的资源，现有资源类型如下：
  - `DATA`: 数据类型；
  - `API`: API 类型数据；
  - `MENU`: 菜单类型数据；
  - `BUTTON`: 按钮类型数据。

#### 示例

```php
use Authing\Mgmt\RolesManagementClient;
use Authing\Mgmt\ManagementClient;

$managementClient = new ManagementClient('USERPOOL_ID', 'SECRET');
$managementClient->requestToken();

$rolesManagementClient = new RolesManagementClient($managementClient);

$data = $rolesManagementClient->listAuthorizedResources('roleCode', "default");
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


## 获取分组被授权的所有资源列表

GroupsManagementClient.listAuthorizedResources(groupCode, namespace, opts = [])

> 获取某个分组被授权的所有资源。

#### 参数

- `roleCode` \<string\> 角色 code；
- `namespace` \<string\> 权限分组的 code，详情请见[使用权限分组管理权限资源](/guides/access-control/resource-group.md)；
- `resourceType` \<string\> 可选，资源类型，默认会返回所有有权限的资源，现有资源类型如下：
  - `DATA`: 数据类型；
  - `API`: API 类型数据；
  - `MENU`: 菜单类型数据；
  - `BUTTON`: 按钮类型数据。

#### 示例

```php
use Authing\Mgmt\GroupsManagementClient;
use Authing\Mgmt\ManagementClient;

$managementClient = new ManagementClient('USERPOOL_ID', 'SECRET');
$managementClient->requestToken();

$groupsManagementClient = new GroupsManagementClient($managementClient);

$data = $groupsManagementClient->listAuthorizedResources('groupCode', "default");
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
