import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import {
    getTopData
} from "../../store/actionCreators"

import YBThemeHeaderRCM from "@/components/theme-header-rcm";
import YBTopRanking from "@/components/top-ranking";
import { RankingWrapper } from "./style";

export default memo(function YBRankingList() {

    const { topNewList, topOriginList, topUpList } = useSelector(state => ({
        topNewList: state.getIn(["recommend", "topNewList"]),
        topOriginList: state.getIn(["recommend", "topOriginList"]),
        topUpList: state.getIn(["recommend", "topUpList"]),
    }), shallowEqual)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTopData(0));
        dispatch(getTopData(2));
        dispatch(getTopData(3));
    }, [dispatch])

    return (
        <RankingWrapper>
            <YBThemeHeaderRCM title='榜单' moreLink="/discover/ranking" />
            <div className="tops">
                <YBTopRanking info={topNewList} />
                <YBTopRanking info={topOriginList} />
                <YBTopRanking info={topUpList} />
            </div>
        </RankingWrapper>
        
    )
})
