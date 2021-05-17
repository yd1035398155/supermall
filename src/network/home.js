import { request } from "./request";
// 请求数据
export function getHomeMultidata() {
  return request({
    url: "/home/multidata"
  });
}
