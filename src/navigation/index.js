import React from 'react';
import TabsWrapper from './tabsWrapper';
import Ionicons from '@expo/vector-icons/Ionicons';
import LibraryScreen from '../screen/library';
import BrowseScreen from '../screen/browse';
import RecentsScreen from '../screen/recents';

export default function AppNavigationContainer() {
    const tabData = {
        screenOptions: ({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                switch (route.name) {
                    case 'Library':
                        iconName = focused
                            ? 'ios-information-circle'
                            : 'ios-information-circle-outline';
                        break;
                    case 'Browse':
                    case 'Recents':
                    default:
                        iconName = focused ? 'list-circle-outline' : 'list-outline';
                        break;
                }
                return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
        }),
        list: [
            {
                name: 'Library',
                component: LibraryScreen
            }, {
                name: 'Recents',
                component: RecentsScreen
            }, {
                name: 'Browse',
                component: BrowseScreen
            }
        ]
    };
    return (
        <TabsWrapper
            tabData={tabData}
        />
    )
}