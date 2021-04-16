!!!include(common/init-java-mngmt-sdk.md)!!!

Use the `addNode` method of `OrgManagementClient` to add nodes:

```javascript
const org = await managementClient.org.create('Beijing Feifan Technology','Beijing Feifan Technology Co., Ltd.','feifan');
const { id: orgId, rootNode } = org
const node = await managementClient.org.addNode(orgId, rootNode.id, { name: 'operation department' })
```
