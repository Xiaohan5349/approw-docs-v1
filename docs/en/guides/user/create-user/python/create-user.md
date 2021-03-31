!!!include(common/init-python-mngmt-sdk.md)!!!

Use `create` function in [UsersManagementClient](/docs/en/reference/sdk-for-java/management/UsersManagementClient.md) to create a new user:

```python
user = management_client.users.create(
  userInfo={
    'username': 'bob',
    'password': '123456',
    'phone': '176xxxx6754', # This phone number will be required to be verified because this account is created by the admin. You can use AuthenticationClient to verify it.
    'nickname': 'Nick',
    'loginsCount': 2, # The login counts of this user in the old user system.
    'signedUpd': '2020-10-15T17:55:37+08:00', # The registeration time of this user in the old user system.
})
```
