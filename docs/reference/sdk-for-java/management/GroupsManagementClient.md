---
meta:
  - name: description
    content: 管理分组
---

# 管理分组

<LastUpdated/>


> 此模块用于管理 {{$localeConfig.brandName}} 分组，可以进行分组的增删改查、分组添加/删除用户、分组添加/删除策略 等操作。

## 创建分组

GroupsManagementClient().create(groupInfo)

> 创建分组

#### 参数

- `groupInfo` \<CreateGroupParam\> 分组资料
- `groupInfo.code` \<string\> 分组唯一标志符
- `groupInfo.name` \<boolean\> 分组名称
- `groupInfo.description` \<string\> 描述

#### 示例

```java
String code = "code1";
String name = "name1";
String description = "desc1";
Group group = managementClient.group().create(new CreateGroupParam(code, name, description)).execute();
```

## 删除分组

GroupsManagementClient().delete(code)

> 删除分组

#### 参数

- `code` \<string\> 分组唯一标志符

#### 示例

```java
String code = "code1";
CommonMessage message = managementClient.group().delete(code).execute();
```

## 修改分组

GroupsManagementClient().update(groupInfo)

> 修改分组

#### 参数

- `groupInfo` \<CreateGroupParam\> 分组资料
- `groupInfo.code` \<string\> 分组唯一标志符
- `groupInfo.name` \<boolean\> 分组名称
- `groupInfo.description` \<string\> 描述
- `groupInfo.newCode` \<string\> 新的唯一标志符

#### 示例

```java
String code = "code1";
String name = "name1";
String description = "desc1";
String newCode = "code2";
Group group = managementClient.group().update(new UpdateGroupParam(code, name, description, newCode)).execute();
```

## 获取分组详情

GroupsManagementClient().detail(code)

#### 参数

- `code` \<string\> 分组唯一标志符

#### 示例

```java
String code = "code1";
Group group = managementClient.group().detail(code).execute();
```

## 获取分组列表

GroupsManagementClient().list(listParam)

> 获取分组列表

#### 参数

- `listParam` \<GroupsParam\> 分页请求参数
- `listParam.userId` \<string\> 用户 ID
- `listParam.page` \<number\> 页码数 默认值为 : `1`
- `listParam.limit` \<number\> 每页个数 默认值为 : `10`
- `listParam.sortBy` \<SortByEnum\> 排序规则

#### 示例

```java
String userId = "userId1";
int page = 1;
int limit = 10;
SortByEnum sortEnum = SortByEnum.CREATEDAT_DESC;
PaginatedGroups groups = managementClient.group().list(new GroupsParam(userId, page, limit, sortEnum)).execute();
```

## 批量删除分组

GroupsManagementClient().deleteMany(codeList)

> 批量删除分组

#### 参数

- `codeList` \<string[]\> 分组唯一标志符列表

#### 示例

```java
ArrayList<String> codeList = new ArrayList<>();
codeList.add("code1");
CommonMessage message = managementClient.group().deleteMany(codeList).execute();
```

## 获取分组用户列表

GroupsManagementClient().listUsers(groupWithUsersParam)

> 获取分组用户列表

#### 参数

- `groupWithUsersParam` \<GroupWithUsersParam\>
- `groupWithUsersParam.code` \<string\> 分组唯一标志符
- `groupWithUsersParam.page` \<number\> 页码数 默认值为 : `1`
- `groupWithUsersParam.limit` \<number\> 每页个数 默认值为 : `10`

#### 示例

```java
String code = "code1";
int page = 1;
int limit = 10;
PaginatedUsers users = managementClient.group().listUsers(code, page, limit).execute();
```

## 添加用户

GroupsManagementClient().addUsers(addUserToGroupParam)

> 添加用户

#### 参数

- `addUserToGroupParam` \<AddUserToGroupParam\>
- `addUserToGroupParam.code` \<string\> 分组唯一标志符
- `addUserToGroupParam.userIds` \<string[]\> 用户 ID 列表

#### 示例

```java
String code = "code1";
List<String> userIds = new ArrayList<>();
userIds.add("userId1");
CommonMessage message = managementClient.group().addUsers(new AddUserToGroupParam(userIds, code)).execute();
```

## 移除用户

GroupsManagementClient().removeUsers(removeUserFromGroupParam)

> 移除用户

#### 参数

- `removeUserFromGroupParam` \<RemoveUserFromGroupParam\>
- `removeUserFromGroupParam.code` \<string\> 分组唯一标志符
- `removeUserFromGroupParam.userIds` \<string[]\> 用户 ID 列表

#### 示例

```java
String code = "code1";
List<String> userIds = new ArrayList<>();
userIds.add("userId1");
CommonMessage message = managementClient.group().removeUsers(new RemoveUserFromGroupParam(userIds, code)).execute();
```
