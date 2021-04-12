!!!include(common/init-js-auth-sdk.md)!!!

First call the Send SMS Verification Code interface to send the SMS verification code, and then use the `loginByPhoneCode` method:

```javascript
authenticationClient.loginByPhoneCode("176xxxx6754", "1234");
```
