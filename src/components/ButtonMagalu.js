import React from "react";
import { View, StyleSheet, Text, } from "react-native";

export default function ButtonMagalu () {
    return (
        <View style={styles.button}>
            <Text style={styles.Text}>
                Eu quero
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: "#1f9f45",
        borderRadius: 6,
        textAlign: "center",
    },
    Text: {
        color: "#fff"
    }
});