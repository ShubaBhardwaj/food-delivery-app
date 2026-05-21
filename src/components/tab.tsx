import * as React from 'react';
import { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  LayoutAnimation,
  Platform,
  UIManager,
  LogBox,
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { House, Search, ShoppingBag, User } from 'lucide-react-native';

import HomeStackNavigator from '../tab/home';
import SearchScreen from '../tab/search';
import OrderScreen from '../tab/order';
import ProfileScreen from '../tab/profile';

const { width } = Dimensions.get('window');

LogBox.ignoreLogs(['setLayoutAnimationEnabledExperimental is currently a no-op']);

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

const Tab = createBottomTabNavigator();

// ─── Your pill design lives here ──────────────────────────────────────────────
function CustomTabBar({ state, navigation }: BottomTabBarProps) {

    const [activeTab, setActiveTab] = useState('home');

    const handleTabPress = (tabName: string, routeKey: string) => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setActiveTab(tabName);

        // Tell React Navigation to actually switch the screen
        const event = navigation.emit({
            type: 'tabPress',
            target: routeKey,
            canPreventDefault: true,
        });
        if (!event.defaultPrevented) {
            navigation.navigate(tabName);
        }
    };

    const tabs = [
        { name: 'home',    label: 'Home',    icon: House },
        { name: 'search',  label: 'Search',  icon: Search },
        { name: 'order',   label: 'Orders',  icon: ShoppingBag },
        { name: 'profile', label: 'Profile', icon: User },
    ];

    return (
        <View style={styles.container}>
            <View style={styles.pillContainer}>
                {tabs.map((tab) => {
                    const isActive = activeTab === tab.name;
                    const Icon = tab.icon;
                    const route = state.routes.find(r => r.name === tab.name);

                    return (
                        <TouchableOpacity
                            key={tab.name}
                            style={[styles.tabItem, isActive && styles.activeTabItem]}
                            onPress={() => handleTabPress(tab.name, route?.key ?? tab.name)}
                            activeOpacity={0.7}
                        >
                            <Icon
                                size={24}
                                color={isActive ? '#000' : '#999'}
                                fill={isActive && tab.name !== 'search' ? '#000' : 'transparent'}
                                strokeWidth={isActive ? 2.5 : 2}
                            />
                            {isActive && (
                                <Text style={styles.activeTabText}>{tab.label}</Text>
                            )}
                        </TouchableOpacity>
                    );
                })}
            </View>
        </View>
    );
}
// ──────────────────────────────────────────────────────────────────────────────

export default function TabNavigator() {
    return (
        <Tab.Navigator
            initialRouteName='home'
            screenOptions={{ headerShown: false }}
            tabBar={(props) => <CustomTabBar {...props} />}
        >
            <Tab.Screen name='home'    component={HomeStackNavigator} />
            <Tab.Screen name='search'  component={SearchScreen} />
            <Tab.Screen name='order'   component={OrderScreen} />
            <Tab.Screen name='profile' component={ProfileScreen} />
        </Tab.Navigator>
    );
}


const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 30,
        left: 0,
        right: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    pillContainer: {
        flexDirection: 'row',
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        width: width * 0.9,
        height: 70,
        borderRadius: 35,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.1,
        shadowRadius: 20,
        elevation: 5,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.5)',
    },
    tabItem: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 25,
    },
    activeTabItem: {
        backgroundColor: 'rgba(0, 0, 0, 0.05)',
    },
    activeTabText: {
        marginLeft: 6,
        color: '#000',
        fontSize: 14,
        fontWeight: '700',
    },
});
