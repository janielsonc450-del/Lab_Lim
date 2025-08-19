import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Perfil() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Tela de Perfil</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  button: {
    padding: 12,
    backgroundColor: '#007bff',
    borderRadius: 70,
    alignItems: 'center',
    marginTop: 10,
    width: 140,
    height: 140,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
});
