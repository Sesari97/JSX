import React, {Component, useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button, ScrollView} from 'react-native';
import { IconName } from "react-icons/fa";


const estilo = "florida";
let isAdmin = true;


const modulos2Dam = [
  { nombre: 'DIN', profesor: 'Manel', horas: 120},
  { nombre: 'ADA', profesor: 'Juanmi', horas: 120},
  { nombre: 'PMDM', profesor: 'Fran', horas: 100},
  { nombre: 'PSP', profesor: 'Fran', horas: 60},
  { nombre: 'SGE', profesor: 'Belén', horas: 100},
  { nombre: 'Inglés', profesor: 'Caterina', horas: 40},
  { nombre: 'EIE', profesor: 'Manuel', horas: 60},
];




class App extends Component {
  render() {
    return (
      <ScrollView>
      <View>
        <Text>{nombre('César', 'Hernández')}</Text>
        <Text>{datos()}</Text>
        <View>
          {modulos2Dam.map((item,pos) => {
            return (<Text key={pos} style={pos%2 == 0 ? styles.modulos : styles.modulos2}>{pos+1} .- 
             {item.nombre} {'\n'} {item.profesor} {'\n'} {item.horas} horas</Text>);
          })}
        </View>
      </View>
      </ScrollView>
    );
  }
}

const nombre = (unNombre, unApellido) => {
  return (
    <View>
      <Text>
        Soy {unNombre} {unApellido}
      </Text>
    </View>
  );
};

const datos = () => {
let color = "";
estilo == 'florida' ? color = 'white' : color = 'orange';

  return (
      <View style={estilo == 'florida'? styles.florida: styles.upv}>
        <TextInput  color={color} placeholderTextColor={color} placeholder="nombre alumno" textAlign='center' />
        <TextInput color={color} placeholderTextColor= {color} placeholder="nombre modulo" textAlign='center'/>
        {isAdmin == true ? <Button color={'#6200EE'} title='Informes'></Button> : null}
      </View>
  );
};
  

const styles = StyleSheet.create({
  upv: {
    backgroundColor: 'purple',
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingLeft: 12,
    textAlign: 'right',
    width: 220,
  },
  florida: {
    backgroundColor: 'red',
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
    width: 220,

  },
  modulos: {
    backgroundColor: '#F48FB1',
    width: 220,
  },
  modulos2: {
    backgroundColor: '#F8BBD0',
    width: 220,
  },
});
export default App;