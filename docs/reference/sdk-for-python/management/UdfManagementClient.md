---
meta:
  - name: description
    content: 管理用户自定义字段
---

# 管理用户自定义字段

<LastUpdated/>

Udf 是 User Defined Field（用户自定义字段） 的简称。{{$localeConfig.brandName}} 的数据实体（如用户、角色、分组、组织机构等）可以添加自定义字段，你可以配置 {{$localeConfig.brandName}} 默认不自带的字段，比如你需要创建以一个学校相关的应用，就可以添加一个自定义 `school` 字段。

同时你可以在用户注册完成之后要求用户补充此字段的信息，[点此查看详情](/guides/authentication/extensibility/user-defined-field.md)。

## 设置自定义字段元数据

UdfManagementClient().set(targetType, key, dataType, label)

> 设置自定义字段元数据，如果该字段不存在会自动创建。

#### 参数

- `targetType` \<UdfTargetType\> 自定义字段目标类型， USER 表示用户、ROLE 表示角色。
- `key` \<string\> 字段 key
- `dataType` \<UdfDataType\> 数据类型，目前共支持五种数据类型。STRING 为字符串、NUMBER 为数字、DATETIME 为日期、BOOLEAN 为 boolean 值、OBJECT 为对象。
- `label` \<string\> 字段 Label，一般是一个 Human Readable 字符串。

#### 示例

```python
udf = management.udf.set(
    targetType='USER', # 目标类型为用户
    key='school', # key 为 school
    dataType='STRING', # 数据类型为字符串
    label='学校', # 显示的 label 为学校
)

udf = management.udf.set(
    targetType='USER', # 目标类型为用户
    key='age', # key 为 age
    dataType='NUMBER', # 数据类型为数字
    label='年龄', # 显示的 label 为年龄
)
```

## 删除自定义字段

UdfManagementClient().remove(targetType, key)

> 删除自定义字段

#### 参数

- `targetType` \<UdfTargetType\> 自定义字段目标类型， USER 表示用户、ROLE 表示角色。
- `key` \<string\> 字段 key

#### 示例

```python
management.udf.remove(
    targetType='USER', # 目标类型为用户
    key='school'  # key 为 school
)
```

## 获取自定义字段定义

UdfManagementClient().list(targetType)

> 查询用户池定义的自定义字段

#### 参数

- `targetType` \<UdfTargetType\> 自定义字段目标类型， USER 表示用户、ROLE 表示角色。

#### 示例

```python
udfs = management.udf.list(
  targetType="USER" # 目标类型为用户
)
```
