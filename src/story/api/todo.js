import { BASE_URL, HTTP_METHOD, request, requestWithoutJson } from ".";

const todoApi = {
  getTodoList() {
    return request(`${BASE_URL}/todos`, HTTP_METHOD.GET_TODO());
  },
  createTodoList(data) {
    return request(`${BASE_URL}/todos`, HTTP_METHOD.POST_TODO(data));
  },
  updateTodoList(data, id) {
    return requestWithoutJson(
      `${BASE_URL}/api/todos/${id}`,
      HTTP_METHOD.PUT_TODO(data)
    );
  },
  deleteTodoList(data, id) {
    return request(
      `${BASE_URL}/api/todos/${id}`,
      HTTP_METHOD.DELETE_TODO(data)
    );
  },
};
