import axios from 'axios';

type SignInRequestType = {
  email: string;
  password: string;
}

export async function signInRequest(data: SignInRequestType) {
  const response = await axios.post('/api/auth', data);

  return {
    token: response.data.token,
    tokenExpirationAt: response.data.tokenExpirationAt,
    refreshToken: response.data.refreshToken,
    refreshTokenExpirationAt: response.data.refreshTokenExpirationAt,
    user: {
      email: response.data.email,
      name: response.data.name,
      businessId: response.data.businessId,
      businessName: response.data.businessName,
    }
  }
}