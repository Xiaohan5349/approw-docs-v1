---
meta:
  - name: description
    content: Roles Management
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

```php
$role = $managementClient->roles()->create("code");
```

## Delete a role

RolesManagementClient().delete(code)

> Delete a role

#### Parameter

- `code` \<string\> Unique id of the role

#### Example

```php
$message = $managementClient->roles()->delete("code");
```

## Bulk delete roles

RolesManagementClient().deleteMany(codeList)

> Bulk delete roles.

#### Parameter

- `codeList` \<string[]\> A list of unique ids for roles

#### Example

```php
$message = $managementClient->roles()->deleteMany(["code"]);
```

## Update a role

RolesManagementClient().update(code, input)

> Update a role

#### Parameters

- `code` \<string\> Unique id of the role
- `input` \<Object\>
- `input.description` \<string\> Description
- `input.newCode` \<string\> New unique id

#### Example

```php
$role = $managementClient->roles()->update("code", "desc");
```

## Get role details

RolesManagementClient().detail(code)

> Get role details

#### Parameter

- `code` \<string\> Unique id of the role

#### Example

```php
$role = $managementClient->roles()->detail("code");
```

## Get roles list

RolesManagementClient().list(page, limit)

> Get roles list

#### Parameters

- `page` \<number\> Page number. The default value is: `1`.
- `limit` \<number\> Number of roles per page. The default value is: `10`.

#### Example

```php
$roles = $managementClient->roles()->paginate();
```

## Get role's users list

RolesManagementClient().listUsers(code)

> Get role's users list

#### Parameter

- `code` \<string\> Unique id of the role

#### Example

```php
$users = $managementClient->roles()->listUsers("code");
```

## Add users

RolesManagementClient().addUsers(code, userIds)

> Add users

#### Parameters

- `code` \<string\> Unique id of the role
- `userIds` \<string[]\> User ID list

#### Example

```php
$message = $managementClient->roles()->addUsers("code", ["userId"]);
```

## Remove a user

RolesManagementClient().removeUsers(code, userIds)

> Remove a user 

#### Parameters

- `code` \<string\> Unique id of the role
- `userIds` \<string[]\> User ID list

#### Example

```php
$message = $managementClient->roles()->removeUsers("code", ["userId"]);
```

## Get the role policy list

RolesManagementClient().listPolicies(code, page, limit)

> Get the role policy list

#### Parameters

- `code` \<string\> Unique id of the role
- `page` \<number\> Page number. The default value is: `1`.
- `limit` \<number\> Number of policy records shown per page. The default value is: `10`.

#### Example

```php
$policies = $managementClient->roles()->listPolicies("code");
```

## Add policies

RolesManagementClient().addPolicies(code, policies)

> Add policies for roles.

#### Parameters

- `code` \<string\> Unique id of the role
- `policies` \<string[]\> policy list

#### Example

```php
$message = $managementClient->roles()->addPolicies("code", ["policy id"]);
```

## Remove policies

RolesManagementClient().removePolicies(code, policies)

> Remove policies for roles

#### Parameters

- `code` \<string\> Unique id of the role
- `policies` \<string[]\> policy list

#### Example

```php
$message = $managementClient->roles()->removePolicies("code", ["policy id"]);
```

## Get a list of all resources authorized by the role

RolesManagementClient.listAuthorizedResources(roleCode, namespace, opts = [])

>Get a list of all resources authorized by the role

#### Parameters

- `roleCode` \<string\> role code
- `namespace` \<string\> The code of the permission group, please refer to the [resource of using permission group management](/docs/en/guides/access-control/resource-group.md) for details;
- `resourceType` \<string\> Optional, resource type. All authorized resources will be returned by default. The existing resource types are as follows:
  - `DATA`
  - `API`
  - `MENU`
  - `BUTTON`

#### Example

```php
use Authing\Mgmt\RolesManagementClient;
use Authing\Mgmt\ManagementClient;

$managementClient = new ManagementClient('USERPOOL_ID', 'SECRET');
$managementClient->requestToken();

$rolesManagementClient = new RolesManagementClient($managementClient);

$data = $rolesManagementClient->listAuthorizedResources('roleCode', "default");
```
#### Sample data

- `type` is the resource type;
- `code`: resource descriptor, if it is a `DATA` type resource, the format is `resourceType:resourceId`, such as `books:*` means all books, `books:1` means the book with ID 1.
- `actions`: The user is authorized to operate on the resource.

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

