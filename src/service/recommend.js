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

// 新碟上架
export function getNewAlbum(limit, offset) {
    return request({
        url: "/top/album",
        params: {
            limit,
            offset
        }
    })
}

// 榜单数据
export function getTopList(idx) {
    return request({
        url: "/top/list",
        params: {
            idx
        }
    })
}