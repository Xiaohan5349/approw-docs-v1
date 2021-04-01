### Install

Use `yarn` or `npm` to install:

```bash
$ yarn add @approw/native-js-ui-components

# OR

$ npm install @approw/native-js-ui-components --save
```

Or use `CDN` to import:

```html
// JavaScript code
<script src="https://cdn.jsdelivr.net/npm/@approw/native-js-ui-components"></script>

...
// CSS file
<link href="https://cdn.jsdelivr.net/npm/@approw/native-js-ui-components/lib/index.min.css" rel="stylesheet"></link>
```

### Initialize

```html
<script>
  var guard = new ApprowNativeJsUIComponents.ApprowGuard("APPROW_APP_ID");

  // event monitor
  guard.on("load", (authClient) => console.log(authClient));
</script>
```

### Monitor login success event

It is simple. You only need to pass a callback `onLogin`.

```javascript
guard.on("login", (user) => {
  console.log(user);
});
```

The `token` field in user information is the identity credential. In the following steps, you need to carry it in requests when you want to access back-end resources. The back end will verify this `token`.