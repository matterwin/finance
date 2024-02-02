import React from "react";
import { SafeAreaView, Button, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

const Reports = () => {
    return(
        <SafeAreaView>
            <StatusBar style="dark" />
            <Text>Test Screen</Text>
            {/* <Button onPress={() => FIREBASE_GET_AUTH.signOut()} title="Logout" /> */}
        </SafeAreaView>
    );
}

export default Reports;