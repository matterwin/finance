import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Test from '../screens/sheet/Test';
import Test2 from '../screens/sheet/Test2';
import { Dimensions, StyleSheet, View } from 'react-native';
import { COLORS } from '../constants';

const Tab = createMaterialTopTabNavigator();

function SheetNavigator() {
  return (
      <Tab.Navigator
        initialRouteName='Test'
        screenOptions={() => ({
          tabBarShowLabel: true,
          tabBarShowIcon: true,
          tabBarLabelStyle: {
            fontSize: 14
          },
          tabBarScrollEnabled: true,
          tabBarItemStyle: { 
            height: 45, 
            marginTop: 40,
            width: 90,
            // backgroundColor: 'red'
          },
          tabBarActiveTintColor: COLORS.white,
          tabBarInactiveTintColor: COLORS.grey,
          tabBarIndicatorStyle: {
            width: 30,
            left: (100 - 20) / 2,
            backgroundColor: COLORS.orange
          },
          tabBarContentContainerStyle: {
            paddingHorizontal: 0,
            // width: 20,
          },
          tabBarGap: 0,
          tabBarStyle: {
              width: Dimensions.get('window').width,
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
          name="+w"
          component={Test2}
        />
        <Tab.Screen
          name="+d"
          component={Test2}
        />
        <Tab.Screen
          name="+"
          component={Test2}
        />
      </Tab.Navigator>
  );
}

export default SheetNavigator;

const styles = StyleSheet.create({
});
