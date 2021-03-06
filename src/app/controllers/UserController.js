import { saveUser, deleteUser } from "../../store/userSlice";

/**
 * if you have an instance of Strapi running on your local
 * machine:
 *
 * 1. Run `adb reverse tcp:8163 tcp:8163` (only on android)
 *
 * 2. You have to change the access IP from localhost
 * to the IP of the machine Strapi is running on.
 */
const url = "http://192.168.1.128:1337";

/**
 * @param {UserModel} user
 */
export const login = async (user) => {
  const requestConfig = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      identifier: user.identifier,
      password: user.password,
    }),
  };

  console.log(
    "user.identifier",
    user.identifier,
    "user.password",
    user.password
  );

  try {
    const response = await fetch(`${url}/auth/local`, requestConfig);
    const json = await response.json();

    if (json.error) {
      return false;
    }

    saveUser(json.jwt, json.user);

    return true;
  } catch (err) {
    alert(err);
    return false;
  }
};

/**
 * @param {UserModel} user
 */
export const logout = async (user) => {
  deleteUser();
};
