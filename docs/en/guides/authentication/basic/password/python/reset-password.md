!!!include(common/init-python-auth-sdk.md)!!!

Use the mobile phone number verification code to reset the password:

```python
authentication_client.reset_password_by_phone_code(
  phone="176xxxx6754",
  code="1234",
  new_password="passw0rd"
)
```

Use email verification code to reset password:

```python
authentication_client.reset_password_by_email_code(
  email="test@example.com",
  code="1234",
  new_password="passw0rd"
)
```
