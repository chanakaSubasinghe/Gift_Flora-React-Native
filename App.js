import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import BottomNav from './src/components/BottomNav';
import AboutScreen from './src/screens/member2/AboutScreen';
import ForgotPasswordScreen from './src/screens/member2/ForgotPasswordScreen';
import LoginScreen from './src/screens/member2/LoginScreen';
import RegisterScreen from './src/screens/member2/RegisterScreen';
import HomeScreen from './src/screens/member3/HomeScreen';

// importing components
export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeAreaView} />

      {/* --- Member 1 ---  */}

      {/* <HomeScreen /> */}


      {/* --- Member 2 --- */}

      {/* <AboutScreen /> */}
      {/* <RegisterScreen /> */}
      {/* <LoginScreen /> */}
      {/* <ForgotPasswordScreen /> */}


      {/* --- Member 3 --- */}


      {/* --- Member 4 --- */}

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


