import React from "react";
import { Button, Text, View } from "react-native";
import { FIREBASE_GET_AUTH } from "../../../FirebaseConfig";

const Home = () => {
    return(
        <View>
            <Text>Home Screen</Text>
            <Button onPress={() => FIREBASE_GET_AUTH.signOut()} title="Logout" /> 
        </View>
    );
}

export default Home;