# MfaAuthenticationClient

<LastUpdated/>


> This client is used to bind the MFA authenticator, unbind the MFA authenticator, and second authentication of the user.

Request to bind MFA authenticator:

```javascript
import { AuthenticationClient } from 'approw-js-sdk'
const authenticationClient = new AuthenticationClient({
  appId: 'YOUR_APP_ID',
})
await authenticationClient.mfa.assosicateMfaAuthenticator({
  authenticatorType: 'totp',
})
```

Verify the MFA secondary password:

```javascript
import { AuthenticationClient } from 'approw-js-sdk'
const authenticationClient = new AuthenticationClient({
  appId: 'YOUR_APP_ID',
})
await authenticationClient.mfa.verifyTotpMfa({
  totp: '112233',
  mfaToken: 'xxx',
})
```

## Get MFA authenticator

MfaAuthenticationClient().getMfaAuthenticators()

> Get MFA authenticator

#### Parameter

#### Example

```javascript
const authenticationClient = new AuthenticationClient({
  appId: 'YOUR_APP_ID',
})
const authenticators = await authenticationClient.mfa.getMfaAuthenticators({
  type: 'totp',
})
```

#### Return value

- `Promise<IMfaAuthenticators>`

## Request the QR code and credential information of MFA authenticator

MfaAuthenticationClient().assosicateMfaAuthenticator()

> Request the QR code and credential information of MFA authenticator

#### Parameter

#### Example

```javascript
const authenticationClient = new AuthenticationClient({
  appId: 'YOUR_APP_ID',
})
const authenticators = await authenticationClient.mfa.assosicateMfaAuthenticator(
  { authenticatorType: 'totp' }
)
```

#### Return value

- `Promise<IMfaAssociation>`

## Unbind MFA authenticator

MfaAuthenticationClient().deleteMfaAuthenticator()

> Unbind MFA authenticator

#### Parameter

#### Example

```javascript
const authenticationClient = new AuthenticationClient({
  appId: 'YOUR_APP_ID',
})
const authenticators = await authenticationClient.mfa.deleteMfaAuthenticator()
```

#### Return value

- `Promise<IMfaDeleteAssociation>`

## Confirm authenticator binding

MfaAuthenticationClient().confirmAssosicateMfaAuthenticator()

> Confirm authenticator binding

#### Parameter

#### Example

```javascript
const authenticationClient = new AuthenticationClient({
  appId: 'YOUR_APP_ID',
})
const authenticators = await authenticationClient.mfa.confirmAssosicateMfaAuthenticator(
  { authenticatorType: 'totp', totp: '112233' }
)
```

#### Return value

- `Promise<IMfaConfirmAssociation>`

## Verify MFA one-time-password 

MfaAuthenticationClient().verifyTotpMfa()

> Verify MFA one-time-password 

#### Parameter

#### Example

```javascript
const authenticationClient = new AuthenticationClient({
  appId: 'YOUR_APP_ID',
})
const authenticators = await authenticationClient.mfa.verifyTotpMfa({
  authenticatorType: 'totp',
  totp: '112233',
})
```

#### Return value

- `Promise<User>`

## Verify the SMS one-time-password

MfaAuthenticationClient().verifyAppSmsMfa()

> Verify the SMS one-time-password

#### Parameter

- `options` \<Object\>
- `options.phone` \<string\> User phone number
- `options.code` \<string\> SMS code
- `options.mfaToken` \<string\> MfaToken returned from login interface.

#### Example

```javascript
const authenticationClient = new AuthenticationClient({
  appId: 'YOUR_APP_ID',
})
const authenticators = await authenticationClient.mfa.verifySmsMfa({
  mfaToken: 'xxxxxx',
  phone: '173xxxxxxxx',
  code: 'xxxx',
})
```

#### Return value

- `Promise<User>`

## Verify the email one-time-password

MfaAuthenticationClient().verifyAppEmailMfa()

> Verify the email one-time-password.

#### Parameter

- `options` \<Object\>
- `options.email` \<string\> User email
- `options.code` \<string\> OTP code
- `options.mfaToken` \<string\> MfaToken returned from login interface

#### Example

```javascript
const authenticationClient = new AuthenticationClient({
  appId: 'YOUR_APP_ID',
})
const authenticators = await authenticationClient.mfa.verifyAppEmailMfa({
  mfaToken: 'xxxxxx',
  email: 'example@approw.com',
  code: 'xxxx',
})
```

#### Return value

- `Promise<User>`

## Check the phone number or email binding status

MfaAuthenticationClient().phoneOrEmailBindable()

> When the mobile phone or email MFA login is required, and the user has not bound the mobile phone or email address, the user can first enter the mobile phone number or email address. Use this interface to first check whether the mobile phone or email address can be bound, and then perform MFA verification.

#### Parameter

- `options` \<Object\>
- `[options.email]` \<string\> Email to be checked
- `[options.phone]` \<string\> Phone number to be checked
- `options.mfaToken` \<string\> MfaToken returned from login interface.

#### Example

```javascript
const authenticationClient = new AuthenticationClient({
  appId: 'YOUR_APP_ID',
})
const authenticators = await authenticationClient.mfa.phoneOrEmailBindable({
  mfaToken: 'xxxxxx',
  email: 'example@approw.com',
})
```

#### Return value

- `Promise<boolean>`

## Check MFA recovery code

MfaAuthenticationClient().verifyTotpRecoveryCode()

> Check MFA recovery code.

#### Parameter

#### Example

```javascript
const authenticationClient = new AuthenticationClient({
  appId: 'YOUR_APP_ID',
})
const authenticators = await authenticationClient.mfa.verifyTotpRecoveryCode({
  authenticatorType: 'totp',
  totp: '112233',
})
```

#### Return value

- `Promise<User>`
