!!!include(en/common/init-java-auth-sdk.md)!!!

First call the Send SMS Verification Code interface to send the SMS verification code, and then use the `registerByPhoneCode` method:

```java
String phone = "phone number";
String code = "1234";
String pasword = "123456"
User user = authenticationClient.registerByPhoneCode(new RegisterByPhoneCodeInput(phone, code).withPassword(password)).execute();
```
