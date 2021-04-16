
If you want to access the LDAP service, please follow the steps below to complete the LDAP configuration.

#### Add LDAP service

<img src="~@imagesEnUs/guides/ldap/1618514735.png" alt="drawing"/>

::: img-description
Add LDAP service
:::

<img src="~@imagesEnUs/guides/ldap/63722.png" alt="drawing"/>

::: img-description
Add LDAP service page
:::

#### Fill in the relevant information

Fill in the relevant information in the pop-up dialog box. If you don't know how to fill in, you can click "Click here" in the upper right corner to fill in the test configuration information.

<img src="~@imagesEnUs/guides/ldap/1618515603.png" alt="drawing"/>

::: img-description
LDAP service information test
:::

<img src="~@imagesEnUs/guides/ldap/1618515977.png" alt="drawing"/>

::: img-description
Use the LDAP service information we provide
:::

#### 参数解释

1. `LDAP alias`, required, custom LDAP service name
2. `LDAP link`, required, the address of the LDAP server, such as: ldap://dc.fabrikam.com
3. `Base DN`, required, the username used to connect to LDAP, this username will be used to test the connection results and search for users or user groups
4. `Password`, required, the password used to connect to LDAP, the password will be encrypted and stored in the database
5. `Binding endpoint`, required, defines which directory to start searching from, such as: dc=fabrikam,dc=local
6. `Query conditions`, required. If it is mail, it means that the user information is inquired through the mailbox information. Note that this field information corresponds to the field stored in the LDAP database. If the field storing user mailbox information is email, you need to modify it to email here.

#### Connectivity test

The connectivity test can help you check whether the parameters are filled in correctly. If you fill in the "test configuration", then click on the "connectivity test" on the page and you should see the following results:

<img src="~@imagesEnUs/guides/ldap/1618516275.png" alt="drawing"/>

::: img-description
Connectivity test
:::

You can use this test to test different `Base DN` and `passwords`.

#### Authenticate user

Authenticating users can help you check whether the query conditions are correct. If the query conditions are incorrect, it will return an error that the user cannot be found.

The test user name we gave is `admin`, the password is `admin`, and the query condition is `cn`, which is the default account and secret information provided by `openLDAP`. After clicking "Authenticate User", you should see the following results:

<img src="~@imagesEnUs/guides/ldap/1618516587.png" alt="drawing"/>

::: img-description
Authenticate user
:::

If the query condition is changed from `cn` to `cnn`, then the following results should be returned at this time:

<img src="~@imagesEnUs/guides/ldap/1618517319.png" alt="drawing"/>

::: img-description
Query condition test
:::

In this way, users can complete the debugging of LDAP by modifying the `bind endpoint` and `query condition`.

After the configuration is complete, access any OAuth application or OIDC application to log in with an LDAP account.

::: hint-info
We prepared a [LDAP test application](https://ldap-test.authing.cn) allows you to experience the whole process of logging in with LDAP:
Test account: admin

Test password: admin
:::
