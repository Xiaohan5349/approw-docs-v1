!!!include(common/init-java-mngmt-sdk.md)!!!

Use the `deleteNode` method of the `OrgManagementClient` to delete a node:

```javascript
const org = await managementClient.org.create('北京非凡科技', '北京非凡科技有限公司', 'feifan');
const { id: orgId, rootNode } = org
const node = await managementClient.org.deleteNode(orgId, rootNode.id)
```
