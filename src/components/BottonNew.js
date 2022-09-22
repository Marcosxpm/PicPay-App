import { StyleSheet, View } from "react-native";
import {FontAwesome} from '@expo/vector-icons';


export default function BottonPay ({size}){
    return (
        <View style={styles.buttomPagar}>
            <FontAwesome name="dollar" size={size} color='#fff'/>
        </View>
    );
}
const styles = StyleSheet.create ({
    buttomPagar: {
        width: 50,
        height: 50,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 25,
        backgroundColor:'#32cd32',
        createBoxShadowValue:'#32cd32' 
    },
});