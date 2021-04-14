!!!include(en/common/init-csharp-auth-sdk.md)!!!

Use the mobile phone number verification code to reset the password:

```csharp
var phone = "phone number";
var code = "1234";

var password = "123456";
var message = await authenticationClient.ResetPasswordByPhoneCode(phone, code, password);
```

Use email verification code to reset password:

```csharp
var email = "test@example.com";
var code = "1234";
var password = "123456";
var message = await authenticationClient.ResetPasswordByEmailCode(email, code, password);
```
