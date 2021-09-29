import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { colorTheme } from '../appRedux/slices/main';
import template1 from './themes/template1';

const StyleSheetWrapper = (props) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(colorTheme({
            theme: template1,
            type: 'set'
        }))
    }, [])
    return (
        <>{props.children}</>
    )
}

export default StyleSheetWrapper;