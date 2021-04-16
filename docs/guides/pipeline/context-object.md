---
meta:
  - name: description
    content: Context Object
---

# Context Object

<LastUpdated/>


The context object saves the context of the current authentication process, including authentication methods, identity providers, and request IPs, addresses, etc.


## Attributes

| Attribute name           | Type   | Description                                                                                                        |
| :--------------- | :----- | :---------------------------------------------------------------------------------------------------------- |
| protocol         | string | Authentication protocol. See below for specific instructions.                                                                                  |
| connection       | string | Identity provider. See below for specific instructions.                                                                                |  |
| userPoolId       | string | User pool ID                                                                                                  |
| userPoolName     | string | User pool name                                                                                                 |
| userPoolMetadata | object | User pool configuration                                                                                                |
| appId       | string | ID of the current user                                                                                                |
| appName     | string | The name of the current application                                                                                                 |
| appMetadata | object | Configuration information of the current application                                                                                                 |
| request          | object | Details of the current request, including: <br> `ip`: Client IP <br> `geo`: The geographical location of the client resolved by IP <br> `body`: request body <br> `query`: query string object, you can get the corresponding query parameters through `request.query.xxx` |

## Protocol

Authentication protocol.

| Possible value   | Description                                                                                                          |
| :------- | :------------------------------------------------------------------------------------------------------------ |
| password | Authentication method based on account password.                                                                                        |
| sms      | Authentication method based on SMS verification code.                                                                                      |
| social   | The social login authentication default value when logging in with the {{$localeConfig.brandName}} integrated social login method.                                         |
| ldap     | Use LDAP for authentication. For how to access LDAP, please refer to [Configuring LDAP Service](../../connections/ldap/).              |
| saml     | Use SAML for authentication. For how to access SAML, please refer to  [Access SAML](../../connections/saml/).                    |
| oidc     | Use OIDC protocol for authentication. For how to access OIDC, please refer to [Using OIDC Authorization](../../connections/oidc/). |

## Connection

Identity provider.

<table>
  <thead>
    <tr>
      <th style="text-align:left">Possible value</th>
      <th style="text-align:left">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left">ldap	</td>
      <td style="text-align:left">Use LDAP protocol to log in. An {{$localeConfig.brandName}} LDAP service corresponds to an {{$localeConfig.brandName}} user directory or a third-party user directory. For details, refer to
        <a
        href="../../connections/ldap/">Configuring LDAP Service</a> and <a href="../../guides/users/ldap-user-directory/"> Using {{$localeConfig.brandName}} LDAP User Directory</a>.</td>
    </tr>
    <tr>
      <td style="text-align:left">saml</td>
      <td style="text-align:left">Log in using the SAML protocol. For how to access SAML, refer to <a href="../../connections/saml/">Accessing SAML</a>.</td>
    </tr>
    <tr>
      <td style="text-align:left">oidc</td>
      <td style="text-align:left">Use OIDC protocol authentication. For information on how to access OIDC, please refer to <a href="../../connections/oidc/">Using OIDC Authorization</a>.</td>
    </tr>
    <tr>
      <td style="text-align:left">github</td>
      <td style="text-align:left">Log in with GitHub. For details, refer to
        <a
        href="../../connections/github">Access GitHub Login</a>.</td>
    </tr>
  </tbody>
</table>
## data object

### Before and after registration

Before and after registration, the requested fields of the data object in the Pipeline are as follows: For details, refer to [{{$localeConfig.brandName}} GraphQL Debugger](https://approw.com/graphiql/) **User Authentication** - **Registration**Interface.

::: hint-warning
Email, phone, unionid and other fields may not exist at the same time, please check whether they exist before using them. For example:

```js
const email = context.request.body.email;
if (email) {
  // Which means user registered the account with an email.
  // The logic that can be used for registering whitelist with emails.

  if (!email.endsWith("example.com")) {
    return callback(new Error("Access Denied!"));
  }
}
```

:::

| Field Name     | Type    | Exist | Description                                       |
| :--------- | :------ | ------------ | :----------------------------------------- |
| username   | string  | No           | User name. It is not empty when registering with the user name.       |
| email      | string  | No           | Email address. It is not empty when registering with the user name.         |
| phone      | string  | No           | Mobile phone number. It is not empty when using the mobile phone number to register.      |
| forceLogin | boolean | No           | Whether to automatically perform the login process when registering, the default is false. |
| profile    | object  | Yes           | User information filled in for user registration.                |

### Before and after authentication

The request fields of the data object in the pipeline before and after authentication are as follows:

::: hint-warning
These fields may not all exist, please check whether they exist before using them.
:::

| Field Name   | Type   | Exist | Description                                 |
| :------- | :----- | ------------ | :----------------------------------- |
| username | string | No           | User name, which is not empty when logging in using user name. |
| email    | string | No           | Email, which is not empty when logging in using email.     |
| phone    | string | No           | Mobile phone number, which is not empty when logging in using mobile phone number. |

## userPool object

| Field Name | Type   | Description       |
| :----- | :----- | :--------- |
| id     | string | User pool ID  |
| name   | string | User pool name |

## geo Attribute

Sample data:

```json
{
  "province": "Beijing",
  "city": "Beijing",
  "adcode": "110000",
  "rectangle": "116.0119343,39.66127144;116.7829835,40.2164962"
}
```
