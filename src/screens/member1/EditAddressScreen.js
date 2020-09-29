import React from 'react';
import { StyleSheet, Text, View, StatusBar, Button } from 'react-native';

export default function EditAddressScreen() {
    return (
        <View style={{ marginHorizontal: 20, top: Platform.OS === 'android' && StatusBar.currentHeight }}>
            <View style={{ alignItems: 'center', marginTop: 10 }}>
                <Text style={{ fontSize: 20, marginTop: 10, fontWeight: 'bold' }}>EDIT ADDRESS</Text>
            </View>
            <View style={{ alignItems: 'flex-start' }}>

                <View>
                    <Text style={{ fontSize: 15, marginTop: 10, fontWeight: 'bold' }}>Name :</Text>
                    <View style={{ height: 28, width: 340, backgroundColor: '#e8e8e8', marginTop: 10 }}>
                        <Text style={{ fontSize: 15, marginTop: 5 }}>Liyara Karunarathna</Text>
                    </View>
                </View>

                <View>
                    <Text style={{ fontSize: 15, marginTop: 10, fontWeight: 'bold' }}>Address :</Text>
                    <View style={{ height: 28, width: 340, backgroundColor: '#e8e8e8', marginTop: 10 }}>
                        <Text style={{ fontSize: 15, marginTop: 5 }}>No.198/A, D.S Senanayake road, Kandy</Text>
                    </View>
                </View>

                <View>
                    <Text style={{ fontSize: 15, marginTop: 10, fontWeight: 'bold' }}>Landmark :</Text>
                    <View style={{ height: 28, width: 340, backgroundColor: '#e8e8e8', marginTop: 10 }}></View>
                </View>

                <View>
                    <Text style={{ fontSize: 15, marginTop: 10, fontWeight: 'bold' }}>Mobile Number :</Text>
                    <View style={{ height: 28, width: 340, backgroundColor: '#e8e8e8', marginTop: 10 }}>
                        <Text style={{ fontSize: 15, marginTop: 5 }}>(+94) 77 888 369</Text>
                    </View>
                </View>

                <View>
                    <Text style={{ fontSize: 15, marginTop: 10, fontWeight: 'bold' }}>City :</Text>
                    <View style={{ height: 28, width: 340, backgroundColor: '#e8e8e8', marginTop: 10 }}>
                        <Text style={{ fontSize: 15, marginTop: 5 }}>Kandy</Text>
                    </View>
                </View>

                <View>
                    <Text style={{ fontSize: 15, marginTop: 10, fontWeight: 'bold' }}>Outskirt(If the location is out of main city) :</Text>
                    <View style={{ height: 25, width: 340, backgroundColor: '#e8e8e8', marginTop: 10 }}></View>
                </View>

                <View>
                    <Text style={{ fontSize: 15, marginTop: 10, fontWeight: 'bold' }}>pincode :</Text>
                    <View style={{ height: 25, width: 340, backgroundColor: '#e8e8e8', marginTop: 10 }}>
                        <Text style={{ fontSize: 15, marginTop: 5 }}>632589</Text>
                    </View>
                </View>

                <View>
                    <Text style={{ fontSize: 15, marginTop: 10, fontWeight: 'bold' }}>State :</Text>
                    <View style={{ height: 25, width: 340, backgroundColor: '#e8e8e8', marginTop: 10 }}></View>
                </View>

                <View>
                    <Text style={{ fontSize: 15, marginTop: 10, fontWeight: 'bold' }}>Country :</Text>
                    <View style={{ height: 25, width: 340, backgroundColor: '#e8e8e8', marginTop: 10 }}>
                        <Text style={{ fontSize: 15, marginTop: 5 }}>Sri Lanka</Text>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
                    <Button title="CANCEL"></Button>
                    <Button title="SAVE"></Button>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({});