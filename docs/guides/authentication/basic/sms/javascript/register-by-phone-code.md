!!!include(common/init-js-auth-sdk.md)!!!

First call the Send SMS Verification Code interface to send the SMS verification code, and then use the `registerByPhoneCode` method:

```javascript
authenticationClient.registerByPhoneCode('176xxxx6754', '1234')
```

Or:

```javascript
authenticationClient.registerByPhoneCode(
  '176xxxx6754',
  '1234',
  'passw0rd',
  {
    nickname: 'Nick',
  },
  {
    generateToken: true,
  }
)
```
