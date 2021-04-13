Use the [AppID](/en/guides/faqs/get-app-id-and-secret.md) to initialize the `AuthenticationClient` of the [Python SDK](/en/reference/sdk-for-python/):

```python
from approw.v2.authentication import AuthenticationClient, AuthenticationClientOptions

authentication_client = AuthenticationClient(
  options=AuthenticationClientOptions(
    app_id='APPROW_APP_ID'
))
```
