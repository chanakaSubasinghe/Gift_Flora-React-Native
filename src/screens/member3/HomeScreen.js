import React, { useState } from 'react';
import { FlatList, Platform, StatusBar, StyleSheet, Text, View, ScrollView } from 'react-native';
import { SearchBar, Icon, Card } from 'react-native-elements';
import uuid from 'uuid';

export default function HomeScreen() {

    const [categories, setCategories] = useState([
        {
            id: uuid(),
            categoryName: 'Birthday',
        },
        {
            id: uuid(),
            categoryName: 'Anniversary',
        },
        {
            id: uuid(),
            categoryName: 'Birthday',
        }
    ]);

    return (
        // <View>
        //     <Text style={styles.text}>Home Screen</Text>
        //     <FlatList
        //         horizontal
        //         data={categories}
        //         renderItem={({ item }) => (<Text>{item.categoryName}</Text>)}
        //     />
        // </View>
        <ScrollView>
            <View style={{ marginHorizontal: 20, top: Platform.OS === 'android' && StatusBar.currentHeight }}>


                <View style={{ marginTop: 15 }}>
                    <SearchBar
                        placeholder="Search..."
                    />
                </View>



                <View style={{
                    height: '20%',
                    backgroundColor: 'lightblue',
                    marginVertical: 15
                }} />

                <Text style={{ fontSize: 30, marginVertical: 15 }}>Categories</Text>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 20 }}>
                    <View style={{
                        height: 60,
                        width: 60,
                        borderRadius: 100,
                        backgroundColor: 'lightpink'
                    }} />

                    <View style={{
                        height: 60,
                        width: 60,
                        borderRadius: 100,
                        backgroundColor: 'lightpink'
                    }} />

                    <View style={{
                        height: 60,
                        width: 60,
                        borderRadius: 100,
                        backgroundColor: 'lightpink'
                    }} />

                    <View style={{
                        height: 60,
                        width: 60,
                        borderRadius: 100,
                        backgroundColor: 'lightpink'
                    }} />
                </View>

                <Text style={{ fontSize: 30, marginVertical: 15 }}>Most Popular</Text>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 20 }}>

                    <View style={{
                        height: 180,
                        width: 170,
                        borderRadius: 10,
                        backgroundColor: 'orange'
                    }} />

                    <View style={{
                        height: 180,
                        width: 170,
                        borderRadius: 10,
                        backgroundColor: 'orange'
                    }} />


                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({

});
