import React from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableWithoutFeedback, Platform, Image, TouchableOpacity } from 'react-native';

import userIcon from '../../assets/user.png';
import homeIcon from '../../assets/home.png';
import shoppingCartIcon from '../../assets/shoppingCart.png';
import { ScrollView } from 'react-native-gesture-handler';

export default class OrderListScreen extends React.Component {

    static navigationOptions = {
        title: "OrderList",
    };

    render() {
        return (
            <>
                <ScrollView>
                    <View style={{ top: Platform.OS === 'android' && StatusBar.currentHeight }}>
                        <TouchableOpacity
                            title="Login"
                            onPress={() => this.props.navigation.navigate("MyAccount")}>
                            <Text style={styles.backButton}>{`< Back`}</Text>
                        </TouchableOpacity>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={{ fontSize: 28, fontWeight: 'bold' }}>Order List</Text>
                        </View>


                        <View style={{ marginTop: 5, fontWeight: 'bold', backgroundColor: '#dddddd', width: '105%', height: 5 }} />

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 20 }}>
                            <TouchableOpacity
                                title="LeaveFeedback"
                                onPress={() => this.props.navigation.navigate("LeaveFeedback")}
                                style={{ width: 130, backgroundColor: '#007bff', borderRadius: 28, paddingVertical: 10, alignItems: 'center', marginLeft: 35 }}>
                                <       Text style={{ fontSize: 14, fontWeight: 'bold', color: '#ffffff', textAlign: "center" }} >Leave Feedback</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                title="BuySame"
                                onPress={() => this.props.navigation.navigate("ShoppingCart")}
                                style={{ width: 130, backgroundColor: 'green', borderRadius: 28, paddingVertical: 10, alignItems: 'center', marginRight: 35 }}>
                                <       Text style={{ fontSize: 14, fontWeight: 'bold', color: '#ffffff', textAlign: "center" }} >Buy Same</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <View style={styles.popularContainer} >
                                <Image style={{ width: 130, height: 130, marginLeft: 20, marginTop: 25 }} source={require('../../assets/choco.jpg')} />
                            </View>
                            <View>
                                <Text style={{ marginTop: 40, fontSize: 15, fontWeight: 'bold', marginLeft: 10 }}>Chocolate Fudge Cake</Text>
                                <Text style={{ marginTop: 20, fontSize: 15, fontWeight: 'bold', marginLeft: 50 }}>Rs.5000.00</Text>
                            </View>
                        </View>

                        <View style={{ marginTop: 20, fontWeight: 'bold', backgroundColor: '#dddddd', width: '105%', height: 5 }} />

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 20 }}>
                            <TouchableOpacity
                                title="LeaveFeedback"
                                onPress={() => this.props.navigation.navigate("LeaveFeedback")}
                                style={{ width: 130, backgroundColor: '#007bff', borderRadius: 28, paddingVertical: 10, alignItems: 'center', marginLeft: 35 }}>
                                <       Text style={{ fontSize: 14, fontWeight: 'bold', color: '#ffffff', textAlign: "center" }} >Leave Feedback</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                title="BuySame"
                                onPress={() => this.props.navigation.navigate("ShoppingCart")}
                                style={{ width: 130, backgroundColor: 'green', borderRadius: 28, paddingVertical: 10, alignItems: 'center', marginRight: 35 }}>
                                <       Text style={{ fontSize: 14, fontWeight: 'bold', color: '#ffffff', textAlign: "center" }} >Buy Same</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <View style={styles.popularContainer} >
                                <Image style={{ width: 130, height: 130, marginLeft: 20, marginTop: 25 }} source={require('../../assets/ross.jpg')} />
                            </View>
                            <View>
                                <Text style={{ marginTop: 40, fontSize: 15, fontWeight: 'bold', marginLeft: 40 }}>Evelyn Flower</Text>
                                <Text style={{ marginTop: 20, fontSize: 15, fontWeight: 'bold', marginLeft: 50 }}>Rs.2000.00</Text>
                            </View>
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
        );
    }
}

const styles = StyleSheet.create({
    popularContainer: {
        height: 180,
        width: 170,
        borderRadius: 10,
        marginLeft: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#0f4c75',
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
        left: 10
    },
});