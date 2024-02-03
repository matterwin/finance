import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Test from '../screens/sheet/Test';
import Test2 from '../screens/sheet/Test2';
import { StyleSheet, View } from 'react-native';
import { COLORS } from '../constants';
import { BlurView } from 'expo-blur';

const Tab = createMaterialTopTabNavigator();

const MenuBlur = () => {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          width: '100%',
          height: 55,
          borderRadius: 90,
          borderTopColor: 'white',
          borderBottomColor: 'white',
          overflow: 'hidden',
        }}
      >
        <BlurView
          intensity={10}
          style={{ flex: 1, backgroundColor: ' rgba(61, 53, 105, 0.4)' }}
        />
      </View>
    </View>
  );
};

function SheetNavigator() {
  return (
      <Tab.Navigator
        initialRouteName='Test'
        screenOptions={() => ({
          tabBarShowLabel: true,
          tabBarShowIcon: true,
          tabBarLabelStyle: {
            fontSize: 13
          },
          tabBarScrollEnabled: true,
          tabBarItemStyle: { width: 100, height: 45 },
          tabBarActiveTintColor: COLORS.white,
          tabBarInactiveTintColor: COLORS.grey,
          tabBarIndicatorStyle: {
            width: 30,
            left: (100 - 20) / 2,
            backgroundColor: COLORS.orange
          },
          tabBarContentContainerStyle: {
            paddingHorizontal: 0
          },
          tabBarGap: 0,
          tabBarStyle: {
              backgroundColor: COLORS.teal + 'AA',
              borderBottomWidth: 1,
              borderColor: COLORS.tealwhite,
              position: 'absolute',
          }
        })}
      >
        <Tab.Screen
          name="Test"
          component={Test}
        />
        <Tab.Screen
          name="Test1"
          component={Test2}
        />
        <Tab.Screen
          name="Test30"
          component={Test2}
        />
        <Tab.Screen
          name="Test32"
          component={Test2}
        />
        <Tab.Screen
          name="Test112"
          component={Test2}
        />
        <Tab.Screen
          name="Test2"
          component={Test2}
        />
      </Tab.Navigator>
  );
}

export default SheetNavigator;

const styles = StyleSheet.create({
    tabBar: {
        display: 'none'
    }
});
