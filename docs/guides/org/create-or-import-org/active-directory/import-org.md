#### Create an AD connection in the {{$localeConfig.brandName}} console

Go to the [{{$localeConfig.brandName}} console](https://console.authing.cn/console/userpool) and follow the instructions in the figure below to find **Connect to Identity Source**/**Connect to Active Directory** ：

![](https://cdn.authing.cn/img/20210126190459.png)

::: img-description
Create AD connection
:::

You need to enter the following field information:

- **Connection identifier**: This is the only identifier for this connection and cannot be modified after setting.
- **Display Name**: If set, the {{$localeConfig.brandName}} login form will display a "Login with {displayName} button.
- **Application Logo**

Then click the「**Save**」button. After successful creation, you will get a **Provisioning Ticket Url**, which will be used in the following steps:

![](https://cdn.authing.cn/blog/20201109141645.png)

Then you need to open this AD connection for your application:

![](https://cdn.authing.cn/img/20210126190629.png)

#### Run {{$localeConfig.brandName}} AD Connector on Windows

Before installing {{$localeConfig.brandName}}, please make sure that the above conditions are met:

- Windows server;
- Active Directory is installed on the server;
- The machine running {{$localeConfig.brandName}} AD Connector can connect to Active Directory;
- A user account with read permission of Active Directory.

First you need to [download](https://download.authing.cn/app/{{$localeConfig.brandName}}-AD-Connector-latest.exe) {{$localeConfig.brandName}} AD Connector，This is an exe file that needs to run on your Windows AD server and is responsible for communicating with {{$localeConfig.brandName}}. {{$localeConfig.brandName}} AD Connector need to be installed **in the LAN AD domain environment**, but it does not have to be installed on the server running the AD service, as long as {{$localeConfig.brandName}} AD Connector can Go to the AD user directory.

##### 安装 {{$localeConfig.brandName}} AD Connector

Click[here](https://download.authing.cn/app/{{$localeConfig.brandName}}-AD-Connector-latest.exe)download the latest {{$localeConfig.brandName}} AD Connector.

Upload the downloaded file to the machine in the AD domain environment, and double-click the application to install it.

![](https://cdn.authing.cn/docs/20200414213654.png)

The system may warn you, click "Run anyway".

![](https://cdn.authing.cn/blog/image%20%28521%29.png)

Select the language and click "OK".

![](https://cdn.authing.cn/docs/20200414213931.png)

Click "Next".

![](https://cdn.authing.cn/blog/20201109213415.png)

Accept the license agreement and click "Next".

![](https://cdn.authing.cn/blog/20201109213443.png)

Select the software installation directory, and then click "Install".

![](https://cdn.authing.cn/blog/20201109213500.png)

Wait for the installation to complete.

![](https://cdn.authing.cn/blog/20201109213517.png)

Click "Finish", a command line window will pop up and wait for the installation to complete.

![](https://cdn.authing.cn/docs/20200414214751.png)

There may be an error message lacking optional dependencies in the middle, which can be ignored. See the following interface to indicate that the installation is successful, and you can press any key to exit:

![](https://cdn.authing.cn/docs/20200414214912.png)

Then you can see the AuthingADConnector service on the Windows service management page:

![](https://cdn.authing.cn/blog/20201109214605.png)

Next, open the browser and visit http://127.0.0.1:9742, you will see the following interface:

![](https://cdn.authing.cn/docs/eirog1.png)

Fill in your Provisioning Ticket Url, AD server link address (please fill in **http://ws.authing.cn:8855** ）, Base DN, domain user name, and password, and then click "**Save** "Button.

![](https://cdn.authing.cn/docs/serths2.png)
After that, click "Test Connection", the following result appears, indicating that the connection is normal:

![](https://cdn.authing.cn/docs/20200414220049.png)

::: hint-info
If you encounter a connection test failure between Connector and {{$localeConfig.brandName}}, please wait for a while. The handshake between Connector and {{$localeConfig.brandName}} may not have been completed due to network delays.
:::

::: hint-info
If you encounter AD-related errors, please check whether the AD server link and account and secret information are correct.
:::
