import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { getRecommend } from '../../store/actionCreators';

import { RecommendWrapper } from "./style";
import YBThemeHeaderRCM from "@/components/theme-header-rcm";
import YBThemeCover from "@/components/theme-cover";

export default memo(function YBHotRecommend() {
    const dispatch = useDispatch();

    const { recommends } = useSelector(state => ({
        recommends: state.getIn(["recommend", "hotRecommends"])
    }), shallowEqual)

    useEffect(() => {
        dispatch(getRecommend())
    }, [dispatch])

    return (
        <RecommendWrapper>
            <YBThemeHeaderRCM 
                title="热门推荐" 
                keywords={["华语", "流行", "摇滚", "民谣", "电子"]} 
                moreLink="/discover/songs" 
            />
            <div className="recommend-list">
                {
                    recommends.slice(0, 8).map(item => {
                        return (
                            <YBThemeCover info={item} key={item.id} />
                        )
                    })
                }
            </div>
        </RecommendWrapper>
    )
})
