!!!include(common/init-java-mngmt-sdk.md)!!!

Use the `addMembers` method of `OrgManagementClient` to add members to the node:

```java
Node node = managementClient.org().addMembers("nodeId", Arrays.asList("userId")).execute();
```