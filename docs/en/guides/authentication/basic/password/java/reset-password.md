!!!include(en/common/init-java-auth-sdk.md)!!!

<<<<<<< HEAD
Use phone number to reset password:
=======
Use the mobile phone number verification code to reset the password:
>>>>>>> 73ab4dd7c5da68c242b103b5fa2c1d26e1270e5b

```java
String phone = "phone number";
String code = "1234";
String password = "123456";
authenticationClient.resetPasswordByPhoneCode(phone, code, password).execute();
```

<<<<<<< HEAD
Use email to reset password：
=======
Use email verification code to reset password:
>>>>>>> 73ab4dd7c5da68c242b103b5fa2c1d26e1270e5b

```java
String email = "test@example.com";
String code = "1234";
String password = "123456";
authenticationClient.resetPasswordByEmailCode(email, code, password).execute();
```
