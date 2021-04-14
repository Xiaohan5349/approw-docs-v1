Use [userPoolId and secret](/en/guides/faqs/get-userpool-id-and-secret.md) to initialize the `ManagementClient` of [Java SDK](/en/reference/sdk-for-java/):

```java
import cn.authing.core.mgmt.ManagementClient;

public class ManagementClientTest {
    public static void main(String[] args){
      ManagementClient managementClient = new ManagementClient("AUTHING_USERPOOL_ID", "AUTHING_USERPOOL_SECRET");
      // Get admin rights
      managementClient.requestToken().execute();

      // After that, you can use managementClient to perform administrator operations, such as obtaining a list of users
      PaginatedUsers users = managementClient.users().list().execute();
    }
}
```
