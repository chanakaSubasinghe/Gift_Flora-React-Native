import React from 'react';
import { StyleSheet, Text, View, StatusBar, Button } from 'react-native';

export default function MyAccountScreen() {

    return (
        <View style={{ marginHorizontal: 20, top: Platform.OS === 'android' && StatusBar.currentHeight }}>
            <View style={{ alignItems: 'center', marginTop: 30 }}>
                <Text style={{ fontSize: 20, marginTop: 10, fontWeight: 'bold' }}>MY ACCOUNT</Text>
            </View>

            <View style={{ alignItems: 'center', marginTop: 30 }}>
                <Text style={{ fontSize: 19, marginTop: 10, fontWeight: 'bold' }}>Welcome To Your Account !</Text>
                <Text style={{ fontSize: 19, marginTop: 10, textAlign: 'center' }}>Here you can manage all your personal information and orders</Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 20 }}>
                <View style={{
                    height: 140,
                    width: 140,
                    backgroundColor: '#f9c0c0'
                }} />
                <View style={{
                    height: 140,
                    width: 140,
                    backgroundColor: '#f6d6ad'
                }} />
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Button title="ORDERS" style={{ textAlign: 'center' }} />
                <Button title="ORDERS" />
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 20 }}>
                <View style={{
                    height: 140,
                    width: 140,
                    backgroundColor: '#fafcc2'
                }} />
                <View style={{
                    height: 140,
                    width: 140,
                    backgroundColor: '#ccf6c8'
                }} />
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Button title="ACCOUNT" style={{ height: 40, marginTop: 20 }} />
                <Button title="LOGOUT" />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({});