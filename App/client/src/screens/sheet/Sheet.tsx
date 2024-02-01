import React from "react";
import { StyleSheet, SafeAreaView, Button, Text, View } from "react-native";
import { FIREBASE_GET_AUTH } from "../../../FirebaseConfig";
import { StatusBar } from "expo-status-bar";
import BottomSheetWrapper from "../../components/BottomSheetWrapper";

const Sheet = () => {
    return(
        <SafeAreaView style={styles.container}>
            <StatusBar style="light" />
            <Text>Home Screen</Text>
            <Button onPress={() => FIREBASE_GET_AUTH.signOut()} title="Logout" />
            <BottomSheetWrapper />
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