# 基于邮件验证码的 MFA

## 概述

多因素身份验证（MFA）是一种安全系统，是为了验证一项操作合法性而进行的二次身份验证。例如银行的 U 盾，异地登录要求手机邮件验证。本文介绍的是基于邮件验证码的多因素认证方式。

## 准备工作

1. <a :href="`${$themeConfig.consoleDomain}`">注册一个 {{$localeConfig.brandName}} 账号</a>
2. [完成用户池和应用的创建](/guides/basics/authenticate-first-user/use-hosted-login-page)

## 开启邮件 MFA

**1.进入用户池详情，选择需要开启邮件 MFA 的应用**

<img src="./images/4-1.png" style="margin-top: 20px;" class="md-img-padding" />

::: img-description
选择用户池
:::

<img src="./images/4-2.png" style="margin-top: 20px;" class="md-img-padding" />

::: img-description
选择应用
:::

**2.进入应用详情，选择`多因素认证`，并开启`电子邮件验证码`选项**

<img src="./images/5-1.png" style="margin-top: 20px;" class="md-img-padding" />

**3.进入用户管理，创建一个用于邮件 MFA 登录的用户**

<img src="./images/4-4.png" style="margin-top: 20px;" class="md-img-padding" />

<img src="./images/5-2.png" style="margin-top: 20px;" class="md-img-padding" />

## 使用邮件 MFA 登录

**1.点击应用的体验登录按钮，使用上述创建的用户登录**

<img src="./images/4-6.png" style="margin-top: 20px;" class="md-img-padding" />

::: img-description
点击体验登录
:::

<img src="./images/5-3.png" style="margin-top: 20px;" class="md-img-padding" />

::: img-description
使用邮箱、密码登录
:::

**2.点击发送验证码，并输入正确的验证码即可完成基于短信的 MFA 验证流程**

<img src="./images/5-4.png" style="margin-top: 20px;" class="md-img-padding" />

::: img-description
二次认证成功
:::

## 关闭邮件 MFA

**1.进入应用详情，关闭`短信验证码`选项即可**

<img src="./images/5-5.png" style="margin-top: 20px;" class="md-img-padding" />