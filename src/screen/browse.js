import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import ScreenWrapper from './screenWrapper';

export default function BrowseScreen({ route, navigation }) {
    // useEffect(() => {
    //     console.log('haha')
    // }, [])
    return (
        <ScreenWrapper route={route} navigation={navigation}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Browse!</Text>
            </View>
        </ScreenWrapper>
    );
}