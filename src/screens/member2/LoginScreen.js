import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, TouchableWithoutFeedback, Platform } from 'react-native';
import Logo from '../../components/Logo';
import { } from 'react-navigation';

import userIcon from '../../assets/user.png';
import homeIcon from '../../assets/home.png';
import shoppingCartIcon from '../../assets/shoppingCart.png';


export default class LoginScreen extends React.Component {

    static navigationOptions = {
        title: "Login",
    };

    render() {
        return (
            <>

                <View style={styles.container}>

                    <View style={styles.welcomeContainer}>
                        <Text style={styles.welcomeText}>Welcome Back !</Text>
                        <Logo />
                    </View>

                    {/* Username */}
                    <View>
                        <Text style={styles.label}>Username</Text>
                        <TextInput style={styles.userInput} />
                    </View>

                    {/* Password */}
                    <View>
                        <Text style={styles.label}>Password</Text>
                        <TextInput style={styles.userInput} minLength={5} maxLength={15} secureTextEntry={true} />
                    </View>


                    {/* Login Button */}
                    <View style={styles.loginArea}>
                        <TouchableOpacity style={styles.loginButtonContainer}
                            title="Home"
                            onPress={() => this.props.navigation.navigate("Home")}>
                            <Text style={styles.loginText} >LOGIN</Text>
                        </TouchableOpacity>
                        {/* Forgot Screen Button */}
                        <View style={styles.forgotPasswordArea}>
                            <TouchableOpacity
                                title="Forgot"
                                onPress={() => this.props.navigation.navigate("Forgot")}>
                                <Text style={styles.forgotPasswordText}>forgot password ?</Text>
                            </TouchableOpacity>
                        </View>
                    </View>


                    {/* Sign Up Button */}
                    <View style={styles.registerArea}>
                        <Text style={styles.registerWarning}>Don't have an account yet? </Text>

                        <TouchableOpacity
                            title="Sign Up"
                            onPress={() => this.props.navigation.navigate("Register")}
                            style={styles.registerButton}>
                            <Text style={styles.registerText} >SIGN UP</Text>
                        </TouchableOpacity>

                    </View>
                </View>

                {/* bottom navigation bar */}
                <View style={styles.navBar}>
                    <View style={styles.navBarContainer}>

                        <TouchableWithoutFeedback
                            onPress={() => this.props.navigation.navigate('Home')}>
                            <Image style={[styles.navBarIcon, { left: 20 }]} source={homeIcon} />
                        </TouchableWithoutFeedback>

                        <TouchableWithoutFeedback
                            onPress={() => this.props.navigation.navigate('Home')}>
                            <Image style={[styles.navBarIcon, { alignSelf: 'center' }]} source={shoppingCartIcon} />
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
        top: 20
    },
    welcomeText: {
        fontSize: 30,
        color: '#880061',
        marginBottom: 10
    },
    welcomeContainer: {
        alignItems: 'center',
        marginTop: 30
    },
    label: {
        fontSize: 20,
        marginTop: 40,
        paddingHorizontal: 15
    },
    userInput: {
        width: 350,
        backgroundColor: '#fae4fc',
        borderRadius: 25,
        height: 45,
        paddingHorizontal: 16,
        fontSize: 16
    },
    loginArea: {
        height: 40,
        marginTop: 20
    },
    loginButtonContainer: {
        width: 350,
        backgroundColor: '#2ec1ac',
        borderRadius: 25,
        paddingVertical: 12
    },
    loginText: {
        fontSize: 20,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: "center"
    },
    forgotPasswordArea: {
        alignItems: 'center',
        marginTop: 10
    },
    forgotPasswordText: {
        fontSize: 16,
        color: '#b1006a',
        textDecorationLine: 'underline'
    },
    registerArea: {
        alignItems: 'center',
        marginTop: 120,
        justifyContent: 'center',
        flexDirection: 'row'
    },
    registerWarning: {
        alignItems: 'center',
        fontSize: 17
    },
    registerButton: {
        width: 100,
        backgroundColor: '#b1006a',
        borderRadius: 28,
        paddingVertical: 10,
        alignItems: 'center'
    },
    registerText: {
        fontSize: 14,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: "center"
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