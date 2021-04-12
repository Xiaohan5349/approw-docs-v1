!!!include(common/init-js-auth-sdk.md)!!!

Use the `loginByEmail` method:

```javascript
authenticationClient.loginByEmail("test@example.com", "passw0rd");
```

Or:

```javascript
authenticationClient.loginByEmail(
 'test@example.com',
 'passw0rd',
 {
   autoRegister: true，
   captchaCode: 'xj72'
 }
)
```
