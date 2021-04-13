After obtaining the user information, you can get the user's identity credential (the `token` field of the user information), and you can carry this `token` in subsequent requests sent by the client to the back-end server, take `axios` as an example :

```js
const axios = require("axios");
axios
  .get({
    url: "https://yourdomain.com/api/v1/your/resources",
    headers: {
      Authorization: "Bearer YOUR_JWT_TOKN",
    },
  })
  .then((res) => {
    // custom codes
  });
```

The legitimacy of this `token` needs to be verified in the back-end interface to verify the user's identity. For details on the verification method, please see [Verify User Identity Credentials (token)](/en/guides/faqs/how-to-validate-user-token.html). After identifying the user, you may also need to [Permission Management for the User](/en/guides/access-control/) to determine whether the user has operating permissions for this API.
