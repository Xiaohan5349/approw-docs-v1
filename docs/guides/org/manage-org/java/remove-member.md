!!!include(common/init-java-mngmt-sdk.md)!!!

Use the `removeMembers` method of the `OrgManagementClient` to remove the members of the node:

```java
Node node = managementClient.org().removeMembers("nodeId", Arrays.asList("userId")).execute();
```