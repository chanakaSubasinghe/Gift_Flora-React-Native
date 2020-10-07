import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Image, Platform, StatusBar, TouchableOpacity } from 'react-native';

// URLs
const profilePicture = "https://ik.imagekit.io/demo/img/smart_crop_blog/test_image_9_By_lQN-WE.jpeg?tr=w-200,h-200,fo-face:r-max";


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

                    <TouchableOpacity
                        title="Home"
                        onPress={() => this.props.navigation.navigate("Home")}>
                        <Text style={styles.backButton}> Back</Text>
                    </TouchableOpacity>

                    <View style={styles.imageContainer}>
                        <Image source={{ uri: profilePicture }}
                            style={styles.profileImg}
                        />
                        <Text style={styles.userName}>Nilanthi Perera</Text>
                    </View>

                    <Text style={styles.sectionHeading}>My Account</Text>
                    <TouchableOpacity>
                        <Text style={styles.sectionSubHeading}>Account Settings</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.sectionSubHeading}>My Addresses</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        title="Forgot"
                        onPress={() => this.props.navigation.navigate("Forgot")}>
                        <Text style={styles.sectionSubHeading}>Reset Password</Text>
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


                    <TouchableOpacity style={styles.loginButton}
                        title="Login"
                        onPress={() => this.props.navigation.navigate("Login")}>
                        <Text style={{ fontSize: 20, fontWeight: '500', color: '#ffffff', textAlign: "center" }} >LOGOUT</Text>
                    </TouchableOpacity>




                </View>

                <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                    <View style={{
                        backgroundColor: '#fff',
                        width: '100%',
                        height: Platform.OS === 'ios' ? 80 : 65,
                        borderTopWidth: 0.5
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


                        <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('Home')}>
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
            </>
        );
    }
}

const styles = StyleSheet.create({
    backButton: {
        fontSize: 20,
        marginTop: 10
    },
    container: {
        marginHorizontal: 20,
        top: Platform.OS === 'android' ? StatusBar.currentHeight : null
    },
    profileImg: {
        height: 150,
        width: 150
    },
    sectionHeading: {
        fontSize: 25,
        marginTop: 20,
        marginBottom: 5,
        color: 'gray',

    },
    sectionSubHeading: {
        fontSize: 20,
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
        backgroundColor: 'crimson',
        borderRadius: 20,
        alignSelf: 'center',
        justifyContent: 'center'
    }
});
