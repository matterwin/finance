import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../screens';

const Tab = createBottomTabNavigator();

function Bottomnavigator() {

    return (
        <Tab.Navigator 
            initialRouteName={"home"}
        >
            <Tab.Screen
                name={"Home"}
                component={Home}
            />
        </Tab.Navigator>
    );
}

export default Bottomnavigator;

const styles = StyleSheet.create({
});