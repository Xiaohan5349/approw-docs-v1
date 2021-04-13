Use [userPoolId and secret](/en/guides/faqs/get-userpool-id-and-secret.md) to initialize the `ManagementClient` of [C# SDK](/en/reference/sdk-for-csharp/):

```csharp
using Authing.ApiClient;

var managementClient = new ManagementClient("AUTHING_USERPOOL_ID", "AUTHING_USERPOOL_SECRET");
```
