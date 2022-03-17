import axios from 'axios';

describe('Keycloak', () => {
  it('Should get token from Keycloak', async () => {
    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Access-Control-Allow-Origin': '*',
    };
    const credentials = {
      username: 'admin',
      password: 'admin',
      client_id: 'web_app',
      grant_type: 'password',
    };

    const result = await axios.post('http://localhost:9080/auth/realms/jhipster/protocol/openid-connect/token', credentials, { headers });
    console.log(result);

    expect(result).not.toBeNull();
  });
});

/*
curl -X POST "http://localhost:9080/auth/realms/jhipster/protocol/openid-connect/token" \
 -d 'username=admin' \
 -d 'password=admin' \
 -d 'client_id=web_app' \
 -d 'grant_type=password'
*/
