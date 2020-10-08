import React from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, Platform, TouchableWithoutFeedback, Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import userIcon from '../../assets/user.png';
import homeIcon from '../../assets/home.png';
import shoppingCartIcon from '../../assets/shoppingCart.png';

export default class ContactScreen extends React.Component {

    static navigationOptions = {
        title: "Contact",
    };

    render() {

        return (
            <>
                <View style={{ top: Platform.OS === 'android' && StatusBar.currentHeight }}>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ fontSize: 28, marginTop: 20, fontWeight: 'bold' }}>Contact Us</Text>
                    </View>

                    <View style={{ alignItems: 'flex-start', marginLeft: 20 }}>

                        <View>
                            <Text style={{ fontSize: 15, marginTop: 10, fontWeight: 'bold' }}>Full Name :</Text>
                            <TextInput style={styles.userInput} />
                        </View>

                        <View>
                            <Text style={{ fontSize: 15, marginTop: 10, fontWeight: 'bold' }}>Email :</Text>
                            <TextInput style={styles.userInput} />
                        </View>

                        <View>
                            <Text style={{ fontSize: 15, marginTop: 10, fontWeight: 'bold' }}>Contact Number :</Text>
                            <TextInput style={styles.userInput} />
                        </View>

                        <View>
                            <Text style={{ fontSize: 15, marginTop: 10, fontWeight: 'bold' }}>Inquiry About :</Text>
                            <TextInput style={styles.userInput} />
                        </View>

                        <View>
                            <Text style={{ fontSize: 15, marginTop: 10, fontWeight: 'bold' }}>Description :</Text>
                            <TextInput style={styles.userInput} />
                        </View>

                        <TouchableOpacity
                            title="Submit"
                            onPress={() => this.props.navigation.navigate("")}
                            style={{ width: 300, backgroundColor: '#df5e88', borderRadius: 28, paddingVertical: 10, marginLeft: 15, marginTop: 30 }}>
                            <       Text style={{ fontSize: 18, fontWeight: '500', color: '#ffffff', textAlign: "center", fontWeight: 'bold' }} >Submit</Text>
                        </TouchableOpacity>

                    </View>
                </View>
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
    userInput: {
        width: 350,
        top: 10,
        backgroundColor: '#fff',
        borderColor: '#d6d6d6',
        borderWidth: 2,
        borderRadius: 25,
        height: 45,
        paddingHorizontal: 16,
        fontSize: 16,
        marginBottom: 5,
        marginRight: 3
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
    },
    backButton: {
        fontSize: 20,
        marginTop: 30,
        fontWeight: "bold"
    },
});