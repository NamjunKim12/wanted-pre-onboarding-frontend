const store = {
  setLocalStorage(token) {
    localStorage.setItem("accessToken", JSON.stringify(token));
  },
  getLocalStorage() {
    return localStorage.getItem("accessToken");
  },
};

export { store };
