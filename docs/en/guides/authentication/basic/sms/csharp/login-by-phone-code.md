!!!include(en/common/init-csharp-auth-sdk.md)!!!

<<<<<<< HEAD
First call send SMS verification code API, and then use `LoginByPhoneCode` method：
=======
First call the Send SMS Verification Code interface to send the SMS verification code, and then use the `LoginByPhoneCode` method:
>>>>>>> 73ab4dd7c5da68c242b103b5fa2c1d26e1270e5b

```csharp
var phone = "phone number";
var code = "1234";
var user = await authenticationClient.LoginByPhoneCode(phone, code);
Console.WriteLine(user.Phone);
```
