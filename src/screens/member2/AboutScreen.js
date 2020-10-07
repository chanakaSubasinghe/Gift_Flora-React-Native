import React from 'react';
import { StyleSheet, Text, View, StatusBar, Platform } from 'react-native';
import Logo from '../../components/Logo'

export default function AboutScreen() {
    return (
        <View style={{ marginHorizontal: 20, top: Platform.OS === 'android' && StatusBar.currentHeight }}>

            {/* back button */}
            <TouchableOpacity
              title="Login"
              onPress={() =>  this.props.navigation.navigate("Login")}>
                    <Text style={{ fontSize: 20, marginTop: 10 }}> Back</Text>
            </TouchableOpacity>

            <View style={{ alignItems: 'center', marginTop: 20 }}>
                <Text style={{ fontSize: 40 , color:'#880061' }}> who we are ?</Text>

                <View style={{ alignItems: 'center', marginTop: 20 }}>
                     <Logo />
                </View>
          
                <Text style={{ marginTop: 40, fontSize: 17 }}>
                At <Text style={{fontWeight: "bold" , color:'#880061'}}> Gift Flora</Text>  you’ll discover a blessing bushel for each event. 
                Our exceptional, superb gifts are certain to inspire even the most difficult to satisfy beneficiaries. 
                On account of the assistance of our esteemed clients and item supply organizations, we have more than 
                ten years involvement in making delightfully given blessing bins filled the most magnificent and novel things from around the globe.
               </Text>

               <Text style={{ marginTop:10 , fontSize:17}} >
                Look over our wide determination of specific crates, including events, for example,  <Text style={{ color:'#880061'}}>Business Gifts, Corporate Gift Baskets, Easter, Father’s Day, Birthday, Get Well, Thank You </Text>
                and a lot more to find out and discover your ideal present for 
                that unique individual.
               </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({});
