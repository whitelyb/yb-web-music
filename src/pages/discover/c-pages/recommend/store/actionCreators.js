import * as actionTypes from './constants';

import {
    getTopBanner,
    getHotRecommend
} from '@/service/recommend';

const changeBannerAction = res => ({
    type: actionTypes.CHANGE_TOP_BNNAER,
    banners: res.banners
})

const changeRecommendAction = res => ({
    type: actionTypes.CHANGE_HOT_RECOMMEND,
    recommends: res.result
})

// 获取推荐页面轮播图
export const getBanner = () => {
    return dispatch => {
        getTopBanner().then(res => {
            dispatch(changeBannerAction(res));
        })
    }
}

// 获取热门推荐数据
export const getRecommend = () => {
    return dispatch => {
        getHotRecommend().then(res => {
            dispatch(changeRecommendAction(res));
        })
    }
}