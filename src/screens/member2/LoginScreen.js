import React from 'react';
import { StyleSheet, Text, View, Button,StatusBar , TextInput , TouchableOpacity, Platform } from 'react-native';
import Logo from '../../components/Logo'
import {} from 'react-navigation'

export default class LoginScreen extends React.Component {

    static navigationOptions = {
        title: "Login",
    };
   
   render(){
    return (
   
        <View style={{ marginHorizontal: 20, top: Platform.OS === 'android' && StatusBar.currentHeight }}>
            
            {/* Back Button */}
            <TouchableOpacity>
                    <Text style={{ fontSize: 20, marginTop: 10 }}> Back</Text>
            </TouchableOpacity>

            <View style={{ alignItems: 'center', marginTop: 20 }}>
                <Text style={{ fontSize: 30 , color:'#880061' , marginBottom:10}}>Welcome Back !</Text>
                <Logo />
            </View>

            {/* Username */}
            <View>
                <Text style={{ fontSize: 20, marginTop:30 , paddingHorizontal:15 }}>Username</Text>
                <TextInput style={{width:350 , backgroundColor:'#fae4fc' , borderRadius:25 , height:45 , paddingHorizontal:16 , fontSize:16}} />
            </View>

            {/* Password */}
            <View>
                <Text style={{ fontSize: 20, marginTop: 10 , paddingHorizontal:15 }}>Password</Text>
                <TextInput minLength={5} maxLength={15} secureTextEntry={true} style={{width:350 , backgroundColor:'#fae4fc' , borderRadius:25 , height:45 , paddingHorizontal:16 , fontSize:16}} />
            </View>


            {/* Login Button */}
            <View style={{ height: 40, marginTop: 20 }}>
                <TouchableOpacity style={{width:350 , backgroundColor:'#2ec1ac' , borderRadius:25 , paddingVertical:12}}>
                    <Text  style={{fontSize:20 , fontWeight:'500'  , color:'#ffffff' , textAlign:"center"}} >LOGIN</Text>
                </TouchableOpacity>
            {/* Forgot Screen Button */}
                <View style={{ alignItems: 'center', marginTop: 10 }}>
                    <TouchableOpacity 
                     title="Forgot"
                     onPress={() =>  this.props.navigation.navigate("Forgot")}>
                        <Text style={{ fontSize: 16, color: '#b1006a', textDecorationLine: 'underline' }}>forgot password ?</Text>
                    </TouchableOpacity>   
                </View>
            </View>

 
            {/* Sign Up Button */}
            <View style={{ alignItems: 'center', marginTop:140 , justifyContent:'center', flexDirection:'row'  }}>
                <Text style={{ alignItems: 'center', fontSize: 17 }}>Don't have an account yet? </Text>
              
                <TouchableOpacity  
                        title="Sign Up"
                        onPress={() =>  this.props.navigation.navigate("Register")}
                        style={{width:100 , backgroundColor:'#b1006a' , borderRadius:28 , paddingVertical:10,alignItems: 'center' }}>
                    <       Text style={{fontSize:14, fontWeight:'500'  , color:'#ffffff' , textAlign:"center" }} >SIGN UP</Text>
                </TouchableOpacity>
         
        </View>
 
        </View>
    );
    }
}

const styles = StyleSheet.create({});
