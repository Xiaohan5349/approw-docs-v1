!!!include(en/common/init-csharp-auth-sdk.md)!!!

Use `SendSmsCode` method：

```csharp
var phone = "phone number";
await authenticationClient.SendSmsCode(phone);
```