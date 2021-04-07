!!!include(common/init-csharp-auth-sdk.md)!!!

Use `RegisterByEmail` method：

```csharp
var email = "test@example.com";
var password = "123456";
var user = await authenticationClient.RegisterByEmail(email, password);
Console.WriteLine(user.Email);
```
