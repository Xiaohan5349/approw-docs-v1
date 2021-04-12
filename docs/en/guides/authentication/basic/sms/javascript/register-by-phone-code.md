!!!include(en/common/init-js-auth-sdk.md)!!!

<<<<<<< HEAD
First call Send SMS verification code API to send SMS code, and then use `RegisterByPhoneCode` method：

=======
First call the Send SMS Verification Code interface to send the SMS verification code, and then use the `registerByPhoneCode` method:
>>>>>>> 73ab4dd7c5da68c242b103b5fa2c1d26e1270e5b

```javascript
authenticationClient.registerByPhoneCode("176xxxx6754", "1234");
```

<<<<<<< HEAD
Or：
=======
Or:
>>>>>>> 73ab4dd7c5da68c242b103b5fa2c1d26e1270e5b

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
