!!!include(common/init-python-auth-sdk.md)!!!

Setup customized fields

```python
# Setup fields with int type.
authentication_client.set_udv(
  key="age",
  value=15
)

# Setup fields with boolean type.
authentication_client.set_udv(
  key="is_ok",
  value=True
)
```

Get users' latest values of customized fields.

```python
udvs = authentication_client.list_udv()
```
