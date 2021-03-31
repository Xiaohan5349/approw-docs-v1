!!!include(common/init-csharp-auth-sdk.md)!!!

Initialize the SDK with user's token.

```java
authenticationClient.AccessToken = "user token";
```

Setup user-defined fields.

```csharp
var key = "key";
var anyValue = "value";
var list = await authenticationClient.SetUdv(key, anyValue);
Console.WriteLine(list.Count());
```

Get users' latest values of user-defined-fields.

```csharp
var list = await authenticationClient.ListUdv();
Console.WriteLine(list.Count());
```
