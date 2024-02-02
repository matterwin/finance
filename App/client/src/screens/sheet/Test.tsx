import React from "react";
import { SafeAreaView, Button, Text, View, StyleSheet} from "react-native";
import { StatusBar } from "expo-status-bar";

const Test = () => {
    return(
        <SafeAreaView>
            <View style={[styles.container, { paddingTop: 50 }]}>
            <StatusBar style="dark" />
            <Text>Test Screen</Text>
            {/* <Button onPress={() => FIREBASE_GET_AUTH.signOut()} title="Logout" /> */}
            </View>
        </SafeAreaView>
    );
}

export default Test;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#0b2226',
    },
});