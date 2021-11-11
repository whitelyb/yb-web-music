import request from "./request";

// 请求顶部轮播图
export function getTopBanner() {
  return request({
    url: "/banner"
  })
}

// 请求热门推荐
export function getHotRecommend() {
  return request({
    url: "/personalized"
  })
}