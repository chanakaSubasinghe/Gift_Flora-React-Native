import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import Logo from '../../components/Logo';


export default class AboutScreen extends React.Component {

    render() {
        return (
            <>
                <View style={styles.container}>

                    {/* back button */}
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate("Menu")}>
                        <Text style={styles.backButton}>{`< Back`}</Text>
                    </TouchableOpacity>


                    <View style={styles.textContainer}>
                        <Text style={styles.mainTopic}> who we are ?</Text>

                        <View style={styles.logo}>
                            <Logo />
                        </View>

                        <Text style={styles.firstParagraph}>
                            At
                            <Text style={styles.logoText}> Gift Flora </Text>
                            you’ll discover a blessing bushel for each event.
                                Our exceptional, superb gifts are certain to inspire even the most difficult to satisfy beneficiaries.
                                On account of the assistance of our esteemed clients and item supply organizations, we have more than
                                ten years involvement in making delightfully given blessing bins filled the most magnificent and novel things from around the globe.
                        </Text>

                        <Text style={styles.secondParagraph} >
                            Look over our wide determination of specific crates, including events, for example,  <Text style={{ color: '#880061' }}>Business Gifts, Corporate Gift Baskets, Easter, Father’s Day, Birthday, Get Well, Thank You </Text>
                            and a lot more to find out and discover your ideal present for
                            that unique individual.
                        </Text>
                    </View>
                </View>
            </>
        );
    }
}

const styles = StyleSheet.create({
    backButton: {
        fontSize: 20,
        marginTop: 10
    },
    container: {
        marginHorizontal: 20,
        top: 20
    },
    firstParagraph: {
        marginTop: 40,
        fontSize: 18,
        lineHeight: 25
    },
    secondParagraph: {
        marginTop: 10,
        fontSize: 18,
        lineHeight: 25
    },
    logoText: {
        fontWeight: "bold",
        color: '#5d54a4'
    },
    textContainer: {
        alignItems: 'center',
        marginTop: 20
    },
    mainTopic: {
        fontSize: 35,
        color: '#5d54a4'
    },
    logo: {
        alignItems: 'center',
        marginTop: 20
    }
});
