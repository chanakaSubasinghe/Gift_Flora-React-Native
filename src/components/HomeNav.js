import React from 'react';
import { StyleSheet, Text, View, Image, Platform } from 'react-native';

import NavIcon from './NavIcon';

import homeIcon from '../assets/home.png';
import shoppingCartIcon from '../assets/shoppingCart.png';
import userIcon from '../assets/user.png';


export default function HomeNav() {


    function onIconPressed(icon) {
        console.log('icon pressed', icon);
    }

    return (
        <View style={styles.container}>
            <View style={styles.navBar}>

                <NavIcon
                    icon={homeIcon}
                    iconPosition="left"
                    onIconPressed={onIconPressed}
                />

                <NavIcon
                    icon={shoppingCartIcon}
                    iconPosition="alignSelf"
                    onIconPressed={onIconPressed}
                />

                <NavIcon
                    icon={userIcon}
                    iconPosition="right"
                    onIconPressed={onIconPressed}
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
        backgroundColor: '#ea5455',
        // backgroundColor: '#4ecdc4',
        width: '100%',
        height: Platform.OS === 'ios' ? 80 : 65
    }
});
