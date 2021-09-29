import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ScreenWrapper from './screenWrapper';





export default function BrowseScreen({ route, navigation }) {
    // useEffect(() => {
    //     console.log('haha')
    // }, [])
    return (
        <ScreenWrapper route={route} navigation={navigation}>
            <View style={styles.container}>
                <Text>Browse!</Text>
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