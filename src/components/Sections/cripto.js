import React from 'react';
import {AntDesign} from '@expo/vector-icons';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function Crypto() {
  return (
    <View style={styles.container}>
      <AntDesign name='copyright'  size={25} color='#fff' style={styles.images}/>
      <Text style={styles.text}>Cripto</Text>
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
  },

  text: {
    color: '#fff',
    flex: 1,
    fontWeight: 'bold',
    right: 10,
    top: 20,
  },

  images: {
    marginTop: 4,
    marginBottom: 4,
    right: 16,
    top: 14,
  },
});