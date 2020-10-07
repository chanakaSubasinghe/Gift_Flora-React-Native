import React from 'react';
import { StyleSheet, Text, View, StatusBar, Button, TouchableOpacity } from 'react-native';
import { } from 'react-navigation'

export default class MyAccountScreen extends React.Component {
    render() {
        return (
            <View style={{ marginHorizontal: 20, top: Platform.OS === 'android' && StatusBar.currentHeight }}>
                <View style={{ alignItems: 'center', marginTop: 30 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#07689f' }}>MY ADDRESSES</Text>
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
                        <TouchableOpacity
                            title="Edit"
                            onPress={() => this.props.navigation.navigate("EditAddress")}
                            style={{ width: 100, backgroundColor: 'green', borderRadius: 28, paddingVertical: 10, alignItems: 'center', marginRight: 20, marginBottom: 2 }}>
                            <       Text style={{ fontSize: 14, fontWeight: '500', color: '#ffffff', textAlign: "center" }} >EDIT</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            title="Delete"
                            onPress={() => this.props.navigation.navigate("")}
                            style={{ width: 100, backgroundColor: '#c81912', borderRadius: 28, paddingVertical: 10, alignItems: 'center', marginRight: 20, marginBottom: 2 }}>
                            <       Text style={{ fontSize: 14, fontWeight: '500', color: '#ffffff', textAlign: "center" }} >DELETE</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={shadowstyles.buttonStyle}>
                    <TouchableOpacity
                        title="MyAccount"
                        onPress={() => this.props.navigation.navigate("MyAccount")}
                        style={{ width: 100, backgroundColor: '#f96d80', borderRadius: 28, paddingVertical: 10, alignItems: 'center', marginLeft: 20 }}>
                        <       Text style={{ fontSize: 14, fontWeight: 'bold', color: '#ffffff', textAlign: "center" }} >My Account</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        title="shop"
                        onPress={() => this.props.navigation.navigate("Home")}
                        style={{ width: 100, backgroundColor: '#f96d80', borderRadius: 28, paddingVertical: 10, alignItems: 'center', marginRight: 20 }}>
                        <       Text style={{ fontSize: 14, fontWeight: 'bold', color: '#ffffff', textAlign: "center" }} >Shop</Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}
const styles = StyleSheet.create({});

const shadowstyles = StyleSheet.create({
    boxWithShadow: {
        marginTop: 10,
        shadowColor: 'black',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 3.25,
        elevation: 25,
        backgroundColor: '#f7f7f7',
        paddingStart: 10,
        height: 555
    },
    buttonStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        color: 'black'
    }
});