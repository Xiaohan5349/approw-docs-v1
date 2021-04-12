!!!include(en/common/init-python-auth-sdk.md)!!!

<<<<<<< HEAD
First call send SMS verification code API, and then use `login_by_phone_code` method：

```python
phone = '176xxxx6754'
# Phone number verification login, if user doesn't exist will create an account
=======
First call the Send SMS Verification Code interface to send the SMS verification code, and then use the `login_by_phone_code` method:

```python
phone = '176xxxx6754'
# Login with mobile phone number verification code, if the user does not exist, an account will be created automatically
>>>>>>> 73ab4dd7c5da68c242b103b5fa2c1d26e1270e5b
user = authentication_client.login_by_phone_code(
    phone=phone,
    code='1234',
)
```
