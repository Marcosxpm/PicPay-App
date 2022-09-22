import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import paybolet from '../../../assets/images/paybolet.png';


export default function BoletList() {
    return (
        <View style={styles.container}>
            <Image source={paybolet} style={styles.images}/>
            <Text style={styles.container}>Pagar Boleto</Text>
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
        borderColor:"#f0efe4",
        borderWidth: 2.5,
        borderRadius: 200/2,
    }
});