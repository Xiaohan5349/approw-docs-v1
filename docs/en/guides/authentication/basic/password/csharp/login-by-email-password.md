!!!include(en/common/init-csharp-auth-sdk.md)!!!

<<<<<<< HEAD
Use `LoginByEmail` mothod：
=======
Use the `LoginByEmail` method:
>>>>>>> 73ab4dd7c5da68c242b103b5fa2c1d26e1270e5b

```csharp
var email = "test@example.com";
var password = "123456";
var user = await authenticationClient.LoginByEmail(email, password);
Console.WriteLine(user.Email);
```
