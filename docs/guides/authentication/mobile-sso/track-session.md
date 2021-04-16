---
meta:
    - name: description
      content: Automatic Detection Login
---

# Automatically detects login on Mobile

<LastUpdated/>

## Principle introduction

Automatically detecting the login status of the associated application on the same device, which is essentially establishing a session connection between the deviceId (device ID) and the Approw server.

When a user logs in on an application, the Approw interface is called to create a session between the deviceId and the Approw server, so that when the user logs in to other applications on the same device, the existence of this session can be detected and skipped Login steps to realize automatic login.

Suppose you have three apps: App 1, App2, and App3. As long as one of the apps has established a session relationship with the Approw server, the session can be detected.

## Start access

### Get device ID

::: hint-warning
Please be sure to verify that the device Id you get in different apps is the same when testing!
:::

#### iOS

The device ID of the iOS can be obtained through [identifierForVendor](https://developer.apple.com/documentation/uikit/uidevice/1620059-identifierforvendor), and the device ID obtained by the same vendor application is the same.

::: hint-info
Under what circumstances belong to the same vendor?

1. The application downloaded from the App Store is judged based on the application information registered in the App Store.
2. Apps not downloaded from the App Store
    1. Before iOS 6 and earlier, apps with the same first two parts of the bundle id belong to the same vendor, for example, com.example.app1 and com.example.app2 are the same vendor. com.example.app1.xxx and com.example.app2.xxx also belong to the same vendor.
    2. For iOS 7 and later, apps with the same bundle id except for the last part belong to the same vendor, for example, com.example.app1 and com.example.app2 are the same vendor. But com.example.app1.xxx and com.example.app2.xxx do not belong to the same vendor.

:::

If your application does not belong to the same vendor, it is recommended to use [ASIdentifierManager](https://developer.apple.com/documentation/adsupport/asidentifiermanager).

Swift 5 code sample:

```swift
let deviceId = UIDevice.current.identifierForVendor!.uuidString
```

OC code sample:

```objectivec
UIDevice *currentDevice = [UIDevice currentDevice];
NSString *deviceId = [[currentDevice identifierForVendor] UUIDString];
```

#### Android

Android devices can be obtained through [ANDROID_ID](https://developer.android.com/reference/android/provider/Settings.Secure.html#ANDROID_ID):

Java code sample:

```java
import android.provider.Settings.Secure;
private String android_id = Secure.getString(getContext().getContentResolver(),
                                                        Secure.ANDROID_ID);
```

Kotlin code sample:

```kotlin
val deviceID = Settings.Secure.getString(contentResolver,
Settings.Secure.ANDROID_ID)
```

<ApiMethodSpec method="post" host="https://core.approw.com" path="/oauth/sso/mobile/createSession" summary="创建 session">
<template slot="description">

This interface is used to create a session in a mobile application client, **and the user needs to be logged in**, add the authorization request header to the request header to carry the user token.

</template>
<template slot="headers">
<ApiMethodParam name="authorization" type="string" required description="The token of the logged-in user" />
<ApiMethodParam name="content-type" type="string" required description="application/json" />
</template>
<template slot="bodyParams">
<ApiMethodParam name="deviceId" type="string" required description="device ID" />
<ApiMethodParam name="userPoolId" type="string" required description="userpool ID" />
</template>
<template slot="response">
<ApiMethodResponse>

```js
{
    code: 200,
    message: "Successfully created the session!",
    data: {
        sessionId: "xxxxxx", // session ID
    }
}
```

</ApiMethodResponse>
</template>
</ApiMethodSpec>

Swift code sample:

```swift
func createSession(userPoolId: String, token: String){
    // Mobile SSO: createSession
    struct MobileSSO: Encodable {
        let userPoolId: String
        let deviceId: String
    }
    let body = MobileSSO(
        userPoolId: UserPoolId,
        deviceId: UIDevice.current.identifierForVendor!.uuidString,
    )
    let headers: HTTPHeaders = [
        "Authorization": token ,
        "Accept": "application/json"
    ]
    let api = "https://core.approw.com/oauth/sso/mobile/createSession"
    AF.request(api, method: .post, parameters: body, encoder: JSONParameterEncoder.default, headers: headers).response { response in
         debugPrint(response)
    }
}

```

<ApiMethodSpec method="get" host="https://core.approw.com" path="/oauth/sso/mobile/trackSession" summary="Query session" description="This interface is used to query the session in the mobile application client, and the user does not need to be in the login state.">
<template slot="headers">
<ApiMethodParam name="content-type" type="string" required description="application/json" />
</template>
<template slot="bodyParams">
<ApiMethodParam name="deviceId" type="string" required description="device ID" />
<ApiMethodParam name="userPoolId" type="string" required description="userpool ID" />
</template>
<template slot="response">
<ApiMethodResponse>

<template slot="description">

There are two cases: **return user information directly** and **return ticket**

</template>

```js
// Return user information directly
{
    code: 200,
    message: 'Succeeded in obtaining session user information',
    data: {
      "_id":"5e05bbf2d51b3761d5c71070",
      "email":"983132@qq.com",
      "emailVerified":false,
      "oauth":"",
      "registerMethod":"default:username-password",
      "username":"983132@qq.com",
      "nickname":"",
      "company":"",
      "photo":"https://usercontents.approw.com/approw-avatar.png",
      "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoiOTgzMTMyQHFxLmNvbSIsImlxxxxxxxxx",
      "phone":"",
      "tokenExpiredAt":"2020-01-11T08:08:18.000Z",
      "loginsCount":1,
      "lastIP":"::1",
      "signedUp":"2019-12-27T08:08:18.115Z",
      "blocked":false,
      "isDeleted":false
    }
}

// Return ticket
{
    code: 200,
    message: 'Succeeded in obtaining session user information',
    data: {
      ticket: "xxxxdjdkxxxxx",
      nickname: "xxxx",
      photo: "https://usercontents.approw.com/approw-avatar.png"
    }
}
```

</ApiMethodResponse>
</template>
</ApiMethodSpec>

If the session is found, Authing trackSession will return the user's nickname avatar (for display purposes) and a ticket in exchange for user information:

You can display user nicknames and avatars on the front end, as shown in the following figure:

![](https://cdn.approw.cn/blog/image%20%28462%29.png)

<ApiMethodSpec method="post" host="https://core.approw.com" path="/oauth/sso/mobile/exchangeUserInfoWithTicket" summary="Use ticket in exchange for user information">
<template slot="description">

Use ticket in exchange for user information. **This interface requires a user pool key, please call it on the backend**!

</template>
<template slot="headers">
<ApiMethodParam name="content-type" type="string" required description="application/json" />
</template>
<template slot="bodyParams">
<ApiMethodParam name="ticket" type="string" required description="Ticket obtained by trackSession" />
<ApiMethodParam name="secret" type="string" required description="userpool key" />
<ApiMethodParam name="userPoolId" type="string" required description="userpool ID" />
</template>
<template slot="response">
<ApiMethodResponse>

```json
{
   "code":200,
   "message":"Success in exchange for user information",
   "data":{
      "_id":"5e05bbf2d51b3761d5c71070",
      "email":"983132@qq.com",
      "emailVerified":false,
      "oauth":"",
      "registerMethod":"default:username-password",
      "username":"983132@qq.com",
      "nickname":"",
      "company":"",
      "photo":"https://usercontents.approw.com/approw-avatar.png",
      "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImVtYWlsIjoiOTgzMTMyQHFxLmNvbSIsImlxxxxxxxxx",
      "phone":"",
      "tokenExpiredAt":"2020-01-11T08:08:18.000Z",
      "loginsCount":1,
      "lastIP":"::1",
      "signedUp":"2019-12-27T08:08:18.115Z",
      "blocked":false,
      "isDeleted":false
   }
```

</ApiMethodResponse>
</template>
</ApiMethodSpec>

<ApiMethodSpec method="post" host="https://core.approw.com" path="/oauth/sso/mobile/destorySession" summary="Destroy session">
<template slot="description">

This interface is used to destroy a session in a mobile application client, **and the user needs to be logged in, add the authorization request header to carry the user token** in the request header. Because there are multiple applications, by default, only the session of the specified App will be destroyed (trackSession will be queried as long as one App has a session). If you want to clear all App sessions, you can set destroyAll to true.

</template>
<template slot="headers">
<ApiMethodParam name="authorization" type="string" required description="The token of the logged-in user" />
<ApiMethodParam name="content-type" type="string" required description="application/json" />
</template>
<template slot="bodyParams">
<ApiMethodParam name="deviceId" type="string" required description="device ID" />
<ApiMethodParam name="userPoolId" type="string" required description="userpool ID" />
</template>
<template slot="response">
<ApiMethodResponse>

```js
{
    code: 200,
    message: "Successfully destroy session!"
}
```

</ApiMethodResponse>
</template>
</ApiMethodSpec>

::: hint-info
You should call this interface every time the user logs out and deletes the app.
:::
