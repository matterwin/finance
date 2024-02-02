import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Test from '../screens/sheet/Test';
import Test2 from '../screens/sheet/Test2';
import { StyleSheet } from 'react-native';

const Tab = createMaterialTopTabNavigator();

function SheetNavigator() {
  return (
    <Tab.Navigator
      initialRouteName='Test'
      screenOptions={() => ({
        tabBarShowLabel: false,
        tabBarShowIcon: false,
        tabBarStyle: {
            height: 0,
            backgroundColor: 'transparent'
        }
      })}
    >
      <Tab.Screen
        name="Test"
        component={Test}
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
