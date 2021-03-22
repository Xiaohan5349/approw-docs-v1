# 创建或导入组织机构

<LastUpdated/>

如果你还没有创建自己的组织机构，我们推荐你使用 {{$localeConfig.brandName}} 作为主的身份源，存储用户和组织机构数据；如果你在其他地方存储了自己的组织机构数据，我们也支持将第三方的组织机构数据导入到 {{$localeConfig.brandName}}。

## 创建组织机构

你可以选择使用控制台或者 API & SDK 创建。

<StackSelector snippet="create-org" selectLabel="选择方式" :order="['dashboard', 'java', 'javascript']"/>

## 导入组织机构

{{$localeConfig.brandName}} 组织机构支持从以下途径导入组织机构与用户：

- [企业微信](https://work.weixin.qq.com/)
- [钉钉](https://oa.dingtalk.com)
- [LDAP Server](https://www.openldap.org/)
- [Windows 本地的 Active Directory](https://en.wikipedia.org/wiki/Active_Directory)
- [Excel](?import-org=excel#导入组织机构)
- 你也可以使用 API & SDK，[编写用户导入脚本](/guides/migrations/use-api.md)。

请分别阅读相对应的文档：

<StackSelector snippet="import-org" selectLabel="选择导入方式" :order="['wechat-work', 'dingtalk', 'excel', 'ldap', 'active-directory']"/>

配置好之后，你可以选择对应的导入方式导入组织机构。

![](~@imagesZhCn/guides/org/import-org.jpg)
