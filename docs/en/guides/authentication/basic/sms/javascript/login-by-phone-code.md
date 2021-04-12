!!!include(en/common/init-js-auth-sdk.md)!!!

<<<<<<< HEAD
First call send SMS verification code API, and then use `LoginByPhoneCode` method：
=======
First call the Send SMS Verification Code interface to send the SMS verification code, and then use the `loginByPhoneCode` method:
>>>>>>> 73ab4dd7c5da68c242b103b5fa2c1d26e1270e5b

```javascript
authenticationClient.loginByPhoneCode("176xxxx6754", "1234");
```
