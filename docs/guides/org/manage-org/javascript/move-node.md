!!!include(common/init-java-mngmt-sdk.md)!!!

Use the `moveNode` of the `OrgManagementClient` to move the node:

> Need to specify the new parent node (TRAGET_NODE_ID) of the moved node.

```javascript
await managementClient.org.moveNode("ORGID", "NODEID", "TRAGET_NODE_ID")
```
