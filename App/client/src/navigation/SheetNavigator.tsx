import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Test from '../screens/sheet/Test';
import Test2 from '../screens/sheet/Test2';
import { StyleSheet, View } from 'react-native';
import { COLORS } from '../constants';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialTopTabNavigator();

const FloatingIcon = () => (
  <View style={styles.floatingIcon}>
    <Icon name="person" size={30} color="grey" />
  </View>
);

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
          tabBarItemStyle: { width: 100, height: 45, marginTop: 40},
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
  floatingIcon: {
      position: 'absolute',
      top: 40, // Adjust this value based on your layout
      right: 20, // Adjust this value based on your layout
    },
});
