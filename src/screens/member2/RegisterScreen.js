
import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Image, StatusBar, TextInput, TouchableOpacity } from 'react-native';
import Logo from '../../components/Logo';

import userIcon from '../../assets/user.png';
import homeIcon from '../../assets/home.png';
import shoppingCartIcon from '../../assets/shoppingCart.png';


export default class LoginScreen extends React.Component {

    static navigationOptions = {
        title: "Sign Up",
    };
    render() {
        return (

            <>
                <View style={styles.container}>


                    <View style={styles.welcomeContainer}>
                        <Text style={styles.welcomeText}> Welcome !</Text>
                        <Logo />
                    </View>

                    {/* Username */}
                    <View>
                        <Text style={styles.textLabel}>Username</Text>
                        <TextInput style={styles.textInput} />

                    </View>

                    {/* E-mail */}
                    <View>
                        <Text style={styles.textLabel}>E-mail</Text>
                        <TextInput style={styles.textInput} />
                    </View>

                    {/* Password */}
                    <View>
                        <Text style={styles.textLabel}>Password</Text>
                        <TextInput style={styles.textInput} minLength={5} maxLength={15} secureTextEntry={true} />
                    </View>


                    {/* SignUp button*/}
                    <View style={styles.registerArea}>
                        <TouchableOpacity style={styles.registerContainer}>
                            <Text style={styles.registerText} >SIGN UP</Text>
                        </TouchableOpacity>

                    </View>


                    {/* Sign In */}
                    <View style={styles.loginArea}>
                        <Text style={{ alignItems: 'center', fontSize: 17 }}>Already have an account ? </Text>

                        <TouchableOpacity
                            title="Sign Up"
                            onPress={() => this.props.navigation.navigate("Login")}
                            style={styles.loginWarning}>
                            <Text style={styles.loginText} >SIGN IN</Text>
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
    welcomeContainer: {
        alignItems: 'center',
        marginTop: 20
    },
    welcomeText: {
        fontSize: 30,
        color: '#5d54a4',
        marginBottom: 10
    },
    textLabel: {
        fontSize: 20,
        marginTop: 20,
        paddingHorizontal: 15
    },
    textInput: {
        width: 350,
        top: 10,
        backgroundColor: '#fff',
        borderColor: '#d6d6d6',
        borderWidth: 2,
        borderRadius: 25,
        height: 45,
        paddingHorizontal: 16,
        fontSize: 16
    },
    registerArea: {
        height: 40,
        marginTop: 50
    },
    registerContainer: {
        width: 250,
        alignSelf: 'center',
        backgroundColor: '#28a745',
        borderRadius: 25,
        paddingVertical: 12
    },
    registerText: {
        fontSize: 20,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: "center"
    },
    loginArea: {
        alignItems: 'center',
        marginTop: 60,
        justifyContent: 'center',
        flexDirection: 'row'
    },
    loginWarning: {
        width: 100,
        backgroundColor: '#5d54a4',
        borderRadius: 28,
        paddingVertical: 10,
        alignItems: 'center'
    },
    loginText: {
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
