import logger from 'redux-logger';
import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import MainReducer from '../slices/main';
import PageReducer from '../slices/page';
// import { combineReducers } from 'redux';

// const rootReducer = combineReducers({
//     MainReducer,
//     PageReducer
// })

export default configureStore({
    reducer: {
        main: MainReducer,
        page: PageReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),

});