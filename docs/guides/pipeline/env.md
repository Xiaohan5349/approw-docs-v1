---
meta:
  - name: description
    content: Use Environment Variables in Pipeline
---

# Use Environment Variables in Pipeline

::: hint-success
The environment variables in the Pipeline function are consistent with the concept of environment variables in the operating system, and developers can get them through the global variable env. Environment variables are visible to all Pipelien functions in the application pool.
:::

You can configure environment variables on the **Setting** - **Environment Variable**：

<img src="~@imagesEnUs/guides/expand/env1.png" alt="drawing"/>

Environment variables are a set of Key-Value Pair values, which can be used to save data such as WebHook links and keys.

After entering Key and Value, click Add:

<img src="~@imagesEnUs/guides/expand/env2.png" alt="drawing"/>

We set an environment variable whose Key is `LARK_WEBHOOK`, and the corresponding value can be obtained through `env.LARK_WEBHOOK` in the Pipeline function.

```js
async function pipe(user, context, callback) {
  const webhook = env.LARK_WEBHOOK;
  await axios.post(webhook, {
    title: "New User Registered - From {{$localeConfig.brandName}} Rules Pipeline",
    text: `
                User Profile：
                ID: ${user.id}
                Nickname：${user.username}
                RegisterationSource：${user.registerSource}
                Email Address：${user.email}
                Phone Number：${user.phone}
                UA: ${user.device}
                Userpool ID: ${user.userPoolId}
          `,
  });
  return callback(null, user, context);
}
```
