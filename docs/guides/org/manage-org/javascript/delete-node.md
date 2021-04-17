!!!include(common/init-java-mngmt-sdk.md)!!!

Use the `deleteNode` method of the `OrgManagementClient` to delete a node:

```javascript
const org = await managementClient.org.create('Beijing Feifan Technology','Beijing Feifan Technology Co., Ltd.','feifan');
const { id: orgId, rootNode } = org
const node = await managementClient.org.deleteNode(orgId, rootNode.id)
```
