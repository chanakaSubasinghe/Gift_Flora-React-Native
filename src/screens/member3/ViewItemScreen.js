import React from 'react';
import { StyleSheet, Text, View, Platform, TouchableWithoutFeedback, StatusBar, Image, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


import userIcon from '../../assets/user.png';
import homeIcon from '../../assets/home.png';
import shoppingCartIcon from '../../assets/shoppingCart.png';

export default class ViewItemScreen extends React.Component {

    static navigationOptions = {
        title: "ViewItem"
    };
    render() {
        return (
            <>
                <View style={{ marginHorizontal: 20 }}>

                    <ScrollView >

                        <TouchableOpacity
                            title="Home"
                            onPress={() => this.props.navigation.navigate("Home")}>
                            <Text style={styles.backButton}>{`< Back`}</Text>
                        </TouchableOpacity>

                        <Image style={styles.image} source={require('../../assets/choco.jpg')} />

                        <Text style={styles.price}>Rs. 1500</Text>

                        <Text style={styles.heading}>Chocolate Fudge Cake</Text>

                        <Text style={styles.desHeading}>Description</Text>

                        <Text style={styles.description}>A chocolate Fudge cake is a cake made with
                        chocolate or cocoa. The ingredients are put into a bowl and mixed together; then the
                        mixed ingredients are put into a cake tin and put
                        in an oven until it is fully cooked.
                </Text>

                        <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'space-between' }}>
                            <TouchableOpacity>
                                <View style={{ height: 50, width: 150, backgroundColor: '#17a2b8', borderRadius: 20, justifyContent: 'center', marginLeft: 10 }}>
                                    <Text style={{ textAlign: 'center', color: 'white', fontSize: 18, fontWeight: 'bold', }}>Add to Cart</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={{ height: 50, width: 150, backgroundColor: 'tomato', borderRadius: 20, justifyContent: 'center' }}>
                                    <Text style={{ textAlign: 'center', color: 'white', fontSize: 18, fontWeight: 'bold', }}>Buy Now</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View style={{ height: 80 }}></View>

                    </ScrollView>

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
    backButton: {
        fontSize: 20,
        marginTop: 40
    },

    image: {
        height: 350,
        width: 350,
        alignContent: 'center',
        marginTop: 10
    },
    price: {
        fontSize: 20,
        marginTop: 20,
        backgroundColor: '#ffefa0',

        padding: 10,
        width: 120,
        color: '#d7385e',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    heading: {
        fontSize: 30,
        marginTop: 10,
        color: 'gray'
    },
    desHeading: {
        fontSize: 20,
        marginTop: 20,
        fontWeight: 'bold'
    },
    description: {
        marginTop: 10,
        fontSize: 15
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
