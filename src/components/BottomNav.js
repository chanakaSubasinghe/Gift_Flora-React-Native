import React from 'react';
import { StyleSheet, View, Platform } from 'react-native';

import NavIcon from './NavIcon';

import homeIcon from '../assets/home.png';
import shoppingCartIcon from '../assets/shoppingCart.png';
import userIcon from '../assets/user.png';


export default function BottomNav() {


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
        backgroundColor: '#fff',
        width: '100%',
        height: Platform.OS === 'ios' ? 80 : 65,
        borderTopWidth: 0.5,
        borderStartWidth: 2
    }
});
