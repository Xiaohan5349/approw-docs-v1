!!!include(en/common/init-js-auth-sdk.md)!!!

Use phone number to reset password:

```javascript
authenticationClient.resetPasswordByPhoneCode(
  "176xxxx6754",
  "1234",
  "passw0rd"
);
```

Use email to reset password：

```javascript
authenticationClient.resetPasswordByEmailCode(
  "test@example.com",
  "1234",
  "passw0rd"
);
```
