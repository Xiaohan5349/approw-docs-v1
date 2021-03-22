使用[用户池 ID（UserPool ID）](/guides/faqs/get-userpool-id-and-secret.md) 和[应用 ID（AppID）](/guides/faqs/get-app-id-and-secret.md) 初始化 [Java SDK](/reference/sdk-for-java/) 的 `AuthenticationClient`:

```java
import cn.authing.core.auth.AuthenticationClient;
AuthenticationClient authenticationClient = new AuthenticationClient("AUTHING_USERPOOL_ID");
authenticationClient.setAppId("AUTHING_APP_ID");
```
