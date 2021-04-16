!!!include(common/init-java-mngmt-sdk.md)!!!

Use the `updateNode` of the `OrgManagementClient` to modify the node information:

```javascript
await managementClient.org.updateNode("NDOEID", {
   name: 'New node name'
})
```