!!!include(en/common/init-js-auth-sdk.md)!!!

<<<<<<< HEAD
Use `registerByEmail` method：

=======
Use the `registerByEmail` method:
>>>>>>> 73ab4dd7c5da68c242b103b5fa2c1d26e1270e5b

```javascript
authenticationClient.registerByEmail("test@example.com", "passw0rd");
```

<<<<<<< HEAD
Or：
=======
Or:
>>>>>>> 73ab4dd7c5da68c242b103b5fa2c1d26e1270e5b

```javascript
authenticationClient.registerByEmail(
	"test@example.com",
	"passw0rd",
	{
		nickname: "Nick",
	},
	{
		generateToken: true,
	}
);
```
