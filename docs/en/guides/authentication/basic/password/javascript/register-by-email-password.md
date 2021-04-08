!!!include(en/common/init-js-auth-sdk.md)!!!

Use `registerByEmail` method：


```javascript
authenticationClient.registerByEmail("test@example.com", "passw0rd");
```

Or：

```javascript
authenticationClient.registerByEmail(
  "test@example.com",
  "passw0rd",
  {
    nickname: "Nick",
  },
  {
    generateToken: true,
  }
);
```
