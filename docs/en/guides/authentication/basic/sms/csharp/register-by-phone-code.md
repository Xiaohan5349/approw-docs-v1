!!!include(en/common/init-csharp-auth-sdk.md)!!!

<<<<<<< HEAD
First call Send SMS verification code API to send SMS code, and then use `RegisterByPhoneCode` method：

=======
First call the Send SMS Verification Code interface to send the SMS verification code, and then use the `RegisterByPhoneCode` method:
>>>>>>> 73ab4dd7c5da68c242b103b5fa2c1d26e1270e5b

```csharp
var phone = "phone number";
var code = "1234";
var password = "123456";
var user = await authenticationClient.RegisterByPhoneCode(phone, code, password);
Console.WriteLine(user.Phone);
```
