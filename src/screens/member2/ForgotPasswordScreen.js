
import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableWithoutFeedback,
    StatusBar,
    TextInput,
    Image,
    TouchableOpacity
} from 'react-native';
import Logo from '../../components/Logo';

export default class ForgotPasswordScreen extends React.Component {

    static navigationOptions = {
        title: "Forgot",
    };

    render() {
        return (
            <>
                <View style={styles.container}>

                    {/* Back Button */}
                    <TouchableOpacity
                        title="Login"
                        onPress={() => this.props.navigation.navigate("Login")}>
                        <Text style={styles.backButton}>{`< Back`}</Text>
                    </TouchableOpacity>

                    <View style={styles.topicContainer}>
                        <Text style={styles.topicText}>Forgot Your Password ?</Text>
                        <Logo />
                    </View>

                    <Text style={styles.warning}> Please enter your Email address to reset password.</Text>

                    {/* Email */}
                    <View>
                        <Text style={styles.label}> E-mail </Text>
                        <TextInput style={styles.textInput} />

                    </View>

                    {/* Reset Button*/}
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.buttonArea}>
                            <Text style={styles.buttonText} >RESET PASSWORD</Text>
                        </TouchableOpacity>
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
        top: 20
    },
    topicContainer: {
        alignItems: 'center',
        marginTop: 40
    },
    topicText: {
        fontSize: 30,
        color: '#880061',
        marginBottom: 30
    },
    warning: {
        marginTop: 40,
        fontSize: 18,
        color: '#5f4b8bff',
        textAlign: "center"
    },
    label: {
        fontSize: 18,
        marginTop: 50,
        paddingHorizontal: 15
    },
    textInput: {
        width: 350,
        backgroundColor: '#fae4fc',
        borderRadius: 25,
        height: 45,
        paddingHorizontal: 16,
        fontSize: 16
    },
    buttonContainer: {
        height: 40,
        marginTop: 20
    },
    buttonArea: {
        width: 350,
        backgroundColor: '#ff4b5c',
        borderRadius: 25,
        paddingVertical: 12
    },
    buttonText: {
        fontSize: 20,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: "center"
    }
});
