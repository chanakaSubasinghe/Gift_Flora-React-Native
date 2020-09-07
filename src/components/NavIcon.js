import React from 'react';
import { Image } from 'react-native';

export default function NavIcon({ icon, iconPosition }) {


    return (
        <Image style={{
            width: 32,
            height: 35,
            position: 'absolute',
            bottom: 38,
            [iconPosition]: iconPosition === 'alignSelf' ? 'center' : 15
        }} source={icon} />
    );
}
