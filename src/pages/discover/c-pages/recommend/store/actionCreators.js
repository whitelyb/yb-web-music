import * as actionTypes from './constants';

import {
    getTopBanner,
    getHotRecommend,
    getNewAlbum,
    getTopList
} from '@/service/recommend';

const changeBannerAction = res => ({
    type: actionTypes.CHANGE_TOP_BNNAER,
    banners: res.banners
})

const changeRecommendAction = res => ({
    type: actionTypes.CHANGE_HOT_RECOMMEND,
    recommends: res.result
})

const changeNewAlbumAction = res => ({
    type: actionTypes.CHANGE_NEW_ALBUM,
    newAlbum: res.albums
})

const changeNewListAction = res => ({
    type: actionTypes.CHANGE_NEW_LIST,
    topNewList: res.playlist
})

const changeOriginListAction = res => ({
    type: actionTypes.CHANGE_ORIGIN_LIST,
    topOriginList: res.playlist
})


const changeUpListAction = res => ({
    type: actionTypes.CHANGE_UP_LIST,
    topUpList: res.playlist
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

// 获取新碟上架数据
export const getAlbum = () => {
    return dispatch => {
        getNewAlbum(10, 0).then(res => {
            dispatch(changeNewAlbumAction(res))
        })
    }
}

// 获取榜单数据
export const getTopData = (idx) => {
    return dispatch => {
        getTopList(idx).then(res => {
            switch (idx) {
                case 0:
                    dispatch(changeNewListAction(res))
                    break;
                case 2:
                    dispatch(changeOriginListAction(res))
                    break;
                case 3:
                    dispatch(changeUpListAction(res))
                    break;
                default:
                    break;
            }

        })
    }
}