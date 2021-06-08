import axios, { AxiosInstance, Method } from 'axios';
import {BASE_URL, BASE_HEADER} from "../../config/config.json"

const token = window.sessionStorage.getItem("dorandoran_token")
const ACCESS_TOKEN_HEADER_NAME = "Authorization"

interface requestCustomAxiosType {
  method: Method;
  url: string;
  body?: object;
  header?: object;
}

export const methodType = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
};

export const requestCustomAxios = async (
  {method, url, body, header} : requestCustomAxiosType
) => {
  try {
    const response = await axios({
      baseURL : BASE_URL,
      url: url,
      data: body,
      method: method,
      headers: {
        ...BASE_HEADER,
        [ACCESS_TOKEN_HEADER_NAME]: token || "",
        ...header
      }
    })
    return response;
  } catch (error) {
    throw error
  }
}