!!!include(en/common/init-python-auth-sdk.md)!!!

Use `login_by_email` method：


```python
email = 'test@example.com'
user = authentication_client.login_by_email(
    email=email,
    password='passw0rd',
)
```
