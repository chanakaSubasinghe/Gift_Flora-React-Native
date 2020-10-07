import React from 'react';
import { StyleSheet, Text, View, StatusBar, Button, TouchableOpacity, SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { } from 'react-navigation'

export default class EditAddressScreen extends React.Component {
    render() {
        return (

            <SafeAreaView style={{ marginHorizontal: 20, top: Platform.OS === 'android' && StatusBar.currentHeight }}>
                <ScrollView style={styles.ScrollView}>
                    <View style={{ alignItems: 'center', marginTop: 10 }}>
                        <Text style={{ fontSize: 20, marginTop: 10, fontWeight: 'bold' }}>EDIT ADDRESS</Text>
                    </View>
                    <View style={{ alignItems: 'flex-start' }}>

                        <View>
                            <Text style={{ fontSize: 15, marginTop: 10, fontWeight: 'bold' }}>Name :</Text>
                            <View style={{ width: 330, backgroundColor: '#fae4fc', borderRadius: 25, height: 45, paddingHorizontal: 16, fontSize: 16, marginTop: 10 }}>
                                <Text style={{ fontSize: 15, marginTop: 15 }}>Liyara Karunarathna</Text>
                            </View>
                        </View>

                        <View>
                            <Text style={{ fontSize: 15, marginTop: 10, fontWeight: 'bold' }}>Address :</Text>
                            <View style={{ width: 330, backgroundColor: '#fae4fc', borderRadius: 25, height: 45, paddingHorizontal: 16, fontSize: 16, marginTop: 10 }}>
                                <Text style={{ fontSize: 15, marginTop: 5 }}>No.198/A, D.S Senanayake road, Kandy</Text>
                            </View>
                        </View>

                        <View>
                            <Text style={{ fontSize: 15, marginTop: 10, fontWeight: 'bold' }}>Landmark :</Text>
                            <View style={{ width: 330, backgroundColor: '#fae4fc', borderRadius: 25, height: 45, paddingHorizontal: 16, fontSize: 16, marginTop: 10 }}></View>
                        </View>

                        <View>
                            <Text style={{ fontSize: 15, marginTop: 10, fontWeight: 'bold' }}>Mobile Number :</Text>
                            <View style={{ width: 330, backgroundColor: '#fae4fc', borderRadius: 25, height: 45, paddingHorizontal: 16, fontSize: 16, marginTop: 10 }}>
                                <Text style={{ fontSize: 15, marginTop: 5 }}>(+94) 77 888 369</Text>
                            </View>
                        </View>

                        <View>
                            <Text style={{ fontSize: 15, marginTop: 10, fontWeight: 'bold' }}>City :</Text>
                            <View style={{ width: 330, backgroundColor: '#fae4fc', borderRadius: 25, height: 45, paddingHorizontal: 16, fontSize: 16, marginTop: 10 }}>
                                <Text style={{ fontSize: 15, marginTop: 5 }}>Kandy</Text>
                            </View>
                        </View>

                        <View>
                            <Text style={{ fontSize: 15, marginTop: 10, fontWeight: 'bold' }}>Outskirt(If the location is out of main city) :</Text>
                            <View style={{ width: 330, backgroundColor: '#fae4fc', borderRadius: 25, height: 45, paddingHorizontal: 16, fontSize: 16, marginTop: 10 }}></View>
                        </View>

                        <View>
                            <Text style={{ fontSize: 15, marginTop: 10, fontWeight: 'bold' }}>pincode :</Text>
                            <View style={{ width: 330, backgroundColor: '#fae4fc', borderRadius: 25, height: 45, paddingHorizontal: 16, fontSize: 16, marginTop: 10 }}>
                                <Text style={{ fontSize: 15, marginTop: 5 }}>632589</Text>
                            </View>
                        </View>

                        <View>
                            <Text style={{ fontSize: 15, marginTop: 10, fontWeight: 'bold' }}>State :</Text>
                            <View style={{ width: 330, backgroundColor: '#fae4fc', borderRadius: 25, height: 45, paddingHorizontal: 16, fontSize: 16, marginTop: 10 }}></View>
                        </View>

                        <View>
                            <Text style={{ fontSize: 15, marginTop: 10, fontWeight: 'bold' }}>Country :</Text>
                            <View style={{ width: 330, backgroundColor: '#fae4fc', borderRadius: 25, height: 45, paddingHorizontal: 16, fontSize: 16, marginTop: 10 }}>
                                <Text style={{ fontSize: 15, marginTop: 5 }}>Sri Lanka</Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <TouchableOpacity
                                title="Cancel"
                                onPress={() => this.props.navigation.navigate("MyAddress")}
                                style={{ width: 100, backgroundColor: '#df5e88', borderRadius: 28, paddingVertical: 10, alignItems: 'center', marginLeft: 20 }}>
                                <       Text style={{ fontSize: 14, fontWeight: '500', color: '#ffffff', textAlign: "center" }} >Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                title="Save"
                                onPress={() => this.props.navigation.navigate("MyAddress")}
                                style={{ width: 100, backgroundColor: '#df5e88', borderRadius: 28, paddingVertical: 10, alignItems: 'center', marginLeft: 80 }}>
                                <       Text style={{ fontSize: 14, fontWeight: '500', color: '#ffffff', textAlign: "center" }} >Save</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </ScrollView>
            </SafeAreaView >

        )
    }
}

const styles = StyleSheet.create({
    ScrollView: {

    }
});