import { typesUser } from "../types/types";

export const actionLogin = (user) => {
  console.log("Estoy en action user", user);
  return {
    type: typesUser.login,
    payload: user,
  };
};

export const actionLogout = () => {
  console.log("Estoy en action logout");
  return {
    type: typesUser.logout,
  };
};
