# What is ID token

<LastUpdated/>

In `OIDC` Protocol, There are three type of Token: `id_token`, `access_token` and `refresh_token`.

- [What is Access Token](./access-token.md)
- [What is Refresh Token](./refresh-token.md)

**ID Token** is the most important part that OpenID Connect [OIDC](https://openid.net/specs/openid-connect-core-1_0.html) added from [OAuth 2.0](https://tools.ietf.org/html/rfc6749). **ID Token** contains user's identity information. It can be used to [verify](/guides/faqs/how-to-validate-user-token.md) user's identity when front end calling backend for resources.

In general **ID Token** is [`JWT Token`](./jwt-token.md), it's including user's identity key/value pairs. Eg:

```json
{
  "iss": "https://server.example.com",
  "sub": "24400320",
  "aud": "s6BhdRkqt3",
  "nonce": "n-0S6_WzA2Mj",
  "exp": 1311281970,
  "iat": 1311280970,
  "auth_time": 1311280969,
  "acr": "urn:mace:incommon:iap:silver"
}
```

**ID Token** is a `JWT Token` means:

`id_token` include user's identity information. There is no need for another request for user info
The integrity of `id_token` can be verified. [How to Verify ID Token](/guides/faqs/how-to-validate-user-token.md).

## ID Token Claims Example

| Claim              | Claim                 |
| ------------------ | --------------------- |
| sub                | birthdate             |
| name               | zoneinfo              |
| given_name         | locale                |
| family_name        | phone_number          |
| middle_name        | phone_number_verified |
| nickname           | address               |
| preferred_username | formatted             |
| profile            | street_address        |
| picture            | locality              |
| website            | region                |
| email              | postal_code           |
| email_verified     | country               |
| gender             | updated_at            |

[OIDC Protocol for ID Token](https://openid.net/specs/openid-connect-core-1_0.html#StandardClaims)
