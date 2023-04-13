import { BASE_URL, HTTP_METHOD, request } from ".";

const authApi = {
  signIn(email, password) {
    return request(
      `${BASE_URL}/auth/signin`,
      HTTP_METHOD.POST({ email, password })
    );
  },
  signUp(email, password) {
    return request(
      `${BASE_URL}/auth/signup`,
      HTTP_METHOD.POST({ email, password })
    );
  },
};

export default authApi;
