!!!include(common/init-java-auth-sdk.md)!!!

Use the `RegisterByEmail` method:

```java
String email = "test@example.com";
String password = "123456";
User user = authenticationClient.registerByEmail(new RegisterByEmailInput(email, password)).execute();
```
