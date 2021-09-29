import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function MainScreen() {
    return (
        <View style={styles.container}>
            <Text>Welcome heheheheheheh</Text>
            <Text>Welcome heheheheheheh</Text>
            <Text>Welcome heheheheheheh</Text>
            <Text>Welcome heheheheheheh</Text>
            <Text>Welcome heheheheheheh</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'dodgerblue',
        alignItems: 'center',
        justifyContent: 'center',
    },
});