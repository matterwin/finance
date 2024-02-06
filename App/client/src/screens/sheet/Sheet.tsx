import React, { useState } from "react";
import { StyleSheet, Button, Text, View, Platform, StatusBar, TouchableOpacity } from "react-native";
import BottomSheetWrapper from "../../components/BottomSheetWrapper";
import SheetNavigator from "../../navigation/SheetNavigator";
import { COLORS } from "../../constants";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from 'react-native-vector-icons/Ionicons';

const VisualIcon = ({current}) => (
    <View style={[styles.circle, { backgroundColor: (current === 'Visual') ? COLORS.orange : 'transparent' }]}>
        <Icon name="barcode" size={25} color="white" />
    </View>
);

const CellIcon = ({current}) => (
    <View style={[styles.circle, { backgroundColor: (current === 'Cell') ? COLORS.orange : 'transparent' }]}>
        <Icon name="grid" size={25} color="white" />
    </View>
);

const JSONIcon = ({current}) => (
    <View style={[styles.circle, { backgroundColor: (current === 'JSON') ? COLORS.lightblue : 'transparent' }]}>
        <Icon name="code" size={25} color="white" />
    </View>
);

const Sheet = () => {
    const [current, setCurrent] = useState('Visual');

    return(
        <>
            <SheetNavigator />
            <View style={styles.floatingIcon}>
                <TouchableOpacity onPress={() => setCurrent('Visual')}>
                    <VisualIcon current={current}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setCurrent('Cell')}>
                    <CellIcon current={current}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setCurrent('JSON')}>
                    <JSONIcon current={current}/>
                </TouchableOpacity>
            </View>
            <BottomSheetWrapper />
        </>
    ); 
}

export default Sheet;

const styles = StyleSheet.create({
    floatingIcon: {
      position: 'absolute',
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
        padding: 10,
        paddingHorizontal: 8,
        borderRadius: 100,
    //   top: 100, // Adjust this value based on your layout
    //   bottom: 50%
    //   alignContent: 'center',
      right: 10, // Adjust this value based on your layot
      gap: 0,
      bottom: '10%'
    },
    circle: {
        backgroundColor: 'rgba(30, 255, 255, 0.05)',
        padding: 10,
        // paddingHorizontal: 8,
        borderRadius: 100,
    }
});