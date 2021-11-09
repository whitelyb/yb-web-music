import { Redirect } from "react-router-dom";

import YBDiscover from "../pages/discover"
import YBFriend from "../pages/friend"
import YBMine from "../pages/mine"

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
        component: YBDiscover
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