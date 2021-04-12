!!!include(en/common/init-java-auth-sdk.md)!!!

First call Send SMS verification code API to send SMS code, and then use `RegisterByPhoneCode` method：

```java
String phone = "phone number";
String code = "1234";
String pasword = "123456"
User user = authenticationClient.registerByPhoneCode(new RegisterByPhoneCodeInput(phone, code).withPassword(password)).execute();
```
