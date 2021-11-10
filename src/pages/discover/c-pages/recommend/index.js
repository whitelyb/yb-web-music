import React, { memo } from 'react'


import YBTopBanner from './c-pages/top-banner'
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
                <RecommendLeft></RecommendLeft>
                <RecommendRight></RecommendRight>
            </Content>
        </RecommendWraper>
    )
})

