const BASE_URL = `https://api-ediary.vercel.app/api/v1`;

// Auth Endpoints
export const authEndpoints = {
  SIGN_UP: BASE_URL + `/auth/register`,
  VERIFY_EMAIL: BASE_URL + `/auth/verify-email`,
  LOGIN: BASE_URL + `/auth/login`,
  USER_INFO: BASE_URL + `/auth/user-info`,
};
