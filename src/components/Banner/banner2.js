import React from "react";
import { View, StyleSheet, Text, Image} from "react-native";
import anivesarymagalu from '../../../assets/images/anivesarymagalu.png'
import ButtonMagalu from "../ButtonMagalu";
export default function Banner2 () {
    return (
        <View style={styles.container}>
            <View style={styles.container2}>
            <Text style= {styles.Text1}> Aniversário do Magalu!</Text>
            <Text style= {styles.Text2}> Ganhe 8% de cashback</Text>
            <Text style= {styles.Text3}> com PicPay e muito mais</Text>
            <ButtonMagalu />
            </View>
            <Image source={anivesarymagalu} style={styles.Image}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "row",
        backgroundColor: "#2c7cec",
        height: 130,
        margin:10,
        borderColor: "#f0efef",
        borderRadius: 16,
        borderEndWidth: 1.4,
        borderBottomWidth: 3.5,
        borderStartWidth: 1.7,
        borderTopWidth:1.4,
    },
    container2: {
        flex:1,
        flexWrap: 'wrap',
        top: 15,
        left: 6,
    },
    Text1: {
        fontSize: 16,
        color: "#fff",
        fontWeight: 'bold',
    },
    Text2: {
        fontSize: 14,
        color: "#fff",
        fontWeight: "bold",
    },
    Text3: {
        fontSize: 14,
        color: "#fff"
    },
    Image: {
        width: 140,
        height: 140,
        right: 26,
    }
})