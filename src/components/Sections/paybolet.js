import React from 'react';
import {Ionicons} from '@expo/vector-icons';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function PayBolet() {
  return (
    <View style={styles.container}>
      <Ionicons name='barcode-outline'  size={25} color='#fff' style={styles.images}/>
      <Text style={styles.text}>Pagar Boleto</Text>
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
    right: 12,
    top: 20,
  },

  images: {
    marginTop: 4,
    marginBottom: 4,
    right: 20,
    top: 14,
  },
});