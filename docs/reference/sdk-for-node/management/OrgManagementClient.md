# 管理组织机构

<LastUpdated/>

> 一个 {{$localeConfig.brandName}} 用户池可以创建多个组织机构。此模块用于管理 {{$localeConfig.brandName}} 组织机构，可以进行组织机构的增删改查、添加删除移动节点、导入组织机构等操作。

请使用以下方式使用该模块：

```javascript
import { ManagementClient } from 'authing-js-sdk'
const managementClient = new ManagementClient({
  userPoolId: 'YOUR_USERPOOL_ID',
  secret: 'YOUR_USERPOOL_SECRET',
})
managementClient.org.list // 获取用户池组织机构列表
managementClient.org.moveNode // 获取组织机构详情
managementClient.org.listMembers // 获取节点用户列表
```

## 创建组织机构

OrgManagementClient().create(name, description, code)

> 创建组织机构，会创建一个只有一个节点的组织机构。
> 如果你想将一个完整的组织树导入进来，请使用 importByJson 方法。

#### 参数

- `name` \<string\> 组织机构名称，该名称会作为该组织机构根节点的名称。
- `description` \<string\> 根节点描述
- `code` \<string\> 根节点唯一标志，必须为合法的英文字符。

#### 示例

```javascript
const org = await managementClient.org.create(
  '北京非凡科技',
  '北京非凡科技有限公司',
  'feifan'
)
```

#### 返回值

## 删除组织机构

OrgManagementClient().deleteById(id)

> 删除组织机构树

#### 参数

- `id` \<string\> 组织机构 ID

#### 示例

#### 返回值

- `Promise<CommonMessage>`

## 获取用户池组织机构列表

OrgManagementClient().list(page, limit)

> 获取用户池组织机构列表

#### 参数

- `page` \<number\> 默认值为 : `1`。
- `limit` \<number\> 默认值为 : `10`。

#### 示例

```javascript
const { totalCount, list } = await managementClient.org.list()
```

#### 返回值

- `null`

## 添加节点

OrgManagementClient().addNode(orgId, parentNodeId, data)

> 在组织机构中添加一个节点

#### 参数

- `orgId` \<string\> 组织机构 ID
- `parentNodeId` \<string\> 父节点 ID
- `data` \<Object\> 节点数据
- `data.name` \<string\> 节点名称
- `data.code` \<string\> 节点唯一标志
- `data.description` \<string\> 节点描述信息

#### 示例

```javascript
const org = await managementClient.org.create(
  '北京非凡科技',
  '北京非凡科技有限公司',
  'feifan'
)
const { id: orgId, rootNode } = org
const node = await managementClient.org.addNode(orgId, rootNode.id, {
  name: '运营部门',
})
```

#### 返回值

- `Promise<Org>`

## 修改节点

OrgManagementClient().updateNode(id, updates)

> 修改节点数据

#### 参数

- `id` \<string\> 节点 ID
- `updates` \<Object\> 修改数据
- `updates.name` \<string\> 节点名称
- `updates.code` \<string\> 节点唯一标志
- `updates.description` \<string\> 节点描述信息

#### 示例

```javascript
await managementClient.org.updateNode('NDOEID', {
  name: '新的节点名称',
})
```

#### 返回值

- `Promise<Org>`

## 获取组织机构详情

OrgManagementClient().findById(id)

> 通过组织机构 ID 获取组织机构详情

#### 参数

- `id` \<string\> 组织机构 ID

#### 示例

#### 返回值

- `Promise<Org>`

## 删除节点

OrgManagementClient().deleteNode(orgId, nodeId)

> 删除组织机构树中的某一个节点

#### 参数

- `orgId` \<string\> 组织机构 ID
- `nodeId` \<string\> 节点 ID

#### 示例

```javascript
const org = await managementClient.org.create(
  '北京非凡科技',
  '北京非凡科技有限公司',
  'feifan'
)
const { id: orgId, rootNode } = org
const node = await managementClient.org.deleteNode(orgId, rootNode.id)
```

#### 返回值

- `Promise<CommonMessage>`

## 移动节点

OrgManagementClient().moveNode(orgId, nodeId, targetParentId)

> 移动组织机构节点，移动某节点时需要指定该节点新的父节点。注意不能将一个节点移动到自己的子节点下面。

#### 参数

- `orgId` \<string\> 组织机构 ID
- `nodeId` \<string\> 需要移动的节点 ID
- `targetParentId` \<string\> 目标父节点 ID

#### 示例

```javascript
await managementClient.org.moveNode('ORGID', 'NODEID', 'TRAGET_NODE_ID')
```

#### 返回值

- `Promise<Org>` 最新的树结构

## 判断是否为根节点

OrgManagementClient().isRootNode(orgId, nodeId)

> 判断一个节点是不是组织树的根节点

#### 参数

- `orgId` \<string\> 组织机构 ID
- `nodeId` \<string\> 组织机构 ID

#### 示例

#### 返回值

- `Promise<boolean>`

## 获取子节点列表

OrgManagementClient().listChildren(orgId, nodeId)

> 查询一个节点的子节点列表

#### 参数

- `orgId` \<string\> 组织机构 ID
- `nodeId` \<string\> 组织机构 ID

#### 示例

```javascript
// 子节点列表
cosnt children = await managementClient.org.listChildren("ORGID", "NODEID")
```

#### 返回值

- `Promise<Node[]>`

## 获取根节点

OrgManagementClient().rootNode(orgId)

> 获取一个组织的根节点

#### 参数

- `orgId` \<string\> 组织机构 ID

#### 示例

```javascript
const rootNode = await managementClient.org.rootNode('ORGID')
```

#### 返回值

- `Promise<Node[]>`

## 通过 JSON 导入

OrgManagementClient().importByJson(json)

> 通过一个 JSON 树结构导入组织机构

#### 参数

- `json` \<Object\> JSON 格式的树结构，详细格式请见示例代码。

#### 示例

```javascript
const tree = {
  name: '北京非凡科技有限公司',
  code: 'feifan',
  children: [
    {
      code: 'operation',
      name: '运营',
      description: '商业化部门',
    },
    {
      code: 'dev',
      name: '研发',
      description: '研发部门',
      children: [
        {
          code: 'backend',
          name: '后端',
          description: '后端研发部门',
        },
      ],
    },
  ],
}
const org = await managementClient.org.importByJson(tree)
```

#### 返回值

- `Promise<Node[]>`

## 添加成员

OrgManagementClient().addMembers(nodeId, userIds)

> 节点添加成员

#### 参数

- `nodeId` \<string\> 节点 ID
- `userIds` \<string[]\> 用户 ID 列表

#### 示例

```javascript
cosnt { totalCount, list } = await managementClient.org.addMembers("NODE_ID", ["USER_ID"])
```

#### 返回值

- `Promise<PaginatedUsers>`

## 获取节点成员

OrgManagementClient().listMembers(nodeId, options)

> 获取节点成员，可以获取直接添加到该节点中的用户，也可以获取到该节点子节点的用户。

#### 参数

- `nodeId` \<string\> 节点 ID
- `options` \<Object\> 查询参数
- `options.page` \<number\> 默认值为 : `1`。
- `options.limit` \<number\> 默认值为 : `10`。
- `options.includeChildrenNodes` \<boolean\> 是否获取所有子节点的成员 默认值为 : `false`。

#### 示例

```javascript
const { totalCount, list } = await managementClient.org.listMembers('NODE_ID')
```

#### 返回值

- `Promise<PaginatedUsers>`

## 删除成员

OrgManagementClient().removeMembers(nodeId, userIds)

> 删除节点成员

#### 参数

- `nodeId` \<string\> 节点 ID
- `userIds` \<string[]\> 用户 ID 列表

#### 示例

```javascript
await managementClient.org.removeMembers('NODEID', ['USER_ID'])
```

#### 返回值

- `Promise<PaginatedUsers>`

## 导出所有组织机构数据

OrgManagementClient().exportAll()

> 导出所有组织机构，返回的数据结构为一个递归的数结构。

#### 示例

```javascript
const data = await managementClient.org.exportAll()
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

- `orgId` \<string\> 组织机构 ID

#### 示例

```javascript
const data = await managementClient.org.exportByOrgId('ORG_ID')
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

## 获取组织机构被授权的所有资源列表

OrgManagementClient.listAuthorizedResources(orgCode, namespace, {
resourceType: ResourceType.MENU,
})

> 获取一个组织机构被授权的所有资源。

#### 参数

- `groupCode` \<string\> 组织机构 code；
- `namespace` \<string\> 权限分组的 code，详情请见[使用权限分组管理权限资源](/guides/access-control/resource-group.md)
- `resourceType` \<string\> 可选，资源类型，默认会返回所有有权限的资源，现有资源类型如下：
  - `DATA`: 数据类型；
  - `API`: API 类型数据；
  - `MENU`: 菜单类型数据；
  - `BUTTON`: 按钮类型数据。

#### 示例

```javascript
managementClient.org.listAuthorizedResources('ORG_CODE', 'code')
```

#### 示例数据

- `type` 为资源类型；
- `code`: 资源描述符，如果是 `DATA` 类型资源，格式为 `resourceType:resourceId`，如 `books:*` 表示所有书籍，`books:1` 表示 ID 为 1 的书籍。
- `actions`: 用户被授权对该资源的操作。

```json
{
  "totalCount": 12,
  "list": [
    {
      "code": "menu_a",
      "type": "MENU"
    },
    {
      "code": "menu_b",
      "type": "MENU"
    },
    {
      "code": "books:1",
      "type": "DATA",
      "actions": ["books:delete", "books:update"]
    }
  ]
}
```
