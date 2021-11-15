import { Map } from 'immutable';
import * as actionTypes from './constants';

const defaultState = Map({
    topBanners: [],
    hotRecommends: [], // 热门推荐
    newAlbum: [], // 新碟上架
    topNewList: [],
    topOriginList: [],
    topUpList: []
})

export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case actionTypes.CHANGE_TOP_BNNAER:
            return state.set("topBanners", action.banners);
        case actionTypes.CHANGE_HOT_RECOMMEND:
            return state.set("hotRecommends", action.recommends);
        case actionTypes.CHANGE_NEW_ALBUM:
            return state.set("newAlbum", action.newAlbum);
        case actionTypes.CHANGE_NEW_LIST:
            return state.set("topNewList", action.topNewList);
        case actionTypes.CHANGE_ORIGIN_LIST:
            return state.set("topOriginList", action.topOriginList);
        case actionTypes.CHANGE_UP_LIST:
            return state.set("topUpList", action.topUpList);
        default:
            return state;
    }
}
