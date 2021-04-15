# oidc-demo

Approw OIDC RP end processing method, basic example.

Help developers who are not familiar with the OIDC process to familiarize themselves with the OIDC process. Examples include using code for token and token for user information. When a protected resource is accessed, it will judge whether the user has permission, if the user has permission, the resource will be returned, and if the user doesn't has permission, user will be redirected to the Approw OIDC login authorization page.

## Reference

1. [Create OIDC application](https://docs.approw.com/approw/advanced/oidc/create-oidc)
2. [Use OIDC authorization](https://docs.approw.com/approw/advanced/oidc/oidc-authorization)
3. [OIDC FAQ](https://docs.approw.com/approw/advanced/oidc/oidc-params)

If the above documents cannot be accessed, please change the domain name to `learn.approw.com`。

## How to run

Clone the project:

```
git clone https://github.com/Approw/approw-docs-v1/blob/master/docs/oidc-demo
```

Then run:

```
$ yarn
$ node index.js
```

## Demo and principle explanation

### Basic configuration

```javascript
const port = 8888;
const oidcAppId = 'OIDC Application AppId';
const oidcAppSecret = 'OIDC Application AppSecret';
const redirect_uri = `http://localhost:${port}/oidc/handle`;
```

![](http://lcjim-img.oss-cn-beijing.aliyuncs.com/2020-01-04-073932.png)

-oidcAppId fill in the OIDC application AppId
-oidcAppSecret fill in the OIDC application AppSecret
-Set the callback URL of the OIDC application to the `/oidc/handle` interface of this project

### Log in with Guard to get Code

Click on the experience log in to access the Guard online address

![](http://lcjim-img.oss-cn-beijing.aliyuncs.com/2020-01-04-074203.png)

![](http://lcjim-img.oss-cn-beijing.aliyuncs.com/2020-01-04-074319.png)

After successful login, it will call back to this project to `/oidc/handle`, and carry the code in the Get request parameter.

### Use Code for Token

```javascript
const qs = require('querystring');

code2tokenResponse = await axios.post(
  'https://<your application domain name>.approw.com/oidc/token',
  qs.stringify({
    code,
    client_id: oidcAppId,
    client_secret: oidcAppSecret,
    grant_type: 'authorization_code',
    redirect_uri,
  }),
  {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  }
);
```

There are a few things to note:

- `Content-Type` is `application/x-www-form-urlencoded`，not `application/json`
- Post Body should be transfered to `var1=xx&var2=xxx` format.（`qs.stringify()`）

### Use Token for user information

```javascript
let token2UserInfoResponse = await axios.get('https://users.approw.com/oidc/me?access_token=' + access_token);
```

The format of the returned standard OIDC user information is as follows:

```json
{
  "sub": "5e0db2f0cfe70fe1e5ce0791",
  "birthdate": "",
  "family_name": "",
  "gender": "",
  "given_name": "",
  "locale": "",
  "middle_name": "",
  "name": "",
  "nickname": "Test",
  "picture": "https://usercontents.approw.com/avatar-5e0db2f0cfe70fe1e5ce0791-1577956080139",
  "preferred_username": "",
  "profile": "",
  "updated_at": "",
  "website": "",
  "zoneinfo": ""
}
```

### Carry id_token to access protected resource

```javascript
let idToken = ctx.header.authorization || ctx.query.id_token;
try {
  // Use the clientSecret of the oidc application for token verification
  // If verification fails, jsonwebtoken library will throw errors, such as token expired, signature error
  let decoded = jwt.verify(idToken, oidcAppSecret);
  ctx.body = {
    decoded,
    protected: 'This is protected resource.',
  };
} catch (err) {
  // Redirect the user to the authorized address of oidc and log in
  ctx.redirect(
    `https://<your application domain name>.approw.com/oidc/auth?client_id=${oidcAppId}&redirect_uri=${redirect_uri}&scope=openid%20profile%20offline_access%20phone%20email&response_type=code&state=5435436&nonce=22121&prompt=consent`
  );
}
```

- Get id_token from `authorization` request header or `id_token` query
- Use `oidcAppSecret` to try to decrypt
  - If it succeeds, it means you have logged in and you can return to protected resource
  - If it fails, redirect to `https://<yoru application domain name>.approw.com/oidc/auth?client_id=${oidcAppId}&redirect_uri=${redirect_uri}&scope=openid%20profile%20offline_access%20phone%20email&response_type=code&state=5435436&nonce=22121&prompt=consent`，that is the login form page mentioned above.
