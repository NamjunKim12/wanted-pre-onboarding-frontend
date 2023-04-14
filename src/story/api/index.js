import { store } from "../../service/store/store";

const BASE_URL = "https://www.pre-onboarding-selection-task.shop";
const accessToken = store.getLocalStorage();

const HTTP_METHOD = {
  POST_AUTH(data) {
    return {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
  },
  POST_TODO(data) {
    return {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ todo: data }),
    };
  },
  GET_TODO() {
    const accessToken = store.getLocalStorage();
    return {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };
  },
  PUT_TODO(data) {
    return {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: data ? JSON.stringify(data) : null,
    };
  },
  DELETE_TODO() {
    return {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };
  },
};

const request = async (url, option) => {
  const response = await fetch(url, option);
  if (!response.ok) {
    alert("에러가 발생했습니다.");
  }
  return response.json();
};

const requestWithoutJson = async (url, option) => {
  const response = await fetch(url, option);
  if (!response.ok) {
    alert("에러가 발생했습니다.");
  }
  return response;
};

export { BASE_URL, HTTP_METHOD, request, requestWithoutJson };
