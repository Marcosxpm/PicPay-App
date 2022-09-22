import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import paystore from '../../../assets/images/paystore.png';


export default function PlayStoreList() {
    return (
        <View style={styles.container}>
            <Image source={paystore} style={styles.images}/>
            <Text style={styles.container}>PlayStore</Text>
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