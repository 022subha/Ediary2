const BASE_URL = `http://localhost:5000/api/v1`;

// Auth Endpoints
export const authEndpoints = {
  SIGN_UP: BASE_URL + `/auth/register`,
  VERIFY_EMAIL: BASE_URL + `/auth/verify-email`,
};
