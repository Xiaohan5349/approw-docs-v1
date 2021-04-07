Use [userPoolId and secret](/guides/faqs/get-userpool-id-and-secret.md) to initialize the `ManagementClient` of [Python SDK](/reference/sdk-for-python/):

```python
from authing.v2.management import ManagementClient, ManagementClientOptions

management_client = ManagementClient(
  options=ManagementClientOptions(
    user_pool_id='AUTHING_USERPOOL_ID',
    secret='AUTHING_USERPOOL_SECRET',
))
```
