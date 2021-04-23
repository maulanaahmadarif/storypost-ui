import ClientOAuth2 from 'client-oauth2'

const oauth = new ClientOAuth2({
  clientId: 'storypost',
  clientSecret: '957beaa5779a404a8f93a73ffe86c5f6',
  accessTokenUri: 'https://sso.kemenkeu.go.id/connect/token',
  authorizationUri: 'https://sso.kemenkeu.go.id/connect/authorize',
  redirectUri: window.origin,
  scopes: ['profile', 'openid', 'profil.hris', 'gateway']
})

const setLocalAuth = (token, expiry, provider = 'sso') => {
  localStorage.setItem('story_token', token)
  localStorage.setItem('story_expiry', expiry)
}

export { oauth, setLocalAuth }