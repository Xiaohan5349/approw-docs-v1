!!!include(en/common/init-python-auth-sdk.md)!!!

<<<<<<< HEAD
Use phone number to reset password:
=======
Use the mobile phone number verification code to reset the password:
>>>>>>> 73ab4dd7c5da68c242b103b5fa2c1d26e1270e5b

```python
authentication_client.reset_password_by_phone_code(
  phone="176xxxx6754",
  code="1234",
  new_password="passw0rd"
)
```

<<<<<<< HEAD
Use email to reset password：
=======
Use email verification code to reset password:
>>>>>>> 73ab4dd7c5da68c242b103b5fa2c1d26e1270e5b

```python
authentication_client.reset_password_by_email_code(
  email="test@example.com",
  code="1234",
  new_password="passw0rd"
)
```
