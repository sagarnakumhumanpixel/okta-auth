
export default {
  oidc: {
    issuer: `https://dev-68779385.okta.com/oauth2/default`,
    clientId: `0oa1g0nu22CTjdz285d7`,
    redirectUri: 'http://localhost:8080/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    testing: {
      disableHttpsCheck: `true`
    }
  },
  resourceServer: {
    messagesUrl: 'http://localhost:8000/hello',
  },
};
