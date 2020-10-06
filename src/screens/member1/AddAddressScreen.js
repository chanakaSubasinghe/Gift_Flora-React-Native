import React from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, ScrollView } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { } from 'react-navigation'

export default class AddAddressScreen extends React.Component {
    render() {
        return (
            <ScrollView>
                <View style={{ marginHorizontal: 20, top: Platform.OS === 'android' && StatusBar.currentHeight }}>
                    <View style={{ alignItems: 'center', marginTop: 10 }}>
                        <Text style={{ fontSize: 20, marginTop: 10, fontWeight: 'bold' }}>ADD NEW ADDRESS</Text>
                    </View>
                    <View style={{ alignItems: 'flex-start' }}>

                        <View>
                            <Text style={{ fontSize: 15, marginTop: 10, fontWeight: 'bold' }}>Name :</Text>
                            <TextInput style={{ width: 350, backgroundColor: '#fae4fc', borderRadius: 25, height: 45, paddingHorizontal: 16, fontSize: 16 }} />
                        </View>

                        <View>
                            <Text style={{ fontSize: 15, marginTop: 10, fontWeight: 'bold' }}>Address :</Text>
                            <TextInput style={{ width: 350, backgroundColor: '#fae4fc', borderRadius: 25, height: 45, paddingHorizontal: 16, fontSize: 16 }} />
                        </View>

                        <View>
                            <Text style={{ fontSize: 15, marginTop: 10, fontWeight: 'bold' }}>Landmark :</Text>
                            <TextInput style={{ width: 350, backgroundColor: '#fae4fc', borderRadius: 25, height: 45, paddingHorizontal: 16, fontSize: 16 }} />
                        </View>

                        <View>
                            <Text style={{ fontSize: 15, marginTop: 10, fontWeight: 'bold' }}>Mobile Number :</Text>
                            <TextInput style={{ width: 350, backgroundColor: '#fae4fc', borderRadius: 25, height: 45, paddingHorizontal: 16, fontSize: 16 }} />
                        </View>

                        <View>
                            <Text style={{ fontSize: 15, marginTop: 10, fontWeight: 'bold' }}>City :</Text>
                            <TextInput style={{ width: 350, backgroundColor: '#fae4fc', borderRadius: 25, height: 45, paddingHorizontal: 16, fontSize: 16 }} />
                        </View>

                        <View>
                            <Text style={{ fontSize: 15, marginTop: 10, fontWeight: 'bold' }}>Outskirt(If the location is out of main city) :</Text>
                            <TextInput style={{ width: 350, backgroundColor: '#fae4fc', borderRadius: 25, height: 45, paddingHorizontal: 16, fontSize: 16 }} />
                        </View>

                        <View>
                            <Text style={{ fontSize: 15, marginTop: 10, fontWeight: 'bold' }}>pincode :</Text>
                            <TextInput style={{ width: 350, backgroundColor: '#fae4fc', borderRadius: 25, height: 45, paddingHorizontal: 16, fontSize: 16 }} />
                        </View>

                        <View>
                            <Text style={{ fontSize: 15, marginTop: 10, fontWeight: 'bold' }}>State :</Text>
                            <TextInput style={{ width: 350, backgroundColor: '#fae4fc', borderRadius: 25, height: 45, paddingHorizontal: 16, fontSize: 16 }} />
                        </View>

                        <View>
                            <Text style={{ fontSize: 15, marginTop: 10, fontWeight: 'bold' }}>Country :</Text>
                            <TextInput style={{ width: 350, backgroundColor: '#fae4fc', borderRadius: 25, height: 45, paddingHorizontal: 16, fontSize: 16 }} />
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
                            <TouchableOpacity
                                title="Cancel"
                                onPress={() => this.props.navigation.navigate("")}
                                style={{ width: 100, backgroundColor: '#df5e88', borderRadius: 28, paddingVertical: 10, alignItems: 'center', marginLeft: 20 }}>
                                <       Text style={{ fontSize: 14, fontWeight: '500', color: '#ffffff', textAlign: "center" }} >Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                title="Save"
                                onPress={() => this.props.navigation.navigate("")}
                                style={{ width: 100, backgroundColor: '#df5e88', borderRadius: 28, paddingVertical: 10, alignItems: 'center', marginLeft: 80 }}>
                                <       Text style={{ fontSize: 14, fontWeight: '500', color: '#ffffff', textAlign: "center" }} >Save</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({});
