import React from "react";
import { View, StyleSheet, Text} from "react-native";
import {MaterialCommunityIcons, Feather} from '@expo/vector-icons';

export default function ContainerBanner () {
    return (
        <View style={styles.container}>
            <MaterialCommunityIcons name="label-percent" size={25} color="#4dee61" style={styles.MaterialCommunityIcons}/>
            <View style={styles.container2}>
            <Text style= {styles.Text1}> Seleção especial</Text>
            <Text style= {styles.Text2}> Promoções disponíveis</Text>
            </View>
            <Feather name="arrow-right-circle" size={25} color="#4dee61" style={styles.Feather}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: "row",
        height: 60,
        margin:10,
        borderColor: "#f0efef",
        borderRadius: 8,
        borderEndWidth: 1.4,
        borderBottomWidth: 3.5,
        borderStartWidth: 1.7,
        borderTopWidth:1.4,
    },
    container2: {
        flex:1,
    },
    Text1: {
        fontSize: 12,
        left:3,
    },
    Text2: {
        fontSize: 15,
    },
    MaterialCommunityIcons: {
        marginLeft: 5,
    },
    Feather: {
        marginRight: 10,
    },


})