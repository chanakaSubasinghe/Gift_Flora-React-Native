import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function LoginScreen() {
    return (
        <View style={{ marginHorizontal: 20, top: Platform.OS === 'android' && StatusBar.currentHeight }}>

            <Text style={{ fontSize: 20, marginTop: 10 }}>Back</Text>

            <View style={{ alignItems: 'center', marginTop: 30 }}>
                <Text style={{ fontSize: 40 }}>Welcome Back !</Text>

                <View style={{ width: 150, height: 150, backgroundColor: 'lightblue', marginTop: 10 }}></View>
            </View>
            <View>
                <Text style={{ fontSize: 20, marginTop: 30 }}>Username</Text>
                <View style={{ height: 40, backgroundColor: 'lightgreen', marginTop: 10 }}></View>
            </View>

            <View>
                <Text style={{ fontSize: 20, marginTop: 20 }}>Email</Text>
                <View style={{ height: 40, backgroundColor: 'lightgreen', marginTop: 10 }}></View>
            </View>

            <View style={{ height: 40, backgroundColor: 'lightpink', marginTop: 40 }}>
                <Button title="SIGN UP" />
                <View style={{ alignItems: 'center', marginTop: 10 }}>
                    <Text style={{ fontSize: 18, color: 'red', textDecorationLine: 'underline' }}>forgot password ?</Text>
                </View>
            </View>

            <View style={{ alignItems: 'center', marginTop: 70 }}>
                <Text style={{ marginTop: 40, fontSize: 20 }}>Not here before?</Text>

                <View style={{ height: 40, width: '70%', backgroundColor: 'lightblue', marginTop: 20 }}>
                    <Button title="SIGN UP" />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({});
