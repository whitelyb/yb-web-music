import request from "./request";

// 请求顶部轮播图
export function getTopBanner() {
  return request({
    url: "/banner"
  })
}