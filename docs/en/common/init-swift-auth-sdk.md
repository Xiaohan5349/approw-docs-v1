Use the [UserPool ID](/en/guides/faqs/get-userpool-id-and-secret.md) and [AppID](/en/guides/faqs/get-app-id-and-secret.md) to initialize the `AuthenticationClient` of the [Swift SDK](/en/reference/sdk-for-swift.md):

```swift
let userPoolId = "userPoolId"
let appId = "appId"

var client: AuthenticationClient?
self.client = AuthenticationClient(userPoolId: userPoolId, appId: appId)
```