!!!include(common/init-java-mngmt-sdk.md)!!!

Use the `listMembers` method of the `OrgManagementClient` to get the list of members of the node:

```java
Node node = managementClient.org().listMembers(new NodeByIdWithMembersParam("nodeId")).execute();
```