import React from 'react';
import {Ionicons} from '@expo/vector-icons';
import { View, Text, StyleSheet} from 'react-native';

export default function CardTranport() {
  return (
    <View style={styles.container}>
      <Ionicons name='bus-outline'  size={25} color='#fff' style={styles.images}/>
      <Text style={styles.text}>Cartão transporte</Text>
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
    left: 4,
    top: 20,
    width: 80,
  },

  images: {
    marginTop: 4,
    marginBottom: 4,
    right: 20,
    top: 14,
  },
});