import React, { memo } from 'react'

import store from './store'

import { Provider } from 'react-redux';
import YBMain from "./pages/main";

export default memo(function App() {
    return (
        <Provider store={store}>
            <YBMain />
        </Provider>
    )
})

