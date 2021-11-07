import YBDiscover from "../pages/discover"
import YBFriend from "../pages/friend"
import YBMine from "../pages/mine"

const routes = [
    {
        path: "/",
        exact: true,
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