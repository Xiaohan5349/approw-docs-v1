!!!include(common/init-csharp-auth-sdk.md)!!!

If a user doesn't set a password before (for example, register by phone number or social IDP), this method does not require the original password.

```csharp
var newPassword = "123456";
await authenticationClient.UpdatePassword(newPassword);
```

Or：

```csharp
var oldPassword = "111111";
var newPassword = "123456";
await authenticationClient.UpdatePassword(newPassword, oldPassword);
```