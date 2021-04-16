# Implement Single Sign-on Between Mutiple Applications

<LastUpdated/>

After enabling single sign-on between applications, the login status between different applications under the same user pool will be connected. End users only need to log in once to travel between different applications

## Create Two Applications

At first you can create two applications follow the [guidelines](./create-app.md).

## Enable Single Sign-on for Applications

On the console’s **Applications** page, turn on the Enable application SSO switch.

![](./images/SSO-1.png)

## Experience the Single Sign-on

In console > Applications, click the application’s Login button.

![](./images/SSO-2.png)

Finish login on the login page:

![](./images/SSO-3.png)

After login success, it will redirect to the application callback address:

![](./images/SSO-4.png)

Next, click another application’s Login button:

![](./images/SSO-5.png)

The user doesn’t need to enter the password again, the user can directly enter the application callback address:

![](./images/SSO-6.png)

## Using SDK for Single Sign-on

For the details about access process, please refer to the documents which introduces the implementation of [Single Sign-on (SSO)](/guides/authentication/sso/) and [Single Sign-on SDK](/reference/sdk-for-sso.md).
