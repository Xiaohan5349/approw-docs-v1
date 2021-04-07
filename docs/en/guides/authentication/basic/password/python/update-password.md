!!!include(common/init-python-auth-sdk.md)!!!

If a user doesn't set a password before (for example, register by phone number or social IDP), this method does not require the original password.

```python
# registered by ohone number or social register, so user doesn't set a password in first time use. Leave old_password empty.
authentication_client.update_password(
  new_password="passw0rd",
)
```

Or：

```python
# User set a password before
authentication_client.update_password(
  new_password="passw0rd",
  old_password="123456!"
)
```