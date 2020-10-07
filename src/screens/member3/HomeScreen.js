import React, { useState } from 'react';
import { FlatList, Platform, TouchableWithoutFeedback, StyleSheet, Text, View, ScrollView, Image, ImageBackground, TouchableOpacity, TextInput, Feather, PickerIOSComponent } from 'react-native';
import { SearchBar, Card } from 'react-native-elements';


import userIcon from '../../assets/user.png';
import homeIcon from '../../assets/home.png';
import shoppingCartIcon from '../../assets/shoppingCart.png';

export default class HomeScreen extends React.Component {

    static navigationOptions = {
        title: "Home",
    };

    render() {
        return (

            <>
                <View>
                    {/* Search Container */}
                    <View>
                        <Image style={{ width: '100%', height: 270, borderBottomRightRadius: 65 }} source={require('../../assets/Back.jpg')} />
                    </View>
                    <View style={styles.DarkOverRelay}>
                        <View style={styles.searchContainer}>
                            <Text style={styles.userGreet}>Hi Chanaka !</Text>
                            <Text style={styles.userText}>What do you like to shop today ?</Text>
                        </View>
                        <View>
                            <TextInput style={styles.searchBox}
                                placeholder='Search Gift'
                                placeholderTextColor='#000' >
                            </TextInput>
                        </View>

                    </View>

                    {/* Category List */}
                    <ScrollView>
                        <View style={{ padding: 16 }}>
                            <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Categories</Text>
                        </View>

                        <View style={{ flexDirection: 'row' }} >
                            <TouchableOpacity>
                                <Image style={styles.categoryIcon} source={require('../../assets/cart.png')} />
                                <Text style={{ marginLeft: 40, color: '#880061' }}>Love</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image style={styles.categoryIcon} source={require('../../assets/cake.png')} />
                                <Text style={{ marginLeft: 30, color: '#880061' }}>Birthday</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image style={styles.categoryIcon} source={require('../../assets/giftcard.png')} />
                                <Text style={{ marginLeft: 30, color: '#880061' }}>Buisness</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image style={styles.categoryIcon} source={require('../../assets/flowers.png')} />
                                <Text style={{ marginLeft: 20, color: '#880061' }}>Anniversary</Text>
                            </TouchableOpacity>
                        </View>


                        {/* Most Popular List */}
                        <View style={{ padding: 16, paddingTop: 20 }}>
                            <Text style={{ fontSize: 21, fontWeight: 'bold' }}>Most Popular</Text>
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 10 }}>

                            <TouchableOpacity
                                title="ViewItem"
                                onPress={() => this.props.navigation.navigate("ViewItem")}>
                                <View style={styles.popularContainer} >
                                    <Image style={{ width: 100, height: 100, marginLeft: 35, marginTop: 20 }} source={require('../../assets/choco.jpg')} />
                                    <Text style={styles.populatText}>Chocolate Fudge Cake</Text>
                                    <Text style={styles.popularPrice}>Rs 5000.00</Text>
                                </View>

                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={styles.popularContainer} >
                                    <Image style={{ width: 100, height: 100, marginLeft: 35, marginTop: 20 }} source={require('../../assets/ross.jpg')} />
                                    <Text style={styles.populatText}>Evelyn Flower</Text>
                                    <Text style={styles.popularPrice}>Rs 2000.00</Text>
                                </View>
                            </TouchableOpacity>

                        </View>

                    </ScrollView>

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
    DarkOverRelay: {
        position: 'absolute',
        top: 0,
        right: 0,
        width: '100%',
        height: 270,
        backgroundColor: "#000",
        opacity: 0.65,
        borderBottomRightRadius: 65
    },
    searchContainer: {
        paddingTop: 100,
        paddingLeft: 16
    },
    userGreet: {
        fontSize: 38,
        fontWeight: 'bold',
        color: 'white'
    },
    userText: {
        fontSize: 16,
        fontWeight: 'normal',
        color: 'white'
    },
    searchBox: {
        marginTop: 16,
        backgroundColor: '#fff',
        paddingLeft: 24,
        padding: 12,
        borderTopRightRadius: 40,
        borderBottomRightRadius: 40,
        width: '90%'

    },
    item: {
        marginTop: 24,
        padding: 10,
        backgroundColor: 'pink',
        fontSize: 24,
        marginHorizontal: 10,
        marginTop: 24,
        borderRadius: 100

    },
    categoryIcon: {
        width: 70,
        height: 70,
        borderRadius: 100,
        marginLeft: 20
    },
    popularContainer: {
        height: 180,
        width: 170,
        borderRadius: 10,
        backgroundColor: '#ffe0f7'
    },
    populatText: {
        marginTop: 10,
        marginLeft: 8
    },
    popularPrice: {
        marginTop: 5,
        marginLeft: 8
    }


});


