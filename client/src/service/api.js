import axios from "axios";
const url = "http://localhost:8000";

export const authenticatesignup = async (data) => {
  try {
    return await axios.post(`${url}/signup`, data);
  } catch (error) {
    console.log("error while calling signup api", error);
  }
};

export const authenticatelogin = async (data) => {
  try {
    return await axios.post(`${url}/login`, data);
  } catch (error) {
    console.log("error while calling login api", error);
    return error.response;
  }
};
