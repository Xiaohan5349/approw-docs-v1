!!!include(common/init-js-auth-sdk.md)!!!

Initialize the SDK with user's token.

```java
authenticationClient.setToken("USER_TOKEN");
```

Setup user-defined fields.

```java
const list = authenticationClient.setUdv('school', 'Huazhong University of Science and Technology');
```

Get users' latest values of user-defined-fields.

```java
const list = authenticationClient.listUdv();
```
