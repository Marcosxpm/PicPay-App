import React from "react";
import { View, StyleSheet, Text, Image} from "react-native";
import banner1 from '../../../assets/images/banner1.png'
export default function Banner1 () {
    return (
        <View style={styles.container}>
            <Image source={banner1} style={styles.Image}/>
            <View style={styles.container2}>
            <Text style= {styles.Text1}> Falta Pouco! Finalize agora a</Text>
            <Text style= {styles.Text2}> solicitação do seu PicPay Card</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "row",
        backgroundColor: "#0d1612",
        height: 90,
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
        flexWrap: 'wrap',
    },
    Text1: {
        fontSize: 14,
        color: "#fff"
    },
    Text2: {
        fontSize: 14,
        color: "#fff"
    },
    Image: {
        width: 65,
        height: 65,
    }
})