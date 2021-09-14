import { store } from "../../redux/Store";

/**
 * if you have an instance of Strapi running on your local
 * machine:
 *
 * 1. Run `adb reverse tcp:8163 tcp:8163` (only on android)
 *
 * 2. You have to change the access IP from localhost
 * to the IP of the machine Strapi is running on.
 */
const url = "http://192.168.1.128:1337/todos";

/**
 * add a todo to Strapi
 */
export const save = async (todo) => {
  const requestBody = JSON.stringify({
    title: todo.title,
    note: todo.note,
    dateTime: todo.dateTime,
    priority: todo.priority,
    finished: todo.finished,
    user: todo.user.id,
  });

  const requestConfig = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${store.getState().jwt}`,
      "Content-Type": "application/json",
    },
    body: requestBody,
  };

  const response = await fetch(url, requestConfig);

  const json = await response.json();

  if (json.error) {
    return null;
  }

  return json._id;
};

/**
 * add a todo to Strapi
 */
export const edit = async (todo) => {
  const requestBody = JSON.stringify({
    title: todo.title,
    note: todo.note,
    dateTime: todo.dateTime,
    priority: todo.priority,
    due: todo.due,
    finished: todo.finished ? 1 : 0,
    user: todo.user.id,
  });

  const requestConfig = {
    method: "PUT",
    headers: { Authorization: `Bearer ${store.getState().jwt}` },
    body: requestBody,
  };

  const response = await fetch(`${url}/${todo.id}`, requestConfig);
  const json = await response.json();

  if (json.error) {
    return false;
  }

  return true;
};

/**
 * delete a todo from Strapi
 */
export const dismiss = async (todo) => {
  const response = await fetch(`${url}/${todo.id}`, {
    headers: { Authorization: `Bearer ${store.getState().jwt}` },
  });

  const json = response.json();

  if (json.error) {
    return false;
  }

  return true;
};
