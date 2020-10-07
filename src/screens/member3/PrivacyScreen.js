import React from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, TouchableWithoutFeedback, Image } from 'react-native';

export default class PrivacyScreen extends React.Component {

    static navigationOptions = {
        title: "Privacy",
    };
    render() {
        return (
            <>
                <View style={{ marginHorizontal: 20, top: Platform.OS === 'android' && StatusBar.currentHeight }}>

                    <TouchableOpacity
                        title="Home"
                        onPress={() => this.props.navigation.navigate("Home")}>
                        <Text style={styles.backButton}>{`< Back`}</Text>
                    </TouchableOpacity>

                    <View style={{ alignItems: 'center', marginTop: 30 }}>
                        <Text style={styles.mainText}>Privacy and Policy</Text>
                    </View>

                    <Text style={styles.updateDate}>
                        Last updated [5 , October , 2020]
                    </Text>

                    <Text style={styles.privayText}>
                        Gift Flora respects the privacy of our users .
                        This Privacy Policy explains how we collect, use, disclose, and
                        safeguard your information when you visit our mobile application
                        Gift Flora. Please read this Privacy Policy carefully.
                        IF YOU DO NOT AGREE WITH THE TERMS OF THIS PRIVACY POLICY,
                        PLEASE DO NOT ACCESS THE APPLICATION.
                    </Text>

                    <Text style={styles.privayText}>
                        We reserve the right to make changes to this
                        Privacy Policy at any time and for any reason.
                        We will alert you about any changes by updating the “Last updated” date of this Privacy Policy.
                        You are encouraged to periodically review this Privacy Policy to stay informed of updates.
                        You will be deemed to have been made aware of, will be subject to, and will be deemed to have accepted
                        the changes in any revised Privacy Policy by your continued use of the Application after the date
                        such revised Privacy Policy is posted.
                    </Text>
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
    mainText: {
        fontSize: 30,
        color: '#880061',
        marginTop: 15
    },
    updateDate: {
        marginTop: 30,
        fontSize: 18,
        fontWeight: 'bold'
    },
    privayText: {
        marginTop: 30,
        fontSize: 17
    }
});
