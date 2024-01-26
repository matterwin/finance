import React from 'react';
import { StyleSheet, View } from 'react-native';

type Props = {
    children: JSX.Element | JSX.Element[];
}

const center = ({ children } : Props) => {
    return(
        <View style={styles.container}>
            { children }
        </View>
    );
}

export default center;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});