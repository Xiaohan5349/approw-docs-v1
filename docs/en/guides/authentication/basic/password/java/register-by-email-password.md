!!!include(en/common/init-java-auth-sdk.md)!!!

<<<<<<< HEAD

Use `registerByEmail` method：
=======
Use the `RegisterByEmail` method:
>>>>>>> 73ab4dd7c5da68c242b103b5fa2c1d26e1270e5b

```java
String email = "test@example.com";
String password = "123456";
User user = authenticationClient.registerByEmail(new RegisterByEmailInput(email, password)).execute();
```
