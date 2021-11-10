import styled from 'styled-components';

import downloadImg from "@/assets/img/download.png";
import banner_sprite from "@/assets/img/banner_sprite.png";

export const BannerWrapper = styled.div`
    background: url(${props => props.bgImage}) center center/6000px;

    .banner {
        height: 270px;
        display: flex;
        position: relative;
    }
`

export const BannerLeft = styled.div`
    .dot-class {
        li {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 20px;
            height: 20px;
            margin: 0 3px;
            cursor: pointer;
            button {
                position: relative;
                width: 100%;
                height: 100%;
                border-radius: 50%;
                background: transparent;
                opacity: .7;
                &::after {
                    content: "";
                    position: absolute;
                    width: 6px;
                    height: 6px;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    background: #fff;
                    border-radius: 50%;
                }
            }
            &:hover button::after {
                background: red;
            }
            
        }
        .slick-active {
            width: 20px!important;
            button {
                background: transparent!important;
                &::after {
                    background: red;
                }
            }
        }
    }

    width: 730px;

    .banner-item {
        overflow: hidden;
        height: 270px;
        .image {
            width: 100%;
        }
    }
`

export const BannerRight = styled.a.attrs({
    href: "https://music.163.com/#/download",
    target: "_blank"
})`
    width: 254px;
    height: 270px;
    background: url(${downloadImg});
`

export const BannerControl = styled.div`
    .btn {
        position: absolute;
        width: 37px;
        height: 63px;
        top: 50%;
        transform: translateY(-50%);
        background-image: url(${banner_sprite});
        background-color: transparent;
        cursor: pointer;

        &:hover {
            background-color: rgba(0, 0, 0, .1);
        }
    }

    .left {
        left: -68px;
        background-position: 0 -360px;
    }

    .right {
        right: -68px;
        background-position: 0 -508px;
    }
`
