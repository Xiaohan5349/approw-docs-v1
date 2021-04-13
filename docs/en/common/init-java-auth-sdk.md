Use the [UserPool ID](/en/guides/faqs/get-userpool-id-and-secret.md) and [AppID](/en/guides/faqs/get-app-id-and-secret.md) to initialize the `AuthenticationClient` of the [Java SDK](/en/reference/sdk-for-java/):

```java
import cn.approw.core.auth.AuthenticationClient;
AuthenticationClient authenticationClient = new AuthenticationClient("APPROW_USERPOOL_ID");
authenticationClient.setAppId("APPROW_APP_ID");
```
