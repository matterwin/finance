import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Login, Register } from '../screens';
import Test from '../screens/sheet/Test';

const Stack = createStackNavigator();

function SheetNavigator() {
    return(
        <Stack.Navigator initialRouteName={"Test"}>
            <Stack.Screen name={"Test"} component={Test} options={{ headerShown: false }}/>
        </Stack.Navigator>
    );
}

export default SheetNavigator;