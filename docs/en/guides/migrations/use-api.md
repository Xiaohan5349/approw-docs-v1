# Import Users Using SDK

<LastUpdated/>

{{$localeConfig.brandName}} supports SDKs in multiple languages such as Java, JavaScript/Node.js, Python, PHP, C#, Go, Ruby, etc.

-   [Java/Kotlin](/reference/sdk-for-java/)
-   [JavaScript/Node.js](/reference/sdk-for-node/)
-   [Python](/reference/sdk-for-python/)
-   [PHP](/reference/sdk-for-php/)
-   [C#](/reference/sdk-for-csharp/)
-   [Go](/reference/sdk-for-go.md)
-   [Ruby](/reference/sdk-for-ruby.md)

This article uses Node.js as an example of how to write a script to import users. You can choose a language you are familiar with.

## Step 1: Use a custom password function (optional)

If the password field in your user data table is in plain text, you can skip this step. If it is in cipher text, you need to go to the **basic configuration** -&gt; **password management** -&gt; **user-defined password encryption method** to enable the option and write functions for encrypting and verifying passwords. For details: [Writing custom password encryption functions](./custom-password-script/README.md).

## Step 2: Export your user data

Please export your user data to JSON format, the content is an array. Each element is an object. One of the elements corresponds to a piece of information about the user. For eaxmple:

```json
[
	{
		"uid": "1",
		"nickname": "zhang",
		"account_id": "zhang",
		"mail": "test1@123.com",
		"password": "$2b$12$nCa3WDbsc3tvM57ifzjwrOAGGuNK7EPV0R17WKcW6f13NZvX97yLe",
		"phone": "13100000001",
		"emailVerified": true,
		"loginsCount": 4
	},
	{
		"uid": "2",
		"nickname": "wang",
		"account_id": "wang",
		"mail": "test2@123.com",
		"password": "$2b$12$HGloOlfz1HzD0v/r5m1r7OCMcx6X85eC5.At3Ckxe.Jn/u/Za/yy2",
		"phone": "13100000002",
		"emailVerified": false,
		"loginsCount": 12
	},
	{
		"uid": "3",
		"nickname": "zhao",
		"account_id": "zhao",
		"mail": "test3@123.com",
		"password": "$2b$12$ia1oUZZFbEUpLvuqUsKideQq9lVkf2kq9vFaTvp7dlfeCx8UlTmDu",
		"phone": "13100000003",
		"emailVerified": true,
		"loginsCount": 0
	}
]
```

## Step 3: Confirm the user field mapping relationship

Before starting the import, you need to confirm the mapping between your user structure and the {{$localeConfig.brandName}} user field. You can get all the fields and their definitions of the Approw user [here](/guides/user/user-profile.md).

## Step 4: Import user data to Approw

If you don't have a NodeJS environment, you need to [install NodeJS](http://nodejs.cn/download/).

Create an index.js file.

Paste the following js script into index.js:

```js
const fs = require("fs");
const path = require("path");

const { ManagementClient } = require("authing-js-sdk");
const userPoolId = "xxxxxxxxxxxxxxxxxxx";
const secret = "xxxxxxxxxxxxxxxxxxx";

// If the file is large, it is recommended to read in batches
// Please save the user information in the same directory as this file. The content of the file is an array of user data JSON, and one element is a user's information object
let users = fs.readFileSync(path.resolve("users.json"), { encoding: "utf8" });
users = JSON.parse(users);
async function main() {
	const managementClient = new ManagementClient({
		userPoolId,
		secret,
	});

	for (let i = 0; i < users.length; i++) {
		let yourUser = users[i];
		try {
			// Complete field alignment here
			await managementClient.users.create(
				{
					nickname: yourUser.nickname,
					password: yourUser.password,
					email: yourUser.mail,
					emailVerified: yourUser.emailVerified,
					phone: yourUser.phone,
					loginsCount: yourUser.loginsCount,
					// Store raw data for future use
					oauth: JSON.stringify(yourUser),
				},
				{
					/**
					 * Turn on this switch, the password field will be directly written into the Authing database, and Authing will not encrypt this field again
					 * If your password is not stored in plaintext, you should keep it turned on and write a password function calculation
					 */
					keepPassword: true,
				}
			);
		} catch (err) {
			console.log(err);
			// Write users who failed to import into file
			fs.writeFileSync(
				path.resolve("users_failed.json"),
				JSON.stringify(yourUser) + "\n",
				{
					flag: "a",
				}
			);
		}
	}
}

main();
```

Please **align the fields** after copying, and then execute

```bash
$ npm install authing-js-sdk
$ node index.js
```

The code can be viewed on Github: [users-migration](https://github.com/Authing/users-migration)

## Help

If you have any questions, please [contact us](https://gitter.im/authing-chat/community)，Feel free to talk.
