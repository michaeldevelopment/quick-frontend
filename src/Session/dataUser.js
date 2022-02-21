export const setUser = (username, email, id, premium) => {
  const userData = {
    username,
    email,
    id,
    premium,
  };
  return localStorage.setItem("user", JSON.stringify(userData));
};

export const setToken = (token) => {
  return localStorage.setItem("token", token);
};

export const getUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export const getToken = () => {
  return localStorage.getItem("token");
};
