!!!include(en/common/init-java-auth-sdk.md)!!!

<<<<<<< HEAD
If a user doesn't set a password before (for example, register by phone number or social IDP), this method does not require the original password.
=======
If the user has not set a password before (for example, registered by mobile phone number, social login, etc.), there is no need to pass in the original password.
>>>>>>> 73ab4dd7c5da68c242b103b5fa2c1d26e1270e5b

```java
String newPassword = "123456";
User user = authenticationClient.updatePassword(newPassword).execute();
```

<<<<<<< HEAD
Or：
=======
Or:
>>>>>>> 73ab4dd7c5da68c242b103b5fa2c1d26e1270e5b

```java
String oldPassword = "111111";
String newPassword = "123456";
User user = authenticationClient.updatePassword(newPassword, oldPassword).execute();
```
