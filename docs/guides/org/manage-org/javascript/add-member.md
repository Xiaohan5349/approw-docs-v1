!!!include(common/init-java-mngmt-sdk.md)!!!

Use the `addMembers` method of `OrgManagementClient` to add members to the node:

```javascript
cosnt { totalCount, list } = await managementClient.org.addMembers("NODE_ID", ["USER_ID"])
```