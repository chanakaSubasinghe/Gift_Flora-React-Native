
import React from 'react';
import { StyleSheet, Text, View, Button,StatusBar , TextInput , TouchableOpacity } from 'react-native';
import Logo from '../../components/Logo'
import {} from 'react-navigation'



export default class ForgotPasswordScreen extends React.Component {

    static navigationOptions = {
        title: "Forgot",
    };
   
   render(){
    return (
   
        <View style={{ marginHorizontal: 20, top: Platform.OS === 'android' && StatusBar.currentHeight }}>
            
            {/* Back Button */}
            <TouchableOpacity
              title="Login"
              onPress={() =>  this.props.navigation.navigate("Login")}>
                    <Text style={{ fontSize: 20, marginTop: 10 }}> Back</Text>
            </TouchableOpacity>

            <View style={{ alignItems: 'center', marginTop: 40 }}>
                <Text style={{ fontSize: 30 , color:'#880061' , marginBottom:30}}>Forgot Your Password ?</Text>
                <Logo />
            </View>

            <Text style={{ marginTop: 40, fontSize: 18 , color:'#5f4b8bff', textAlign:"center" }}> Please enter your Email address to reset password.</Text>

            {/* Email */}
            <View>
                <Text style={{ fontSize: 18, marginTop:50 , paddingHorizontal:15 }}> E-mail </Text>
                <TextInput style={{width:350 , backgroundColor:'#fae4fc' , borderRadius:25 , height:45 , paddingHorizontal:16 , fontSize:16}} />
              
            </View>



            {/* Reset Button*/}
            <View style={{ height: 40, marginTop: 20 }}>
                <TouchableOpacity style={{width:350 , backgroundColor:'#ff4b5c' , borderRadius:25 , paddingVertical:12}}>
                    <Text  style={{fontSize:20 , fontWeight:'500'  , color:'#ffffff' , textAlign:"center"}} >RESET PASSWORD</Text>
                </TouchableOpacity>
              
            </View>

 
           
        </View>
    );
    }
}

const styles = StyleSheet.create({});
