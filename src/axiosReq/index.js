import axios from "axios";

const url = "http://localhost:3003/api/v1";

const signUpReq = (obj) => {
  return axios.post(`${url}/users/signup`, obj);
};

const loginReq = (obj) => {
  return axios.post(`${url}/users/login`, obj);
};

export default { signUpReq, loginReq };
