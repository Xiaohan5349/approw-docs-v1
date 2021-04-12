!!!include(en/common/init-python-auth-sdk.md)!!!

<<<<<<< HEAD
First call Send SMS verification code API to send SMS code, and then use `register_by_phone_code` method：
=======
First call the Send SMS Verification Code interface to send the SMS verification code, and then use the `register_by_phone_code` method:
>>>>>>> 73ab4dd7c5da68c242b103b5fa2c1d26e1270e5b

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
