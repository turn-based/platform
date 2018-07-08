interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
  apiUrl: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: '3S1HVNJBUm8k7VBVfylSFPmQ2kjbA0Fk',
  domain: 'amitport.auth0.com',
  callbackURL: 'http://local.com:4200/callback',
  apiUrl: 'https://api.turn-based.com'
};
