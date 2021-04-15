!!!include(common/init-java-mngmt-sdk.md)!!!

Use `create` function in [UsersManagementClient](/docs/reference/sdk-for-java/management/UsersManagementClient.md) to create a new user:

```java
String email = "test@example.com";
String password = "123456";
User user = managementClient.users().create(new CreateUserInput().withEmail(email).withPassword(password)).execute();
```
