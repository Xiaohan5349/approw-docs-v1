!!!include(en/common/init-csharp-auth-sdk.md)!!!

First call Send SMS verification code API to send SMS code, and then use `RegisterByPhoneCode` method：


```csharp
var phone = "phone number";
var code = "1234";
var password = "123456";
var user = await authenticationClient.RegisterByPhoneCode(phone, code, password);
Console.WriteLine(user.Phone);
```
