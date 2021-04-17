---
{
  noSidebar: true,
  noToc: true,
  noFeedback: true,
  fullWidthPage: true,
  title: 'Login AWS Kibana with SAML2',
  bannerTitle: 'Login AWS Kibana with SAML2',
  steps:
    [
      { title: 'Configure AWS ES', subTitle: 'Modify the AWS ES' },
      {
        title: 'Configure {{$localeConfig.brandName}} SAML2 IDP',
        subTitle: 'Enable and configure SAML2 Provider for {{$localeConfig.brandName}} applications',
      },
      { title: 'Upload Metadata Document to AWS ES', subTitle: 'Modify the metedata and upload it to AWS ES' },
      { title: 'Add the User in {{$localeConfig.brandName}}', subTitle: 'Create a user in {{$localeConfig.brandName}} with SAML master username' },
      { title: 'Login AWS Kibana with Approw IDP', subTitle: 'Use {{$localeConfig.brandName}} IDP to log in to AWS Kibana' },
    ],
}
---

<IntegrationDetail/>
