import React from "react";
import {StyleSheet,View, TextInput} from "react-native";
import {Feather} from '@expo/vector-icons';


export default function Input () {
    return (
        <View style={styles.container}>
            <TextInput style={styles.input}  placeholder="O que você está proucurando"/>
            <Feather name="search" size={22} color={'#2E8B57'} style={styles.icon} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginBottom:20,
        marginTop: 25,
    },
    input: {
        height: 45,
        flex: 1,
        backgroundColor: '#f0efef',
        paddingLeft: 50,
        borderRadius:10,
        marginHorizontal: 15,
        fontSize: 15,
        justifyContent: 'center',
        alignItems:'center',
    },
    icon: {
        position: 'absolute',
        left: 25,
        top: 12,
    }
});