!!!include(en/common/init-csharp-auth-sdk.md)!!!

<<<<<<< HEAD
Use phone number to reset password:
=======
Use the mobile phone number verification code to reset the password:
>>>>>>> 73ab4dd7c5da68c242b103b5fa2c1d26e1270e5b

```csharp
var phone = "phone number";
var code = "1234";
var password = "123456";
var message = await authenticationClient.ResetPasswordByPhoneCode(phone, code, password);
```

<<<<<<< HEAD
Use email to reset password：
=======
Use email verification code to reset password:
>>>>>>> 73ab4dd7c5da68c242b103b5fa2c1d26e1270e5b

```csharp
var email = "test@example.com";
var code = "1234";
var password = "123456";
var message = await authenticationClient.ResetPasswordByEmailCode(email, code, password);
```
