const store = {
  setLocalStorage(token) {
    localStorage.setItem("accessToken", JSON.stringify(token));
  },
  getLocalStorage() {
    return JSON.parse(localStorage.getItem("accessToken"));
  },
};

export default store;
