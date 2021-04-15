!!!include(common/init-csharp-mngmt-sdk.md)!!!

Use `create`function in [UsersManagementClient](/docs/reference/sdk-for-csharp/management/UsersManagementClient.md) to create a new user:

```csharp
var email = "test@example.com";
var password = "123456";
var user = managementClient.Users.Create(new CreateUserInput()
{
  Email = email,
  Password = password,
})
```
