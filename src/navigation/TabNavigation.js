import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
// import { faCompass } from '@fortawesome/free-regular-svg-icons';
import {
    faBagShopping,
    faCircleInfo,
    faHome,
    faMapMarkerAlt,
    faUser
} from '@fortawesome/free-solid-svg-icons';

import {
    HomeScreen,
    UserScreen,
    ShopScreen,
    InfoScreen,
    RideScreen
} from '../screens';

const BottomTabBar = createBottomTabNavigator();

const BottomNavigationBar= () => {
    return (
        <BottomTabBar.Navigator
            initialRouteName="Queue"
            screenOptions={{
                tabBarActiveTintColor: '#55AF51',
                tabBarInactiveBackgroundColor: '#f5f5f5',
                tabBarActiveBackgroundColor: '#f5f5f5',
                tabBarInactiveTintColor: 'rgba(85, 175, 81, 0.4)',
                tabBarStyle: { backgroundColor: 'rgb(211,211,211)' },
                headerStyle: { backgroundColor: '#55AF51' },
                headerTitleStyle: { color: 'white', fontSize: 18 },
                headerTitle: 'Ruscombe Park'
            }}>
            <BottomTabBar.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color }) => {
                        return (
                            <FontAwesomeIcon icon={faHome} style={{ color }} />
                        );
                    }
                }}
            />
            <BottomTabBar.Screen
                name="Ride"
                component={RideScreen}
                options={{
                    tabBarIcon: ({ color }) => {
                        return (
                            <FontAwesomeIcon
                                icon={faMapMarkerAlt}
                                style={{ color }}
                            />
                        );
                    }
                }}
            />
            <BottomTabBar.Screen
                name="Shop"
                component={ShopScreen}
                options={{
                    tabBarIcon: ({ color }) => {
                        return (
                            <FontAwesomeIcon
                                icon={faBagShopping}
                                style={{ color }}
                            />
                        );
                    }
                }}
            />
            <BottomTabBar.Screen
                name="Me"
                component={UserScreen}
                options={{
                    tabBarIcon: ({ color }) => {
                        return (
                            <FontAwesomeIcon icon={faUser} style={{ color }} />
                        );
                    }
                }}
            />
            <BottomTabBar.Screen
                name="Info"
                component={InfoScreen}
                options={{
                    tabBarIcon: ({ color }) => {
                        return (
                            <FontAwesomeIcon
                                icon={faCircleInfo}
                                style={{ color }}
                            />
                        );
                    }
                }}
            />
        </BottomTabBar.Navigator>
    );
};

export default BottomNavigationBar;