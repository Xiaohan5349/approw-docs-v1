!!!include(en/common/init-python-auth-sdk.md)!!!

If the user has not set a password before (for example, registered by mobile phone number, social login, etc.), there is no need to pass in the original password.

```python
# If you register by other methods such as mobile phone number, social login, etc., the password is not set for the first time, and the old_password is left blank.
authentication_client.update_password(
  new_password="passw0rd",
)
```

Or：

```python
# The user has previously set a password
authentication_client.update_password(
  new_password="passw0rd",
  old_password="123456!"
)
```
