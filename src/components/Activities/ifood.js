import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import ifood from '../../../assets/images/ifood.png';


export default function Ifood() {
    return (
        <View style={styles.container}>
            <Image source={ifood} style={styles.images}/>
            <Text style={styles.container}>Ifood</Text>
            </View>
    );
}

const styles = StyleSheet.create ({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems:'center',
        color: "000",
        textAlign: 'center',
        marginRight:10,
        marginLeft: 10,
    },
    images: {
        width: 50, 
        height: 50,
        borderColor:"#f0efef",
        borderWidth: 2.5,
        borderRadius: 200/2,
    }
});