const koa = require("koa");
const koaRouter = require("koa-router");
const bodyParser = require("koa-bodyparser");
const axios = require("axios");
const jwt = require("jsonwebtoken");
const qs = require('querystring')
const app = new koa();
const router = new koaRouter();

const port = 8888
const oidcAppId = "Appliation ID";
const oidcAppSecret = "Application Secret";
const redirect_uri = `http://localhost:${port}/oidc/handle`

// Approw console redirect_uri can fill in the following：http://localhost:8888/oidc/handle. In this example, using code for token, using token for user information are finished in the backend. The code is sent to redirect_uri by Approw in the form of url query.
router.get("/oidc/handle", async (ctx, next) => {
  let code = ctx.query.code;
  // code 换 token
  let code2tokenResponse
  try {
    code2tokenResponse = await axios.post(
      // Modify to your application domain name
      "https://<your application domain name>.approw.com/oidc/token",
      qs.stringify({
        code,
        client_id: oidcAppId,
        client_secret: oidcAppSecret,
        grant_type: "authorization_code",
        redirect_uri
      }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    );
  } catch (error) {
    ctx.body = error.response.data
    return
  }
  let { access_token, id_token } = code2tokenResponse.data;
  // Token changes user information
  let token2UserInfoResponse = await axios.get("https://core.approw.com/oidc/me?access_token=" + access_token);

  // Decrypt id_token
  let decrypted_id_token = jwt.verify(id_token, oidcAppSecret)

  // Here you can manipulate user information, such as storing it in the database
  // ...
  // Redirect the user to the front-end login processing page, carry id_token, the front-end needs to store the id_token here, and carry it when accessing protected resources in the future

  ctx.body = {
    'code -> access_token response': code2tokenResponse.data,
    'access_token -> userInfo response': token2UserInfoResponse.data,
    'decrypted id_token': decrypted_id_token
  }
});

router.get("/protected/resource", async (ctx, next) => {
  // Users need to carry id_token to access protected resources
  let idToken = ctx.header.authorization || ctx.query.id_token;
  try {
    // Use the clientSecret of the oidc application for token verification
    // If the verification fails, the jsonwebtoken library will throw errors, such as token expired, signature error
    let decoded = jwt.verify(idToken, oidcAppSecret);
    ctx.body = {
      decoded,
      protected: "This is protected resource."
    }
  } catch (err) {
    // Redirect the user to the authorized address of oidc and log in
    ctx.redirect(
      // Modify to your application domain name
      `https://<your application domain name>.approw.com/oidc/auth?client_id=${oidcAppId}&redirect_uri=${redirect_uri}&scope=openid%20profile%20offline_access%20phone%20email&response_type=code&state=5435436&nonce=22121&prompt=consent`
    );
  }
});

app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());
app.listen(port);
console.log(`App listening at http://localhost:${port}`)