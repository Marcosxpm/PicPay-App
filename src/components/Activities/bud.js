import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import onibus from '../../../assets/images/onibus.png';


export default function BusList() {
    return (
        <View style={styles.container}>
            <Image source={onibus} style={styles.images}/>
            <Text style={styles.container}>Ônibus</Text>
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