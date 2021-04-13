!!!include(en/common/init-js-auth-sdk.md)!!!

If the user has not set a password before (for example, registered by mobile phone number, social login, etc.), there is no need to pass in the original password.

```javascript
authenticationClient.updatePassword("passw0rd");
```

Or:

```javascript
authenticationClient.updatePassword("passw0rd", "oldPassw0rd"); // user set a password before
```
