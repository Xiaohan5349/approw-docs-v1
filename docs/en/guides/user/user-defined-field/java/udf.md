!!!include(common/init-java-auth-sdk.md)!!!

Initialize the SDK with user's token.

```java
authenticationClient.setAccessToken("USER_TOKEN");
```

Setup user-defined fields.

```java
List<UserDefinedData> list = authenticationClient.setUdv('school', 'Huazhong University of Science and Technology').execute();
```

Get users' latest values of user-defined-fields.

```java
List<UserDefinedData> list = authenticationClient.listUdv().execute();
```
