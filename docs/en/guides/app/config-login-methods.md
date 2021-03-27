# Configuring Login Method

<LastUpdated/>


By default, your applicaiton only include basic Login method: OTP Login, Username/Password Login, Email/Password Login and PhoneNumber/Password Login.

Beside basic login method, Approw support:
- Social Registration
- Identity Source Login
    - [OIDC](#Configuring-OIDC-Identity-Source-Login)
    - [SAML](#Configuring-SAML-Identity-Source-Login)
    - [OAuth2.0](#Configuring-OAuth2.0-Identity-Source-Login)
    - [CAS](#Configuring-CAS-Identity-Source-Login)
    - [Azure-AD](#Configuring-Azure-AD-Identity-Source-Login)
    - [LDAP](#Configuring-LDAP-Identity-Source-Login)
    - [Windows-AD](#Configuring-Windows-AD-Identity-Source-Login)

## Social Registration

{{$localeConfig.brandName}} support:

| Social Identity Provider | Base | Configuration Manual |
| --- | --- | --- |
| Github | Web | Github Configuration Manual |
| Google | Web | Google Configuration Manual |
| Sign in with Apple（Web） | Web | Apple Configuration Manual (Web) |
| Sign in with Apple（Mobile） | Mobile APP | Apple Configuration Manual (Mobile) |

### Configuring customized Social Registration

{{$localeConfig.brandName}} allow Identity Provider with customized OAuth2.0, Please refer to <router-link to="/connections/custom-social-provider/" target="_blank">Configuring customized Social Registration</router-link>.


## Enterprise Identity Source

{{$localeConfig.brandName}} support Identity Source as LDAP, Windows AD. User information will synchronize automatically to Approw User Directory after successful login via Identity Source.

### Configuring OIDC Identity Source Login

Please refer to [Configuring OIDC Identity Source](/docs/en/connections/oidc/) for steps. After configuration, you have to enable this login method in **Applications** tab.

![](./images/Xnip2021-03-05_13-23-10.png)

### Configuring SAML Identity Source Login

Please refer to [Configuring SAML Identity Source Login](/docs/en/connections/saml/) for steps. After configuration, you have to enable this login method in **Applications** tab.

![](./images/Xnip2021-03-03_21-01-20.png)

### Configuring OAuth2.0 Identity Source Login

Please refer to [Configuring OAuth2.0 Identity Source Login](/docs/en/connections/oidc/) for steps. After configuration, you have to enable this login method in **Applications** tab.

![](./images/Xnip2021-03-03_21-05-05.png)

### Configuring CAS Identity Source Login

Please refer to [Configuring CAS Identity Source Login](/docs/en/connections/cas/) for steps. After configuration, you have to enable this login method in **Applications** tab.

![](./images/Xnip2021-03-03_21-05-54.png)


### Configuring Azure AD Identity Source Login

Please refer to [Configuring Azure AD Identity Source Login](/docs/en/connections/azure-active-directory/) for steps. After configuration, you have to enable this login method in **Applications** tab.

![](./images/Xnip2021-03-03_21-07-47.png)

### Configuring LDAP Identity Source Login

Please refer to [Configuring LDAP Identity Source Login](/docs/en/connections/ldap/) for steps. After configuration, you have to enable this login method in **Applications** tab.

![](./images/Xnip2021-03-03_21-10-03.png)


### Configuring Windows AD Identity Source Login

Please refer to [Configuring Windows AD Identity Source Login](/docs/en/connections/windowns-active-directory/) for steps. After configuration, you have to enable this login method in **Applications** tab.

![](./images/Xnip2021-03-03_21-09-06.png)