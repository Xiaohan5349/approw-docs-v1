!!!include(en/common/init-js-auth-sdk.md)!!!

First call Send SMS verification code API to send SMS code, and then use `RegisterByPhoneCode` method：


```javascript
authenticationClient.registerByPhoneCode("176xxxx6754", "1234");
```

Or：

```javascript
authenticationClient.registerByPhoneCode(
  "176xxxx6754",
  "1234",
  "passw0rd",
  {
    nickname: "Nick",
  },
  {
    generateToken: true,
  }
);
```
