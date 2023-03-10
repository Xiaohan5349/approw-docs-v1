---
meta:
  - name: description
    content: Create Your First Pipeline Function
---

# Create Your First Pipeline Function

<LastUpdated/>

The Pipeline function is a customized JavaScript code executed in the {{$localeConfig.brandName}} authentication process. With the help of Pipeline, developers can easily customize and extend the capabilities of {{$localeConfig.brandName}}.

## Select a Pipeline Template

{{$localeConfig.brandName}} provides many templates that can be used directly to help you get started quickly.

You can also view the list of Pipeline template functions here: [https://github.com/approw/pipeline](https://github.com/aapprow/pipeline). At the same time, you are welcome to contribute more Pipeline template functions to us.

First, select the Console's**Extention Capabilities** - **Custom Pipeline** page and you will see some tips.

<img src="~@imagesEnUs/guides/expand/pipeline1.png" alt="drawing"/>

Select a trigger scene and click the 「+」 button. We have more than 20 templates to choose:

<img src="~@imagesEnUs/guides/expand/pipeline-temp.png" alt="drawing"/>

Select "Registered Email Suffix White List" in Access Control.

<img src="~@imagesEnUs/guides/expand/pipeline-nonEmail.png" alt="drawing"/>

## Create a Pipeline Function

The domain name whitelist we set here is "example.com", you can change it to your own domain name.

<img src="~@imagesEnUs/guides/expand/pipeline-code.png" alt="drawing"/>

Click the "Save" button in the lower left corner, we will deploy this function to the cloud. It will take some time, please be patient.

Back to the Pipeline function list page, you can see the function we just added.

<img src="~@imagesEnUs/guides/expand/pipeline-scen.png" alt="drawing"/>

::: hint-success
If you have multiple Pipeline functions, you can drag to sort them.
:::

## Verify that the Whitelist is Valid

First, use the non-`example.com` suffix mailbox and see the "Access Denied." prompt returned, which is the prompt message we specified in the custom Pipeline function.

<img src="https://cdn.authing.cn/blog/20200927195409.png" height=300 style="display:block;margin: 0 auto;">

Then use the email with the suffix of `example.com` to register. The registration is successful!

<img src="https://cdn.authing.cn/blog/20200927195137.png" height=300 style="display:block;margin: 0 auto;">

## Next 

- Read the [development documentation of the Pipeline function](pipeline-function-api-doc.md).
- Understand that the request information can be obtained in the pipe function：[user object](user-object.md) and [context object](context-object.md).
- Learn how to [use environment variables in the pipe function](env.md).
- Learn [which Node Modules out of the box ](available-node-modules.md) can be used in the pipe function. You can use [approw-js-sdk ](/reference/sdk-for-node/) directly！
- We provide a lot of rich pipeline function templates, click [here](https://github.com/approw/pipeline).
- We also provide convenient [online debugging methods ](./how-to-debug.md) for developers to debug online.
