import React from 'react';
import { StyleSheet, Text, View, Button, Image, Platform, StatusBar } from 'react-native';

// URLs
const profilePicture = "https://ik.imagekit.io/demo/img/smart_crop_blog/test_image_9_By_lQN-WE.jpeg?tr=w-200,h-200,fo-face:r-max";

// Section component
function Section({ heading, subheadings }) {
    return (
        <View>
            <Text style={styles.sectionHeading}>{heading}</Text>
            <Text style={styles.sectionSubHeading}>{subheadings[0]}</Text>
            <Text style={styles.sectionSubHeading}>{subheadings[1]}</Text>
            <Text style={styles.sectionSubHeading}>{subheadings[2]}</Text>
        </View>
    );
}

function LogoutButton() {
    return (
        <View style={styles.loginButton}>
            <Button title="Logout" color="white" onPress={() => console.log('logout')} />
        </View>
    );
}

export default function MenuScreen() {
    return (
        <View style={styles.container}>

            <Text style={styles.back}>{`< Back`}</Text>

            <View style={styles.imageContainer}>
                <Image source={{ uri: profilePicture }}
                    style={styles.profileImg}
                />

                <Text style={styles.userName}>Nilanthi Perera</Text>
            </View>

            <Section
                heading="My Account"
                subheadings={[
                    'Account Settings',
                    'My Addresses',
                    'Change Password'
                ]}
            />

            <Section
                heading="Support"
                subheadings={[
                    'About GiftFlora',
                    'Privacy and POlicy',
                    'Test'
                ]}
            />

            <LogoutButton />
        </View>
    );
}

const styles = StyleSheet.create({
    back: {
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
        marginTop: 30,
        marginBottom: 20,
        color: 'gray'
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
        fontSize: 40,
        marginTop: 20
    },
    loginButton: {
        height: 60,
        width: 190,
        marginTop: 35,
        backgroundColor: 'crimson',
        borderRadius: 20,
        alignSelf: 'center',
        justifyContent: 'center'
    }
});
