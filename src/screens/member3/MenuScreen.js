import React from 'react';
import { StyleSheet, Text, View, Button, Image, Platform, StatusBar , TouchableOpacity} from 'react-native';

// URLs
const profilePicture = "https://ik.imagekit.io/demo/img/smart_crop_blog/test_image_9_By_lQN-WE.jpeg?tr=w-200,h-200,fo-face:r-max";

// Section component
// function Section({ heading, subheadings }) {
//     return (
//         <View>
//             <Text style={styles.sectionHeading}>{heading}</Text>
//             <Text style={styles.sectionSubHeading}>{subheadings[0]}</Text>
//             <Text style={styles.sectionSubHeading}>{subheadings[1]}</Text>
//             <Text style={styles.sectionSubHeading}>{subheadings[2]}</Text>
//         </View>
//     );
// }

// function LogoutButton() {
//     return (
//         <View style={styles.loginButton}>
//             <Button title="Logout" color="white" onPress={() => console.log('logout')} />
//         </View>
//     );
// }

export default class MenuScreen extends React.Component{

    
    static navigationOptions = {
        title: "Menu",
    };

    render(){
    return (
        <View style={styles.container}>
            
           <TouchableOpacity
                title="Home"
                onPress={() =>  this.props.navigation.navigate("Home")}>
                <Text style={styles.backButton}> Back</Text>
            </TouchableOpacity>

            <View style={styles.imageContainer}>
                <Image source={{ uri: profilePicture }}
                    style={styles.profileImg}
                />
                <Text style={styles.userName}>Nilanthi Perera</Text>
            </View>
            
            <Text style={styles.sectionHeading}>My Account</Text>
            <TouchableOpacity>
                    <Text style={styles.sectionSubHeading}>Account Settings</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                    <Text style={styles.sectionSubHeading}>My Addresses</Text>
            </TouchableOpacity>
            <TouchableOpacity
            title="Forgot"
            onPress={() =>  this.props.navigation.navigate("Forgot")}>
                    <Text style={styles.sectionSubHeading}>Reset Password</Text>
            </TouchableOpacity>

            <Text style={styles.sectionHeading}>Support</Text>
            <TouchableOpacity
            title="About"
            onPress={() =>  this.props.navigation.navigate("About")}>
                    <Text style={styles.sectionSubHeading}>About Gift Flora</Text>
            </TouchableOpacity>
            <TouchableOpacity
            title="Privacy"
            onPress={() =>  this.props.navigation.navigate("Privacy")}>
                    <Text style={styles.sectionSubHeading}>Privacy and Policy</Text>
            </TouchableOpacity>
            

            <TouchableOpacity style={styles.loginButton}
            title="Login"
            onPress={() =>  this.props.navigation.navigate("Login")}>
            <Text  style={{fontSize:20 , fontWeight:'500'  , color:'#ffffff' , textAlign:"center"}} >LOGOUT</Text>
            </TouchableOpacity>
         

       
      
        </View>
    );
    }
}

const styles = StyleSheet.create({
    backButton :{
        fontSize: 20,
        marginTop: 10
    },
    container: {
        marginHorizontal: 20,
        top: Platform.OS === 'android' ? StatusBar.currentHeight : null
    },
    profileImg: {
        height: 150,
        width: 150
    },
    sectionHeading: {
        fontSize: 25,
        marginTop: 20,
        marginBottom: 5,
        color: 'gray',
      
    },
    sectionSubHeading: {
        fontSize: 20,
        marginTop: 10
       
    },
    imageContainer: {
        alignItems: 'center',
        marginTop: 30
    },
    userName: {
        fontSize: 30,
        marginTop: 20,
        fontWeight:'bold'
    },
    loginButton: {
        height: 50,
        width: 190,
        marginTop: 25,
        backgroundColor: 'crimson',
        borderRadius: 20,
        alignSelf: 'center',
        justifyContent: 'center'
    }
});
