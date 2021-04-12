!!!include(en/common/init-js-auth-sdk.md)!!!

<<<<<<< HEAD
Use phone number to reset password:
=======
Use the mobile phone number verification code to reset the password:
>>>>>>> 73ab4dd7c5da68c242b103b5fa2c1d26e1270e5b

```javascript
authenticationClient.resetPasswordByPhoneCode(
	"176xxxx6754",
	"1234",
	"passw0rd"
);
```

<<<<<<< HEAD
Use email to reset password：
=======
Use email verification code to reset password:
>>>>>>> 73ab4dd7c5da68c242b103b5fa2c1d26e1270e5b

```javascript
authenticationClient.resetPasswordByEmailCode(
	"test@example.com",
	"1234",
	"passw0rd"
);
```
