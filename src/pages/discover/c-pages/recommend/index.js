import React, { memo } from 'react'


import YBTopBanner from './c-pages/top-banner';
import HYHotRecommend from "./c-pages/hot-recommend";
import {
    RecommendWraper,
    Content,
    RecommendLeft,
    RecommendRight
} from './style';

export default memo(function YBRecommend() {
    return (
        <RecommendWraper>
            <YBTopBanner />
            <Content className="wrap-v2">
                <RecommendLeft>
                    <HYHotRecommend />
                </RecommendLeft>
                <RecommendRight></RecommendRight>
            </Content>
        </RecommendWraper>
    )
})

