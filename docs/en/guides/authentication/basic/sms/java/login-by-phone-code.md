
!!!include(en/common/init-java-auth-sdk.md)!!!

First call send SMS verification code API, and then use `LoginByPhoneCode` method：

```java
String phone = "phone number";
String code = "1234";
User user = authenticationClient.loginByPhoneCode(new LoginByPhoneCodeInput(phone, code)).execute();
```
