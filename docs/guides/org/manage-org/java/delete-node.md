!!!include(common/init-java-mngmt-sdk.md)!!!

Use the `deleteNode` method of the `OrgManagementClient` to delete a node:

```java
CommonMessage commonMessage = managementClient.org().deleteNode(new DeleteNodeParam("orgId", "nodeId")).execute();
```