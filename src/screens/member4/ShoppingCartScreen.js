import React from 'react';
import { StyleSheet, Text, View, StatusBar, Button, Platform, Image, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';

import userIcon from '../../assets/user.png';
import homeIcon from '../../assets/home.png';
import shoppingCartIcon from '../../assets/shoppingCart.png';


export default class ShoppingCartScreen extends React.Component {
    render() {
        return (
            <View style={{ top: Platform.OS === 'android' && StatusBar.currentHeight }}>
                <View style={{ alignItems: 'center' }}>
                    <Text style={{ fontSize: 20, marginTop: 20, fontWeight: 'bold' }}>Shopping Cart</Text>
                </View>

                <View style={{ marginTop: 20, backgroundColor: '#a37eba', width: '105%', height: 25 }} />

                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                    <Image style={{ width: 30, height: 30, marginLeft: 20, marginTop: 60 }} source={require('../../assets/close.png')} />
                    <View style={styles.popularContainer} >
                        <Image style={{ width: 90, height: 90, marginLeft: 15, marginTop: 20 }} source={require('../../assets/choco.jpg')} />
                    </View>
                    <View>
                        <Text style={{ marginTop: 40, fontSize: 15, fontWeight: 'bold', marginLeft: 10 }}>Chocolate Fudge Cake</Text>
                        <Text style={{ marginTop: 10, fontSize: 15, fontWeight: 'bold', marginLeft: 50 }}>Rs.5000.00</Text>
                        <Image style={{ width: 130, height: 70, marginLeft: 30, marginTop: -3, }} source={require('../../assets/input.png')} />
                    </View>
                </View>


                <View style={{ marginTop: 20, backgroundColor: '#a37eba', width: '105%', height: 25 }} />

                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                    <Image style={{ width: 30, height: 30, marginLeft: 20, marginTop: 60 }} source={require('../../assets/close.png')} />
                    <View style={styles.popularContainer} >
                        <Image style={{ width: 90, height: 90, marginLeft: 15, marginTop: 20 }} source={require('../../assets/ross.jpg')} />
                    </View>
                    <View>
                        <Text style={{ marginTop: 40, fontSize: 15, fontWeight: 'bold', marginLeft: 40 }}>Evelyn Flower</Text>
                        <Text style={{ marginTop: 10, fontSize: 15, fontWeight: 'bold', marginLeft: 50 }}>Rs.2000.00</Text>
                        <Image style={{ width: 130, height: 70, marginLeft: 30, marginTop: -3, }} source={require('../../assets/input.png')} />
                    </View>
                </View>


                <View style={{ marginTop: 20, backgroundColor: '#a37eba', width: '105%', height: 25 }} />

                <TouchableOpacity
                    title="Submit"
                    onPress={() => this.props.navigation.navigate("AddAddress")}
                    style={{ width: 300, backgroundColor: '#df5e88', borderRadius: 28, paddingVertical: 10, marginLeft: 35, marginTop: 30 }}>
                    <       Text style={{ fontSize: 15, fontWeight: '500', color: '#ffffff', textAlign: "center", fontWeight: 'bold' }} >Billing Address</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    title="Submit"
                    onPress={() => this.props.navigation.navigate("AddAddress")}
                    style={{ width: 300, backgroundColor: '#df5e88', borderRadius: 28, paddingVertical: 10, marginLeft: 35, marginTop: 30 }}>
                    <       Text style={{ fontSize: 15, fontWeight: '500', color: '#ffffff', textAlign: "center", fontWeight: 'bold' }} >Delivery Address</Text>
                </TouchableOpacity>

                <View style={{ marginTop: 30, marginHorizontal: -10 }}>
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
    popularContainer: {
        height: 130,
        width: 120,
        borderRadius: 10,
        marginLeft: 20,
        backgroundColor: '#ddf3f5',
        marginTop: 10
    },
});