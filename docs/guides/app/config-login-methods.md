# Configuring Login Method

<LastUpdated/>

By default, your applicaiton only include basic Login method: OTP Login, Username/Password Login, Email/Password Login and PhoneNumber/Password Login.

Beside basic login method, Approw support:

- Social Registration
- Identity Source Login
  - [OIDC](#configuring-oidc-identity-source-login)
  - [SAML](#configuring-saml-identity-source-login)
  - [OAuth2.0](#configuring-oauth2.0-identity-source-login)
  - [CAS](#configuring-cas-identity-source-login)
  - [Azure-AD](#configuring-azure-ad-identity-source-login)
  - [LDAP](#configuring-ldap-identity-source-login)
  - [Windows-AD](#configuring-windows-ad-identity-source-login)

## Social Registration

{{$localeConfig.brandName}} support:

| Social Identity Provider     | Base       | Configuration Manual                |
| ---------------------------- | ---------- | ----------------------------------- |
| Github                       | Web        | Github Configuration Manual         |
| Google                       | Web        | Google Configuration Manual         |
| Sign in with Apple（Web）    | Web        | Apple Configuration Manual (Web)    |
| Sign in with Apple（Mobile） | Mobile APP | Apple Configuration Manual (Mobile) |

### Configuring customized Social Registration

{{$localeConfig.brandName}} allow Identity Provider with customized OAuth2.0, Please refer to <router-link to="/connections/custom-social-provider/" target="_blank">Configuring customized Social Registration</router-link>.

## Enterprise Identity Source

{{$localeConfig.brandName}} support Identity Source as LDAP, Windows AD. User information will synchronize automatically to Approw User Directory after successful login via Identity Source.

### Configuring OIDC Identity Source Login

Please refer to [Configuring OIDC Identity Source](/connections/oidc/) for steps. After configuration, you have to enable this login method in **Applications** tab.

![](./images/login-method-1.png)

### Configuring SAML Identity Source Login

Please refer to [Configuring SAML Identity Source Login](/connections/saml/) for steps. After configuration, you have to enable this login method in **Applications** tab.

![](./images/login-method-2.png)

### Configuring OAuth2.0 Identity Source Login

Please refer to [Configuring OAuth2.0 Identity Source Login](/connections/oidc/) for steps. After configuration, you have to enable this login method in **Applications** tab.

![](./images/login-method-3.png)

### Configuring CAS Identity Source Login

Please refer to [Configuring CAS Identity Source Login](/connections/cas/) for steps. After configuration, you have to enable this login method in **Applications** tab.

![](./images/login-method-4.png)

### Configuring Azure AD Identity Source Login

Please refer to [Configuring Azure AD Identity Source Login](/connections/azure-active-directory/) for steps. After configuration, you have to enable this login method in **Applications** tab.

![](./images/login-method-5.png)

### Configuring LDAP Identity Source Login

Please refer to [Configuring LDAP Identity Source Login](/connections/ldap/) for steps. After configuration, you have to enable this login method in **Applications** tab.

![](./images/login-method-6.png)

### Configuring Windows AD Identity Source Login

Please refer to [Configuring Windows AD Identity Source Login](/connections/windows-active-directory/) for steps. After configuration, you have to enable this login method in **Applications** tab.

![](./images/login-method-7.png)
