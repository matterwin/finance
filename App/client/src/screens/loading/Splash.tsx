import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import Center from "../../components/containers/Center";
import { StatusBar } from "expo-status-bar";

const Splash = () => {
    return(
        <Center>
            <Text>Loading ...</Text>
            <StatusBar style="auto" />
        </Center>
    );
}

export default Splash;