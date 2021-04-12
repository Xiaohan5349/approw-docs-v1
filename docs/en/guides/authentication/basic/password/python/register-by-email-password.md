!!!include(en/common/init-python-auth-sdk.md)!!!

<<<<<<< HEAD
Use `register_by_email` method：

=======
Use the `register_by_email` method:
>>>>>>> 73ab4dd7c5da68c242b103b5fa2c1d26e1270e5b

```python
email = 'test@example.com'
user = authentication_client.register_by_email(
    email=email,
    password='passw0rd',
    profile={
      'nickname': 'Nick'
    }
)
```
