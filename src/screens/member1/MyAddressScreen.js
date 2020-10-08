import React from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableWithoutFeedback, TouchableOpacity, Image, Platform } from 'react-native';
import { } from 'react-navigation'

import userIcon from '../../assets/user.png';
import homeIcon from '../../assets/home.png';
import shoppingCartIcon from '../../assets/shoppingCart.png';
import { ScrollView } from 'react-native-gesture-handler';

export default class MyAccountScreen extends React.Component {

    static navigationOptions = {
        title: "MyAccount",
    };

    render() {
        return (
            <>
                <ScrollView>
                    <View style={{ top: Platform.OS === 'android' && StatusBar.currentHeight }}>
                        <TouchableOpacity
                            title="Login"
                            onPress={() => this.props.navigation.navigate("Menu")}>
                            <Text style={styles.backButton}>{`< Back`}</Text>
                        </TouchableOpacity>
                        <View style={{ alignItems: 'center', marginTop: 30 }}>
                            <Text style={{ fontSize: 28, fontWeight: 'bold' }}>My Addresses</Text>
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
                                    title="EditAddress"
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

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <TouchableOpacity
                                title="MyAccount"
                                onPress={() => this.props.navigation.navigate("MyAccount")}
                                style={{ width: 100, backgroundColor: '#df5e88', borderRadius: 28, paddingVertical: 10, alignItems: 'center', marginLeft: 45, marginTop: 10 }}>
                                <       Text style={{ fontSize: 14, fontWeight: 'bold', color: '#ffffff', textAlign: "center" }} >My Account</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                title="Home"
                                onPress={() => this.props.navigation.navigate("Home")}
                                style={{ width: 100, backgroundColor: '#df5e88', borderRadius: 28, paddingVertical: 10, alignItems: 'center', marginRight: 40, marginTop: 10 }}>
                                <       Text style={{ fontSize: 14, fontWeight: 'bold', color: '#ffffff', textAlign: "center" }} >Shop</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ height: 80 }}></View>
                    </View>
                </ScrollView>
                <View style={styles.navBar}>
                    <View style={styles.navBarContainer}>

                        <TouchableWithoutFeedback
                            onPress={() => this.props.navigation.navigate('Home')}>
                            <Image style={[styles.navBarIcon, { left: 20 }]} source={homeIcon} />
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
                        <TouchableWithoutFeedback
                            onPress={() => this.props.navigation.navigate('Menu')}>
                            <Image style={[styles.navBarIcon, { right: 20 }]} source={userIcon} />
                        </TouchableWithoutFeedback>

                    </View>
                </View>

            </>
        )
    }
}
const styles = StyleSheet.create({
    backButton: {
        fontSize: 20,
        marginTop: 30,

    },
    navBar: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    navBarContainer: {
        backgroundColor: '#fff',
        width: '100%',
        height: Platform.OS === 'ios' ? 80 : 65,
        borderTopWidth: 0.5
    },
    navBarIcon: {
        width: 32,
        height: 35,
        position: 'absolute',
        bottom: Platform.OS === 'ios' ? 38 : 20,
        tintColor: '#5f4b8bff'
    }
});

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
        height: 600,
        marginStart: 10,
        marginEnd: 10
    },

});