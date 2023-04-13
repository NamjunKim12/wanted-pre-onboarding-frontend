import { BASE_URL, HTTP_METHOD, request, requestWithoutJson } from ".";

const authApi = {
  signIn(email, password) {
    return request(
      `${BASE_URL}/auth/signin`,
      HTTP_METHOD.POST_AUTH({ email, password })
    );
  },
  signUp(email, password) {
    return requestWithoutJson(
      `${BASE_URL}/auth/signup`,
      HTTP_METHOD.POST_AUTH({ email, password })
    );
  },
};

export default authApi;
