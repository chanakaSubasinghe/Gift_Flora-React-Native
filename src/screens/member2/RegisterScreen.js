import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function RegisterScreen() {
    return (
        <View style={{ marginHorizontal: 20, top: Platform.OS === 'android' && StatusBar.currentHeight }}>

            <Text style={{ fontSize: 20, marginTop: 10 }}>Back</Text>

            <View style={{ alignItems: 'center', marginTop: 30 }}>
                <Text style={{ fontSize: 40 }}>Hello !</Text>

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

            <View>
                <Text style={{ fontSize: 20, marginTop: 20 }}>Password</Text>
                <View style={{ height: 40, backgroundColor: 'lightgreen', marginTop: 10 }}></View>
            </View>

            <View style={{ height: 40, backgroundColor: 'lightpink', marginTop: 20 }}>
                <Button title="SIGN UP" />
            </View>

            <View style={{ alignItems: 'center' }}>
                <Text style={{ marginTop: 40, fontSize: 20 }}>Already have an account?</Text>

                <View style={{ height: 40, width: '70%', backgroundColor: 'lightpink', marginTop: 20 }}>
                    <Button title="LOGIN" />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({});
