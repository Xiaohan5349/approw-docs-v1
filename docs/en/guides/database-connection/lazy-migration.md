# Migrate Users to {{$localeConfig.brandName}} with Lazy Migration

<LastUpdated/>

<!-- ::: hint-warning
只有**企业版**用户能够使用连接自定义数据库功能，详情请见 [https://authing.cn/pricing](https://authing.cn/pricing)。如果你想试用，请联系 176-0250-2507 或 xuziqiang@authing.cn。
::: -->

## Migration Flow

Approw supports migrating user information from customized database to Approw database without stopping the server. When this function is enabled, the normal login and registration requests will be affected:

Authentication request:

- The Approw will use your customized database script to authenticate user when he/she tries to login for the first time. The user information will be migrated to Approw database if the authentication succeeds or it will throw an error to notify the user that the account does not exist or the password is wrong.
- Users do not need to change their password
- When users try to login again, the authentication flow will use the Approw database.
- When all users are at least authenticated successfully for one time, the migration flow succeeds.

Registration flow:

- When a user tries to register a new account, the script will check if the account already exists in the Approw database. If a same account is found, the script will throw an error to notify the user the account already exists.
- If the user is not in the Approw database, the `getUser` interface in the script will check if the user is in the customized database. If the same account is found, the script will throw an error to notify the user the account already exists.
- If the user is not found in both databases, the registration flow succeeds.

## Setup Scripts

You need to access [Approw console](https://console.approw.com/console/userpool) and go to **Connect IdP** - **Customized database** to setup scripts of **login** and **searchUser**. You can find more details at:

- [Compile login script](./configuration/#compile-database-operation-script).
- [Compile searchUser script](./configuration/#compile-database-operation-script).

## Test Migration Result

After you enabled the user migration function, you can test migrated users in following ways:

- Use [admin API for getting user list or seraching users](/reference/sdk-for-node/management/UsersManagementClient.md#获取用户列表).
- Check users in **User Management** - **User List** of the [Approw console](https://console.approw.com/console/userpool).

## After Migration

You need to disable the customized database after all migration work is done

![](https://cdn.authing.cn/blog/20201130175955.png)
