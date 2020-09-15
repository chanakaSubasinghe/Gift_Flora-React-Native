import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

export default function AboutScreen() {
    return (
        <View style={{ marginHorizontal: 20, top: Platform.OS === 'android' && StatusBar.currentHeight }}>

            <Text style={{ fontSize: 20, marginTop: 10 }}>Back</Text>

            <View style={{ alignItems: 'center', marginTop: 50 }}>
                <Text style={{ fontSize: 40 }}>About US</Text>

                <View style={{ width: 150, height: 150, backgroundColor: 'red', marginTop: 50 }}></View>

                <Text style={{ marginTop: 50, fontSize: 17 }}>
                    Lorem Ipsum is simply dummy text of the printing
                    and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled
                    it to make a type specimen book. It has survived not only
                    five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged. It was
                    popularised in the 1960s with the release of Letraset
                    sheets containing Lorem Ipsum passages, and more recently with
                    desktop publishing software like Aldus PageMaker including
                versions of Lorem Ipsum</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({});
