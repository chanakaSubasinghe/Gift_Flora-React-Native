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
                <TouchableOpacity
                    title="Home"
                    onPress={() => this.props.navigation.navigate("Home")}>
                    <Text style={styles.backButton}> Back</Text>
                </TouchableOpacity>
                <View style={{ alignItems: 'center' }}>
                    <Text style={{ fontSize: 20, marginTop: 10, fontWeight: 'bold', color: '#07689f' }}>MY ACCOUNT</Text>
                </View>

                <View style={{ alignItems: 'center', marginTop: 30 }}>
                    <Text style={{ fontSize: 19, marginTop: 10, fontWeight: 'bold', color: '#07689f' }}>Welcome To Your Account !</Text>
                    <Text style={{ fontSize: 19, marginTop: 10, textAlign: 'center', color: '#40a8c4' }}>Here you can manage all your personal information and orders</Text>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 20 }}>
                    <View style={styles.popularContainer} >
                        <Image style={{
                            height: 100,
                            width: 100,
                            marginLeft: 30,
                            marginTop: 20
                        }}
                            source={require('../../assets/Orders.png')}
                        />
                    </View>
                    <View style={styles.popularContainer}>
                        <Image style={{
                            height: 100,
                            width: 100,
                            marginLeft: 25,
                            marginTop: 20
                        }}
                            source={require('../../assets/location.png')}
                        />
                    </View>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>

                    {/* Orders button */}
                    <TouchableOpacity
                        title="Orders"
                        onPress={() => this.props.navigation.navigate("")}
                        style={{ width: 100, backgroundColor: '#df5e88', borderRadius: 28, paddingVertical: 10, alignItems: 'center', marginLeft: 25 }}>
                        <       Text style={{ fontSize: 14, fontWeight: '500', color: '#ffffff', textAlign: "center" }} >ORDERS</Text>
                    </TouchableOpacity>

                    {/* Addresses button */}
                    <TouchableOpacity
                        title="Addresses"
                        onPress={() => this.props.navigation.navigate("AddAddress")}
                        style={{ width: 100, backgroundColor: '#df5e88', borderRadius: 28, paddingVertical: 10, alignItems: 'center', marginRight: 20 }}>
                        <       Text style={{ fontSize: 14, fontWeight: '500', color: '#ffffff', textAlign: "center" }} >ADDRESSES</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 20 }}>
                    <View style={styles.popularContainer}>
                        <Image style={{
                            height: 100,
                            width: 100,
                            marginLeft: 25,
                            marginTop: 20
                        }}
                            source={require('../../assets/Account.png')}
                        />
                    </View>
                    <View style={styles.popularContainer}>
                        <Image style={{
                            height: 100,
                            width: 100,
                            marginTop: 20,
                            marginLeft: 30

                        }}
                            source={require('../../assets/Logout.png')}
                        />
                    </View>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                    {/* Account button */}
                    <TouchableOpacity
                        title="Account"
                        onPress={() => this.props.navigation.navigate("")}
                        style={{ width: 100, backgroundColor: '#df5e88', borderRadius: 28, paddingVertical: 10, alignItems: 'center', marginLeft: 30 }}>
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

const styles = StyleSheet.create({
    backButton: {
        fontSize: 20,
        marginTop: 30,
        fontWeight: "bold"
    },
    popularContainer: {
        height: 150,
        width: 150,
        borderRadius: 10,
        backgroundColor: '#ddf3f5'
    },
});