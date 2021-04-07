Use [userPoolId and secret](/guides/faqs/get-userpool-id-and-secret.md) to initialize the `ManagementClient` of [Java SDK](/reference/sdk-for-java/):

```java
import cn.authing.core.mgmt.ManagementClient;

public class ManagementClientTest {
    public static void main(String[] args){
      ManagementClient managementClient = new ManagementClient("AUTHING_USERPOOL_ID", "AUTHING_USERPOOL_SECRET");
      // 获取管理员权限
      managementClient.requestToken().execute();

      // 之后就可以使用 managementClient 进行管理员操作了，比如获取用户列表。
      PaginatedUsers users = managementClient.users().list().execute();
    }
}
```
