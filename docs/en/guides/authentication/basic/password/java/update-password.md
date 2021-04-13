!!!include(en/common/init-java-auth-sdk.md)!!!

If the user has not set a password before (for example, registered by mobile phone number, social login, etc.), there is no need to pass in the original password.

```java
String newPassword = "123456";
User user = authenticationClient.updatePassword(newPassword).execute();
```

Or:

```java
String oldPassword = "111111";
String newPassword = "123456";
User user = authenticationClient.updatePassword(newPassword, oldPassword).execute();
```
