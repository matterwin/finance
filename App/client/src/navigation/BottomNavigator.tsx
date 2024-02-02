import React from 'react';
import { StyleSheet, View, ColorValue } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Reports from '../screens/reports/Reports';
import Sheet from '../screens/sheet/Sheet';
import { COLORS } from '../constants';

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
                tabBarShowLabel: false,
                tabBarActiveTintColor: COLORS.lightblue,
                tabBarInactiveTintColor: COLORS.grey,
                tabBarIcon: ({ color, focused }) => {
                    return getTabBarIcon(route.name, focused, color);
                },
                tabBarLabelStyle: {
                    fontSize: 10,
                },
                headerLeftContainerStyle: {
                    paddingLeft: 10
                },
                headerRightContainerStyle: {
                    paddingRight: 10
                },
            })}
        >
            <Tab.Screen
                name={"Sheet"}
                component={Sheet}
                options={() => ({
                    tabBarLabel: "Sheet",
                    headerShown: true,
                    headerStyle: {
                        elevation: 0, // For Android to remove shadow
                        shadowOpacity: 0, // For iOS to remove shadow
                        backgroundColor: 'transparent',
                    },
                    headerTransparent: true,
                    headerRight: () => 
                        <View style={styles.circleBg}>
                            <Icon name="notifications-outline" size={26} color={COLORS.grey} />
                        </View>
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
                        backgroundColor: COLORS.teal
                    },
                    headerTransparent: true
               })}
            />
        </Tab.Navigator>
    );
}

export default BottomNavigator;

const styles = StyleSheet.create({
    tabBarStyle: {
        position: 'absolute',
        bottom: 0,
        paddingTop: 10,
        height: 75,
        backgroundColor: '#1e4147',
        // shadowOffset: {
        //     width: 0,
        //     height: 1,
        // },
        // shadowOpacity: 0.20,
        // shadowRadius: 2,
        // elevation: 3,
    },
    focusedNavIconBox: {
        padding: 5,
        paddingBottom: 10,
        backgroundColor: COLORS.royalblue,
        borderRadius: 3
    },
    circleBg: {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        padding: 5,
        borderRadius: 100
    }
});