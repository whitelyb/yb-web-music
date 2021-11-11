import React, { memo, Suspense } from 'react';
import { renderRoutes } from "react-router-config";

import routes from "../../router";

import { HashRouter } from 'react-router-dom'; 
import YBAppHeader from "../../components/app-header";
import YBAppFooter from "../../components/app-footer";

export default memo(function YBMain() {
    return (
        <HashRouter>
            <YBAppHeader />
            <Suspense fallback={<div>Loading...</div>}>
                {renderRoutes(routes)}
            </Suspense>
            <YBAppFooter />
        </HashRouter>
    )
})
