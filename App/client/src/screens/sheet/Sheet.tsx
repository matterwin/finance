import React from "react";
import { StyleSheet, SafeAreaView, Button, Text, View, Platform } from "react-native";
import { StatusBar } from "expo-status-bar";
import BottomSheetWrapper from "../../components/BottomSheetWrapper";
import SheetNavigator from "../../navigation/SheetNavigator";

const Sheet = () => {
    return(
       <SafeAreaView style={styles.container}>
            {/* <View style={[styles.container, { paddingTop: 50 }]}> */}
                <SheetNavigator />
                <BottomSheetWrapper />
            {/* </View> */}
        </SafeAreaView>
    ); 
}

export default Sheet;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#0b2226',
      marginBottom: 40
    },
});