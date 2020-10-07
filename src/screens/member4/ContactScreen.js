import React from 'react';
import { StyleSheet, Text, View, StatusBar, Button,Platform } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default function ContactScreen(){

    return(
        <View style={{ marginHorizontal: 20, top: Platform.OS === 'android' && StatusBar.currentHeight }}>
            <View style={{ alignItems: 'center', marginTop: 30 }}>
                <Text style={{ fontSize: 20, marginTop: 10, fontWeight: 'bold', backgroundColor: 'grey', width: '100%', textAlign: 'center', height: 30 }}>Contact Us</Text>
            </View>

            <View style={{ alignItems: 'flex-start', marginLeft: 20 }}>

            <View>
                <Text style={{ fontSize: 15, marginTop: 10, fontWeight: 'bold' }}>Full Name :</Text>
                <TextInput style={{ height: 28, width: 340, backgroundColor: '#e8e8e8', marginTop: 10 }}/>
            </View>

            <View>
                <Text style={{ fontSize: 15, marginTop: 10, fontWeight: 'bold' }}>Email :</Text>
                <TextInput style={{ height: 28, width: 340, backgroundColor: '#e8e8e8', marginTop: 10 }}/>
            </View>

            <View>
                <Text style={{ fontSize: 15, marginTop: 10, fontWeight: 'bold' }}>Contact Number :</Text>
                <TextInput style={{ height: 28, width: 340, backgroundColor: '#e8e8e8', marginTop: 10 }}/>
            </View>       

            <View>
                <Text style={{ fontSize: 15, marginTop: 10, fontWeight: 'bold' }}>Inquiry About :</Text>
                <TextInput style={{ height: 28, width: 340, backgroundColor: '#e8e8e8', marginTop: 10 }}/>
            </View> 

            <View>
                <Text style={{ fontSize: 15, marginTop: 10, fontWeight: 'bold' }}>Description :</Text>
                <TextInput style={{ height: 28, width: 340, backgroundColor: '#e8e8e8', marginTop: 10 }}/>
            </View> 
            
             <View style={{marginTop: 20, marginLeft: 130}}>
                 <Button title="Submit"></Button>
            </View>          

            </View>
        </View>
    )
}


const styles = StyleSheet.create({});