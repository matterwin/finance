import React from "react";
import { SafeAreaView, Button, Text, View, StyleSheet, ScrollView} from "react-native";

const Test = () => {
    return(
            <ScrollView style={[styles.container, { paddingTop: 50 }]}>
            <Text style={{ color: 'red' }}>Test Screen</Text>
            {/* <Button onPress={() => FIREBASE_GET_AUTH.signOut()} title="Logout" /> */}
            </ScrollView>
    );
}

export default Test;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#0b2226',
    },
});