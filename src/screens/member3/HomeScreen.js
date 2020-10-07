import React from 'react';
import { Platform, TouchableWithoutFeedback, StyleSheet, Text, View, ScrollView, Image, ImageBackground, TouchableOpacity, TextInput } from 'react-native';


import userIcon from '../../assets/user.png';
import homeIcon from '../../assets/home.png';
import shoppingCartIcon from '../../assets/shoppingCart.png';
import wallImage from '../../assets/back.jpeg';
import loveImg from '../../assets/cart.png';
import birthdayImg from '../../assets/cake.png';
import businessImg from '../../assets/giftcard.png';
import anniversaryImg from '../../assets/flowers.png';



export default class HomeScreen extends React.Component {

    static navigationOptions = {
        title: "Home",
    };

    render() {
        return (
            <>
                <ScrollView>
                    <View>
                        {/* Search Container */}
                        <View>
                            <Image style={styles.backgroundImage} source={wallImage} />
                        </View>
                        <View style={styles.DarkOverRelay}>
                            <View style={styles.searchContainer}>
                                <Text style={styles.userGreet}>Ayubowan !</Text>
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

                        <View style={styles.categoryContainer}>
                            <Text style={styles.categoryText}>Categories</Text>
                        </View>

                        <View style={styles.categoryRow} >

                            <TouchableOpacity>
                                <Image style={styles.categoryIcon} source={loveImg} />
                                <Text style={styles.categoryName}>Love</Text>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <Image style={styles.categoryIcon} source={birthdayImg} />
                                <Text style={styles.categoryName}>Birthday</Text>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <Image style={styles.categoryIcon} source={businessImg} />
                                <Text style={styles.categoryName}>Business</Text>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <Image style={styles.categoryIcon} source={anniversaryImg} />
                                <Text style={styles.categoryName}>Anniversary</Text>
                            </TouchableOpacity>

                        </View>


                        {/* Most Popular List */}
                        <View style={styles.mostPopularContainer}>
                            <Text style={styles.mostPopularText}>Most Popular</Text>
                        </View>

                        <View style={styles.itemContainer}>

                            <TouchableOpacity
                                title="ViewItem"
                                onPress={() => this.props.navigation.navigate("ViewItem")}>
                                <View style={styles.popularContainer} >
                                    <Image style={styles.itemImage} source={require('../../assets/choco.jpg')} />
                                    <Text style={styles.popularText}>Chocolate Fudge Cake</Text>
                                    <Text style={styles.popularPrice}>Rs 5000.00</Text>
                                </View>

                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={styles.popularContainer} >
                                    <Image style={styles.itemImage} source={require('../../assets/ross.jpg')} />
                                    <Text style={styles.popularText}>Evelyn Flower</Text>
                                    <Text style={styles.popularPrice}>Rs 2000.00</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.itemContainer}>

                            <TouchableOpacity
                                title="ViewItem"
                                onPress={() => this.props.navigation.navigate("ViewItem")}>
                                <View style={styles.popularContainer} >
                                    <Image style={styles.itemImage} source={require('../../assets/watch.jpg')} />
                                    <Text style={styles.popularText}>Mens Rolex Watch</Text>
                                    <Text style={styles.popularPrice}>Rs 50,000.00</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <View style={styles.popularContainer} >
                                    <Image style={styles.itemImage} source={require('../../assets/jewellary.jpg')} />
                                    <Text style={styles.popularText}>New Diamond</Text>
                                    <Text style={styles.popularPrice}>Rs 200000.00</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{ height: 80 }}></View>
                    </View>
                </ScrollView>
                {/* bottom navigation bar */}
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
    backgroundImage: {
        width: '100%',
        height: 270,
        borderBottomRightRadius: 65
    },
    categoryContainer: {
        padding: 16
    },
    categoryText: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    categoryRow: {
        flexDirection: 'row'
    },
    categoryName: {
        alignSelf: 'center',
        left: 10,
        color: '#880061'
    },
    mostPopularContainer: {
        padding: 16,
        paddingTop: 20
    },
    mostPopularText: {
        fontSize: 21,
        fontWeight: 'bold'
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 10
    },
    itemImage: {
        width: 100,
        height: 100,
        marginLeft: 35,
        marginTop: 20
    },
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
        borderWidth: 1,
        borderColor: 'gray',
        backgroundColor: '#fff'
    },
    popularText: {
        marginTop: 10,
        marginLeft: 8
    },
    popularPrice: {
        marginTop: 5,
        marginLeft: 8
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


