---
meta:
  - name: description
    content: UdfManagementClient
---

# UdfManagementClient

<LastUpdated/>

Udf is short for User Defined Field. {{$localeConfig.brandName}} data entities (such as users, roles, groups, organizations, etc.) can add user defined fields which {{$localeConfig.brandName}} does not built-in. For example, if you need to create a school-related application, you can add a user defined field: `school` field.

You can ask the user to supplement the information in this field after the user registration is completed,[click here to check the details](/guides/authentication/extensibility/user-defined-field.md).

## Set user defined field metadata

UdfManagementClient().set(targetType, key, dataType, label)

> Set user defined field metadata. If the field does not exist, it will be created automatically.

#### Parameters

- `targetType` \<UdfTargetType\> User defined field target type. Use `USER` to represent user and `ROLE` to represent role.
- `key` \<string\> Field key
- `dataType` \<UdfDataType\> Data type. It currently supports five data types: STRING, NUMBER, DATETIME, BOOLEAN and OBJECT.
- `label` \<string\> Field Label, which commonly is a Human Readable string.

#### Example

```php
$udf = $managementClient->udf()->set(UDFTargetType::USER, "key", UDFDataType::STRING, "label");
```

## Delete a user defined field

UdfManagementClient().remove(targetType, key)

> Delete a user defined field.

#### Parameters

- `targetType` \<UdfTargetType\> User defined field target type. Use `USER` to represent user and `ROLE` to represent role.
- `key` \<string\> Field key

#### Example

```php
$message = $managementClient->udf()->remove(UDFTargetType::USER, "key");
```

## Get the user defined field

UdfManagementClient().list(targetType)

> Get the user defined field defined by the user pool.

#### Parameter

- `targetType` \<UdfTargetType\> User defined field target type. Use `USER` to represent user and `ROLE` to represent role.

#### Example

```php
$udfs = $managementClient->udf()->paginate(UDFTargetType::USER);
```
