import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, LayoutAnimation, Platform, UIManager, LogBox } from 'react-native';
import { House, Search, ShoppingBag, User } from 'lucide-react-native';

const { width } = Dimensions.get('window');

LogBox.ignoreLogs(['setLayoutAnimationEnabledExperimental is currently a no-op']);

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function BottomTab() {
  const [activeTab, setActiveTab] = useState('Home');

  const tabs = [
    { name: 'Home', icon: House },
    { name: 'Search', icon: Search },
    { name: 'Orders', icon: ShoppingBag },
    { name: 'Profile', icon: User },
  ];

  const handleTabPress = (tabName: string) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setActiveTab(tabName);
  };

  return (
    <View style={styles.container}>
      <View style={styles.pillContainer}>
        {tabs.map((tab) => {
          const isActive = activeTab === tab.name;
          const Icon = tab.icon;

          return (
            <TouchableOpacity
              key={tab.name}
              style={[
                styles.tabItem,
                isActive && styles.activeTabItem
              ]}
              onPress={() => handleTabPress(tab.name)}
              activeOpacity={0.7}
            >
              <Icon 
                size={24} 
                color={isActive ? "#000" : "#999"} 
                fill={isActive ? (tab.name === 'Search' ? "transparent" : "#000") : "transparent"} 
                strokeWidth={isActive ? 2.5 : 2}
              />
              {isActive && (
                <Text style={styles.activeTabText}>{tab.name}</Text>
              )}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
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
