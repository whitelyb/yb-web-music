import { Map } from 'immutable';
import * as actionTypes from './constants';

const defaultState = Map({
    topBanners: []
})

export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case actionTypes.CHANGE_TOP_BNNAER:
            return state.set("topBanners", action.banners);
        default:
            return state;
    }
}