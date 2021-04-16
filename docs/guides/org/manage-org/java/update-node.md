!!!include(common/init-java-mngmt-sdk.md)!!!

Use the `updateNode` method of the `OrgManagementClient` to move the node:

```java
UpdateNodeParam param = new UpdateNodeParam(0, "");
param.setId("id");
param.setName("name");
param.setDescription("description");
Node node = managementClient.org().updateNode(param).execute();
```