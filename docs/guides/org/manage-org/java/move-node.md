!!!include(common/init-java-mngmt-sdk.md)!!!

Use the `moveNode` method of the `OrgManagementClient` to move the node:

> The new parent node (targetParentId) of the moved node needs to be specified.

```java
Org org = managementClient.org().moveNode("orgId", "nodeId", "targetParentId").execute();
```