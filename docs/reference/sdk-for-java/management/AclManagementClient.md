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

```java
CommonMessage message = managementClient.acl().allow("resource", "action").execute();
```

## 判断某个用户是否对某个资源有某个操作权限

AclManagementClient().isAllowed(userId, action, resource)

> 判断某个用户是否对某个资源有某个操作权限

#### 参数

- `userId` \<string\> 用户 ID
- `action` \<string\> 操作名称，推荐使用 \<resourceType\>:\<actionName\> 的格式，如 `books:edit`, `books:list`
- `resource` \<string\> 资源名称, 必须为 \<resourceType\>:\<resourceId\> 格式或者为 _, 如 `_`,`books:123`,`books:\*`

#### 示例

```java
boolean allowed = managementClient.acl().isAllowed("user id", "resource", "action").execute();
```
