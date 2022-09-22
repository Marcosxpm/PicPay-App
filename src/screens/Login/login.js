import React, { SafeAreaView } from 'react-native';
import { StyleSheet, Text, StatusBar, View, TextInput, Button} from 'react-native';
import {Fontisto} from '@expo/vector-icons';
import Home from '../Home';
import { useNavigation } from "@react-navigation/native";


export default function Login() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="#278763" barStyle='light-content' />
            
            <View style={styles.TextInputLogin}>
            <TextInput placeholder='Login'/>
            <Fontisto name='email' size={25} style={styles.icon}/>
            </View>

            <TextInput placeholder='Digite sua senha' style={styles.TextInputPassword} secureTextEntry={true}/>

            <Button 
      title="Entrar" color={"#278763"}
      onPress={() => navigation.navigate('init') }
     style={styles.button}/>

        </SafeAreaView>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    TextInputLogin: {
        height: 40,
        backgroundColor: '#fff',
        width: '80%',
        marginVertical: 10,
        borderColor: 'gray',
        borderBottomWidth: 2,
        paddingLeft: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    TextInputPassword: {
        height: 40,
        backgroundColor: '#fff',
        width: '80%',
        marginVertical: 10,
        borderColor: 'gray',
        paddingLeft: 10,
        borderBottomWidth: 2,
    },
    button:{
        color: "#278763",
    },
    icon: {
       color:"#000",
       backgroundColor: '#fff',
       width: '10%',
    },
});