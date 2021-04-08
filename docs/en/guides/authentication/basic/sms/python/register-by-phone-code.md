!!!include(en/common/init-python-auth-sdk.md)!!!

First call Send SMS verification code API to send SMS code, and then use `register_by_phone_code` method：

```python
phone = '176xxxx6754'
user = authentication_client.register_by_phone_code(
    phone=phone,
    code='1234',
    password='passw0rd',
    profile={
      'nickname': 'Nick'
    }
)
```