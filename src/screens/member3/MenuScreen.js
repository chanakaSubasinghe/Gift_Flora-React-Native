import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export default function MenuScreen() {
    return (
        <View style={{ marginHorizontal: 20, top: Platform.OS === 'android' && StatusBar.currentHeight }}>

            <Text style={{ fontSize: 20, marginTop: 10 }}>Back</Text>

            <View style={{ alignItems: 'center', marginTop: 50 }}>
                <View style={{ width: 150, height: 150, backgroundColor: 'lightblue' }}></View>

                <Text style={{ fontSize: 40, marginTop: 20 }}>John Smith</Text>
            </View>

            <View>
                <Text style={{ fontSize: 25, marginTop: 20, color: 'gray' }}>My Account</Text>
                <Text style={{ fontSize: 25, marginTop: 20 }}>Account Settings</Text>
                <Text style={{ fontSize: 25, marginTop: 10 }}>My Addresses</Text>
                <Text style={{ fontSize: 25, marginTop: 10 }}>Change Password</Text>
            </View>

            <View style={{ marginTop: 10 }}>
                <Text style={{ fontSize: 25, marginTop: 20, color: 'gray' }}>Support</Text>
                <Text style={{ fontSize: 25, marginTop: 20 }}>About GiftFlora</Text>
                <Text style={{ fontSize: 25, marginTop: 10 }}>Privacy and Policy</Text>
                <Text style={{ fontSize: 25, marginTop: 10 }}>Change Password</Text>
            </View>

            <View style={{ height: 40, width: 150, marginTop: 50, backgroundColor: 'darkred', borderRadius: 20, alignSelf: 'center' }}>
                <Button title="Logout" color="white" onPress={() => console.log('reset')} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
