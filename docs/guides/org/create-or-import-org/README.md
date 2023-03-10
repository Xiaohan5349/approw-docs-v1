# Create Or Import An Organization

<LastUpdated/>

If you have not created your own organization, we recommend that you use {{$localeConfig.brandName}} as the main identity source to store user and organization data. If you store your own organization data elsewhere, we also support importing third-party organization data into {{$localeConfig.brandName}}.

## Create an organization

You can choose to use the console or API & SDK to create an organization.

<StackSelector snippet="create-org" selectLabel="选择方式" :order="['dashboard', 'java', 'javascript']"/>

## Import organization

{{$localeConfig.brandName}} organization supports importing organizations and users from the following methods:

- [Windows Local Active Directory](https://en.wikipedia.org/wiki/Active_Directory)
- Excel
- You can also use API & SDK to [write user import scripts](/docs/guides/migrations/use-api.md).

Please read the corresponding documents separately:

<StackSelector snippet="import-org" selectLabel="选择导入方式" :order="['wechat-work', 'dingtalk', 'excel', 'ldap', 'active-directory']"/>

After configuration, you can select the corresponding import method to import to the organization.

![](~@imagesEnUs/guides/org/import-org.jpg)
