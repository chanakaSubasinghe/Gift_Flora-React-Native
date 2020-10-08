import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

export default class PrivacyScreen extends React.Component {

    static navigationOptions = {
        title: "Privacy",
    };

    render() {
        return (
            <>
                <View style={styles.container}>
                    <TouchableOpacity
                        title="Home"
                        onPress={() => this.props.navigation.navigate("Menu")}>
                        <Text style={styles.backButton}>{`< Back`}</Text>
                    </TouchableOpacity>

                    <View style={styles.mainTextContainer}>
                        <Text style={styles.mainText}>Privacy and Policy</Text>
                    </View>

                    <Text style={styles.privacyText}>
                        Gift Flora respects the privacy of our users .
                        This Privacy Policy explains how we collect, use, disclose, and
                        safeguard your information when you visit our mobile application
                        Gift Flora. Please read this Privacy Policy carefully.
                        IF YOU DO NOT AGREE WITH THE TERMS OF THIS PRIVACY POLICY,
                        PLEASE DO NOT ACCESS THE APPLICATION.
                    </Text>

                    <Text style={styles.privacyText}>
                        We reserve the right to make changes to this
                        Privacy Policy at any time and for any reason.
                        We will alert you about any changes by updating the “Last updated” date of this Privacy Policy.
                        You are encouraged to periodically review this Privacy Policy to stay informed of updates.
                        You will be deemed to have been made aware of, will be subject to, and will be deemed to have accepted
                        the changes in any revised Privacy Policy by your continued use of the Application after the date
                        such revised Privacy Policy is posted.
                    </Text>

                    <Text style={styles.updateDate}>
                        Last updated [5 , October , 2020]
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
    container: {
        marginHorizontal: 20,
        top: 20
    },
    mainText: {
        fontSize: 30,
        color: '#5d54a4',
        marginTop: 15
    },
    mainTextContainer: {
        alignItems: 'center',
        marginTop: 30
    },
    updateDate: {
        marginTop: 30,
        fontSize: 14,
        fontWeight: 'bold'
    },
    privacyText: {
        marginTop: 30,
        fontSize: 17,
        lineHeight: 23,
    }
});
