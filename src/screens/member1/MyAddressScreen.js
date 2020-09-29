import React from 'react';
import { StyleSheet, Text, View, StatusBar, Button } from 'react-native';

export default function MyAddressScreen() {
    return (
        <View style={{ marginHorizontal: 20, top: Platform.OS === 'android' && StatusBar.currentHeight }}>
            <View style={{ alignItems: 'center', marginTop: 30 }}>
                <Text style={{ fontSize: 20, marginTop: 10, fontWeight: 'bold' }}>MY ADDRESSES</Text>
            </View>

            <View style={shadowstyles.boxWithShadow} >
                <Text style={{ fontSize: 15, marginTop: 10, fontWeight: 'bold' }}>Name :</Text>
                <Text style={{ fontSize: 15, marginTop: 10 }}>Liyara Karunarathna</Text>
                <Text style={{ fontSize: 15, marginTop: 10, fontWeight: 'bold' }}>Address :</Text>
                <Text style={{ fontSize: 15, marginTop: 10 }}>No.198/A, D.S Senanayake road, Kandy</Text>
                <Text style={{ fontSize: 15, marginTop: 10, fontWeight: 'bold' }}>Landmark :</Text>
                <Text style={{ fontSize: 15, marginTop: 10 }}>-</Text>
                <Text style={{ fontSize: 15, marginTop: 10, fontWeight: 'bold' }}>Mobile Number :</Text>
                <Text style={{ fontSize: 15, marginTop: 10 }}>(+94) 77 888 369</Text>
                <Text style={{ fontSize: 15, marginTop: 10, fontWeight: 'bold' }}>City :</Text>
                <Text style={{ fontSize: 15, marginTop: 10 }}>Kandy</Text>
                <Text style={{ fontSize: 15, marginTop: 10, fontWeight: 'bold' }}>Outskirt :</Text>
                <Text style={{ fontSize: 15, marginTop: 10 }}>-</Text>
                <Text style={{ fontSize: 15, marginTop: 10, fontWeight: 'bold' }}>Pincode :</Text>
                <Text style={{ fontSize: 15, marginTop: 10 }}>632589</Text>
                <Text style={{ fontSize: 15, marginTop: 10, fontWeight: 'bold' }}>State :</Text>
                <Text style={{ fontSize: 15, marginTop: 10 }}>-</Text>
                <Text style={{ fontSize: 15, marginTop: 10, fontWeight: 'bold' }}>Country :</Text>
                <Text style={{ fontSize: 15, marginTop: 10 }}>Sri Lanka</Text>

                <View style={{ flexDirection: 'row', justifyContent: 'flex-end', }}>
                    <Button color="green" title="EDIT"></Button>
                    <Button color="red" title="DELETE"></Button>
                </View>
            </View>

            <View style={shadowstyles.buttonStyle}>
                <Button title="<- My Account"></Button>
                <Button title="Shop ->"></Button>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({});

const shadowstyles = StyleSheet.create({
    boxWithShadow: {
        marginTop: 30,
        shadowColor: 'black',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 3.25,
        elevation: 25,
        backgroundColor: '#f4f4f4',
        paddingStart: 10
    },
    buttonStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        color: 'black'
    }
});