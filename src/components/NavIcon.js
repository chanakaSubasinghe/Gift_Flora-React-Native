import React from 'react';
import { Image, TouchableWithoutFeedback, Platform } from 'react-native';

export default function NavIcon({ icon, iconPosition, onIconPressed }) {


    return (
        <TouchableWithoutFeedback onPress={() => onIconPressed()}>
            <Image style={{
                width: 32,
                height: 35,
                position: 'absolute',
                bottom: Platform.OS === 'ios' ? 38 : 20,
                tintColor: '#5f4b8bff',
                [iconPosition]: iconPosition === 'alignSelf' ? 'center' : 20
            }}
                source={icon} />

        </TouchableWithoutFeedback>
    );
}
