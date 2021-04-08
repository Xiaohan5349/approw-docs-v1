!!!include(en/common/init-java-auth-sdk.md)!!!

Use `SendSmsCode` method：

```java
String phone = "phone number";
authenticationClient.sendSmsCode(phone).execute();
```