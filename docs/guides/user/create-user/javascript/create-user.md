!!!include(common/init-js-mngmt-sdk.md)!!!

Use `create` function in [UsersManagementClient](/docs/reference/sdk-for-java/management/UsersManagementClient.md) to create a new user:

```javascript
const user = await managementClient.users.create({
  username: 'bob',
  password: 'passw0rd',
})
```

Or:

```javascript
const user = await managementClient.users.create({
   nickname: 'Nick',
   phone: '176xxxx6754', // This phone number will be required to be verified because this account is created by the admin. You can use AuthenticationClient to verify it.
   loginsCount: 2 // The login counts of this user in the old user system.
   signedUp: '2020-10-15T17:55:37+08:00' // The registeration time of this user in the old user system.
})
```
