import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ScreenWrapper from './screenWrapper';

export default function SettingsScreen({ route, navigation }) {
    return (
        <ScreenWrapper route={route} navigation={navigation}>
            <View style={styles.container}>
                <Text>Settings!</Text>
            </View>
        </ScreenWrapper>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center'
    }
})