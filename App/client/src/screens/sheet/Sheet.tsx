import React from "react";
import { StyleSheet, SafeAreaView, Button, Text, View, Platform } from "react-native";
import BottomSheetWrapper from "../../components/BottomSheetWrapper";
import SheetNavigator from "../../navigation/SheetNavigator";
import { COLORS } from "../../constants";

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
      backgroundColor: 'transparent',
    },
});