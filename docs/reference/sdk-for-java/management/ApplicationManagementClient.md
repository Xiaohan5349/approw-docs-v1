---
meta:
  - name: description
    content: 管理应用
---

# 管理应用

<LastUpdated/>


> 一个 {{$localeConfig.brandName}} 用户池可以创建多个应用。此模块用于管理 {{$localeConfig.brandName}} 应用，可以进行应用列表获取以及应用详情查看等操作。

## 获取应用列表

ApplicationManagementClient().listApplications()

> 获取用户池应用列表

#### 示例

```java
List<Application> result = applicationManagementClient.listApplications().execute();
```

## 获取应用详情

ApplicationManagementClient().detail(appId)

> 获取用户池应用列表

#### 参数

- `appId` \<string\> 应用 ID

#### 示例

```java
Application application = applicationManagementClient.detail(appId).execute();
```
