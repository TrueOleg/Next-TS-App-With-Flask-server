import axios, { AxiosRequestConfig } from "axios";
import { LoginInputs } from "../pages/login";
import { AuthToken } from "./auth_token";
import { catchAxiosError } from "./error";

type errorMessage = string

export const postLogin = async (inputs: LoginInputs): Promise<errorMessage | void> => {
  const data = new URLSearchParams(inputs);
  const res: any = await post("/login", data).catch(catchAxiosError);
  console.log('==========', res);
  if (res.error) {
    return res.error;
  }
  if (res.data && res.data.token) {
    alert(`this is my token: (${res.data.token})`);
    return;
  }
  return "Something unexpected happened!";
};

// a base configuration we can extend from
const baseConfig: AxiosRequestConfig = {
  baseURL: "http://localhost:5000",
};

const post = (url: string, data: URLSearchParams) => {
  return axios.post(url, data, baseConfig).catch(catchAxiosError);
};