On the organization management page of the console, click the **Import Organization** - **Import from Excel** button in the upper right corner:

![](~@imagesEnUs/guides/org/import-from-excel.jpg)

Click to download the Excel template, the structure of the Excel template is as follows:

![](~@imagesEnUs/guides/org/excel-template.jpg)

The definitions of the fields are as follows:

- Nickname: The user's nickname, which can be empty and does not need to be unique;
- Username: the user's username, which can be empty and must be unique;
- Email: the user's email address, which can be empty, and the mobile phone number must be filled in one of them, and must be unique;
- Whether the mailbox is verified: whether the user's mailbox has been verified, fill in "Yes" or "No";
- Mobile phone number: the user's mobile phone number, which can be empty, and the mailbox must be filled in one of them, and it must be unique;
- unionid：user's unionid, which can be empty and must be unique;
- openid：the user's openid, which can be empty and must be unique;
- Password: password in plain text format;
- Company: company name, can be empty;
- Gender: U means unknown, M means "male", W means "female";
- Whether it is disabled: fill in "Yes" or "No";
- **Department**：**Must be sorted according to the department's large to small format, separated by'/', the first part will be regarded as the root node**, such as `Extraordinary Technology/R&D/Backend`.

After modifying the template, upload it.
