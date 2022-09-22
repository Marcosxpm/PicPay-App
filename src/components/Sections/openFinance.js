import React from 'react';
import {FontAwesome} from '@expo/vector-icons';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function OpenFinance() {
  return (
    <View style={styles.container}>
      <FontAwesome name='bank'  size={25} color='#fff' style={styles.images}/>
      <Text style={styles.text}>Open Finance</Text>
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