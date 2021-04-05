# Overview of Expansion Capabilities

<LastUpdated/>

Approw has always been committed to improving the openness and scalability of the platform to meet the various personalized needs of different customers for identity authentication and authority management. Approw‘s extensibility system includes the following forms:

- [WebHook](/guides/webhook/README.md) allows you to monitor user registration, login, password reset, email verification, user information update, etc. The system will send the event to the customized callback address you configured after triggering a specific event, so as to do some custom processing on it.
- [Pipeline](/guides/pipeline/README.md) is a set of user-defined JavaScript code running in the cloud, which allows developers to execute customized code in the authentication process, such as adding custom id_token, flexible access control, etc.
- [The custom database](/guides/database-connection/overview.md) allows Approw to interact with your customized database, and it can also realize non-stop user data migration to the cloud.

