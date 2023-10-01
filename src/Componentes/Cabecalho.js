import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function Cabecalho() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>News API </Text>
      <Text style={styles.texto}>Notícias dos mais variados gêneros</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "purple", 
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  texto: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
});

