---
meta:
  - name: description
    content: AclManagementClient
---

# AclManagementClient

<LastUpdated/>


> {{$localeConfig.brandName}} builds an authorization model based on PBAC (Policy Based Access Control), 
> which can be combined with RBAC (Role Based Access Control) to achieve high flexible and refined privilege control. 
> This client abstracts this model into two methods: allow and isAllowed.

## Allow a user to perform an operation on a resource

AclManagementClient().allow(userId, action, resource)

> Allow a user to perform an operation on a resource

#### Parameters:

- `userId` \<string\> User ID
- `action` \<string\> The name of the action, which is recommended to use the format of  \<resourceType\>:\<actionName\> , such as `books:edit`, `books:list`
- `resource` \<string\> Resource name, which must be in the format of \<resourceType\>:\<resourceId\> or _, such as `_`,`books:123`,`books:\*`.

#### Example:

```python
# allow a user to operate on a user
management_client.acl.allow(
    resource='books:123',
    action='books:edit',
    userId='USERID'
)

# allow a role to operate on a role
management_client.acl.allow(
    resource='books:*',
    action='books:edit',
    role='ROLE'
)
```

## Check whether a user has operation authority of a resource

AclManagementClient().is_allowed(userId, action, resource)

> Check whether a user has operation authority of a resource.

#### Parameters:

- `userId` \<string\> User ID
- `action` \<string\> The name of the action, which is recommended to use the format of  \<resourceType\>:\<actionName\> , such as `books:edit`, `books:list`
- `resource` \<string\> Resource name, which must be in the format of \<resourceType\>:\<resourceId\> or _, such as `_`,`books:123`,`books:\*`.

#### Example:

```python
is_allowed = management_client.acl.is_allowed(
    userId='USERID',
    resource='books:*',
    action='books:edit',
)
```
