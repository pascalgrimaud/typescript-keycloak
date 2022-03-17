import axios from 'axios';

describe('Keycloak', () => {
  it('Should get token from Keycloak', async () => {
    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
    };
    const params = new URLSearchParams();
    params.append('username', 'admin');
    params.append('password', 'admin');
    params.append('client_id', 'web_app');
    params.append('grant_type', 'password');

    const result = await axios.post('http://localhost:9080/auth/realms/jhipster/protocol/openid-connect/token', params, { headers });

    const token = result.data.access_token;
    console.log(token);

    expect(token).not.toBeNull();
  });
});

/*
curl -X POST "http://localhost:9080/auth/realms/jhipster/protocol/openid-connect/token" \
 -H 'Content-Type: application/x-www-form-urlencoded' \
 -d 'username=admin' \
 -d 'password=admin' \
 -d 'client_id=web_app' \
 -d 'grant_type=password'
*/
