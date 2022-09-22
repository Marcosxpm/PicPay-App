import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import pix from '../../../assets/images/pix.png';


export default function PayPix() {
    return (
        <View style={styles.container}>
            <Image source={pix} style={styles.images}/>
            <Text style={styles.container}>Fazer Pix</Text>
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
        marginRight:4,
        marginLeft: 4,
    },
    images: {
        width: 50, 
        height: 50,
        borderColor:"#f0efef",
        borderWidth: 2.5,
        borderRadius: 200/2,
    }
});