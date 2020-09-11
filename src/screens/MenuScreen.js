import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BottomNav from '../components/BottomNav';


export default function MenuScreen() {
    return (
        <View style={styles.container}>
            <Text>Menu Screen</Text>
            <BottomNav />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
