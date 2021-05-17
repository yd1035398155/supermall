import axios from "axios";

export function request(config) {
  const instance = axios.create({
    baseURL: "http://152.136.185.210:7878/api/m5",
    timeout: 5000
  });
  instance.interceptors.request.use(
    req => {
      return req;
    },
    err => {
      console.log(err);
    }
  );
  instance.interceptors.response.use(
    res => {
      return res;
    },
    err => {
      console.log(err);
    }
  );
  // 3.发送网络请求
  return instance(config);
}
