!!!include(en/common/init-python-auth-sdk.md)!!!

First call the Send SMS Verification Code interface to send the SMS verification code, and then use the `login_by_phone_code` method:

```python
phone = '176xxxx6754'
# Login with mobile phone number verification code, if the user does not exist, an account will be created automatically
user = authentication_client.login_by_phone_code(
    phone=phone,
    code='1234',
)
```
