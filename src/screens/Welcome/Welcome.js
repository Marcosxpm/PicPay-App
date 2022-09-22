import React from "react";
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from "react-native";
import background from '../../../assets/images/background.png';
import { useNavigation } from "@react-navigation/native";


export default function WelcomePage() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
           
            <ImageBackground source={background} style={styles.imageBackground} >
            <View style={styles.containerInfo}>
            <Text style={styles.Text}>Com PicPay seus pagamentos são mais simples e seguros.</Text>

            <TouchableOpacity style={styles.buttom}
            onPress={() => navigation.navigate('Login')}>
                <Text style={styles.buttomText}> Entrar Na minha conta </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttomCreateAccount}>
        <Text style={styles.buttomText2}> Criar conta</Text>
        </TouchableOpacity>
            </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
      },
      imageBackground: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: "center"

      },
      containerInfo: {
       flex: 1,
       top: '55%',
      },
      Text:{
        fontSize: 30,
        color: '#fff',
        fontWeight: 'bold',
        alignItems: 'flex-start',
        top: '5%',
      },
      buttomCreateAccount:{
        position: "absolute",
        width: '90%',
        alignSelf: 'center',
        alignItems: 'center',
        bottom: '70%'
      },
      buttomText2: {
        color: '#fff',
        fontWeight: 'bold',
      },
      buttom: {
        position: 'absolute',
        backgroundColor: '#fff',
        borderRadius: 8,
        paddingVertical: 16,
        width: '90%',
        alignSelf: 'center',
        alignItems: 'center',
        bottom: '75%',
      },
      buttomText: {
    color: "000",
    fontWeight: 'bold',
      },
});