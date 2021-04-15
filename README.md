# Approw doc

## How to Use

```bash
# start dev server
npm run docs:dev

# build to static HTMLs in docs/.vuepress/dist
npm run docs:build
```

## Common Components

`page-ref`:

```bash
# Normal md: absolute path

::: page-ref /quickstart/hello-world.md
:::

# README.md can be omitted

::: page-ref /scan-qrcode/wxapp-qrcode/
:::

```

`embed`:

```bash
::: embed
[title](link)
:::
```

`hints`:

```bash
::: hint-success
text
:::

::: hint-info
::: hint-warning
::: hint-danger
```

`api-method`:

````markdown
<!-- All component props can be replaced by slots; props can be used for pure strings; use slot if there is Markdown -->

<ApiMethodSpec method="get" host="https://core.approw.com" path="/oauth/me" summary="use access_token to exchange user infomation">
<template slot="queryParams">
<ApiMethodParam name="access_token" type="string" required description="access_token" />
</template>
<template slot="response">
<ApiMethodResponse httpCode="200" description="Request result">

```json
{
	"a": "1"
}
```

</ApiMethodResponse>
</template>
</ApiMethodSpec>
````

## Interpolations

Use interpolation according to vue syntax, which can be defined in the header of the specific md file, or global variables (that is, all configurations in config) can be used. Commonly used global interpolations are as follows:

-   \$localeConfig.brandName，brand name，如 Approw
-   \$themeConfig.apiDomain，api domain
-   \$themeConfig.sampleAppDomain，sample application domain
-   \$themeConfig.consoleDomain，console domain

## Attention!!!

After publishing the written document, check it online, refresh the page, and then click the menu to see if you can jump to other pages. In many cases, the following errors will be reported, which will cause the subsequent vue code to fail to execute and the page cannot be jumped:

```
DOMException: Failed to execute 'appendChild' on 'Node': This node type does not support this method.
```

### Link cannot be bold

For example：

```markdown
**[Google](https://google.com)**
```
