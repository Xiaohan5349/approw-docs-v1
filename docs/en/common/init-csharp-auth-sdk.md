Use the [AppID](/en/guides/faqs/get-app-id-and-secret.md) to initialize the `AuthenticationClient` of the [C# SDK](/en/reference/sdk-for-csharp/): 

```csharp
using Approw.ApiClient;

var authenticationClient = new AuthenticationClient(opt =>
            {
                opt.AppId = "APPROW_APP_ID";
            });
```
