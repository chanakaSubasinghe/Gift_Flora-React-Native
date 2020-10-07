import React from 'react';
import { StyleSheet, Text, View, StatusBar, Button,Platform } from 'react-native';

export default function OrderListScreen(){
    return(
        <view style={{ marginHorizontal: 20, top: Platform.OS === 'android' && StatusBar.currentHeight }}>
            <View style={{ alignItems: 'center', marginTop: 30 }}>
                <Text style={{ fontSize: 20, marginTop: 10, fontWeight: 'bold', backgroundColor: 'grey', width: '100%', textAlign: 'center', height: 30 }}>Order List</Text>
            </View>

            <View style={{ alignItems: 'center', marginTop: 30 }}>
                <Text style={{ fontSize: 20, marginTop: 10, fontWeight: 'bold', backgroundColor: 'grey', width: '100%', textAlign: 'center', height: 30 }}></Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 20 }}>
                <View style={{
                        height: 140,
                        width: 140,
                        backgroundColor: '#f9c0c0',
                        marginTop: 30,
                        marginLeft:20
                    }} />

                <Text style={{justifyContent: 'space-between', marginVertical: 25, textAlign: 'center'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                <Text style={{ textAlign: 'center', marginVertical: 60}}>Rs. XX, XXX</Text>                
            </View>

            <View style={{ alignItems: 'center', marginTop: 30 }}>
                <Text style={{ fontSize: 20, marginTop: 10, fontWeight: 'bold', backgroundColor: 'grey', width: '100%', textAlign: 'center', height: 30 }}></Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 20 }}>
                <View style={{
                        height: 140,
                        width: 140,
                        backgroundColor: '#f9c0c0',
                        marginTop: 30,
                        marginLeft:20
                    }} />

                <Text style={{justifyContent: 'space-between', marginVertical: 25, textAlign: 'center'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                <Text style={{ textAlign: 'center', marginVertical: 60}}>Rs. XX, XXX</Text>                
            </View>

            <View style={{ alignItems: 'center', marginTop: 30 }}>
                <Text style={{ fontSize: 20, marginTop: 10, fontWeight: 'bold', backgroundColor: 'grey', width: '100%', textAlign: 'center', height: 30 }}></Text>
            </View>
            
        </view>
    )
}


const styles = StyleSheet.create({});