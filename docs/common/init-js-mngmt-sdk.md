Use [user pool ID (`userPoolId`) and user pool key (`secret`)](/guides/faqs/get-userpool-id-and-secret.md) to initialize the `ManagementClient` of [Node.js SDK](/reference/sdk-for-node/):

```js
import { ManagementClient } from 'authing-js-sdk'

const managementClient = new ManagementClient({
  userPoolId: 'YOUR_USERPOOL_ID',
  secret: 'YOUR_USERPOOL_SECRET',
})
```
