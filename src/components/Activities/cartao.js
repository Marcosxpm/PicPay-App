import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import cartao from '../../../assets/images/cartao.png';


export default function CardList() {
    return (
        <View style={styles.container}>
            <Image source={cartao} style={styles.images}/>
            <Text style={styles.container}>Pedir Cartão</Text>
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