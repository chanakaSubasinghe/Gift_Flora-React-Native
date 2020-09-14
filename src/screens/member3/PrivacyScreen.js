import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function PrivacyScreen() {
    return (
        <View style={{ marginHorizontal: 20, top: Platform.OS === 'android' && StatusBar.currentHeight }}>

            <Text style={{ fontSize: 20, marginTop: 10 }}>Back</Text>

            <View style={{ alignItems: 'center', marginTop: 30 }}>
                <Text style={{ fontSize: 30 }}>Privacy and Policy</Text>
            </View>

            <Text style={{ marginTop: 20, fontSize: 18 }}>Lorem Ipsum is simply dummy text of
            the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it
            to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged.
             </Text>


            <Text style={{ marginTop: 10, fontSize: 18 }}>Lorem Ipsum is simply dummy text of
            the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it
            to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged.
             </Text>


            <Text style={{ marginTop: 10, fontSize: 18 }}>Lorem Ipsum is simply dummy text of
            the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it
            to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged.
             </Text>



            <Text style={{ marginTop: 10, fontSize: 18 }}>Lorem Ipsum is simply dummy text of
            the printing and typesetting industry.
             </Text>
        </View>
    );
}

const styles = StyleSheet.create({});
