!!!include(common/init-csharp-auth-sdk.md)!!!

Use phone number to reset password:

```csharp
var phone = "phone number";
var code = "1234";
var password = "123456";
var message = await authenticationClient.ResetPasswordByPhoneCode(phone, code, password);
```

Use email to reset password：

```csharp
var email = "test@example.com";
var code = "1234";
var password = "123456";
var message = await authenticationClient.ResetPasswordByEmailCode(email, code, password);
```
