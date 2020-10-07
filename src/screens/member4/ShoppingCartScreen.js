import React from 'react';
import { StyleSheet, Text, View, StatusBar, Button,Platform } from 'react-native';

export default function ShoppingCartScreen(){
    return(
        <view style={{ marginHorizontal: 20, top: Platform.OS === 'android' && StatusBar.currentHeight }}>
            <View style={{ alignItems: 'center', marginTop: 30 }}>
                <Text style={{ fontSize: 20, marginTop: 10, fontWeight: 'bold', backgroundColor: 'grey', width: '100%', textAlign: 'center', height: 30 }}>Shopping cart</Text>
            </View>

            <View style={{ alignItems: 'center', marginTop: 30 }}>
                <Text style={{ fontSize: 20, marginTop: 10, fontWeight: 'bold', backgroundColor: 'grey', width: '100%', textAlign: 'left', height: 30 }}>Title</Text>
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

                {/* <View style={{
                        height: 60,
                        width: 60,
                        borderRadius: 100,
                        backgroundColor: 'lightpink',
                        marginRight: 20,
                        marginVertical: 60
                    }} />              */}
            </View>

            <View style={{ alignItems: 'center', marginTop: 30 }}>
                <Text style={{ fontSize: 20, marginTop: 10, fontWeight: 'bold', backgroundColor: 'grey', width: '100%', textAlign: 'center', height: 30 }}>Billing Address</Text>
            </View>

            <View style={{ alignItems: 'center', marginTop: 30 }}>
                <Text style={{ fontSize: 20, marginTop: 10, fontWeight: 'bold', backgroundColor: 'grey', width: '100%', textAlign: 'center', height: 30 }}>Delivery Address</Text>
            </View>
           
        </view>
    )
}


const styles = StyleSheet.create({});