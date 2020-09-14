import React from 'react';
import { StyleSheet, Text, View, Platform, Button } from 'react-native';

export default function ViewItemScreen() {
    return (
        <View style={{ marginHorizontal: 20, top: Platform.OS === 'android' && StatusBar.currentHeight }}>

            <Text style={{ fontSize: 20, marginTop: 10 }}>Back</Text>

            <View style={{ height: 300, backgroundColor: 'brown', marginTop: 20 }}></View>

            <Text style={{ fontSize: 20, marginTop: 20 }}>Rs. 1500</Text>

            <Text style={{ fontSize: 30, marginTop: 10, color: 'gray' }}>Bouquet of Bouquets</Text>

            <Text style={{ fontSize: 40, marginTop: 20 }}>Description</Text>

            <Text style={{ marginTop: 10, fontSize: 15 }}>Lorem Ipsum is simply dummy text of
            the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it
            to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged.
             </Text>

            <View style={{ flexDirection: 'row', marginTop: 40 }}>
                <View style={{ height: 40, width: 150, backgroundColor: 'lightblue', borderRadius: 20 }}>
                    <Button title="Add to Cart" onPress={() => console.log('reset')} />
                </View>

                <View style={{ height: 40, width: 150, backgroundColor: 'lightpink', position: 'absolute', right: 20, borderRadius: 20 }}>
                    <Button title="Buy Now" onPress={() => console.log('reset')} />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({});
