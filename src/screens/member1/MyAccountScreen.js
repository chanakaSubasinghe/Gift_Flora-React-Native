import React from 'react';
import { StyleSheet, Text, View, Button, StatusBar, TextInput, TouchableOpacity, Platform, Image, TouchableWithoutFeedback } from 'react-native';
import { } from 'react-navigation'

import userIcon from '../../assets/user.png';
import homeIcon from '../../assets/home.png';
import shoppingCartIcon from '../../assets/shoppingCart.png';

export default class MyAccountScreen extends React.Component {

    static navigationOptions = {
        title: "MyAccount",
    };
    render() {
        return (
            <View style={{ top: Platform.OS === 'android' ? StatusBar.currentHeight : null }}>
                <TouchableOpacity
                    title="Home"
                    onPress={() => this.props.navigation.navigate("Home")}>
                    <Text style={styles.backButton}> Back</Text>
                </TouchableOpacity>
                <View style={{ alignItems: 'center' }}>
                    <Text style={{ fontSize: 20, marginTop: 10, fontWeight: 'bold' }}>MY ACCOUNT</Text>
                </View>



                <View style={{ alignItems: 'center', marginTop: 10 }}>
                    <Text style={{ fontSize: 19, fontWeight: 'bold' }}>Welcome To Your Account !</Text>
                    <Text style={{ fontSize: 19, textAlign: 'center', marginTop: 5 }}>Here you can manage all your personal information and orders</Text>
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
                        onPress={() => this.props.navigation.navigate("OrderList")}
                        style={{ width: 100, backgroundColor: '#df5e88', borderRadius: 28, paddingVertical: 10, alignItems: 'center', marginLeft: 25 }}>
                        <       Text style={{ fontSize: 14, fontWeight: '500', color: '#ffffff', textAlign: "center" }} >ORDERS</Text>
                    </TouchableOpacity>

                    {/* Addresses button */}
                    <TouchableOpacity
                        title="MyAddresses"
                        onPress={() => this.props.navigation.navigate("MyAddress")}
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
                            marginTop: 30,
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

                <View style={{ marginTop: 60, marginHorizontal: -15 }}>
                    <View style={{
                        backgroundColor: '#fff',
                        width: '100%',
                        height: Platform.OS === 'ios' ? 80 : 65,
                        borderTopWidth: 0.5,
                    }}>

                        <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('Home')}>
                            <Image style={{
                                width: 32,
                                height: 35,
                                position: 'absolute',
                                bottom: Platform.OS === 'ios' ? 38 : 20,
                                tintColor: '#5f4b8bff',
                                left: 20
                            }}
                                source={homeIcon} />

                        </TouchableWithoutFeedback>


                        <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('ShoppingCart')}>
                            <Image style={{
                                width: 32,
                                height: 35,
                                position: 'absolute',
                                bottom: Platform.OS === 'ios' ? 38 : 20,
                                tintColor: '#5f4b8bff',
                                alignSelf: 'center'
                            }}
                                source={shoppingCartIcon} />

                        </TouchableWithoutFeedback>


                        <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('Menu')}>
                            <Image style={{
                                width: 32,
                                height: 35,
                                position: 'absolute',
                                bottom: Platform.OS === 'ios' ? 38 : 20,
                                tintColor: '#5f4b8bff',
                                right: 20
                            }}
                                source={userIcon} />

                        </TouchableWithoutFeedback>
                    </View>
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
        backgroundColor: '#fff'
    },
});