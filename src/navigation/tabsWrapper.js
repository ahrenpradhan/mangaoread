import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function TabsWrapper({ tabData }) {
    return tabData !== null
        ? (
            <NavigationContainer>
                <Tab.Navigator
                    screenOptions={tabData.screenOptions || null}>
                    {tabData.list.map((tab_list_item, index) => (
                        <Tab.Screen
                            key={tab_list_item.name + '_' + index}
                            name={tab_list_item.name}
                            component={tab_list_item.component}
                        />
                    ))}
                </Tab.Navigator>
            </NavigationContainer>
        )
        : (<View><Text>loading</Text></View>)
        ;
}