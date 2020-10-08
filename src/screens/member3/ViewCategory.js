import React from 'react';
import { StyleSheet, Text, View, Platform, TouchableWithoutFeedback,TextInput, StatusBar, Image, ScrollView , TouchableOpacity } from 'react-native';


import userIcon from '../../assets/user.png';
import homeIcon from '../../assets/home.png';
import shoppingCartIcon from '../../assets/shoppingCart.png';

export default class ViewCategory extends React.Component {

    static navigationOptions = {
        title: "ViewCategory"
    };
    render() {
        return (
            <>
                <View style={{ marginHorizontal: 20 }}>

                <ScrollView>

                        <TouchableOpacity
                            title="Home"
                            onPress={() => this.props.navigation.navigate("Home")}>
                            <Text style={styles.backButton}>{`< Back`}</Text>
                        </TouchableOpacity>

                        <View style={styles.mostPopularContainer}>
                            <Text style={styles.mostPopularText}>Love</Text>
                        </View>

                        <TextInput placeholder='Search' style={styles.userInput} />
                        
                        <View style={styles.itemContainer}>

                        <TouchableOpacity>
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

                        <TouchableOpacity>
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

                    <TouchableOpacity>
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
        marginTop: 30
    },
    userInput: {
        width: 350,
        top: 6,
        backgroundColor: '#fff',
        borderColor: '#d6d6d6',
        borderWidth: 2,
        borderRadius: 25,
        height: 45,
        paddingHorizontal: 16,
        fontSize: 18,
        fontStyle:'italic'
    },
    mostPopularContainer: {
        padding: 16,
        paddingTop: 20
    },
    mostPopularText: {
        fontSize: 35,
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

    popularContainer: {
        height: 180,
        width: 170,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'gray',
        backgroundColor: '#fff',
        marginTop:10
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
