!!!include(common/init-java-auth-sdk.md)!!!

Use the `LoginByEmail` method:

```java
String email = "test@example.com";
String password = "123456";
User user = authenticationClient.loginByEmail(new LoginByEmailInput(email, password)).execute();
```
