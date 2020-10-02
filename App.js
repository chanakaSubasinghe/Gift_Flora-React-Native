import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import BottomNav from './src/components/BottomNav';
import AboutScreen from './src/screens/member2/AboutScreen';
import ForgotPasswordScreen from './src/screens/member2/ForgotPasswordScreen';
import LoginScreen from './src/screens/member2/LoginScreen';
import RegisterScreen from './src/screens/member2/RegisterScreen';
import HomeScreen from './src/screens/member3/HomeScreen';
import MenuScreen from './src/screens/member3/MenuScreen';
import PrivacyScreen from './src/screens/member3/PrivacyScreen';
import ViewItemScreen from './src/screens/member3/ViewItemScreen';
import MyAccountScreen from './src/screens/member1/MyAccountScreen';
import MyAddressScreen from './src/screens/member1/MyAddressScreen';
import AddAddressScreen from './src/screens/member1/AddAddressScreen';
import EditAddressScreen from './src/screens/member1/EditAddressScreen';
import Navigator from './src/routes/Stack'

// importing components
export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeAreaView} />

      <Navigator />

      {/* --- Member 1 ---  */}
      {/* <MyAccountScreen /> */}
      {/* <MyAddressScreen /> */}
      {/* <AddAddressScreen /> */}
      {/* <EditAddressScreen /> */}

      {/* --- Member 2 --- */}
      {/* 
      <AboutScreen /> */}
      {/* <RegisterScreen /> */}
      {/* <LoginScreen /> */}
      {/* <ForgotPasswordScreen /> */}


      {/* --- Member 3 --- */}
      {/* <HomeScreen /> */}
      {/* <ViewItemScreen /> */}
      {/* <PrivacyScreen /> */}
      {/* <MenuScreen /> */}

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


