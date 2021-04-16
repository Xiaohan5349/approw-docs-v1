!!!include(common/init-java-mngmt-sdk.md)!!!

Use the `listChildren` of the `OrgManagementClient` to get the list of child nodes:

```javascript
// Child node list
cosnt children = await managementClient.org.listChildren("ORGID", "NODEID")
```
