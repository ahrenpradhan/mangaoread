import React from 'react';
import { Text, View } from 'react-native';
import ScreenWrapper from './screenWrapper';

export default function RecentScreen({ route, navigation }) {
    return (
        <ScreenWrapper route={route} navigation={navigation}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Recents!</Text>
            </View>
        </ScreenWrapper>
    );
}