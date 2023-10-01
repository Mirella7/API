
import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text, Image, StyleSheet } from 'react-native';
import axios from 'axios';

export function Principal() {
  const [termoBusca, setTermoBusca] = useState('');

  const [resultados, setResultados] = useState([]);

  const buscarNoticias = () => {
    const apiKey = '9d7c784fecd84175b777145fcc2e6f43'; 
    const url = 'https://newsapi.org/v2/everything';
    const language = 'pt'; 

    axios.get(`${url}?q=${termoBusca}&apiKey=${apiKey}&language=${language}`)
      .then(response => {
        setResultados(response.data.articles);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite um assunto (ex: futebol)"
        onChangeText={texto => setTermoBusca(texto)}
        value={termoBusca}
      />
      <Button 
        title="Buscar Notícias"
        onPress={buscarNoticias}
        color="purple" 
      />
      <FlatList
        data={resultados}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.noticiaContainer}>
            <Text style={styles.titulo}>{item.title}</Text>
            <Text style={styles.autor}>Autor: {item.author}</Text>
            <Text style={styles.data}>Data: {item.publishedAt}</Text>
            <Image
             source={{ uri: item.urlToImage }}
             style={styles.imagem}
             resizeMode="cover"
            />

            <Text style={styles.descricao}>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 70
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    width: '100%',
    paddingHorizontal: 8,
  },
  noticiaContainer: {
    marginBottom: 20,
    width: '100%',
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  autor: {
    color: 'gray',
  },
  data: {
    color: 'gray',
  },
  imagem: {
    height: 500, 
    width: 500,
    aspectRatio: 1, 
    marginTop: 10,
  },
  
  descricao: {
    marginTop: 10,
  },
});

