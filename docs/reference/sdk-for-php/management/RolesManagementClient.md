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

```php
$role = $managementClient->roles()->create("code");
```

## 删除角色

RolesManagementClient().delete(code)

> 删除角色

#### 参数

- `code` \<string\> 角色唯一标志符

#### 示例

```php
$message = $managementClient->roles()->delete("code");
```

## 批量删除角色

RolesManagementClient().deleteMany(codeList)

> 批量删除角色

#### 参数

- `codeList` \<string[]\> 角色唯一标志符列表

#### 示例

```php
$message = $managementClient->roles()->deleteMany(["code"]);
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

```php
$role = $managementClient->roles()->update("code", "desc");
```

## 获取角色详情

RolesManagementClient().detail(code)

> 获取角色详情

#### 参数

- `code` \<string\> 角色唯一标志符

#### 示例

```php
$role = $managementClient->roles()->detail("code");
```

## 获取角色列表

RolesManagementClient().list(page, limit)

> 获取角色列表

#### 参数

- `page` \<number\> 页码数 默认值为 : `1`。
- `limit` \<number\> 每页个数 默认值为 : `10`。

#### 示例

```php
$roles = $managementClient->roles()->paginate();
```

## 获取角色用户列表

RolesManagementClient().listUsers(code)

> 获取角色用户列表

#### 参数

- `code` \<string\> 角色唯一标志符

#### 示例

```php
$users = $managementClient->roles()->listUsers("code");
```

## 添加用户

RolesManagementClient().addUsers(code, userIds)

> 添加用户

#### 参数

- `code` \<string\> 角色唯一标志符
- `userIds` \<string[]\> 用户 ID 列表

#### 示例

```php
$message = $managementClient->roles()->addUsers("code", ["userId"]);
```

## 移除用户

RolesManagementClient().removeUsers(code, userIds)

> 移除用户

#### 参数

- `code` \<string\> 角色唯一标志符
- `userIds` \<string[]\> 用户 ID 列表

#### 示例

```php
$message = $managementClient->roles()->removeUsers("code", ["userId"]);
```

## 获取角色策略列表

RolesManagementClient().listPolicies(code, page, limit)

> 获取角色策略列表

#### 参数

- `code` \<string\> 角色唯一标志符
- `page` \<number\> 页码数 默认值为 : `1`。
- `limit` \<number\> 页码个数 默认值为 : `10`。

#### 示例

```php
$policies = $managementClient->roles()->listPolicies("code");
```

## 授权策略

RolesManagementClient().addPolicies(code, policies)

> 给角色授权策略策略

#### 参数

- `code` \<string\> 角色唯一标志符
- `policies` \<string[]\> 策略列表

#### 示例

```php
$message = $managementClient->roles()->addPolicies("code", ["policy id"]);
```

## 角色移除策略

RolesManagementClient().removePolicies(code, policies)

> 角色移除策略

#### 参数

- `code` \<string\> 角色唯一标志符
- `policies` \<string[]\> 策略列表

#### 示例

```php
$message = $managementClient->roles()->removePolicies("code", ["policy id"]);
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

