!!!include(common/init-js-auth-sdk.md)!!!


If a user doesn't set a password before (for example, register by phone number or social IDP), this method does not require the original password.

```javascript
authenticationClient.updatePassword("passw0rd"); 
```

Or：

```javascript
authenticationClient.updatePassword("passw0rd", "oldPassw0rd"); // user set a password before
```
