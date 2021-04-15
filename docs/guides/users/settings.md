---
meta:
  - name: description
    content: User directory Setting
---

# User Directory Setting

<LastUpdated/>

This article introduces some settings related to the user directory, such as registration disabled, restriction on frequent registration, restriction on the number of failed login attempts, registration whitelist, and so on.

## Registration disabled

You can turn on the **registration disabled** in the console: **setting** -> security information:

![](./images/disable-registration-settings.jpg)

After turning on "registration disabled", common users will not be able to register through the login form or API, and only the administrator can manually create an account.

## Restriction on frequent registration

You can turn on the **restriction on frequent registration** in the console: **setting** -> **security information**, and limit the number of registrations for the **same IP** within a defined number of seconds.

![](./images/registration-frequency-check-settings.jpg)

## Restriction on the number of failed login attempts

You can turn on the **restriction on the number of failed login attempts** in the console: **setting** -> **security information**, and limit the number of failed registrations for the **same account** within a defined number of seconds.

![](./images/login-fail-frequency-check-settings.jpg)

If the number of failed login times is exceeded within the specified time, the user needs to enter the CAPTCHA code to log in again:

![](./images/enter-captcha.jpg)

## Configure the registration whitelist

You can open the white list of email, mobile phone number, and user name in the console: **user management** -> **registration whitelist**. After opening, only the mobile phone number, email address, and user name in the whitelist can be registered (It will not affect administrators manually create accounts).

![](./images/whitelist.jpg)

## Prohibit login for users with unverified email

By default, accounts with unverified email can log in, and you can also modify the configuration in the **application details**:

![](./images/disable-unverified-email-login.png)

## Send welcome emails when registering

When you close **send welcome emails when registering** on the console, there will be no welcome emails.

> You can define the welcome email template on your own.

![](./images/send-welcome-email-settings.jpg)
