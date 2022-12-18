import React, {Component, useState} from 'react';
import {SafeAreaView,StyleSheet,ScrollView,View,Text,Linking,StatusBar,TextInput} from 'react-native';
import{Header} from 'react-native-elements';
import {tarjeta} from './components/tarjeta/tarjeta'
import {DNI} from './components/dni'

const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P','D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', ' K', 'E', 'T'];

let texto = 'Letra'


class App extends Component {

  render() {
    return (
      <>
        <View style={styles.contenedor}>
          <DNI></DNI>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#cbcac4',
  },
  encabezado:{
   color: 'green',
   textAlign:'center',
   fontSize: 30,
   paddingTop: 100,
   paddingBottom: 50
  },
  h2:{
   color:'purple',
   textAlign:'center',
   fontSize:16,
   paddingBottom:50,
  },
  TextInput:{
   width:150,
   marginLeft: 50,
   fontSize:22
  },
  text:{
   marginTop:18,
   fontSize:22,
   textDecorationLine:'underline',
   color:'blue'
  }
});

export default App;