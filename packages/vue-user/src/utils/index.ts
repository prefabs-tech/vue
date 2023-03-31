import { User } from "../types";

const USER_KEY = "user";

const setUserData = (data: User) => {
  localStorage.setItem(USER_KEY, JSON.stringify(data));
};

const getUserData = (): User => {
  const data = localStorage.getItem(USER_KEY);

  return data ? JSON.parse(data) : undefined;
};

const removeUserData = () => {
  localStorage.removeItem(USER_KEY);
};

export { getUserData, removeUserData, setUserData };
