import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Rodape() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>513</Text>
      <Text style={styles.texto}>Rikelly e Mirella</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "purple",
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },
  texto: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
});
