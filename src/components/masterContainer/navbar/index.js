import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function NavbarComponent() {
    return (
        <View style={styles.container}>
            <Text>Navbar</Text>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        height: 80,
        // flex: 1,
        backgroundColor: 'dodgerblue',
        alignItems: 'center',
        justifyContent: 'center',
    },
});