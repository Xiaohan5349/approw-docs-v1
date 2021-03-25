Use `loginByPhoneCode` method to login.

```python
phone = '176xxxx6754'
# login with SMS verification code, if account doesn't exist, it will create a new account automatically
user = authentication_client.login_by_phone_code(
    phone=phone,
    code='1234',
)
```