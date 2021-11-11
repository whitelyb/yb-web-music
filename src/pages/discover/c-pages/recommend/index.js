import React, { memo } from 'react'


import YBTopBanner from './c-pages/top-banner';
import YBHotRecommend from "./c-pages/hot-recommend";
import YBNewAlbum from "./c-pages/new-album";
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
                    <YBHotRecommend />
                    <YBNewAlbum />
                </RecommendLeft>
                <RecommendRight></RecommendRight>
            </Content>
        </RecommendWraper>
    )
})

