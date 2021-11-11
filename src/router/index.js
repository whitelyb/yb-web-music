import { lazy } from "react";
import { Redirect } from "react-router-dom";

// 懒加载方式 （用这种方式会使打包的文件生成多个 js 文件）
const YBDiscover = lazy(_ => import("../pages/discover"));
const YBAlbum = lazy(_ => import("../pages/discover/c-pages/album"));
const YBDjradio = lazy(_ => import("../pages/discover/c-pages/djradio"));
const YBRanking = lazy(_ => import("../pages/discover/c-pages/ranking"));
const YBRecommend = lazy(_ => import("../pages/discover/c-pages/recommend"));
const YBSinger = lazy(_ => import("../pages/discover/c-pages/singer"));
const YBSongs = lazy(_ => import("../pages/discover/c-pages/songs"));


const YBFriend = lazy(_ => import("../pages/friend"));
const YBMine = lazy(_ => import("../pages/mine"));

// import YBDiscover from "../pages/discover"
// import YBAlbum from "../pages/discover/c-pages/album"
// import YBDjradio from "../pages/discover/c-pages/djradio"
// import YBRanking from "../pages/discover/c-pages/ranking"
// import YBRecommend from "../pages/discover/c-pages/recommend"
// import YBSinger from "../pages/discover/c-pages/singer"
// import YBSongs from "../pages/discover/c-pages/songs"

// import YBFriend from "../pages/friend"
// import YBMine from "../pages/mine"

const routes = [
    {
        path: "/",
        exact: true,
        render: () => (
            <Redirect to="/discover"/>
        )
    },
    {
        path: "/discover",
        component: YBDiscover,
        routes: [
            {
                path: "/discover",
                exact: true,
                render: () => (
                    <Redirect to="/discover/recommend" />
                )
            },
            {
                path: "/discover/album",
                component: YBAlbum
            },
            {
                path: "/discover/djradio",
                component: YBDjradio
            },
            {
                path: "/discover/ranking",
                component: YBRanking
            },
            {
                path: "/discover/recommend",
                component: YBRecommend
            },
            {
                path: "/discover/singer",
                component: YBSinger
            },
            {
                path: "/discover/songs",
                component: YBSongs
            }
        ]
    },
    {
        path: "/friend",
        component: YBFriend
    },
    {
        path: "/mine",
        component: YBMine
    },
];

export default routes;