!!!include(en/common/init-csharp-auth-sdk.md)!!!

If the user has not set a password before (for example, registered by mobile phone number, social login, etc.), there is no need to pass in the original password.

```csharp
var newPassword = "123456";
await authenticationClient.UpdatePassword(newPassword);
```

Or:

```csharp
var oldPassword = "111111";
var newPassword = "123456";
await authenticationClient.UpdatePassword(newPassword, oldPassword);
```
