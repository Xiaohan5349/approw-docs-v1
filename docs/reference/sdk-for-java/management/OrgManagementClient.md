---
meta:
  - name: description
    content: 管理组织机构
---

# 管理组织机构

<LastUpdated/>


> 一个 {{$localeConfig.brandName}} 用户池可以创建多个组织机构。此模块用于管理 {{$localeConfig.brandName}} 组织机构，可以进行组织机构的增删改查、添加删除移动节点、导入组织机构等操作。

## 创建组织机构

OrgManagementClient().create(createOrgParam)

> 创建组织机构，会创建一个只有一个节点的组织机构。
> 如果你想将一个完整的组织树导入进来，请使用 importByJson 方法。

#### 参数

- `createOrgParam` \<CreateOrgParam\>
- `createOrgParam.name` \<string\> 组织机构名称，该名称会作为该组织机构根节点的名称
- `createOrgParam.code` \<string\> 根节点唯一标志，必须为合法的英文字符
- `createOrgParam.description` \<string\> 根节点描述

#### 示例

```java
Org org = managementClient.org().create(new CreateOrgParam("name1", "org1", "desc1")).execute();
```

## 删除组织机构

OrgManagementClient().deleteById(id)

> 删除组织机构树

#### 参数

- `id` \<string\> 组织机构 ID

#### 示例

```java
CommonMessage message = managementClient.org().deleteById("id").execute();
```

## 获取用户池组织机构列表

OrgManagementClient().list(orgsParam)

> 获取用户池组织机构列表

#### 参数

- `orgsParam` \<OrgsParam\>
- `orgsParam.page` \<number\> 默认值为 : `1`
- `orgsParam.limit` \<number\> 默认值为 : `10`
- `orgsParam.sortBy` \<SortByEnum\> 排序规则。

#### 示例

```java
PaginatedOrgs orgs = managementClient.org().list(new OrgsParam(1, 10, SortByEnum.CREATEDAT_DESC)).execute();
```

## 添加节点

OrgManagementClient().addNode(addNodeParam)

> 在组织机构中添加一个节点

#### 参数

- `addNodeParam` \<AddNodeV2Param\>
- `addNodeParam.orgId` \<string\> 组织机构 ID
- `addNodeParam.parentNodeId` \<string\> 父节点 ID
- `addNodeParam.name` \<string\> 节点名称
- `addNodeParam.code` \<string\> 节点唯一标志
- `addNodeParam.description` \<string\> 节点描述信息

#### 示例

```java
AddNodeV2Param param = new AddNodeV2Param("orgId", "orgName")
        .withParentNodeId("parentId");
Node node = managementClient.org().addNode(param).execute();
```

## 修改节点

OrgManagementClient().updateNode(updateNodeParam)

> 修改节点数据

#### 参数

- `updateNodeParam` \<UpdateNodeParam\>
- `updateNodeParam.id` \<string\> 节点唯一标志
- `updateNodeParam.name` \<string\> 节点名称
- `updateNodeParam.description` \<string\> 节点描述信息

#### 示例

```java
UpdateNodeParam param = new UpdateNodeParam(0, "");
param.setId("id");
param.setName("name");
param.setDescription("description");
Node node = managementClient.org().updateNode(param).execute();
```

## 获取组织机构详情

OrgManagementClient().findById(id)

> 通过组织机构 ID 获取组织机构详情

#### 参数

- `id` \<string\> 组织机构 ID

#### 示例

```java
Org org = managementClient.org().findById("id").execute();
```

## 删除节点

OrgManagementClient().deleteNode(deleteNodeParam)

> 删除组织机构树中的某一个节点

#### 参数

- `deleteNodeParam` \<DeleteNodeParam\>
- `deleteNodeParam.orgId` \<string\> 组织机构 ID
- `deleteNodeParam.nodeId` \<string\> 节点 ID

#### 示例

```java
CommonMessage commonMessage = managementClient.org().deleteNode(new DeleteNodeParam("orgId", "nodeId")).execute();
```

## 移动节点

OrgManagementClient().moveNode(orgId, nodeId, targetParentId)

> 移动组织机构节点，移动某节点时需要指定该节点新的父节点。注意不能将一个节点移动到自己的子节点下面。

#### 参数

- `orgId` \<string\> 组织机构 ID
- `nodeId` \<string\> 需要移动的节点 ID
- `targetParentId` \<string\> 目标父节点 ID

#### 示例

```java
Org org = managementClient.org().moveNode("orgId", "nodeId", "targetParentId").execute();
```

## 判断是否为根节点

OrgManagementClient().isRootNode(nodeId, orgId)

> 判断一个节点是不是组织树的根节点

#### 参数

- `nodeId` \<string\> 组织机构 ID
- `orgId` \<string\> 组织机构 ID

#### 示例

```java
Boolean flag = managementClient.org().isRootNode("nodeId", "orgId").execute();
```

## 获取子节点列表

OrgManagementClient().listChildren(orgId, nodeId)

> 查询一个节点的子节点列表

#### 参数

- `orgId` \<string\> 组织机构 ID
- `nodeId` \<string\> 组织机构 ID

#### 示例

```java
List<Node> nodes = managementClient.org().listChildren("orgId", "nodeId").execute();
```

## 模糊搜索组织节点

OrgManagementClient().searchNodes(searchNodesParam)

> 通过节点名称模糊搜索组织节点

#### 参数

- `searchNodesParam.keyword` \<string\> 组织机构名称关键字

#### 示例

```java
List<Node> list = orgManagementClient.searchNodes(new SearchNodesParam("test")).execute();
```

## 获取根节点

OrgManagementClient().rootNode(rootNodeParam)

> 获取一个组织的根节点

#### 参数

- `rootNodeParam` \<RootNodeParam\>
- `rootNodeParam.orgId` \<string\> 组织机构 ID

#### 示例

```java
Node node = managementClient.org().rootNode(new RootNodeParam(0, "orgId")).execute();
```

## 通过 JSON 导入

OrgManagementClient().importByJson(json)

> 通过一个 JSON 树结构导入组织机构

#### 参数

- `json` \<Object\> JSON 格式的树结构，详细格式请见示例代码。

#### 示例

```java

json examples:

{
  name: '北京非凡科技有限公司',
  code: 'feifan',
  children: [
     {
         code: 'operation',
         name: '运营',
         description: '商业化部门'
     },
     {
        code: 'dev',
        name: '研发',
        description: '研发部门',
        children: [
          {
            code: 'backend',
            name: '后端',
            description: '后端研发部门'
          }
        ]
     }
  ]
}

Map map1 = new HashMap<>();
map1.put("name","ceshi11");
map1.put("code","ceshi11");

Map map2 = new HashMap<>();
map2.put("name","ceshi12");
map2.put("code","ceshi12");

Map map = new HashMap<>();
map.put("name","ceshi1");
map.put("code","ceshi1");
map.put("children",Arrays.asList(map1,map2));

Gson gson = new Gson();
String jsonStr = gson.toJson(map);
Node nodes = managementClient.org().importByJson(jsonStr).execute();
```

## 添加成员

OrgManagementClient().addMembers(nodeId, userIds)

> 节点添加成员

#### 参数

- `nodeId` \<string\> 节点 ID
- `userIds` \<string[]\> 用户 ID 列表

#### 示例

```java
Node node = managementClient.org().addMembers("nodeId", Arrays.asList("userId")).execute();
```

## 获取节点成员

OrgManagementClient().listMembers(nodeByIdWithMembersParam)

> 获取节点成员，可以获取直接添加到该节点中的用户，也可以获取到该节点子节点的用户。

#### 参数

- `nodeByIdWithMembersParam` \<NodeByIdWithMembersParam\>
- `nodeByIdWithMembersParam.page` \<number\> 默认值为 : `1`
- `nodeByIdWithMembersParam.limit` \<number\> 默认值为 : `10`
- `nodeByIdWithMembersParam.sortBy` \<SortByEnum\> 排序规则
- `nodeByIdWithMembersParam.includeChildrenNodes` \<boolean\> 是否获取所有子节点的成员 默认值为 : `false`
- `nodeByIdWithMembersParam.id` \<string\> 节点 ID

#### 示例

```java
Node node = managementClient.org().listMembers(new NodeByIdWithMembersParam("id")).execute();
```

## 删除成员

OrgManagementClient().removeMembers(nodeId, userIds)

> 删除节点成员

#### 参数

- `nodeId` \<string\> 节点 ID
- `userIds` \<string[]\> 用户 ID 列表

#### 示例

```java
Node node = managementClient.org().removeMembers("nodeId", Arrays.asList("userId")).execute();
```

## 导出所有组织机构数据

OrgManagementClient().exportAll()

> 导出所有组织机构，返回的数据结构为一个递归的数结构。

#### 示例

```java
List<Node> nodes = this.orgManagementClient.exportAll().execute();
```

#### 示例数据

```json
[
  {
    "id": "601f59578308478a692a71ea",
    "createdAt": "2021-02-07T03:07:03.822Z",
    "updatedAt": "2021-02-07T03:07:03.822Z",
    "userPoolId": "59f86b4832eb28071bdd9214",
    "orgId": "601f59573abea48cceb188c6",
    "name": "科技公司",
    "nameI18n": null,
    "description": null,
    "descriptionI18n": null,
    "order": null,
    "code": null,
    "children": [
      {
        "id": "601f5966800e61428d4190fb",
        "createdAt": "2021-02-07T03:07:18.835Z",
        "updatedAt": "2021-02-07T03:07:18.835Z",
        "userPoolId": "59f86b4832eb28071bdd9214",
        "orgId": "601f59573abea48cceb188c6",
        "name": "产品",
        "nameI18n": null,
        "description": null,
        "descriptionI18n": null,
        "order": null,
        "code": null,
        "children": [],
        "depth": 1,
        "root": false,
        "members": [
          {
            "thirdPartyIdentity": {
              "provider": null,
              "refreshToken": null,
              "accessToken": null,
              "scope": null,
              "expiresIn": null,
              "updatedAt": null
            },
            "id": "5a597f35085a2000144a10ed",
            "createdAt": "2021-02-02T02:36:32.172Z",
            "updatedAt": "2021-02-05T11:30:14.050Z",
            "userPoolId": "59f86b4832eb28071bdd9214",
            "isRoot": true,
            "status": "Activated",
            "oauth": null,
            "email": "root@authing.cn",
            "phone": null,
            "username": "root",
            "unionid": null,
            "openid": null,
            "nickname": null,
            "company": null,
            "photo": "https://files.authing.co/authing-console/default-user-avatar.png",
            "browser": null,
            "device": null,
            "token": "",
            "tokenExpiredAt": "2021-02-19T11:30:13.927Z",
            "loginsCount": 4,
            "lastIp": "::1",
            "name": null,
            "givenName": null,
            "familyName": null,
            "middleName": null,
            "profile": null,
            "preferredUsername": null,
            "website": null,
            "gender": "U",
            "birthdate": null,
            "zoneinfo": null,
            "locale": null,
            "address": null,
            "formatted": null,
            "streetAddress": null,
            "locality": null,
            "region": null,
            "postalCode": null,
            "city": null,
            "province": null,
            "country": null,
            "registerSource": ["offcial:import"],
            "emailVerified": false,
            "phoneVerified": false,
            "lastLogin": "2021-02-05T11:30:14.019Z",
            "blocked": false,
            "isDeleted": false,
            "sendSmsCount": 0,
            "sendSmsLimitCount": 1000,
            "signedUp": "2021-02-02T02:36:32.172Z",
            "externalId": null,
            "mainDepartmentId": null,
            "mainDepartmentCode": null,
            "lastMfaTime": null,
            "passwordSecurityLevel": null
          }
        ]
      },
      {
        "id": "601f59622a1dea5ae5ada750",
        "createdAt": "2021-02-07T03:07:14.163Z",
        "updatedAt": "2021-02-07T03:07:14.163Z",
        "userPoolId": "59f86b4832eb28071bdd9214",
        "orgId": "601f59573abea48cceb188c6",
        "name": "研发",
        "nameI18n": null,
        "description": null,
        "descriptionI18n": null,
        "order": null,
        "code": null,
        "children": [
          {
            "id": "601f597e62eaeda4e17e3352",
            "createdAt": "2021-02-07T03:07:42.475Z",
            "updatedAt": "2021-02-07T03:07:42.475Z",
            "userPoolId": "59f86b4832eb28071bdd9214",
            "orgId": "601f59573abea48cceb188c6",
            "name": "后端",
            "nameI18n": null,
            "description": null,
            "descriptionI18n": null,
            "order": null,
            "code": null,
            "children": [],
            "depth": 2,
            "root": false,
            "members": []
          }
        ],
        "depth": 1,
        "root": false,
        "members": []
      },
      {
        "id": "601f596e89427f0549daf48f",
        "createdAt": "2021-02-07T03:07:26.919Z",
        "updatedAt": "2021-02-07T03:07:26.919Z",
        "userPoolId": "59f86b4832eb28071bdd9214",
        "orgId": "601f59573abea48cceb188c6",
        "name": "商业化",
        "nameI18n": null,
        "description": null,
        "descriptionI18n": null,
        "order": null,
        "code": null,
        "children": [],
        "depth": 1,
        "root": false,
        "members": []
      }
    ],
    "depth": 0,
    "root": true,
    "members": []
  }
]
```

## 导入某个组织机构数据

OrgManagementClient().exportByOrgId()

#### 参数

- `orgId`: 组织机构 ID

#### 示例

```java
String orgId = "60210d36262e1086cd2d1209";
Node node = this.orgManagementClient.exportByOrgId(orgId).execute();
```

#### 示例数据

```json
{
  "id": "601f59578308478a692a71ea",
  "createdAt": "2021-02-07T03:07:03.822Z",
  "updatedAt": "2021-02-07T03:07:03.822Z",
  "userPoolId": "59f86b4832eb28071bdd9214",
  "orgId": "601f59573abea48cceb188c6",
  "name": "科技公司",
  "nameI18n": null,
  "description": null,
  "descriptionI18n": null,
  "order": null,
  "code": null,
  "children": [
    {
      "id": "601f5966800e61428d4190fb",
      "createdAt": "2021-02-07T03:07:18.835Z",
      "updatedAt": "2021-02-07T03:07:18.835Z",
      "userPoolId": "59f86b4832eb28071bdd9214",
      "orgId": "601f59573abea48cceb188c6",
      "name": "产品",
      "nameI18n": null,
      "description": null,
      "descriptionI18n": null,
      "order": null,
      "code": null,
      "children": [],
      "depth": 1,
      "root": false,
      "members": [
        {
          "thirdPartyIdentity": {
            "provider": null,
            "refreshToken": null,
            "accessToken": null,
            "scope": null,
            "expiresIn": null,
            "updatedAt": null
          },
          "id": "5a597f35085a2000144a10ed",
          "createdAt": "2021-02-02T02:36:32.172Z",
          "updatedAt": "2021-02-05T11:30:14.050Z",
          "userPoolId": "59f86b4832eb28071bdd9214",
          "isRoot": true,
          "status": "Activated",
          "oauth": null,
          "email": "root@authing.cn",
          "phone": null,
          "username": "root",
          "unionid": null,
          "openid": null,
          "nickname": null,
          "company": null,
          "photo": "https://files.authing.co/authing-console/default-user-avatar.png",
          "browser": null,
          "device": null,
          "token": "",
          "tokenExpiredAt": "2021-02-19T11:30:13.927Z",
          "loginsCount": 4,
          "lastIp": "::1",
          "name": null,
          "givenName": null,
          "familyName": null,
          "middleName": null,
          "profile": null,
          "preferredUsername": null,
          "website": null,
          "gender": "U",
          "birthdate": null,
          "zoneinfo": null,
          "locale": null,
          "address": null,
          "formatted": null,
          "streetAddress": null,
          "locality": null,
          "region": null,
          "postalCode": null,
          "city": null,
          "province": null,
          "country": null,
          "registerSource": ["offcial:import"],
          "emailVerified": false,
          "phoneVerified": false,
          "lastLogin": "2021-02-05T11:30:14.019Z",
          "blocked": false,
          "isDeleted": false,
          "sendSmsCount": 0,
          "sendSmsLimitCount": 1000,
          "signedUp": "2021-02-02T02:36:32.172Z",
          "externalId": null,
          "mainDepartmentId": null,
          "mainDepartmentCode": null,
          "lastMfaTime": null,
          "passwordSecurityLevel": null
        }
      ]
    },
    {
      "id": "601f59622a1dea5ae5ada750",
      "createdAt": "2021-02-07T03:07:14.163Z",
      "updatedAt": "2021-02-07T03:07:14.163Z",
      "userPoolId": "59f86b4832eb28071bdd9214",
      "orgId": "601f59573abea48cceb188c6",
      "name": "研发",
      "nameI18n": null,
      "description": null,
      "descriptionI18n": null,
      "order": null,
      "code": null,
      "children": [
        {
          "id": "601f597e62eaeda4e17e3352",
          "createdAt": "2021-02-07T03:07:42.475Z",
          "updatedAt": "2021-02-07T03:07:42.475Z",
          "userPoolId": "59f86b4832eb28071bdd9214",
          "orgId": "601f59573abea48cceb188c6",
          "name": "后端",
          "nameI18n": null,
          "description": null,
          "descriptionI18n": null,
          "order": null,
          "code": null,
          "children": [],
          "depth": 2,
          "root": false,
          "members": []
        }
      ],
      "depth": 1,
      "root": false,
      "members": []
    },
    {
      "id": "601f596e89427f0549daf48f",
      "createdAt": "2021-02-07T03:07:26.919Z",
      "updatedAt": "2021-02-07T03:07:26.919Z",
      "userPoolId": "59f86b4832eb28071bdd9214",
      "orgId": "601f59573abea48cceb188c6",
      "name": "商业化",
      "nameI18n": null,
      "description": null,
      "descriptionI18n": null,
      "order": null,
      "code": null,
      "children": [],
      "depth": 1,
      "root": false,
      "members": []
    }
  ],
  "depth": 0,
  "root": true,
  "members": []
}
```
