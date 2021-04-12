!!!include(common/init-js-auth-sdk.md)!!!

Use the mobile phone number verification code to reset the password:

```javascript
authenticationClient.resetPasswordByPhoneCode(
	"176xxxx6754",
	"1234",
	"passw0rd"
);
```

Use email verification code to reset password:

```javascript
authenticationClient.resetPasswordByEmailCode(
	"test@example.com",
	"1234",
	"passw0rd"
);
```
