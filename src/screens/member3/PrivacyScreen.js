import React from 'react';
import { StyleSheet, Text, View, StatusBar, } from 'react-native';


import userIcon from '../../assets/user.png';
import homeIcon from '../../assets/home.png';
import shoppingCartIcon from '../../assets/shoppingCart.png';

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
                        <Text style={styles.backButton}> Back</Text>
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
    mainText: {
        fontSize: 30,
        color: '#880061',
    },
    updateDate: {
        marginTop: 20,
        fontSize: 18,
        fontWeight: 'bold'
    },
    privayText: {
        marginTop: 10,
        fontSize: 17
    }
});
