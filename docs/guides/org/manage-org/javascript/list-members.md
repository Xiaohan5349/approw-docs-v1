!!!include(common/init-java-mngmt-sdk.md)!!!

Use the `listMembers` of the `OrgManagementClient` to get the list of members of the node:

```javascript
const { totalCount, list } = await managementClient.org.listMembers("NODE_ID");
```
