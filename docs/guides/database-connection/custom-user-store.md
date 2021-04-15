# Use a custom database to save user data

<LastUpdated/>


<!-- ::: hint-warning
Only **Enterprise Edition** users can use the custom database connection function. For details, please see [https://approw.cn/pricing](https://approw.com/pricing). If you want to try it out, please contact 176-0250-2507 or xuziqiang@approw.com
::: -->

## Migration process

When using this mode, user data is always stored in your database, and Approw will never save your user data. In order for the system to work properly, you need to implement scripts for user add, delete, modify, and check.

## Script configuration 

You need to write scripts on [Approw console](https://console.approw.com/console/userpool)，**database connection** - **customize database** for **Login**, **Search user**, **Create user**, **Update user**, **elete user**, **Get user list**, **Validata password**：

- [Login](./configuration/#编写数据库操作脚本)
- [Search user](./configuration/#编写数据库操作脚本)
- [Create user](./configuration/#编写数据库操作脚本)
- [Update user](./configuration/#编写数据库操作脚本)
- [Delete user](./configuration/#编写数据库操作脚本)
- [Get user list](./configuration/#编写数据库操作脚本)
- [Validata password](./configuration/#编写数据库操作脚本)
