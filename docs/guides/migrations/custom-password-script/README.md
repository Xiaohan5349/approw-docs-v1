---
meta:
    - name: description
      content: Configure user-defined password function
---

# Configure User-defined Password Function

<LastUpdated/>

If you want to customize the password encryption function, please upload the function fragment here（currently only supports Node.js）, please click [here](https://console.approw.com/api/v2/password/template/download) to download the function template（Approw does not save the original password of the user）.

This function is suitable for the following scenarios:

1. You migrated all users into Approw, but you don’t want users to change their passwords.
2. You do not trust Approw's password encryption algorithm, and want to use your own password encryption algorithm.

This document introduces how to configure the password encryption function.

## Configuration steps

In the user pool, click ** Expansion Capabilities** -&gt; **Custom Password Encryption** , as shown in the image below:

<img src="~@imagesEnUs/guides/migrate/custom-password.png" alt="drawing"/>

::: img-description
User-defined password encryption method
:::

### Download template

Click「Download template」on the page to download the Node.js code template. As shown below:

```js
var getRawBody = require("raw-body");

const encryptPassword = (password) => {
	// Write the function to encrypt the password here

	return password;
};

/**
 *
 * @param {String} password password
 * @param {String} encryptedPassword encrypted password
 */
const comparePassword = (password, encryptedPassword) => {
	// Write the function to verify the password here

	return password === encryptedPassword;
};

module.exports.encrypt = function(request, response, context) {
	// get request body
	getRawBody(request, function(err, body) {
		const queries = request.queries;
		const password = queries.password;

		if (!password) {
			response.setStatusCode(500);
			response.setHeader("content-type", "application/json");
			response.send(
				JSON.stringify(
					{
						message: "Please provide password via url query",
					},
					null,
					4
				)
			);
		}

		const respBody = {
			password: encryptPassword(password), // Encrypt password here
		};

		response.setStatusCode(200);
		response.setHeader("content-type", "application/json");
		response.send(JSON.stringify(respBody, null, 4));
	});
};

module.exports.validate = function(request, response, context) {
	// Get request body
	getRawBody(request, function(err, body) {
		const queries = request.queries;
		const password = queries.password;
		const encryptedPassword = queries.encryptedPassword;

		if (!password) {
			response.setStatusCode(500);
			response.setHeader("content-type", "application/json");
			response.send(
				JSON.stringify(
					{
						message: "Please provide password via url query",
					},
					null,
					4
				)
			);
		}

		const respBody = {
			isValid: comparePassword(password, encryptedPassword), // Verify password here
		};

		response.setStatusCode(200);
		response.setHeader("content-type", "application/json");
		response.send(JSON.stringify(respBody, null, 4));
	});
};
```

### Coding

You need to write the corresponding password encryption method in the `encryptPassword` function and write the corresponding verification password encryption method in the `comparePassword` function.

If the developer needs to import a third-party NPM package, please use NPM to install it directly.

::: hint-info
NPM is a package management tool for the Node.js ecosystem.
:::

The following is a code example of the introduction of the `bcrypt` package:

```haskell
$ npm install bcrypt
```

After the installation is complete, there will be an additional node_modules folder in the folder, and then write the code:

```js
var getRawBody = require("raw-body");

const encryptPassword = (password) => {
  // Implement your login here.
  // Your can use bcrypt for example
  // more info here: https://github.com/kelektiv/node.bcrypt.js
  const bcrypt = require('bcrypt');
  return await bcrypt.hash(plainText, await bcrypt.genSalt(10));
};

const vlidatePassword = (plainText, encrypted) => {
  // plainText is the plainText password use provide to be validate.
  // encrypted is user's password encryped in database.

  // Implement your login here.
  // Your can use bcrypt for example
  // more info here: https://github.com/kelektiv/node.bcrypt.js
  const bcrypt = require('bcrypt');
  return await bcrypt.compare(plainText, encrypted);
}

```

### Upload function to server

::: hint-info
The code package supported by {{$localeConfig.brandName}} can only be in .js format or .zip format.
:::

If you have not imported any package, you can directly upload the template file in .js format. If you have imported the package, please package it with node_modules in .zip format and upload it in the {{$localeConfig.brandName}} console.

<img src="~@imagesEnUs/guides/migrate/custom-password-method.png" alt="drawing"/>

### Test password encryption function

After the upload is successful, the developer can test the password encryption effect. As shown below, enter the original password in the input box and click「Encryption test」to see the encrypted password result（if no encryption function is uploaded, the {{$localeConfig.brandName}} default password encryption will be displayed）.

<img src="~@imagesEnUs/guides/migrate/test-password-func.png" alt="drawing"/>

## Attention

::: hint-info
The password encryption function takes effect after uploading and will affect the original user. It is recommended that this function be used in a completely new user pool.

If you need to modify the password encryption function in the old user pool, please contact us: +86 17602502507。
:::
