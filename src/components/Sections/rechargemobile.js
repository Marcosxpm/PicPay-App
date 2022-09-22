import React from 'react';
import {Octicons} from '@expo/vector-icons';
import { View, Text, StyleSheet} from 'react-native';

export default function RechargeMobile() {
  return (
    <View style={styles.container}>
      <Octicons name='device-mobile'  size={25} color='#fff' style={styles.images}/>
      <Text style={styles.text}>Recarga celula</Text>
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
    left: 5,
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