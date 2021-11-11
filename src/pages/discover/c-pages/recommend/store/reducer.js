import { Map } from 'immutable';
import * as actionTypes from './constants';

const defaultState = Map({
    topBanners: [],
    hotRecommends: [],
    newAlbum: []
})

export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case actionTypes.CHANGE_TOP_BNNAER:
            return state.set("topBanners", action.banners);
        case actionTypes.CHANGE_HOT_RECOMMEND:
            return state.set("hotRecommends", action.recommends);
        case actionTypes.CHANGE_NEW_ALBUM:
            return state.set("newAlbum", action.newAlbum)
        default:
            return state;
    }
}
