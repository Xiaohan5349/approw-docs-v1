!!!include(en/common/init-js-auth-sdk.md)!!!

First call send SMS verification code API, and then use `LoginByPhoneCode` method：

```javascript
authenticationClient.loginByPhoneCode("176xxxx6754", "1234");
```