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
                            ? 'book'
                            : 'book-outline';
                        break;
                    case 'Recents':
                        iconName = focused ? 'time' : 'time-outline';
                        break;
                    case 'Browse':
                        iconName = focused ? 'browsers' : 'browsers-outline';
                        break;
                    default:
                        iconName = focused ? 'list-circle-outline' : 'browsers-outline';
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