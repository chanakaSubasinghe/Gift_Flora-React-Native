import React from 'react';
import { Image, TouchableWithoutFeedback } from 'react-native';

export default function NavIcon({ icon, iconPosition, onIconPressed }) {


    return (
        <TouchableWithoutFeedback onPress={() => onIconPressed(icon)}>
            <Image style={{
                width: 32,
                height: 35,
                position: 'absolute',
                bottom: 38,
                tintColor: '#2d4059',
                [iconPosition]: iconPosition === 'alignSelf' ? 'center' : 20
            }}
                source={icon} />

        </TouchableWithoutFeedback>
    );
}
