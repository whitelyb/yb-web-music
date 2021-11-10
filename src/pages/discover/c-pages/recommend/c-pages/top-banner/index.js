import React, { memo, useEffect, useRef, useState, useCallback } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { getBanner } from '../../store/actionCreators';

import { Carousel } from "antd";
import {
    BannerWrapper,
    BannerLeft,
    BannerRight,
    BannerControl
} from './style';

export default memo(function YBTopBanner() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const dispatch = useDispatch();
    const { banners } = useSelector(state => ({
        banners: state.getIn(["recommend", "topBanners"])
    }), shallowEqual)

    const bannerRef = useRef();
    useEffect(() => {
        dispatch(getBanner());
    }, [dispatch])

    const bannerChange = useCallback((from, to) => {
        setTimeout(() => {
            setCurrentIndex(from);
        }, 0)
    },[])

    // 获取轮播图背景图片
    const bgImage = banners[currentIndex] && (banners[currentIndex].imageUrl + "?imageView&blur=40x20");

    return (
        <BannerWrapper bgImage={bgImage}>
            <div className="banner wrap-v2">
                <BannerLeft>
                    <Carousel effect="fade" beforeChange={bannerChange} ref={bannerRef} dots={{className: "dot-class"}}>
                        {
                            banners.map(item => {
                                return (
                                    <div className="banner-item" key={item.imageUrl}>
                                        <img className="image" src={item.imageUrl} alt={item.typeTitle} />
                                    </div>
                                )
                            })
                        }
                    </Carousel>
                </BannerLeft>
                <BannerRight></BannerRight>
                <BannerControl className="control">
                    <div className="btn left" onClick={e => bannerRef.current.prev()}></div>
                    <div className="btn right" onClick={e => bannerRef.current.next()}></div>
                </BannerControl>
            </div>
        </BannerWrapper>
    )
})
