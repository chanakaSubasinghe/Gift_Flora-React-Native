import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class Logo extends Component {
    render() {
        return (
            <Image style={{ width: 130, height: 130, borderRadius: 60, top: 15 }} source={require('../assets/gift.jpg')} />
        );
    }
} 