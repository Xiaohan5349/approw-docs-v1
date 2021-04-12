!!!include(en/common/init-java-auth-sdk.md)!!!

<<<<<<< HEAD
First call Send SMS verification code API to send SMS code, and then use `RegisterByPhoneCode` method：
=======
First call the Send SMS Verification Code interface to send the SMS verification code, and then use the `registerByPhoneCode` method:
>>>>>>> 73ab4dd7c5da68c242b103b5fa2c1d26e1270e5b

```java
String phone = "phone number";
String code = "1234";
String pasword = "123456"
User user = authenticationClient.registerByPhoneCode(new RegisterByPhoneCodeInput(phone, code).withPassword(password)).execute();
```
