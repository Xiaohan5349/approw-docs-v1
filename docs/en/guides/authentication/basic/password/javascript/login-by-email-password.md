!!!include(en/common/init-js-auth-sdk.md)!!!

<<<<<<< HEAD
Use `loginByEmail` method：
=======
Use the `loginByEmail` method:
>>>>>>> 73ab4dd7c5da68c242b103b5fa2c1d26e1270e5b

```javascript
authenticationClient.loginByEmail("test@example.com", "passw0rd");
```

<<<<<<< HEAD
Or：
=======
Or:
>>>>>>> 73ab4dd7c5da68c242b103b5fa2c1d26e1270e5b

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
