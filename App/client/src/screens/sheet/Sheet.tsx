import React from "react";
import { StyleSheet, SafeAreaView, Button, Text, View } from "react-native";
import { FIREBASE_GET_AUTH } from "../../../FirebaseConfig";
import { StatusBar } from "expo-status-bar";

const Sheet = () => {
    return(
        <SafeAreaView style={styles.container}>
            <StatusBar style="dark" />
            <Text>Home Screen</Text>
            <Button onPress={() => FIREBASE_GET_AUTH.signOut()} title="Logout" /> 
        </SafeAreaView>
    );
}

export default Sheet;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#0b2226',
    },
});