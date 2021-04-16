!!!include(common/init-java-mngmt-sdk.md)!!!

Use the `listChildren` method of the `OrgManagementClient` to get the list of child nodes of the node:

```java
List<Node> nodes = managementClient.org().listChildren("orgId", "nodeId").execute();
```