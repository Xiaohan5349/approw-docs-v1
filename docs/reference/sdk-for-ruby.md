---
meta:
  - name: description
    content: SDK for Ruby
---



# SDK for Ruby

<LastUpdated/>


## Install

```sh
gem install approw
```
## How to use

### Initialization

> Initialize by token

```ruby
approw = Approw::Client.new({
  userPoolId: "<Your userPoolId>",
  token: "<Your Token>"
})
```
> Initialize by UserPoolId + Secret

```ruby
approw = Approw::Client.new({
  userPoolId: "<Your userPoolId>",
  secret: "<Your Token>"
})
```

> Initialize by user login information

```ruby
approw = Approw::Client.new({userPoolId: "<Your userPoolId>"})
res = approw.register({
  userInfo: {
    email: "c11j@approw.com",
    password: "username",
    username: "233",
  },
})
```

### Functions

**All method names and parameters must be consistent with Graphql.**

⚠️ The current version only supports the {{$localeConfig.brandName}} Graphql interface, and Restful needs additional support. 
  
More interfaces: [{{$localeConfig.brandName}} Graphql](https://core.approw.com/graphql/v2)  

#### Part of `Demo`

> Login
```ruby
approw.login({
  email: "approw@tmp.cn",
  password: "approw",
  username: "approw",
})
```
> Register
```ruby
res = approw.register({
  userInfo: {
    email: "approw@tmp.cn",
    password: "approw",
    username: "approw",
  }
})
```

> Create user roles:
```ruby
res = approw.createRBACRole({
  input: {
    userPoolId: "5f0c2597061ec4de51237379",
    name: "tmp",
    description: "tmp",
  },
  description: "tmp",
  name: "tmp",
  userPoolId: "5f0c2597061ec4de51237379",
})
```

