!!!include(en/common/init-csharp-auth-sdk.md)!!!

First call send SMS verification code API, and then use `LoginByPhoneCode` method：

```csharp
var phone = "phone number";
var code = "1234";
var user = await authenticationClient.LoginByPhoneCode(phone, code);
Console.WriteLine(user.Phone);
```