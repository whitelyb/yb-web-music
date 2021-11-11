import React, { memo, useEffect, useRef } from 'react';
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { getAlbum } from "../../store/actionCreators"

import { Carousel } from "antd";
import { AlbumWrapper } from "./style";
import YBThemeHeaderRCM from "@/components/theme-header-rcm";
import YBAlbumCover from "@/components/album-cover";
export default memo(function YBNewAlbum() {

    const { newAlbum } = useSelector(state => ({
        newAlbum: state.getIn(["recommend", "newAlbum"])
    }), shallowEqual)
    const dispatch = useDispatch();

    const carouselRef = useRef();
    useEffect(() => {
        dispatch(getAlbum());
    }, [dispatch])

    return (
        <AlbumWrapper>
            <YBThemeHeaderRCM 
                title="新碟上架"
                moreLink="/discover/album"
            />
            <div className="content">
                <div className="arrow arrow-left sprite_02" onClick={e => carouselRef.current.prev()}></div>
                <div className="album">
                    <Carousel dots={false} ref={carouselRef}>
                        {
                            [0, 1].map(item => {
                                return (
                                    <div className="page" key={item}>
                                        {
                                            newAlbum.slice(item*5, (item+1)*5).map(item => {
                                                return <YBAlbumCover key={item.id} info={item}/>
                                            })
                                        }
                                    </div>
                                )
                            })
                        }
                    </Carousel>
                </div>
                <div className="arrow arrow-right sprite_02" onClick={e => carouselRef.current.next()}></div>
            </div>
        </AlbumWrapper>
    )
})
