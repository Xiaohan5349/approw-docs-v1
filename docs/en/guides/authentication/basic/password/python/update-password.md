!!!include(en/common/init-python-auth-sdk.md)!!!

<<<<<<< HEAD
If a user doesn't set a password before (for example, register by phone number or social IDP), this method does not require the original password.

```python
# registered by ohone number or social register, so user doesn't set a password in first time use. Leave old_password empty.
=======
If the user has not set a password before (for example, registered by mobile phone number, social login, etc.), there is no need to pass in the original password.

```python
# If you register by other methods such as mobile phone number, social login, etc., the password is not set for the first time, and the old_password is left blank.
>>>>>>> 73ab4dd7c5da68c242b103b5fa2c1d26e1270e5b
authentication_client.update_password(
  new_password="passw0rd",
)
```

Or：

```python
<<<<<<< HEAD
# User set a password before
=======
# The user has previously set a password
>>>>>>> 73ab4dd7c5da68c242b103b5fa2c1d26e1270e5b
authentication_client.update_password(
  new_password="passw0rd",
  old_password="123456!"
)
```
