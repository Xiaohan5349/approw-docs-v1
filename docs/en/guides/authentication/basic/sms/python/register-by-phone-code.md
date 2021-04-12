!!!include(common/init-python-auth-sdk.md)!!!

First call the Send SMS Verification Code interface to send the SMS verification code, and then use the `register_by_phone_code` method:

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
