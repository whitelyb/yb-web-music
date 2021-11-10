import * as actionTypes from './constants';

import {
    getTopBanner
} from '@/service/recommend';

const changeBannerAction = res => ({
    type: actionTypes.CHANGE_TOP_BNNAER,
    banners: res.banners
})

// 获取推荐页面轮播图
export const getBanner = () => {
    return dispatch => {
        getTopBanner().then(res => {
            dispatch(changeBannerAction(res));
        })
    }
}