# Bind Account

<LastUpdated/>

You may face this scenario: your user registered an account with a phone number, and then registered an account with another social account. Now you want to bind the social account to the phone number account. Later, when the user uses the social account to log in, he/she will log in to the phone account and return the information of the phone account.

You can bind the user's social account to his main account (phone number, email account) by calling the following interface:

<ApiMethodSpec method="post" host="https://core.approw.com" path="/api/v2/users/link" summary="link your social account to your main account">
<template slot="description">

If you want to bind a social account to the main account, the end-user must provide the credentials of the **social account** and the **main account** to prove that he is the owner of these two accounts, and then continue the binding process.

</template>
<template slot="headers">
<ApiMethodParam name="Content-Type" type="string" required description="application/x-www-form-urlencoded" />
</template>
<template slot="formDataParams">
<ApiMethodParam name="primaryUserToken" type="string" required description="Token of main account" />
<ApiMethodParam name="secondaryUserToken" type="string" required description="Token of social account" />
</template>
<template slot="response">
<ApiMethodResponse>

```json
{
  "code": 200,
  "message": "Binding Succeed."
}
```

</ApiMethodResponse>
</template>
</ApiMethodSpec>

::: hint-warning
When the social account is bound, the data corresponding to the original social account will be deleted, and user will be not allowed to log in to the original social account again.
:::
