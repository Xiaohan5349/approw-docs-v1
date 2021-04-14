!!!include(en/common/init-java-auth-sdk.md)!!!

Use the mobile phone number verification code to reset the password:

```java
String phone = "phone number";
String code = "1234";
String password = "123456";
authenticationClient.resetPasswordByPhoneCode(phone, code, password).execute();
```

Use email verification code to reset password:

```java
String email = "test@example.com";
String code = "1234";
String password = "123456";
authenticationClient.resetPasswordByEmailCode(email, code, password).execute();
```
