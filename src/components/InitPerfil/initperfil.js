import React from "react";
import { StyleSheet, View, Text,} from "react-native";
import {Ionicons, FontAwesome, Entypo} from '@expo/vector-icons';


export default function InitPerfil() {
    return (
        <View style={styles.container}>
             <Ionicons name="person-circle-sharp"  size={50} color="#fff"/>
            <View style={styles.container2}>
            <Text style={styles.Text1}> Olá</Text>
            <Text style={styles.Text2}>@dev.front</Text>
            <Entypo name="chevron-right" style={styles.icon}/>
            </View>
            <FontAwesome name="comments" size={25} color="#fff" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        margin: 15,
    },
    container2: {
        flex: 1,
    },
    Text1: {
        flex: 1,
        color: '#fff',
        top:10,
        fontSize: 14,
    },
    Text2:{
        color:"#fff",
        flex:1,
        fontSize: 14,
        fontWeight: 'bold',
    },
    icon: {
        flex:1,
        color: "#fff",
        fontSize: 20,
        fontWeight: 'bold',
        position: "absolute",
        top: 23.5,
        left:80,
    }
});