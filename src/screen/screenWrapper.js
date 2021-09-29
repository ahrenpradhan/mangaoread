import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { StyleSheet, View, SafeAreaView, StatusBar } from 'react-native';
import { setPage } from '../appRedux/slices/page';

import Ionicons from '@expo/vector-icons/Ionicons';

import { Input } from 'react-native-elements';

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
        <SafeAreaView style={styles.container}>
            {/* <StatusBar barStyle="light-content" backgroundColor="#6a51ae" /> */}
            <StatusBar barStyle="dark-content" backgroundColor="#ecf0f1" >hahahahs</StatusBar>
            <Input
                placeholder='Type a name'
                leftIcon={
                    <View style={{ flexDirection: 'row' }}>
                        <Ionicons name={'search-outline'} size={24} color={'white'} />
                    </View>
                }
                containerStyle={{
                    marginBottom: 0,
                    paddingVertical: 8,
                }}
                inputContainerStyle={{
                    color: '#fff',
                    borderWidth: 1,
                    borderRadius: 50,
                    paddingHorizontal: 10,
                }}
                errorStyle={{
                    display: 'none'
                }}
            />
            <View style={styles.screenContainer}>
                {children}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(10,10,10,0.7)',
        color: '#fff'
    },
    screenContainer: {
        paddingHorizontal: 10,
        flex: 1
    },
})