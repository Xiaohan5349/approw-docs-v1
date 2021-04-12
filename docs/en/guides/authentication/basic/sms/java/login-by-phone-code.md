<<<<<<< HEAD

!!!include(en/common/init-java-auth-sdk.md)!!!

First call send SMS verification code API, and then use `LoginByPhoneCode` method：
=======
!!!include(common/init-java-auth-sdk.md)!!!

First call the Send SMS Verification Code interface to send the SMS verification code, and then use the `loginByPhoneCode` method:
>>>>>>> 73ab4dd7c5da68c242b103b5fa2c1d26e1270e5b

```java
String phone = "phone number";
String code = "1234";
User user = authenticationClient.loginByPhoneCode(new LoginByPhoneCodeInput(phone, code)).execute();
```
