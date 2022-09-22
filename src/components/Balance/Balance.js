import React, {useState} from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import {Feather} from '@expo/vector-icons';

const text = (Text);

export default function Balance() {
    const [showBalance, setShowBalance] = useState(false)
    return (
        <View style={styles.container}>
            <View style={styles.areaText}>
            <Text style={styles.Text}> Saldo Conta</Text>
            <TouchableOpacity style={styles.content} onPress={() => setShowBalance(!showBalance)}>
            {showBalance ? (<Text style={styles.Text2}> R$ 266455,89</Text>) : (<Text style={styles.Text2}> R$ Oculto </Text>)}
            <View style={styles.icon}>
            {showBalance ? ( <Feather name="eye" size={25} color='#fff'/>) : ( <Feather name="eye-off" size={25} color='#fff'/>)}
            </View>
            </TouchableOpacity>
            </View>
            <View style={styles.container3}>
                 <Text style={styles.Text3}> Extrato</Text>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: "row",
        marginVertical: 10,
    },
    areaText: {
        width:"80%",
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    container3: {
        flex: 0.5,
        height: 30,
        width: 100,
        backgroundColor: "#2D5E4B",
        textAlign: 'center',
        marginTop: 10,
        borderRadius: 8,
        left: 8,
    },
    Text: {
        color: "#fff",
        flex: 1,
        position: 'absolute',
        fontSize: 16,
    },
    content: {
        color: "#fff",
        fontWeight: 'bold',
        top: 20,
        flex: 1,
        flexDirection: "row",
        alignItems: 'center'
    },
    Text2: {
        color: "#fff",
        fontWeight: 'bold',
    },
    Text3: {
        flex: 1,
        color: "#fff",
        textAlign: 'center',
        fontWeight: 'bold',
        top: 5.9,
    },
    icon: {
        flex: 1,
        color: '#fff',
        marginHorizontal: 10,
    }
});