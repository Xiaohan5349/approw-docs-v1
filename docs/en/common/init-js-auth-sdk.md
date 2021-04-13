Use the [AppID](/en/guides/faqs/get-app-id-and-secret.md) to initialize the `AuthenticationClient` of the [JavaScript/Node.js SDK](/en/reference/sdk-for-node/):

```javascript
import { AuthenticationClient } from "approw-js-sdk";
const authenticationClient = new AuthenticationClient({
  appId: "YOUR_APP_ID",
});
```