import logger from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit';
import MainReducer from '../main';
// import { combineReducers } from 'redux';

// const rootReducer = combineReducers({
//     MainReducer
// })

export default configureStore({
    reducer: {
        main: MainReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),

});