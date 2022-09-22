import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Store  () {
    return (
        <View style={styles.container}>
            <Text style={styles.text}> Store</Text>
        </View>
    );
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: 'center',
    },
});