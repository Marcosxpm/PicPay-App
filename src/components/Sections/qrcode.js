import React from 'react';
import {Feather, Entypo, AntDesign, MaterialCommunityIcons} from '@expo/vector-icons';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function Qrcode() {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name='qrcode-scan'  size={25} color='#fff' style={styles.images}/>
      <Text style={styles.text}>QR Code</Text>
    </View>
  );
}


const styles = StyleSheet.create ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#2D5E4B",
    height: 95,
    width: 85,
    position: 'relative',
    borderRadius: 8,
    marginHorizontal: 10,
  },

  text: {
    color: '#fff',
    flex: 1,
    fontWeight: 'bold',
    right: 14,
    top: 20,
    width: 34,
  },

  images: {
    marginTop: 4,
    marginBottom: 4,
    right: 20,
    top: 14,
  },
});