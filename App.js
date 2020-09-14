import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import BottomNav from './src/components/BottomNav';
import HomeScreen from './src/screens/member3/HomeScreen';

// importing components
export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeAreaView} />
      <HomeScreen />
      <BottomNav />
    </View>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: '#5f4b8bff'
  },
  container: {
    flex: 1
  }
});


