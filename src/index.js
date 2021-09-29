import React, { useState, useEffect } from 'react';
import { Provider, useDispatch } from "react-redux";

import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
import { init } from './appRedux/slices/main';
import AppNavigationContainer from './navigation';
import _ from 'lodash';

const MainContainer = () => {
    const dispatch = useDispatch();
    const [ state, setState ] = useState({
        orientation: null,
        dimension: null,
    })
    const orientation = useDeviceOrientation();
    const dimension = useDimensions();
    useEffect(() => {
        if (!_.isEqual({ orientation, dimension }, state)) {
            setState({
                orientation, dimension
            })
        }
    }, [ orientation, dimension ])
    useEffect(() => {
        dispatch(init({ ...state }));
    }, [ , state ])
    return <AppNavigationContainer />
}

import StyleSheetWrapper from './stylesheet';
import { ThemeProvider } from 'react-native-elements';
import { StatusBar } from 'expo-status-bar';
import store from './appRedux/stores';

const MainApp = () => {
    return (
        <Provider store={store} >
            <ThemeProvider >
                <StyleSheetWrapper>
                    <MainContainer />
                </StyleSheetWrapper>
                <StatusBar style="auto" />
            </ThemeProvider >
        </Provider>
    );
}

export default MainApp;