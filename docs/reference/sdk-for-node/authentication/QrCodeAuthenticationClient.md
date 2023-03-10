
# QrCodeAuthenticationClient

<LastUpdated/>


> This client is used to implement QR code login. 

Use APP QR code scan to login:

```javascript
import { AuthenticationClient } from "approw-js-sdk"
const authenticationClient = new AuthenticationClient({
   appId: "YOUR_APP_ID",
})
authenticationClient.qrcode.startScanning() # begin to login
```


## One click and begin scanning

QrCodeAuthenticationClient().startScanning(domId, options)

> One click and begin scanning.


#### Parameter

- `domId` \<string\> Id of the dom element.
- `options` \<Object\>  
- `options.interval` \<number\>  Interval time, the unit of it is ms. Default value is 800ms.
- `options.onStart` \<Function\> The event callback function to start polling, the first parameter is the timer returned by setInterval, you can use clearInterval to cancel this timer.
- `options.onResult` \<Function\> Get the latest status event callback function of the QR code. The type of the first parameter is QRCodeStatus.
- `options.onScanned` \<Function\> The callback function of the user's first scan code event.At this time, the user has not been authorized, and the callback user information only contains the nickname and avatar for display purposes.For security reasons, by default, userInfo will only contain two fields, nickname and photo, but developers can also configure it in the background to return complete user information. 
- `options.onSuccess` \<Function\> The user agrees to the authorization event callback function.This function will only call back once, after which the polling ends.The first parameter is userInfo (user information), and the second parameter is ticket, which is used in exchange for user details.See https://docs.approw.co/scan-qrcode/app-qrcode/customize.html for details.
Ticket can be used to exchange for complete user information, see https://docs.approw.co/scan-qrcode/app-qrcode/full-api-list.html for related interfaces. 
- `options.onCancel` \<Function\> User cancellation event callback function.This event will only be called back once, after which the polling ends.
- `options.onError` \<Function\> The callback function for the failure to get the QR code status.The common cause is network failure, etc. It will call back every time the query fails.Examples of callback parameter data such as {"code": 2241,"message": "QR code does not exist"} 
- `options.onExpired` \<Function\> When the QR code fails, it will be called back only once, after which the polling ends.
- `options.onCodeShow` \<Function\> The event where the QR code is successfully displayed for the first time. 
- `options.onCodeLoaded` \<Function\> The event where the QR code is successfully loaded for the first time.
- `options.onCodeLoadFailed` \<Function\> The event that the QR code failed to load. 
- `options.onCodeDestroyed` \<Function\> The event that the QR code is destroyed. 
- `options.size` \<Object\> The size of QR code image. The default value is 240px * 240px.
- `options.size.height` \<number\> Height 
- `options.size.width` \<number\> Width 
- `options.containerSize` \<Object\> The size of DOM element container. The default value is 300px * 300px. 
- `options.containerSize.height` \<number\> Height 
- `options.containerSize.width` \<number\> Width 
- `options.tips` \<Object\> Customed tip information 
- `options.tips.title` \<number\>  
- `options.tips.scanned` \<number\>  
- `options.tips.succeed` \<Object\>  
- `options.tips.canceled` \<number\>  
- `options.tips.expired` \<number\>  
- `options.tips.retry` \<number\>  
- `options.tips.failed` \<number\>  

#### Example

```javascript
authenticationClient.wxqrcode.startScanning("qrcode", {
 onSuccess: (userInfo, ticket) => {
   console.log(userInfo, ticket)
 },
 onError: (message) => onFail && onFail(`${message}`),
});
```

#### Return value

-  `null` 


      

## Generate QR code

QrCodeAuthenticationClient().geneCode()

> Generate QR code.


#### Parameter



#### Example

```javascript
const authenticationClient = new AuthenticationClient({
   appId: "YOUR_APP_ID",
})
const { url, random } = await authenticationClient.wxqrcode.geneCode()

# randomly generated QR code unique ID
# url URL of QR code
```

#### Return value

-  `Promise<QRCodeGenarateResult>` 


      

## Check QR code status

QrCodeAuthenticationClient().checkStatus(random)

> Check QR code status.


#### Parameter

- `random` \<string\>  

#### Example

```javascript
const authenticationClient = new AuthenticationClient({
   appId: "YOUR_APP_ID",
})
const { random, status, ticket, userInfo } = await authenticationClient.wxqrcode.checkStatus('RANDOM')
# status: QR code status: 0 - used, 1 - scanned, 2 - authorized, 3 - authorization canceled, -1 - expired
# ticket: a random number string used to exchange user info
# userInfo: user information
```

#### Return value

-  `Promise<QRCodeStatus>` 


      

## Use ticket to exchange for user's information

QrCodeAuthenticationClient().exchangeUserInfo(ticket)

> Use ticket to exchange for user's information


#### Parameter

- `ticket` \<string\> Ticket 

#### Example

```javascript
const authenticationClient = new AuthenticationClient({
   appId: "YOUR_APP_ID",
})
const user = await authenticationClient.wxqrcode.exchangeUserInfo('TICKET')
# user: user: complete user info. user.token is user login credential
```

#### Return value

-  `Promise<Partial<User>>` 


      

## Start polling QR code status

QrCodeAuthenticationClient().startPolling(random, options)

> Start polling QR code status


#### Paraneter

- `random` \<string\> Unique ID of QR code 
- `options` \<Object\>  
- `options.interval` \<number\> Interval time, the unit of it is ms. Default value is 800ms.
- `options.onStart` \<Function\> The event callback function to start polling, the first parameter is the timer returned by setInterval, you can use clearInterval to cancel this timer.
- `options.onResult` \<Function\> Get the latest status event callback function of the QR code. The type of the first parameter is QRCodeStatus. 
- `options.onScanned` \<Function\> The callback function of the user's first scan code event.At this time, the user has not been authorized, and the callback user information only contains the nickname and avatar for display purposes.For security reasons, by default, userInfo will only contain two fields, nickname and photo, but developers can also configure it in the background to return complete user information. 
- `options.onSuccess` \<Function\> The user agrees to the authorization event callback function.This function will only call back once, after which the polling ends.The first parameter is userInfo (user information), and the second parameter is ticket, which is used in exchange for user details.See https://docs.approw.co/scan-qrcode/app-qrcode/customize.html for details.Ticket can be used to exchange for complete user information, see https://docs.approw.co/scan-qrcode/app-qrcode/full-api-list.html for related interfaces.
- `options.onCancel` \<Function\> User cancellation event callback function.This event will only be called back once, after which the polling ends.
- `options.onError` \<Function\> The callback function for the failure to get the QR code status.The common cause is network failure, etc. It will call back every time the query fails.Examples of callback parameter data such as {"code": 2241,"message": "QR code does not exist"}
- `options.onExpired` \<Function\> When the QR code fails, it will be called back only once, after which the polling ends. 

#### Example



#### Return value

-  `null` 


      