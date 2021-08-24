
export default {
  oidc: {
    issuer: `https://evgptraining.okta.com/oauth2/default`,
    clientId: `0oa7v2cvsr3YGLTac357`,
    client_secret: `6Wq_JLOu8AjEn-5DnuRUhBDZ15sAxIRKgK_N9W6O`,
    redirectUri: 'https://evg1.dev.humanpixcel.com.au/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: false,
    testing: {
      disableHttpsCheck: `true`
    }.
  },
  resourceServer: {
    messagesUrl: 'http://localhost:8000/hello',
  },
};
