import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function HomeNav() {
    return (
        <View style={styles.container}>
            <View style={styles.navBar} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    navBar: {
        backgroundColor: '#fc5c65',
        width: '100%',
        height: 80
    }
});
