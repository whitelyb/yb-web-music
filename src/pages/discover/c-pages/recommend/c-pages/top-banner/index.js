import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { getBanner } from '../../store/actionCreators';

import {
    BannerWrapper,
    BannerLeft,
    BannerRight,
    BannerControl
} from './style';

export default memo(function YBTopBanner() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBanner());
    }, [dispatch])

    return (
        <BannerWrapper>
            <BannerLeft></BannerLeft>
            <BannerRight></BannerRight>
            <BannerControl>
                <div className="btn left"></div>
                <div className="btn right"></div>
            </BannerControl>
        </BannerWrapper>
    )
})
