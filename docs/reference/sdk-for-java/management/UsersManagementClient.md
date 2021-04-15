---
meta:
  - name: description
    content: Users Management
---

# UsersManagementClient

<LastUpdated/>

> {{$localeConfig.brandName}} User ManagementClient

This client can create, query, update and delete users, refresh user token, manage user's group, user's role, user's policy and perform other operations.

## Create a user

UsersManagementClient().create(userInfo)

> An administrator can use this interface to create a user and the this process does not need to perform security checks such as SMS code verification and other verifications.

#### Parameters

- `userInfo` \<CreateUserInput\> User information
- `userInfo.email` \<string\> Email, unique in the user pool
- `userInfo.emailVerified` \<boolean\> Whether the email is verified
- `userInfo.phone` \<string\> Phone number
- `userInfo.phoneVerified` \<boolean\> Whether the phone number is verified
- `userInfo.unionid` \<string\> For the social login user, this field is the unique ID of the user in the third-party social login identity provide
- `userInfo.password` \<string\> Password
- `userInfo.registerSource` \<string\> Registration source, you can choose multiple
- `userInfo.username` \<string\> Username
- `userInfo.nickname` \<string\> Nickname
- `userInfo.photo` \<string\> Avatar
- `userInfo.company` \<string\> Company
- `userInfo.browser` \<string\> Browser
- `userInfo.loginsCount` \<number\> The number of login times. This field can be set when you migrate from the original user system to {{$localeConfig.brandName}}.
- `userInfo.lastLogin` \<string\> Last login time, a time string conforming to the ISO8601 format. (E.g. "2017-06-07T14:34:08.700Z", "2017-06-07T14:34:08.700 or "2017-06-07T14:34:08+04:00")
- `userInfo.lastIP` \<string\> The last login (or other activity) IP of the user
- `userInfo.signedUp` \<string\> Registration time, a time string in ISO8601 format. (E.g. "2017-06-07T14:34:08.700Z", "2017-06-07T14:34:08.700 or "2017-06-07T14:34:08+04:00")
- `userInfo.blocked` \<boolean\> Whether the account is disabled
- `userInfo.isDeleted` \<boolean\> mark whether the account is deleted
- `userInfo.device` \<string\> Device
- `userInfo.lastIP` \<string\>  Last logged in IP
- `userInfo.name` \<string\> Name
- `userInfo.givenName` \<string\> Given Name
- `userInfo.familyName` \<string\> Family Name
- `userInfo.middleName` \<string\> Middle Name
- `userInfo.profile` \<string\> Profile Url
- `userInfo.preferredUsername` \<string\> Preferred Name
- `userInfo.website` \<string\> Personal website
- `userInfo.gender` \<string\> Gender, M means male, F means female, U means unknown
- `userInfo.birthdate` \<string\> Birthday
- `userInfo.zoneinfo` \<string\> Time zone
- `userInfo.locale` \<string\> Language
- `userInfo.address` \<string\> Address
- `userInfo.streetAddress` \<string\> Street address
- `userInfo.locality` \<string\>
- `userInfo.region` \<string\> Region
- `userInfo.postalCode` \<string\> Zip code
- `userInfo.city` \<string\> City
- `userInfo.province` \<string\> Province
- `userInfo.country` \<string\> Country
- `userInfo.externalId` \<string\> User external ID

#### Example

```java
String email = "test@example.com";
String password = "123456";
User user = managementClient.users().create(new CreateUserInput().withEmail(email).withPassword(password)).execute();
```

## Update user information

UsersManagementClient \*().update(id, updates)

> Update user information

#### Parameters

- `id` \<string\> User ID
- `updates` \<UpdateUserInput\> Modified user information
- `updates.email` \<string\> Email
- `updates.emailVerified` \<boolean\> Whether the email is verified
- `updates.phone` \<string\> Phone number
- `updates.phoneVerified` \<boolean\> Whether the phone number is verified
- `updates.unionid` \<string\> For the social login user, this field is the unique ID of the user in the third-party social login identity provider
- `updates.password` \<string\> Password
- `updates.registerSource` \<string\> Registration source, you can select multiple
- `updates.tokenExpiredAt` \<string\> The token expiration time, a time string in the ISO8601 format. (Such as "2017-06-07T14:34:08.700Z", "2017-06-07T14:34:08.700 or "2017-06-07T14:34:08+04:00"). Set the field to be earlier than the current time can make the user's token invalid.
- `updates.username` \<string\> Username
- `updates.nickname` \<string\> Nickname
- `updates.photo` \<string\> Avatar
- `updates.company` \<string\> Company
- `updates.browser` \<string\> Browser
- `updates.loginsCount` \<number\> The number of login times. This field can be set when you migrate from the original user system to Approw.
- `updates.lastLogin` \<string\> Last login time, a time string in the ISO8601 format. (E.g. "2017-06-07T14:34:08.700Z", "2017-06-07T14:34:08.700 or "2017-06-07T14:34:08+04:00")
- `updates.lastIP` \<string\> The IP of the user's last login (or other activity)
- `updates.signedUp` \<string\> Registration time, a time string in the ISO8601 format. (E.g. "2017-06-07T14:34:08.700Z", "2017-06-07T14:34:08.700 or "2017-06-07T14:34:08+04:00")
- `updates.blocked` \<boolean\> Whether the account is disabled
- `updates.device` \<string\> Device
- `updates.lastIP` \<string\> Last logged in IP
- `updates.name` \<string\> Name
- `updates.givenName` \<string\> Given Name
- `updates.familyName` \<string\> Family Name
- `updates.middleName` \<string\> Middle Name
- `updates.profile` \<string\> Profile Url
- `updates.preferredUsername` \<string\> Preferred Name
- `updates.website` \<string\> Personal website
- `updates.gender` \<string\> Gender, M means male, F means female, U means unknown
- `updates.birthdate` \<string\> Birthday
- `updates.zoneinfo` \<string\> Timezone
- `updates.locale` \<string\> Langeage
- `updates.address` \<string\> Address
- `updates.streetAddress` \<string\> Street address
- `updates.locality` \<string\>
- `updates.region` \<string\> Region
- `updates.postalCode` \<string\> Zipcode
- `updates.city` \<string\> City
- `updates.province` \<string\> Province
- `updates.country` \<string\> Country
- `userInfo.externalId` \<string\> User external ID

#### Example

## Get user details

UsersManagementClient().detail(userId)

> Get user details by user ID. If you want to get user details by token, please use AuthenticationClient SDK.

#### Parameter

- `userId` \<string\> User ID

#### Example

```java
User result = managementClient.users().detail("userId").execute();
```

## Delete a user

UsersManagementClient().delete(userId)

> Delete a user.

#### Parameter

- `userId` \<string\> User ID

#### Example

```java
CommonMessage message = managementClient.users().delete("userId").execute();
```

## Batch delete users

UsersManagementClient().deleteMany(userIds)

> Batch delete users.

#### Parameter

- `userIds` \<string[]\> User ID list

#### Example

```java
ArrayList<String> userIds = new ArrayList<>();
userIds.add("userId");
CommonMessage message = managementClient.users().deleteMany(userIds).execute();
```

## Batch get users

UsersManagementClient().batch(userIds)

> Batch get user details by ID

#### Parameter

- `userIds` \<string[]\> User ID list

#### Example

```java
ArrayList<String> userIds = new ArrayList<>();
userIds.add("userId");
List<User> users = managementClient.users().batch(userIds).execute();
```

## Get user list

UsersManagementClient().list(page, limit)

> Get the user list in the user pool.

#### Parameter

- `page` \<number\> Page number, starting from 1. The default value is: `1`.
- `limit` \<number\> The number of users per page. The default value is: `10`.

#### Example

```java
PaginatedUsers users = managementClient.users().list().execute();
```

## Check if the user exists

UsersManagementClient().exists(options)

> Check whether the user exists. Currently it can check through username, email, and phone number.

#### Parameters

- `options` \<Object\>
- `options.username` \<string\> User name, case sensitive.
- `options.email` \<string\> The email address, which is not case sensitive.
- `options.phone` \<string\> Phone number

#### Example

```java
Boolean exists = managementClient.users().exists(new IsUserExistsParam().withUsername("test")).execute();
```

## Find a user

UsersManagementClient().find(options)

> Find a user by username, email, and phone number.

#### Parameter

- `options` \<Object\>
- `options.username` \<string\> User name, case sensitive.
- `options.email` \<string\> The email address, which is not case sensitive.
- `options.phone` \<string\> Phone number

#### Example

## Search users

UsersManagementClient().search(query, options, page, limit)

> Search users based on keywords.

#### Parameter

- `query` \<null\> Search content
- `options` \<string[]\> Search options
- `options.fields` \<string[]\> Search user fields. If not specified, the default will be fuzzy search from `username`, `nickname`, `email`, `phone`, `company`, `name`, `givenName`, `familyName`, `middleName`, `profile` and `preferredUsername` fields. If you need a precise search, please use the `find` method.
- `page` \<number\> The default value is: `1`.
- `limit` \<number\> The default value is: `10`.

#### Example

```java
String query = "query";
PaginatedUsers users = managementClient.users().search(query).execute();
```

## Refresh user token

UsersManagementClient().refresh_token(id)

> Refresh user token

#### Parameter

- `id` \<string\> User ID

#### Example

```java
RefreshToken token = managementClient.users().refreshToken("userId").execute();
```

## Get user group list

UsersManagementClient().list_groups(userId)

> Get user group list

#### Parameter

- `userId` \<string\> User ID

#### Example

```java
managementClient.users().listGroups("userId").execute();
```

##  Join a group

UsersManagementClient().add_group(userId, group)

> Add a user to a group.

#### Parameter

- `userId` \<string\> User ID
- `group` \<string\> Group code

#### Example

```java
managementClient.users().addGroup("userId", "groupId").execute();
```

## Quit a group

UsersManagementClient().remove_group(userId, group)

> Remove the user from a group.

#### Parameter

- `userId` \<string\> User ID
- `group` \<string\> Group code

#### Example

```java
managementClient.users().removeUdv("userId", "groupId").execute();
```

## Get user role list

UsersManagementClient().list_roles(userId)

> Get user role list.

#### Parameter

- `userId` \<string\> User ID

#### Example

```java
PaginatedRoles roles = managementClient.users().listRoles("userId").execute();
```

## Add roles

UsersManagementClient().add_roles(userId, roles)

> Add roles to the user.

#### Parameter

- `userId` \<string\> User ID
- `roles` \<string\> Role code list

#### Example

```java
ArrayList<String> roles = new ArrayList<>();
roles.add("role code");
managementClient.users().addRoles("userId", roles);
```

## Remove roles

UsersManagementClient().remove_roles(userId, roles)

> Remove roles from the user.

#### Parameter

- `userId` \<string\> User ID
- `roles` \<string\> Role code list

#### Example

```java
ArrayList<String> roles = new ArrayList<>();
roles.add("role code");
CommonMessage message = managementClient.users().removeRoles("userId", roles).execute();
```

## Get the user's organization

UsersManagementClient().listOrgs(userId)

> Get the user's organization and node path in the organization.

#### Parameters

- `userId` \<string\> User ID

#### Example

```java
List<List<Org>> orgs = managementClient.users().listOrgs("userId").execute();
```
