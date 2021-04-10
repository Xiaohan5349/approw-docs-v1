# Customize Domain Name

<LastUpdated/>

## Overview

Approw currently using the **domain name hosted** mode, using Approw secondary domain (eg:https://my-app.approw.cn).
In the **domain name hosted mode**, the user can log in and access the application through Approw by two domain names, as for users who want to use a custom domain name, Approw offers a solution based on Nginx reverse proxy.
This article will describe in detail how users configure a custom domain name, so as to realize Approw login and registration through a custom domain name.

## Preparation

1. The user needs to register the domain name, prepare HTTPS certificate and DNS resolution required for customization;
2. Configure the registered domain name and HTTPS certificate in the Nginx reverse proxy service;
3. Create an Approw application and configure the domain name of the Approw application in the Nginx reverse proxy service.

## Steps

:::hint-success
Before proceeding with this session, please make sure that you have completed the first two items in the preparatory work.
:::

**1. Log in to the Approw console, create a new application, and specify the application domain name**

<img src="./images/custom-domain-1.png" style="margin-top: 20px;" class="md-img-padding" />

<img src="./images/custom-domain-2.png" style="margin-top: 20px;" class="md-img-padding" />

As shown above, we have created a Approw application and configure the application for the domain name:**https://custom-domain.approw.cn**.
Next, we will reverse proxy the user's custom domain name **https://custom-domain.approw.cn**.
This application and domain name are just examples, you can create your own Approw application and domain name.

**2. Create a user to log in to the Approw application**

<img src="./images/custom-domain-3.png" style="margin-top: 20px;" class="md-img-padding" />

<img src="./images/custom-domain-4.png" style="margin-top: 20px;" class="md-img-padding" />

**3. Configure the Approw application domain name created above in the Nginx reverse proxy**

```nginx
upstream custom_domain {
    # Application domain name configured above
    server custom-domain.approw.cn:443;
    keepalive 64;
}

server {
    listen 443;
    # Custom domain name in the example
    server_name custom-domain.littleimp.cn;

    ssl                         on;
    # HTTPS certificate for custom domain name
    ssl_certificate             /etc/nginx/certificate/fullchain.cer;
    # HTTPS private key for custom domain name
    ssl_certificate_key         /etc/nginx/certificate/littleimp.cn.key;
    ssl_session_cache           shared:SSL:1m;
    ssl_session_timeout         5m;
    ssl_ciphers                 ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;
    ssl_protocols               TLSv1 TLSv1.1 TLSv1.2;
    ssl_prefer_server_ciphers   on;
    proxy_ssl_session_reuse     off;

    location / {
        # Redirect application domain name to custom domain name
        proxy_redirect https://custom-domain.approw.cn https://custom-domain.littleimp.cn:8088;
        # Application domain name configured above
        proxy_set_header Host custom-domain.approw.cn;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header User-Agent $http_user_agent;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header X-Forwarded-Host $host;
        proxy_ssl_server_name on;
        # The proxy_pass configuration remains the same as the upstream configuration
        proxy_pass https://custom_domain;
        index index.html index.htm;
        client_max_body_size 256m;
        client_body_buffer_size 128k;
        proxy_connect_timeout 7d;
        proxy_send_timeout 7d;
        proxy_read_timeout 7d;
        proxy_buffers 32 4k;
    }
}
```

**4. By custom domain example of `https://custom-domain.littleimp.cn:8088` to access applications Approw**
<img src="./images/custom-domain-5.png" style="margin-top: 20px;" class="md-img-padding" />

**5. Enter the user and password created above to log in to the Approw application**
<img src="./images/custom-domain-6.png" style="margin-top: 20px;" class="md-img-padding" />

**6. Successfully log in to the Approw application through the custom domain name and visit the personal center**
<img src="./images/custom-domain-7.png" style="margin-top: 20px;" class="md-img-padding" />
