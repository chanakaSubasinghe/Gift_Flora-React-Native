import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BottomNav from '../components/BottomNav';

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <BottomNav />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
