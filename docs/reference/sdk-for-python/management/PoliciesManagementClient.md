---
meta:
  - name: description
    content: PoliciesManagementClient
---

# PoliciesManagementClient

<LastUpdated/>

> The core of {{$localeConfig.brandName}}'s access and authorization management model is **Resource** and **Policy**. A policy defines an operation privilege for a certain resource. By assigning the policy to a user (or role), you can know whether the user (or role) has operational privilege of a resource.

## Create a policy

PoliciesManagementClient().create(code，statement)

> Create a policy

#### Parameters

- `code` \<string\> Unique id of the policy.
- `statements` \<PolicyStatement[]\>
- `description` \<string\> Description.

#### Example

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

## Delete a policy

PoliciesManagementClient().delete(code)

> Delete a policy. System built-in policies are maintained by {{$localeConfig.brandName}} official. They can not be updated or deleted.

#### Parameter

- `code` \<string\> Unique id of the policy.

#### Example

```python
management_client.policies.delete('PolicyCode')
```

## Bulk delete policies

PoliciesManagementClient().delete_many(codeList)

> Bulk delete policies. System built-in policies are maintained by {{$localeConfig.brandName}} official. They can not be updated or deleted.

#### Parameter

- `codeList` \<string\> Unique id of the policy list.

#### Example

```python
management_client.policies.delete_many(['PolicyCode']])
```

## Update a policy 

PoliciesManagementClient().update(code, updates)

> Update a policy. System built-in policies are maintained by {{$localeConfig.brandName}} official. They can not be updated or deleted.

#### Parameter

- `code` \<string\> Unique id of the policy
- `updates` \<Object\>
- `updates.description` \<string\> Description
- `updates.statements` \<PolicyStatement[]\>
- `updates.newCode` \<string\> The new unique id. If it is passed in, it must be unique in the user pool.

#### Example

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

## Get policy details

PoliciesManagementClient().detail(code)

> Get policy details

#### Parameter

- `code` \<string\> Unique id of the policy

const policy = await managementClient.policies.detail('CODE');

#### Example

```python
code = 'PolicyCode'
policy = management_client.policies.detail(code)
```

## Get policy list

PoliciesManagementClient().list(options)

> Get policy list

#### Parameters

- `options` \<Object\>
- `options.page` \<number\> The default value is: `1`.
- `options.limit` \<number\> The default value is: `10`.
- `options.excludeDefault` \<boolean\> Whether to exclude system default resources. The default value is: `true`.

#### Example

```python
data = management_client.policies.list()
totalCount, _list = data['totalCount'], data['list']
# totalCount: total ammount
# _list: current page
```

## Get policy assignment record

PoliciesManagementClient().list_assignments(code, page, limit)

> List policy assignment records.

#### Parameters

- `code` \<string\> Unique id of the policy
- `page` \<number\> The default value is: `1`.
- `limit` \<number\> The default value is: `10`.

#### Example

```python
data = management_client.policies.list_assignments(
    code='PolicyCode'
)
totalCount, _list = data['totalCount'], data['list']
# totalCount: total amount
# _list: current page
```

## Add a policy assignment

PoliciesManagementClient().add_assignments(policies, targetType, targetIdentifiers)

> Add a policy assignment. You can assign the policy to users and roles, and the policy assigned to the role will be inherited by all users in this role. This interface can perform batch operations.

#### Parameters

- `policies` \<string[]\> Policy code list
- `targetType` \<PolicyAssignmentTargetType\> Optional values are USER and ROLE
- `targetIdentifiers` \<string[]\> User id list and role code list

#### Example

```python
management_client.policies.add_assignments(
    policies=['PolicyCode'],
    targetType='USER', # authorize the user
    targetIdentifiers=['USERID'] # user ID
)

management_client.policies.add_assignments(
    policies=['PolicyCode'],
    targetType='ROLE', # authorize to role
    targetIdentifiers=['PolicyCode'] # user unique ID
)
```

## Remove a policy assignment

PoliciesManagementClient().remove_assignments(policies, targetType, targetIdentifiers)

> Remove a policy assignment. This interface can perform batch operations.

#### Parameters

- `policies` \<string[]\> Policy code list.
- `targetType` \<PolicyAssignmentTargetType\> Optional values are USER and ROLE.
- `targetIdentifiers` \<string[]\> User id list and role code list.

#### Example

```python
management_client.policies.remove_assignments(
    policies=['PolicyCode'],
    targetType='ROLE',
    targetIdentifiers=['RoleCode']
)
```
