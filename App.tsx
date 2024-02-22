import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, Alert } from "react-native"
import { StatusBar } from "react-native"
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';
import React from 'react';

function App(){
  return(
    <View>
      <View style={styles.cabeçalho}>
        <StatusBar barStyle="light-content" backgroundColor="black"/>
        <Image source={require('./assets/senai_logo.png')} style={styles.logo_senai}/>
        <Text style={styles.titulo}>Bem-vindo (a)</Text>
      </View>
      <View>
        <Text style={styles.body}>E-mail</Text>
        <TextInput style={styles.input} placeholder="Digite seu e-mail"/>
        <Text style={styles.body}>Senha</Text>
        <TextInput style={styles.input} placeholder="Digite sua senha" secureTextEntry/>
        <TouchableOpacity style={styles.botao}>
          <Text style={styles.acessar} onPress={() => console.log('Novo Login')}>Acessar</Text>
        </TouchableOpacity>
        <Text style={styles.cadastro} onPress={link}>Não possui conta? Cadastre-se</Text>
        
        <View style={styles.icon}>
          <TouchableOpacity onPress={() => console.log('Novo Login: Google')}>
            <AntDesign name="google" size={30} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log('Novo Login: Facebook')}>
            <FontAwesome5 name="facebook" size={30} color="black" />
          </TouchableOpacity>
        </View>
        

      </View>
    </View>
  )
}

// STYLES

const styles = StyleSheet.create({

  cabeçalho: {
    alignItems: "center",
    backgroundColor: "red",
    padding: 50,
    paddingBottom: 30,
    marginBottom: 20,
    color: "white"
  },

  logo_senai: {
    width: 200,
    height: 52,
    marginBottom: 10
  },

  titulo: {
    fontSize: 18,
    color: "white"
  },

  body:{
    margin: 20,
    marginBottom: 0,
    fontSize: 16
  },

  input: {
    margin: 20,
    width: 320,
    borderBottomColor: '#CDCDCD',
    borderBottomWidth: 1,
    paddingBottom: 10
  },

  botao: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 5,
    marginLeft: 20,
    width: 320
  },

  acessar: {
    color: 'white',
    textAlign: 'center',
  },

  cadastro: {
    color: '#4305C7',
    margin: 20,
    marginTop: 10
  },
  
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 14
  }
})

const link = () => {
  Alert.alert('Cadastre-se');
};

export default App