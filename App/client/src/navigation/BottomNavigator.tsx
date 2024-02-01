import React from 'react';
import { StyleSheet, View, ColorValue } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Reports from '../screens/reports/Reports';
import Sheet from '../screens/sheet/Sheet';
import Folders from '../screens/folders/Folders';

const Tab = createBottomTabNavigator();

const getTabBarIcon = (routeName: String, focused: boolean, color: ColorValue) => {
    let iconName;

    if(routeName === "Sheet") iconName = focused ? 'wallet' : 'wallet';
    if(routeName === "Reports") iconName = focused ? 'calendar' : 'calendar';
    if(routeName === "Folders") iconName = focused ? 'folder-open' : 'folder';

    if(focused){
        return (
            <View style={styles.focusedNavIconBox}>
                <Icon name={iconName || 'defaultIconName'} size={30} color={color || undefined} />
            </View>
        );
    }

    return <Icon name={iconName || 'defaultIconName'} size={30} color={color || undefined} />;
};

function BottomNavigator() {

    return (
        <Tab.Navigator 
            initialRouteName={"home"}
            screenOptions={({ route }) => ({
                tabBarStyle: {
                    ...styles.tabBarStyle
                },
                tabBarActiveTintColor: 'red',
                tabBarIcon: ({ color, focused }) => {
                    return getTabBarIcon(route.name, focused, color);
                },
                tabBarLabelStyle: {
                    fontSize: 10,
                },
            })}
        >
            <Tab.Screen
                name={"Sheet"}
                component={Sheet}
                options={() => ({
                    tabBarLabel: "Sheet",
                    headerShown: false,
                    headerStyle: {
                        elevation: 0, // For Android to remove shadow
                        shadowOpacity: 0, // For iOS to remove shadow
                    },
               })}
            />
            <Tab.Screen
                name={"Folders"}
                component={Folders}
                options={() => ({
                    headerShown: false,
                    headerStyle: {
                        elevation: 0, // For Android to remove shadow
                        shadowOpacity: 0, // For iOS to remove shadow
                    },
               })}
            />
            <Tab.Screen
                name={"Reports"}
                component={Reports}
                options={() => ({
                    headerShown: false,
                    headerStyle: {
                        elevation: 0, // For Android to remove shadow
                        shadowOpacity: 0, // For iOS to remove shadow
                    },
               })}
            />
        </Tab.Navigator>
    );
}

export default BottomNavigator;

const styles = StyleSheet.create({
    tabBarStyle: {
        position: 'absolute',
        right: 10,
        left: 10,
        bottom: 30,
        height: 75,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 2,
        elevation: 3,
    },
    focusedNavIconBox: {
        padding: 5,
        paddingBottom: 10,
        backgroundColor: 'rgba(0, 0, 255, 0.3)',
        borderRadius: 3
    }
});