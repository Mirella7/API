import React from 'react';
import { View, ScrollView } from 'react-native';
import { Principal } from './src/Componentes/Principal';
import { Cabecalho } from './src/Componentes/Cabecalho';
import Rodape from './src/Componentes/Rodape'; 

export default function App() {
  return (
    <>
     <View style={{ flex: 1 }}>
      <Cabecalho />
      <ScrollView > 
        <Principal />
      </ScrollView>
        <Rodape />
    </View>


    </>
  );
}





