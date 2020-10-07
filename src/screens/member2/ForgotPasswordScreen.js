import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
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

                    <Text style={styles.warning}>Enter your email address to reset password.</Text>

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
        color: '#5d54a4',
        marginBottom: 30
    },
    warning: {
        marginTop: 50,
        fontSize: 17,
        color: '#000',
        textAlign: "center"
    },
    label: {
        fontSize: 20,
        marginTop: 40,
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
    buttonContainer: {
        height: 40,
        marginTop: 50
    },
    buttonArea: {
        width: 250,
        alignSelf: 'center',
        backgroundColor: '#dc3545',
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
