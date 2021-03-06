import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Image, Platform, StatusBar, TouchableOpacity } from 'react-native';

// URLs
import profilePicture from '../../assets/profilePic.jpg';


import userIcon from '../../assets/user.png';
import homeIcon from '../../assets/home.png';
import shoppingCartIcon from '../../assets/shoppingCart.png';

export default class MenuScreen extends React.Component {


    static navigationOptions = {
        title: "Menu",
    };

    render() {
        return (
            <>
                <View style={styles.container}>

                    <View style={styles.imageContainer}>
                        <Image source={profilePicture}
                            style={styles.profileImg}
                        />
                        <Text style={styles.userName}>Roshell Perera</Text>
                    </View>

                    <Text style={styles.sectionHeading}>My Account</Text>
                    <TouchableOpacity
                        title="MyAccount"
                        onPress={() => this.props.navigation.navigate("MyAccount")}>
                        <Text style={styles.sectionSubHeading}>Account Settings</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        title="MyAddress"
                        onPress={() => this.props.navigation.navigate("MyAddress")}>
                        <Text style={styles.sectionSubHeading}>My Addresses</Text>
                    </TouchableOpacity>
                    <Text style={styles.sectionHeading}>Support</Text>
                    <TouchableOpacity
                        title="About"
                        onPress={() => this.props.navigation.navigate("About")}>
                        <Text style={styles.sectionSubHeading}>About Gift Flora</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        title="Privacy"
                        onPress={() => this.props.navigation.navigate("Privacy")}>
                        <Text style={styles.sectionSubHeading}>Privacy and Policy</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        title="Contact"
                        onPress={() => this.props.navigation.navigate("Contact")}>
                        <Text style={styles.sectionSubHeading}>Contact Us</Text>
                    </TouchableOpacity>


                    <TouchableOpacity style={styles.loginButton}
                        title="Login"
                        onPress={() => this.props.navigation.navigate("Login")}>
                        <Text style={{ fontSize: 20, fontWeight: '500', color: '#ffffff', textAlign: "center" }} >LOGOUT</Text>
                    </TouchableOpacity>




                </View>

                {/* bottom navigation bar */}
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
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        top: 40
    },
    profileImg: {
        height: 150,
        width: 150,
        borderRadius: 100
    },
    sectionHeading: {
        fontSize: 25,
        marginTop: 20,
        marginBottom: 5,
        color: 'gray',

    },
    sectionSubHeading: {
        fontSize: 20,
        left: 5,
        marginTop: 10

    },
    imageContainer: {
        alignItems: 'center',
        marginTop: 30
    },
    userName: {
        fontSize: 30,
        marginTop: 20,
        fontWeight: 'bold'
    },
    loginButton: {
        height: 50,
        width: 190,
        marginTop: 25,
        backgroundColor: '#dc3545',
        borderRadius: 20,
        alignSelf: 'center',
        justifyContent: 'center'
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
