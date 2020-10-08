import React from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableWithoutFeedback, Platform, Image, TouchableOpacity } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';

import userIcon from '../../assets/user.png';
import homeIcon from '../../assets/home.png';
import shoppingCartIcon from '../../assets/shoppingCart.png';

export default class LeaveFeedbackScreen extends React.Component {

    static navigationOptions = {
        title: "LeaveFeedback",
    };

    render() {
        return (
            <>
                <ScrollView>
                    <View style={{ top: Platform.OS === 'android' && StatusBar.currentHeight }}>
                        <TouchableOpacity
                            title="Login"
                            onPress={() => this.props.navigation.navigate("OrderList")}>
                            <Text style={styles.backButton}>{`< Back`}</Text>
                        </TouchableOpacity>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={{ fontSize: 28, fontWeight: 'bold' }}>Leave Feedback</Text>
                        </View>

                        <View style={{ marginTop: 2, backgroundColor: '#dddddd', width: '105%', height: 20 }} />

                        <View style={{ flexDirection: 'row', marginTop: 20 }}>
                            <View style={styles.popularContainer} >
                                <Image style={{ width: 130, height: 130, marginLeft: 20, marginTop: 25 }} source={require('../../assets/choco.jpg')} />
                            </View>
                            <View>
                                <Text style={{ marginTop: 40, fontSize: 15, fontWeight: 'bold', marginLeft: 10 }}>Chocolate Fudge Cake</Text>
                                <Text style={{ marginTop: 20, fontSize: 15, fontWeight: 'bold', marginLeft: 50 }}>Rs.5000.00</Text>
                            </View>
                        </View>

                        <View style={shadowstyles.boxWithShadow} >
                            <Text style={{ fontSize: 15, marginTop: 10, fontWeight: 'bold', marginLeft: 5 }}>How do you rate the product ?</Text>
                            <View style={{ flexDirection: 'row', marginLeft: 20 }}>
                                <Image style={{ width: 30, height: 30, marginLeft: 20, marginTop: 10 }} source={require('../../assets/star1.png')} />
                                <Image style={{ width: 30, height: 30, marginLeft: 5, marginTop: 10 }} source={require('../../assets/star1.png')} />
                                <Image style={{ width: 30, height: 30, marginLeft: 5, marginTop: 10 }} source={require('../../assets/star1.png')} />
                                <Image style={{ width: 30, height: 30, marginLeft: 5, marginTop: 10 }} source={require('../../assets/star2.png')} />
                                <Image style={{ width: 30, height: 30, marginLeft: 5, marginTop: 10 }} source={require('../../assets/star2.png')} />
                            </View>
                            <Text style={{ fontSize: 15, marginTop: 10, fontWeight: 'bold', marginLeft: 5 }}>Title </Text>
                            <TextInput style={styles.userInput} />
                            <Text style={{ fontSize: 15, marginTop: 10, fontWeight: 'bold', marginLeft: 5 }}>Description </Text>
                            <TextInput style={styles.userInput} />

                            <TouchableOpacity
                                title="Submit"
                                onPress={() => this.props.navigation.navigate("")}
                                style={{ width: 130, backgroundColor: '#df5e88', borderRadius: 28, paddingVertical: 10, marginLeft: 110, marginTop: 30 }}>
                                <       Text style={{ fontSize: 14, fontWeight: '500', color: '#ffffff', textAlign: "center" }} >Submit</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ height: 80 }}></View>
                    </View>
                </ScrollView>

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
    popularContainer: {
        height: 180,
        width: 170,
        borderRadius: 10,
        marginLeft: 20,
        backgroundColor: '#ffff',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#0f4c75',
    },
    backButton: {
        fontSize: 20,
        marginTop: 30,
    },
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
        marginLeft: 3
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
    },

});

const shadowstyles = StyleSheet.create({
    boxWithShadow: {
        marginTop: 10,
        shadowColor: 'black',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 3.25,
        elevation: 25,
        backgroundColor: '#f7f7f7',
        marginLeft: 10,
        height: 350,
        marginRight: 10
    },
    buttonStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        color: 'black'
    }
});