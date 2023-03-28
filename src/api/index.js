import configs from "@/configs";
import axios from "axios";

const axiosApi = axios.create({
  baseURL: configs.baseURL,
});
axiosApi.interceptors.request.use(
  function (config) {
    config.headers.toknebyClass = configs.tokenbyClass;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
axiosApi.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axiosApi;
