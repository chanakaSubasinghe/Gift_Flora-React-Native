import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import NavIcon from './NavIcon';

import homeIcon from '../assets/home.png';
import shoppingCartIcon from '../assets/shoppingCart.png';
import userIcon from '../assets/user.png';


export default function HomeNav() {
    return (
        <View style={styles.container}>
            <View style={styles.navBar}>

                <NavIcon
                    icon={homeIcon}
                    iconPosition="left"
                />

                <NavIcon
                    icon={shoppingCartIcon}
                    iconPosition="alignSelf"
                />

                <NavIcon
                    icon={userIcon}
                    iconPosition="right"
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    navBar: {
        backgroundColor: '#fc5c65',
        width: '100%',
        height: 80
    }
});
