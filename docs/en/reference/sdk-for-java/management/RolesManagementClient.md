---
meta:
  - name: description
    content: RolesManagementClient
---

# RolesManagementClient

<LastUpdated/>


> This client is used to manage {{$localeConfig.brandName}} roles. It can create, query, update and delete roles, add/delete users to/from roles, add/delete role's policy and perform other operations.

## Create a role

RolesManagementClient().create(code, description)

> Create a role

#### Parameters

- `code` \<string\> Unique id of the role
- `description` \<string\> description

#### Example

```java
Role role = managementClient.roles().create(new CreateRoleParam("code")).execute();
```

## Delete a role

RolesManagementClient().delete(code)

> Delete a role

#### Parameter

- `code` \<string\> Unique id of the role

#### Example

```java
CommonMessage message = managementClient.roles().delete("code").execute();
```

## Bulk delete roles

RolesManagementClient().deleteMany(codeList)

> Bulk delete roles.

#### Parameter

- `codeList` \<string[]\> A list of unique ids for roles

#### Example

```java
ArrayList<String> list = new ArrayList<String>();
list.add("code");
CommonMessage result = managementClient.roles().deleteMany(list).execute();
```

## Update a role

RolesManagementClient().update(code, input)

> Update a role

#### Parameters

- `code` \<string\> Unique id of the role
- `input` \<Object\>
- `input.description` \<string\> description
- `input.newCode` \<string\> New unique id

#### Example

```java
Role role = rolesManagementClient.roles().update(new UpdateRoleParam("code").withDescription("desc")).execute();
```

## Get role details

RolesManagementClient().detail(code)

> Get role details

#### Parameter

- `code` \<string\> Unique id of the role

#### Example

```java
Role role = managementClient.roles().detail("code").execute();
```

## Get roles list

RolesManagementClient().list(page, limit)

> Get roles list

#### Parameters

- `page` \<number\> Page number. The default value is: `1`.
- `limit` \<number\> Number of roles per page. The default value is: `10`.

#### Example

```java
PaginatedRoles roles = managementClient.roles().list().execute();
```

## Get role's users list

RolesManagementClient().listUsers(code)

> Get role's users list

#### Parameter

- `code` \<string\> Unique id of the role

#### Example

```java
PaginatedUsers users = managementClient.roles().listUsers("code").execute();
```

## Add users

RolesManagementClient().addUsers(code, userIds)

> Add users

#### Parameters

- `code` \<string\> Unique id of the role
- `userIds` \<string[]\> User ID list

#### Example

```java
ArrayList<String> userIds = new ArrayList<>();
userIds.add("userId");
CommonMessage message = managementClient.roles().addUsers("code", userIds).execute();
```

## Remove a user

RolesManagementClient().removeUsers(code, userIds)

> Remove a user 

#### Parameters

- `code` \<string\> Unique id of the role
- `userIds` \<string[]\> User ID list

#### Example

```java
ArrayList<String> userIds = new ArrayList<>();
userIds.add("userId");
CommonMessage message = managementClient.roles().removeUsers("code", userIds).execute();
```

## Get the role policy list

RolesManagementClient().listPolicies(code, page, limit)

> Get the role policy list

#### Parameters

- `code` \<string\> Unique id of the role
- `page` \<number\> Page number. The default value is: `1`.
- `limit` \<number\> Number of policy records shown per page. The default value is: `10`.

#### Example

```java
PaginatedPolicyAssignments result = managementClient.roles().listPolicies("code").execute();
```

## Add policies

RolesManagementClient().addPolicies(code, policies)

> Add policies for roles.

#### Parameters

- `code` \<string\> Unique id of the role
- `policies` \<string[]\> policy list

#### Example

```java
ArrayList<String> policies = new ArrayList<>();
policies.add("policy id");
CommonMessage message = managementClient.roles().addPolicies("code", policies).execute();
```

## Remove policies

RolesManagementClient().removePolicies(code, policies)

> Remove policies for roles

#### Parameters

- `code` \<string\> Unique id of the role
- `policies` \<string[]\> policy list

#### Example

```java
ArrayList<String> policies = new ArrayList<>();
policies.add("policy id");
CommonMessage message = managementClient.roles().removePolicies("code", policies).execute();
```
