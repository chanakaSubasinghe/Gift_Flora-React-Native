
import React from 'react';
import { StyleSheet, Text, View, Button,StatusBar , TextInput , TouchableOpacity,Platform } from 'react-native';
import Logo from '../../components/Logo'


export default class LoginScreen extends React.Component {

    static navigationOptions = {
        title: "Sign Up",
    };
    render(){
    return (
        <View style={{ marginHorizontal: 20, top: Platform.OS === 'android' && StatusBar.currentHeight }}>
            
            {/* Back button */}
            <TouchableOpacity
              title="Login"
              onPress={() =>  this.props.navigation.navigate("Login")}>
                    <Text style={{ fontSize: 20, marginTop: 10 }}> Back</Text>
            </TouchableOpacity>

            <View style={{ alignItems: 'center', marginTop: 20 }}>
                <Text style={{ fontSize: 30 , color:'#880061' , marginBottom:10}}> Welcome !</Text>
                <Logo />
            </View>

            {/* Username */}
            <View>
                <Text style={{ fontSize: 20, marginTop:10 , paddingHorizontal:15 }}>Username</Text>
                <TextInput style={{width:350 , backgroundColor:'#fae4fc' , borderRadius:25 , height:45 , paddingHorizontal:16 , fontSize:16}} />
               
            </View>

             {/* E-mail */}
             <View>
                <Text style={{ fontSize: 20, marginTop:10 , paddingHorizontal:15 }}>E-mail</Text>
                <TextInput style={{width:350 , backgroundColor:'#fae4fc' , borderRadius:25 , height:45 , paddingHorizontal:16 , fontSize:16}} />      
            </View>

            {/* Password */}
            <View>
                <Text style={{ fontSize: 20, marginTop: 10 , paddingHorizontal:15 }}>Password</Text>
                <TextInput minLength={5} maxLength={15} secureTextEntry={true} style={{width:350 , backgroundColor:'#fae4fc' , borderRadius:25 , height:45 , paddingHorizontal:16 , fontSize:16}} />
            </View>


            {/* SignUp button*/}
            <View style={{ height: 40, marginTop: 20 }}>
                <TouchableOpacity style={{width:350 , backgroundColor:'#5d54a4' , borderRadius:25 , paddingVertical:12}}>
                    <Text  style={{fontSize:20 , fontWeight:'500'  , color:'#ffffff' , textAlign:"center"}} >SIGN UP</Text>
                </TouchableOpacity>
               
            </View>

 
            {/* Sign In */}
            <View style={{ alignItems: 'center', marginTop:80 , justifyContent:'center', flexDirection:'row'  }}>
                <Text style={{ alignItems: 'center', fontSize: 17 }}>Already have an account ? </Text>
              
                <TouchableOpacity 
                    title="Sign Up"
                    onPress={() =>  this.props.navigation.navigate("Login")}
                    style={{width:100 , backgroundColor:'#b1006a' , borderRadius:28 , paddingVertical:10,alignItems: 'center' }}>
                    <Text style={{fontSize:14, fontWeight:'500'  , color:'#ffffff' , textAlign:"center" }} >SIGN IN</Text>
                </TouchableOpacity>
         
        </View>
 
        </View>
    );
    }
}

const styles = StyleSheet.create({});
