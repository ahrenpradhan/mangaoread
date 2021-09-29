import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setPage } from '../appRedux/slices/page';

export default function ScreenWrapper({ navigation, route, children }) {
    const dispatch = useDispatch();
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            // The screen is focused
            // Call any action
            dispatch(setPage({ page: route.name }));
        });

        // Return the function to unsubscribe from the event so it gets removed on unmount
        return unsubscribe;
    }, [ route ]);
    return (
        <>{children}</>
    );
}
