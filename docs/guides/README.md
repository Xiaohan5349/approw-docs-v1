# User guide overview

<LastUpdated/>

Welcome to the user guide, here will start your development journey in {{$localeConfig.brandName}}!

Here, you will mainly learn two things:

1. Integrated authentication, we will guide you step by step through examples and codes on how to quickly integrate authentication functions into your application system;
2. Manage resources, how to manage your resources in {{$localeConfig.brandName}}, such as applications, roles, user directories, configurations, etc.

Before you start development, we recommend that you first understand what [{{$localeConfig.brandName}} is](/concepts/), and several core concepts in {{$localeConfig.brandName}}: [User Pool](/concepts/user-pool.md), [Application](/concepts/application.md), [the Difference Between Authentication And Authorization](/concepts/authentication-vs-authorization.md).

## Integrate authentication into your application

We recommend reading [Quick Start: Authenticate Your First User](/guides/basics/authenticate-first-user/) first, you will learn the complete steps of integrating {{$localeConfig.brandName}}， which helps you get started quickly .

Afterwards, you can follow the topic to read the guide:

1. Authenticate the user
    - Basic [Account & Password Authentication](./authentication/basic/password/README.md)、[SMS Verification Code Authentication](./authentication/basic/sms/README.md) methods；
    - [Use Social Login Authentication](/guides/authentication/social/)；
    - [Use The Self-built App to Implement QR Code Scanning Login](/guides/authentication/qrcode/use-self-build-app/)；
    - [Implement Single Sign-on (SSO)](/guides/authentication/sso/)；
    - [Implement Single Sign-on on Mobile](/guides/authentication/mobile-sso/)；
    - [Integrate Multi-factor Authentication](/guides/authentication/mfa/)
    - Extend the authentication process:
        - [Add User Defined Fields](/guides/authentication/extensibility/user-defined-field/)
        - [Add Customize Field with IdToken](/guides/authentication/extensibility/customize-id-token.md)
        - [Authenticate Users with Custom Database](/guides/authentication/extensibility/database-connection.md)
        - [Extend The Authentication Process with Pipeline](/guides/authentication/extensibility/pipeline.md)
        - [Monitor Authentication Events with Webhook](/guides/authentication/extensibility/webhook.md)
2. Authority management for users
    - [Choose The Suitable Permission Model](/guides/access-control/choose-the-right-access-control-model.md)
    - [Integrate RBAC Permission Model into Your Application System](/guides/access-control/rbac.md)
    - [Integrate ABAC Permission Model into Your Application System](/guides/access-control/abac.md)
    - [Use Privilege Grouping to Manage Privilege Resources](/guides/access-control/resource-group.md)
    - [Manage Resource Privileges](/guides/access-control/resource-acl.md)
3. Authorization

    - [User-consent, Inter-application Authorization](/guides/authorization/user-consent-authz.md)
    - [M2M Authorization](/guides/authorization/m2m-authz.md)

4. Manage user accounts

    - [User Fields Interpretation](/guides/user/user-profile.md)；
    - [Learn How Administrator Create Accounts](/guides/user/create-user/)；
    - [Manage User Accounts](/guides/user/manage-profile.md)，Such as modifying user information, binding MFA, etc.;
    - [Bind Account](/guides/user/bind-social-account.md)；
    - ...

## Manage your resources in {{$localeConfig.brandName}}

We recommend to read [Console Overview](/guides/basics/console/) first, you will quickly understand what functions of the {{$localeConfig.brandName}} console can help you to understand {{$localeConfig.brandName}} The whole picture.

Afterwards, you can follow the topic to read the guide:

1. [Manage User Directory](/guides/users/)

    - [Learn User Directory Setting](/guides/users/settings.md)；
    - [How to Add User-defined Fields](/guides/users/user-defined-field/)；
    - [How to Search for users](/guides/users/search.md)；
    - [How to use LDAP User Directory in Approw](/guides/users/ldap-user-directory.md)。

2. [Application Management](/guides/app/)
3. [Become a Source of Federation Authentication](/guides/federation/)
4. [Integreate Third-Party Identity Providers](/guides/connections/)

    - [Integrate Social Authentication with Approw](/guides/connections/social.md)
    - [Integrate Enterprise IdPs](/guides/connections/enterprise.md)
    - [Integrate Customized Databases](/guides/database-connection/overview.md)

5. [Organization Management](/guides/org/)

    - [Create Or Import An Organization](/guides/org/create-or-import-org/README.md)；
    - [Manage The Organization](/guides/org/manage-org/README.md)；
    - [Manage The Member Lifecycle](/guides/org/staff-life-cycle-management/README.md)；
    - [Open Organizational Data to The Public Using The LDAP Protocol](/guides/org/ldap-user-directory/README.md)。

6. [View Audit Log](/guides/audit/)
7. Configure security information

    - [Configure Web Security Domain](/guides/security/config-domain.md)
    - [Configure Password Strength](/guides/security/config-password.md)

8. Configure User Pool Information
    - [Configure User Pool Basic Information](/guides/userpool-config/basic-config.md)
    - [Configure Mail Services and Templates](/guides/userpool-config/email/)
    - [Configure SMS Service](/guides/userpool-config/sms/)

## Undrstand the privatization deployment plan

If you need to privatize {{$localeConfig.brandName}}, please read the following guidelines:

-   [Basic Deployment](/guides/deployment/bare-metal.md)；
-   [Docker Deployment](/guides/deployment/docker-compose.md)；
-   [Kubernetes Deployment](/guides/deployment/kubernetes.md)。
