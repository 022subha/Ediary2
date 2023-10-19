const BASE_URL = `http://localhost:5000/api/v1`;

// Auth Endpoints
export const authEndpoints = {
  SIGN_UP: BASE_URL + `/auth/register`,
  VERIFY_EMAIL: BASE_URL + `/auth/verify-email`,
  LOGIN: BASE_URL + `/auth/login`,
  USER_INFO: BASE_URL + `/auth/user-info`,
  LOGOUT: BASE_URL + `/auth/logout`,
  GOOGLE_CALLBACK: BASE_URL + `/auth/google/callback`,
};
