---
{
  noSidebar: true,
  noToc: true,
  noFeedback: true,
  fullWidthPage: true,
  title: '使用 SAML2 登录华为云控制台',
  bannerTitle: '使用 SAML2 登录华为云控制台',
  steps:
    [
      {
        title: '配置 {{$localeConfig.brandName}} SAML2 IdP',
        subTitle: '{{$localeConfig.brandName}} 应用开启 SAML2 Provider 并配置',
      },
      { title: '配置华为云', subTitle: '在华为云创建用户，并开启用户 SSO' },
      {
        title: '配置 {{$localeConfig.brandName}} 用户',
        subTitle: '创建 {{$localeConfig.brandName}} 用户并关联华为云用户',
      },
      { title: '配置完成', subTitle: '使用 {{$localeConfig.brandName}} IdP 登录华为云' },
    ],
}
---

<IntegrationDetail/>
