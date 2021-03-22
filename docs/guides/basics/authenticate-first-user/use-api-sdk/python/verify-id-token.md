Python 可以使用 [PyJWT](https://pyjwt.readthedocs.io/en/stable/) 来验证 IdToken：

```python
import jwt
key = "secret"
encoded = jwt.encode({"some": "payload"}, key, algorithm="HS256")
print(encoded)
jwt.decode(encoded, key, algorithms="HS256")
```