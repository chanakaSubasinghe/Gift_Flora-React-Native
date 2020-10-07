import React from 'react';
import { StyleSheet, Text, View, Button, StatusBar, TextInput, TouchableOpacity, Platform, Image } from 'react-native';
import { } from 'react-navigation'



export default class MyAccountScreen extends React.Component {

    static navigationOptions = {
        title: "MyAccount",
    };
    render() {
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
                    <Image style={{
                        height: 140,
                        width: 140,
                    }}
                        source={require('../../assets/Orders.jpg')}
                    />
                    <Image style={{
                        height: 140,
                        width: 140,
                    }}
                        source={require('../../assets/location.png')}
                    />
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                    {/* Orders button */}
                    <TouchableOpacity
                        title="Orders"
                        onPress={() => this.props.navigation.navigate("")}
                        style={{ width: 100, backgroundColor: '#df5e88', borderRadius: 28, paddingVertical: 10, alignItems: 'center', marginLeft: 20 }}>
                        <       Text style={{ fontSize: 14, fontWeight: '500', color: '#ffffff', textAlign: "center" }} >ORDERS</Text>
                    </TouchableOpacity>

                    {/* Addresses button */}
                    <TouchableOpacity
                        title="Addresses"
                        onPress={() => this.props.navigation.navigate("MyAddress")}
                        style={{ width: 100, backgroundColor: '#df5e88', borderRadius: 28, paddingVertical: 10, alignItems: 'center', marginRight: 20 }}>
                        <       Text style={{ fontSize: 14, fontWeight: '500', color: '#ffffff', textAlign: "center" }} >ADDRESSES</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 20 }}>
                    <Image style={{
                        height: 140,
                        width: 140,
                    }}
                        source={require('../../assets/Account.png')}
                    />
                    <Image style={{
                        height: 140,
                        width: 140,
                    }}
                        source={require('../../assets/Logout.png')}
                    />
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                    {/* Account button */}
                    <TouchableOpacity
                        title="Account"
                        onPress={() => this.props.navigation.navigate("")}
                        style={{ width: 100, backgroundColor: '#df5e88', borderRadius: 28, paddingVertical: 10, alignItems: 'center', marginLeft: 20 }}>
                        <       Text style={{ fontSize: 14, fontWeight: '500', color: '#ffffff', textAlign: "center" }} >ACCOUNT</Text>
                    </TouchableOpacity>
                    {/* logout button */}
                    <TouchableOpacity
                        title="Orders"
                        onPress={() => this.props.navigation.navigate("Login")}
                        style={{ width: 100, backgroundColor: '#df5e88', borderRadius: 28, paddingVertical: 10, alignItems: 'center', marginRight: 20 }}>
                        <       Text style={{ fontSize: 14, fontWeight: '500', color: '#ffffff', textAlign: "center" }} >LOGOUT</Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({});