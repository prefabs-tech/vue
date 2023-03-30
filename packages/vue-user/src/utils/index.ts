import { User } from "../types";

const USER_KEY = "user";

const setUserData = (data: User) => {
  localStorage.setItem(USER_KEY, JSON.stringify(data));
};

const getUserData = (): User => {
  return JSON.parse(localStorage.getItem(USER_KEY) || "");
};

const removeUserData = () => {
  localStorage.removeItem(USER_KEY);
};

export { getUserData, removeUserData, setUserData };
