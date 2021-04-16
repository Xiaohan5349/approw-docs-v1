!!!include(common/init-java-mngmt-sdk.md)!!!

Use the `addNode` method of `OrgManagementClient` to add nodes:

> Need to specify the ID of the parent node (withParentNodeId).

```java
AddNodeV2Param param = new AddNodeV2Param("Organization ID", "node name")
        .withParentNodeId("Parent node ID");
Node node = managementClient.org().addNode(param).execute();
```