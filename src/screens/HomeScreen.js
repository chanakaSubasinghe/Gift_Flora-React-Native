import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeNav from '../components/HomeNav';

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <HomeNav />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
