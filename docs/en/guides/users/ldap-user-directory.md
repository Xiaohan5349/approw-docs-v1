---
meta:
  - name: description
    content: LDAP User Directory
---

# LDAP User Directory in {{$localeConfig.brandName}}

{{$localeConfig.brandName}} support LDAP read, modify, add and delete user information. This page will introduce basic information and guidance for LDAP. If you are not familiar with LDAP protocol, here is a pre-introduction: [What is LDAP](/docs/en/concepts/ldap.md).

## Basic Information

|
 | Value |
| --- | --- |
| Hostname | ldap://ldap.approw.com |
| Port | 1389 |
| LDAP Distinguished Name(BindDN) | ou=users, o=APPROW\_USERPOOL\_ID, dc=approw, dc=cn |
| Base DN | ou=users, o=APPROW\_USERPOOL\_ID, dc=approw, dc=cn |

`BindDN` and `secret` use for identity validation. `BaseDN` defines where to find the user.

```txt
dc=approw,dc=cn                                        - {{$localeConfig.brandName}}        
└── o=APPROW_USERPOOL_ID                               - userPool
    └── ou=users                                        - users(use as BindDN and BaseDN)
            ├── uid=USER_ID                             - user
            └── o=develop                               - Organization
                        └── uid=USER_ID                 - user under organization
```

## Validation Method

Access {{$localeConfig.brandName}} LDAP server need UserPool Id and UserPool Secret. 


Login with UserPool `BindDN` and `secret`. Search user under UserPool. Return results with user information:


```bash
$ ldapsearch -H ldap://ldap.approw.com:1389 -x -D "ou=users,o=APPROW_USERPOOL_ID,dc=approw,dc=cn" -w "APPROW_USERPOOL_SECRET"  -LLL -b "ou=users,o=APPROW_USERPOOL_ID,dc=approw,dc=cn"
```

If `secret` is incorrect:

```
	ldap_bind: Invalid credentials (49)
	matched DN: ou=users, o=APPROW_USERPOOL_ID, dc=approw, dc=cn
	additional info: InvalidCredentialsError
```

Return sample:

```bash
# UserPool info
dn: ou=users,o=59f86b4832eb28071bdd9214,dc=approw,dc=cn
objectclass: organization
objectclass: top
o: 59f86b4832eb28071bdd9214
name:: cm9vdCDnlKjmiLfmsaA=

# user info in UserPool (test)
dn: uid=601d54c27569df18f85e2c71,ou=users,o=59f86b4832eb28071bdd9214,dc=approw,dc=cn
id: 601d54c27569df18f85e2c71
createdAt:: RnJpIEZlYiAwNSAyMDIxIDIyOjIyOjU4IEdNVCswODAwICjkuK3lm73moIflh4bml7bpl7Qp
updatedAt:: RnJpIEZlYiAwNSAyMDIxIDIyOjIyOjU4IEdNVCswODAwICjkuK3lm73moIflh4bml7bpl7Qp
userPoolId: 59f86b4832eb28071bdd9214
email: 1409458062@qq.com
username: test
photo: https://files.approw.co/approw-console/default-user-avatar.png
gender: U
registerSource: import:manual
emailVerified: false
phoneVerified: false
blocked: false
signedUp:: RnJpIEZlYiAwNSAyMDIxIDIyOjIyOjU4IEdNVCswODAwICjkuK3lm73moIflh4bml7bpl7Qp
objectclass: users
cn: test
uid: 601d54c27569df18f85e2c71

# user info in UserPool (Root)
dn: uid=5a597f35085a2000144a10ed,ou=users,o=59f86b4832eb28071bdd9214,dc=approw,dc=cn
id: 5a597f35085a2000144a10ed
createdAt:: TW9uIEZlYiAwMSAyMDIxIDE3OjA1OjU0IEdNVCswODAwICjkuK3lm73moIflh4bml7bpl7Qp
updatedAt:: TW9uIEZlYiAwMSAyMDIxIDE3OjI2OjU5IEdNVCswODAwICjkuK3lm73moIflh4bml7bpl7Qp
userPoolId: 59f86b4832eb28071bdd9214
email: root@approw.com
username: root
photo: https://files.approw.co/approw-console/default-user-avatar.png
lastIp:: Ojox
gender: U
registerSource: offcial:import
emailVerified: false
phoneVerified: false
lastLogin:: TW9uIEZlYiAwMSAyMDIxIDE3OjI2OjU5IEdNVCswODAwICjkuK3lm73moIflh4bml7bpl7Qp
blocked: false
signedUp:: TW9uIEZlYiAwMSAyMDIxIDE3OjA1OjU0IEdNVCswODAwICjkuK3lm73moIflh4bml7bpl7Qp
objectclass: users
cn: root
uid: 5a597f35085a2000144a10ed

# user info in UserPool（17602502507）
dn: uid=601d59a5f04ee72cb058bdbb,ou=users,o=59f86b4832eb28071bdd9214,dc=approw,dc=cn
id: 601d59a5f04ee72cb058bdbb
createdAt:: RnJpIEZlYiAwNSAyMDIxIDIyOjQzOjQ5IEdNVCswODAwICjkuK3lm73moIflh4bml7bpl7Qp
updatedAt:: RnJpIEZlYiAwNSAyMDIxIDIyOjQzOjQ5IEdNVCswODAwICjkuK3lm73moIflh4bml7bpl7Qp
userPoolId: 59f86b4832eb28071bdd9214
phone: 17602502507
photo: https://files.approw.co/approw-console/default-user-avatar.png
gender: U
registerSource: import:manual
emailVerified: false
phoneVerified: false
blocked: false
signedUp:: RnJpIEZlYiAwNSAyMDIxIDIyOjQzOjQ5IEdNVCswODAwICjkuK3lm73moIflh4bml7bpl7Qp
objectclass: users
uid: 601d59a5f04ee72cb058bdbb

# user info in UserPool (Org)
dn: o=601d14d1267b84c06a32e463,ou=users,o=59f86b4832eb28071bdd9214,dc=approw,dc=cn
id: 601d14d1267b84c06a32e463
createdAt: 2021-02-05T09:50:09.073Z
updatedAt: 2021-02-05T09:50:09.073Z
userPoolId: 59f86b4832eb28071bdd9214
orgId: 601d14d15ac1c3f008997f53
name:: 5bCP55m9
description:: 6L+Z5piv5qC557uE57uH
code: 5584
o: 601d14d1267b84c06a32e463
objectclass: organization
path:: 5bCP55m9
parent: Root
parentId: 0
parentCode: root

# user info in Org in UserPool (test)
dn: uid=601d54c27569df18f85e2c71,o=601d14d1267b84c06a32e463,ou=users,o=59f86b4832eb28071bdd9214,dc=approw,dc=cn
id: 601d54c27569df18f85e2c71
createdAt:: RnJpIEZlYiAwNSAyMDIxIDIyOjIyOjU4IEdNVCswODAwICjkuK3lm73moIflh4bml7bpl7Qp
updatedAt:: RnJpIEZlYiAwNSAyMDIxIDIyOjIyOjU4IEdNVCswODAwICjkuK3lm73moIflh4bml7bpl7Qp
userPoolId: 59f86b4832eb28071bdd9214
email: 1409458062@qq.com
username: test
photo: https://files.approw.co/approw-console/default-user-avatar.png
gender: U
registerSource: import:manual
emailVerified: false
phoneVerified: false
blocked: false
signedUp:: RnJpIEZlYiAwNSAyMDIxIDIyOjIyOjU4IEdNVCswODAwICjkuK3lm73moIflh4bml7bpl7Qp
objectclass: organizationalPerson
cn: test
uid: 601d54c27569df18f85e2c71

# user info in Org in UserPool（17602502507）
dn: uid=601d59a5f04ee72cb058bdbb,o=601d14d1267b84c06a32e463,ou=users,o=59f86b4832eb28071bdd9214,dc=approw,dc=cn
id: 601d59a5f04ee72cb058bdbb
createdAt:: RnJpIEZlYiAwNSAyMDIxIDIyOjQzOjQ5IEdNVCswODAwICjkuK3lm73moIflh4bml7bpl7Qp
updatedAt:: RnJpIEZlYiAwNSAyMDIxIDIyOjQzOjQ5IEdNVCswODAwICjkuK3lm73moIflh4bml7bpl7Qp
userPoolId: 59f86b4832eb28071bdd9214
phone: 17602502507
photo: https://files.approw.co/approw-console/default-user-avatar.png
gender: U
registerSource: import:manual
emailVerified: false
phoneVerified: false
blocked: false
signedUp:: RnJpIEZlYiAwNSAyMDIxIDIyOjQzOjQ5IEdNVCswODAwICjkuK3lm73moIflh4bml7bpl7Qp
objectclass: organizationalPerson
uid: 601d59a5f04ee72cb058bdbb

```

## LDAP Search


Search under on UserPool. Returns including user information and organizational information. -LLL means all outputs must follow Search Filter. Without it returns will include number of outcomes and some request information.

```bash
$ ldapsearch -H ldap://ldap.approw.com:1389 -x -D "ou=users,o=APPROW_USERPOOL_ID,dc=approw,dc=cn" -w "APPROW_USERPOOL_SECRET"  -LLL -b "ou=users,o=APPROW_USERPOOL_ID,dc=approw,dc=cn"
```

### Search Filter

Search under on UserPoll and filter the outcomes. Returns including user information and organizational information.

> Refer to [RFC-2254](https://www.ietf.org/rfc/rfc2254.txt)


#### Equal

Search under UserPool and gender = U. Will return users information which contain gender = U.


```bash
$ ldapsearch -H ldap://localhost:1389 -x -D "ou=users,o=APPROW_USERPOOL_ID,dc=approw,dc=cn" -w "APPROW_USERPOOL_SECRET" -LLL -b "ou=users,o=APPROW_USERPOOL_ID,dc=approw,dc=cn" -s sub '(gender=U)'
```

#### Not Equal

Search under UserPool and cn not equal hahhaha. 

```bash
$ ldapsearch -H ldap://localhost:1389 -x -D "ou=users,o=APPROW_USERPOOL_ID,dc=approw,dc=cn" -w "APPROW_USERPOOL_SECRET" -LLL -b "ou=users,o=APPROW_USERPOOL_ID,dc=approw,dc=cn" -s sub '(!(cn=hahhaha))'
```

#### Equal or More

Search under UserPool and code >= 50.


```bash
$ ldapsearch -H ldap://localhost:1389 -x -D "ou=users,o=APPROW_USERPOOL_ID,dc=approw,dc=cn" -w "APPROW_USERPOOL_SECRET" -LLL -b "ou=users,o=APPROW_USERPOOL_ID,dc=approw,dc=cn" -s sub '(code>=50)'
```

#### Equal or Less

Search under UserPool and code <= 50.


```bash
$ ldapsearch -H ldap://localhost:1389 -x -D "ou=users,o=APPROW_USERPOOL_ID,dc=approw,dc=cn" -w "APPROW_USERPOOL_SECRET" -LLL -b "ou=users,o=APPROW_USERPOOL_ID,dc=approw,dc=cn" -s sub '((code<=50)'
```

#### Search Mode
```txt
dc=approw,dc=cn                                        - {{$localeConfig.brandName}}        
└── o=APPROW_USERPOOL_ID                               - userPool
    └── ou=users                                        - users(use as BindDN and BaseDN)
            ├── uid=USER_ID                             - user
            └── o=develop                               - Organization
                        └── uid=USER_ID                 - user under organization
```
##### Base mode

Base mode only search and return BaseDN information.

```
dn: ou=users,o=APPROW_USERPOOL_ID,dc=approw,dc=cn
...attribute...
```

```bash
$ ldapsearch -H ldap://localhost:1389 -x -D "ou=users,o=APPROW_USERPOOL_ID,dc=approw,dc=cn" -w "APPROW_USERPOOL_SECRET" -b "ou=users,o=APPROW_USERPOOL_ID,dc=approw,dc=cn" -s base
```

##### One mode

One mode only search and return `BaseDN` and `BaseDN Child node` information.
```
dn: ou=users,o=APPROW_USERPOOL_ID,dc=approw,dc=cn
...attribute...

dn: uid=USER1_ID,ou=users,o=APPROW_USERPOOL_ID,dc=approw,dc=cn
...attribute...

dn: o=develop,ou=users,o=APPROW_USERPOOL_ID,dc=approw,dc=cn
...attribute...
```

```bash
$ ldapsearch -H ldap://localhost:1389 -x -D "ou=users,o=APPROW_USERPOOL_ID,dc=approw,dc=cn" -w "APPROW_USERPOOL_SECRET" -b "ou=users,o=APPROW_USERPOOL_ID,dc=approw,dc=cn" -s one
```

##### Sub mode

Sub mode search and return `BaseDN` and `All node under BaseDN`.
```
dn: ou=users,o=APPROW_USERPOOL_ID,dc=approw,dc=cn
...attribute...

dn: uid=USER1_ID,ou=users,o=APPROW_USERPOOL_ID,dc=approw,dc=cn
...attribute...

dn: o=develop,ou=users,o=APPROW_USERPOOL_ID,dc=approw,dc=cn
...attribute...

dn: uid=USER2_ID,o=develop,ou=users,o=APPROW_USERPOOL_ID,dc=approw,dc=cn
...attribute...
```

```bash
$ ldapsearch -H ldap://localhost:1389 -x -D "ou=users,o=APPROW_USERPOOL_ID,dc=approw,dc=cn" -w "APPROW_USERPOOL_SECRET" -b "ou=users,o=APPROW_USERPOOL_ID,dc=approw,dc=cn" -s sub
```

### Result Filter (return)

It's similar to `select` in SQL.  Here are examples with Result Filter:
```
dn: ou=users,o=APPROW_USERPOOL_ID,dc=approw,dc=cn
cn: approw
username: approw
uid: user1
...other attrubute...
```
If add other filter:
```
dn: ou=users,o=APPROW_USERPOOL_ID,dc=approw,dc=cn
uid: user1
```
```bash
$ ldapsearch -H ldap://localhost:1389 -x -D "ou=users,o=APPROW_USERPOOL_ID,dc=approw,dc=cn" -w "APPROW_USERPOOL_SECRET" -b "ou=users,o=APPROW_USERPOOL_ID,dc=approw,dc=cn" -s sub  dn uid
```

## LDAP Add

Create `user.ldif` file and copy contant below:

```
dn: cn=approwUserName, ou=users, o=APPROW_USERPOOL_ID, dc=approw, dc=cn
objectClass: users
cn: approwUserName
```

Then execute the command below:


```bash
$ ldapadd -H ldap://ldap.approw.com:1389 -x -D "ou=users,o=APPROW_USERPOOL_ID,dc=approw,dc=cn" -w "APPROW_USERPOOL_SECRET" -f ./user.ldif
```
This will add one user in UserPool


## LDAP Modify

Create `modify.ldif` file and copy contant below:

```
dn: cn=approwUserName, ou=users, o=APPROW_USERPOOL_ID, dc=approw, dc=cn
changetype: modify
replace: mail
mail: test@approw.com
```

 Then execute the command below:



```bash
$ ldapmodify -H ldap://ldap.approw.com:1389 -x -D "ou=users,o=APPROW_USERPOOL_ID,dc=approw,dc=cn" -w "APPROW_USERPOOL_SECRET" -f ./modify.ldif
```

This will search user based on dn in modify.ldif and action as the value of `changetype`.

## LDAP Delete

This will **DELETE** user information.

```bash
$ ldapdelete -H ldap://ldap.approw.com:1389 -x -D "ou=users,o=APPROW_USERPOOL_ID,dc=approw,dc=cn" -w "APPROW_USERPOOL_SECRET" "cn=approwUserName, ou=users, o=APPROW_USERPOOL_ID, dc=approw,dc=cn"
```


### LDAP Compare

Use for determine the `attribute` and `dn` belong to same entry. If yes return `true`. 

```bash
$ ldapcompare -H ldap://ldap.approw.com:1389 -x -D "ou=users,o=APPROW_USERPOOL_ID,dc=approw,dc=cn" -w "APPROW_CLIENT_SECRET" "uid=uid,o=oid,ou=users,o=APPROW_USERPOOL_ID,dc=approw,dc=cn" "gender:U"
```

### LDAP ModifyDN

Use for RDN change. RDN means the first value of DN. Eg: `cn=oldUserName，o=5fa24415c124111859e23e4b，ou=users，o=APPROW_USERPOOL_ID，dc=approw，dc=cn`" UserDN or GroupDN mostly related with id. When you change `cn=oldUserName`, you are modifying the username.


```bash
$ ldapmodrdn -H ldap://ldap.approw.com:1389 -x -D "ou=users,o=APPROW_USERPOOL_ID,dc=approw,dc=cn" -w "APPROW_CLIENT_SECRET" "cn=oldUserName,o=5fa24415c124111859e23e4b,ou=users,o=APPROW_USERPOOL_ID,dc=approw,dc=cn" "cn=newUserName"
```
### LDAP Whoami

Use for verify LDAP server identity. Input correct BindDN and Secret. If fail, will return `ldap_bind: invalid credentials(49)` mostly caused by incorrect secret. 


```bash
$ ldapwhoami -H ldap://ldap.approw.com:1389 -x -D "ou=users,o=APPROW_USERPOOL_ID,dc=approw,dc=cn" -w "APPROW_CLIENT_SECRET"
```