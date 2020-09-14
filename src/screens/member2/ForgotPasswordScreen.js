import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function ForgotPasswordScreen() {
    return (
        <View style={{ marginHorizontal: 20, top: Platform.OS === 'android' && StatusBar.currentHeight }}>

            <Text style={{ fontSize: 20, marginTop: 10 }}>Back</Text>

            <View style={{ alignItems: 'center', marginTop: 30 }}>
                <Text style={{ fontSize: 30 }}>Forgot your password ?</Text>

                <View style={{ width: 150, height: 150, backgroundColor: 'lightblue', marginTop: 10 }}></View>

                <Text style={{ marginTop: 40, fontSize: 20 }}>Please enter your email address to reset your password ?</Text>

            </View>
            <View>
                <Text style={{ fontSize: 20, marginTop: 30 }}>Email</Text>
                <View style={{ height: 40, backgroundColor: 'lightgreen', marginTop: 10 }}></View>
            </View>

            <View style={{ height: 40, backgroundColor: 'lightpink', marginTop: 40 }}>
                <Button title="RESET" onPress={() => console.log('reset')} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({});
