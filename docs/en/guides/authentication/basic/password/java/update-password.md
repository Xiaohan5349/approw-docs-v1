!!!include(en/common/init-java-auth-sdk.md)!!!

If a user doesn't set a password before (for example, register by phone number or social IDP), this method does not require the original password.

```java
String newPassword = "123456";
User user = authenticationClient.updatePassword(newPassword).execute();
```

Or：

```java
String oldPassword = "111111";
String newPassword = "123456";
User user = authenticationClient.updatePassword(newPassword, oldPassword).execute();
```
