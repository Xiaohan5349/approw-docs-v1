!!!include(en/common/init-python-auth-sdk.md)!!!

First call send SMS verification code API, and then use `login_by_phone_code` method：

```python
phone = '176xxxx6754'
# Phone number verification login, if user doesn't exist will create an account
user = authentication_client.login_by_phone_code(
    phone=phone,
    code='1234',
)
```