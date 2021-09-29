import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NavbarComponent from './navbar';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function MasterContainer({
    headerComponent,
    bodyComponent,
}) {

    return (
        <>
            <SafeAreaView>
                <View style={styles.container}>
                    {headerComponent && headerComponent}
                    {bodyComponent && bodyComponent}
                    <NavbarComponent />
                </View>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        // display: 'flex'
        height: '100%',
        // flex: 1,
        // backgroundColor: 'dodgerblue',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
});